import React from 'react'
import { useNavigate } from 'react-router-dom';

// STYLES
import styles from './adminLogin.module.scss'



export function AdminLogin() {
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('../admin')
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Вхід до системи адміна</p>
            <div className={styles.inputContainer}>
                <input type="text" className={styles.input} />
                <input type="text" className={styles.input} />
                <div className={styles.button}
                    onClick={() => handleLogin()}
                >
                    <p>ввійти</p>
                </div>
            </div>
        </div>
    )
}
