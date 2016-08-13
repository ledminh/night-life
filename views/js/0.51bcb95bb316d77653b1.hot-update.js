webpackHotUpdate(0,{

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(183);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(181)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(183, function() {
				var newContent = __webpack_require__(183);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(180)();
	// imports


	// module
	exports.push([module.id, ".notif {\n  position: relative;\n  top: -320px;\n  margin: auto;\n  width: 250px;\n  border: 1px solid;\n  text-align: center;\n  z-index: 10; }\n\n.notif_header {\n  font-size: 18px;\n  font-weight: bold;\n  color: #B80934;\n  background-color: #FEF3B8; }\n\n.notif_body {\n  background-color: #ccccff; }\n", ""]);

	// exports


/***/ }

})