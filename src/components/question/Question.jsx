import React, { useState } from 'react'

import styles from './Question.module.scss'

export default function Question({ title, text, reverse }) {
    const [questionActive, setQuestionActive] = useState(false)

    return (
        <div className={`${styles.question} ${questionActive ? styles.isActive : ''} ${reverse ? styles.reverse : ''}`}>
            <p
                className={`${styles.question_line} ${questionActive ? styles.isActive : ''}`}
                onClick={() => { setQuestionActive(!questionActive) }}
            >
                {questionActive ? '-' : '+'}
            </p>
            <p className={`${styles.question_title} ${questionActive ? styles.isActive : ''}`}>
                {title}
            </p>
            <p className={`${styles.question_main_text} ${questionActive ? styles.isActive : ''}`}>
                {text}
            </p>
        </div>
    )
}
