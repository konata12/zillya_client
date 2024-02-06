import React, { useState } from 'react'

// STYLES
import styles from './LoginPage.module.scss'

// COMPONENTS
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../redux/auth/authSlice'

export function LoginPage() {
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            dispatch(loginUser({ password, email }))
            setPassword('')
            setEmail('')
            navigate('/')
        } catch (err) {
            console.log(err)
        }
    }

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

                    <input
                        className={`input`}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        type='email'
                        placeholder='Email'
                    />
                    <input
                        className={`input`}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type='password'
                        placeholder='Пароль'
                    />

                    <Link
                        className={styles.recovery_link}
                        to={'/recovery'}
                    >
                        Забули пароль?
                    </Link>

                    <button
                        onClick={handleSubmit}
                        className={`btn`}
                        type='submit'
                    >
                        Перейти далі
                    </button>
                </form>
            </div>
            <div>

            </div>
        </div>
    )
}
