import React, { PureComponent } from 'react';

export default class DisplayTweets extends PureComponent {

   render () {
     return (
       <div>
         <ul style={styles.ul}>
         {this.props.tweets.map(function(d, idx) {
             return (
               <div key={idx} style={styles.li}>
                 <p>{d.text}</p>
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
