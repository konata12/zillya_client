import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Axios from '../../../utils/axios.js';
import { useEffect } from 'react';

// STYLES
import styles from './adminItems.module.scss'



export function AdminItems() {
    const [items, setItems] = useState([])


    const FetchItems = async () => {
        try {
            const {data} = await Axios.get('/items/');
            let newData = data.items
            newData.forEach(element => {
                let newChoice = JSON.parse(element.choice.replace(/'/g, '"'))
                element.choice = newChoice
                newData.push(element)
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
                    <div className={styles.item}>
                        <img src={item.img} alt="" />
                        <p><span>{item.titleFstPart}</span><span>{item.titleScndPart}</span></p>
                        <p>{item.subtitle}</p>
                        <p>{item.choice[0].price}</p>
                    </div>
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