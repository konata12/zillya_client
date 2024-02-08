import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth } from '../../redux/auth/authSlice'
import { useForm } from 'react-hook-form'

// STYLES
import styles from './EditUserPage.module.scss'

// SERVICES


export function EditUserPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const isAuth = useSelector(checkIsAuth)

    const onSubmit = () => {
        try {
            dispatch()
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        if (!isAuth) return navigate('/login')
    })
    return (
        <div className={styles.container}>
            <p className={styles.title}>
                <span>Редагування</span> інформації
            </p>

            <form className={styles.inputs}>
                <input
                    className={`input`}
                    placeholder='Ім’я'
                    type="text"
                />
                <input
                    className={`input`}
                    placeholder='Прізвище'
                    type='text'
                />
                <input
                    className={`input`}
                    placeholder='Номер телефону'
                    type='number'
                />
                <input
                    className={`input`}
                    placeholder='Місто'
                    type='text'
                />
                <input
                    className={`input`}
                    placeholder='Індекс'
                    type='number'
                />
                <input
                    className={`input`}
                    placeholder='Вулиця'
                    type='text'
                />
                <input
                    className={`input`}
                    placeholder='Номер будинку'
                    type='number'
                />
                <input
                    className={`input`}
                    placeholder='Квартира'
                    type='number'
                />

                <input type="submit" />
            </form>
        </div>
    )
}