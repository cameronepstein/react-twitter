import React, { Component } from 'react';
import Tweet from './tweet.js';


export default class DisplayTweets extends Component {

  renderTweet() {
    return (
      <ul style={styles.ul}>
        {this.props.tweets.map((tw, i) => {
            return (
              <div key={i}>
                <Tweet key={i} tweet={tw}/>
                <pre>Created at: {tw.created_at}</pre>
                <pre>Retweets: {tw.retweet_count}</pre>
              </div>
            )
        })}
      </ul>
    )
  }

   render () {
     return (
       <div>
         {this.renderTweet()}
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
