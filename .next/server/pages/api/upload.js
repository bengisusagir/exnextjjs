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
exports.id = "pages/api/upload";
exports.ids = ["pages/api/upload"];
exports.modules = {

/***/ "mv":
/*!*********************!*\
  !*** external "mv" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("mv");

/***/ }),

/***/ "../../../api-utils/node":
/*!*****************************************************!*\
  !*** external "next/dist/server/api-utils/node.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ "../route-module":
/*!************************************************************************!*\
  !*** external "next/dist/server/future/route-modules/route-module.js" ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

module.exports = import("formidable");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("/**\n * Hoists a name from a module or promised module.\n *\n * @param module the module to hoist the name from\n * @param name the name to hoist\n * @returns the value on the module (or promised module)\n */ \nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"hoist\", ({\n    enumerable: true,\n    get: function() {\n        return hoist;\n    }\n}));\nfunction hoist(module, name) {\n    // If the name is available in the module, return it.\n    if (name in module) {\n        return module[name];\n    }\n    // If a property called `then` exists, assume it's a promise and\n    // return a promise that resolves to the name.\n    if (\"then\" in module && typeof module.then === \"function\") {\n        return module.then((mod)=>hoist(mod, name));\n    }\n    // If we're trying to hoise the default export, and the module is a function,\n    // return the module itself.\n    if (typeof module === \"function\" && name === \"default\") {\n        return module;\n    }\n    // Otherwise, return undefined.\n    return undefined;\n}\n\n//# sourceMappingURL=helpers.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9oZWxwZXJzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQWlCO0FBQ2pCLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHlDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2hlbHBlcnMuanM/NDk5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhvaXN0cyBhIG5hbWUgZnJvbSBhIG1vZHVsZSBvciBwcm9taXNlZCBtb2R1bGUuXG4gKlxuICogQHBhcmFtIG1vZHVsZSB0aGUgbW9kdWxlIHRvIGhvaXN0IHRoZSBuYW1lIGZyb21cbiAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIHRvIGhvaXN0XG4gKiBAcmV0dXJucyB0aGUgdmFsdWUgb24gdGhlIG1vZHVsZSAob3IgcHJvbWlzZWQgbW9kdWxlKVxuICovIFwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiaG9pc3RcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGhvaXN0O1xuICAgIH1cbn0pO1xuZnVuY3Rpb24gaG9pc3QobW9kdWxlLCBuYW1lKSB7XG4gICAgLy8gSWYgdGhlIG5hbWUgaXMgYXZhaWxhYmxlIGluIHRoZSBtb2R1bGUsIHJldHVybiBpdC5cbiAgICBpZiAobmFtZSBpbiBtb2R1bGUpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZVtuYW1lXTtcbiAgICB9XG4gICAgLy8gSWYgYSBwcm9wZXJ0eSBjYWxsZWQgYHRoZW5gIGV4aXN0cywgYXNzdW1lIGl0J3MgYSBwcm9taXNlIGFuZFxuICAgIC8vIHJldHVybiBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmFtZS5cbiAgICBpZiAoXCJ0aGVuXCIgaW4gbW9kdWxlICYmIHR5cGVvZiBtb2R1bGUudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBtb2R1bGUudGhlbigobW9kKT0+aG9pc3QobW9kLCBuYW1lKSk7XG4gICAgfVxuICAgIC8vIElmIHdlJ3JlIHRyeWluZyB0byBob2lzZSB0aGUgZGVmYXVsdCBleHBvcnQsIGFuZCB0aGUgbW9kdWxlIGlzIGEgZnVuY3Rpb24sXG4gICAgLy8gcmV0dXJuIHRoZSBtb2R1bGUgaXRzZWxmLlxuICAgIGlmICh0eXBlb2YgbW9kdWxlID09PSBcImZ1bmN0aW9uXCIgJiYgbmFtZSA9PT0gXCJkZWZhdWx0XCIpIHtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9XG4gICAgLy8gT3RoZXJ3aXNlLCByZXR1cm4gdW5kZWZpbmVkLlxuICAgIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlbHBlcnMuanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload%5Cindex.js&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload%5Cindex.js&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/webpack/loaders/next-route-loader/helpers */ \"(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js\");\n/* harmony import */ var _pages_api_upload_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\upload\\index.js */ \"(api)/./pages/api/upload/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_api_upload_index_js__WEBPACK_IMPORTED_MODULE_3__]);\n_pages_api_upload_index_js__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// @ts-ignore this need to be imported from next/dist to be external\n\n\n\nconst PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;\n// Import the userland code.\n// @ts-expect-error - replaced by webpack/turbopack loader\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_upload_index_js__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_upload_index_js__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/upload\",\n        pathname: \"/api/upload\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_upload_index_js__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRnVwbG9hZCZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDdXBsb2FkJTVDaW5kZXguanMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDaUY7QUFDbEI7QUFDbUI7QUFDbEYsNEJBQTRCLHVHQUEwQjtBQUN0RDtBQUNBO0FBQzJEO0FBQzNEO0FBQ0EsaUVBQWUsZ0dBQUssQ0FBQyx1REFBUSxZQUFZLEVBQUM7QUFDMUM7QUFDTyxlQUFlLGdHQUFLLENBQUMsdURBQVE7QUFDcEM7QUFDTztBQUNQO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLFlBQVk7QUFDWixDQUFDOztBQUVELHFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLz8zYzhmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEB0cy1pZ25vcmUgdGhpcyBuZWVkIHRvIGJlIGltcG9ydGVkIGZyb20gbmV4dC9kaXN0IHRvIGJlIGV4dGVybmFsXG5pbXBvcnQgKiBhcyBtb2R1bGUgZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZVwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvbmV4dC1yb3V0ZS1sb2FkZXIvaGVscGVyc1wiO1xuY29uc3QgUGFnZXNBUElSb3V0ZU1vZHVsZSA9IG1vZHVsZS5QYWdlc0FQSVJvdXRlTW9kdWxlO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuLy8gQHRzLWV4cGVjdC1lcnJvciAtIHJlcGxhY2VkIGJ5IHdlYnBhY2svdHVyYm9wYWNrIGxvYWRlclxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXHVwbG9hZFxcXFxpbmRleC5qc1wiO1xuLy8gUmUtZXhwb3J0IHRoZSBoYW5kbGVyIChzaG91bGQgYmUgdGhlIGRlZmF1bHQgZXhwb3J0KS5cbmV4cG9ydCBkZWZhdWx0IGhvaXN0KHVzZXJsYW5kLCBcImRlZmF1bHRcIik7XG4vLyBSZS1leHBvcnQgY29uZmlnLlxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IGhvaXN0KHVzZXJsYW5kLCBcImNvbmZpZ1wiKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3VwbG9hZFwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3VwbG9hZFwiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload%5Cindex.js&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/upload/index.js":
/*!***********************************!*\
  !*** ./pages/api/upload/index.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([formidable__WEBPACK_IMPORTED_MODULE_0__]);\nformidable__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nvar mv = __webpack_require__(/*! mv */ \"mv\");\nconst config = {\n    api: {\n        bodyParser: false\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    const data = await new Promise((resolve, reject)=>{\n        const form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm();\n        form.parse(req, (err, fields, files)=>{\n            if (err) return reject(err);\n            console.log(fields, files);\n            console.log(files.file[0].filepath);\n            var oldPath = files.file[0].filepath;\n            console.log(oldPath);\n            const d = new Date();\n            let ms = d.getTime();\n            var newPath = `./public/uploads/` + ms + \".png\";\n            mv(oldPath, newPath, function(err) {});\n            res.status(200).json({\n                ms\n            });\n        });\n    });\n});\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdXBsb2FkL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ047QUFFbkMsSUFBSUcsS0FBS0MsbUJBQU9BLENBQUM7QUFHVixNQUFNQyxTQUFTO0lBQ2xCQyxLQUFLO1FBQ0ZDLFlBQVk7SUFDZjtBQUNKLEVBQUU7QUFFRixpRUFBZSxPQUFPQyxLQUFLQztJQUV2QixNQUFNQyxPQUFPLE1BQU0sSUFBSUMsUUFBUSxDQUFDQyxTQUFTQztRQUN0QyxNQUFNQyxPQUFPLElBQUlkLG9EQUFZQTtRQUU1QmMsS0FBS0MsS0FBSyxDQUFDUCxLQUFLLENBQUNRLEtBQUtDLFFBQVFDO1lBQzFCLElBQUlGLEtBQUssT0FBT0gsT0FBT0c7WUFDdkJHLFFBQVFDLEdBQUcsQ0FBQ0gsUUFBUUM7WUFDcEJDLFFBQVFDLEdBQUcsQ0FBQ0YsTUFBTUcsSUFBSSxDQUFDLEVBQUUsQ0FBQ0MsUUFBUTtZQUNsQyxJQUFJQyxVQUFVTCxNQUFNRyxJQUFJLENBQUMsRUFBRSxDQUFDQyxRQUFRO1lBQ3BDSCxRQUFRQyxHQUFHLENBQUNHO1lBQ1osTUFBTUMsSUFBSSxJQUFJQztZQUNkLElBQUlDLEtBQUtGLEVBQUVHLE9BQU87WUFDbEIsSUFBSUMsVUFBVSxDQUFDLGlCQUFpQixDQUFDLEdBQUNGLEtBQUc7WUFDckN2QixHQUFHb0IsU0FBU0ssU0FBUyxTQUFTWixHQUFHLEdBQ2pDO1lBQ0FQLElBQUlvQixNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO2dCQUFFSjtZQUFHO1FBQzlCO0lBQ0o7QUFFSixHQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3VwbG9hZC9pbmRleC5qcz9iNzk2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluY29taW5nRm9ybSB9IGZyb20gJ2Zvcm1pZGFibGUnXHJcbmltcG9ydCB7IHByb21pc2VzIGFzIGZzIH0gZnJvbSAnZnMnXHJcblxyXG52YXIgbXYgPSByZXF1aXJlKCdtdicpO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XHJcbiAgICBhcGk6IHtcclxuICAgICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxyXG4gICAgfVxyXG59O1xyXG4gXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4gICAgXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgY29uc3QgZm9ybSA9IG5ldyBJbmNvbWluZ0Zvcm0oKVxyXG4gICAgICAgXHJcbiAgICAgICAgZm9ybS5wYXJzZShyZXEsIChlcnIsIGZpZWxkcywgZmlsZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuIHJlamVjdChlcnIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpZWxkcywgZmlsZXMpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGZpbGVzLmZpbGVbMF0uZmlsZXBhdGgpXHJcbiAgICAgICAgICAgIHZhciBvbGRQYXRoID0gZmlsZXMuZmlsZVswXS5maWxlcGF0aDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cob2xkUGF0aClcclxuICAgICAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGxldCBtcyA9IGQuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB2YXIgbmV3UGF0aCA9IGAuL3B1YmxpYy91cGxvYWRzL2ArbXMrXCIucG5nXCI7XHJcbiAgICAgICAgICAgIG12KG9sZFBhdGgsIG5ld1BhdGgsIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtcyB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbn0iXSwibmFtZXMiOlsiSW5jb21pbmdGb3JtIiwicHJvbWlzZXMiLCJmcyIsIm12IiwicmVxdWlyZSIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJmb3JtIiwicGFyc2UiLCJlcnIiLCJmaWVsZHMiLCJmaWxlcyIsImNvbnNvbGUiLCJsb2ciLCJmaWxlIiwiZmlsZXBhdGgiLCJvbGRQYXRoIiwiZCIsIkRhdGUiLCJtcyIsImdldFRpbWUiLCJuZXdQYXRoIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/upload/index.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-kind.js":
/*!************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-kind.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\nObject.defineProperty(exports, \"RouteKind\", ({\n    enumerable: true,\n    get: function() {\n        return RouteKind;\n    }\n}));\nvar RouteKind;\n(function(RouteKind) {\n    RouteKind[/**\n   * `PAGES` represents all the React pages that are under `pages/`.\n   */ \"PAGES\"] = \"PAGES\";\n    RouteKind[/**\n   * `PAGES_API` represents all the API routes under `pages/api/`.\n   */ \"PAGES_API\"] = \"PAGES_API\";\n    RouteKind[/**\n   * `APP_PAGE` represents all the React pages that are under `app/` with the\n   * filename of `page.{j,t}s{,x}`.\n   */ \"APP_PAGE\"] = \"APP_PAGE\";\n    RouteKind[/**\n   * `APP_ROUTE` represents all the API routes and metadata routes that are under `app/` with the\n   * filename of `route.{j,t}s{,x}`.\n   */ \"APP_ROUTE\"] = \"APP_ROUTE\";\n})(RouteKind || (RouteKind = {}));\n\n//# sourceMappingURL=route-kind.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZC5qcyIsIm1hcHBpbmdzIjoiQUFBYTtBQUNiLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLDZDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQztBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLElBQUksRUFBRSxHQUFHO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixJQUFJLEVBQUUsR0FBRztBQUNsQztBQUNBLENBQUMsOEJBQThCOztBQUUvQiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kLmpzPzYyMTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZUtpbmRcIiwge1xuICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFJvdXRlS2luZDtcbiAgICB9XG59KTtcbnZhciBSb3V0ZUtpbmQ7XG4oZnVuY3Rpb24oUm91dGVLaW5kKSB7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgcGFnZXMvYC5cbiAgICovIFwiUEFHRVNcIl0gPSBcIlBBR0VTXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgUEFHRVNfQVBJYCByZXByZXNlbnRzIGFsbCB0aGUgQVBJIHJvdXRlcyB1bmRlciBgcGFnZXMvYXBpL2AuXG4gICAqLyBcIlBBR0VTX0FQSVwiXSA9IFwiUEFHRVNfQVBJXCI7XG4gICAgUm91dGVLaW5kWy8qKlxuICAgKiBgQVBQX1BBR0VgIHJlcHJlc2VudHMgYWxsIHRoZSBSZWFjdCBwYWdlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHBhZ2Uue2osdH1zeyx4fWAuXG4gICAqLyBcIkFQUF9QQUdFXCJdID0gXCJBUFBfUEFHRVwiO1xuICAgIFJvdXRlS2luZFsvKipcbiAgICogYEFQUF9ST1VURWAgcmVwcmVzZW50cyBhbGwgdGhlIEFQSSByb3V0ZXMgYW5kIG1ldGFkYXRhIHJvdXRlcyB0aGF0IGFyZSB1bmRlciBgYXBwL2Agd2l0aCB0aGVcbiAgICogZmlsZW5hbWUgb2YgYHJvdXRlLntqLHR9c3sseH1gLlxuICAgKi8gXCJBUFBfUk9VVEVcIl0gPSBcIkFQUF9ST1VURVwiO1xufSkoUm91dGVLaW5kIHx8IChSb3V0ZUtpbmQgPSB7fSkpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZS1raW5kLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-kind.js\n");

/***/ }),

/***/ "(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js":
/*!********************************************************************************!*\
  !*** ./node_modules/next/dist/server/future/route-modules/pages-api/module.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({\n    value: true\n}));\n0 && (0);\nfunction _export(target, all) {\n    for(var name in all)Object.defineProperty(target, name, {\n        enumerable: true,\n        get: all[name]\n    });\n}\n_export(exports, {\n    PagesAPIRouteModule: function() {\n        return PagesAPIRouteModule;\n    },\n    default: function() {\n        return _default;\n    }\n});\nconst _routemodule = __webpack_require__(/*! ../route-module */ \"../route-module\");\nconst _node = __webpack_require__(/*! ../../../api-utils/node */ \"../../../api-utils/node\");\nclass PagesAPIRouteModule extends _routemodule.RouteModule {\n    /**\n   *\n   * @param req the incoming server request\n   * @param res the outgoing server response\n   * @param context the context for the render\n   */ async render(req, res, context) {\n        await (0, _node.apiResolver)(req, res, context.query, this.userland, {\n            ...context.previewProps,\n            revalidate: context.revalidate,\n            trustHostHeader: context.trustHostHeader,\n            allowedRevalidateHeaderKeys: context.allowedRevalidateHeaderKeys,\n            hostname: context.hostname\n        }, context.minimalMode, context.dev, context.page);\n    }\n}\nconst _default = PagesAPIRouteModule;\n\n//# sourceMappingURL=module.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmpzIiwibWFwcGluZ3MiOiJBQUFhO0FBQ2IsOENBQTZDO0FBQzdDO0FBQ0EsQ0FBQyxFQUFDO0FBQ0YsTUFBTSxDQUdMO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHFCQUFxQixtQkFBTyxDQUFDLHdDQUFpQjtBQUM5QyxjQUFjLG1CQUFPLENBQUMsd0RBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuanM/YzkyZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbjAgJiYgKG1vZHVsZS5leHBvcnRzID0ge1xuICAgIFBhZ2VzQVBJUm91dGVNb2R1bGU6IG51bGwsXG4gICAgZGVmYXVsdDogbnVsbFxufSk7XG5mdW5jdGlvbiBfZXhwb3J0KHRhcmdldCwgYWxsKSB7XG4gICAgZm9yKHZhciBuYW1lIGluIGFsbClPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBuYW1lLCB7XG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGdldDogYWxsW25hbWVdXG4gICAgfSk7XG59XG5fZXhwb3J0KGV4cG9ydHMsIHtcbiAgICBQYWdlc0FQSVJvdXRlTW9kdWxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFBhZ2VzQVBJUm91dGVNb2R1bGU7XG4gICAgfSxcbiAgICBkZWZhdWx0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF9kZWZhdWx0O1xuICAgIH1cbn0pO1xuY29uc3QgX3JvdXRlbW9kdWxlID0gcmVxdWlyZShcIi4uL3JvdXRlLW1vZHVsZVwiKTtcbmNvbnN0IF9ub2RlID0gcmVxdWlyZShcIi4uLy4uLy4uL2FwaS11dGlscy9ub2RlXCIpO1xuY2xhc3MgUGFnZXNBUElSb3V0ZU1vZHVsZSBleHRlbmRzIF9yb3V0ZW1vZHVsZS5Sb3V0ZU1vZHVsZSB7XG4gICAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSByZXEgdGhlIGluY29taW5nIHNlcnZlciByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXMgdGhlIG91dGdvaW5nIHNlcnZlciByZXNwb25zZVxuICAgKiBAcGFyYW0gY29udGV4dCB0aGUgY29udGV4dCBmb3IgdGhlIHJlbmRlclxuICAgKi8gYXN5bmMgcmVuZGVyKHJlcSwgcmVzLCBjb250ZXh0KSB7XG4gICAgICAgIGF3YWl0ICgwLCBfbm9kZS5hcGlSZXNvbHZlcikocmVxLCByZXMsIGNvbnRleHQucXVlcnksIHRoaXMudXNlcmxhbmQsIHtcbiAgICAgICAgICAgIC4uLmNvbnRleHQucHJldmlld1Byb3BzLFxuICAgICAgICAgICAgcmV2YWxpZGF0ZTogY29udGV4dC5yZXZhbGlkYXRlLFxuICAgICAgICAgICAgdHJ1c3RIb3N0SGVhZGVyOiBjb250ZXh0LnRydXN0SG9zdEhlYWRlcixcbiAgICAgICAgICAgIGFsbG93ZWRSZXZhbGlkYXRlSGVhZGVyS2V5czogY29udGV4dC5hbGxvd2VkUmV2YWxpZGF0ZUhlYWRlcktleXMsXG4gICAgICAgICAgICBob3N0bmFtZTogY29udGV4dC5ob3N0bmFtZVxuICAgICAgICB9LCBjb250ZXh0Lm1pbmltYWxNb2RlLCBjb250ZXh0LmRldiwgY29udGV4dC5wYWdlKTtcbiAgICB9XG59XG5jb25zdCBfZGVmYXVsdCA9IFBhZ2VzQVBJUm91dGVNb2R1bGU7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1vZHVsZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fupload&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cupload%5Cindex.js&middlewareConfigBase64=e30%3D!"));
module.exports = __webpack_exports__;

})();