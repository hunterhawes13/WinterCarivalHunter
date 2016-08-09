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
		color: isImportant ? 'white' : 'whitesmoke',
		cursor: 'pointer',
		textShadow: isImportant ? ".5px 1.8px 0px black" : ".4px 2px 2px black",
		"letterSpacing": "0.15em",
		fontFamily: 'Helvetica',
		width: "400px",
		"vertical-align": "top",
		textAlign: "left",
		fontWeight: isImportant ? 'bold' : 'normal',

	}

	const nameStyle = {

		color: "#f2faff",
		fontFamily: 'Helvetica', 
		fontWeight: 'bold',
		textShadow: "1.2px 2px .7px black",
		 "letterSpacing": "0.4em",
"vertical-align": "top",
	}

	return(

		<tr>

		<td style={nameStyle}>{user}</td>

		<td style={commentStyle}
			onClick={this.props.toggleComment.bind(this, chat)}
		>


			{chat}
			<hr style={line} />
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
		<button style={buttonStyle} onClick={this.onCancelClick.bind(this)}>Cancel</button>
		</td>	
			);
	}

	return (
		<td style={buttonDisplay}>

		<button style={buttonStyle} onClick={this.onEditClick.bind(this)}>Like!</button>
		<button style={buttonStyle} onClick={this.props.deleteComment.bind(this, this.props.chat)}>Delete</button>
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
	color: "honeydew",
	  "WebkitBoxShadow": "rgba(0,0,0,0.98) 0 1px 0 0",
  "MozBoxShadow": "rgba(0,0,0,0.98) 0 1px 0 0",
  "boxShadow": "rgba(0,0,0,0.98) 0 1px 0 0",

  "borderRadius": "0",
  "WebkitBorderRadius": "0",
  "MozBorderRadius": "0",
  "border": "1px solid #999",

  "fontFamily": "'Lucida Grande',Tahoma,Verdana,Arial,Sans-serif",
  "fontSize": "11px",
  "fontWeight": "700",
  "padding": "2px 6px",


}

const buttonDisplay = {
"vertical-align": "top",
	textAlign: "center",
	minWidth: "120px",

}

const buttonStyle = {
  "WebkitBoxShadow": "rgba(0,0,0,0.98) 0 1px 0 0",
  "MozBoxShadow": "rgba(0,0,0,0.98) 0 1px 0 0",
  "boxShadow": "rgba(0,0,0,0.98) 0 1px 0 0",
  "backgroundColor": "#EEE",
  "borderRadius": "0",
  "WebkitBorderRadius": "0",
  "MozBorderRadius": "0",
  "border": "1px solid #999",
  "color": "#666",
  "fontFamily": "'Lucida Grande',Tahoma,Verdana,Arial,Sans-serif",
  "fontSize": "11px",
  "fontWeight": "700",
  "padding": "2px 6px",
  cursor: 'pointer',
}

const line = {
	margin: "1px 0px 1px 0px",
}