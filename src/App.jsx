
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import globalStyles from './assets/styles/global.css';
import CommentList from './CommentList.jsx';
import LoginPage from './LoginPage.jsx';
import NoMatch from './NoMatch.jsx';





  

  /*
const chat = horizon('messages')
  */
  class App extends Component {
    render() {
      return (
        <div>
        <h1>Medallian Hunt Chat</h1>
        <CommentList user={this.props.params.user} />
        </div>
      );
    }
  }

ReactDOM.render(
  <Router history={browserHistory}>

    <Route path="/" component={LoginPage} />
    <Route path="/chat/:user" component={App} />
    <Route path="*" component={NoMatch} />

  </Router>,
  document.getElementById('root')
);