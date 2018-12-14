import React from 'react';
import ReactDOM from 'react-dom';
import DisplayTweets from './components/displayTweets.js';

it('renders without crashing', () => {
  const tweets = [
    {
      text: "testText",
      created_at: 100,
      retweet_count: 100
    }
  ]
  const div = document.createElement('div');
  ReactDOM.render(<DisplayTweets tweets={tweets}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
