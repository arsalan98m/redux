import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  loading: false,
};

const ENDPOINT = 'https://star-wars-characters.glitch.me/api/search/';

// this is now an action that will dispatch an api call wait for it and then it is going to then dispatch an underground action for us under the hood that we actually use syncronously in our redux state
export const fetchCharactresFromAPI = createAsyncThunk(
  'charachers/fetchCharacters', // name of the action we are creating
  async (searchTerm) => {
    const response = await fetch(ENDPOINT + searchTerm);
    const data = await response.json();
    return data.results; // return  will recives on the payload
  }
);

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {},

  extraReducers: {
    [fetchCharactresFromAPI.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
    },

    [fetchCharactresFromAPI.pending]: (state, action) => {
      state.loading = true;
    },
  },
});

export default charactersSlice.reducer;
