webpackHotUpdate(0,{

/***/ 177:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(182);

	var Notif = function (_React$Component) {
	  _inherits(Notif, _React$Component);

	  function Notif(props) {
	    _classCallCheck(this, Notif);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Notif).call(this, props));

	    _this.state = {
	      display: "hidden"
	    };

	    //Binding
	    _this.hide = _this.hide.bind(_this);
	    return _this;
	  }

	  _createClass(Notif, [{
	    key: 'setDisplay',
	    value: function setDisplay(display) {
	      if (display) {
	        this.setState({
	          display: display
	        });
	      } else {
	        this.setState({
	          display: ""
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: "notif " + this.state.display },
	        _react2.default.createElement(
	          'div',
	          { className: 'notif_header' },
	          this.props.data.header
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'notif_body' },
	          this.props.data.body
	        )
	      );
	    }
	  }]);

	  return Notif;
	}(_react2.default.Component);

	module.exports = Notif;

/***/ }

})