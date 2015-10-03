/* globals Mongo */

const SetList = new Mongo.Collection('setList')
const Songs = new Mongo.Collection('songs')

export default {
  SetList: SetList,
  Songs: Songs
}
