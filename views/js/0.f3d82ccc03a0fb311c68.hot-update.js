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

	var _resultsScreen = __webpack_require__(186);

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

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./results_list.sass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(181)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(185, function() {
				var newContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/index.js!./results_list.sass\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(184);

	var Results_Screen = function (_React$Component) {
	  _inherits(Results_Screen, _React$Component);

	  function Results_Screen(props) {
	    _classCallCheck(this, Results_Screen);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results_Screen).call(this, props));

	    _this.state = {
	      result_bars: []
	    };
	    return _this;
	  }

	  _createClass(Results_Screen, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this2 = this;

	      if (nextProps.data !== this.props.data) {
	        this.state.result_bars = [];

	        nextProps.data.forEach(function (result, i) {
	          _this2.state.result_bars.push(_react2.default.createElement(Result_Bar, { key: i, title: result.name,
	            description: result.snippet_text,
	            image: result.image_url }));
	        });

	        this.forceUpdate();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      return _react2.default.createElement(
	        "div",
	        { className: "results_list_wrapper" },
	        _react2.default.createElement(
	          "div",
	          { className: "results_list" },
	          _react2.default.createElement(
	            "div",
	            { className: "result_screen" },
	            _react2.default.createElement(
	              "div",
	              { className: "result_screen_image_wrapper" },
	              _react2.default.createElement("img", { className: "result_screen_image", src: "/imgs/unknown-user.png" })
	            ),
	            _react2.default.createElement(
	              "div",
	              { className: "result_screen_content" },
	              _react2.default.createElement(
	                "div",
	                { className: "result_screen_title" },
	                "This is a title"
	              ),
	              _react2.default.createElement(
	                "div",
	                { className: "result_screen_description" },
	                "Some description here ..."
	              ),
	              _react2.default.createElement(Button_Going, null)
	            )
	          )
	        )
	      );
	    }
	  }]);

	  return Results_Screen;
	}(_react2.default.Component);

	var Result_Bar = function (_React$Component2) {
	  _inherits(Result_Bar, _React$Component2);

	  function Result_Bar() {
	    _classCallCheck(this, Result_Bar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Result_Bar).apply(this, arguments));
	  }

	  _createClass(Result_Bar, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "result_bar" },
	        _react2.default.createElement(
	          "div",
	          { className: "image_wrapper" },
	          _react2.default.createElement("img", { className: "image", src: this.props.image })
	        )
	      );
	    }
	  }]);

	  return Result_Bar;
	}(_react2.default.Component);

	var Button_Going = function (_React$Component3) {
	  _inherits(Button_Going, _React$Component3);

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