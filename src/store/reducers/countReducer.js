import { INCREMENT, INCREMENTBYVALUE, DECREMENT, RESET } from '../action'
//reducer

const initialState = {
  value: 0,
}

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        value: state.value + 1,
      }
    case INCREMENTBYVALUE:
      return {
        value: state.value + action.payload,
      }
    case DECREMENT:
      return {
        value: state.value - 1,
      }

    case RESET:
      return {
        value: 0,
      }
    default:
      return state
  }
}

export default countReducer
