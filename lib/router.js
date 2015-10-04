/*
  globals
  ReactLayout FlowRouter
*/

import Home from '../views/pages/Home.jsx'
import SetList from '../views/pages/SetList.jsx'

export default () => {
  FlowRouter.route('/', {
    name: 'home',
    action () {
      ReactLayout.render(Home, {
        title: 'Home'
      })
    }
  })

  FlowRouter.route('/setlist/:id', {
    name: 'setList',
    action (params) {
      ReactLayout.render(SetList, {
        title: 'Set List'
      })
    }
  })
}
