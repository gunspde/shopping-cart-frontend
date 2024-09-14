import { configureStore } from "@reduxjs/toolkit";
import languageReducer from './languageReducer'

export const store = configureStore({
    reducer: {
       language:  languageReducer,
    }
})