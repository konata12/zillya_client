import React from 'react'

// COMPONENTS
import { Layout } from './components/Layout'
import { MainPage } from './pages/MainPage/MainPage'
import { BacketPage } from './pages/BacketPage'

// EXTENSIONS
import { Route, Routes } from 'react-router-dom'
import { ShopPage } from './pages/ShopPage'
import { LoginPage } from './pages/LoginPage'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='/bucket' element={<BacketPage />} />
                <Route path='/shop' element={<ShopPage />} />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </Layout>
    )
}

export default App
