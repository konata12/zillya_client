import React, { useState } from 'react'

// STYLES
import styles from './RegisterPage.module.scss'

// COMPONENTS
import { Input } from '../../components/input/Input'
import { Button } from '../../components/button/Button'
import { Link } from 'react-router-dom'

export function RegisterPage() {
    // const [name, setName] = useState('')
    // const [surname, setSurname] = useState('')
    // const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')

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
                    <Input
                        placeholder='Ім’я'
                        type='text'
                    />
                    <Input
                        placeholder='Прізвище'
                        type='text'
                    />
                    <Input
                        placeholder='Пароль'
                        type='text'
                    />
                    <Input
                        placeholder='Email'
                        type='email'
                    />

                    <p>
                        Пароль повинен містити не менше 6 символів
                    </p>
                </div>

                <Button type='submit'>
                    Зареєструватись
                </Button>
            </form>
        </div>
    )
}
