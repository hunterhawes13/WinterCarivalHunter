import React from 'react';

var tommyStyle = {
	width:"400px",
}

export default class NoMatch extends React.Component {

  render() {
    return (
      <div>

        <h4>Hopefully your hunting skills are better than your navigation</h4>
        
        <img style={tommyStyle} src="http://i.imgur.com/7eduoje.png" />

        
        <div>You probably want to <a href="/">start over</a>.</div>
      </div>    );
  }
}
