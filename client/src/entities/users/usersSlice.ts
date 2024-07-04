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


export const registrationThink = createAsyncThunk('registration/user', (body:UserWithoutIdwithPassword) => UserApi.registration(body))

export const authorizationThink = createAsyncThunk('authorization/user', (body:UserWithoutName) => UserApi.authorization(body))

export const refreshTokens = createAsyncThunk('refreshTokens/user', () => UserApi.refreshTokens())

export const logoutThinks = createAsyncThunk('logout/user', () => UserApi.logout())


const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (bilder) => {
        bilder
        .addCase(registrationThink.fulfilled, (state, action) => {
            state.user = action.payload.user
            state.accessToken = action.payload.accessToken;
            state.loading = false;
            state.error = undefined
        }).addCase(registrationThink.pending, (state) => {
            state.loading = true
        }).addCase(registrationThink.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        }).addCase(authorizationThink.fulfilled, (state, action) => {
            state.user = action.payload.user;
            state.accessToken = action.payload.accessToken;
            state.loading = false;
            state.error = undefined;
        }).addCase(authorizationThink.pending, (state) => {
            state.loading = true
        }).addCase(authorizationThink.rejected, (state, action) => {
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
        }).addCase(logoutThinks.fulfilled, (state) => {
            state.user = undefined;
            state.accessToken = undefined
        }).addCase(logoutThinks.pending, (state) => {
            state.loading = true
        }).addCase(logoutThinks.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export default authSlice