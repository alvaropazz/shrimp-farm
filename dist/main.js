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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"html {\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n  background-color: #fff;\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  -webkit-box-sizing: inherit;\\n  -moz-box-sizing: inherit;\\n  box-sizing: inherit;\\n}\\n\\nbody {\\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\\n  background-color: #fff;\\n  max-width: 500px;\\n  margin: auto;\\n  margin-top: 20px;\\n  border: 2px solid #264653;\\n  padding: 10px;\\n  border-radius: 4px;\\n}\\n\\n.wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  border-radius: 4px;\\n  align-items: center;\\n  margin-bottom: 10px;\\n}\\n\\n.navigation {\\n  list-style-type: none;\\n  background-color: #2a9d8f;\\n  padding: 5px 0;\\n  margin: 10px 0;\\n  text-align: center;\\n  color: #fff;\\n  border-radius: 4px;\\n  width: 90%;\\n  border: 2px solid #264653;\\n}\\n\\n.add-item {\\n  background-color: #e9c46a;\\n  border: 2px solid #264653;\\n  color: #264653;\\n  font-weight: bold;\\n  border-radius: 4px;\\n  padding: 8px 12px;\\n  width: 200px;\\n}\\n\\n.new-project {\\n  display: flex;\\n  justify-content: center;\\n}\\n\\n.new-project h3 {\\n  margin: 0 0 10px 0;\\n}\\n\\n.new-project .add-project {\\n  border: 2px solid #22223b;\\n  border-radius: 4px;\\n  text-align: center;\\n  padding: 7px 7px 14px 7px;\\n  margin: 10px 3px;\\n  display: none;\\n  width: 420px;\\n  color: #fff;\\n  background-color: #e76f51;\\n}\\n\\n.new-project .add-project .project-input {\\n  padding: 5px;\\n  width: 95%;\\n  margin-top: 5px;\\n}\\n\\n.new-project .add-project .submit-project {\\n  background-color: #e9c46a;\\n  border: 2px solid #264653;\\n  border-radius: 4px;\\n  width: 120px;\\n  padding: 4px 8px;\\n  margin-top: 10px;\\n}\\n\\n.projects {\\n  width: 90%;\\n}\\n\\n.farm-description {\\n  margin-top: 0;\\n}\\n\\n.farm-size {\\n  margin: 0 0 5px 0;\\n}\\n\\n.projects .pond-list {\\n  list-style-type: none;\\n  padding: 5px;\\n}\\n\\n.projects .pond-list .delete-task {\\n  border: 2px solid #264653;\\n  border-radius: 4px;\\n  margin-right: 10px;\\n  background-color: #e76f51;\\n  height: 35px;\\n  width: 35px;\\n}\\n\\n.projects .pond-list .edit-task {\\n  border: 2px solid #264653;\\n  border-radius: 4px;\\n  background-color: #e76f51;\\n  height: 35px;\\n  width: 35px;\\n}\\n\\n.projects .pond-list .delete-task .fa-trash-alt {\\n  font-size: 15px;\\n}\\n\\n.farm-container {\\n  background-color: #f4a261;\\n  border-radius: 4px;\\n  padding: 20px;\\n  border: 2px solid #264653;\\n  margin: 10px 3px;\\n}\\n\\n.farm-container .new-task {\\n  background-color: #2a9d8f;\\n  margin-top: 15px;\\n  padding: 15px;\\n  border-radius: 4px;\\n  color: #fff;\\n  border: 2px solid #264653;\\n}\\n\\n.farm-container .new-task h3 {\\n  margin: 0 0 5px 0;\\n}\\n\\n.new-task .task-input {\\n  padding: 5px;\\n  width: 100%;\\n  margin-top: 5px;\\n}\\n\\n.new-task .task-input-dd {\\n  width: 100%;\\n  padding: 5px;\\n  margin-top: 5px;\\n}\\n\\n.farm-container h2 {\\n  margin: 0 0 5px 0;\\n}\\n\\n.farm-container .pond-list {\\n  background-color: #264653;\\n  border: 2px solid #2a9d8f;\\n  border-radius: 4px;\\n  padding: 15px;\\n  margin: 10px 0;\\n  display: flex;\\n  color: #fff;\\n  justify-content: space-around;\\n  align-items: center;\\n}\\n\\n.farm-container .pond-list .task-text {\\n  flex-basis: 70%;\\n  margin-right: 10px;\\n}\\n\\n.farm-container-description {\\n  margin: 0 0 10px 0;\\n}\\n\\n.pond-list .task-desc {\\n  margin: 0;\\n  font-weight: bold;\\n}\\n\\n.pond-list .task-size {\\n  margin: 0;\\n}\\n\\n.farm-container .new-task .add-task {\\n  background-color: #e9c46a;\\n  border: 2px solid #264653;\\n  border-radius: 4px;\\n  width: 120px;\\n  padding: 4px 8px;\\n  margin-top: 10px;\\n  font-weight: bold;\\n}\\n\\n.farm-container .dlt-farm {\\n  background-color: #e9c46a;\\n  padding: 4px 8px;\\n  border: 2px solid;\\n  border-radius: 4px;\\n  margin-top: 10px;\\n  width: 100px;\\n  margin-right: 10px;\\n}\\n\\n.farm-container .edit-farm {\\n  background-color: #e9c46a;\\n  padding: 4px 8px;\\n  border: 2px solid;\\n  border-radius: 4px;\\n  margin-top: 10px;\\n  width: 100px;\\n}\\n\\ninput {\\n  border: 2px solid #264653;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/styles.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./src/components/createFarm.js":
/*!**************************************!*\
  !*** ./src/components/createFarm.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createFarm; });\n/* harmony import */ var _newPondForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newPondForm */ \"./src/components/newPondForm.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/components/storage.js\");\n\n\n\nfunction createFarm(name, description, prIndex) {\n  const addFarm = document.querySelector('.projects');\n  const newFarm = document.createElement('div');\n  newFarm.className += 'farm-container';\n  newFarm.setAttribute('data-index', `${prIndex}`);\n\n  const h2 = document.createElement('h2');\n  h2.className += 'farm-title';\n  h2.setAttribute('contentEditable', 'true');\n  h2.innerHTML = `${name}`;\n\n  const p = document.createElement('p');\n  p.className += 'farm-description';\n  p.setAttribute('contentEditable', 'true');\n  p.innerHTML = `${description}`;\n\n  const psize = document.createElement('p');\n  psize.className += 'farm-size';\n  psize.innerHTML = `Farm Size: ${_storage__WEBPACK_IMPORTED_MODULE_1__[\"getFarmSize\"](prIndex)} ha.`;\n\n  const deleteFarm = document.createElement('button');\n  deleteFarm.className += 'dlt-farm';\n  deleteFarm.innerHTML = 'Delete';\n\n  const editFarm = document.createElement('button');\n  editFarm.className += 'edit-farm';\n  editFarm.innerHTML = 'Update';\n\n  addFarm.appendChild(newFarm);\n  newFarm.appendChild(psize);\n  newFarm.appendChild(h2);\n  newFarm.appendChild(p);\n  newFarm.appendChild(deleteFarm);\n  newFarm.appendChild(editFarm);\n  Object(_newPondForm__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(newFarm);\n}\n\n\n//# sourceURL=webpack:///./src/components/createFarm.js?");

/***/ }),

/***/ "./src/components/createPond.js":
/*!**************************************!*\
  !*** ./src/components/createPond.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return createPond; });\nfunction createPond(\n  tsName,\n  size,\n  parentElement,\n  tsIndex,\n) {\n  const addPond = document.querySelector(`div[data-index=\"${parentElement}\"]`);\n  const newPond = document.createElement('div');\n  newPond.className += 'pond-list';\n  newPond.setAttribute('data-task', `${tsIndex}`);\n\n  const span = document.createElement('span');\n  span.className += 'task-text';\n\n  const p1 = document.createElement('p');\n  p1.className += 'task-desc';\n  p1.setAttribute('contentEditable', 'true');\n  p1.innerHTML = `${tsName}`;\n\n  const p2 = document.createElement('p');\n  p2.className += 'task-size';\n  p2.setAttribute('contentEditable', 'true');\n  p2.innerHTML = `${size}`;\n\n  const deleteButton = document.createElement('button');\n  deleteButton.className += 'delete-task';\n  const trashBin = document.createElement('i');\n  trashBin.className += 'fas fa-trash-alt';\n\n  const editButton = document.createElement('button');\n  editButton.className += 'edit-task';\n  const check = document.createElement('i');\n  check.className += 'fas fa-check';\n\n  addPond.appendChild(newPond);\n  newPond.appendChild(span);\n  span.appendChild(p1);\n  span.appendChild(p2);\n  newPond.appendChild(deleteButton);\n  deleteButton.appendChild(trashBin);\n  newPond.appendChild(editButton);\n  editButton.appendChild(check);\n}\n\n\n//# sourceURL=webpack:///./src/components/createPond.js?");

/***/ }),

/***/ "./src/components/farmConstructor.js":
/*!*******************************************!*\
  !*** ./src/components/farmConstructor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Farm; });\nfunction Farm(name, description) {\n  this.name = name;\n  this.description = description;\n  this.tasks = [];\n}\n\n//# sourceURL=webpack:///./src/components/farmConstructor.js?");

/***/ }),

/***/ "./src/components/newPondForm.js":
/*!***************************************!*\
  !*** ./src/components/newPondForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return newPondForm; });\nfunction newPondForm(attatchTo) {\n  const createForm = document.createElement('form');\n  createForm.className += 'new-task';\n  const h3 = document.createElement('h3');\n  h3.innerText = 'New Pond';\n  // label plus input field for TASK-NAME:\n  const taskInputLabel = document.createElement('label');\n  taskInputLabel.setAttribute('for', 'task-name');\n  taskInputLabel.innerHTML = 'Pond Name: ';\n  const taskInput = document.createElement('input');\n  taskInput.className += 'task-input';\n  taskInput.setAttribute('type', 'text');\n  taskInput.setAttribute('name', 'task-name');\n  taskInput.setAttribute('required', '');\n\n  const sizeInputLabel = document.createElement('label');\n  sizeInputLabel.setAttribute('for', 'task-size');\n  sizeInputLabel.innerHTML = 'Size in hectares: ';\n  const sizeInput = document.createElement('input');\n  sizeInput.className += 'task-input';\n  sizeInput.setAttribute('type', 'number');\n  sizeInput.setAttribute('min', '0');\n  sizeInput.setAttribute('max', '1000');\n  sizeInput.setAttribute('name', 'task-size');\n  sizeInput.setAttribute('required', '');\n\n  // add the SUBMIT button\n  const submitBtn = document.createElement('input');\n  submitBtn.className += 'add-task';\n  submitBtn.setAttribute('type', 'submit');\n  submitBtn.setAttribute('value', 'ADD POND');\n\n  // FINALLY, APPEND the elements Together to the form\n  createForm.appendChild(h3);\n  createForm.appendChild(taskInputLabel);\n  createForm.appendChild(taskInput);\n  createForm.appendChild(sizeInputLabel);\n  createForm.appendChild(sizeInput);\n  createForm.appendChild(submitBtn);\n  attatchTo.appendChild(createForm);\n}\n\n\n//# sourceURL=webpack:///./src/components/newPondForm.js?");

/***/ }),

/***/ "./src/components/pondConstructor.js":
/*!*******************************************!*\
  !*** ./src/components/pondConstructor.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pond; });\nfunction Pond(name, size) {\n  this.name = name;\n  this.size = size;\n}\n\n\n//# sourceURL=webpack:///./src/components/pondConstructor.js?");

/***/ }),

/***/ "./src/components/storage.js":
/*!***********************************!*\
  !*** ./src/components/storage.js ***!
  \***********************************/
/*! exports provided: createArray, addFarm, getFarms, getFarmSize, deleteFarm, updateFarm, addPond, deletePond, updatePond, clearStorage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createArray\", function() { return createArray; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addFarm\", function() { return addFarm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFarms\", function() { return getFarms; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFarmSize\", function() { return getFarmSize; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteFarm\", function() { return deleteFarm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateFarm\", function() { return updateFarm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPond\", function() { return addPond; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deletePond\", function() { return deletePond; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updatePond\", function() { return updatePond; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearStorage\", function() { return clearStorage; });\nlet projects;\n\nfunction createArray() {\n  projects = [];\n}\n\nfunction addFarm(project) {\n  if (localStorage.getItem('myProjects') === null) {\n    createArray();\n  } else {\n    projects = JSON.parse(localStorage.getItem('myProjects'));\n  }\n  projects.push(project);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction getFarms() {\n  if (JSON.parse(localStorage.getItem('myProjects')) === null) {\n    createArray();\n    return projects;\n  }\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n\n  return projects;\n}\n\nfunction getFarmSize(project) {\n  if (JSON.parse(localStorage.getItem('myProjects')) === null) {\n    return 'Empty';\n  }\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  const size = projects[project].tasks.map(\n    x => parseInt(x.size, 10),\n  ).reduce((accumulator, currentValue) => accumulator + currentValue,\n    0);\n  return size;\n}\n\nfunction deleteFarm(project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects.splice(project, 1);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction updateFarm(project, prName, prDescription) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[project].name = prName;\n  projects[project].description = prDescription;\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction addPond(task, project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  const index = parseInt(project, 10);\n  projects[index].tasks.push(task);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction deletePond(task, project) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[parseInt(project, 10)].tasks.splice(task, 1);\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction updatePond(project, task, tsName, tsSize) {\n  projects = JSON.parse(localStorage.getItem('myProjects'));\n  projects[parseInt(project, 10)].tasks[task].name = tsName;\n  projects[parseInt(project, 10)].tasks[task].size = tsSize;\n  localStorage.setItem('myProjects', JSON.stringify(projects));\n}\n\nfunction clearStorage() {\n  localStorage.clear();\n}\n\n//# sourceURL=webpack:///./src/components/storage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/storage */ \"./src/components/storage.js\");\n/* harmony import */ var _components_createPond__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/createPond */ \"./src/components/createPond.js\");\n/* harmony import */ var _components_createFarm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/createFarm */ \"./src/components/createFarm.js\");\n/* harmony import */ var _components_farmConstructor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/farmConstructor */ \"./src/components/farmConstructor.js\");\n/* harmony import */ var _components_pondConstructor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pondConstructor */ \"./src/components/pondConstructor.js\");\n/* eslint-disable no-restricted-globals */\n\n\n\n\n\n\n\n// add all local storage projects to the DOM\nconst allProjects = _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"getFarms\"]();\n\nif (allProjects === undefined) {\n  _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"createArray\"]();\n} else {\n  allProjects.forEach((project, index) => {\n    Object(_components_createFarm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(project.name, project.description, index);\n    project.tasks.forEach((task, chIndex) => {\n      Object(_components_createPond__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n        task.name,\n        task.size,\n        index,\n        chIndex,\n      );\n    });\n  });\n}\n\nconst projectForm = document.querySelector('.add-project');\nprojectForm.addEventListener('submit', (e) => {\n  e.preventDefault();\n  const projectName = projectForm.querySelector('input[name=\"project-name\"]').value;\n  const projectDesc = projectForm.querySelector('input[name=\"project-desc\"]').value;\n  const projectNew = new _components_farmConstructor__WEBPACK_IMPORTED_MODULE_4__[\"default\"](projectName, projectDesc);\n  _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"addFarm\"](projectNew);\n  const len = _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"getFarms\"]().length;\n  const indices = len === 0 ? len : len - 1;\n  Object(_components_createFarm__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(projectNew.name, projectNew.description, indices);\n  projectForm.reset();\n  if (projectForm.style.display === 'block') {\n    projectForm.style.display = 'none';\n  } else {\n    projectForm.style.display = 'block';\n  }\n});\n\nconst taskForm = document.querySelector('.projects');\ntaskForm.addEventListener('submit', (e) => {\n  const form = e.target;\n  const task = form.querySelector('input[name=\"task-name\"]').value;\n  const size = form.querySelector('input[name=\"task-size\"]').value;\n  const cTask = new _components_pondConstructor__WEBPACK_IMPORTED_MODULE_5__[\"default\"](task, size);\n  const parent = form.parentElement;\n  const parIndex = parent.getAttribute('data-index');\n  _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"addPond\"](cTask, parIndex);\n  const allProjects = _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"getFarms\"]();\n  const taskParent = allProjects[parIndex];\n  const taskArr = taskParent.tasks.length - 1;\n  Object(_components_createPond__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n    cTask.name,\n    cTask.size,\n    parIndex,\n    taskArr,\n  );\n\n  e.target.reset();\n  return true;\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'delete-task') {\n    const parTask = e.target.parentElement;\n    const parTaskIndex = parTask.getAttribute('data-task');\n    const grandParTask = e.target.parentElement.parentElement;\n    const grandParIndex = grandParTask.getAttribute('data-index');\n    grandParTask.removeChild(parTask);\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"deletePond\"](parTaskIndex, grandParIndex);\n    location.reload();\n  } else if (e.target.className === 'fas fa-trash-alt') {\n    const parTask = e.target.parentElement.parentElement;\n    const parTaskIndex = parTask.getAttribute('data-task');\n    const grandParTask = e.target.parentElement.parentElement.parentElement;\n    const grandParIndex = grandParTask.getAttribute('data-index');\n    grandParTask.removeChild(parTask);\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"deletePond\"](parTaskIndex, grandParIndex);\n    location.reload();\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'edit-task') {\n    const project = e.target.parentElement.parentElement.getAttribute('data-index');\n    const task = e.target.parentElement.getAttribute('data-task');\n    const specific = document.querySelector(`div[data-index=\"${project}\"]`);\n    const subsp = specific.querySelector(`div[data-task=\"${task}\"]`);\n    const nameSelect = subsp.querySelector('.task-desc');\n    const sizeSelect = subsp.querySelector('.task-size');\n    const newName = nameSelect.innerHTML;\n    const newSize = sizeSelect.innerHTML;\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"updatePond\"](project, task, newName, newSize);\n    location.reload();\n  } else if (e.target.className === 'fas fa-check') {\n    const project = e.target.parentElement.parentElement.parentElement.getAttribute('data-index');\n    const task = e.target.parentElement.parentElement.getAttribute('data-task');\n    const specific = document.querySelector(`div[data-index=\"${project}\"]`);\n    const subsp = specific.querySelector(`div[data-task=\"${task}\"]`);\n    const nameSelect = subsp.querySelector('.task-desc');\n    const sizeSelect = subsp.querySelector('.task-size');\n    const newName = nameSelect.innerHTML;\n    const newSize = sizeSelect.innerHTML;\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"updatePond\"](project, task, newName, newSize);\n    location.reload();\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'dlt-farm') {\n    const parProject = e.target.parentElement;\n    const parProjectIndex = parProject.getAttribute('data-index');\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"deleteFarm\"](parProjectIndex);\n    taskForm.removeChild(parProject);\n  }\n});\n\ntaskForm.addEventListener('click', (e) => {\n  if (e.target.className === 'edit-farm') {\n    const parProjectIndex = e.target.parentElement.getAttribute('data-index');\n    const origen = document.querySelector(`div[data-index=\"${parProjectIndex}\"]`);\n    const newTitle = origen.querySelector('.farm-title');\n    const newDesc = origen.querySelector('.farm-description');\n    const userT = newTitle.innerHTML;\n    const userD = newDesc.innerHTML;\n    _components_storage__WEBPACK_IMPORTED_MODULE_1__[\"updateFarm\"](parProjectIndex, userT, userD);\n  }\n});\n\nconst addFarm = document.querySelector('.add-item');\naddFarm.addEventListener('click', () => {\n  const form = document.querySelector('.add-project');\n  if (getComputedStyle(form, null).display === 'none') {\n    form.style.display = 'block';\n  } else {\n    form.style.display = 'none';\n  }\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

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