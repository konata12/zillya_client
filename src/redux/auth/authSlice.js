import { createAsyncThunk, createSlice, rejectWithValue } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import cookies from 'browser-cookies';

const initialState = {
    user: null,
    userActivated: false,
    session: null,
    staff: false,

    isLoading: false,
    message: null,
}

// REDUCERS
export const verificateUser = createAsyncThunk(
    'auth/verificateUser',
    async ({ name, surname, password, email }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post('/users/', {
                name,
                surname,
                password,
                email
            })

            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)

export const loginUser = createAsyncThunk(
    'auth/loginUser',
    async ({ password, email }, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/users/login`, {
                password,
                email
            })

            console.log('login')
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (id, { rejectWithValue }) => {
        console.log('register')
        try {
            const { data } = await axios.get(`users/register/${id}`)

            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)

// AUTO LOGIN IF ACCESS TOKEN IS IN COOKIES AND DOESN'T EXPIRED
export const getMe = createAsyncThunk(
    'auth/getMe',
    async (dupa, { rejectWithValue }) => {
        console.log('get session')
        try {
            const { data } = await axios.get(`/users/user`)

            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
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
            state.staff = false
        }
    },
    extraReducers(builder) {
        builder
            // VERIFY USER EMAIL
            .addCase(verificateUser.pending, (state) => {
                state.staff = false

                state.isLoading = true
                state.message = null
            })
            .addCase(verificateUser.fulfilled, (state, action) => {
                console.log(action.payload)

                state.isLoading = false
                state.message = action.payload?.message
            })
            .addCase(verificateUser.rejected, (state, action) => {
                console.log(action.payload)
                state.staff = false

                state.isLoading = false
                state.message = action.payload?.message
            })

            // LOGIN
            .addCase(loginUser.pending, (state) => {
                state.staff = false

                state.isLoading = true
                state.message = null
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.isLoading = false
                state.message = action.payload?.message
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action.payload)
                state.staff = false

                state.isLoading = false
                state.message = action.payload?.message
            })

            // REGISTER
            .addCase(registerUser.pending, (state) => {
                state.staff = false

                state.isLoading = true
                state.message = null
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.staff = false

                state.isLoading = false
                state.message = action.payload?.message
            })
            .addCase(registerUser.rejected, (state, action) => {
                console.log(action.payload)
                state.staff = false

                state.isLoading = false
                state.message = action.payload?.message
            })

            // GET ME
            .addCase(getMe.pending, (state) => {
                state.staff = false

                state.isLoading = true
                state.message = null
            })
            .addCase(getMe.fulfilled, (state, action) => {
                console.log(action.payload)
                state.user = action.payload?.user
                state.session = action.payload?.session

                state.isLoading = false
                state.message = action.payload?.message
            })
            .addCase(getMe.rejected, (state, action) => {
                console.log(action.payload)
                state.staff = false

                state.isLoading = false
                state.message = action.payload?.message
            })
    }
})

export const checkIsAuth = () => Boolean(cookies.get('AccessToken'))
export const checkIsStaff = (state) => Boolean(state.auth?.staff)

export const { logout } = authSlice.actions
export default authSlice.reducer