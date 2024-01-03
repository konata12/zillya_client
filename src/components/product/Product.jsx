import React from 'react'

// STYLES
import styles from './Product.module.scss'

export function Product() {
    return (
        <div className={styles.product}>
            <img src="image 3.jpg" alt="" />
            <p className={styles.title}>
                CBD Vape Juice (30ml)
            </p>
            <p className={styles.title_info}>
                Blue Raspberry
            </p>
            <p className={styles.price}>
                4013 грн
            </p>
            <button className={'btn'}>
                Купити
            </button>
        </div>
    )
}
