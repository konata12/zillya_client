import React from 'react'
import { useSelector } from 'react-redux'

// STYLES
import styles from './BasketPage.module.scss'
import { BasketProduct } from '../../components/basketProduct/BasketProduct'

export function BasketPage() {
    const { basket } = useSelector(state => state.auth)
    console.log(basket)

    const totalPrice = basket?.products.reduce((totalPrice, product) => {
        const quantity = product.quantity
        const choice = product?.product.choice.find((choice) => {
            return choice._id === product.product.choiceId
        })
        const price = ((100 - choice.discount) / 100) * choice.price
        console.log(quantity, price, choice)

        return totalPrice + (quantity * price)
    }, 0)

    console.log(totalPrice)

    return (
        <div className={styles.container}>
            <p className={styles.title}>
                Корзина
            </p>

            <div className={styles.items}>
                <BasketProduct />
            </div>

            <div className={styles.next_step}>
                <div className={styles.info}>
                    <p className={styles.price}>
                        Сума: <span>{totalPrice}</span>
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
