import React, { PureComponent } from 'react';

export default class Tweets extends PureComponent {

  render () {
    return (
     <div>
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
