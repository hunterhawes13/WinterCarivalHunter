import React from 'react';
import CreateComment from './CreateComment.jsx';
import CommentList2 from './CommentList2.jsx';
import LoginPage from './LoginPage.jsx'
import Horizon from '@horizon/client';
import {chatter} from './store.jsx';


const container = {
    "textAlign": "center",
};

const userNameStyle = {
  color: "crimson",
    "textAlign": "center",
    textShadow: ".5px .5px 3px white",
    fontWeight: "bold",
  }
const promptStyle = {
  color: "white",
    "textAlign": "center",

      }



export default class CommentList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chats: [],
    };

    chatter.watch().subscribe((result) => {
    this.setState({chats: result});
      })

  }
  render() {
    return (
      <div style={container}>
          <span style={promptStyle}>Logged in as:</span><span style={userNameStyle}> {this.props.user}</span>

        <CommentList2 
          chats={this.state.chats}
          toggleComment={this.toggleComment.bind(this)}
          deleteComment={this.deleteComment.bind(this)}
          />
        <CreateComment createChat={this.createChat.bind(this)} />
      </div>
    );
  }


  toggleComment(chat) {
    const foundComment = _.find(this.state.chats, comment => comment.chat ===                                chat);
    foundComment.isImportant = !foundComment.isImportant;
    this.setState({ chats: this.state.chats });
  }

  createChat(chat) {
    chatter.store ({
      user: this.props.user,
      chat,
      isImportant: false
    })
  
  }

    deleteComment(chatToDelete) {
      _.remove(this.state.chats, comment => comment.chat === chatToDelete);
      this.setState({ chats: this.state.chats });

  }

}