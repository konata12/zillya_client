import React, { useState } from 'react'

// STYLES
import styles from './VerifyPage.module.scss'

// IMAGES
import weed from '../../media/images/verify_weed.png'

// COMPONENTS
import { Link } from 'react-router-dom'

export function VerifyPage() {
    const [code, setCode] = useState('')

    return (
        <div className={styles.container}>
            <div className={styles.verification}>
                <Link
                    className={styles.to_shop}
                    to={'/shop'}
                >
                    <span>{'<'}</span>&#160;<span>{' Назад'}</span>
                </Link>

                <p className={styles.info}>
                    На Вашу електронну адресу надсилається лист,
                    який дозволить вам автоматично увійти до
                    системи. Зміна пароля буде можливо після входу
                    в систему, на сторінці редагування ваших даних
                </p>

                <input
                    onChange={e => setCode(e.target.value)}
                    value={code}
                    className={`input`}
                    placeholder='Код'
                    type='text'
                    required
                />

                <p className={styles.subtext}>
                    Введіть адресу електронної пошти, яку ви вказали під час реєстрації
                </p>

                <button className='btn'>
                    Отримати пароль
                </button>
            </div>
            <div className={styles.img}>
                <img src={weed} alt="chupapi" />
            </div>
        </div>
    )
}