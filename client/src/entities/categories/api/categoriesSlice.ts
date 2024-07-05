import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Category } from "../types/categoryType"
import CartegoryApi from "./categoriesApi";



type StateCategorys ={
    categorys: Category[] | undefined;
    loading: boolean;
    error: string | undefined; 

}


const initialState : StateCategorys ={

   categorys : undefined,
   loading:true,
   error: undefined,
}


export const categorysThunk = createAsyncThunk('load/categorys', ()=> CartegoryApi.getAllCategory)


const categoriesSlice = createSlice({
    name:'categorys',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
         .addCase(categorysThunk.fulfilled,(state, action)=>{
            state.categorys = action.payload
         })
         .addCase(categorysThunk.pending, (state)=>{
            state.loading = true
          })
         .addCase(categorysThunk.rejected, (state, action)=>{
            state.error = action.error.message;
            state.loading = false;
          })
    }
})