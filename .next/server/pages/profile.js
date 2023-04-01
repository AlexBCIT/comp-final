"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/profile";
exports.ids = ["pages/profile"];
exports.modules = {

/***/ "./pages/profile.jsx":
/*!***************************!*\
  !*** ./pages/profile.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Component)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Component() {\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    if (session) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                \"Signed in as \",\n                session.user.email,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 43\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: session.user.image\n                }, void 0, false, {\n                    fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, this),\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                    lineNumber: 10,\n                    columnNumber: 42\n                }, this),\n                \"Welcome \",\n                session.user.name,\n                \" \",\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                    fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                    lineNumber: 11,\n                    columnNumber: 37\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)(),\n                    children: \"Sign out\"\n                }, void 0, false, {\n                    fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            \"Not signed in \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                lineNumber: 18,\n                columnNumber: 21\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)(),\n                children: \"Sign in\"\n            }, void 0, false, {\n                fileName: \"/Users/alexsomerville/Desktop/comp-final/pages/profile.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9maWxlLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBNkQ7QUFFOUMsU0FBU0csWUFBWTtJQUNsQyxNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRSxHQUFHTCwyREFBVUE7SUFFcEMsSUFBSUssU0FBUztRQUNYLHFCQUNFOztnQkFBRTtnQkFDY0EsUUFBUUMsSUFBSSxDQUFDQyxLQUFLO2dCQUFDOzhCQUFDLDhEQUFDQzs7Ozs7OEJBQ25DLDhEQUFDQztvQkFBSUMsS0FBS0wsUUFBUUMsSUFBSSxDQUFDSyxLQUFLOzs7Ozs7Z0JBQUk7OEJBQUMsOERBQUNIOzs7OztnQkFBSztnQkFDOUJILFFBQVFDLElBQUksQ0FBQ00sSUFBSTtnQkFBQzs4QkFBQyw4REFBQ0o7Ozs7OzhCQUM3Qiw4REFBQ0s7b0JBQU9DLFNBQVMsSUFBTVosd0RBQU9BOzhCQUFJOzs7Ozs7OztJQUd4QyxDQUFDO0lBQ0QscUJBQ0U7O1lBQUU7MEJBQ2MsOERBQUNNOzs7OzswQkFDZiw4REFBQ0s7Z0JBQU9DLFNBQVMsSUFBTWIsdURBQU1BOzBCQUFJOzs7Ozs7OztBQUd2QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZXMtZmluYWwvLi9wYWdlcy9wcm9maWxlLmpzeD8zZDIxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25Jbiwgc2lnbk91dCB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb25lbnQoKSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiB9ID0gdXNlU2Vzc2lvbigpXG5cbiAgaWYgKHNlc3Npb24pIHtcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIuZW1haWx9IDxiciAvPlxuICAgICAgICA8aW1nIHNyYz17c2Vzc2lvbi51c2VyLmltYWdlfSAvPiA8YnIgLz5cbiAgICAgICAgV2VsY29tZSB7c2Vzc2lvbi51c2VyLm5hbWV9IDxiciAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cbiAgICAgIDwvPlxuICAgIClcbiAgfVxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICBOb3Qgc2lnbmVkIGluIDxiciAvPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+U2lnbiBpbjwvYnV0dG9uPlxuICAgIDwvPlxuICApXG59XG4iXSwibmFtZXMiOlsidXNlU2Vzc2lvbiIsInNpZ25JbiIsInNpZ25PdXQiLCJDb21wb25lbnQiLCJkYXRhIiwic2Vzc2lvbiIsInVzZXIiLCJlbWFpbCIsImJyIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJuYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/profile.jsx\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/profile.jsx"));
module.exports = __webpack_exports__;

})();