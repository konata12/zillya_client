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
    const [categoryIsActive, setCategoryIsActive] = useState(false)
    const [sortIsActive, setSortIsActive] = useState(false)

    const [categoryIsActiveAnim, setCategoryIsActiveAnim] = useState(false)
    const [sortIsActiveAnim, setSortIsActiveAnim] = useState(false)

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
                id={item._id}
                imgUrl={item.img}
                firstTitle={item.titleFstPart}
                secondTitle={item.titleScndPart}
                price={item.choice[0].price}
                discountPrice={item.discountPrice}
                discount={item.choice[0].discount}
            />
        })
    }
    const renderPagination = () => {
        if (items === undefined || items.lenght === 0) return ''
        return <Pagination />
    }

    const handleOpenFilter = ( state, setState, setAnimState ) => {
        if (state) {
            setState(false)
            setAnimState(false)
            // setHidePadding(false)
        } else {
            setState(true)
            // setHidePadding(true)
            setAnimState(true)
        }
        
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
                    <span onClick={() => handleOpenFilter(categoryIsActive, setCategoryIsActive, setCategoryIsActiveAnim)}>
                        категорію:
                    </span>
                </p>

                <p className={styles.category}>
                    <span onClick={() => handleOpenFilter(sortIsActive, setSortIsActive, setSortIsActiveAnim)}>
                        Сортувати
                    </span>
                    &#160; за:
                </p>
                <FilterContainer
                    isActive={categoryIsActive}
                    isCategoryFilter={true}
                    categoryIsActiveAnim={categoryIsActiveAnim}
                />
                <FilterContainer
                    isActive={sortIsActive}
                    isCategoryFilter={false}
                    categoryIsActiveAnim={sortIsActiveAnim}
                />
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
