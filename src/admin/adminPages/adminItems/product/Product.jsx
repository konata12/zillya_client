import React from 'react'

// STYLES
import styles from './Product.module.scss'

export function Product({ product }) {
    console.log(product);
    return (
        <div className={styles.product}>
            <img src={product.img} alt="" />
            <p className={styles.title}>
                {product.titleFstPart+product.titleScndPart}
            </p>
            <p className={styles.title_info}>
                {product.subtitle}
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
