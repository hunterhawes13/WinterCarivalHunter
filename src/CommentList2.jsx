import _ from 'lodash'; 
import React from 'react';
import ChatHeader from './ChatHeader.jsx';
import Comment from './Comment.jsx';

const tableStyle =  { 
  border: "hidden",
  borderCollapse: "colapse",
  borderSpacing: "0",
  tableLayout: "fixed",
  margin: "0 auto",
  height: "inherit",

     };
const colOne = {
  "vertical-align": "top",
  backgroundColor: "red",
  width: "15%",

};
const colTwo = {
backgroundColor: "blue",
"vertical-align": "top"

};
const colThree = {
  "vertical-align": "top",
backgroundColor: "yellow",
  width: "15%",
  minWidth: "100px",
};



export default class CommentList2 extends React.Component {
	renderItems() {
		const props = _.omit(this.props, 'chats');

		return _.map(this.props.chats, (comment, index) => <Comment key={comment.id} user={comment.user} chat={comment.chat} isImportant={comment.isImportant} {...props}/>);

	 // function(comment, index) {
		// return <Comment key{/>

		// 	chat={comment.chat} isImportant={comment.isImportant}
	}

  render() {
    console.log(this.props.chats)
    return (
   			<table style={tableStyle}>
          <colgroup>
          <col style={colOne}/>
          <col style={colTwo}/>
          <col style={colThree}/>
         </colgroup> 
   			    <ChatHeader />
   			<tbody style={tableStyle}>
          {this.renderItems()}
   			</tbody>
   			</table>
    );
  }
}
