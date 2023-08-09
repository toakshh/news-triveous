import {configureStore} from '@reduxjs/toolkit'
import newsSlice from "./slice/news"
import authSlice from './slice/authSlice'

export const store= configureStore({
    reducer:{
        fetchNews: newsSlice,
        auth: authSlice,
    }
})