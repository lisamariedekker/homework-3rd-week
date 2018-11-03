import { combineReducers } from 'redux'
import models from './models'
import selectModel from './selectModel'

export default combineReducers({
  models,
  selectModel
})