/* global React Meteor */

import Header from '../components/Header.jsx'
import ReactMeteorData from '../mixins/ReactMeteorData.jsx'

class Home extends ReactMeteorData {

  getMeteorData () {
    return {
      user: Meteor.user()
    }
  }

  render () {

    let userStatus = <p>Not logged in</p>

    if (this.data.user) {
      userStatus = <p>Logged in as {this.data.user.username}</p>
    }

    return (
        <div>
          <Header title={this.props.title} />
          {userStatus}
        </div>
    )
  }

}

Home.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Home
