import React, { useEffect, useState } from 'react'
import Axios from '../../../../utils/axios.js'
import { Client } from '../client/Client.jsx'

// STYLES
import styles from './clients.module.scss'
import mainStyles from '../../../styles/index.module.scss'

export const Clients = ({setClose}) => {
  const [clients, setClients] = useState([])
  const [client, setClient] = useState()

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

  if (client) {
    return(
      <Client client={client}/>
    )
  }


  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div className={mainStyles.close}
          onClick={() => setClose(false)}
        >
          <div className={mainStyles.line} />
          <div className={`${mainStyles.line}`+` ${mainStyles.fstLine}`} />
        </div>

        <p className={styles.title}>Усі Клієнти</p>
        <div className={styles.clientsWrapper}>
          {clients.map(item => (
            <div className={styles.client} onClick={() => setClient(item)}>
              <p className={styles.boldP}>{item._id}</p>
              <p className={styles.semiP}>{item.email}</p>
              <p className={styles.semiP}>{item.name}</p>
              <p className={styles.lightP}>{item?.orders?.length}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}
