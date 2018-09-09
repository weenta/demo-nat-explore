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
/******/ 	return __webpack_require__(__webpack_require__.s = 45);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(3)
)

/* script */
__vue_exports__ = __webpack_require__(4)

/* template */
var __vue_template__ = __webpack_require__(5)
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
__vue_options__.__file = "/Users/weenta/01data/03weex/demo_nat_explorer2/src/layout/statusBar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-70aab816"
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
/* 3 */
/***/ (function(module, exports) {

module.exports = {
  "bar": {
    "width": "750",
    "height": "40",
    "backgroundColor": "#ffffff"
  },
  "bar-x": {
    "width": "750",
    "height": "40",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = __webpack_require__(0);

var _env2 = _interopRequireDefault(_env);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'StatusBar',
  props: {
    backgroundColor: {
      type: String,
      default: '#fff'
    },
    show: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      platform: _env2.default.platform,
      style: {
        backgroundColor: this.backgroundColor
      }
    };
  },

  computed: {
    isX: function isX() {
      return _env2.default.platform === 'ios' && _env2.default.deviceWidth === 1125 && _env2.default.deviceHeight === 2436;
    }
  }

}; //
//
//
//
//
//
//

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show && _vm.platform === "ios") ? _c('div', {
    staticClass: ["status-bar"]
  }, [(_vm.isX) ? _c('div', {
    staticClass: ["bar-x"],
    style: _vm.style
  }) : _vm._e(), _c('div', {
    staticClass: ["bar"],
    style: _vm.style
  })]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(41)
)

/* script */
__vue_exports__ = __webpack_require__(42)

/* template */
var __vue_template__ = __webpack_require__(43)
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
__vue_options__.__file = "/Users/weenta/01data/03weex/demo_nat_explorer2/src/components/Module.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-8fbd92c8"
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
/* 41 */
/***/ (function(module, exports) {

module.exports = {
  "bottom-line": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "button": {
    "backgroundImage": "linear-gradient(to bottom, #3D83FB, #3370FF)",
    "height": "84",
    "paddingLeft": "64",
    "paddingRight": "64",
    "borderRadius": "42",
    "borderWidth": 0,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button-txt": {
    "fontSize": "32",
    "fontWeight": "600",
    "color": "#ffffff"
  },
  "module": {
    "marginLeft": "48",
    "marginRight": "48",
    "marginBottom": "48"
  },
  "title": {
    "color": "#333333",
    "fontSize": "32",
    "fontWeight": "200",
    "paddingTop": "8",
    "paddingBottom": "20"
  },
  "cell": {
    "height": "84",
    "paddingLeft": "24",
    "paddingRight": "12",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between"
  },
  "arrow": {
    "width": "15",
    "height": "27"
  },
  "name": {
    "color": "#333333",
    "fontSize": "32",
    "fontWeight": "700"
  }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = __webpack_require__(0);

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
  props: {
    name: {
      type: String,
      required: true
    },
    functions: {
      type: Array,
      required: true
    }
  },
  data: function data() {
    return {
      cdnUri: _env2.default.cdnUri,
      baseUrl: _env2.default.baseUrl
    };
  },

  methods: {
    push: function push(path) {
      navigator.push({
        url: this.baseUrl + path
      });
    }
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["module"]
  }, [_c('text', {
    staticClass: ["title", "bottom-line"]
  }, [_vm._v(_vm._s(_vm.name))]), _vm._l((_vm.functions), function(func, idx) {
    return _c('div', {
      key: idx,
      staticClass: ["cell", "bottom-line"],
      on: {
        "click": function($event) {
          _vm.push(func.path)
        }
      }
    }, [_c('text', {
      staticClass: ["name"]
    }, [_vm._v(_vm._s(func.name))]), _c('image', {
      staticClass: ["arrow"],
      attrs: {
        "src": _vm.cdnUri + "arrow.png"
      }
    })])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 44 */,
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _index = __webpack_require__(46);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
new Vue(_index2.default);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(47)
)

/* script */
__vue_exports__ = __webpack_require__(48)

/* template */
var __vue_template__ = __webpack_require__(50)
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
__vue_options__.__file = "/Users/weenta/01data/03weex/demo_nat_explorer2/src/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-2964abc9"
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
/* 47 */
/***/ (function(module, exports) {

module.exports = {
  "bottom-line": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#dddddd"
  },
  "button": {
    "backgroundImage": "linear-gradient(to bottom, #3D83FB, #3370FF)",
    "height": "84",
    "paddingLeft": "64",
    "paddingRight": "64",
    "borderRadius": "42",
    "borderWidth": 0,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "button-txt": {
    "fontSize": "32",
    "fontWeight": "600",
    "color": "#ffffff"
  },
  "app-logo": {
    "width": "82",
    "height": "82",
    "marginTop": "32",
    "marginLeft": "48",
    "marginBottom": "18"
  },
  "app-name": {
    "height": "100",
    "marginLeft": "48",
    "marginRight": "48",
    "marginBottom": "48",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "bold": {
    "color": "#333333",
    "fontSize": "72",
    "fontWeight": "700"
  },
  "light": {
    "color": "#333333",
    "fontSize": "72",
    "fontWeight": "200",
    "marginLeft": "24"
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _env = __webpack_require__(0);

var _env2 = _interopRequireDefault(_env);

var _modules = __webpack_require__(49);

var _modules2 = _interopRequireDefault(_modules);

var _Module = __webpack_require__(40);

var _Module2 = _interopRequireDefault(_Module);

var _statusBar = __webpack_require__(2);

var _statusBar2 = _interopRequireDefault(_statusBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
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
  name: 'App',
  components: {
    Module: _Module2.default,
    stutusBar: _statusBar2.default
  },
  data: function data() {
    return {
      cdnUri: _env2.default.cdnUri,
      modules: _modules2.default
    };
  },
  created: function created() {}
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var modules = [{
  name: 'Communication',
  functions: [{
    name: 'Call',
    path: 'views/communication/call.js'
  }, {
    name: 'Mail',
    path: 'views/communication/mail.js'
  }, {
    name: 'Sms',
    path: 'views/communication/sms.js'
  }]
}, {
  name: 'Media',
  functions: [{
    name: 'Image',
    path: 'views/media/image.js'
  }, {
    name: 'Audio',
    path: 'views/media/audio.js'
  }, {
    name: 'Video',
    path: 'views/media/video.js'
  }]
}, {
  name: 'Camera',
  functions: [{
    name: 'captureImage',
    path: 'views/camera/captureImage.js'
  }, {
    name: 'captureVideo',
    path: 'views/camera/captureVideo.js'
  }]
}, {
  name: 'Recorder',
  functions: [{
    name: 'Recorder',
    path: 'views/recorder/recorder.js'
  }]
}, {
  name: 'Modal',
  functions: [{
    name: 'Alert',
    path: 'views/modal/alert.js'
  }, {
    name: 'Confirm',
    path: 'views/modal/confirm.js'
  }, {
    name: 'Prompt',
    path: 'views/modal/prompt.js'
  }, {
    name: 'Toast',
    path: 'views/modal/toast.js'
  }]
}];

exports.default = modules;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('status-bar', {
    attrs: {
      "show": false
    }
  }), _c('list', {
    staticClass: ["list"]
  }, [_c('cell', {
    appendAsTree: true,
    attrs: {
      "append": "tree"
    }
  }, [_c('image', {
    staticClass: ["app-logo"],
    attrs: {
      "src": _vm.cdnUri + "logo.png"
    }
  }), _vm._m(0)]), _vm._l((_vm.modules), function(item, i) {
    return _c('cell', {
      key: i,
      appendAsTree: true,
      attrs: {
        "append": "tree"
      }
    }, [_c('module', {
      attrs: {
        "name": item.name,
        "functions": item.functions
      }
    })], 1)
  })], 2)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["app-name"]
  }, [_c('text', {
    staticClass: ["bold"]
  }, [_vm._v("Demo nat")]), _c('text', {
    staticClass: ["light"]
  }, [_vm._v("Explorer2")])])
}]}
module.exports.render._withStripped = true

/***/ })
/******/ ]);