import React from 'react'
import { useSelector } from 'react-redux'

// STYLES
import styles from './UserPage.module.scss'

export function UserPage() {
    const { user, session, isLoading } = useSelector(state => state.auth)

    console.log(user, session, isLoading)

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                Особистий <span>кабінет</span>
            </p>
            <div className={styles.info}>

            </div>
            <div className={styles.orders}>

            </div>
        </div>
    )
}