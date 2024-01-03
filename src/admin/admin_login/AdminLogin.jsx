import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/auth/authSlice';
import { checkIsStaff } from '../../redux/auth/authSlice';
import styles from './adminLogin.module.scss';

export function AdminLogin() {
  const isStaff = useSelector(checkIsStaff);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = () => {
    try {
      dispatch(loginUser({ password, email }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(isStaff);
    if (isStaff) {
      navigate('../admin');
    }
  }, [handleSubmit]);

  return (
    <div className={styles.container}>
      <p className={styles.title}>Вхід до системи адміна</p>
      <div className={styles.inputContainer}>
        <input
          type="text"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          className={styles.input}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div
          className={styles.button}
          onClick={() => handleSubmit()}
        >
          <p>ввійти</p>
        </div>
      </div>
    </div>
  );
}
