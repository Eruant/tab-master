/* globals Accounts*/

import router from './lib/router'

// use usernames rather than emails
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY'
})

router()
