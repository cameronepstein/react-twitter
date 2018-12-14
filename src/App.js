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
    let endpoint = "https://www.graphqlhub.com/graphql?query=";
    let urlParams =`
    {
      graphQLHub
      twitter {
        user(identifier: name, identity: ${user}) {
          created_at
          description
          id
          screen_name
          name
          profile_image_url
          url
          tweets_count
          followers_count

          tweets(limit: 50) {
            text
          	retweet_count
            created_at
          }
        }
        search(q: "Javascript", count: 1, result_type: mixed) {
          user {
            screen_name
          }
          id
          text
        }
      }
    }`;

  console.log(urlParams);
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
