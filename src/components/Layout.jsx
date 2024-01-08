import React from 'react'
import { Navbar } from './navigation/Navbar'
import { Footer } from './footer/Footer'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='container'>
                <Navbar />
                {children}
            </div>
            <Footer />
        </React.Fragment>
    )
}