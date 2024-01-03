import React, { useState } from 'react'

// STYLES
import styles from './ShopPage.module.scss'

// COMPONENTS
import { NavLink } from 'react-router-dom'
import { Product } from '../../components/product/Product'

export function ShopPage() {
    const [categoryIsActive, setCategoryIsActive] = useState(true)
    const [sortIsActive, setSortIsActive] = useState(false)

    console.log(categoryIsActive)

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

                <div className={`${styles.category_container} ${categoryIsActive ? styles.isActive : ''}`}>
                    <NavLink
                        to={`/shop/`}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Вейпи
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Спрей
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Косметика
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Таблетки
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Для тварин
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Концентрати
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Олія
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Їжа
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Напої
                    </NavLink>
                    <NavLink
                        to={'/shop'}
                        className={({ isActive }) => isActive ? styles.active : ''}
                    >
                        Пристрої
                    </NavLink>
                </div>

                <div className={`${styles.category_container} ${sortIsActive ? styles.isActive : ''}`}>
                    jopa
                </div>
            </div>

            <div className={styles.products}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className={styles.pagination}>

            </div>
        </section>
    )
}
