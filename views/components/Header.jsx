/* global React FlowRouter */

import AccountsUIWrapper from './AccountsUIWrapper.jsx'

class Header extends React.Component {

  constructor (props) {
    super(props)
    this.handleHomeLink = this.handleHomeLink.bind(this)
  }

  handleHomeLink () {
    FlowRouter.go('home')
  }

  render () {
    return (
        <header>
          <h1 onClick={this.handleHomeLink}>TabMaster</h1>
          <p>{this.props.title}</p>
          <AccountsUIWrapper />
        </header>
    )
  }

}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Header
