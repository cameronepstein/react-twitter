import React, { Component } from 'react';
import UserInfo from '../components/userInfo.js';
import DisplayTweets from '../components/displayTweets.js';

export default class DisplayUser extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.user) {
      this.setState({user: nextProps.user})
    }
  }

  render() {
    return (
      <div>
      { this.state.user ?
        <div>
          <UserInfo
            user={this.props.user}
          />
          <DisplayTweets
            tweets={this.props.user.tweets}
          />
        </div>
          :
          <div></div>
      }
      </div>
    );
  }
}
