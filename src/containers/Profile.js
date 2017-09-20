import React, { Component } from 'react'
import { connect } from 'react-redux'

class Profile extends Component {
  render() {
    const user = this.props.user
    debugger

    return (
      <div>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(Profile)
