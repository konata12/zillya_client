import React from 'react'
import { NavLink } from 'react-router-dom'

// STYLES
import styles from './PaginationBtn.module.scss'

export function PaginationBtn() {
    return (
        <NavLink
            to={'/shop'}
            className={({ isActive }) => isActive ? styles.active : styles.btn}
        >
            3
        </NavLink>
    )
}
