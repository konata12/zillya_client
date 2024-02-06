import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import cookies from 'browser-cookies';

// STYLES
import styles from './UserPage.module.scss'

// IMAGES
import alien from './../../media/images/user_icon.png'

// FUNCTIONS
import { checkIsAuth, getMe, logoutUser } from '../../redux/auth/authSlice'

export function UserPage() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const isAuth = useSelector(checkIsAuth)
    const { user, session, isLoading } = useSelector(state => state.auth)
    console.log(user, session, isLoading)

    const logoutHandler = () => {
        dispatch(logoutUser()).then(() => {
            cookies.erase('AccessToken')
            navigate('/')
            window.location.reload()
        })
    }

    const renderOrders = () => {
        return user?.orders
    }

    useEffect(() => {
        if (!isAuth) return navigate('/login')
    })
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <p className={styles.title}>
                    Особистий <span>кабінет</span>
                </p>

                <button
                    className='btn'
                    onClick={logoutHandler}
                >
                    ВИЙТИ
                </button>
            </div>

            <div className={styles.user_data}>
                <div className={styles.info}>
                    <p className={styles.info_title}>
                        Контактна інформація
                    </p>

                    <div className={styles.user}>
                        <img src={alien} alt="user" />
                        <p className={styles.name}>
                            {user?.name + ' ' + user?.surname}
                        </p>
                    </div>

                    <p className={styles.email}>
                        {user?.email}
                    </p>

                    <Link
                        to={'/user/edit'}
                        className={styles.edit}
                    >
                        Редагувати
                    </Link>
                </div>

                <div className={styles.orders}>
                    <p className={styles.orders_title}>
                        Мої замовлення
                    </p>

                    <div className={styles.orders}>
                        {
                            user?.orders.length === 0 ?
                                <p>Тут пусто</p> :
                                renderOrders()
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}