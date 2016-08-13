webpackHotUpdate(0,[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(35);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
	        _react2.default.createElement(
	          'div',
	          { className: 'search_bar_wrapper' },
	          _react2.default.createElement(
	            'div',
	            { className: 'search_bar' },
	            _react2.default.createElement('input', { className: 'search_bar_input', type: 'text', name: 'search_bar_input',
	              placeholder: 'WHERE YOU AT?' }),
	            _react2.default.createElement(
	              'button',
	              { className: 'search_bar_button' },
	              'GO'
	            )
	          ),
	          _react2.default.createElement(
	            'div',
	            { className: 'results_list' },
	            _react2.default.createElement(
	              'div',
	              { className: 'result_bar' },
	              _react2.default.createElement(
	                'div',
	                { className: 'result_image' },
	                _react2.default.createElement('img', { scr: 'https://at-cdn-s01.audiotool.com/2013/05/11/users/guess_audiotool/avatar256x256-709d163bfa4a4ebdb25160d094551c33.jpg' })
	              ),
	              _react2.default.createElement(
	                'div',
	                { className: 'result_content' },
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
	          )
	        )
	      );
	    }
	  }]);

	  return Main;
	}(_react2.default.Component);

	_reactDom2.default.render(_react2.default.createElement(Main, null), document.getElementById('app'));

/***/ }
])