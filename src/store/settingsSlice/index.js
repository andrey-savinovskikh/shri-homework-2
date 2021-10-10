import {createSlice} from '@reduxjs/toolkit'

const settingsSlice = createSlice({
  name: 'settings',
  initialState: {
    repository: "",
    isLoading: false,
    error: ""
  },
  reducers: {
    setRepository: (state, action) => {
      state.repository = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  }
})

const {actions, reducer} = settingsSlice;

export const {setRepository, setIsLoading, setError} = actions;

export default reducer;