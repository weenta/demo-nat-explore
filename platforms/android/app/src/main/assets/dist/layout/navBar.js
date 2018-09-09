// { "framework": "Vue"} 

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
/******/ 	return __webpack_require__(__webpack_require__.s = 51);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/* eslint-disable no-undef */
var env = {
  isNative: (typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object',

  platform: weex.config.env.platform.toLowerCase(),
  deviceWidth: weex.config.env.deviceWidth,
  deviceHeight: weex.config.env.deviceHeight,
  // cdn
  cdnUri: 'http://cdn.instapp.io/nat/',

  get baseUrl() {
    var url = void 0;
    var bundleUrl = weex.config.bundleUrl;
    var isAndroid = this.platform === 'android';
    var isiOS = this.platform === 'ios';

    if (isAndroid) {
      url = 'file://assets/dist/';
    } else if (isiOS) {
      url = bundleUrl.substring(0, bundleUrl.lastIndexOf('/') + 1);
    } else {
      var host = 'localhost:8080';
      // eslint-disable-next-line no-useless-escape
      var matches = /\/\/([^\/]+?)\//.exec(bundleUrl);
      host = matches && matches.length >= 2 ? matches[1] : host;
      url = 'http://' + host + '/dist/';
    }
    return url;
  }
};

exports.default = env;

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _navBar = __webpack_require__(6);

var _navBar2 = _interopRequireDefault(_navBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_navBar2.default.el = '#root';
new Vue(_navBar2.default);

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(7)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(9)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/weenta/01data/03weex/demo_nat_explorer2/src/layout/navBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ebd49e28"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = {
  "nav-bar": {
    "width": "750",
    "height": "88",
    "backgroundColor": "#ffffff"
  },
  "back": {
    "width": "186",
    "height": "88",
    "paddingLeft": "12",
    "paddingRight": "12",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "arrow": {
    "width": "40",
    "height": "40",
    "marginRight": "2"
  },
  "back-txt": {
    "color": "#3D83FB",
    "fontSize": "34",
    "lineHeight": "34",
    "paddingTop": "3",
    "paddingBottom": "3",
    "height": "40"
  }
}

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = __webpack_require__(1);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line no-undef
var navigator = weex.requireModule('navigator'); //
//
//
//
//
//
//
//
//
//

exports.default = {
  name: 'NavBar',
  data: function data() {
    return {
      cdnUri: _env2.default.cdnUri
    };
  },

  methods: {
    pop: function pop() {
      navigator.pop();
    }
  }
};

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["nav-bar"]
  }, [_c('div', {
    staticClass: ["back"],
    on: {
      "click": _vm.pop
    }
  }, [_c('image', {
    staticClass: ["arrow"],
    attrs: {
      "src": _vm.cdnUri + "back_arrow.png"
    }
  }), _c('text', {
    staticClass: ["back-txt"]
  }, [_vm._v("Back")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });