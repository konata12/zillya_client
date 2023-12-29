import React from 'react'

import styles from './Button.module.scss'

export function Button({ children, type }) {
    return (<button
        className={styles.btn}
        type={type}
    >
        {children}
    </button>
    )
}
