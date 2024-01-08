import React from 'react'

// STYLES
import styles from './FilterContainer.module.scss'

import { FilterLink } from './filterLink/FilterLink'


export function FilterContainer({ isActive, isCategoryFilter }) {
    const links = isCategoryFilter ? [
        { label: 'Всі товари', value: 'all' },
        { label: 'Вейпи', value: 'vape' },
        { label: 'Спрей', value: 'spray' },
        { label: 'Косметика', value: 'cosmetic' },
        { label: 'Таблетки', value: 'tablets' },
        { label: 'Для тварин', value: 'pets' },
        { label: 'Концентрати', value: 'concentrates' },
        { label: 'Олія', value: 'oil' },
        { label: 'Їжа', value: 'food' },
        { label: 'Напої', value: 'drinks' },
        { label: 'Пристрої', value: 'devices' },
    ] : [
        { label: 'По замовчуванню', value: 'default' },
        { label: 'Назвою (А-Я)', value: '+title' },
        { label: 'Назвою (Я-А)', value: '-title' },
        { label: 'Ціною (низька-висока)', value: '+price' },
        { label: 'Ціною (висока-низька)', value: '-price' },
    ]


    const renderLinks = () => {
        return links.map((link, i) => {
            return <FilterLink
                value={link.value}
                isCategorylink={isCategoryFilter}
                links={links}
                key={i}
            >
                {link.label}
            </FilterLink>
        })
    }

    return (
        <div className={`${styles.container} ${isActive ? styles.isActive : ''}`}>
            {renderLinks()}
        </div>
    )
}
