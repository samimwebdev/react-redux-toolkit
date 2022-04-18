import { combineReducers } from 'redux'
import countReducer from './countReducer'

//combine Reducer
const rootReducer = combineReducers({
  count: countReducer,
  anotherValue: 30,
})
export default rootReducer
