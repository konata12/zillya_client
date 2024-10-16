import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from '../../../utils/axios.js';
import { useEffect } from 'react';
import { Product } from './product/Product.jsx';

// STYLES
import styles from './adminItems.module.scss'
import mainStyles from '../../styles/index.module.scss'



export function AdminItems({setClose, setEditProduct, setProductPageItem }) {
    const [items, setItems] = useState([])


    const FetchItems = async () => {
        try {
            const {data} = await Axios.get('/admin/items/');
            let newData = data.items
            newData.forEach(element => {
                try {
                    let newChoice = JSON.parse(element.choice.replace(/'/g, '"'));
                    element.choice = newChoice
                    newData.push(element)
                  } catch (error) {
                    console.error('Error parsing JSON:', error);
                  }

            });
            setItems(newData)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        FetchItems()
    }, [])
    
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <div className={mainStyles.close}
                    onClick={() => setClose(false)}
                >
                    <div className={mainStyles.line} />
                    <div className={`${mainStyles.line}`+` ${mainStyles.fstLine}`} />
                </div>
                <p className={styles.title}>Усі товари</p>
                <div className={styles.itemsWrapper}>
                    {items.map((item) => (
                        <Product product={item} setProductPageItem={setProductPageItem} setEditProduct={setEditProduct}/>
                    ))}
                </div>
            </div>
        </div>
    )
}
