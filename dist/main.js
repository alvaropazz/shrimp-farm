/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n  background-color: rgb(240, 240, 240);\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n  background-color: #f2e9e4;\\n  max-width: 500px;\\n  margin: auto;\\n  margin-top: 20px;\\n  border: 2px solid #ccc;\\n  padding: 10px;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.navigation {\\n  list-style-type: none;\\n  background-color: #22223b;\\n  padding: 5px 0;\\n  border: 0;\\n  margin: 0;\\n  text-align: center;\\n  color: #fff;\\n  border-radius: 5px;\\n}\\n\\n.add-item {\\n  background-color: #9a8c98;\\n  border: 1px solid;\\n  color: #fff;\\n  border-radius: 10px;\\n  padding: 8px 12px;\\n  margin-top: 10px;\\n}\\n\\n.new-project .add-project {\\n  border: 1px solid #22223b;\\n  border-radius: 5px;\\n  padding: 7px 7px 14px 7px;\\n  margin: 10px 3px;\\n  display: none;\\n}\\n\\n.new-project .add-project .project-input {\\n  padding: 5px;\\n  width: 95%;\\n  margin-top: 5px;\\n}\\n\\n.new-project .add-project .submit-project {\\n  background-color: #e6e6fa;\\n  border: 1px solid #000;\\n  border-radius: 3px;\\n  margin-top: 10px;\\n}\\n\\n.projects .task-list {\\n  list-style-type: none;\\n  padding: 5px;\\n}\\n\\n.projects .task-list .delete-task {\\n  border: 1px solid #000;\\n  border-radius: 3px;\\n  margin-top: 5px;\\n  background-color: #ffa07a;\\n  height: 35px;\\n  width: 35px;\\n}\\n\\n.projects .task-list .delete-task .fa-trash-alt {\\n  font-size: 15px;\\n}\\n\\n.to-do {\\n  background-color: #cfd1dd;\\n  border-radius: 5px;\\n  padding: 8px;\\n  margin: 10px 3px;\\n}\\n\\n.to-do .new-task {\\n  background-color: #c4abaf;\\n  padding: 5px;\\n  border-radius: 5px;\\n  border: 1px solid #aaa;\\n  display: none;\\n}\\n\\n.to-do .new-task h3 {\\n  margin: 3px 0 5px 0;\\n}\\n\\n.new-task .task-input {\\n  padding: 5px;\\n  width: 100%;\\n  margin-top: 5px;\\n}\\n\\n.new-task .task-input-dd {\\n  width: 100%;\\n  padding: 5px;\\n  margin-top: 5px;\\n}\\n\\n.to-do h2 {\\n  margin: 3px 0 5px 0;\\n}\\n\\n.to-do .task-list {\\n  background-color: #d0b8b3;\\n  border: 1px solid #ccc;\\n  border-radius: 5px;\\n  padding: 10px;\\n  margin: 10px 0;\\n  display: flex;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n.to-do .task-list .task-text {\\n  flex-basis: 80%;\\n}\\n\\n.task-list .task-desc {\\n  margin: 0;\\n}\\n\\n.task-list .check-form .task-footer-left {\\n  border: 1px solid #eee;\\n  display: inline-block;\\n  padding: 3px;\\n  border-radius: 5px;\\n}\\n\\n.task-list .check-form .task-footer-right {\\n  border: 1px solid #eee;\\n  display: inline-block;\\n  padding: 3px;\\n  border-radius: 5px;\\n  margin-left: 5px;\\n}\\n\\n.task-priority {\\n  margin-left: 5px;\\n}\\n\\n.to-do .task-list .due-date {\\n  margin: 3px 0;\\n}\\n\\n.to-do .new-task .add-task {\\n  background-color: #e6e6fa;\\n  border: 1px solid #000;\\n  border-radius: 3px;\\n  margin-top: 10px;\\n}\\n\\n.to-do .dlt-prjct {\\n  background-color: #ffa07a;\\n  padding: 4px 8px;\\n  border: 1px solid;\\n  border-radius: 3px;\\n  margin-top: 10px;\\n}\\n\\n.to-do .add-tsk {\\n  background-color: #9a8c98;\\n  padding: 4px 8px;\\n  border: 1px solid;\\n  border-radius: 3px;\\n  margin-bottom: 10px;\\n  color: white;\\n  margin-right: 20px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/components/createProject.js":
/*!*****************************************!*\
  !*** ./src/components/createProject.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createProject; });\n/* harmony import */ var _projectForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm */ \"./src/components/projectForm.js\");\n\n\nfunction createProject(name, description, prIndex) {\n  const addProject = document.querySelector('.projects');\n  const newProject = document.createElement('div');\n  newProject.className += 'to-do';\n  newProject.setAttribute('data-index', `${prIndex}`);\n  const h2 = document.createElement('h2');\n  h2.className += 'to-do-title';\n  h2.setAttribute('contentEditable', 'true');\n  const p = document.createElement('p');\n  p.className += 'to-do-description';\n  h2.innerHTML = `${name}`;\n  p.innerHTML = `${description}`;\n  const newTask = document.createElement('button');\n  newTask.className += 'add-tsk';\n  newTask.innerHTML = '+ New Task';\n  const deleteProject = document.createElement('button');\n  deleteProject.className += 'dlt-prjct';\n  deleteProject.innerHTML = 'Delete Project';\n\n  const editProject = document.createElement('button');\n  editProject.className += 'edit-prjct';\n  editProject.innerHTML = 'edit Project';\n\n  addProject.appendChild(newProject);\n  newProject.appendChild(h2);\n  newProject.appendChild(p);\n  newProject.appendChild(newTask);\n  Object(_projectForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newProject);\n  newProject.appendChild(deleteProject);\n  newProject.appendChild(editProject);\n}\n\n\n//# sourceURL=webpack:///./src/components/createProject.js?");

/***/ }),

/***/ "./src/components/createTask.js":
/*!**************************************!*\
  !*** ./src/components/createTask.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createTask; });\nfunction createTask(\n  tsName,\n  parentElement,\n  tsIndex,\n) {\n  const addTask = document.querySelector(`div[data-index=\"${parentElement}\"]`);\n  const newTask = document.createElement('div');\n  newTask.className += 'task-list';\n  newTask.setAttribute('data-task', `${tsIndex}`);\n  const span = document.createElement('span');\n  span.className += 'task-text';\n  const p1 = document.createElement('p');\n  p1.className += 'task-desc';\n  p1.setAttribute('contentEditable', 'true');\n  p1.innerHTML = `${tsName}`;\n\n  const deleteButton = document.createElement('button');\n  deleteButton.className += 'delete-task';\n  const trashBin = document.createElement('i');\n  trashBin.className += 'fas fa-trash-alt';\n\n  const editButton = document.createElement('button');\n  editButton.className += 'edit-task';\n  editButton.innerHTML = 'edita';\n\n  addTask.appendChild(newTask);\n  newTask.appendChild(span);\n  span.appendChild(p1);\n  newTask.appendChild(deleteButton);\n  deleteButton.appendChild(trashBin);\n  newTask.appendChild(editButton);\n}\n\n\n//# sourceURL=webpack:///./src/components/createTask.js?");

/***/ }),

/***/ "./src/components/pondConstructor.js":
/*!*******************************************!*\
  !*** ./src/components/pondConstructor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pond; });\nfunction Pond(name) {\n  this.taskName = name;\n}\n\n\n//# sourceURL=webpack:///./src/components/pondConstructor.js?");

/***/ }),

/***/ "./src/components/projectConstructor.js":
/*!**********************************************!*\
  !*** ./src/components/projectConstructor.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Project; });\nfunction Project(name, description) {\n  this.name = name;\n  this.description = description;\n  this.tasks = [];\n}\n\n\n//# sourceURL=webpack:///./src/components/projectConstructor.js?");

/***/ }),

/***/ "./src/components/projectForm.js":
/*!***************************************!*\
  !*** ./src/components/projectForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createNewProjectForm; });\nfunction createNewProjectForm(attatchTo) {\n  const createForm = document.createElement('form');\n  createForm.className += 'new-task';\n  const h3 = document.createElement('h3');\n  h3.innerText = 'New Task';\n  // label plus input field for TASK-NAME:\n  const taskInputLabel = document.createElement('label');\n  taskInputLabel.setAttribute('for', 'task-name');\n  taskInputLabel.innerHTML = 'Task Name: ';\n  const taskInput = document.createElement('input');\n  taskInput.className += 'task-input';\n  taskInput.setAttribute('type', 'text');\n  taskInput.setAttribute('name', 'task-name');\n  taskInput.setAttribute('required', '');\n\n  // add the SUBMIT button\n  const submitBtn = document.createElement('input');\n  submitBtn.className += 'add-task';\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.setAttribute('value', '+ Add Task');\n\n  // FINALLY, APPEND the elements Together to the form\n  createForm.appendChild(h3);\n  createForm.appendChild(taskInputLabel);\n  createForm.appendChild(taskInput);\n  createForm.appendChild(submitBtn);\n  attatchTo.appendChild(createForm);\n}\n\n\n//# sourceURL=webpack:///./src/components/projectForm.js?");

/***/ }),

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/*! exports provided: createArray, addProject, getProjects, deleteProject, updatePrName, addTask, deleteTask, updateTsName, clearStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArray\", function() { return createArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addProject\", function() { return addProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjects\", function() { return getProjects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteProject\", function() { return deleteProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePrName\", function() { return updatePrName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addTask\", function() { return addTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteTask\", function() { return deleteTask; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateTsName\", function() { return updateTsName; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStorage\", function() { return clearStorage; });\nlet projects;\n\nfunction createArray() {\n  projects = [];\n}\n\nfunction addProject(project) {\n  if (localStorage.getItem('myProjects') === null) {\n    createArray();\n  } else {\n    projects = JSON.parse(localStorage.getItem('myProjects'));\n  }\n  projects.push(project);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction getProjects() {\n  if (JSON.parse(localStorage.getItem('myProjects')) === null) {\n    createArray();\n    return projects;\n  }\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n\n  return projects;\n}\n\nfunction deleteProject(project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects.splice(project, 1);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction updatePrName(project, prName) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[project].name = prName;\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction addTask(task, project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  const index = parseInt(project, 10);\n  projects[index].tasks.push(task);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction deleteTask(task, project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[parseInt(project, 10)].tasks.splice(task, 1);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction updateTsName(project, task, tsName) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[parseInt(project, 10)].tasks[task].taskName = tsName;\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction clearStorage() {\n  localStorage.clear();\n}\n\n//# sourceURL=webpack:///./src/components/storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/storage */ \"./src/components/storage.js\");\n/* harmony import */ var _components_createTask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createTask */ \"./src/components/createTask.js\");\n/* harmony import */ var _components_createProject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createProject */ \"./src/components/createProject.js\");\n/* harmony import */ var _components_projectConstructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/projectConstructor */ \"./src/components/projectConstructor.js\");\n/* harmony import */ var _components_pondConstructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pondConstructor */ \"./src/components/pondConstructor.js\");\n\n\n\n\n\n\n\n// add all local storage projects to the DOM\nconst allProjects = _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n\nif (allProjects === undefined) {\n  _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"createArray\"]();\n} else {\n  allProjects.forEach((project, index) => {\n    Object(_components_createProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(project.name, project.description, index);\n    project.tasks.forEach((task, chIndex) => {\n      Object(_components_createTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n        task.taskName,\n        index,\n        chIndex,\n      );\n    });\n  });\n}\n\nconst projectForm = document.querySelector('.add-project');\nprojectForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const projectName = projectForm.querySelector('input[name=\"project-name\"]').value;\n  const projectDesc = projectForm.querySelector('input[name=\"project-desc\"]').value;\n  const projectNew = new _components_projectConstructor__WEBPACK_IMPORTED_MODULE_4__[\"default\"](projectName, projectDesc);\n  _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"addProject\"](projectNew);\n  const len = _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]().length;\n  const indices = len === 0 ? len : len - 1;\n  Object(_components_createProject__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(projectNew.name, projectNew.description, indices);\n  projectForm.reset();\n  if (projectForm.style.display === 'block') {\n    projectForm.style.display = 'none';\n  } else {\n    projectForm.style.display = 'block';\n  }\n});\n\nconst taskForm = document.querySelector('.projects');\ntaskForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const form = e.target;\n  const task = form.querySelector('input[name=\"task-name\"]').value;\n  const cTask = new _components_pondConstructor__WEBPACK_IMPORTED_MODULE_5__[\"default\"](task);\n  const parent = form.parentElement;\n  const parIndex = parent.getAttribute('data-index');\n  _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"addTask\"](cTask, parIndex);\n  const allProjects = _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"getProjects\"]();\n  const taskParent = allProjects[parIndex];\n  const taskArr = taskParent.tasks.length - 1;\n  Object(_components_createTask__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(cTask.taskName,\n    parIndex,\n    taskArr);\n\n  e.target.reset();\n  if (form.style.display === 'block') {\n    form.style.display = 'none';\n  } else {\n    form.style.display = 'block';\n  }\n  return true;\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'delete-task') {\n    const parTask = e.target.parentElement;\n    const parTaskIndex = parTask.getAttribute('data-task');\n    const grandParTask = e.target.parentElement.parentElement;\n    const grandParIndex = grandParTask.getAttribute('data-index');\n    grandParTask.removeChild(parTask);\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"deleteTask\"](parTaskIndex, grandParIndex);\n  } else if (e.target.className === 'fas fa-trash-alt') {\n    const parTask = e.target.parentElement.parentElement;\n    const parTaskIndex = parTask.getAttribute('data-task');\n    const grandParTask = e.target.parentElement.parentElement.parentElement;\n    const grandParIndex = grandParTask.getAttribute('data-index');\n    grandParTask.removeChild(parTask);\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"deleteTask\"](parTaskIndex, grandParIndex);\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'edit-task') {\n    const project = e.target.parentElement.parentElement.getAttribute('data-index');\n    const task = e.target.parentElement.getAttribute('data-task');\n    const specific = document.querySelector(`div[data-index=\"${project}\"]`);\n    const subsp = specific.querySelector(`div[data-task=\"${task}\"]`);\n    const newV = subsp.querySelector('.task-desc');\n    const userVersion = newV.innerHTML;\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"updateTsName\"](project, task, userVersion);\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'dlt-prjct') {\n    const parProject = e.target.parentElement;\n    const parProjectIndex = parProject.getAttribute('data-index');\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"deleteProject\"](parProjectIndex);\n    taskForm.removeChild(parProject);\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'edit-prjct') {\n    const parProjectIndex = e.target.parentElement.getAttribute('data-index');\n    const origen = document.querySelector(`div[data-index=\"${parProjectIndex}\"]`);\n    const editablee = origen.querySelector('.to-do-title');\n    const userVersion = editablee.innerHTML;\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"updatePrName\"](parProjectIndex, userVersion);\n  }\n});\n\nconst addProject = document.querySelector('.add-item');\naddProject.addEventListener('click', () => {\n  const form = document.querySelector('.add-project');\n  if (getComputedStyle(form, null).display === 'none') {\n    form.style.display = 'block';\n  } else {\n    form.style.display = 'none';\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'add-tsk') {\n    if (getComputedStyle(e.target.parentElement.children[3], null).display === 'none') {\n      e.target.parentElement.children[3].style.display = 'block';\n    } else {\n      e.target.parentElement.children[3].style.display = 'none';\n    }\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/styles.css?");

/***/ })

/******/ });