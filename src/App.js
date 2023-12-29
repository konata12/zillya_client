import React from 'react'

// COMPONENTS
import { Layout } from './components/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import { BacketPage } from './pages/BacketPage'
import { LoginPage } from './pages/LoginPage/LoginPage'

// ADMIN COMPONENTS
import { AdminLogin } from './admin/admin_login/AdminLogin'
import { AdminMain } from './admin/adminMain/AdminMain'

// EXTENSIONS
import { Route, Routes } from 'react-router-dom'
import { ShopPage } from './pages/ShopPage'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/bucket' element={<BacketPage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/login' element={<LoginPage />} />
                <Route path='/admin_login' element={<AdminLogin />} />
                <Route path='/admin' element={<AdminMain />} />
            </Routes>
        </Layout>
    )
}

export default App
