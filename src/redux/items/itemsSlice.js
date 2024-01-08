import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    items: [],
    itemsNum: 0,
    page: 1,
    parameter: 'default',
    category: 'all',
    loading: false,
    status: null
}

// REDUCERS
export const getItems = createAsyncThunk(
    'items/getMe',
    async ({ page, parameter, category }) => {
        try {
            parameter = parameter[0] ? parameter.replace(/\+/g, '%2B') : parameter
            parameter = parameter ? '&parameter=' + parameter :
                ''
            category = category ? '&category=' + category :
                ''
            page = page ? '&page=' + page :
                ''
            // console.log(parameter)
            // console.log(category)
            // console.log(page)

            const apiUrl = `/items/shop?${page}${category}${parameter}`

            const { data } = await axios.get(apiUrl)

            console.log(data)
            return data
        } catch (error) {
            Error(error.response.data.message)
            console.log(error.response.data.message)
        }
    }
)

export const getItem = createAsyncThunk(
    'items/getMe',
    async ({ id }) => {
        try {
            const apiUrl = `/items/item/${id}`

            const { data } = await axios.get(apiUrl)

            console.log(data)
            return data
        } catch (error) {
            Error(error.response.data.message)
            console.log(error.response.data.message)
        }
    }
)

export const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        paginate(state, action) {
            state.category = action.payload.category
            state.parameter = action.payload.parameter
            state.page = action.payload.page
        }
    },
    extraReducers(builder) {
        builder
            // GET ITEMS
            .addCase(getItems.pending, (state) => {
                state.loading = true
                state.status = null
            })
            .addCase(getItems.fulfilled, (state, action) => {
                state.loading = false
                state.status = action.payload?.status
                state.items = action.payload?.items
                state.itemsNum = action.payload?.itemsNum
            })
            .addCase(getItems.rejected, (state, action) => {
                state.loading = false
                state.status = action.payload?.status
            })

            // GET ITEM BY ID
            // .addCase(getItems.pending, (state) => {
            //     state.loading = true
            //     state.status = null
            // })
            // .addCase(getItems.fulfilled, (state, action) => {
            //     state.loading = false
            //     state.status = action.payload?.status
            //     state.items = action.payload?.items
            //     state.itemsNum = action.payload?.itemsNum
            // })
            // .addCase(getItems.rejected, (state, action) => {
            //     state.loading = false
            //     state.status = action.payload?.status
            // })
    }
})

export const { paginate } = itemsSlice.actions
export default itemsSlice.reducer