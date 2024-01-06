import React from 'react'

// STYLES
import styles from './Product.module.scss'

export function Product({ imgUrl, firstTitle, secondTitle, price, discountPrice }) {
    return (
        <div className={styles.product}>
            <img src={imgUrl} alt="" />
            <p className={styles.title}>
                {firstTitle}
            </p>
            <p className={styles.title_info}>
                {secondTitle}
            </p>
            <p className={styles.price}>
                {discountPrice}
            </p>
            <button className={'btn'}>
                Купити
            </button>
        </div>
    )
}
