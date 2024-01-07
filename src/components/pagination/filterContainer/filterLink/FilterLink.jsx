import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

// STYLES
import styles from './FilterLink.module.scss'
import { paginate } from '../../../../redux/items/itemsSlice'

export function FilterLink({ children, value, isCategorylink, links }) {
    const dispatch = useDispatch()
    let { page, parameter, category } = useSelector(state => state.items)

    const clickHandler = () => {
        if (isCategorylink) {
            category = value
            dispatch(paginate({ page, parameter, category }))
        } else {
            parameter = value
            dispatch(paginate({ page, parameter, category }))
        }
    }

    // console.log(value)
    return (
        <NavLink
            to={'/shop'}
            onClick={() => clickHandler()}
            className={({ isActive }) => (
                ((isActive && isCategorylink && category === value) ||
                    (isActive && !isCategorylink && parameter === value)) ? `${styles.link} ${styles.active}` : styles.link
            )}
        >
            {children}
        </NavLink>
    )
}