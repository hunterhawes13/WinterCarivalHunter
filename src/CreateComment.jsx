import React from 'react';

export default class CreateComment extends React.Component {

  render() {
    return (
    	<form onSubmit={this.handleCreate.bind(this)}>
      <input style={inputStyle} type="text" placeholder="Type Comment Here" ref="createInput" />
      <button>Submit</button>
     	</form>
          );
  }

  handleCreate(event) {
  		event.preventDefault();

  		this.props.createChat(this.refs.createInput.value);
  		this.refs.createInput.value=""
  }

}

const inputStyle = {
	width: "inherit"

}