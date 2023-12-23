import React from 'react'

// STYLES
import styles from './MainPage.module.scss'

// COMPONENTS
import { Button } from '../../components/button/Button'
import { Link } from 'react-router-dom'

// IMAGES
import alienOne from '../../media/images/alien_1.png'
import alienTwo from '../../media/images/alien_2.png'
import alienThree from '../../media/images/alien_3.png'

export function MainPage() {
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

            <section>
                <p>
                    Вона <span>допомагає:</span>
                </p>
                <div>
                    <div>
                        <p>
                            Боротися з депресією
                        </p>
                        <p>
                            01
                        </p>
                        <img src={alienOne} alt="" />
                    </div>
                    <div>
                        <p>
                            Покращити якість сну
                        </p>
                        <p>
                            02
                        </p>
                        <img src={alienTwo} alt="" />
                    </div>
                    <div>
                        <p>
                            Покращити роботу мозку
                        </p>
                        <p>
                            03
                        </p>
                        <img src={alienThree} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
