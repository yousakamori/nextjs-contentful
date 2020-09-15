module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/post.js":
/*!****************************!*\
  !*** ./components/post.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @contentful/rich-text-react-renderer */ \"@contentful/rich-text-react-renderer\");\n/* harmony import */ var _contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/you/programs/nextjs/nextjs-contentful/components/post.js\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nfunction Post({\n  image,\n  title,\n  body,\n  slug\n}) {\n  return __jsx(\"div\", {\n    className: \"jsx-2483058086\" + \" \" + \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    href: image.fields.file.url,\n    className: \"jsx-2483058086\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    alt: image.fields.title,\n    src: image.fields.file.url,\n    className: \"jsx-2483058086\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  })), __jsx(\"div\", {\n    className: \"jsx-2483058086\" + \" \" + \"text\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }\n  }, __jsx(\"h2\", {\n    className: \"jsx-2483058086\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 9\n    }\n  }, title)), __jsx(\"div\", {\n    className: \"jsx-2483058086\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }\n  }, Object(_contentful_rich_text_react_renderer__WEBPACK_IMPORTED_MODULE_2__[\"documentToReactComponents\"])(body)), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2483058086\",\n    __self: this\n  }, \".container.jsx-2483058086{cursor:pointer;height:453px;margin-bottom:48px;}a.jsx-2483058086{border-bottom:none;}a.jsx-2483058086:hover{border-bottom:none;}.text.jsx-2483058086{margin-top:-160px;padding:24px;position:absolute;}h2.jsx-2483058086{color:white;font-size:24px;margin-bottom:0;}\\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy95b3UvcHJvZ3JhbXMvbmV4dGpzL25leHRqcy1jb250ZW50ZnVsL2NvbXBvbmVudHMvcG9zdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFja0IsQUFHMEIsQUFLSSxBQUdBLEFBR0QsQUFLTixZQUNHLEdBaEJGLEdBV0EsQ0FOZixBQUdBLFFBU2tCLENBaEJHLEdBV0QsWUFNcEIsSUFoQkEsRUFXQSIsImZpbGUiOiIvVXNlcnMveW91L3Byb2dyYW1zL25leHRqcy9uZXh0anMtY29udGVudGZ1bC9jb21wb25lbnRzL3Bvc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzIH0gZnJvbSAnQGNvbnRlbnRmdWwvcmljaC10ZXh0LXJlYWN0LXJlbmRlcmVyJztcblxuZnVuY3Rpb24gUG9zdCh7IGltYWdlLCB0aXRsZSwgYm9keSwgc2x1ZyB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxhIGhyZWY9e2ltYWdlLmZpZWxkcy5maWxlLnVybH0+XG4gICAgICAgIDxpbWcgYWx0PXtpbWFnZS5maWVsZHMudGl0bGV9IHNyYz17aW1hZ2UuZmllbGRzLmZpbGUudXJsfSAvPlxuICAgICAgPC9hPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0XCI+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgeyBkb2N1bWVudFRvUmVhY3RDb21wb25lbnRzKGJvZHkpIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA0NTNweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA0OHB4O1xuICAgICAgICB9XG4gICAgICAgIGEge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgYTpob3ZlciB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogLTE2MHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB9XG4gICAgICAgIGgyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3N0XG4iXX0= */\\n/*@ sourceURL=/Users/you/programs/nextjs/nextjs-contentful/components/post.js */\"));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3Bvc3QuanM/YzRhZSJdLCJuYW1lcyI6WyJQb3N0IiwiaW1hZ2UiLCJ0aXRsZSIsImJvZHkiLCJzbHVnIiwiZmllbGRzIiwiZmlsZSIsInVybCIsImRvY3VtZW50VG9SZWFjdENvbXBvbmVudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsU0FBU0EsSUFBVCxDQUFjO0FBQUVDLE9BQUY7QUFBU0MsT0FBVDtBQUFnQkMsTUFBaEI7QUFBc0JDO0FBQXRCLENBQWQsRUFBNEM7QUFDMUMsU0FDRTtBQUFBLHdDQUFlLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFFSCxLQUFLLENBQUNJLE1BQU4sQ0FBYUMsSUFBYixDQUFrQkMsR0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFHLEVBQUVOLEtBQUssQ0FBQ0ksTUFBTixDQUFhSCxLQUF2QjtBQUE4QixPQUFHLEVBQUVELEtBQUssQ0FBQ0ksTUFBTixDQUFhQyxJQUFiLENBQWtCQyxHQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLEVBSUU7QUFBQSx3Q0FBZSxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBS0wsS0FBTCxDQURGLENBSkYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSU0sc0dBQXlCLENBQUNMLElBQUQsQ0FEN0IsQ0FQRjtBQUFBO0FBQUE7QUFBQSx1bkVBREY7QUFvQ0Q7O0FBRWNILG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9wb3N0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyB9IGZyb20gJ0Bjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlcic7XG5cbmZ1bmN0aW9uIFBvc3QoeyBpbWFnZSwgdGl0bGUsIGJvZHksIHNsdWcgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8YSBocmVmPXtpbWFnZS5maWVsZHMuZmlsZS51cmx9PlxuICAgICAgICA8aW1nIGFsdD17aW1hZ2UuZmllbGRzLnRpdGxlfSBzcmM9e2ltYWdlLmZpZWxkcy5maWxlLnVybH0gLz5cbiAgICAgIDwvYT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuICAgICAgICA8aDI+e3RpdGxlfTwvaDI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHsgZG9jdW1lbnRUb1JlYWN0Q29tcG9uZW50cyhib2R5KSB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIGhlaWdodDogNDUzcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNDhweDtcbiAgICAgICAgfVxuICAgICAgICBhIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNjBweDtcbiAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9zdFxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/post.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_post_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/post.js */ \"./components/post.js\");\nvar _jsxFileName = \"/Users/you/programs/nextjs/nextjs-contentful/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nconst client = __webpack_require__(/*! contentful */ \"contentful\").createClient({\n  space: \"e722h2reiaxa\",\n  accessToken: \"vbUTO5IZzGccbSQ2uP1ccTf_WB72aEOHfote0oNRcQ0\"\n});\n\nfunction HomePage() {\n  async function fetchEntries() {\n    const entries = await client.getEntries();\n    if (entries.items) return entries.items;\n    console.log(`Error getting Entries for ${contentType.name}.`);\n  }\n\n  const {\n    0: posts,\n    1: setPosts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    async function getPosts() {\n      const allPosts = await fetchEntries();\n      setPosts([...allPosts]);\n    }\n\n    getPosts();\n  }, []);\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 9\n    }\n  }, \"Next.js + Contentful\"), __jsx(\"link\", {\n    rel: \"stylesheet\",\n    href: \"https://css.zeit.sh/v1.css\",\n    type: \"text/css\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  })), posts.length > 0 ? posts.map(p => __jsx(_components_post_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    key: p.sys.id,\n    image: p.fields.image,\n    title: p.fields.title,\n    body: p.fields.body,\n    slug: p.fields.slug,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }\n  })) : null);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbImNsaWVudCIsInJlcXVpcmUiLCJjcmVhdGVDbGllbnQiLCJzcGFjZSIsInByb2Nlc3MiLCJhY2Nlc3NUb2tlbiIsIk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfQUNDRVNTX1RPS0VOIiwiSG9tZVBhZ2UiLCJmZXRjaEVudHJpZXMiLCJlbnRyaWVzIiwiZ2V0RW50cmllcyIsIml0ZW1zIiwiY29uc29sZSIsImxvZyIsImNvbnRlbnRUeXBlIiwibmFtZSIsInBvc3RzIiwic2V0UG9zdHMiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImdldFBvc3RzIiwiYWxsUG9zdHMiLCJsZW5ndGgiLCJtYXAiLCJwIiwic3lzIiwiaWQiLCJmaWVsZHMiLCJpbWFnZSIsInRpdGxlIiwiYm9keSIsInNsdWciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLG1CQUFPLENBQUMsOEJBQUQsQ0FBUCxDQUFzQkMsWUFBdEIsQ0FBbUM7QUFDaERDLE9BQUssRUFBRUMsY0FEeUM7QUFFaERDLGFBQVcsRUFBRUQsNkNBQStDRTtBQUZaLENBQW5DLENBQWY7O0FBS0EsU0FBU0MsUUFBVCxHQUFvQjtBQUNsQixpQkFBZUMsWUFBZixHQUE4QjtBQUM1QixVQUFNQyxPQUFPLEdBQUcsTUFBTVQsTUFBTSxDQUFDVSxVQUFQLEVBQXRCO0FBQ0EsUUFBSUQsT0FBTyxDQUFDRSxLQUFaLEVBQW1CLE9BQU9GLE9BQU8sQ0FBQ0UsS0FBZjtBQUNuQkMsV0FBTyxDQUFDQyxHQUFSLENBQWEsNkJBQTRCQyxXQUFXLENBQUNDLElBQUssR0FBMUQ7QUFDRDs7QUFFRCxRQUFNO0FBQUEsT0FBQ0MsS0FBRDtBQUFBLE9BQVFDO0FBQVIsTUFBb0JDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUVBQyx5REFBUyxDQUFDLE1BQU07QUFDZCxtQkFBZUMsUUFBZixHQUEwQjtBQUN4QixZQUFNQyxRQUFRLEdBQUcsTUFBTWIsWUFBWSxFQUFuQztBQUNBUyxjQUFRLENBQUMsQ0FBQyxHQUFHSSxRQUFKLENBQUQsQ0FBUjtBQUNEOztBQUNERCxZQUFRO0FBQ1QsR0FOUSxFQU1OLEVBTk0sQ0FBVDtBQVFBLFNBQ0UsbUVBQ0UsTUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixFQUVFO0FBQ0UsT0FBRyxFQUFDLFlBRE47QUFFRSxRQUFJLEVBQUMsNEJBRlA7QUFHRSxRQUFJLEVBQUMsVUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkYsQ0FERixFQVNJSixLQUFLLENBQUNNLE1BQU4sR0FBZSxDQUFmLEdBQ0VOLEtBQUssQ0FBQ08sR0FBTixDQUFVQyxDQUFDLElBQ1QsTUFBQywyREFBRDtBQUNFLE9BQUcsRUFBRUEsQ0FBQyxDQUFDQyxHQUFGLENBQU1DLEVBRGI7QUFFRSxTQUFLLEVBQUVGLENBQUMsQ0FBQ0csTUFBRixDQUFTQyxLQUZsQjtBQUdFLFNBQUssRUFBRUosQ0FBQyxDQUFDRyxNQUFGLENBQVNFLEtBSGxCO0FBSUUsUUFBSSxFQUFFTCxDQUFDLENBQUNHLE1BQUYsQ0FBU0csSUFKakI7QUFLRSxRQUFJLEVBQUVOLENBQUMsQ0FBQ0csTUFBRixDQUFTSSxJQUxqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FERixHQVVFLElBbkJOLENBREY7QUF1QkQ7O0FBRWN4Qix1RUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IFBvc3QgZnJvbSAnLi4vY29tcG9uZW50cy9wb3N0LmpzJ1xuXG5jb25zdCBjbGllbnQgPSByZXF1aXJlKCdjb250ZW50ZnVsJykuY3JlYXRlQ2xpZW50KHtcbiAgc3BhY2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NPTlRFTlRGVUxfU1BBQ0VfSUQsXG4gIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DT05URU5URlVMX0FDQ0VTU19UT0tFTlxufSlcblxuZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoRW50cmllcygpIHtcbiAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgY2xpZW50LmdldEVudHJpZXMoKVxuICAgIGlmIChlbnRyaWVzLml0ZW1zKSByZXR1cm4gZW50cmllcy5pdGVtc1xuICAgIGNvbnNvbGUubG9nKGBFcnJvciBnZXR0aW5nIEVudHJpZXMgZm9yICR7Y29udGVudFR5cGUubmFtZX0uYClcbiAgfVxuXG4gIGNvbnN0IFtwb3N0cywgc2V0UG9zdHNdID0gdXNlU3RhdGUoW10pXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRQb3N0cygpIHtcbiAgICAgIGNvbnN0IGFsbFBvc3RzID0gYXdhaXQgZmV0Y2hFbnRyaWVzKClcbiAgICAgIHNldFBvc3RzKFsuLi5hbGxQb3N0c10pXG4gICAgfVxuICAgIGdldFBvc3RzKClcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5OZXh0LmpzICsgQ29udGVudGZ1bDwvdGl0bGU+XG4gICAgICAgIDxsaW5rXG4gICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vY3NzLnplaXQuc2gvdjEuY3NzXCJcbiAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgeyBwb3N0cy5sZW5ndGggPiAwIFxuICAgICAgICA/IHBvc3RzLm1hcChwID0+IChcbiAgICAgICAgICAgIDxQb3N0XG4gICAgICAgICAgICAgIGtleT17cC5zeXMuaWR9XG4gICAgICAgICAgICAgIGltYWdlPXtwLmZpZWxkcy5pbWFnZX1cbiAgICAgICAgICAgICAgdGl0bGU9e3AuZmllbGRzLnRpdGxlfVxuICAgICAgICAgICAgICBib2R5PXtwLmZpZWxkcy5ib2R5fVxuICAgICAgICAgICAgICBzbHVnPXtwLmZpZWxkcy5zbHVnfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApKVxuICAgICAgICA6IG51bGx9XG4gICAgPC8+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "@contentful/rich-text-react-renderer":
/*!*******************************************************!*\
  !*** external "@contentful/rich-text-react-renderer" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@contentful/rich-text-react-renderer\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAY29udGVudGZ1bC9yaWNoLXRleHQtcmVhY3QtcmVuZGVyZXJcIj8wZjk4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IkBjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjb250ZW50ZnVsL3JpY2gtdGV4dC1yZWFjdC1yZW5kZXJlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@contentful/rich-text-react-renderer\n");

/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"contentful\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb250ZW50ZnVsXCI/OWU0YSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjb250ZW50ZnVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29udGVudGZ1bFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///contentful\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });