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
exports.id = "pages/api/create";
exports.ids = ["pages/api/create"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU12QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBLEdBQUc7QUFFMUQsSUFBSUcsSUFBeUIsRUFBY0QsT0FBT0QsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLWZpbmFsLy4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcblxuZGVjbGFyZSBnbG9iYWwge1xuICAgIHZhciBwcmlzbWE6IFByaXNtYUNsaWVudCB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgZ2xvYmFsLnByaXNtYSA9IHByaXNtYTsiXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/create.ts":
/*!*****************************!*\
  !*** ./pages/api/create.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const { title , content  } = req.body;\n    try {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.note.create({\n            data: {\n                title,\n                content\n            }\n        });\n        res.status(200).json({\n            message: \"Note Created!\"\n        });\n    } catch (error) {\n        console.log(\"Fail :(\");\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvY3JlYXRlLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRzNCLGVBQWVDLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUM7SUFDNUUsTUFBTSxFQUFDQyxNQUFLLEVBQUVDLFFBQU8sRUFBQyxHQUFHSCxJQUFJSSxJQUFJO0lBRWpDLElBQUk7UUFDQSxNQUFNTiwyREFBa0IsQ0FBQztZQUNyQlMsTUFBTTtnQkFDRkw7Z0JBQ0FDO1lBQ0o7UUFDSjtRQUNBRixJQUFJTyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUNDLFNBQVM7UUFBZTtJQUNsRCxFQUFFLE9BQU9DLE9BQU07UUFDWEMsUUFBUUMsR0FBRyxDQUFDO0lBQ2hCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLWZpbmFsLy4vcGFnZXMvYXBpL2NyZWF0ZS50cz9mMmNhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi9saWIvcHJpc21hXCI7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSl7XG4gICAgY29uc3Qge3RpdGxlLCBjb250ZW50fSA9IHJlcS5ib2R5XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBwcmlzbWEubm90ZS5jcmVhdGUoe1xuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgIHRpdGxlLCBcbiAgICAgICAgICAgICAgICBjb250ZW50XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHttZXNzYWdlOiAnTm90ZSBDcmVhdGVkISd9KVxuICAgIH0gY2F0Y2ggKGVycm9yKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJGYWlsIDooXCIpXG4gICAgfVxufSJdLCJuYW1lcyI6WyJwcmlzbWEiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidGl0bGUiLCJjb250ZW50IiwiYm9keSIsIm5vdGUiLCJjcmVhdGUiLCJkYXRhIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/create.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/create.ts"));
module.exports = __webpack_exports__;

})();