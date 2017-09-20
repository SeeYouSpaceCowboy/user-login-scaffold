import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { signup } from '../actions/userActions'

class Signup extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        username: '',
        password: '',
        password_confirmation: '',
        first_name: '',
        last_name: ''
      }
    }

    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  handleInputChange(event) {
    const field = event.target.name
    const user = this.state.user
    user[field] = event.target.value
    return this.setState({ user })
  }

  handleSignUp() {
    console.log("Signed Up")
    const user = this.state.user
    this.props.signup(user)
  }

  render() {
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

        <label>Password Confirmation</label>
        <br/>
        <input
          name='password_confirmation'
          placeholder='Password Confirmation'
          type='password'
          onChange={ this.handleInputChange } />
        <br/>
        <br/>

        <label>First Name</label>
        <br/>
        <input
          name='first_name'
          placeholder='First Name'
          onChange={ this.handleInputChange } />
        <br/>
        <br/>

        <label>First Name</label>
        <br/>
        <input
          name='last_name'
          placeholder='Last Name'
          onChange={ this.handleInputChange } />
        <br/>
        <br/>

        <button className='active-button' onClick={ this.handleSignUp }>Sign Up</button>

        <Link to='/login'><button>Login</button></Link>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    signup: user => {
      let action = signup(user)
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(Signup)
