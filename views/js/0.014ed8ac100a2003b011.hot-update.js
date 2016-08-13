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

	    //Binding
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Results_Screen).call(this, props));

	    _this.loadResult = _this.loadResult.bind(_this);

	    _this.state = {
	      data_list: [],
	      data_result: {}
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
	    key: "loadResult",
	    value: function loadResult(index) {
	      var result = {
	        title: this.props.data[index].name,
	        description: this.props.data[index].snippet_text,
	        url: this.props.data[index].url,
	        rating_url: this.props.data[index].rating_img_url,
	        image: this.props.data[index].image_url
	      };

	      this.setState({
	        data_result: result
	      });
	    }
	  }, {
	    key: "render",
	    value: function render() {

	      return _react2.default.createElement(
	        "div",
	        { className: "results_screen" },
	        _react2.default.createElement(Result, { data: this.state.data_result }),
	        _react2.default.createElement(List, { data: this.state.data_list, loadResult: this.loadResult })
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
	            _react2.default.createElement("img", { className: "image", src: this.props.data.image })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_title" },
	            this.props.data.title
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_rating" },
	            _react2.default.createElement("img", { className: "rating_image", src: this.props.data.rating_url })
	          ),
	          _react2.default.createElement(
	            "div",
	            { className: "result_screen_description" },
	            this.props.data.description
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
	            loadResult: _this5.props.loadResult, name: result.name }));
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

	    //Binding
	    var _this6 = _possibleConstructorReturn(this, Object.getPrototypeOf(Result_Bar).call(this, props));

	    _this6.onClick_name = _this6.onClick_name.bind(_this6);

	    //set color
	    var background_color;

	    if (props.index % 2 === 1) {
	      background_color = "light";
	    } else {
	      background_color = "dark";
	    }

	    //Set state
	    _this6.state = {
	      background_color: background_color
	    };
	    return _this6;
	  }

	  _createClass(Result_Bar, [{
	    key: "onClick_name",
	    value: function onClick_name() {
	      this.props.loadResult(this.props.index);
	    }
	  }, {
	    key: "render",
	    value: function render() {
	      return _react2.default.createElement(
	        "div",
	        { className: "result_bar " + this.state.background_color },
	        _react2.default.createElement(
	          "div",
	          { className: "result_name", onClick: this.onClick_name },
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