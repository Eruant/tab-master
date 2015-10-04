/* globals React */

import Header from '../components/Header.jsx'

class SetList extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
    }
  }

  render () {
    return (
      <div>
        <Header title={this.props.title} />
      </div>
    )
  }

}

SetList.propTypes = {
  title: React.PropTypes.string.isRequired
}

export default SetList
