import React from 'react'

// STYLES
import styles from './BasketProduct.module.scss'


export function BasketProduct() {
    return (
        <div className={styles.container}>
            <img src="https://mangalib.me/bokutachi-no-remake/v6/c28.1?ui=277577" alt="" />
            <div>
                <p>Title</p>
                <p>subtitle</p>
            </div>
            <input type="number" />
            <p>
                price
            </p>
            <button>
                +
            </button>
        </div>
    )
}
