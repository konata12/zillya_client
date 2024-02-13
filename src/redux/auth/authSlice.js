import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";
import cookies from 'browser-cookies';

const initialState = {
    user: null,
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

// LOGIN
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

// LOGOUT
export const logoutUser = createAsyncThunk(
    'auth/logoutUser',
    async (dupa, { rejectWithValue }) => {
        try {
            const { data } = await axios.post(`/users/logout`)

            console.log('logout')
            console.log(data)
            return data
        } catch (error) {
            console.log(error)
            return rejectWithValue(error.response.data)
        }
    }
)

// REGISTER
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

// EDIT USER DATA
export const editUser = createAsyncThunk(
    'auth/editUser',
    async (user, { rejectWithValue }) => {
        console.log('get edit user')
        try {
            const {
                name,
                surname,
                phone,
                city,
                index,
                street,
                house,
                appartment
            } = user

            console.log({...user})

            const { data } = await axios.patch(`/users/user/edit`, {
                name,
                surname,
                phone,
                city,
                index,
                street,
                house,
                appartment
            })

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
    reducers: {},
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
                state.user = action.payload?.user
                state.session = action.payload?.session
                state.message = action.payload?.message
            })
            .addCase(loginUser.rejected, (state, action) => {
                console.log(action.payload)
                state.staff = false

                state.isLoading = false
                state.message = action.payload?.message
            })

            // LOGOUT
            .addCase(logoutUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.user = null
                state.session = null
                state.isLoading = false
                state.status = null
                state.staff = false
            })
            .addCase(logoutUser.rejected, (state, action) => {
                console.log(action.payload)
                state.user = null
                state.session = null
                state.isLoading = false
                state.status = null
                state.staff = false
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
                state.user = action.payload?.user

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

            // EDIT USER
            .addCase(editUser.pending, (state) => {
                state.staff = false

                state.isLoading = true
                state.message = null
            })
            .addCase(editUser.fulfilled, (state, action) => {
                console.log(action.payload)
                state.user = action.payload?.user
                // state.session = action.payload?.session

                state.isLoading = false
                state.message = action.payload?.message
            })
            .addCase(editUser.rejected, (state, action) => {
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