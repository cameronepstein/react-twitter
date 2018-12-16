import React, { Component } from 'react';
import UserInfo from '../components/userInfo.js';
import DisplayTweets from '../components/displayTweets.js';

export default class DisplayStats extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    console.log("stats props", this.props);
  }

  render() {
    return (
      <div>
        <p>STATS PAGE</p>
      </div>
    );
  }
}
