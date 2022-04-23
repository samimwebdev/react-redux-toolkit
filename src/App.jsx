//store (From where you manage data)
//Reducer (function that mainupupalte or result ultimate data )
//dispatching(raising) action or event (click, hover, scroll)
//action creator - function that is used to raise an event or  create a action or event

// component - dispatch action creator - Real action - Reducer - store
//store (component access )

//store
//reducer
//action creator
//action
import { lazy, Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  increment,
  decrement,
  incrementByValue,
  reset,
} from './features/counter/counterSlice'
import { getAllTodos } from './features/todo/todoSlice'
//plain redux
// import { increment, decrement, reset } from './store/actionCreator'

//Redux toolkit

// store.subscribe(() => console.log(store.getState()))

// //raising event or action
// store.dispatch(increment())
// store.dispatch(incrementByValue(10))
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(reset())

function App() {
  const count = useSelector((state) => state.count)
  const todos = useSelector((state) => state.todo)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllTodos())
  }, [])

  return (
    <>
      <p> {count.value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(incrementByValue(10))}>
        IncrementByValue
      </button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  )
}

export default App
