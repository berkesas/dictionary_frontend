import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './features/dictionary/searchSlice';

export default configureStore({
  reducer: {
    search: searchReducer,
  },
})