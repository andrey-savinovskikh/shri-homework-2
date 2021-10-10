import { configureStore } from '@reduxjs/toolkit'

import settingsReducer from "./settingsSlice";
import historyReducer from "./historySlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    history: historyReducer
  }
})

export default store