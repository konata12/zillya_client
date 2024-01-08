import React from 'react'

// STYLES
import styles from './Product.module.scss'

// COMPONENTS
import { Link } from 'react-router-dom'

export function Product({ id, imgUrl, firstTitle, secondTitle, price, discountPrice }) {
    return (
        <div className={styles.product}>
            <img src={imgUrl} alt="" />
            <p className={styles.title}>
                <Link
                    to={`/product/${id}`}
                >
                    {firstTitle}
                </Link>
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
