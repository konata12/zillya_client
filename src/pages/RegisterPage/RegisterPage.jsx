import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { verificateUser } from '../../redux/auth/authSlice'
import { useForm } from "react-hook-form"

// STYLES
import styles from './RegisterPage.module.scss'

// SERVICES
import { passwordValidation, nameValidation } from './RegisterPage.services'

// COMPONENTS
import { Link, useNavigate } from 'react-router-dom'

export function RegisterPage() {
    const [message, setMessage] = useState('')
    const dispatch = useDispatch()
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        try {
            const { name, surname, password, email } = data
            dispatch(verificateUser({ name, surname, password, email }))
                .then((res) => setMessage(res.payload.message))
        } catch (err) {
            console.log(err)
        }
    }

    console.log(message)
    return (
        <div className={styles.registration}>
            <p className={styles.title}>
                Реєстрація
            </p>

            <p className={styles.terms}>
                Ви автоматично приймаєте умови <Link to={'/'}>правил магазину</Link> і <Link to={'/'}>політики конфіденційності</Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputs}>
                    <input
                        className='input'
                        type='string'
                        placeholder="Ім'я"
                        {...register("name", {
                            required: "name required",
                            validate: nameValidation
                        })}
                    />
                    {errors.name && (<div>{errors.name.message}</div>)}
                    <input
                        className='input'
                        type='string'
                        placeholder="Прізвище"
                        {...register("surname", {
                            required: "surmane required",
                            validate: nameValidation
                        })}
                    />
                    {errors.surname && (<div>{errors.surname.message}</div>)}
                    <input
                        className='input'
                        type="password"
                        placeholder="Пароль"
                        {...register("password", {
                            required: "password required",
                            validate: passwordValidation
                        })}
                    />
                    {errors.password && (<div>{errors.password.message}</div>)}
                    <input
                        className='input'
                        type="email"
                        placeholder="Електронна пошта"
                        {...register("email", {
                            required: 'email required'
                        })}
                    />
                    {errors.email && (<div>{errors.email.message}</div>)}
                </div>
                <input
                    className='btn'
                    type="submit"
                    value='Зареєструватись'
                />

                {message && (<div>{message}</div>)}
            </form>
        </div>
    )
}
