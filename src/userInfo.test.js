import React from 'react';
import ReactDOM from 'react-dom';
import UserInfo from './components/userInfo.js';

it('renders without crashing', () => {
  const user = {
    name: "testName",
    screen_name:"testScreenName",
    followers_count: 100,
    tweets_count: 100,
  }
  const div = document.createElement('div');
  ReactDOM.render(<UserInfo user={user}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
