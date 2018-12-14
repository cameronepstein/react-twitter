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
  },
  container: {
    display: 'flex',
    height: 300,
    widht: '40vw',
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center'
  },
  textContainer: {
    display: 'flex',
    flex: 0.4,
    fontFamily: 'Source Sans Pro',
    fontWeight: 'normal'
  },
  separator: {
    border: 'solid',
    borderWidth: 1,
    width: 40,
    borderColor: '#1FAA74'
  }
}
