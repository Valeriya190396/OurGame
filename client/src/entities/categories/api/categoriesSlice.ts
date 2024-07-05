import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../types/categoryType"
import CartegoryApi from "./categoriesApi";



type StateCategories ={
    categories: Category[] | undefined;
    loading: boolean;
    error: string | undefined; 

}


const initialState : StateCategories ={

   categories : undefined,
   loading:true,
   error: undefined,
}


export const categoriesThunk = createAsyncThunk('load/categories', ()=> CartegoryApi.getAllCategories)


const categoriesSlice = createSlice({
    name:'categories',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
         .addCase(categoriesThunk.fulfilled,(state, action)=>{
            state.categories = action.payload
         })
         .addCase(categoriesThunk.pending, (state)=>{
            state.loading = true
          })
         .addCase(categoriesThunk.rejected, (state, action)=>{
            state.error = action.error.message;
            state.loading = false;
          })
    }
})