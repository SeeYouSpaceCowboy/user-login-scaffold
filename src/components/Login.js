import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { login } from '../actions/userActions'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        username: '',
        password: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleInputChange(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value
    return this.setState({ user })
  }

  handleLogin() {
    console.log("Logged On")
    const user = this.state.user
    this.props.login(user)
  }

  render() {
    debugger
    return (
      <div>
        <label>Username</label>
        <br/>
        <input
          name='username'
          placeholder='Username'
          onChange={ this.handleInputChange } />
        <br/>
        <br/>

        <label>Password</label>
        <br/>
        <input
          name='password'
          placeholder='Password'
          type='password'
          onChange={ this.handleInputChange } />
        <br/>
        <br/>

        <button className='active-button' onClick={ this.handleLogin }>Login</button>

        <Link to='/signup'><button>Sign Up</button></Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: user => {
      let action = login(user)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
