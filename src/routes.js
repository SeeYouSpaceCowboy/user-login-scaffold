import React from 'react'
import { IndexRoute, Route } from 'react-router'
import App from './App'
import Profile from './containers/Profile'
import Login from './components/Login'
import Signup from './components/Signup'

export default (
  <Route path='/' component={ App }>
    <IndexRoute component={ Login }/>
    <Route path='/login' component={ Login }/>
    <Route path='/signup' component={ Signup }/>
    <Route path='/profile' component={ Profile }/>
  </Route>
)

// function requireAuth(nextState, replace) {
//   if (!sessionStorage.jwt) replace({ pathname: '/' })
// }
//
// function redirectToHomeIfLoggedIn() {
//   if(!!sessionStorage.jwt) browserHistory.push('/')
// }
