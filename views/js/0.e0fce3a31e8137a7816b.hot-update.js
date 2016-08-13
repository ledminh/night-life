webpackHotUpdate(0,{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _searchBar = __webpack_require__(179);

	var _searchBar2 = _interopRequireDefault(_searchBar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	__webpack_require__(175);

	var Main = function (_React$Component) {
	  _inherits(Main, _React$Component);

	  function Main() {
	    _classCallCheck(this, Main);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Main).apply(this, arguments));
	  }

	  _createClass(Main, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        { className: 'main' },
	        _react2.default.createElement(
	          'div',
	          { className: 'header' },
	          'NIGHT LIFE COORDINATION'
	        ),
	        _react2.default.createElement(_searchBar2.default, null),
	        _react2.default.createElement(
	          'div',
	          { className: 'results_list' },
	          _react2.default.createElement(
	            'div',
	            { className: 'results_content' },
	            _react2.default.createElement(
	              'div',
	              { className: 'result_bar' },
	              _react2.default.createElement('img', { className: 'result_image', src: './imgs/unknown-user.png' }),
	              _react2.default.createElement(
	                'div',
	                { className: 'result_bar_content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'result_title' },
	                  'This is a title'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'result_description' },
	                  'Some description here ...'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'button_going' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'number_going' },
	                    '0'
	                  ),
	                  ' GOING'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'result_bar' },
	              _react2.default.createElement('img', { className: 'result_image', src: './imgs/unknown-user.png' }),
	              _react2.default.createElement(
	                'div',
	                { className: 'result_bar_content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'result_title' },
	                  'This is a title'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'result_description' },
	                  'Some description here ...'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'button_going' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'number_going' },
	                    '0'
	                  ),
	                  ' GOING'
	                )
	              )
	            ),
	            _react2.default.createElement(
	              'div',
	              { className: 'result_bar' },
	              _react2.default.createElement('img', { className: 'result_image', src: './imgs/unknown-user.png' }),
	              _react2.default.createElement(
	                'div',
	                { className: 'result_bar_content' },
	                _react2.default.createElement(
	                  'div',
	                  { className: 'result_title' },
	                  'This is a title'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'result_description' },
	                  'Some description here ...'
	                ),
	                _react2.default.createElement(
	                  'div',
	                  { className: 'button_going' },
	                  _react2.default.createElement(
	                    'span',
	                    { className: 'number_going' },
	                    '0'
	                  ),
	                  ' GOING'
	                )
	              )
	            )
	          ),
	          _react2.default.createElement('div', { className: 'footer' })
	        )
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ },

/***/ 179:
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

	  function Search_Bar() {
	    _classCallCheck(this, Search_Bar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Search_Bar).apply(this, arguments));
	  }

	  _createClass(Search_Bar, [{
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "search_bar_wrapper" },
	        _react2.default.createElement(
	          "div",
	          { className: "search_bar" },
	          _react2.default.createElement("input", { className: "search_bar_input", type: "text", name: "search_bar_input",
	            placeholder: "WHERE YOU AT?" })
	        ),
	        _react2.default.createElement(
	          "div",
	          { className: "search_bar_button" },
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