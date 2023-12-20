import React from 'react'

// COMPONENTS
import { Layout } from './components/Layout'
import { MainPage } from './pages/MainPage'

// EXTENSIONS
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </Layout>
    )
}

export default App
