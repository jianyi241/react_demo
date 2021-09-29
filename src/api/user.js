import Axios from './base'

const login = (data) => {
    return Axios.post('/user/login', data)
}

export {
  login
}
