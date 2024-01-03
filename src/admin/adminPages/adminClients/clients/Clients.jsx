import React, { useEffect, useState } from 'react'
import Axios from '../../../../utils/axios.js'


// STYLES
import styles from './clients.module.scss'

export const Clients = () => {
  const [clients, setClients] = useState([])

  const FetchClients = async () => {
    try {
      const { data } = await Axios.get('admin/users');
      setClients(data.users)
      console.log(data.users);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    FetchClients()
  },[])


  return (
    <div className={styles.container}>
      <p className={styles.title}>Усі Клієнти</p>
      <div className={styles.clientsWrapper}>
        {clients.map(client => (
          <div className={styles.client}>
            <p className={styles.boldP}>{client._id}</p>
            <p className={styles.semiP}>{client.email}</p>
            <p className={styles.semiP}>{client.name}</p>
            <p className={styles.lightP}>{client?.orders?.length}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
