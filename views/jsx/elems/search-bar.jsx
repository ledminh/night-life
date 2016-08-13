import React from 'react';

class Search_Bar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
        value: ""
    }

    //Binding
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentWillReceiveProps(nextProps){
      if(this.props.user_info !== nextProps.user_info && nextProps.user_info.keyword){
        this.setState({
          value: nextProps.user_info.keyword
        });

        this.props.loadData("Results_Screen", nextProps.user_info.keyword);
      }
  }

  onChange(event){
    this.setState({
      value: event.target.value
    });
  }

  onClick(){
      if(this.state.value !== ""){
        this.props.loadData("Results_Screen", this.state.value);
        this.props.changeKeyword(this.state.value);

        this.setState({
          value: ""
        });
      }
      else{
        this.props.setNotif("Error", "You must enter something on the search bar");
      }
  }

  onKeyDown(event){
    if(event.keyCode === 13){
        if(this.state.value !== ""){
          this.props.loadData("Results_Screen", this.state.value);
          this.props.changeKeyword(this.state.value);

          this.setState({
            value: ""
          });
        }
        else{
          this.props.setNotif("Error", "You must enter something on the search bar");
        }
    }
  }

  render() {
    return (
      <div className="search_bar_wrapper">

          <div className="search_bar">
              <input className="search_bar_input" type="text" name="search_bar_input"
                    placeholder="WHERE YOU AT?" value={this.state.value}
                    onChange={this.onChange} onKeyDown={this.onKeyDown}/>
          </div>

          <div className="search_bar_button" onClick={this.onClick}>GO</div>

      </div>
    );
  }
}

module.exports = Search_Bar;
