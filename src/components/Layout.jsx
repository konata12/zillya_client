import React from 'react'
import { Navbar } from './navigation/Navbar'

export const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='container'>
                <Navbar />
                { children }
            </div>
        </React.Fragment>
    )
}