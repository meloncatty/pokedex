import { combineReducers } from 'redux'
import {
    typesAreLoading,
    typesHaveErrored,
    typesSuccess,
    categorizedSuccess,
    categorizedIsLoading,
    categorizedHasErrored } from './fake-reducer'

const rootReducer = combineReducers({
  typesAreLoading,
  typesHaveErrored,
  typesSuccess,
  categorizedSuccess,
  categorizedIsLoading,
  categorizedHasErrored
})

export default rootReducer
