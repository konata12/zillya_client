import React from 'react'
import { NavLink } from 'react-router-dom'

// STYLES
import styles from './PaginationBtn.module.scss'

export function PaginationBtn() {
    return (
        <NavLink className={({ isActive }) => isActive ? styles.active : ''}>
            PaginationBtn
        </NavLink>
    )
}
