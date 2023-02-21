/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*{\\n    margin: 0;\\n    padding: 0;\\n    font-family: 'Roboto', serif;\\n}\\n\\nheader {\\n    background-color: rgb(255, 98, 36);\\n    box-shadow: 0px 0px 20px -2px black;\\n    height: 40vh;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 50px;\\n}\\n\\nheader h1 {\\n    text-align: center;\\n    color: white;\\n}\\n\\nform {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 10px;\\n}\\n\\n.inputs {\\n    display: flex;\\n    gap: 10px;\\n}\\n\\ninput, select {\\n    color: rgba(0, 0, 0, 0.884);\\n    font-weight: 100;\\n    border: none;\\n    padding: 2px;\\n    border-radius: 2px;\\n    outline: none;\\n    transition: all 0.4s ease;\\n    background-color: rgba(255, 255, 255, 0.856);\\n}\\n\\ninput:focus {\\n    box-shadow: 0px 0px 5px 0px rgba(36,69,255,1);\\n    background-color: rgba(255, 255, 255, 1);\\n    color: black;\\n    font-weight: 300;\\n}\\n\\n.inputs label {\\n    color: white;\\n}\\n\\n.submit {\\n    width: fit-content;\\n    padding: 10px 40px;\\n    background-color: rgba(36,69,255,1);\\n    color: white;\\n    border: none;\\n    transition: all 0.5s ease;\\n    border-radius: 5px;\\n    font-size: 15px;\\n}\\n\\n.submit:hover {\\n    background-color: rgb(77, 102, 245);\\n    cursor: pointer;\\n}\\n\\n.main {\\n    min-height: 60vh;\\n    width: 100%;\\n    display: flex;\\n    justify-content: space-between;\\n}\\n\\n.projects, .tasks {\\n    text-align: center;\\n    padding: 50px 50px;\\n}\\n\\n.projects {\\n    flex: 1;\\n    border-right: solid 1px rgba(128, 128, 128, 0.356);\\n}\\n\\n.active-project{\\n    background-color: rgb(36, 69, 255);\\n    color: white;\\n}\\n\\n.projects-container{\\n    padding-top: 50px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 20px;\\n}\\n\\n.projects-container button {\\n    border: solid 1px gray;\\n    padding: 10px 0;\\n    background-color: rgb(255, 98, 36);\\n    color: white;\\n}\\n\\n\\n.projects-container button:active {\\n    background-color: rgb(179, 62, 16);\\n}\\n\\n.project{\\n    border: solid 1px gray;\\n    padding: 10px 0;\\n}\\n\\n.tasks {\\n    flex: 4;\\n}\\n\\n.task-item {\\n    flex: 2;\\n}\\n\\n.tasks-container{\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    gap: 10px;\\n    padding: 50px 0;\\n}\\n\\n.task {\\n    display: flex;\\n    justify-content: space-between;\\n    gap: 10px;\\n    background-color: rgb(255, 98, 36);\\n    color: White;\\n    padding: 10px;\\n    width: 100%;\\n}\\n\\n.task div {\\n    padding: 10px;\\n}\\n\\n.check button{\\n    width: 20px;\\n    height: 20px;\\n    border-radius: 25px;\\n    flex: 1;\\n}\\n\\n.add-project-container {\\n    visibility: hidden;\\n    position: fixed;\\n    z-index: 1;\\n    background-color: rgba(0, 0, 0, 0.6);\\n    top: 0;\\n    left: 0;\\n    bottom: 0;\\n    right: 0;\\n}\\n\\n.add-project-form{\\n    position: fixed;\\n    top: 50%;\\n    left: 50%;\\n    transform: translate(-50%,-50%);\\n    background-color: white;\\n    width: 30vw;\\n    height: 30vh;\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 20px;\\n    border-radius: 15px;\\n}\\n\\n.add-project-form input {\\n    border: solid 1px gray;\\n}\\n\\n.add-project-form button {\\n    background-color: rgb(36, 69, 255);\\n    color: white;\\n    padding: 10px 20px;\\n    border: none;\\n    border-radius: 5px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://op-todolist/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://op-todolist/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://op-todolist/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://op-todolist/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://op-todolist/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://op-todolist/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://op-todolist/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://op-todolist/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://op-todolist/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://op-todolist/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _scripts_displayProjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/displayProjects */ \"./src/scripts/displayProjects.js\");\n/* harmony import */ var _scripts_displayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/displayTasks */ \"./src/scripts/displayTasks.js\");\n/* harmony import */ var _scripts_addProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/addProject */ \"./src/scripts/addProject.js\");\n/* harmony import */ var _scripts_ActiveProject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/ActiveProject */ \"./src/scripts/ActiveProject.js\");\n/* harmony import */ var _scripts_addTask__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/addTask */ \"./src/scripts/addTask.js\");\n/* harmony import */ var _scripts_inputValueRemove__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/inputValueRemove */ \"./src/scripts/inputValueRemove.js\");\n/* harmony import */ var _scripts_projectss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./scripts/projectss */ \"./src/scripts/projectss.js\");\n/* harmony import */ var _scripts_removeTask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/removeTask */ \"./src/scripts/removeTask.js\");\n\n\n\n\n\n\n\n\n\n\n(0,_scripts_displayProjects__WEBPACK_IMPORTED_MODULE_1__.displayProjects)(_scripts_projectss__WEBPACK_IMPORTED_MODULE_7__.projectss);\n(0,_scripts_displayTasks__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(0);\n(0,_scripts_addProject__WEBPACK_IMPORTED_MODULE_3__.addProject)();\n(0,_scripts_ActiveProject__WEBPACK_IMPORTED_MODULE_4__.defaultActive)(0);\n(0,_scripts_addTask__WEBPACK_IMPORTED_MODULE_5__.addTask)();\n(0,_scripts_inputValueRemove__WEBPACK_IMPORTED_MODULE_6__.inputValueRemove)();\n(0,_scripts_removeTask__WEBPACK_IMPORTED_MODULE_8__.removeTask)();\n\n\n//# sourceURL=webpack://op-todolist/./src/index.js?");

/***/ }),

/***/ "./src/scripts/ActiveProject.js":
/*!**************************************!*\
  !*** ./src/scripts/ActiveProject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"active\": () => (/* binding */ active),\n/* harmony export */   \"defaultActive\": () => (/* binding */ defaultActive),\n/* harmony export */   \"setActive\": () => (/* binding */ setActive)\n/* harmony export */ });\n/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayTasks */ \"./src/scripts/displayTasks.js\");\n/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./removeTask */ \"./src/scripts/removeTask.js\");\n\n\n\nlet active = 0;\n\nfunction defaultActive(_numberOfProject) {\n    document.querySelector(`.p${_numberOfProject}`).classList.add('active-project');\n}\n\nfunction setActive() {\n    const allProjects = document.querySelectorAll('.project');\n    allProjects.forEach((element) => {\n        element.addEventListener('click', function(){\n            allProjects.forEach((el) => {\n                el.classList.remove('active-project');\n            });\n            element.classList.add('active-project');\n            active = element.className[9];\n            (0,_displayTasks__WEBPACK_IMPORTED_MODULE_0__.displayTasks)(active);\n            (0,_removeTask__WEBPACK_IMPORTED_MODULE_1__.removeTask)();\n        });\n      });\n}\n\n\n\n//# sourceURL=webpack://op-todolist/./src/scripts/ActiveProject.js?");

/***/ }),

/***/ "./src/scripts/Project.js":
/*!********************************!*\
  !*** ./src/scripts/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Todo */ \"./src/scripts/Todo.js\");\n\n\nclass Project{\n\n    constructor(name) {\n        this.name = name;\n        this.todos = [];\n    }\n\n    addTodo(title, description, dueDate, priority) {\n        this.todos.push(new _Todo__WEBPACK_IMPORTED_MODULE_0__.Todo(title, description, dueDate, priority));\n    }\n\n  }\n\n\n//# sourceURL=webpack://op-todolist/./src/scripts/Project.js?");

/***/ }),

/***/ "./src/scripts/Todo.js":
/*!*****************************!*\
  !*** ./src/scripts/Todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\nclass Todo {\n    constructor(title, description, dueDate, priority) {\n      this.title = title;\n      this.description = description;\n      this.dueDate = dueDate;\n      this.priority = priority;\n    }\n}\n\n\n//# sourceURL=webpack://op-todolist/./src/scripts/Todo.js?");

/***/ }),

/***/ "./src/scripts/addProject.js":
/*!***********************************!*\
  !*** ./src/scripts/addProject.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addProject\": () => (/* binding */ addProject)\n/* harmony export */ });\n/* harmony import */ var _displayProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayProjects */ \"./src/scripts/displayProjects.js\");\n/* harmony import */ var _projectss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectss */ \"./src/scripts/projectss.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project.js */ \"./src/scripts/Project.js\");\n/* harmony import */ var _ActiveProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ActiveProject */ \"./src/scripts/ActiveProject.js\");\n\n\n\n\n\n\n\nconst addProjectContainer = document.querySelector('.add-project-container');\nconst addProjectInput = document.querySelector('.project-name');\nconst enterProjectButton = document.querySelector('.enter');\n\nfunction addProject() {\n    //Open New Project Form\n    _displayProjects__WEBPACK_IMPORTED_MODULE_0__.newProjectButton.addEventListener('click', function() {\n        addProjectContainer.style.visibility = \"visible\";\n    });\n\n    //Get input then close form, reload projects, set active project to how it was before reloading \n    enterProjectButton.addEventListener('click', function(){\n        if (addProjectInput.value != \"\") {\n            _projectss__WEBPACK_IMPORTED_MODULE_1__.projectss.push(new _Project_js__WEBPACK_IMPORTED_MODULE_2__.Project(addProjectInput.value));\n            addProjectContainer.style.visibility = \"hidden\";\n            (0,_displayProjects__WEBPACK_IMPORTED_MODULE_0__.displayProjects)(_projectss__WEBPACK_IMPORTED_MODULE_1__.projectss);\n            (0,_ActiveProject__WEBPACK_IMPORTED_MODULE_3__.defaultActive)(_ActiveProject__WEBPACK_IMPORTED_MODULE_3__.active);\n        }\n    });\n\n}\n\n\n\n\n//# sourceURL=webpack://op-todolist/./src/scripts/addProject.js?");

/***/ }),

/***/ "./src/scripts/addTask.js":
/*!********************************!*\
  !*** ./src/scripts/addTask.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addTask\": () => (/* binding */ addTask)\n/* harmony export */ });\n/* harmony import */ var _ActiveProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveProject */ \"./src/scripts/ActiveProject.js\");\n/* harmony import */ var _projectss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectss */ \"./src/scripts/projectss.js\");\n/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTasks */ \"./src/scripts/displayTasks.js\");\n/* harmony import */ var _removeTask__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./removeTask */ \"./src/scripts/removeTask.js\");\n\n\n\n\nconst submitTaskButton = document.querySelector('.submit');\n\n\nfunction addTask() {\n    submitTaskButton.addEventListener('click', function() {\n        const title = document.querySelector('.fname').value;\n        const description = document.querySelector('.fdescription').value;\n        const dueDate = document.querySelector('.fdate').value;\n        const priority = document.querySelector('.fpriority').value;\n\n        if (title != 'Task Name Here...' && description != 'Description of your task...' &&\n            dueDate != \"Enter Date\" && priority != \"default\") {\n            _projectss__WEBPACK_IMPORTED_MODULE_1__.projectss[_ActiveProject__WEBPACK_IMPORTED_MODULE_0__.active].addTodo(title, description, dueDate, priority);\n            (0,_displayTasks__WEBPACK_IMPORTED_MODULE_2__.displayTasks)(_ActiveProject__WEBPACK_IMPORTED_MODULE_0__.active);\n        }\n    \n        (0,_removeTask__WEBPACK_IMPORTED_MODULE_3__.removeTask)();\n    });\n}\n\n//# sourceURL=webpack://op-todolist/./src/scripts/addTask.js?");

/***/ }),

/***/ "./src/scripts/displayProjects.js":
/*!****************************************!*\
  !*** ./src/scripts/displayProjects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayProjects\": () => (/* binding */ displayProjects),\n/* harmony export */   \"newProjectButton\": () => (/* binding */ newProjectButton)\n/* harmony export */ });\n/* harmony import */ var _ActiveProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActiveProject */ \"./src/scripts/ActiveProject.js\");\n\n\nconst projects = document.querySelector('.projects-container');\nconst newProjectButton = document.createElement('button');\nnewProjectButton.classList.add('add-project');\n\nnewProjectButton.innerHTML = \"New Project\";\n\nfunction displayProjects(_projects) {\n    projects.innerHTML = \"\";\n\n    for (let i=0; i<_projects.length; i++){\n        const project = document.createElement('div');\n        project.classList.add('project');\n        project.classList.add(`p${i}`);\n        project.innerHTML = `\n            <div class=\"pname\">${_projects[i].name}</div>\n        `;\n        projects.appendChild(project);\n    }\n\n    projects.appendChild(newProjectButton);\n    (0,_ActiveProject__WEBPACK_IMPORTED_MODULE_0__.setActive)();\n    \n}\n\n//# sourceURL=webpack://op-todolist/./src/scripts/displayProjects.js?");

/***/ }),

/***/ "./src/scripts/displayTasks.js":
/*!*************************************!*\
  !*** ./src/scripts/displayTasks.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayTasks\": () => (/* binding */ displayTasks)\n/* harmony export */ });\n/* harmony import */ var _projectss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectss */ \"./src/scripts/projectss.js\");\n\nconst tasks = document.querySelector('.tasks-container');\n\nfunction displayTasks(_active) {\n    tasks.innerHTML = \"\";\n\n    for (let i=0; i<_projectss__WEBPACK_IMPORTED_MODULE_0__.projectss[_active].todos.length; i++){\n        const task = document.createElement('div');\n        task.classList.add('task');\n        task.innerHTML = `\n            <div class=\"check\"><button class=\"remove p${_active} t${i}\"></button></div>\n            <div class=\"ttile task-item\"><strong>Title:</strong> ${_projectss__WEBPACK_IMPORTED_MODULE_0__.projectss[_active].todos[i].title}</div>\n            <div class=\"tdescription task-item\"><strong>Description:</strong> ${_projectss__WEBPACK_IMPORTED_MODULE_0__.projectss[_active].todos[i].description}</div>\n            <div class=\"tdate task-item\"><strong>Due:</strong> ${_projectss__WEBPACK_IMPORTED_MODULE_0__.projectss[_active].todos[i].dueDate}</div>\n            <div class=\"tpriority task-item\"><strong>Priority:</strong> ${_projectss__WEBPACK_IMPORTED_MODULE_0__.projectss[_active].todos[i].priority}</div>\n        `;\n        tasks.appendChild(task);\n\n    }\n}\n\n//# sourceURL=webpack://op-todolist/./src/scripts/displayTasks.js?");

/***/ }),

/***/ "./src/scripts/inputValueRemove.js":
/*!*****************************************!*\
  !*** ./src/scripts/inputValueRemove.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"inputValueRemove\": () => (/* binding */ inputValueRemove)\n/* harmony export */ });\nconst inputs = document.querySelectorAll('input');\n\nfunction inputValueRemove() {\n    inputs.forEach(element => {\n        element.addEventListener('click', function(){\n            element.value = \"\";\n            element.style.color = \"black\";\n        });\n    });\n}\n\n//# sourceURL=webpack://op-todolist/./src/scripts/inputValueRemove.js?");

/***/ }),

/***/ "./src/scripts/projectss.js":
/*!**********************************!*\
  !*** ./src/scripts/projectss.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"projectss\": () => (/* binding */ projectss)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/scripts/Project.js\");\n\n\nlet projectss = [];\n\n/// Some values for projects and todos ///\nprojectss.push(new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Main\"));\nprojectss.push(new _Project__WEBPACK_IMPORTED_MODULE_0__.Project(\"Secondary\"));\n\nprojectss[0].addTodo(\"Kompjuter\", \"Vkluci PC\", \"12.03.2023\", \"medium\");\nprojectss[0].addTodo(\"Rucek\", \"Napravi rucek\", \"13.03.2023\", \"high\");\nprojectss[0].addTodo(\"Kola\", \"Iscisti kola\", \"12.03.2023\", \"low\");\n\nprojectss[1].addTodo(\"Trening\", \"Odi da vezbas\", \"13.03.2023\", \"high\");\n//////////////////////////////////////////\n\n\n//# sourceURL=webpack://op-todolist/./src/scripts/projectss.js?");

/***/ }),

/***/ "./src/scripts/removeTask.js":
/*!***********************************!*\
  !*** ./src/scripts/removeTask.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"removeTask\": () => (/* binding */ removeTask)\n/* harmony export */ });\n/* harmony import */ var _projectss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectss */ \"./src/scripts/projectss.js\");\n/* harmony import */ var _displayTasks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTasks */ \"./src/scripts/displayTasks.js\");\n/* harmony import */ var _ActiveProject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ActiveProject */ \"./src/scripts/ActiveProject.js\");\n\n\n\n\nfunction removeTask() {\n    let removeButtons = document.querySelectorAll('.remove');\n\n    removeButtons.forEach(element => {\n        element.addEventListener('click', function() { \n            const removeTask = element.className[11];\n            const removeProject = element.className[8];\n\n            console.log(\"Click\");\n            _projectss__WEBPACK_IMPORTED_MODULE_0__.projectss[removeProject].todos.splice(removeTask, 1);\n            (0,_displayTasks__WEBPACK_IMPORTED_MODULE_1__.displayTasks)(_ActiveProject__WEBPACK_IMPORTED_MODULE_2__.active);\n            reload();\n        });\n    });\n}\n\nfunction reload() {\n    removeTask();\n}\n\n//# sourceURL=webpack://op-todolist/./src/scripts/removeTask.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;