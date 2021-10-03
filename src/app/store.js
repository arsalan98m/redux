import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from '../feature/charactersSlice';

export const store = configureStore({
  reducer: {
    characters: charactersReducer,
  },
});
