import React, { useCallback, useEffect, useState } from 'react'
import { Link, NavLink, useParams } from 'react-router-dom'
import axios from "../../utils/axios";

// STYLES
import styles from './ProductPage.module.scss'


export function ProductPage() {
    const [item, setItem] = useState(null)
    const [option, setOption] = useState(0)
    const { id } = useParams()

    const renderChoice = () => {
        console.log(item?.choice)
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

    const fetchItem = useCallback(async () => {
        const { data } = await axios.get(`/items/item/${id}`)
        setItem(data.item)
    }, [id])

    useEffect(() => {
        fetchItem()
    }, [fetchItem])

    console.log(option)
    console.log(item)
    return (
        <div className={styles.container}>
            <p className={styles.to_shop}>
                <Link
                    to={'/shop'}
                >
                    <span>{'<'}</span>&#160;<span>{' Назад'}</span>
                </Link>
            </p>

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
                            {item?.choice[option].price}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
