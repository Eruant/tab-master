/* globals React Meteor */

class AddSetList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      active: false,
      name: ''
    }

    this.activateForm = this.activateForm.bind(this)
    this.submitForm = this.submitForm.bind(this)
    this.setName = this.setName.bind(this)
  }

  activateForm () {
    this.setState({
      active: true
    })
  }

  setName (event) {
    this.setState({
      name: event.target.value
    })
  }

  submitForm (event) {
    event.preventDefault()

    Meteor.call('createSetList', this.state.name, (error, result) => {
      if (error) {
        console.warn(error)
        return
      }

      this.setState({
        active: false,
        name: ''
      })
    })
  }

  render () {
    if (this.state.active) {
      return (
        <form onSubmit={this.submitForm}>
          <input
            type='text'
            value={this.state.name}
            placeholder='Set list name'
            onChange={this.setName}
          />
          <input type='submit' />
        </form>
      )
    }

    return (
      <button onClick={this.activateForm}>Add Playlist</button>
    )
  }

}

export default AddSetList
