import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../redux/items/itemsSlice'

// STYLES
import styles from './ShopPage.module.scss'

// COMPONENTS
import { NavLink } from 'react-router-dom'
import { Product } from '../../components/product/Product'
import { PaginationBtn } from '../../components/pagination/paginationBtn/PaginationBtn'
import { Pagination } from '../../components/pagination/Pagination'
import { FilterContainer } from '../../components/pagination/filterContainer/FilterContainer'

export function ShopPage() {
    const [categoryIsActive, setCategoryIsActive] = useState(true)
    const [sortIsActive, setSortIsActive] = useState(false)

    const dispatch = useDispatch()
    const { page, parameter, category, items, loading } = useSelector(state => state.items)
    console.log(page, parameter, category, items, loading)

    const renderItems = () => {
        return items.map(item => {
            return <Product
                key={item._id}
                imgUrl={item.img}
                firstTitle={item.titleFstPart}
                secondTitle={item.titleScndPart}
                price={item.choice[0].price}
                discountPrice={item.discountPrice}
            />
        })
    }

    useEffect(() => {
        dispatch(getItems({ page, parameter, category }))
    }, [page, parameter, category, dispatch])

    return (
        <section className={styles.container}>
            <PaginationBtn />
            <h1 className={styles.title}>
                <span>Каталог</span> товарів
            </h1>

            <div className={styles.sort}>
                <p className={styles.category}>
                    Оберіть &#160;
                    <span onClick={() => setCategoryIsActive(!categoryIsActive)}>
                        категорію:
                    </span>
                </p>

                <p className={styles.category}>
                    <span onClick={() => setSortIsActive(!sortIsActive)}>
                        Сортувати
                    </span>
                    &#160; за:
                </p>

                <div className={`${styles.category_container} ${categoryIsActive ? styles.isActive : ''}`}>
                    <FilterContainer />
                </div>

                <div className={`${styles.category_container} ${sortIsActive ? styles.isActive : ''}`}>
                    jopa
                </div>
            </div>

            {
                loading ? <p>
                    is loading
                </p> : (<div className={styles.products}>
                    {renderItems()}
                </div>)
            }

            <div className={styles.pagination}>
                <Pagination />
            </div>
        </section>
    )
}
