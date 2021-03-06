webpackHotUpdate(0,{

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

	__webpack_require__(187);

	var Results_Screen = function (_React$Component) {
	  _inherits(Results_Screen, _React$Component);

	  function Results_Screen(props) {
	    _classCallCheck(this, Results_Screen);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results_Screen).call(this, props));

	    _this.state = {
	      data_list: []
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

	        this.forceUpdate();
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      return _react2.default.createElement(
	        "div",
	        { className: "results_screen" },
	        _react2.default.createElement(Result, null),
	        _react2.default.createElement(List, { data: this.state.data_list })
	      );
	    }
	  }]);

	  return Results_Screen;
	}(_react2.default.Component);

	var Result = function (_React$Component2) {
	  _inherits(Result, _React$Component2);

	  function Result() {
	    _classCallCheck(this, Result);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Result).apply(this, arguments));
	  }

	  _createClass(Result, [{
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
	            _react2.default.createElement("img", { className: "image", src: "/imgs/unknown-user.png" })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_title" },
	            "This is a title"
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_screen_description" },
	            "This is a description ..."
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
	      result_bar: []
	    };
	    return _this4;
	  }

	  _createClass(List, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      var _this5 = this;

	      if (nextProps.data !== this.props.data) {
	        this.state.result_bar = [];

	        nextProps.data.forEach(function (result, i) {
	          _this5.state.result_bar.push(_react2.default.createElement(Result_Bar, { key: i, index: i,
	            name: result.name }));
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

	    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Result_Bar).call(this, props));

	    _this6.state = {
	      background_color: ""
	    };
	    return _this6;
	  }

	  _createClass(Result_Bar, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      console.log("I'm here");
	      if (nextProps.index !== this.props.index) {

	        if (nextProps.index % 2 === 1) {
	          this.setState({
	            background_color: "light"
	          });
	        } else {
	          this.setState({
	            background_color: "dark"
	          });
	        }
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "result_bar " + this.state.background_color },
	        _react2.default.createElement(
	          "div",
	          { className: "result_name" },
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