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
            const { data } = await axios.post('/users/', {
                name,
                surname,
                password,
                email
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ password, email }) => {
        try {
            console.log({ password, email })
            const { data } = await axios.post(`/users/${email}`, {
                password,
                email
            })

            if (data.token) {
                window.localStorage.setItem('token', data.token)
            }

            console.log(data)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

// AUTO LOGIN IF TOKEN IS IN LOCAL STORAGE
export const getMe = createAsyncThunk(
    'auth/getMe',
    async () => {
        try {
            const { data } = await axios.get(`/users/user`)

            console.log(data)
            return data
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
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.user = action.payload.newUser
                state.token = action.payload.token

                console.log(state.user)
                console.log(state.token)
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false
                state.status = action.payload.status

                console.log(state.status)
            })

            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.isLoading = true
                state.status = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.status = action.payload.status
                state.user = action.payload.user
                state.token = action.payload.token

                console.log(state.user)
                console.log(state.token)
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isLoading = false
                state.status = action.payload.status

                console.log(state.status)
            })

            // GET ME
            .addCase(getMe.pending, (state) => {
                state.isLoading = true
                state.status = null
            })
            .addCase(getMe.fulfilled, (state, action) => {
                state.isLoading = false
                state.status = action.payload?.status
                state.user = action.payload.user
                state.token = action.payload.token

                console.log(state.user)
                console.log(state.token)
            })
            .addCase(getMe.rejected, (state, action) => {
                state.isLoading = false
                state.status = action.payload?.status

                console.log(state.status)
            })
    }
})

export const checkIsAuth = (state) => Boolean(state.auth.token)

export const { logout } = authSlice.actions
export default authSlice.reducer