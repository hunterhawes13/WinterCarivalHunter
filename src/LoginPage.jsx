import React from 'react';
import LoginForum from './LoginForum.jsx';
import { browserHistory } from 'react-router';
import CommentList2 from './CommentList2'

export default class LoginPage extends React.Component {

  render() {
    return (

      <div>
              <img src="http://i.imgur.com/7MObd1y.png" />
        <h3>Please sign in</h3>
        <form onSubmit={this.onLoginSubmit.bind(this)}>
          <input type="text" placeholder="Enter username" ref="createUser" maxlength="10" />
          <button type="submit" >Login</button>
          </form>
          </div>
    );
  }

  onLoginSubmit(e) {
    e.preventDefault()
    console.log(this.refs.createUser.value);
    browserHistory.push('/chat/'+this.refs.createUser.value)
  }
  

}
