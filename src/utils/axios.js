// import axios from 'axios'

// const instance = axios.create({
//     baseURL: 'http://localhost:5000/api'
// })

// instance.interceptors.request.use(config => {
//     config.headers.Authorization = window.localStorage.getItem('token')

//     return config
// })

// export default instance

import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/api',
  timeout: 5000,
});

instance.get('/items/')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });


export default instance