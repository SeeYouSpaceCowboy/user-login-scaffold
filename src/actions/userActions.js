import { userAdapter } from '../adapters/userAdapter'
import { browserHistory } from 'react-router'

export const signup = user => {
  const response = userAdapter.signup(user)
  browserHistory.push('/profile')

  return {
    type: 'SIGN_UP',
    payload: response
  }
}

export const login = user => {
  const response = userAdapter.login(user)
  // browserHistory.push('/profile')

  return {
    type: 'LOGIN',
    payload: response
  }
}

export const fetchCurrentUser = () => {
  const response = userAdapter.fetchCurrentUser()

  return {
    type: 'FETCH_CURRENT_USER',
    payload: response
  }
}
