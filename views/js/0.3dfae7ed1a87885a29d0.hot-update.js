webpackHotUpdate(0,{

/***/ 176:
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

	var Results_List = function (_React$Component) {
	  _inherits(Results_List, _React$Component);

	  function Results_List(props) {
	    _classCallCheck(this, Results_List);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results_List).call(this, props));

	    _this.state = {
	      result_bars: []
	    };
	    return _this;
	  }

	  _createClass(Results_List, [{
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
	        { className: "results_list" },
	        _react2.default.createElement(
	          "div",
	          { className: "result_screen" },
	          _react2.default.createElement(
	            "div",
	            { className: "image_wrapper" },
	            _react2.default.createElement("img", { className: "image", src: "/imgs/unknown-user.png" })
	          )
	        )
	      );
	    }
	  }]);

	  return Results_List;
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
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "result_bar_content" },
	          _react2.default.createElement(
	            "div",
	            { className: "result_title" },
	            this.props.title
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_description" },
	            this.props.description
	          ),
	          _react2.default.createElement(Button_Going, null)
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

	module.exports = Results_List;

/***/ }

})