/*
  globals
  ReactLayout FlowRouter
*/

import Home from '../views/pages/Home.jsx'

export default () => {

  FlowRouter.route('/', {
    action () {
      ReactLayout.render(Home, {
        title: 'Tab Master'
      })
    }
  })

}
