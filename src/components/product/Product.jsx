import React from 'react'

// STYLES
import styles from './Product.module.scss'

// COMPONENTS
import { Link } from 'react-router-dom'

export function Product({ id, imgUrl, firstTitle, secondTitle, price, discountPrice, discount }) {
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
            <div className={styles.prices}>
                {
                    price !== discountPrice ? <p className={styles.price_before_discount}>
                        {`${price} грн`}
                    </p> : ''
                }
                <p className={styles.price}>
                    {`${discountPrice} грн`}
                </p>
            </div>
            <button className={'btn'}>
                Купити
            </button>

            {
                discount > 0 && <p className={styles.discount}>
                    {`-${discount}%`}
                </p>
            }
        </div>
    )
}
