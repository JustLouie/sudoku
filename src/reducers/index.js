import * as R from 'ramda'
import { basename } from 'path'
import { combineReducers } from 'redux'

const context = require.context('../', true, /\.reducer.js$/)

const reducerFile = R.pipe(
  R.map(path => [basename(path).replace('.reducer.js', '').toLowerCase(), context(path)]),
  R.fromPairs
)(context.keys())

const reducers = R.map(R.prop('default'), reducerFile)

export default combineReducers(reducers)
