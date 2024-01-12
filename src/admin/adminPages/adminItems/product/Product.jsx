import React from 'react'

// STYLES
import styles from './Product.module.scss'

export function Product({ product, setProductPageItem  }) {
    const discountPrice = product.choice[0].price - (product.choice[0].price / (100/product.choice[0].discount))
    return (
        <div className={styles.product}>
            <img src={product.img} alt="" />
            <p className={styles.title}>
                <div className={styles.link}
                    to={`/product/${product._id}`}
                >
                    {`${product.titleFstPart} ${product.titleScndPart}`}
                </div>
            </p>
            <p className={styles.title_info}>
                {product.secondTitle}
            </p>
            <div className={styles.prices}>
                {
                    product.choice[0].price !== discountPrice ? <p className={styles.price_before_discount}>
                        {`${product.choice[0].price} грн`}
                    </p> : ''
                }
                <p className={styles.price}>
                    {`${discountPrice} грн`}
                </p>
            </div>
            <button className={'btn'}
                onClick={() => setProductPageItem(product)}
            >
                Купити
            </button>

            {
                product.choice[0].discount > 0 && <p className={styles.discount}>
                    {`-${product.choice[0].discount}%`}
                </p>
            }
        </div>
    )
}
