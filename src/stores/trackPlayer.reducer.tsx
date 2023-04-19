import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  initialized: false,
};

const trackPlayerSlice = createSlice({
  name: 'trackPlayer',
  initialState,
  reducers: {
    toggleInitialized: state => {
      state.initialized = !state.initialized;
    },
  },
});

export const {toggleInitialized} = trackPlayerSlice.actions;

export default trackPlayerSlice.reducer;
