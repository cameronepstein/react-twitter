import React, { Component } from 'react';

export default class Tweet extends Component {

  componentDidMount () {
    let stringArray = this.props.tweet.text.split(/:| /)
    // this.renderTweetArray(stringArray)

  }

  renderTweetArray(stringArray) {
    console.log("stringArray", stringArray);
    return (
      <div style={styles.row}>
      {stringArray.map((word, i) => {
        console.log("word", word);
          return (
            <div>
              <pre> {word}</pre>
            </div>
          )
      })}
      </div>
    )
    console.log("stringArray", stringArray);
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
  pa: {
    border: '3px solid red',
    borderRightColor: 'red',
  },
  row: {
    display: 'flex',
    flexDirection: 'row'
  }

}
