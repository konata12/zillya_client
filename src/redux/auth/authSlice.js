import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    user: {
        name: 'sasha'
    },
    token: 1234,
    isLoading: false,
    status: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null
            state.token = null
            state.isLoading = false
            state.status = null
        }
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer