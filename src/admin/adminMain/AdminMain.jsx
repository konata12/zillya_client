import React, { useEffect, useState } from 'react'
import { AdminItems } from '../adminPages/adminItems/AdminItems'
import { useDispatch, useSelector } from 'react-redux';
import { checkIsStaff, getMe } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';

// STYLES
import styles from './adminMain.module.scss'
import { Clients } from '../adminPages/adminClients/clients/Clients';


export function AdminMain() {
    const [adminItemsOpened, setAdminItemsOpened] = useState(false)
    const [adminClientsOpened, setAdminClientsOpened] = useState(false)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isStaff = useSelector(checkIsStaff);  

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if (!isStaff) {
          navigate('../admin_login');
        }
    }, []);

    if (adminItemsOpened) {
        return (
            <AdminItems /> 
        )
    }

    if (adminClientsOpened) {
        return (
            <Clients /> 
        )
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Головна адміна</p>
            <div className={styles.innerAdminContainer}>

                <div className={styles.innerContainer}>
                    <p className={styles.subtitle}>
                        головні
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}
                        ><p>ЗАМОВЛЕННЯ</p></div>
                        <div className={styles.button}><p>СТАТИСТИКА</p></div>
                    </div>
                </div>

                <div className={styles.innerContainer}>
                    <p className={styles.subtitle}>
                        товари
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}
                            onClick={() => setAdminItemsOpened(true)}
                        ><p>УСІ ТОВАРИ</p></div>
                        <div className={styles.button}><p>ДОДАТИ ТОВАР</p></div>
                    </div>
                </div>

                <div className={styles.innerContainer}>
                    <p className={styles.subtitle}>
                        користувачі
                    </p>
                    <div className={styles.buttonsContainer}>
                        <div className={styles.button}
                             onClick={() => setAdminClientsOpened(true)}
                        ><p>УСІ КЛІЄНТИ</p></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
