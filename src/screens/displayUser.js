import React, { Component } from 'react';
import UserInfo from '../components/userInfo.js';
import DisplayTweets from '../components/displayTweets.js';

export default class DisplayUser extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
  }

  render() {
    return (
      <div>
        <UserInfo
          user={this.props.user}
        />
        <DisplayTweets
          tweets={this.props.user.tweets}
        />
      </div>
    );
  }
}
