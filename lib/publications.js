/* globals Meteor*/

import {SetList, Songs} from './collections'

const publications = () => {
  Meteor.publish('setList', function () {
    return SetList.find({
      createdBy: this.userId
    })
  })

  Meteor.publish('songs', () => Songs.find())
}

export default publications
