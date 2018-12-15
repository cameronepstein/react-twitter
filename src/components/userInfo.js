import React, { PureComponent } from 'react';

export default class UserInfo extends PureComponent {

   render () {
     return (
       <div style={styles.container}>
        <h1>{this.props.user.name}</h1>
        <h1>@{this.props.user.screen_name}</h1>
        <h1>Followers: {this.props.user.followers_count}</h1>
        <h1>Tweets: {this.props.user.tweets_count}</h1>
       </div>
     )
   }
};

let styles = {
  container: {
    display: 'flex',
    height: 300,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    alignItems: 'center'
  }
}
