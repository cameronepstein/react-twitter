import React, { PureComponent } from 'react';

export default class DisplayTweets extends PureComponent {

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
