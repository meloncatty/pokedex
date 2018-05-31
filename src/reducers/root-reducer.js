import { combineReducers } from 'redux'
import { typesAreLoading, typesHaveErrored, typesSuccess } from './fake-reducer'

const rootReducer = combineReducers({
  typesAreLoading,
  typesHaveErrored,
  typesSuccess
})

export default rootReducer
