import React from 'react'

import styles from './Button.module.scss'

export function Button({ children }) {
    return (<button
        className={styles.btn}
    >
        {children}
    </button>
    )
}
