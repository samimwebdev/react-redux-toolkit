import { Store } from '@mui/icons-material'
import { createStore } from 'redux'
import rootReducer from './reducers'

//store
const store = createStore(rootReducer)

export default store
