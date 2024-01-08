import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../../../redux/items/itemsSlice'

// STYLES
import styles from './PaginationBtn.module.scss'

// COMPONENTS
import { NavLink } from 'react-router-dom'

export function PaginationBtn({ pageBtn }) {
    let { page, category, parameter } = useSelector(state => state.items)
    const dispatch = useDispatch()
    // console.log(page)
    // console.log(pageBtn)

    const clickHandler = () => {
        page = pageBtn
        dispatch(paginate({ page, parameter, category }))
    }
    return (
        <NavLink
            to='/shop'
            onClick={() => clickHandler()}
            className={({ isActive }) => (isActive && pageBtn === page) ? styles.active : styles.btn}
        >
            {pageBtn}
        </NavLink>
    )
}
