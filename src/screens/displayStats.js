import React, { Component } from 'react';
import UserInfo from '../components/userInfo.js';
import DisplayTweets from '../components/displayTweets.js';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';

export default class DisplayStats extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.sortChartData(this.props.user.tweets)
  }

  sortChartData(tweets) {
    console.log("tweets", tweets);
    let chartData = tweets.map(tweet => [tweet.created_at, tweet.retweet_count] )
    this.setState({data: chartData})
    console.log("chartData", chartData);
  }

  render() {
    return (
      <div>
        <p>STATS PAGE</p>
        <LineChart data={this.state.data} />
      </div>
    );
  }
}
