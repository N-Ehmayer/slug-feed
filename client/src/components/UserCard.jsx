import React, { Component } from 'react';

class UserCard extends Component {

  render() {
    return (
      <div className='user-card'>
        <h3 className='username'>{this.props.username}</h3>
      </div>
    )
  }
}

export default UserCard
