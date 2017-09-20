import axios from 'axios'

const dev_url = 'http://localhost:3005/v1/'

axios.defaults.baseURL = dev_url

export const userAdapter = {
  signup: user => {
    return axios.post('signup', user)
      .then(response => response)
      .catch(error => {
        console.log('User creation failed.')

        return error
      })
  },

  login: user => {
    return axios.post('login', user)
      .then(response => response.data)
      .catch(error => {
        console.log('Login incorrect.')

        return error
      })
  },

  fetchCurrentUser: () => {
    return axios.get('user')
      .then(response => response.data)
      .catch(error => {
        console.log('Failed fetch user from server')

        return error
      })
  }
}
