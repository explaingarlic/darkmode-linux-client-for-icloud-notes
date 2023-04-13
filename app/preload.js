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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/preload.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/preload.js":
/*!************************!*\
  !*** ./src/preload.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var ipcRenderer = __webpack_require__(/*! electron */ "electron").ipcRenderer;

ipcRenderer.on('new-note', function (event, arg) {
  console.info("received a message from main process ".concat(event)); // $('div.compose.cw-button').click();
});
window.addEventListener("DOMContentLoaded", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
  return regeneratorRuntime.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          alert("dom loaded!");

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
})));
/*
window.addEventListener("DOMContentLoaded", async () => {
    alert("dom content loaded!")
    const head = document.getElementsByTagName('head')[0];
    const link = document.createElement('style');
    link.id = customId;
    link.type = 'text/css';
    link.innerHTML = `
    .cw-collection-view {
        background-color: black;
        color:white;
    }
    .cloudos-toolbar {
        background-color: #353537;
        border-bottom: none;
    }
    
    svg.apple-icloud-logo {
        background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTAiIGhlaWdodD0iMzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgYXJpYS1oaWRkZW49InRydWUiIGNsYXNzPSJhcHBsZS1pY2xvdWQtbG9nbyI+PGcgZmlsbC1ydWxlPSJub256ZXJvIiBmaWxsPSIjQURBREFGIj48cGF0aCBkPSJNNzcuMDA1IDIzLjIxNWMxLjU2OCAwIDIuNzY3LS43NzkgMy4zODItMi4wNmguMDYxVjIzSDgzVjguMjA0aC0yLjU1MnY1Ljc5M2gtLjA2MWMtLjYxNS0xLjMwMi0xLjg1NS0yLjA5Mi0zLjM5Mi0yLjA5Mi0yLjcyNiAwLTQuNDc5IDIuMTQzLTQuNDc5IDUuNjV2LjAxYzAgMy40OTcgMS43NDIgNS42NSA0LjQ4OSA1LjY1Wm0uNzY4LTIuMTUzYy0xLjY0IDAtMi42NTQtMS4zMzMtMi42NTQtMy40OTd2LS4wMWMwLTIuMTYzIDEuMDI1LTMuNDk2IDIuNjU0LTMuNDk2IDEuNTY4IDAgMi42NzUgMS4zNzQgMi42NzUgMy40OTZ2LjAxYzAgMi4xMzMtMS4wOTYgMy40OTctMi42NzUgMy40OTdabS0xMy4wNSAyLjE1M2MxLjY0IDAgMi43NTctLjc1OCAzLjMyLTEuOTE3aC4wNTJWMjNoMi41NTJWMTIuMTNoLTIuNTUydjYuMjk3YzAgMS41NzktLjkzMyAyLjYzNS0yLjM5OCAyLjYzNS0xLjQ1NSAwLTIuMTczLS44NzItMi4xNzMtMi40MXYtNi41MjFoLTIuNTUydjcuMDI0YzAgMi41MjIgMS4zNjMgNC4wNiAzLjc1MSA0LjA2Wm0tMTAuODI2IDBjMy4xODcgMCA1LjI1Ny0yLjEyMiA1LjI1Ny01LjY1di0uMDJjMC0zLjUwNy0yLjEtNS42NC01LjI2Ny01LjY0LTMuMTU3IDAtNS4yNDggMi4xNTQtNS4yNDggNS42NHYuMDJjMCAzLjUxOCAyLjA2IDUuNjUgNS4yNTggNS42NVptLjAxLTIuMDZjLTEuNjMgMC0yLjY2NS0xLjMwMy0yLjY2NS0zLjU5di0uMDJjMC0yLjI1NiAxLjA1Ni0zLjU2OCAyLjY0NS0zLjU2OCAxLjYxOSAwIDIuNjY0IDEuMzAyIDIuNjY0IDMuNTY4di4wMmMwIDIuMjc3LTEuMDM1IDMuNTktMi42NDQgMy41OVpNNDQuMTM3IDIzaDIuNTVWOC4yMDRoLTIuNTVWMjNabS04LjM1Ny4yNTZjMy40MDIgMCA1LjkxMy0yLjEwMiA2LjI5Mi01LjEzN2wuMDItLjEwMkgzOS41bC0uMDMxLjEwMmMtLjQ4MiAxLjgyNS0xLjgwNCAyLjg0LTMuNjkgMi44NC0yLjU3MiAwLTQuMjMyLTIuMDctNC4yMzItNS4zNjJ2LS4wMWMwLTMuMjgyIDEuNjUtNS4zNDMgNC4yMzMtNS4zNDMgMS45MjYgMCAzLjIyOCAxLjA1NiAzLjY1OCAyLjc0OGwuMDUxLjE5NWgyLjU5M2wtLjAxLS4xMDNjLS4zOS0zLjAxNC0yLjg5LTUuMTM3LTYuMjkyLTUuMTM3LTQuMjQzIDAtNi45MzggMi45MTItNi45MzggNy42NHYuMDFjMCA0LjcyNyAyLjY4NSA3LjY2IDYuOTM4IDcuNjZaTTI1LjQyNCAxMC41NzJhMS40IDEuNCAwIDEgMCAwLTIuOGMtLjc5OSAwLTEuNDI0LjYyNi0xLjQyNCAxLjQwNiAwIC43NTkuNjI1IDEuMzk0IDEuNDI0IDEuMzk0Wk0yNC4xNDQgMjNoMi41NTFWMTIuMTNoLTIuNTUyVjIzWiIgb3BhY2l0eT0iLjYzIj48L3BhdGg+PHBhdGggZD0iTTEyLjkgNy41OThjLjYwOC0uNzM3IDEuMDQtMS43NCAxLjA0LTIuNzU1IDAtLjE0LS4wMTMtLjI4LS4wMzgtLjM5NC0uOTkuMDM4LTIuMTgzLjY2LTIuODkzIDEuNDk4LS41NTkuNjM1LTEuMDc5IDEuNjUtMS4wNzkgMi42NjYgMCAuMTUzLjAyNi4zMDUuMDM4LjM1Ni4wNjQuMDEyLjE2NS4wMjUuMjY3LjAyNS44ODggMCAyLjAwNC0uNTk3IDIuNjY0LTEuMzk2Wm0uNjk3IDEuNjEyYy0xLjQ4NCAwLTIuNjkuOTAxLTMuNDY0LjkwMS0uODI1IDAtMS45MDMtLjg1LTMuMTk3LS44NUM0LjQ4NiA5LjI2IDIgMTEuMjkyIDIgMTUuMTEzYzAgMi4zODcuOTE0IDQuOSAyLjA1NiA2LjUyNi45NzcgMS4zNyAxLjgyNyAyLjUgMy4wNTcgMi41IDEuMjE4IDAgMS43NTEtLjgxMiAzLjI2MS0uODEyIDEuNTM2IDAgMS44NzguNzg3IDMuMjIzLjc4NyAxLjMzMiAwIDIuMjItMS4yMTggMy4wNTgtMi40MjUuOTM5LTEuMzgzIDEuMzMyLTIuNzI5IDEuMzQ1LTIuNzkzLS4wNzYtLjAyNS0yLjYyNi0xLjA2Ni0yLjYyNi0zLjk4NiAwLTIuNTI2IDIuMDA0LTMuNjU2IDIuMTE4LTMuNzQ1LTEuMzItMS45MDQtMy4zMzctMS45NTUtMy44OTUtMS45NTVaIiBvcGFjaXR5PSIuNTY5Ij48L3BhdGg+PC9nPjwvc3ZnPg==") !important;
        content: none !important;
    }  
    
    .list-item.is-selected {
        background-color: rgba(120,120,128,.95);
    }
    
    .notes-list-focused {
        background-color:rgba(255,223,18, 0.75);
    }
    
    .note-list-item-folder-title {
        color: rgba(220,220,215,0.75);
    }
    
    .note-list-view {
        background-color: #323237;
    }
    
    .split-resize-handle {
        background-color: darkblue;
    }
    
    `
    head.appendChild(link);
})*/

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ })

/******/ });
//# sourceMappingURL=preload.js.map