import React, { useEffect, useState } from 'react'
import { AddVariant } from './addVariant/AddVariant'
import { Product } from '../adminItems/product/Product.jsx'
import Axios from '../../../utils/axios'


// STYLES
import styles from './addItem.module.scss'
import mainStyles from '../../styles/index.module.scss'


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

export const AddItem = ({ setClose, editProduct, setProductPageItem, setProduct, product }) => {

  console.log(product);
  console.log('product');
  

  // const [id, setId] = useState(product?._id)
  const productId = editProduct?._id ? editProduct?._id : product?._id 
  const [img, setImg] = useState(product?.img)
  const [titleFstPart, setTitleFstPart] = useState(product?.titleFstPart)
  const [titleScndPart, setTitleScndPart] = useState(product?.titleScndPart)
  const [subtitle, setSubtitle] = useState(product?.subtitle)
  const [aboutFrstPart, setAboutFrstPart] = useState(product?.aboutFrstPart)
  const [aboutScndPart, setAboutScndPart] = useState(product?.aboutScndPart)
  const [optionsArray, setOptionsArray] = useState(product?.choice)
  const [showPosibleType, setShowPosibleType] = useState(false)
  const [type, setType] = useState()

  const [addOptionOpen, setAddOptionOpen] = useState(false)

  const handleAddOption = (newOption) => {
    setOptionsArray([...optionsArray, newOption])
    setAddOptionOpen(false)
  }

  const handleDeleteOption = (delElement) => {
    setOptionsArray(optionsArray.filter((arrayEl) => arrayEl !== delElement))
  }

  const handleSubmit = async () => {
    if (editProduct) {
      const data = {
        _id: productId,
        img,
        titleFstPart,
        titleScndPart,
        subtitle,
        aboutFrstPart,
        aboutScndPart,
        type: type.value,
        choice: optionsArray,
      }
      try {
        const response = await Axios.patch(`/admin/items/item/:${productId}`, data)
      } catch (error) {
        console.log(error);
      }
    }else{
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
        console.log(error);
      }
    }
    
  }

  useEffect(() => {
    posibleType.forEach((el) => {
      if (el.value == editProduct.type) setType(el)
    })
  }, [])

  useEffect(() => {
    let updatedProduct = {

    }
    setProduct({img, titleFstPart, titleScndPart, subtitle, aboutFrstPart, aboutScndPart, choice: optionsArray, type})
  }, [img, titleFstPart, titleScndPart, subtitle, aboutFrstPart, aboutScndPart, optionsArray, type])
    

  return (
    <div className={styles.container}>
      
      <div className={styles.innerContainer}>
        <div className={mainStyles.close}
          onClick={() => setClose(false)}
        >
          <div className={mainStyles.line} />
          <div className={`${mainStyles.line}`+` ${mainStyles.fstLine}`} />
        </div>

          <div className={styles.fstPart}>
            <Product product={product} addItem={true}/>
            <div className={styles.button}
              onClick={() => setProductPageItem(product)}
            >
              <p>Перегляд</p>
            </div>
          </div>

          <div className={styles.part}>
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
                    >{type?.label}</p>
                    : 
                    showPosibleType && posibleType.map((opt) => (
                      <div className={styles.dropdownEl}
                        onClick={() => {
                          setShowPosibleType(false)
                          setType(opt)
                        }}
                      >
                        <p>{opt?.label}</p>
                      </div>
                    ))
                  }
                  
                </div>
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

      </div>

    </div>
  )
}
