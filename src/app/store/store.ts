// store/store.ts
import { configureStore } from '@reduxjs/toolkit';
import aloneContestantsReducer from './aloneContestantSlice';

const store = configureStore({
  reducer: {
    contestants: aloneContestantsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
