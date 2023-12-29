import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { checkIsAuth, registerUser } from '../../redux/auth/authSlice'

// STYLES
import styles from './RegisterPage.module.scss'

// COMPONENTS
import { Link, useNavigate } from 'react-router-dom'

export function RegisterPage() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        try {
            console.log('anus')
            dispatch(registerUser({ name, surname, password, email }))
            setName('')
            setSurname('')
            setPassword('')
            setEmail('')
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className={styles.registration}>
            <p className={styles.title}>
                Реєстрація
            </p>

            <p className={styles.terms}>
                Ви автоматично приймаєте умови <Link to={'/'}>правил магазину</Link> і <Link to={'/'}>політики конфіденційності</Link>
            </p>

            <form onSubmit={e => e.preventDefault()}>
                <div className={styles.inputs}>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name}
                        className={`input`}
                        placeholder='Ім’я'
                        type='text'
                    />
                    <input
                        onChange={e => setSurname(e.target.value)}
                        value={surname}
                        className={`input`}
                        placeholder='Прізвище'
                        type='text'
                    />
                    <input
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                        className={`input`}
                        placeholder='Пароль'
                        type='password'
                    />
                    <input
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                        className={`input`}
                        placeholder='Email'
                        type='email'
                    />

                    <p>
                        Пароль повинен містити не менше 6 символів
                    </p>
                </div>

                <button
                    className={`btn`}
                    onClick={handleSubmit}
                    type='submit'
                >
                    Зареєструватись
                </button>
            </form>
        </div>
    )
}