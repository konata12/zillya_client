import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, editUser } from '../../redux/auth/authSlice'
import { useForm } from 'react-hook-form'

// STYLES
import styles from './EditUserPage.module.scss'

// SERVICES
import {
    appartmentValidation,
    cityValidation,
    houseValidation,
    indexValidation,
    nameValidation,
    phoneValidation,
    streetValidation
} from './EditUserPage.servives'


export function EditUserPage() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const isAuth = useSelector(checkIsAuth)

    const onSubmit = (data) => {
        try {
            console.log(data)
            dispatch(editUser(data))
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

            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.inputs}
            >
                <input
                    className={`input`}
                    placeholder='Ім’я'
                    type="text"
                    {...register("name", {
                        validate: nameValidation
                    })}
                />
                {errors.name && (<div>{errors.name.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Прізвище'
                    type='text'
                    {...register("surname", {
                        validate: nameValidation
                    })}
                />
                {errors.surname && (<div>{errors.surname.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Номер телефону'
                    type='string'
                    {...register("phone", {
                        validate: phoneValidation
                    })}
                />
                {errors.phone && (<div>{errors.phone.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Місто'
                    type='text'
                    {...register("city", {
                        validate: cityValidation
                    })}
                />
                {errors.city && (<div>{errors.city.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Індекс'
                    type='string'
                    {...register("index", {
                        validate: indexValidation
                    })}
                />
                {errors.index && (<div>{errors.index.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Вулиця'
                    type='text'
                    {...register("street", {
                        validate: streetValidation
                    })}
                />
                {errors.street && (<div>{errors.street.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Номер будинку'
                    type='text'
                    {...register("house", {
                        validate: houseValidation
                    })}
                />
                {errors.house && (<div>{errors.house.message}</div>)}
                <input
                    className={`input`}
                    placeholder='Квартира'
                    type='text'
                    {...register("appartment", {
                        validate: appartmentValidation
                    })}
                />
                {errors.appartment && (<div>{errors.appartment.message}</div>)}

                <input
                    className='btn'
                    type="submit"
                />
            </form>
        </div>
    )
}