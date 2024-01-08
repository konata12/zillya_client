import React, { useState } from 'react'
// import Axios from '../..../utils/axios.js'


// STYLES
import styles from './addItem.module.scss'
import { AddVariant } from './addVariant/AddVariant'
import Axios from '../../../utils/axios'


export const AddItem = () => {
    const [img, setImg] = useState('')
    const [titleFstPart, setTitleFstPart] = useState('')
    const [titleScndPart, setTitleScndPart] = useState('')
    const [subtitle, setSubtitle] = useState('')
    const [aboutFrstPart, setAboutFrstPart] = useState('')
    const [aboutScndPart, setAboutScndPart] = useState('')
    const [type, setType] = useState({ label: 'Вейпи', value: 'vape' })
    const [optionsArray, setOptionsArray] = useState([])

    const [showPosibleType, setShowPosibleType] = useState(true)
    const posibleType = [
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
  ]


    const [addOptionOpen, setAddOptionOpen] = useState(false)

    const handleAddOption = (newOption) => {
      setOptionsArray([...optionsArray, newOption])
      setAddOptionOpen(false)
    }

    const handleDeleteOption = (delElement) => {
      setOptionsArray(optionsArray.filter((arrayEl) => arrayEl !== delElement))
      // setAddOptionOpen(false)
    }

    const handleSubmit = async () => {
      const data = {
        img,
        titleFstPart,
        titleScndPart,
        subtitle,
        aboutFrstPart,
        aboutScndPart,
        type,
        choice: optionsArray,
      }
      try {
        const response = await Axios.post('/admin/items/item', data)
      } catch (error) {
        
      }
    }

  return (
    <div className={styles.container}>
      {addOptionOpen && <AddVariant handleAddOption={handleAddOption} setAddOptionOpen={setAddOptionOpen}/>}
      <p className={styles.title}>Додати товар</p>

      <div className={styles.inputsContainer}>

        <div className={styles.inputContainer}>
          <p>картинка</p>
          <input
            type="text"
            className={styles.input}
            value={img}
            onChange={(e) => setImg(e.target.value)}
          />
        </div>

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

        <div className={styles.dropdown}>
          <p>Тип</p>
          <div className={styles.inner}>
            {!showPosibleType ?
              <p className={styles.dropdownEl}
                onClick={() => setShowPosibleType(true)}
              >{type.label}</p>
              : 
              showPosibleType && posibleType.map((opt) => (
                <div className={styles.dropdownEl}
                  onClick={() => {
                    setShowPosibleType(false)
                    setType(opt)
                  }}
                >
                  <p>{opt.label}</p>
                </div>
              ))
            }
            
          </div>
          {/* <input
            type="text"
            className={styles.input}
            value={type}
            onChange={(e) => setType(e.target.value)}
          /> */}
        </div>

        <div className={styles.textareaContainer}>
          <p>Про товар 1</p>
          <textarea
            type="text"
            className={styles.input}
            value={aboutFrstPart}
            onChange={(e) => setAboutFrstPart(e.target.value)}
          />
        </div>

        <div className={styles.textareaContainer}>
          <p>Про товар 2</p>
          <textarea
            type="text"
            className={styles.input}
            value={aboutScndPart}
            onChange={(e) => setAboutScndPart(e.target.value)}
          />
        </div>

        <div className={styles.variantContainer}>
          <div className={styles.variantInnerContainer}>
            <p>Варіації товару</p>

            {optionsArray?.map((el) => (
              <div className={styles.optionsWrapper}
                onClick={() => handleDeleteOption(el)}
              >
                <div className={styles.optionsTop}>
                  <p>варіація</p>
                  <p>ціна</p>
                  <p>знижка</p>
                </div>
                <div className={styles.optionsBot}>
                  <p>{el.option}</p>
                  <p>{el.price}</p>
                  <p>{el.discount}</p>
                </div>
              </div>
            ))}
            
            <div className={styles.button}
              onClick={() => setAddOptionOpen(true)}
            >
              <p>додати варіацію</p>
            </div>
          </div>

        </div>

        <div
            className={styles.button}
            onClick={() => handleSubmit()}
          >
            <p>Додати товар</p>
        </div>
      </div>

    </div>
  )
}
