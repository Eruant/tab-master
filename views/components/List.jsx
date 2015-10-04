/* globals React */

class List extends React.Component {

  render () {
    const {name} = this.props
    const header = (name) ? <h1>{name}</h1> : null
    const list = this.props.items.map((item, index) => {
      const cb = (this.props.itemCB) ? this.props.itemCB : false
      return (
        <div
          key={index}
          onClick={cb.bind(this, item._id)}
        >
          {item.name}
        </div>
      )
    })

    return (
      <div>
        {header}
        {list}
      </div>
    )
  }
}

List.propTypes = {
  name: React.PropTypes.string,
  items: React.PropTypes.array.isRequired,
  itemCB: React.PropTypes.func
}

export default List
