import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/authSlice'
import itemsSlice from './items/itemsSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        items: itemsSlice
    },
})