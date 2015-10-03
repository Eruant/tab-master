/* global React */

import AccountsUIWrapper from './AccountsUIWrapper.jsx'

class Header extends React.Component {

  render () {
    return (
        <header>
          <h1>{this.props.title}</h1>
          <AccountsUIWrapper />
        </header>
    )
  }

}

Header.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default Header
