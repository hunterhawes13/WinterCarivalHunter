import React from 'react';

export default class CreateComment extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={
          { color: '#bf1818',
            fontWeight: 'bold',
            letterSpacing: '.27em',
            padding: '5px',
            backgroundColor: "#ade2ff",
            margin: "5px auto",
            width: "fit-content",
            textShadow: "-.5px .5px 2px white",
            "border-radius": "10px",

         }
       }>{this.state.error}</div>;
    }



  render() {
    return (
    	<form onSubmit={this.handleCreate.bind(this)}>
      <input style={inputStyle} type="text" placeholder="Type Comment Here" ref="createInput" />
      <button style={buttonStyle}>Submit</button>
      {this.renderError()}
     	</form>
          );
  }

  handleCreate(event) {
  		event.preventDefault();

      const createInput = this.refs.createInput;
      const chat = createInput.value;
      const validateInput = this.validateInput(chat);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }


      this.setState({ error: null });
  		this.props.createChat(chat);
  		this.refs.createInput.value="";
  }

  validateInput(chat) {
    if (!chat) {
      return "Please enter a comment.";
    } else {
      return null;
    }
  }

}

const inputStyle = {
	"margin-top": "5px",
  width: "90%",
  "margin-right": "4px",
  "max-width": "750px"

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