import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInfo from './components/userInfo.js';
import DisplayTweets from './components/displayTweets.js';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    let user = window.location.pathname.toString().substring(1);
    console.log("window", window );
    this.fetchTweets(user);
  }

  fetchTweets(user) {
    let urlRequest = `https://www.graphqlhub.com/graphql?query=%7B%0A%20%20graphQLHub%0A%20%20twitter%20%7B%0A%20%20%20%20user(identifier%3A%20name%2C%20identity%3A%20%22${user}%22)%20%7B%0A%20%20%20%20%20%20created_at%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20screen_name%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20profile_image_url%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20tweets_count%0A%20%20%20%20%20%20followers_count%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20tweets(limit%3A%2050)%20%7B%0A%20%20%20%20%20%20%20%20text%0A%20%20%20%20%20%20%09retweet_count%0A%20%20%20%20%20%20%20%20created_at%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20search(q%3A%20%22Javascript%22%2C%20count%3A%201%2C%20result_type%3A%20mixed)%20%7B%0A%20%20%20%20%20%20user%20%7B%0A%20%20%20%20%20%20%20%20screen_name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`;

    fetch(urlRequest)
       .then((response) => response.json())
       .then((responseJson) => {
        console.log(responseJson);
        this.setState({ user: responseJson.data.twitter.user })
       })
       .catch((error) => {
         console.error(error);
       });
  }

  render() {
    return (
      <div className="App">
      { this.state.user ?
        <div>
          <UserInfo
            user={this.state.user}
          />
          <DisplayTweets
            tweets={this.state.user.tweets}
          />
        </div>
          :
          <div></div>
      }
      </div>
    );
  }
}

export default App;
