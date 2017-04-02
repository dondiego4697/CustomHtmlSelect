var CustomSelect =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by Denis on 01.04.2017.
 */
var CustomSelect = function () {
    function CustomSelect() {
        _classCallCheck(this, CustomSelect);
    }

    /**
     * Функция, которая находит все select-ы и заменяет их
     */


    _createClass(CustomSelect, [{
        key: 'render',
        value: function render() {
            var _this = this;

            this.selectNodeList = document.querySelectorAll('.custom-select');
            var listArr = Array.from(this.selectNodeList);

            listArr.forEach(function (optionList) {
                var defaultVal = optionList.getAttribute("default") || 'Choose';
                var id = optionList.getAttribute("id");
                var optionArr = Array.from(optionList);
                var newCSelect = _this._createCSelect(id, defaultVal, optionArr);

                optionList.parentNode.replaceChild(newCSelect, optionList);
            });
        }

        /**
         * Создание кастомного select-а
         * @param id {string} id - идентифакатор элемента
         * @param {string} defaultVal - значение по умолчанию
         * @param {Array} optionArr - массив option-ов (элементов списка)
         * @return {Element}
         * @private
         */

    }, {
        key: '_createCSelect',
        value: function _createCSelect(id, defaultVal, optionArr) {
            var _this2 = this;

            /* Создание контейнера */
            var container = document.createElement('div');
            this._setAttrs({
                class: 'custom-select',
                id: id
            }, container);
            container.value = defaultVal;

            /* Создание отображения для текущего(выбранного) элемента*/
            var spanCurr = document.createElement('span');
            spanCurr.innerText = defaultVal;
            container.appendChild(spanCurr);

            /* Создание списка */
            var ul = document.createElement('ul');
            this._setAttrs({
                class: 'custom-select__list'
            }, ul);

            /* Наполняем список элементами */
            optionArr.forEach(function (option) {
                var li = document.createElement('li');
                _this2._setAttrs({
                    class: 'list__elem'
                }, li);
                li.innerText = option.innerHTML;

                li.addEventListener('click', function (event) {
                    event.stopPropagation();
                    spanCurr.innerText = li.innerText;
                    container.value = li.innerText;
                });

                ul.appendChild(li);
            });

            container.appendChild(ul);

            container.addEventListener('click', function (event) {
                container.classList.toggle('active');
            });
            return container;
        }

        /**
         * Метод, которые присваивает свойства элементу
         * @param {Object} attrs - объект с параметрами
         * @param {Element} elem - элемент к которому применяются свойства
         * @private
         */

    }, {
        key: '_setAttrs',
        value: function _setAttrs(attrs, elem) {
            Object.keys(attrs).forEach(function (name) {
                elem.setAttribute(name, attrs[name]);
            });
        }
    }]);

    return CustomSelect;
}();

exports.default = CustomSelect;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CustomSelect = __webpack_require__(0);

var _CustomSelect2 = _interopRequireDefault(_CustomSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _CustomSelect2.default().render(); /**
                                        * Created by Denis on 01.04.2017.
                                        */

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMDQwOGNiMmU4MTdlNDY1ODVhYjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL0N1c3RvbVNlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9tYWluLmpzIl0sIm5hbWVzIjpbIkN1c3RvbVNlbGVjdCIsInNlbGVjdE5vZGVMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibGlzdEFyciIsIkFycmF5IiwiZnJvbSIsImZvckVhY2giLCJkZWZhdWx0VmFsIiwib3B0aW9uTGlzdCIsImdldEF0dHJpYnV0ZSIsImlkIiwib3B0aW9uQXJyIiwibmV3Q1NlbGVjdCIsIl9jcmVhdGVDU2VsZWN0IiwicGFyZW50Tm9kZSIsInJlcGxhY2VDaGlsZCIsImNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJfc2V0QXR0cnMiLCJjbGFzcyIsInZhbHVlIiwic3BhbkN1cnIiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsInVsIiwibGkiLCJvcHRpb24iLCJpbm5lckhUTUwiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhdHRycyIsImVsZW0iLCJPYmplY3QiLCJrZXlzIiwic2V0QXR0cmlidXRlIiwibmFtZSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxtREFBMkMsY0FBYzs7QUFFekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7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IFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBpZGVudGl0eSBmdW5jdGlvbiBmb3IgY2FsbGluZyBoYXJtb255IGltcG9ydHMgd2l0aCB0aGUgY29ycmVjdCBjb250ZXh0XG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBmdW5jdGlvbih2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH07XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDA0MDhjYjJlODE3ZTQ2NTg1YWI5IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDEuMDQuMjAxNy5cclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1c3RvbVNlbGVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQpNGD0L3QutGG0LjRjywg0LrQvtGC0L7RgNCw0Y8g0L3QsNGF0L7QtNC40YIg0LLRgdC1IHNlbGVjdC3RiyDQuCDQt9Cw0LzQtdC90Y/QtdGCINC40YVcclxuICAgICAqL1xyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Tm9kZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXNlbGVjdCcpO1xyXG4gICAgICAgIGxldCBsaXN0QXJyID0gQXJyYXkuZnJvbSh0aGlzLnNlbGVjdE5vZGVMaXN0KTtcclxuXHJcbiAgICAgICAgbGlzdEFyci5mb3JFYWNoKG9wdGlvbkxpc3QgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGVmYXVsdFZhbCA9IG9wdGlvbkxpc3QuZ2V0QXR0cmlidXRlKFwiZGVmYXVsdFwiKSB8fCAnQ2hvb3NlJztcclxuICAgICAgICAgICAgbGV0IGlkID0gb3B0aW9uTGlzdC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbkFyciA9IEFycmF5LmZyb20ob3B0aW9uTGlzdCk7XHJcbiAgICAgICAgICAgIGxldCBuZXdDU2VsZWN0ID0gdGhpcy5fY3JlYXRlQ1NlbGVjdChpZCwgZGVmYXVsdFZhbCwgb3B0aW9uQXJyKTtcclxuXHJcbiAgICAgICAgICAgIG9wdGlvbkxpc3QucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobmV3Q1NlbGVjdCwgb3B0aW9uTGlzdCk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCh0L7Qt9C00LDQvdC40LUg0LrQsNGB0YLQvtC80L3QvtCz0L4gc2VsZWN0LdCwXHJcbiAgICAgKiBAcGFyYW0gaWQge3N0cmluZ30gaWQgLSDQuNC00LXQvdGC0LjRhNCw0LrQsNGC0L7RgCDRjdC70LXQvNC10L3RgtCwXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZGVmYXVsdFZhbCAtINC30L3QsNGH0LXQvdC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cclxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG9wdGlvbkFyciAtINC80LDRgdGB0LjQsiBvcHRpb24t0L7QsiAo0Y3Qu9C10LzQtdC90YLQvtCyINGB0L/QuNGB0LrQsClcclxuICAgICAqIEByZXR1cm4ge0VsZW1lbnR9XHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBfY3JlYXRlQ1NlbGVjdChpZCwgZGVmYXVsdFZhbCwgb3B0aW9uQXJyKSB7XHJcbiAgICAgICAgLyog0KHQvtC30LTQsNC90LjQtSDQutC+0L3RgtC10LnQvdC10YDQsCAqL1xyXG4gICAgICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICB0aGlzLl9zZXRBdHRycyh7XHJcbiAgICAgICAgICAgIGNsYXNzOiAnY3VzdG9tLXNlbGVjdCcsXHJcbiAgICAgICAgICAgIGlkOiBpZFxyXG4gICAgICAgIH0sIGNvbnRhaW5lcik7XHJcbiAgICAgICAgY29udGFpbmVyLnZhbHVlID0gZGVmYXVsdFZhbDtcclxuXHJcbiAgICAgICAgLyog0KHQvtC30LTQsNC90LjQtSDQvtGC0L7QsdGA0LDQttC10L3QuNGPINC00LvRjyDRgtC10LrRg9GJ0LXQs9C+KNCy0YvQsdGA0LDQvdC90L7Qs9C+KSDRjdC70LXQvNC10L3RgtCwKi9cclxuICAgICAgICBsZXQgc3BhbkN1cnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgc3BhbkN1cnIuaW5uZXJUZXh0ID0gZGVmYXVsdFZhbDtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3BhbkN1cnIpO1xyXG5cclxuICAgICAgICAvKiDQodC+0LfQtNCw0L3QuNC1INGB0L/QuNGB0LrQsCAqL1xyXG4gICAgICAgIGxldCB1bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XHJcbiAgICAgICAgdGhpcy5fc2V0QXR0cnMoe1xyXG4gICAgICAgICAgICBjbGFzczogJ2N1c3RvbS1zZWxlY3RfX2xpc3QnXHJcbiAgICAgICAgfSwgdWwpO1xyXG5cclxuICAgICAgICAvKiDQndCw0L/QvtC70L3Rj9C10Lwg0YHQv9C40YHQvtC6INGN0LvQtdC80LXQvdGC0LDQvNC4ICovXHJcbiAgICAgICAgb3B0aW9uQXJyLmZvckVhY2gob3B0aW9uID0+IHtcclxuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcclxuICAgICAgICAgICAgdGhpcy5fc2V0QXR0cnMoe1xyXG4gICAgICAgICAgICAgICAgY2xhc3M6ICdsaXN0X19lbGVtJ1xyXG4gICAgICAgICAgICB9LCBsaSk7XHJcbiAgICAgICAgICAgIGxpLmlubmVyVGV4dCA9IG9wdGlvbi5pbm5lckhUTUw7XHJcblxyXG4gICAgICAgICAgICBsaS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgc3BhbkN1cnIuaW5uZXJUZXh0ID0gbGkuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnZhbHVlID0gbGkuaW5uZXJUZXh0O1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHVsKTtcclxuXHJcbiAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCc0LXRgtC+0LQsINC60L7RgtC+0YDRi9C1INC/0YDQuNGB0LLQsNC40LLQsNC10YIg0YHQstC+0LnRgdGC0LLQsCDRjdC70LXQvNC10L3RgtGDXHJcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gYXR0cnMgLSDQvtCx0YrQtdC60YIg0YEg0L/QsNGA0LDQvNC10YLRgNCw0LzQuFxyXG4gICAgICogQHBhcmFtIHtFbGVtZW50fSBlbGVtIC0g0Y3Qu9C10LzQtdC90YIg0Log0LrQvtGC0L7RgNC+0LzRgyDQv9GA0LjQvNC10L3Rj9GO0YLRgdGPINGB0LLQvtC50YHRgtCy0LBcclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIF9zZXRBdHRycyhhdHRycywgZWxlbSkge1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKG5hbWUgPT4ge1xyXG4gICAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvanMvQ3VzdG9tU2VsZWN0LmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgRGVuaXMgb24gMDEuMDQuMjAxNy5cclxuICovXHJcbmltcG9ydCBDdXN0b21TZWxlY3QgZnJvbSAnLi9zcmMvanMvQ3VzdG9tU2VsZWN0JztcclxubmV3IEN1c3RvbVNlbGVjdCgpLnJlbmRlcigpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL21haW4uanMiXSwic291cmNlUm9vdCI6IiJ9