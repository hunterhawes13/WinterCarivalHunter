import React from 'react';



export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	
	this.state = {
		isEditing: false
	};
}

renderImportance() {
	const { user, chat, isImportant } = this.props;
 	console.log(this.props)
	const commentStyle = {
		color: isImportant ? 'darkorange' : 'whitesmoke',
		cursor: 'pointer',
		textShadow: isImportant ? "-2px -2px 1px saddlebrown" : ".4px 2px 5px black",
		"letterSpacing": "0.15em",
		fontFamily: 'HelveticaNeue-Medium',
		width: "400px",
		"vertical-align": "top",
		textAlign: "left"

	}

	const nameStyle = {

		color: "#ffddf4",
		fontFamily: 'Helvetica', 
		fontWeight: 'bold',
		textShadow: "1.2px 2px .7px black",
		 "letterSpacing": "0.4em",
"vertical-align": "top"
	}

	return(

		<tr>

		<td style={nameStyle}>{user}</td>

		<td style={commentStyle}
			onClick={this.props.toggleComment.bind(this, chat)}
		>


			{chat}
		 </td>

			{this.renderActionSection()}
			</tr>

		);

}


renderActionSection() {
	if (this.state.isEditing) {
		return (
		<td style={buttonDisplay}>	
		<button	style={like}> ⁙★⁙ </button>
		<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
		</td>	
			);
	}

	return (
		<td style={buttonDisplay}>

		<button onClick={this.onEditClick.bind(this)}>Like!</button>
		<button onClick={this.props.deleteComment.bind(this, this.props.chat)}>Delete</button>
		</td>	

	);



}



  render() {
    return this.renderImportance()




    
  }

  onEditClick() {
  	this.setState({ isEditing: true });
  }

  onCancelClick() {
  		this.setState ({ isEditing: false})
  }
}

const like = {
	backgroundColor: "#4CAF50",
	color: "honeydew"


}

const buttonDisplay = {
"vertical-align": "top",
	textAlign: "center",
	minWidth: "100px"
}