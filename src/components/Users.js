import React, { Component } from 'react';
import { connect } from 'react-redux';
// add any needed imports here
class Users extends Component {

  
  renderUsers = () => {
    return this.props.users.map(user => {
      return <li key={user.username}>{user.username} | {user.hometown}</li>
    })
  }
  
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
          
        </ul>
        <p>Total Users: {this.props.userCount}</p>
      </div>
    )
  }
}

//add mapStateToProps here

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}
// connect this component to Redux

export default connect(mapStateToProps)(Users)
