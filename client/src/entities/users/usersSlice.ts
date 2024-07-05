import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User, UserWithoutIdwithPassword, UserWithoutName } from "./types/userTypes";
import UserApi from "./api/userApi";



type initType ={
    user: User | undefined;
    accessToken: undefined | string;
    error: undefined | string;
    loading: boolean;
}


const initialState:initType = {
    user: undefined,
    accessToken: undefined,
    error: undefined,
    loading: true,
}


export const registrationThunk = createAsyncThunk('registration/user', (body:UserWithoutIdwithPassword) => UserApi.registration(body))

export const authorizationThunk = createAsyncThunk('authorization/user', (body:UserWithoutName) => UserApi.authorization(body))

export const refreshTokens = createAsyncThunk('refreshTokens/user', () => UserApi.refreshTokens())

export const logoutThunk = createAsyncThunk('logout/user', () => UserApi.logout())


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (bilder) => {
        bilder
        .addCase(registrationThunk.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken;
            state.loading = false;
            state.error = undefined
        }).addCase(registrationThunk.pending, (state) => {
            state.loading = true
        }).addCase(registrationThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }).addCase(authorizationThunk.fulfilled, (state, action) => {
            console.log(action.payload.user);
            state.user = action.payload.user;
            console.log(action.payload.accessToken);
            state.accessToken = action.payload.accessToken;
            state.loading = false;
            state.error = undefined;
        }).addCase(authorizationThunk.pending, (state) => {
            state.loading = true
        }).addCase(authorizationThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }).addCase(refreshTokens.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken
        }).addCase(refreshTokens.pending, (state) => {
            state.loading = true
        }).addCase(refreshTokens.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }).addCase(logoutThunk.fulfilled, (state) => {
            state.user = undefined;
            state.accessToken = undefined
        }).addCase(logoutThunk.pending, (state) => {
            state.loading = true
        }).addCase(logoutThunk.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default authSlice