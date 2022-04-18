import { INCREMENT, DECREMENT, RESET, INCREMENTBYVALUE } from './action'

//action creator
export const increment = () => {
  return { type: INCREMENT }
}
export const decrement = () => {
  return { type: DECREMENT }
}
export const reset = () => {
  return { type: RESET }
}
export const incrementByValue = (num) => {
  return { type: INCREMENTBYVALUE, payload: num }
}
