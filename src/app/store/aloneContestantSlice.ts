// store/contestantsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the type for a contestant
interface Contestant {
  name: string;
  fishCaught: number;
  firesStarted: number;
  berriesGathered: number;
  bigGame: number;
  smallGame: number;
}

// Define the initial state using the sample data
const initialState: Contestant[] = [
  { name: 'John Doe', fishCaught: 0, firesStarted: 0, berriesGathered: 0, bigGame: 0, smallGame: 0 },
  { name: 'Jane Smith', fishCaught: 0, firesStarted: 0, berriesGathered: 0, bigGame: 0, smallGame: 0 },
  { name: 'Alice Johnson', fishCaught: 0, firesStarted: 0, berriesGathered: 0, bigGame: 0, smallGame: 0 },
];

// Define the slice
const contestantsSlice = createSlice({
  name: 'contestants',
  initialState,
  reducers: {
    updateCount: (
      state,
      action: PayloadAction<{ index: number; field: keyof Contestant; value: number }>
    ) => {
      const { index, field, value } = action.payload;
      (state[index][field] as number) = value; // Type assertion to inform TypeScript
    },
  },
});

// Export actions
export const { updateCount } = contestantsSlice.actions;

// Export reducer
export default contestantsSlice.reducer;
