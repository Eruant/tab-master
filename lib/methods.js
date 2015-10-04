/* globals Meteor */

import {SetList} from './collections'
import moment from 'moment'

const clientMethods = () => {
}

const serverMethods = () => {
  Meteor.methods({
    createSetList (name) {
      if (!name) {
        throw new Meteor.Error('No name supplied')
      }

      const user = Meteor.user()

      if (!user) {
        throw new Meteor.Error('No user logged in')
      }

      SetList.insert({
        name: name,
        state: 'draft',
        createdBy: user._id,
        createdAt: moment().format()
      })
    }
  })
}

export default {
  clientMethods: clientMethods,
  serverMethods: serverMethods
}
