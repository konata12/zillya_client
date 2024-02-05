import React, { useEffect } from 'react'

// COMPONENTS
import { Layout } from './components/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import { BasketPage } from './pages/BasketPage/BasketPage'
import { ShopPage } from './pages/ShopPage/ShopPage'
import { ProductPage } from './pages/ProductPage/ProductPage'
import { LoginPage } from './pages/LoginPage/LoginPage'
import { RegisterPage } from './pages/RegisterPage/RegisterPage'
import { UserPage } from './pages/UserPage/UserPage'
import { EditUserPage } from './pages/EditUserPage/EditUserPage'
import { VerifyPage } from './pages/VerifyPage/VerifyPage'
import { VerificatingPage } from './pages/VerificatingPage/VerificatingPage'


// ADMIN COMPONENTS
import { AdminLogin } from './admin/admin_login/AdminLogin'
import { AdminMain } from './admin/adminMain/AdminMain'

// EXTENSIONS
import { Route, Routes } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getMe } from './redux/auth/authSlice'

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getMe())
    }, [dispatch])

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/basket' element={<BasketPage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/product/:id' element={<ProductPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/registration' element={<RegisterPage />} />
                <Route path='/verify' element={<VerifyPage />} />
                <Route path='/user' element={<UserPage />} />
                <Route path='/user/edit' element={<EditUserPage />} />
                <Route path='/verificate/:id' element={<VerificatingPage />} />
                <Route path='/admin_login' element={<AdminLogin />} />
                <Route path='/admin' element={<AdminMain />} />
            </Routes>
        </Layout>
    )
}

export default App
