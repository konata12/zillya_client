import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth } from '../../redux/auth/authSlice'

// STYLES
import styles from './EditUserPage.module.scss'

export function EditUserPage() {
    const [name, setName] = useState('')
    const [surname, setSurname] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [index, setIndex] = useState('')
    const [street, setStreet] = useState('')
    const [house, setHouse] = useState('')
    const [appartment, setAppartment] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const isAuth = useSelector(checkIsAuth)

    const validateBigFirstLetter = () => {

    }

    const handleSubmit = () => {
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

            <div className={styles.inputs}>
                <input
                    onChange={e => setName(e.target.value)}
                    value={name}
                    type="text"
                    className={`input`}
                    placeholder='Ім’я'
                />
                <input
                    onChange={e => setSurname(e.target.value)}
                    value={surname}
                    className={`input`}
                    placeholder='Прізвище'
                    type='text'
                />
                <input
                    onChange={e => setPhone(e.target.value)}
                    value={phone}
                    className={`input`}
                    placeholder='Номер телефону'
                    type='number'
                />
                <input
                    onChange={e => setCity(e.target.value)}
                    value={city}
                    className={`input`}
                    placeholder='Місто'
                    type='text'
                />
                <input
                    onChange={e => setIndex(e.target.value)}
                    value={index}
                    className={`input`}
                    placeholder='Індекс'
                    type='number'
                />
                <input
                    onChange={e => setStreet(e.target.value)}
                    value={street}
                    className={`input`}
                    placeholder='Вулиця'
                    type='text'
                />
                <input
                    onChange={e => setHouse(e.target.value)}
                    value={house}
                    className={`input`}
                    placeholder='Номер будинку'
                    type='number'
                />
                <input
                    onChange={e => setAppartment(e.target.value)}
                    value={appartment}
                    className={`input`}
                    placeholder='Квартира'
                    type='number'
                />
            </div>
        </div>
    )
}