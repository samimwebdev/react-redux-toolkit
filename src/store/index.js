import { Store } from '@mui/icons-material'
import { configureStore } from '@reduxjs/toolkit'
import { createStore } from 'redux'
import counterReducer from '../features/counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'
import rootReducer from './reducers'

//store (plain redux)
// const store = createStore(rootReducer)
//store (redux toolkit-life is easy)

const store = configureStore({
  reducer: {
    count: counterReducer,
    todo: todoReducer,
  },
})
export default store
