import {configureStore} from '@reduxjs/toolkit'
import newsSlice from "./slice/news"

export const store= configureStore({
    reducer:{
        fetchNews: newsSlice,
    }
})