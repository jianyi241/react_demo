import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  headers: {
    post: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  },
  timeout: 20000,
  withCredentials: true
})

instance.interceptors.request.use(res => {
  res.headers.from = 'react_demo'
  return res
},err => {
  return err
})

instance.interceptors.response.use(res => {
  return res
}, err => {
  return err
})

export default instance
