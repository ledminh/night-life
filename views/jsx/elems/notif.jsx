import React from 'react';
require('../../sass/notif.sass');

class Notif extends React.Component {
  constructor(props){
      super(props);

      this.state = {
        display: "hidden"
      };

      //Binding
      this.setDisplay = this.setDisplay.bind(this);
  }

  setDisplay(display){
    if(display === "normal"){
      this.setState({
        display: ""
      });
    }
    else {
      this.setState({
        display: display
      });
    }
  }

  render(){
    return (
      <div className={"notif " + this.state.display}>
        <div className="notif_header">{this.props.data.header}</div>
        <div className="notif_body">{this.props.data.body}</div>
      </div>
    );
  }
}

module.exports = Notif
