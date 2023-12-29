import React, { useState } from 'react'

// STYLES
import styles from './Input.module.scss'

export function Input({ type, placeholder }) {
    const [value, setValue] = useState('')
    console.log(value)

    return (
        <input
            onChange={e => setValue(e.target.value)}
            value={value}
            className={styles.input}
            type={type}
            placeholder={placeholder}
        />
    )
}
