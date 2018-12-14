import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  componentDidMount () {
    let user = window.location.pathname.toString().substring(1);
    this.fetchTweets(user);
  }

  fetchTweets(user) {
    let urlRequest = `https://www.graphqlhub.com/graphql?query=%7B%0A%20%20graphQLHub%0A%20%20twitter%20%7B%0A%20%20%20%20user(identifier%3A%20name%2C%20identity%3A%20%22${user}%22)%20%7B%0A%20%20%20%20%20%20created_at%0A%20%20%20%20%20%20description%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20screen_name%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20profile_image_url%0A%20%20%20%20%20%20url%0A%20%20%20%20%20%20tweets_count%0A%20%20%20%20%20%20followers_count%0A%20%20%20%20%20%20%0A%20%20%20%20%20%20tweets(limit%3A%2050)%20%7B%0A%20%20%20%20%20%20%20%20text%0A%20%20%20%20%20%20%09retweet_count%0A%20%20%20%20%20%20%20%20created_at%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20search(q%3A%20%22Javascript%22%2C%20count%3A%201%2C%20result_type%3A%20mixed)%20%7B%0A%20%20%20%20%20%20user%20%7B%0A%20%20%20%20%20%20%20%20screen_name%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20id%0A%20%20%20%20%20%20text%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A`;

    fetch(urlRequest)
       .then((response) => response.json())
       .then((responseJson) => {
        console.log(responseJson);
       })
       .catch((error) => {
         console.error(error);
       });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
