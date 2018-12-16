import React, { Component } from 'react';
import ReactChartkick, { LineChart } from 'react-chartkick';
import Chart from 'chart.js';
ReactChartkick.addAdapter(Chart)

export default class DisplayStats extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    this.sortChartData(this.props.user.tweets)
  }

  sortChartData(tweets) {
    let chartData = tweets.map(tweet => [tweet.created_at, tweet.retweet_count] )
    this.setState({data: chartData})
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
