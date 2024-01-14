import React, { useState } from 'react'

// styles
import styles from './addVariant.module.scss'

export const AddVariant = ({handleAddOption, setAddOptionOpen}) => {
    const [price, setPrice] = useState('')
    const [option, setOption] = useState('')
    const [discount, setDiscount] = useState('')
  return (
    <div className={styles.addVarianWrapper}>
      <div className={styles.close}
        onClick={() => setAddOptionOpen(false)}
      >
        <div className={styles.line} />
        <div className={`${styles.line}`+` ${styles.fstLine}`} />
      </div>
        <p className={styles.title}>новий варіант</p>

        <div className={styles.inputContainer}>
          <p>варіація</p>
          <input
            type="text"
            className={styles.input}
            value={option}
            onChange={(e) => setOption(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <p>ціна</p>
          <input
            type="text"
            className={styles.input}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <p>знижка</p>
          <input
            type="text"
            className={styles.input}
            value={discount}
            onChange={(e) => setDiscount(e.target.value)}
          />
        </div>

        <div className={styles.button}
            onClick={() => handleAddOption({option, price, discount})}
        >
            <p>додати</p>
        </div>

    </div>
  )
}
