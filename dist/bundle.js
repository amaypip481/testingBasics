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

/***/ "./src/sum.js":
/*!********************!*\
  !*** ./src/sum.js ***!
  \********************/
/***/ ((module) => {

eval("\n\nfunction sum(a, b) {\n  return a + b;\n}\nfunction capitalize(str) {\n  str = str.charAt(0).toUpperCase() + str.slice(1);\n  return str;\n}\nfunction calculator(num1, num2) {\n  function add() {\n    return num1 + num2;\n  }\n  function divide() {\n    return num1 / num2;\n  }\n  function multiply() {\n    return num1 * num2;\n  }\n  return {\n    add: add,\n    divide: divide,\n    multiply: multiply\n  };\n}\nfunction caesarCipher(str) {\n  var tempStr = \"\";\n  for (var i = 0; i < str.length; i++) {\n    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90 || str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) {\n      if (str.charCodeAt(i) + 3 > 90 && str.charCodeAt(i) + 3 < 97) {\n        tempStr += String.fromCharCode(str.charCodeAt(i) + 2 - 90 + 65);\n      }\n      if (str.charCodeAt(i) + 3 > 122) {\n        tempStr += String.fromCharCode(str.charCodeAt(i) + 2 - 122 + 97);\n      } else tempStr += String.fromCharCode(str.charCodeAt(i) + 3);\n    } else tempStr += str.charAt(i);\n  }\n  return tempStr;\n}\nfunction analyseArray(arr) {\n  var average;\n  var sum = 0;\n  var max;\n  var min;\n  for (var i = 0; i < arr.length; i++) {\n    sum += arr[i];\n    if (max === undefined || max === null) max = arr[i];else {\n      if (max < arr[i]) max = arr[i];\n    }\n    if (min === undefined || min === null) min = arr[i];else {\n      if (min > arr[i]) min = arr[i];\n    }\n  }\n  average = sum / arr.length;\n  var returnObject = {\n    average: average,\n    min: min,\n    max: max,\n    length: arr.length\n  };\n  return returnObject.toString();\n}\nmodule.exports = {\n  sum: sum,\n  capitalize: capitalize,\n  calculator: calculator,\n  caesarCipher: caesarCipher,\n  analyseArray: analyseArray\n};\n\n//# sourceURL=webpack://testingbasics/./src/sum.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/sum.js");
/******/ 	
/******/ })()
;