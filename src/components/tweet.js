import React, { Component } from 'react';

export default class Tweet extends Component {

  renderTweetArray(stringArray) {
    return (
      <div style={styles.row}>
      {stringArray.map((word, i) => {
        if (word.charAt(0) === '@') {
          return (
            <div key={i} >
              <a style={styles.tweetFont} href={"https://www.twitter.com/"+word}> {word}</a>
            </div>
        )
        } else {
          return (
            <div key={i}>
              <pre> {word}</pre>
            </div>
          )
        }
      })}
      </div>
    )
  }


   render () {
     return (
       <div>
        {this.renderTweetArray(this.props.tweet.text.split(/:| /))}
       </div>
     )
   }

};

let styles = {
  tweetFont: {
    fontFamily: 'Monospace',
  },
  pa: {
    border: '3px solid red',
    borderRightColor: 'red',
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }

}
