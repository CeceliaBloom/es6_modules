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

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car{\n  constructor(id,make,model,year){\n    this.id = id;\n    this.make = make;\n    this.model = model;\n    this.year = year;\n  }\n}\n \n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist */ \"./src/wishlist.js\");\n\n\nconst form = document.querySelector\n(\"#submitForm\");\n\n          //Make of car var info:\nconst make = document.querySelector(\"#makeInput\");\nconst paraMake= document.querySelector(\"#car-make\");\n\n          //Model of car var info:\nconst model = document.querySelector(\"#modelInput\");\nconst paraModel = document.querySelector(\"#car-model\")\n\n          //Year of car var info:\nconst carYear = document.querySelector(\"#yearInput\");\nconst paraCaryear = document.querySelector(\"#car-year\");\n\nconst removeBtn = document.querySelector(\".removeBtn\");\n\nconst wishlistUl= document.querySelector(\"#wishListContainer > ul\");\n\nconst wishlist = new _wishlist__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\nform.addEventListener(\"submit\", addCar);\n\nremoveBtn.addEventListener(\"click\", removeCar);\n\n\nfunction showCarDetails(car){\n  make.textContent = car.make;\n  model.textContent = car.model;\n  carYear.textContent = car.year;\n  removeBtn.disabled = false;\n  removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction updateDOMList(){\n  wishlistUl.innerHTML = \"\";\n  wishlist.list.forEach((car) => {\n    const li = document.createElement(\"li\");\n    li.textContent = `${car.make} ${car.model}`;\n    li.addEventListener(\"click\", () => showCarDetails(car));\n    wishlistUl.appendChild(li);\n  });\n}\n\nfunction addCar(event){\n  event.preventDefault();\n  const newMake = make.value;\n  const newModel = model.value;\n  const newYear = carYear.value;\n\n  wishlist.add(newMake,newModel,newYear);\n\n  updateDOMList();\n}\n\nfunction removeCar(){\n  let carId = Number(removeBtn.getAttribute(\"data-carId\"));\n\n  wishlist.remove(carId);\n\n  updateDOMList();\n\n  newMake = \"\";\n  newModel = \"\";\n  newYear = \"\";\n  removeBtn.disabled = true;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car */ \"./src/car.js\");\n\n\nclass Wishlist{\n  constructor(){\n   this.list = [];\n    this.nextId = 0;\n  }\n  add(make,model,year){\n    const car = new _car__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.nextId++,make,model,year);\n    this.list.push(car);\n  }\n  remove(carId){\n    this.list = this.list.filter((car) =>{\n      return (car.id != carId);\n    });\n  }\n\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;