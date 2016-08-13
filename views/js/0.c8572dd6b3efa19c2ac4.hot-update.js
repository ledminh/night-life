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
	        { className: "results_screen" },
	        _react2.default.createElement(Result, null)
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