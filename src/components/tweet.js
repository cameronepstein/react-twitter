import React, { Component } from 'react';

export default class Tweet extends Component {

  componentDidMount () {
    console.log("IN TWEET", this.props);

  }


   render () {
     console.log("TWEET PROPS", this.props.tweet);
     return (
       <div>
        <p style={styles.pa}>{this.props.tweet.text}</p>
       </div>
     )
   }

};

let styles = {
  pa: {
    border: '3px solid red',
    borderRightColor: 'red',
  },
  ul: {
    border: '3px solid grey',
    borderRightColor: 'grey',
    display: 'flex',
    flexDirection: 'column'
  },
  li: {
    padding: 10
  }
}
