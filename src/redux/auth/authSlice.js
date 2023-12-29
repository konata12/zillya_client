import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    status: null,
}

// REDUCERS
export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async ({ name, surname, password, email }) => {
        console.log(name)
        console.log(surname)
        console.log(password)
        console.log(email)
        try {
            const { data } = await axios.post('/users/user', {
                name,
                surname,
                password,
                email
            })

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
)

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
    },
    extraReducers(builder) {
        builder
            // REGISTER
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true
                state.status = null
            })
            .addCase(registerUser.fulfilled, (state,action) => {
                state.isLoading = false
                state.user = action.payload.newUser
            })
            .addCase(registerUser.rejected, (state) => {
                console.log(3)
            })
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer