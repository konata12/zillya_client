import React, { useEffect, useState } from 'react'
import { AdminItems } from '../adminPages/adminItems/AdminItems'
import { useDispatch, useSelector } from 'react-redux';
import { checkIsStaff, getMe } from '../../redux/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { Clients } from '../adminPages/adminClients/clients/Clients';
import { AddItem } from '../adminPages/adminAddItem/AddItem';
import { ProductPage } from '../adminPages/adminItems/ProductPage/ProductPage'

// STYLES
import styles from './adminMain.module.scss'

export function AdminMain() {
    const [adminItemsOpened, setAdminItemsOpened] = useState(false)
    const [product, setProduct] = useState()
    const [adminItem, setAdminItem] = useState(false)
    const [addItemOpened, setAddItemOpened] = useState(false)
    const [adminClientsOpened, setAdminClientsOpened] = useState(false)
    const [editProduct, setEditProduct] = useState(false)
    const [productPageItem, setProductPageItem] = useState(false)
    // const [product, setProduct] = useState()
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

    useEffect(() => {
        console.log('====================================');
        console.log(editProduct);
        console.log('====================================')
        if (editProduct) {
            setAddItemOpened(true)
            setProductPageItem(false)
        }
    }, [editProduct]);

    // useEffect(() => {
    //     if (editProduct) {
    //         setAddItemOpened(true)
    //     }
    // }, [editProduct]);

    
    if (productPageItem) {
        return (
            <div className={styles.container}>
                <ProductPage item={productPageItem} setProductPageItem={setProductPageItem} setEditProduct={setEditProduct} setProduct={setProduct}/>
            </div>
        )
    }

    if (addItemOpened) {
        return (
            <AddItem setClose={setAddItemOpened} editProduct={editProduct} setProductPageItem={setProductPageItem} setProduct={setProduct} product={product}/> 
        )
    }

    if (adminItemsOpened) {
        return (
            <AdminItems setClose={setAdminItemsOpened} setEditProduct={setEditProduct} setProductPageItem={setProductPageItem} setProduct={setProduct}/> 
        )
    }

    if (adminClientsOpened) {
        return (
            <Clients setClose={setAdminClientsOpened}/> 
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
                        <div className={styles.button}
                            onClick={() => setAddItemOpened(true)}
                        ><p>ДОДАТИ ТОВАР</p></div>
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
