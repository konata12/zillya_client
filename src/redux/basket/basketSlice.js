import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import axios from "../../utils/axios";

const initialState = {
    items: Boolean(JSON.parse(window.sessionStorage.getItem('basketItems'))) === false ? [] :
        JSON.parse(window.sessionStorage.getItem('basketItems')),
    totalPrice: 0
}

// REDUCERS

export const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addItems(state, action) {
            // IF ITEM IS IN BASKET DON'T PUSH TO ARRAY JUST ADD QUANTITY
            if (state.items.find(item => current(item.item) === action.payload.item)) {
                const item = state.items.find(item => current(item.item) === action.payload.item)
                state.items[state.items.indexOf(item)].quantity += +action.payload.quantity

                window.sessionStorage.setItem('basketItems', JSON.stringify(state.items))
                return
            }

            // IF ADDING A NEW ITEM TO BASKET
            const item = action.payload.item
            const quantity = action.payload.quantity
            state.items.push({ item, quantity })
            console.log(current(state.items))

            window.sessionStorage.setItem('basketItems', JSON.stringify(state.items))
        }
    }
})

export const { addItems } = basketSlice.actions
export default basketSlice.reducer