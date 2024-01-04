import React, { useEffect, useState } from 'react'
// import Axios from '../..../utils/axios.js'


// STYLES
import styles from './addItem.module.scss'


export const AddItem = () => {
    // const [img, setImg] = useState('')
    const [titleFstPart, setTitleFstPart] = useState('')
    const [titleScndPart, setTitleScndPart] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [aboutFrstPart, setAboutFrstPart] = useState('')
    const [aboutScndPart, setAboutScndPart] = useState('')
    const [type, setType] = useState('')

    const handleSubmit = () => {

    }

  return (
    <div className={styles.container}>
      <p className={styles.title}>Додати товар</p>

      <div className={styles.inputsContainer}>
        <div className={styles.inputContainer}>
          <p>Заголовок 1</p>
          <input
            type="text"
            className={styles.input}
            value={titleFstPart}
            onChange={(e) => setTitleFstPart(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <p>Заголовок 2</p>
          <input
            type="text"
            className={styles.input}
            value={titleScndPart}
            onChange={(e) => setTitleScndPart(e.target.value)}
          />
        </div>

        <div className={styles.inputContainer}>
          <p>Підзаголовок</p>
          <input
            type="text"
            className={styles.input}
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </div>

        <div className={styles.textareaContainer}>
          <p>Підзаголовок</p>
          <textarea
            type="text"
            className={styles.input}
            value={aboutFrstPart}
            onChange={(e) => setAboutFrstPart(e.target.value)}
          />
        </div>

        <div className={styles.textareaContainer}>
          <p>Підзаголовок</p>
          <textarea
            type="text"
            className={styles.input}
            value={aboutScndPart}
            onChange={(e) => setAboutScndPart(e.target.value)}
          />
        </div>

          <div className={styles.inputInnerContainer}>
            <p>Варіація товару</p>

            <div className={styles.inputContainer}>
              <p>варіація</p>
              <input
                type="text"
                className={styles.input}
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>

            <div className={styles.inputContainer}>
              <p>ціна</p>
              <input
                type="text"
                className={styles.input}
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
              />
            </div>
        </div>

        <div
            className={styles.button}
          //   onClick={() => handleSubmit()}
          >
            <p>ввійти</p>
        </div>
      </div>

    </div>
  )
}
