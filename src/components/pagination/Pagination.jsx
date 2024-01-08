import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../../redux/items/itemsSlice'

// STYLES
import styles from './Pagination.module.scss'
import { PaginationBtn } from './paginationBtn/PaginationBtn'
import { Link } from 'react-router-dom'

export function Pagination() {
    let { page, itemsNum, parameter, category } = useSelector(state => state.items)
    const lastPage = Math.ceil(itemsNum / 9)
    const dispatch = useDispatch()

    const renderButtons = () => {
        const buttons = []
        for (let i = page - 1; i <= page + 1; i++) {
            const j = page === 1 ? i + 1 :
                page === lastPage && lastPage !== 2 ? i - 1 :
                    i
            // console.log('i:', i)
            // console.log('j:', j)

            if (j > lastPage) {
                break
            }

            buttons.push(<PaginationBtn
                key={j}
                pageBtn={j}
            />)
        }
        return buttons
    }
    const previousPage = () => {
        if (page <= 1) return

        page--
        dispatch(paginate({ page, parameter, category }))
    }
    const nextPage = () => {
        if (page >= lastPage) return

        page++
        dispatch(paginate({ page, parameter, category }))
    }


    return (
        <div className={styles.container}>
            <Link
                to={'/shop'}
                onClick={() => previousPage()}
                className={styles.arrow_btn}
            >
                {'<'}
            </Link>
            {renderButtons()}
            <Link
                to={'/shop'}
                onClick={() => nextPage()}
                className={styles.arrow_btn}
            >
                {'>'}
            </Link>
        </div>
    )
}
