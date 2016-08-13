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
	          { className: "results_content" },
	          this.state.result_bars
	        ),
	        _react2.default.createElement("div", { className: "footer" })
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

/***/ },

/***/ 184:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(185);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(181)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(185, function() {
				var newContent = __webpack_require__(185);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(180)();
	// imports


	// module
	exports.push([module.id, ".results_list {\n  box-sizing: border-box;\n  width: 80%;\n  margin: auto;\n  margin-top: 50px;\n  margin-bottom: 200px;\n  border: 1px solid;\n  border-radius: 8px 8px 0px 0px; }\n\n.results_content {\n  padding: 10px; }\n\n.result_bar {\n  box-sizing: border-box;\n  border: 1px solid;\n  border-radius: 10px;\n  margin: auto;\n  margin-bottom: 8px;\n  height: 120px;\n  padding: 5px; }\n  .result_bar:hover {\n    border: 4px solid;\n    background-color: #e6e6e6; }\n\n.image_wrapper {\n  display: inline-block;\n  padding: 5px;\n  height: 95%;\n  text-align: center;\n  border: 1px solid; }\n\n.image {\n  height: 95%; }\n\n.result_bar_content {\n  display: inline-block;\n  padding: 10px;\n  height: 95%; }\n\n.result_title {\n  font-weight: bold;\n  font-size: 20px;\n  color: #ef3e42; }\n\n.button_going {\n  width: 100px;\n  border: 1px solid;\n  padding: 4px;\n  font-weight: bold;\n  font-size: 20px;\n  margin-top: 4px;\n  margin-bottom: 4px;\n  text-align: center;\n  cursor: pointer; }\n  .button_going:hover {\n    background-color: #9a9a9a; }\n", ""]);

	// exports


/***/ }

})