webpackHotUpdate(0,{

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Search_Bar = function (_React$Component) {
	  _inherits(Search_Bar, _React$Component);

	  function Search_Bar(props) {
	    _classCallCheck(this, Search_Bar);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Search_Bar).call(this, props));

	    _this.state = {
	      value: ""
	    };

	    //Binding
	    _this.onChange = _this.onChange.bind(_this);
	    _this.onClick = _this.onClick.bind(_this);
	    _this.onKeyDown = _this.onKeyDown.bind(_this);
	    return _this;
	  }

	  _createClass(Search_Bar, [{
	    key: "componentWillReceiveProps",
	    value: function componentWillReceiveProps(nextProps) {
	      if (this.props.user_info !== nextProps.user_info && nextProps.user_info.keyword) {
	        this.setState({
	          value: nextProps.keyword
	        });

	        this.props.loadData("Results_Screen", keyword);
	      }
	    }
	  }, {
	    key: "onChange",
	    value: function onChange(event) {
	      this.setState({
	        value: event.target.value
	      });
	    }
	  }, {
	    key: "onClick",
	    value: function onClick() {
	      if (this.state.value !== "") {
	        this.props.loadData("Results_Screen", this.state.value);

	        this.setState({
	          value: ""
	        });
	      } else {
	        this.props.setNotif("Error", "You must enter something on the search bar");
	      }
	    }
	  }, {
	    key: "onKeyDown",
	    value: function onKeyDown(event) {
	      if (event.keyCode === 13) {
	        if (this.state.value !== "") {
	          this.props.loadData("Results_Screen", this.state.value);

	          this.setState({
	            value: ""
	          });
	        } else {
	          this.props.setNotif("Error", "You must enter something on the search bar");
	        }
	      }
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "search_bar_wrapper" },
	        _react2.default.createElement(
	          "div",
	          { className: "search_bar" },
	          _react2.default.createElement("input", { className: "search_bar_input", type: "text", name: "search_bar_input",
	            placeholder: "WHERE YOU AT?", value: this.state.value,
	            onChange: this.onChange, onKeyDown: this.onKeyDown })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "search_bar_button", onClick: this.onClick },
	          "GO"
	        )
	      );
	    }
	  }]);

	  return Search_Bar;
	}(_react2.default.Component);

	module.exports = Search_Bar;

/***/ }

})