import {createSlice} from '@reduxjs/toolkit'

const historySlice = createSlice({
  name: 'settings',
  initialState: {
    history: [],
    isLoading: false
  },
  reducers: {
    setHistory: (state, action) => {
      state.history = action.payload;
    },
    addHistory: (state, action) => {
      state.history = [...state.history, ...action.payload];
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  }
})

const {actions, reducer} = historySlice;

export const {setHistory, addHistory, setIsLoading} = actions;

export default reducer;