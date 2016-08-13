webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _searchBar = __webpack_require__(175);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	var _resultsList = __webpack_require__(176);

	var _resultsList2 = _interopRequireDefault(_resultsList);

	var _notif = __webpack_require__(177);

	var _notif2 = _interopRequireDefault(_notif);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(178);

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
	      }
	    };

	    //Binding
	    _this.setNotif = _this.setNotif.bind(_this);
	    _this.setDisplay = _this.setDisplay.bind(_this);
	    return _this;
	  }

	  _createClass(Main, [{
	    key: 'setNotif',
	    value: function setNotif(header, body) {
	      this.setState({
	        data_notif: {
	          header: header,
	          body: body
	        }
	      });

	      this.setDisplay("blur");
	      this.refs.Notif.setDisplay("normal");
	    }

	    //setDisplay function
	    //----------------------
	    // display = blur: blur
	    // display = hidden: hidden
	    // display = null : normal

	  }, {
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
	        { className: "main " + this.state.display },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          'NIGHT LIFE COORDINATION'
	        ),
	        _react2.default.createElement(_searchBar2.default, { setNotif: this.setNotif }),
	        _react2.default.createElement(_resultsList2.default, null),
	        _react2.default.createElement(_notif2.default, { ref: 'Notif', data: this.state.data_notif })
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ }
])