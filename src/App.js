import React from 'react'

// COMPONENTS
import { Layout } from './components/Layout'

// EXTENSIONS
import { Route, Routes } from 'react-router-dom'

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/'/>
            </Routes>
        </Layout>
    )
}

export default App
