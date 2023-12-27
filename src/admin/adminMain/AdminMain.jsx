import React from 'react'

// STYLES
import styles from './adminMain.module.scss'


export function AdminMain() {

    return (
        <div className={styles.container}>
            <p className={styles.title}>Головна адміна</p>
            <div className={styles.innerAdminContainer}>

                <div className={styles.innerContainer}>
                    <p className={styles.subtitle}>
                        головні
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}><p>ЗАМОВЛЕННЯ</p></div>
                        <div className={styles.button}><p>СТАТИСТИКА</p></div>
                    </div>
                </div>

                <div className={styles.innerContainer}>
                    <p className={styles.subtitle}>
                        товари
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}><p>УСІ ТОВАРИ</p></div>
                        <div className={styles.button}><p>ДОДАТИ ТОВАР</p></div>
                    </div>
                </div>

                <div className={styles.innerContainer}>
                    <p className={styles.subtitle}>
                        користувачі
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}><p>УСІ КЛІЄНТИ</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
