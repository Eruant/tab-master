/* globals React Meteor Tracker Package */

class MeteorDataManager {

  constructor (component) {
    this.component = component
    this.computation = null
    this.oldData = null
  }

  dispose () {
    if (this.computation) {
      this.computation.stop()
      this.computation = null
    }
  }

  calculateData () {
    const component = this.component
    // const {props, state} = component

    if (!component.getMeteorData) {
      return null
    }

    // don't user Tracker on the server
    if (Meteor.isServer) {
      return component.getMeteorData()
    }

    if (this.computation) {
      this.computation.stop()
      this.computation = null
    }

    let data

    this.computation = Tracker.nonreactive(() => {
      return Tracker.autorun((c) => {
        if (c.firstRun) {
          const savedSetState = component.setState
          try {
            component.setState = () => {
              throw new Error(`
                Can't call \`setState\` inside \`getMeteorData\` as this could cause an endless
                loop. To respond to Meteor data changing, consider making this component
                a "wrapper component" that only fetches data and passes it in as props to
                a child component. Then you can use \`componentWillReceiveProps\` in that
                child component.
              `)
            }

            data = component.getMeteorData()
          } finally {
            component.setState = savedSetState
          }
        } else {
          c.stop()
          component.forceUpdate()
        }
      })
    })

    if (Package.mongo && Package.mongo.Mongo) {
      Object.keys(data).forEach((key) => {
        if (data[key] instanceof Package.mongo.Mongo.Cursor) {
          console.warn(`
            Warning: you are returning a Mongo cursor form getMeteorData. This value
            will not be reactive. You probably want to call \`.fetch()\` on the cursor
            before returning it
          `)
        }
      })
    }

    return data
  }

  updateData (newData) {
    const component = this.component
    const oldData = this.oldData

    if (!(newData && (typeof newData) === 'object')) {
      throw new Error(`Expected object returned from getMeteorData`)
    }

    for (let key in newData) {
      component.data[key] = newData[key]
    }

    if (oldData) {
      for (let key in oldData) {
        if (!(key in newData)) {
          delete component.data[key]
        }
      }
    }

    this.oldData = newData
  }

}

class ReactMeteorData extends React.Component {

  componentWillMount () {
    this.data = {}
    this._meteorDataManager = new MeteorDataManager(this)
    const newData = this._meteorDataManager.calculateData()
    this._meteorDataManager.updateData(newData)
  }

  componentWillUpdate (nextProps, nextState) {
    const saveProps = this.props
    const saveState = this.state

    let newData

    try {
      this.props = nextProps
      this.state = nextState
      newData = this._meteorDataManager.calculateData()
    } finally {
      this.props = saveProps
      this.state = saveState
    }

    this._meteorDataManager.updateData(newData)
  }

  componentWillUnmount () {
    this._meteorDataManager.dispose()
  }
}

export default ReactMeteorData
