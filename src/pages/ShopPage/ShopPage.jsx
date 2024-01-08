import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getItems } from '../../redux/items/itemsSlice'

// STYLES
import styles from './ShopPage.module.scss'

// COMPONENTS
import { Product } from '../../components/product/Product'
import { Pagination } from '../../components/pagination/Pagination'
import { FilterContainer } from '../../components/pagination/filterContainer/FilterContainer'
import { Loader } from '../../components/loader/Loader'

export function ShopPage() {
    const [categoryIsActive, setCategoryIsActive] = useState(true)
    const [sortIsActive, setSortIsActive] = useState(false)

    const dispatch = useDispatch()
    const { page, parameter, category, items, loading } = useSelector(state => state.items)
    console.log(page, parameter, category, items, loading)

    const renderItems = () => {
        if (items === undefined || items.lenght === 0) {
            return <div className={styles.no_products}>
                <p>Нема таких товарів</p>
            </div>
        }
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
    const renderPagination = () => {
        if (items === undefined || items.lenght === 0) return ''
        return <Pagination />
    }

    useEffect(() => {
        dispatch(getItems({ page, parameter, category }))
    }, [page, parameter, category, dispatch])

    return (
        <section className={styles.container}>
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

                <div className={styles.category_container}>
                    <FilterContainer
                        isActive={categoryIsActive}
                        isCategoryFilter={true}
                    />
                </div>

                <div className={styles.category_container}>
                    <FilterContainer
                        isActive={sortIsActive}
                        isCategoryFilter={false}
                    />
                </div>
            </div>

            <div className={styles.products}>
                {
                    loading ? <div className={styles.no_products}>
                        <Loader />
                    </div> : renderItems()
                }
            </div>

            <div className={styles.pagination}>
                {
                    loading ? '' : renderPagination()
                }
            </div>
        </section>
    )
}
