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

	          _this2.refs.Results_Screen.setDisplay("normal");
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
	          _react2.default.createElement(_resultsScreen2.default, { ref: 'Results_Screen', data: this.state.data_results_screen })
	        ),
	        _react2.default.createElement(_notif2.default, { ref: 'Notif', data: this.state.data_notif })
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ }
])