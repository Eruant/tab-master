/* globals Accounts*/

import router from './lib/router'
import {clientMethods} from './lib/methods'

// use usernames rather than emails
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
})

clientMethods()
router()
