import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { triggerSlice } from './slice/trigger';

export const setupStore = () => configureStore({
  reducer: combineSlices(triggerSlice),
});
