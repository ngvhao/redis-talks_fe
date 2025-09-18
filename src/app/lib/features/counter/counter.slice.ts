import { createSlice } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initState: CounterState = {
  value: 0
}

export const counterSlice = createSlice({
  name: "counterSlice",
  initialState: initState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { increment, decrement } = counterSlice.actions
export default counterSlice.reducer