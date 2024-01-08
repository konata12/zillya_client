import React from 'react'

// STYLES
import styles from './Footer.module.scss'

// IMGS
import logo from '../../media/images/logo_footer.svg'
import visa from '../../media/images/visa.png'
import { Link } from 'react-router-dom'

export function Footer() {
    return (
        <div className={styles.footer}>
            <div className='container'>
                <div className={styles.top}>
                    <Link
                        to={'/'}
                        onClick={() => window.scrollTo(0, 0)}
                        className={styles.logo}
                    >
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className={styles.info}>
                        <div className={styles.docs}>

                        </div>
                        <div className={styles.contacts}>
                            <p>
                                Ми на зв’язку у будні<span>&#160;з 9.00 до 18.00</span>: +38-096-56-53-199
                            </p>
                            <p>
                                zilya@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <p>
                        © 2024 ZIlya
                    </p>

                    <img src={visa} alt="visa/mastercard" />
                </div>
            </div>
        </div>
    )
}
