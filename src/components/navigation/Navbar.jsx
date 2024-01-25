import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'

// STYLES
import styles from './NavBar.module.scss'

// IMAGES
import logo from '../../media/images/logo.svg'
import bucket from '../../media/images/bucket.svg'
import alien from '../../media/images/auth.svg'
import { useDispatch, useSelector } from 'react-redux'
import { checkIsAuth, logout } from '../../redux/auth/authSlice'

export function Navbar() {
    const isAuth = useSelector(checkIsAuth)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const logoutHandler = () => {
        dispatch(logout())
        window.localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <div className={styles.container}>
            <div className={styles.img}>
                <Link
                    to={'/'}
                >
                    <img src={logo} alt="zillya" />
                </Link>
            </div>

            <ul className={styles.navigation}>
                <li>
                    <NavLink
                        to={'/'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        головна
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        магазин
                    </NavLink>
                </li>
            </ul>

            <div className={styles.user}>
                <Link to={'/basket'}>
                    <img src={bucket} alt="bucket img" />
                </Link>
                {
                    isAuth ? (<Link
                        className={styles.exit}
                        to={'/user'}
                    >
                        <img src={alien} alt="user" />
                    </Link>) : (<Link
                        to={'/login'}
                        className={styles.login}
                    >
                        <img src={alien} alt="user" />
                    </Link>)
                }
            </div>
        </div>
    )
}
