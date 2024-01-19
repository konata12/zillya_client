import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    items: [],
    totalPrice: 0
}

// REDUCERS

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItems(state, action) {
            const item = action.payload.item
            const quantity = action.payload.quantity
            state.items.push({ item, quantity })

            window.localStorage.setItem('basketItems', state.items)
        }
    }
})

export default basketSlice.reducer