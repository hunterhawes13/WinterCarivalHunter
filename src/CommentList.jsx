import React from 'react';
import CreateComment from './CreateComment.jsx';
import CommentList2 from './CommentList2.jsx';
import LoginPage from './LoginPage.jsx'
import Horizon from '@horizon/client';
import {chatter} from './store.jsx';
import { StyleSheet, css } from 'aphrodite';



const container = {
    "textAlign": "center",
};

const userNameStyle = StyleSheet.create({
  base: {
  color: "#fffeea",
    "textAlign": "center",
    textShadow: "-1.52px 1.62px 1px black",
    fontWeight: "bold",
        "letterSpacing": "0.3em",
        "font-size": "18px",
      
      ':hover': {
        color: "white"
      }
    }
  
})
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
      <div id="cont" style={container}>
          <span style={promptStyle}>Logged in as:</span><span className={css(userNameStyle.base)}> {this.props.user}</span>

        <CommentList2 
          chats={this.state.chats}
          toggleComment={this.toggleComment.bind(this)}
          deleteComment={this.deleteComment.bind(this)}
          />
        <CreateComment createChat={this.createChat.bind(this)} />
        <input type="button" value="Clear messages" onClick={this.handleClearMessageClick.bind(this)} />
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

    deleteComment(chatToDelete) 

    {


      _.remove(this.state.chats, deleteChat => deleteChat.chat === chatToDelete);
      this.setState({ chats: this.state.chats });



  }

    handleClearMessageClick() {
    chatter.fetch().subscribe( function(allMessages) {
      chatter.removeAll(allMessages)
    })
  }

}