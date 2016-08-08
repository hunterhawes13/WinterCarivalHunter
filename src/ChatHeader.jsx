import React from 'react';

export default class ChatHeader extends React.Component {

  render() {
    return (
            <thead>
      			<tr>
      			<th style={userHead}>user</th>
      			<th>comment</th>
      			<th>actions</th>
      			</tr>
      		</thead> 
    );
  }
}

const userHead = {
	    display: "inline",
}