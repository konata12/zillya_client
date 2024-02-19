import React, { useCallback, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from "../../utils/axios";

// STYLES
import styles from './ProductPage.module.scss'

// COMPONENTS
import { Button } from '../../components/button/Button';

// IMAGES
import weed from '../../media/images/weed.png'

// FUNCS
import { addItemToBasket } from '../../redux/auth/authSlice';

export function ProductPage() {
    const [item, setItem] = useState(null)
    const [option, setOption] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const { id } = useParams()
    const dispatch = useDispatch()

    const renderChoice = () => {
        const choices = item?.choice

        return choices?.map((choice, i) => {
            return <span
                key={choice._id}
                className={`${option === i ? styles.active : ''}`}
                onClick={() => setOption(i)}
            >
                {choice.option}
            </span>
        })
    }

    const renderDiscountPrice = () => {
        const price = item?.choice[option].price
        const discount = item?.choice[option].discount

        const discountPrice = ((100 - discount) / 100) * price
        if (isNaN(discountPrice)) return
        return discountPrice
    }

    const defineQuantityValue = () => {
        if (quantity.length === 0) return 1
        if (quantity.length >= 4) return +quantity.slice(1, 4)

        return +quantity
    }

    const quantityOnChange = (e) => {
        if (e.target.value[0] === '-') return
        setQuantity(e.target.value)
    }

    const addToBasket = () => {
        const itemChoice = item.choice[option]
        dispatch(addItemToBasket({ itemChoice, quantity }))
    }

    const fetchItem = useCallback(async () => {
        const { data } = await axios.get(`/items/item/${id}`)
        setItem(data.item)
    }, [id])

    useEffect(() => {
        fetchItem()
    }, [fetchItem])

    return (
        <div className={styles.container}>
            <Link
                className={styles.to_shop}
                to={'/shop'}
            >
                <span>{'<'}</span>&#160;<span>{' Назад'}</span>
            </Link>

            <div className={styles.product}>
                <div className={styles.img}>
                    <div className={styles.border}></div>
                    <div className={styles.img_container}>
                        <img src={item?.img} alt="product" />
                    </div>
                </div>
                <div className={styles.info}>
                    <p className={styles.title}>
                        <span>{item?.titleFstPart}</span> {item?.titleScndPart}
                    </p>
                    <p className={styles.subtitle}>
                        {item?.subtitle}
                    </p>
                    <div className={styles.choice}>
                        {renderChoice()}
                    </div>
                    {/* <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul> */}

                    <div className={styles.prices}>
                        <p className={styles.price}>
                            {`${renderDiscountPrice()} грн`}
                        </p>
                        {
                            item?.choice[option].discount !== 0 ? <p className={styles.price_before_discount}>
                                {`${item?.choice[option].price} грн`}
                            </p> : ''
                        }

                        <div className={styles.quantity}>
                            <button
                                className={styles.decrement}
                                onClick={() => {
                                    if ((+quantity - 1) <= 0) return
                                    setQuantity(+quantity - 1)
                                }}
                            >
                                {'<'}
                            </button>
                            <input
                                type="number"
                                value={defineQuantityValue()}
                                onChange={e => quantityOnChange(e)}
                            />
                            <button
                                className={styles.increment}
                                onClick={() => {
                                    if ((+quantity + 1) >= 1000) return
                                    setQuantity(+quantity + 1)
                                }}
                            >
                                {'>'}
                            </button>
                        </div>
                    </div>

                    <div className={styles.buttons}>
                        <button
                            className={'btn'}
                            onClick={addToBasket}
                        >
                            Додати в корзину
                        </button>
                    </div>
                </div>
            </div>

            <div className={styles.about}>
                <div className={styles.info}>
                    <p className={styles.title}>
                        <span>Про</span> товар:
                    </p>
                    <p className={styles.first}>
                        {item?.aboutFrstPart}
                    </p>
                    <p className={styles.second}>
                        {item?.aboutScndPart}
                    </p>
                </div>
                <div className={styles.img}>
                    <img src={weed} alt="weed" />
                </div>
            </div>
        </div>
    )
}
