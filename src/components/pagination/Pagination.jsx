import React from 'react'
import { useSelector } from 'react-redux'

// STYLES
import styles from './Pagination.module.scss'

export function Pagination() {
    const { page, itemsNum } = useSelector(state => state.items)

    const renderButtons = () => {

    }
    return (
        <div className={styles.container}>

        </div>
    )
}
