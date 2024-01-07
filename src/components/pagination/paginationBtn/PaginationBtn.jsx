import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// STYLES
import styles from './PaginationBtn.module.scss'

export function PaginationBtn() {
    const { category, parameter } = useSelector(state => state.items)
    return (
        <NavLink
            to='/shop'
            className={({ isActive }) => isActive ? styles.active : styles.btn}
        >
            3
        </NavLink>
    )
}
