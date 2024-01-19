import React from 'react'
import { useSelector } from 'react-redux'

// STYLES
import styles from './BasketPage.module.scss'

export function BasketPage() {
    const { items, total } = useSelector(state => state.basket)
    console.log(items, total)

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                Корзина
            </p>

            <div className={styles.items}>

            </div>

            <div className={styles.next_step}>
                <div className={styles.info}>
                    <p className={styles.price}>
                        Сума: <span>4013 грн</span>
                    </p>
                    <p className={styles.promo}>
                        Маєте промокод?
                    </p>
                </div>

                <button className='btn'>
                    Перейти далі
                </button>
            </div>
        </div>
    )
}
