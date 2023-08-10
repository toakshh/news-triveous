import {createSlice} from "@reduxjs/toolkit"


const newsSlice= createSlice({
    name:'fetchNews',
    initialState:{
        newsData: JSON.parse(localStorage.getItem('newsData')) || null, //to store localstorage data if localstorage data is truthy
        loading: false,
        error: null,
    },
    reducers:{
        fetchNewsStart(state){
            state.loading= true;
        },
        fetchNewsSuccess(state,action){
            state.loading= false;
            state.newsData=action.payload;
            state.error= null;

            //storing data in localStorage in oreder to fetche it in offline mode
            localStorage.setItem("newsData", JSON.stringify(action.payload));
        },
        fetchNewsError(state,action){
            state.loading= false;
            state.error= action.payload;
            
        }
    }
});

export const {fetchNewsStart,fetchNewsSuccess,fetchNewsError}= newsSlice.actions;

export default newsSlice.reducer;