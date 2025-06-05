import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pos: 1, // 1, 2
}

export const triggerSlice = createSlice({
  name: 'trigger',
  initialState,
  reducers: {
    setPos: (state, action) => {
      state.pos = action.payload;
    },
  },
  selectors: {
    getPos: (state) => state.pos,
  }
});
