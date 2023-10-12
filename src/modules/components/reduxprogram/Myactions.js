import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    myinc: (state) => {
        state.value =0
      }
  }
})

export const { increment, decrement,myinc } = counterSlice.actions

export default counterSlice.reducer