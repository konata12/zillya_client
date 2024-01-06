import React from 'react'

// STYLES
import styles from './FilterContainer.module.scss'

import { NavLink } from 'react-router-dom'

export function FilterContainer() {
    return (
        <div className={styles.container}>
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
    )
}
