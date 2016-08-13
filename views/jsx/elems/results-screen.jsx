import React from "react";

require("../../sass/results_screen.sass");

class Results_Screen extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.loadResult = this.loadResult.bind(this);

    this.state = {
      data_list: [],
      data_result: {},
      display: "hidden"
    };
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

  componentWillReceiveProps(nextProps){
    if(nextProps.data !== this.props.data){
      this.state.data_list = [];

      nextProps.data.forEach((result, i) => {
        this.state.data_list.push({
          name: result.name,
          yelp_id: result.id,
          number_going: result.number_going
        });
      });


      var result = {
        title: nextProps.data[0].name,
        description: nextProps.data[0].snippet_text,
        url: nextProps.data[0].url,
        rating_url: nextProps.data[0].rating_img_url,
        image: nextProps.data[0].image_url
      }

      this.setState({
        data_result: result
      });


    }
  }


  loadResult(index){
    var result = {
      title: this.props.data[index].name,
      description: this.props.data[index].snippet_text,
      url: this.props.data[index].url,
      rating_url: this.props.data[index].rating_img_url,
      image: this.props.data[index].image_url
    }

    this.setState({
      data_result: result
    });
  }

  render() {

    return (
      <div className={"results_screen " + this.state.display}>
          <Result data={this.state.data_result}/>
          <List data={this.state.data_list} loadResult={this.loadResult}
                keyword={this.props.keyword} ref="List"/>
      </div>
    );
  }
}

class Result extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.onClick_result_title = this.onClick_result_title.bind(this);
  }

  onClick_result_title(){
    window.location = this.props.data.url;
  }

  render(){
    return (
      <div className="result_wrapper">
        <div className="result">

          <div className="image_wrapper">
            <img className="image" src={this.props.data.image}/>
          </div>

          <div className="result_title" onClick={this.onClick_result_title}>{this.props.data.title}</div>

          <div className="result_rating">
            <img className="rating_image" src={this.props.data.rating_url}/>
          </div>

          <div className="result_screen_description">{this.props.data.description}</div>

        </div>
      </div>
    );
  }
}

class List extends React.Component {
    constructor(props){
        super(props);

        this.state = {
          result_bar: [],
          current_bar: 0
        };

        //Binding
        this.setCurrentBar = this.setCurrentBar.bind(this);
        window.onkeydown = this.onKeyDown.bind(this);
    }

    onKeyDown(event){
      if(event.key === "ArrowDown" && this.state.current_bar < this.props.data.length - 1){
          event.preventDefault();
          this.setState({
            current_bar: this.state.current_bar + 1
          });

          this.props.loadResult(this.state.current_bar);

          window.scrollTo(0, this.state.current_bar*43);

      }
      else if(event.key === "ArrowUp" && this.state.current_bar > 0){
        event.preventDefault();

        this.setState({
          current_bar: this.state.current_bar - 1
        });

        this.props.loadResult(this.state.current_bar);
        window.scrollTo(0, this.state.current_bar*43);

      }
    }

    setCurrentBar(index){
      this.setState({
        current_bar: index
      });
    }

    render() {
      var result_bars = [];

      this.props.data.forEach((result, i) => {
          result_bars.push(<Result_Bar key={i} index={i} current_bar={this.state.current_bar}
                                        loadResult={this.props.loadResult} name={result.name}
                                        yelp_id={result.yelp_id} number_going={result.number_going}
                                        setCurrentBar={this.setCurrentBar} keyword={this.props.keyword}
                                        />);
      });

      return (
        <div className="list_wrapper" onKeyDown={this.onKeyDown}>
          <div className="list">
              {result_bars}
          </div>

          <div className="footer" />

        </div>
      );
    }
}

class Result_Bar extends React.Component {
  constructor(props){
      super(props);

      //Binding
      this.onClick_name = this.onClick_name.bind(this);
      this.getBackgroundColor = this.getBackgroundColor.bind(this);

      //Set state
      this.state = {
        background_color: this.getBackgroundColor(props.current_bar, props.index)
      }
  }

  getBackgroundColor(current_bar, index){
    if(current_bar === index)
      return "current_bar";

    if(index%2 === 1)
      return "light";

      return "dark";

  }

  componentWillReceiveProps(nextProps){
    if(nextProps.current_bar !== this.props.current_bar){

          this.setState({
            background_color: this.getBackgroundColor(nextProps.current_bar, nextProps.index)
          });
      }
  }


  onClick_name(){
    this.props.loadResult(this.props.index);
    this.props.setCurrentBar(this.props.index);
  }

  render() {
    return (
          <div className={"result_bar " + this.state.background_color} >
            <div className="result_name" onClick={this.onClick_name}>{this.props.name}</div>
            <Button_Going index={this.props.index} number_going={this.props.number_going}
                      yelp_id={this.props.yelp_id} keyword={this.props.keyword}/>
          </div>
      );
  }
}

class Button_Going extends React.Component {
  constructor(props){
    super(props);

    //Binding
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    window.location.href = "/submit-going/?yelp_id=" + this.props.yelp_id
                              +"&keyword=" + this.props.keyword;
  }

  render() {
    return (
      <div className="button_going" onClick={this.onClick}>
        <span className="number_going">{this.props.number_going}</span> GOING
      </div>);
  }
}

module.exports = Results_Screen;
