import React from 'react';



export default class Comment extends React.Component {
	constructor(props) {
		super(props);
	
	this.state = {
		isEditing: false
	};
}

renderActionSection() {
	if (this.state.isEditing) {
		return (
		<td>	
		<button	>Save</button>
		<button onClick={this.onCancelClick.bind(this)}>Cancel</button>
		</td>	
			);
	}

	return (
		<td>
		<button onClick={this.onEditClick.bind(this)}>Edit</button>
		<button>Delete</button>
		</td>	
	);

}

  render() {
    return (

		<tr>
			<td>{this.props.chat}</td>
			{this.renderActionSection()}
		</tr>
    );
  }

  onEditClick() {
  	this.setState({ isEditing: true });
  }

  onCancelClick() {
  		this.setState ({ isEditing: false})
  }
}