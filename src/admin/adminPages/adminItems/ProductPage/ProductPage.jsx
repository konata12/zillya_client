import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
// import axios from "../../../../utils/axios";

// STYLES
import styles from './ProductPage.module.scss'

// COMPONENTS
import { Button } from '../../../../components/button/Button';

// IMAGES
import weed from '../../../../media/images/weed.png'

export function ProductPage({ item, setProductPageItem, setEditProduct, setProduct }) {
    // const [item, setItem] = useState(null)
    console.log('====================================');
    console.log(item);
    console.log('====================================');
    const [option, setOption] = useState(0)

    const renderChoice = () => {
        console.log(item?.choice)
        const choices = item?.choice

        return choices?.map((choice, i) => {
            return <span
                key={choice?._id}
                className={`${option === i ? styles?.active : ''}`}
                onClick={() => setOption(i)}
            >
                {choice?.option}
            </span>
        })
    }

    const renderDiscountPrice = () => {
        const price = item?.choice?.[option]?.price
        const discount = item?.choice?.[option]?.discount

        const discountPrice = ((100 - discount) / 100) * price
        if (isNaN(discountPrice)) return
        return discountPrice
    }

    // const fetchItem = useCallback(async () => {
    //     const { data } = await axios.get(`/items/item/${id}`)
    //     setItem(data.item)
    // }, [id])

    // useEffect(() => {
    //     fetchItem()
    // }, [fetchItem])
    return (
        <div className={styles.container}>
            <p className={styles.to_shop}>
                {/* <Link
                    to={'/shop'}
                > */}
                <div className={styles.Link}
                    onClick={() => setProductPageItem(false)}
                >
                    <span>{'<'}</span>&#160;<span>{' Назад'}</span>
                </div>
                    
                {/* </Link> */}
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
                            {`${renderDiscountPrice()} грн`}
                        </p>
                        {
                            item?.choice?.[option]?.discount !== 0 ? <p className={styles.price_before_discount}>
                                {`${item?.choice?.[option]?.price} грн`}
                            </p> : ''
                        }
                    </div>

                    <div className={styles.buttons}
                        onClick={() => {
                            setEditProduct(item)
                            setProduct(item)
                        }}
                    >
                        <Button
                            onClick={() => console.log(item)}
                        >
                            Змінити товар
                        </Button>
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
