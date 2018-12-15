import React, { PureComponent } from 'react';

export default class DisplayTweets extends PureComponent {

  componentDidMount () {
    let tweet = this.props.tweets[1]
    console.log("tweet", tweet);
    let string = ''
    tweet.text.split(" ").map(function(word, idx) {
      console.log("word", word);
      word.charAt(0) == '@' ?
        string = <button onClick={() => {this.onPress()}}>word</button>
      :
        string += word;

    })
    console.log("string", string);
  }

  onPress = () => {
    console.log("has been clicked");
  }

   render () {
     return (
       <div>
         <ul style={styles.ul}>
         {this.props.tweets.map(function(d, idx) {
           var link = "";
           var str = "";
           d.text.split(" ").map(function(word, idx) {
             if (word.charAt(0) == '@') {
               console.log("word", word);
               link = <a href={'https://twitter.com/' + word.substring(1)}>View Mentioned Profile: {word}</a>
             }
             str += word;
           })
             return (
               <div key={idx} style={styles.li}>
                 <p>{str}</p>
                 <p>{link}</p>
                 <p>created at: {d.created_at}</p>
                 <p>retweets: {d.retweet_count}</p>
               </div>
             )
         })}
         </ul>
       </div>
     )
   }

};

let styles = {
  ul: {
    border: '3px solid grey',
    borderRightColor: 'grey'
  },
  li: {
    padding: 10
  }
}
