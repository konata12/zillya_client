import React from 'react'

// STYLES
import styles from './Product.module.scss'

// COMPONENTS
import { Link } from 'react-router-dom'

export function Product({ id, imgUrl, firstTitle, secondTitle, price, discountPrice, discount }) {
    console.log(id)
    return (
        <div className={styles.product}>
            <img src={imgUrl} alt="" />
            <p className={styles.title}>
                {firstTitle}
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
            
            <Link
                className={styles.link}
                to={`/product/${id}`}
            >
                <button className={'btn'}>
                    Купити
                </button>
            </Link>

            {
                discount > 0 && <p className={styles.discount}>
                    {`-${discount}%`}
                </p>
            }
        </div>
    )
}
