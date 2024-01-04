import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from '../../../utils/axios.js';
import { useEffect } from 'react';

// STYLES
import styles from './adminItems.module.scss'
import { Product } from './product/Product.jsx';



export function AdminItems() {
    const [items, setItems] = useState([])


    const FetchItems = async () => {
        try {
            const {data} = await Axios.get('/items/');
            let newData = data.items
            console.log(data.items);
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
            <p className={styles.title}>Усі товари</p>
            <div className={styles.itemsWrapper}>
                {items.map((item) => (
                   <Product product={item} />
                ))}
            </div>
            {/*
            <div className={styles.itemsContainer}>
                <input type="text" className={styles.input} />
                <input type="text" className={styles.input} />
                <div className={styles.button}
                    onClick={() => handleLogin()}
                >
                    <p>ввійти</p>
                </div>
            </div> */}
        </div>
    )
}
