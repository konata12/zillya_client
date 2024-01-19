import { configureStore } from '@reduxjs/toolkit'

// SLICES
import authSlice from './auth/authSlice'
import itemsSlice from './items/itemsSlice'
import basketSlice from './basket/basketSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        items: itemsSlice,
        basket: basketSlice
    },
})