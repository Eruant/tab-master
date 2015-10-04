/* global React Meteor FlowRouter */

import ReactMeteorData from '../mixins/ReactMeteorData.jsx'
import {SetList} from '../../lib/collections'
import Header from '../components/Header.jsx'
import AddSetList from '../components/AddSetList.jsx'
import List from '../components/List.jsx'

class Home extends ReactMeteorData {

  getMeteorData () {
    const setListHandler = Meteor.subscribe('setList')

    return {
      setListLoading: !setListHandler.ready(),
      setList: SetList
        .find({
          createdBy: Meteor.userId()
        })
        .fetch()
    }
  }

  render () {
    let userStatus = <p>Not logged in</p>
    let setList = <p>Set list loading</p>

    if (!this.data.setListLoading) {
      const callback = (id) => {
        FlowRouter.go('setList', {
          id: id
        })
      }
      setList = <List name='Set lists' items={this.data.setList} itemCB={callback} />
    }

    return (
        <div>
          <Header title={this.props.title} />
          <AddSetList />
          {setList}
        </div>
    )
  }

}

Home.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Home
