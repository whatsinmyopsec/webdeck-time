(self['webpackChunkwebdeck_time'] = self['webpackChunkwebdeck_time'] || []).push([["990"], {
"251": (function (__unused_webpack_module, exports, __webpack_require__) {
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
var f = __webpack_require__(/*! react */"710"), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;
}),
"893": (function (module, __unused_webpack_exports, __webpack_require__) {
'use strict';
module.exports = __webpack_require__(/*! ./cjs/react-jsx-runtime.production.min.js */"251");
}),
"130": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return __WEBPACK_DEFAULT_EXPORT__; },
  manifest: function() { return _manifest__WEBPACK_IMPORTED_MODULE_2__.manifest; },
  onPress: function() { return onPress; }
});
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */"893");
/* harmony import */var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */"710");
/* harmony import */var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */var _manifest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manifest */"530");



 var onPress = function(/** @type {any} */ params) {
    var d = new Date();
    alert("".concat(d.toLocaleTimeString()));
    console.log("on press pressed", {
        params: params
    });
};
var App = function(/** @type {any} */ props) {
    console.log("App render", {
        props: props
    });
    return /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        style: {
            borderRadius: "4px",
            padding: "2em",
            backgroundColor: "red",
            color: "white"
        },
        children: /*#__PURE__*/ (0, react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
            children: "hello from webdeck-time"
        })
    });
};
var __WEBPACK_DEFAULT_EXPORT__ = App;
}),
"530": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  manifest: function() { return manifest; }
});
/* harmony import */var _utils_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/icons */"4");
function _define_property(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}

 var manifest = {
    icons: _define_property({}, _utils_icons__WEBPACK_IMPORTED_MODULE_0__.Icons.DEFAULT, {
        icon: _utils_icons__WEBPACK_IMPORTED_MODULE_0__.PATHS["default"]
    })
};
}),
"4": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  Icons: function() { return Icons; },
  PATHS: function() { return PATHS; }
});
 var Icons = {
    DEFAULT: "default"
};
 var PATHS = {
    default: "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"
};
}),

}]);
//# sourceMappingURL=990.js.map