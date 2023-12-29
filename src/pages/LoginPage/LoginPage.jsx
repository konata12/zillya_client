import React from 'react'

// STYLES
import styles from './LoginPage.module.scss'

// COMPONENTS
import { Link } from 'react-router-dom'
import { Button } from '../../components/button/Button'
import Input from '../../components/input/Input'

export function LoginPage() {
    return (
        <div className={styles.login}>
            <div className={styles.form_container}>
                <form>
                    <p className={styles.title}>
                        Авторизація
                    </p>
                    <Link
                        className={styles.registration_link}
                        to={'/registration'}
                    >
                        Не зареєстровані?
                    </Link>

                    <Input
                        type='text'
                        placeholder='Email'
                    />
                    <Input
                        type='text'
                        placeholder='Пароль'
                    />

                    <Link
                        className={styles.recovery_link}
                        to={'/recovery'}
                    >
                        Забули пароль?
                    </Link>

                    <Button
                        type={'submit'}
                    >
                        Перейти далі
                    </Button>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}
