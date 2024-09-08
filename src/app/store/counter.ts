// store/store.ts
import { configureStore } from '@reduxjs/toolkit';

// Example of a simple slice
import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;


// Configure and export the store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export default store;