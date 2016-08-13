webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _searchBar = __webpack_require__(175);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _resultsScreen = __webpack_require__(189);

	var _resultsScreen2 = _interopRequireDefault(_resultsScreen);

	var _notif = __webpack_require__(177);

	var _notif2 = _interopRequireDefault(_notif);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(182);

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main(props) {
	    _classCallCheck(this, Main);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Main).call(this, props));

	    _this.state = {
	      display: "",

	      data_notif: {
	        header: "HEADER",
	        body: "This is a body"
	      },

	      data_results_screen: []
	    };

	    //Binding
	    _this.setNotif = _this.setNotif.bind(_this);
	    _this.setDisplay = _this.setDisplay.bind(_this);
	    _this.loadData = _this.loadData.bind(_this);
	    return _this;
	  }

	  _createClass(Main, [{
	    key: 'loadData',
	    value: function loadData(keyword) {
	      var _this2 = this;

	      var xhr = new XMLHttpRequest();

	      xhr.open("POST", "/get-results", true);
	      xhr.send(keyword);

	      xhr.onreadystatechange = function () {
	        if (xhr.readyState === 4 && xhr.status === 200) {
	          var results = JSON.parse(xhr.responseText);

	          _this2.setState({
	            data_results_screen: results
	          });
	        }
	      };
	    }
	  }, {
	    key: 'setNotif',
	    value: function setNotif(header, body) {
	      var _this3 = this;

	      this.setState({
	        data_notif: {
	          header: header,
	          body: body
	        }
	      });

	      this.refs.Notif.setDisplay("normal");
	      this.setDisplay("blur");

	      setTimeout(function () {
	        _this3.setDisplay("normal");
	        _this3.refs.Notif.setDisplay("hidden");
	      }, 1000);
	    }

	    //setDisplay function
	    //----------------------
	    // display = blur: blur
	    // display = hidden: hidden
	    // display = null : normal

	  }, {
	    key: 'setDisplay',
	    value: function setDisplay(display) {
	      if (display === "normal") {
	        this.setState({
	          display: ""
	        });
	      } else {
	        this.setState({
	          display: display
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'main' },
	        _react2.default.createElement(
	          'div',
	          { className: "content " + this.state.display },
	          _react2.default.createElement(
	            'div',
	            { className: 'header' },
	            'NIGHT LIFE COORDINATION'
	          ),
	          _react2.default.createElement(_searchBar2.default, { setNotif: this.setNotif, loadData: this.loadData }),
	          _react2.default.createElement(_resultsScreen2.default, { data: this.state.data_results_screen })
	        ),
	        _react2.default.createElement(_notif2.default, { ref: 'Notif', data: this.state.data_notif })
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ },

/***/ 187:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(188);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(181)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(188, function() {
				var newContent = __webpack_require__(188);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 188:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(180)();
	// imports


	// module
	exports.push([module.id, ".result_wrapper {\n  background-color: white;\n  position: fixed;\n  top: 160px;\n  padding-top: 20px;\n  padding-bottom: 15px;\n  z-index: 10;\n  width: 100%;\n  text-align: center; }\n\n.result {\n  box-sizing: border-box;\n  border: 4px solid gray;\n  width: 400px;\n  height: 300px;\n  margin: auto;\n  padding: 8px; }\n\n.image {\n  width: 150px;\n  height: 150px; }\n\n.result_title {\n  font-size: 20px;\n  font-weight: bold;\n  color: #e6114c;\n  cursor: pointer; }\n\n.list_wrapper {\n  position: relative;\n  top: 515px;\n  border: 1px solid black;\n  border-radius: 8px 8px 0px 0px;\n  width: 600px;\n  margin: auto;\n  margin-bottom: 40px; }\n\n.list {\n  border: 1px solid black;\n  margin: 10px;\n  padding: 5px; }\n\n.result_bar {\n  box-sizing: border-box;\n  border: 1px solid;\n  border-radius: 10px;\n  margin-bottom: 8px;\n  padding: 5px 15px 5px 10px;\n  height: 43px; }\n  .result_bar:hover {\n    background-color: white;\n    border: 2px solid; }\n\n.current_bar {\n  background-color: white;\n  border: 2px solid; }\n\n.result_name {\n  padding-top: 5px;\n  display: inline-block;\n  font-weight: bold;\n  color: #870a2d;\n  cursor: pointer; }\n\n.button_going {\n  float: right;\n  display: inline-block;\n  border: 1px solid;\n  width: 80px;\n  padding: 5px;\n  text-align: center;\n  cursor: pointer;\n  background-color: white; }\n  .button_going:hover {\n    background-color: #e6e6e6;\n    font-weight: bold; }\n\n.footer {\n  background-color: black;\n  height: 10px; }\n\n.light {\n  background-color: #cdc88e; }\n\n.dark {\n  background-color: #bdb76b; }\n", ""]);

	// exports


/***/ },

/***/ 189:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(187);

	var Results_Screen = function (_React$Component) {
	  _inherits(Results_Screen, _React$Component);

	  function Results_Screen(props) {
	    _classCallCheck(this, Results_Screen);

	    //Binding
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results_Screen).call(this, props));

	    _this.loadResult = _this.loadResult.bind(_this);

	    _this.state = {
	      data_list: [],
	      data_result: {}
	    };
	    return _this;
	  }

	  _createClass(Results_Screen, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (nextProps.data !== this.props.data) {
	        this.state.data_list = [];

	        nextProps.data.forEach(function (result, i) {
	          _this2.state.data_list.push({
	            name: result.name
	          });
	        });

	        var result = {
	          title: nextProps.data[0].name,
	          description: nextProps.data[0].snippet_text,
	          url: nextProps.data[0].url,
	          rating_url: nextProps.data[0].rating_img_url,
	          image: nextProps.data[0].image_url
	        };

	        this.setState({
	          data_result: result
	        });
	      }
	    }
	  }, {
	    key: "loadResult",
	    value: function loadResult(index) {
	      var result = {
	        title: this.props.data[index].name,
	        description: this.props.data[index].snippet_text,
	        url: this.props.data[index].url,
	        rating_url: this.props.data[index].rating_img_url,
	        image: this.props.data[index].image_url
	      };

	      this.setState({
	        data_result: result
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      return _react2.default.createElement(
	        "div",
	        { className: "results_screen" },
	        _react2.default.createElement(Result, { data: this.state.data_result }),
	        _react2.default.createElement(List, { data: this.state.data_list, loadResult: this.loadResult })
	      );
	    }
	  }]);

	  return Results_Screen;
	}(_react2.default.Component);

	var Result = function (_React$Component2) {
	  _inherits(Result, _React$Component2);

	  function Result(props) {
	    _classCallCheck(this, Result);

	    //Binding
	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(Result).call(this, props));

	    _this3.onClick_result_title = _this3.onClick_result_title.bind(_this3);
	    return _this3;
	  }

	  _createClass(Result, [{
	    key: "onClick_result_title",
	    value: function onClick_result_title() {
	      window.location = this.props.data.url;
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "result_wrapper" },
	        _react2.default.createElement(
	          "div",
	          { className: "result" },
	          _react2.default.createElement(
	            "div",
	            { className: "image_wrapper" },
	            _react2.default.createElement("img", { className: "image", src: this.props.data.image })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_title", onClick: this.onClick_result_title },
	            this.props.data.title
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_rating" },
	            _react2.default.createElement("img", { className: "rating_image", src: this.props.data.rating_url })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_screen_description" },
	            this.props.data.description
	          )
	        )
	      );
	    }
	  }]);

	  return Result;
	}(_react2.default.Component);

	var List = function (_React$Component3) {
	  _inherits(List, _React$Component3);

	  function List(props) {
	    _classCallCheck(this, List);

	    var _this4 = _possibleConstructorReturn(this, Object.getPrototypeOf(List).call(this, props));

	    _this4.state = {
	      result_bar: [],
	      current_bar: 0
	    };
	    return _this4;
	  }

	  _createClass(List, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this5 = this;

	      if (nextProps.data !== this.props.data) {
	        this.state.result_bar = [];
	        this.state.current_bar = 0;

	        nextProps.data.forEach(function (result, i) {
	          _this5.state.result_bar.push(_react2.default.createElement(Result_Bar, { key: i, index: i, current: i === 0 ? "yes" : "no",
	            loadResult: _this5.props.loadResult, name: result.name }));
	        });

	        this.forceUpdate();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "list_wrapper" },
	        _react2.default.createElement(
	          "div",
	          { className: "list" },
	          this.state.result_bar
	        ),
	        _react2.default.createElement("div", { className: "footer" })
	      );
	    }
	  }]);

	  return List;
	}(_react2.default.Component);

	var Result_Bar = function (_React$Component4) {
	  _inherits(Result_Bar, _React$Component4);

	  function Result_Bar(props) {
	    _classCallCheck(this, Result_Bar);

	    //Binding
	    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Result_Bar).call(this, props));

	    _this6.onClick_name = _this6.onClick_name.bind(_this6);

	    //set color
	    var background_color;

	    if (props.index % 2 === 1) {
	      background_color = "light";
	    } else {
	      background_color = "dark";
	    }

	    if (props.current === "yes") {
	      background_color = "current_bar";
	    }

	    //Set state
	    _this6.state = {
	      background_color: background_color
	    };
	    return _this6;
	  }

	  _createClass(Result_Bar, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.current !== this.props.current) {
	        if (nextProps.current === "yes") {
	          this.setState({
	            background_color: "current_bar"
	          });
	        } else {
	          var background_color;

	          if (nextProps.index % 2 === 1) {
	            background_color = "light";
	          } else {
	            background_color = "dark";
	          }

	          this.setState({
	            background_color: background_color
	          });
	        }
	      }
	    }
	  }, {
	    key: "onClick_name",
	    value: function onClick_name() {
	      this.props.loadResult(this.props.index);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "result_bar " + this.state.background_color },
	        _react2.default.createElement(
	          "div",
	          { className: "result_name", onClick: this.onClick_name },
	          this.props.name
	        ),
	        _react2.default.createElement(Button_Going, null)
	      );
	    }
	  }]);

	  return Result_Bar;
	}(_react2.default.Component);

	var Button_Going = function (_React$Component5) {
	  _inherits(Button_Going, _React$Component5);

	  function Button_Going() {
	    _classCallCheck(this, Button_Going);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button_Going).apply(this, arguments));
	  }

	  _createClass(Button_Going, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "button_going" },
	        _react2.default.createElement(
	          "span",
	          { className: "number_going" },
	          "0"
	        ),
	        " GOING"
	      );
	    }
	  }]);

	  return Button_Going;
	}(_react2.default.Component);

	module.exports = Results_Screen;

/***/ }

})