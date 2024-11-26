import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0, // the states will be here ,will be added in the object and its keys
  },
  reducers: {
    // the actions will be created in arrow fun
    increment: (state) => {
      state.count++
    },
    decrement: (state) => {
      state.count--
    },
    reset: (state) => {
      return { ...state, count: 0 }
    }, // we cant cahnge value direct we make copy of the object and and change its key
    incrementAmount:(state,action)=>{
        state.count+=action.payload

    }
  }
});

export const { increment, decrement, reset ,incrementAmount} = counterSlice.actions; // the actions are used because the reducers are stored in the object counterSlice and its key action

export default counterSlice.reducer; // this reducer and above one are not same the above actions output will be stored in this reducer
