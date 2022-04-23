import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getAllTodos = createAsyncThunk(
  'todo/getAll',
  async (data, thunkAPI) => {
    try {
      const res = await axios.get('https://jsonplaceholder.typicode.com/todos/')
      return res.data
    } catch (err) {
      return thunkAPI.rejectWithValue('Failed to get Todos')
    }
  }
)

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  todos: null,
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = action.payload
      })
      .addCase(getAllTodos.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.todos = null
        state.isError = true
        state.message = action.payload
      })
  },
})

export const {} = todoSlice.actions

export default todoSlice.reducer
