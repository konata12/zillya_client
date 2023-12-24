import React from 'react'

// STYLES
import styles from './MainPage.module.scss'
// import '../../styles/_variables.scss'

// COMPONENTS
import { Button } from '../../components/button/Button'
import { Link } from 'react-router-dom'
import Select from 'react-select'

// IMAGES
import alienOne from '../../media/images/alien_1.png'
import alienTwo from '../../media/images/alien_2.png'
import alienThree from '../../media/images/alien_3.png'

export function MainPage() {

    // STYLES
    const selectStyles = {
        color: '#000'
    }

    return (
        <div className={styles.page}>
            <h1>
                Чарівний <span>CBD:</span> легально,
                корисно та ефективно
            </h1>

            <div className={styles.definition}>
                <p>
                    CBD (canna-bi-diol, англ.), КБД (кана-бі
                    -діол) — корисна природна речовина з
                    канабісу (Cannabis sativa).
                </p>

                <Link
                    className='df'
                    to={'/shop'}
                >
                    <Button>
                        Одразу до покупки
                    </Button>
                </Link>
            </div>

            <section className={styles.about}>
                <p className={styles.section_title} >
                    Вона <span>допомагає</span>:
                </p>

                <div className={styles.effects}>
                    <div className={styles.effect}>
                        <p className={styles.title}>
                            Боротися з депресією
                        </p>
                        <p className={styles.number}>
                            01
                        </p>
                        <img src={alienOne} alt="" />
                    </div>
                    <div className={styles.effect}>
                        <p className={styles.title}>
                            Покращити якість сну
                        </p>
                        <p className={styles.number}>
                            02
                        </p>
                        <img src={alienTwo} alt="" />
                    </div>
                    <div className={styles.effect}>
                        <p className={styles.title}>
                            Покращити роботу мозку
                        </p>
                        <p className={styles.number}>
                            03
                        </p>
                        <img src={alienThree} alt="" />
                    </div>
                </div>
            </section>

            <section className={styles.faq}>
                <p className={styles.faq_title}>
                    <span>Відповіді</span> на питання
                </p>

                <div className={styles.product_info}>
                    <p className={styles.product_info_line}>
                        -
                    </p>
                    <p className={styles.product_info_title}>
                        Чим відрізняються різні продукти з CBD
                    </p>
                    <p className={styles.product_info_main_text}>
                        По-перше, концентрацією CBD у готовому продукті. Друга відмінність — джерело CBD. Продукти на основі CBD-ізоляту (чистого порошку
                        CBD) «чисті» і не містять інших компонентів канабісу. Натомість олії full spectrum або broad spectrum отримують із конопель із низьким
                        відсотком ТНС (hemp). Такі продукти можуть містити THC, а також інші канабіноїди (крім ТНС їх понад 60 видів). Третя відмінність — носій.
                        Ним може бути олія (конопляна, кокосова, оливкова, МСТ) або спирт. Також відрізняється вміст додаткових речовин (терпени, ароматизатори, вітаміни тощо).
                    </p>
                </div>

                <div className={styles.questions}>
                    <Select
                        placeholder={'sadas'}
                        options={[
                            { value: 1, label: 1 },
                            { value: 1, label: 1 },
                            { value: 1, label: 1 },
                        ]}
                        styles={{
                            option: () => ({
                                background: 'transparent',
                                borderLeft: '3px solid #30360D',
                                borderRight: '3px solid #30360D',
                                borderBottom: '3px solid #30360D',
                                ':first-child': {
                                    borderTop: '3px solid #30360D',
                                }
                            }),
                            menu: () => ({
                                background: 'transparent',
                                ':first-child': {
                                    borderTop: '3px solid #30360D',
                                }
                            }),
                            menuList: () => {
                                return {
                                    "& :first-child": {
                                        borderTop: '3px solid #30360D',
                                    }
                                }
                            },
                            placeholder: () => ({
                                color: '#878787'
                            }),
                            control: () => ({
                                display: 'flex',
                                background: 'transparent',
                                border: '3px solid #30360D'
                            }),
                            valueContainer: () => ({
                                display: 'flex',
                                alignItems: 'center',
                            }),
                            indicatorsContainer: () => ({
                                border: 'none'
                            })
                        }}
                        isSearchable={false}
                    />
                </div>
            </section>
        </div>
    )
}