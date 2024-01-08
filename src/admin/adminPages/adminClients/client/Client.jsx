import React, { useEffect, useState } from 'react'
import Axios from '../../../../utils/axios.js'


// STYLES
import styles from './client.module.scss'

export const Client = ({client}) => {
    console.log('====================================');
    console.log(client);
    console.log('====================================');
  return (
    <div className={styles.container}>
        loh
      {/* <p className={styles.title}>Усі Клієнти</p>
      <div className={styles.clientsWrapper}>
        {clients.map(client => (
          <div className={styles.client}>
            <p className={styles.boldP}>{client._id}</p>
            <p className={styles.semiP}>{client.email}</p>
            <p className={styles.semiP}>{client.name}</p>
            <p className={styles.lightP}>{client?.orders?.length}</p>
          </div>
        ))}
      </div> */}
    </div>
  )
}
