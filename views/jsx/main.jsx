import React from 'react';
import ReactDOM from 'react-dom';

import Search_Bar from "./elems/search-bar.jsx";
import Results_Screen from './elems/results-screen.jsx';
import Notif from "./elems/notif.jsx";

require("../sass/main.sass");

class Main extends React.Component {

  constructor(props){
      super(props);

      this.state = {
        display: "",

        data_notif: {
          header: "HEADER",
          body: "This is a body"
        },

        data_results_screen: [],
        user_info: {},
        keyword: ""
      }

      //Binding
      this.setNotif = this.setNotif.bind(this);
      this.setDisplay = this.setDisplay.bind(this);
      this.loadData = this.loadData.bind(this);
      this.changeKeyword = this.changeKeyword.bind(this);
  }

  componentDidMount(){
      this.loadData("User_Info");
  }

  changeKeyword(keyword){
      this.setState({
        keyword: keyword
      });
  }

  loadData(page, query){
    var url, method;

    if(page === "Results_Screen"){
      url = "/get-results";
      method = "POST";
    }
    else if(page === "User_Info"){
      url = "/user-info";
      method = "GET";
    }


    var xhr = new XMLHttpRequest();

    xhr.open(method, url, true);
    xhr.send(query);


    xhr.onreadystatechange = () => {
      if(xhr.readyState === 4 && xhr.status === 200){
        var results = JSON.parse(xhr.responseText);

        if(page === "Results_Screen"){
          this.setState({
              data_results_screen: results
          });

          this.refs.Results_Screen.setDisplay("normal");
        }
        else if(page === "User_Info"){
          this.setState({
            user_info: results,
            keyword: results.keyword
          });

        }

      }
    };
  }

  setNotif(header, body){
    this.setState({
      data_notif: {
        header: header,
        body: body
      }
    });

    this.refs.Notif.setDisplay("normal");
    this.setDisplay("blur");

    setTimeout(()=>{
      this.setDisplay("normal");
      this.refs.Notif.setDisplay("hidden");
    }, 1000);

  }

  //setDisplay function
  //----------------------
  // display = blur: blur
  // display = hidden: hidden
  // display = null : normal

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

  render() {
      return (<div className="main">
        <div className={"content " + this.state.display}>
            <div className="header">
              NIGHT LIFE COORDINATION
            </div>

            <Search_Bar setNotif={this.setNotif} loadData={this.loadData}
                        user_info={this.state.user_info} changeKeyword={this.changeKeyword}/>
            <Results_Screen ref="Results_Screen" data={this.state.data_results_screen}
                        user_info={this.state.user_info} keyword={this.state.keyword}/>
        </div>

        <Notif ref="Notif" data={this.state.data_notif}/>

      </div>);
  }

}

ReactDOM.render(<Main />, document.getElementById('app'));
