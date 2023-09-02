/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./Rowdies-Light.ttf */ "./src/Rowdies-Light.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'MyFont';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});

}


body {
    margin:0px;
    padding: 0px;

}

#outerContainer{
    display: grid;
    background: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
    background-size: cover;
    grid-template: 
    'nav nav nav'
    '. main .'
    ;    
    grid-template-columns: 10vw 80vw 10vw;
    grid-template-rows: 12vh 88vh;

}

#navBar {
    display: grid;
    grid-area: nav; /* Assign the grid area */
    background-color: rgb(202, 149, 5);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    z-index: 0;
    width: 100%;
    grid-template: 
    '.'
    "head"
    "."
    ;
    
}

#heading {
    display: grid;
    color: bisque;
    grid-area: head; 
    justify-content: center;
    align-content: center;
    font-family: 'MyFont';
    font-size: 30px;
    
}

#mainSec {  
    display: grid;
    grid-area: main;
    grid-template-rows: 1fr 9fr;
    grid-template-areas: 
    "headSec"
    "bodySec"
    ;
    background-color: rgba(253, 247, 247, 0.842);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;

}



#headSec {
    display: grid;
    grid-area: headSec;

    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr;

    background-color: rgba(255, 233, 206, 0.774);
   
}


#navHead {
    display: grid;
    grid-template-rows: 1fr;
    grid-template: 
    "spacer1 tab1 tab2 tab3 spacer2"
    ;
    font-family: 'MyFont';
}



#bodySec {
    display: grid;
    grid-area: bodySec;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    justify-content: center;
    align-content: center;
    
}


#secHead {
    color: bisque;
    border-radius: 5px;
    background-color: rgb(202, 149, 5);
    height: 20px;
    width: 80px;
    text-align: center;
    text-justify: center;
    font-family: 'MyFont';
}

#spacer1 {
    grid-area: spacer1;
    width: 100px;
}

#tab1 {
    color: bisque;
    background-color: rgb(202, 149, 5);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    grid-area: tab1;
    font-size: 10px;
    z-index: 3;
    text-align: center;
    border-bottom-left-radius: 5px;

    border: none;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
}

#tab1:hover {
    background-color: rgb(160, 117, 1);

}

#tab2 {
    color: bisque;
    background-color: rgb(202, 149, 5);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    grid-area: tab2;
    font-size: 10px;
    z-index: 2;
    text-align: center;
    
    border: none;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
}

#tab2:hover {
    background-color: rgb(160, 117, 1);

}

#tab3 {
    color: bisque;
    background-color: rgb(202, 149, 5);
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
    grid-area: tab3;
    font-size: 10px;
    z-index: 1;
    text-align: center;
    border-bottom-right-radius: 5px;

    border: none;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
}

#tab3:hover {
    background-color: rgb(160, 117, 1);

}

#spacer2 {
    grid-area: spacer2;
    justify-self: end;
    width: 100px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA+B;;AAEnC;;;AAGA;IACI,UAAU;IACV,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,mDAAmC;IACnC,sBAAsB;IACtB;;;IAGA;IACA,qCAAqC;IACrC,6BAA6B;;AAEjC;;AAEA;IACI,aAAa;IACb,cAAc,EAAE,yBAAyB;IACzC,kCAAkC;IAClC,0CAA0C;IAC1C,UAAU;IACV,WAAW;IACX;;;;IAIA;;AAEJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B;;;IAGA;IACA,4CAA4C;IAC5C,gCAAgC;IAChC,+BAA+B;;AAEnC;;;;AAIA;IACI,aAAa;IACb,kBAAkB;;IAElB,2BAA2B;IAC3B,0BAA0B;;IAE1B,4CAA4C;;AAEhD;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB;;IAEA;IACA,qBAAqB;AACzB;;;;AAIA;IACI,aAAa;IACb,kBAAkB;IAClB,mDAAmD;IACnD,uBAAuB;IACvB,qBAAqB;;AAEzB;;;AAGA;IACI,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,eAAe;IACf,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,8BAA8B;;IAE9B,YAAY;IACZ,eAAe;IACf,iBAAiB,EAAE,2BAA2B;AAClD;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,eAAe;IACf,eAAe;IACf,UAAU;IACV,kBAAkB;;IAElB,YAAY;IACZ,eAAe;IACf,iBAAiB,EAAE,2BAA2B;AAClD;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;IACI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,eAAe;IACf,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,+BAA+B;;IAE/B,YAAY;IACZ,eAAe;IACf,iBAAiB,EAAE,2BAA2B;AAClD;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./Rowdies-Light.ttf');\n\n}\n\n\nbody {\n    margin:0px;\n    padding: 0px;\n\n}\n\n#outerContainer{\n    display: grid;\n    background: url('./restaurant.jpg');\n    background-size: cover;\n    grid-template: \n    'nav nav nav'\n    '. main .'\n    ;    \n    grid-template-columns: 10vw 80vw 10vw;\n    grid-template-rows: 12vh 88vh;\n\n}\n\n#navBar {\n    display: grid;\n    grid-area: nav; /* Assign the grid area */\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    z-index: 0;\n    width: 100%;\n    grid-template: \n    '.'\n    \"head\"\n    \".\"\n    ;\n    \n}\n\n#heading {\n    display: grid;\n    color: bisque;\n    grid-area: head; \n    justify-content: center;\n    align-content: center;\n    font-family: 'MyFont';\n    font-size: 30px;\n    \n}\n\n#mainSec {  \n    display: grid;\n    grid-area: main;\n    grid-template-rows: 1fr 9fr;\n    grid-template-areas: \n    \"headSec\"\n    \"bodySec\"\n    ;\n    background-color: rgba(253, 247, 247, 0.842);\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n\n}\n\n\n\n#headSec {\n    display: grid;\n    grid-area: headSec;\n\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n\n    background-color: rgba(255, 233, 206, 0.774);\n   \n}\n\n\n#navHead {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template: \n    \"spacer1 tab1 tab2 tab3 spacer2\"\n    ;\n    font-family: 'MyFont';\n}\n\n\n\n#bodySec {\n    display: grid;\n    grid-area: bodySec;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    justify-content: center;\n    align-content: center;\n    \n}\n\n\n#secHead {\n    color: bisque;\n    border-radius: 5px;\n    background-color: rgb(202, 149, 5);\n    height: 20px;\n    width: 80px;\n    text-align: center;\n    text-justify: center;\n    font-family: 'MyFont';\n}\n\n#spacer1 {\n    grid-area: spacer1;\n    width: 100px;\n}\n\n#tab1 {\n    color: bisque;\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    grid-area: tab1;\n    font-size: 10px;\n    z-index: 3;\n    text-align: center;\n    border-bottom-left-radius: 5px;\n\n    border: none;\n    cursor: pointer;\n    user-select: none; /* Prevent text selection */\n}\n\n#tab1:hover {\n    background-color: rgb(160, 117, 1);\n\n}\n\n#tab2 {\n    color: bisque;\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    grid-area: tab2;\n    font-size: 10px;\n    z-index: 2;\n    text-align: center;\n    \n    border: none;\n    cursor: pointer;\n    user-select: none; /* Prevent text selection */\n}\n\n#tab2:hover {\n    background-color: rgb(160, 117, 1);\n\n}\n\n#tab3 {\n    color: bisque;\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    grid-area: tab3;\n    font-size: 10px;\n    z-index: 1;\n    text-align: center;\n    border-bottom-right-radius: 5px;\n\n    border: none;\n    cursor: pointer;\n    user-select: none; /* Prevent text selection */\n}\n\n#tab3:hover {\n    background-color: rgb(160, 117, 1);\n\n}\n\n#spacer2 {\n    grid-area: spacer2;\n    justify-self: end;\n    width: 100px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contactComponent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");




function contactComponent() {

    console.log("Opened Contact page");

    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const text1 = document.createElement('div');
    const element2 = document.createElement('div');

    const sec1 = document.createElement('div');
    const sec2 = document.createElement('div');    

    const secHeader = document.createElement('div');

    const text2 = document.createElement('div');

    const navSec = document.createElement('div');

    const space1 = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const space2 = document.createElement('div');


    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    sec1.id = 'headSec';
    sec2.id = 'bodySec';

    secHeader.id = 'secHead';
    secHeader.textContent = "Contact";
    
    text1.id = 'heading';
    text1.textContent = "Restaurant Page";

    navSec.id = 'navHead';

    text2.id = 'bodyHeader';
    text2.textContent = "Main";


    space1.id = 'spacer1';
    tab1.id = 'tab1';
    tab2.id = 'tab2';
    tab3.id = 'tab3';
    space2.id = 'spacer2';


    // Add the image to our existing div.
    element.appendChild(element1);
    element.appendChild(element2);

    element1.appendChild(text1);
  
    element2.appendChild(sec1);    
    element2.appendChild(sec2);

    sec1.appendChild(navSec);

    sec2.appendChild(secHeader);

    navSec.appendChild(space1);
    navSec.appendChild(tab1);
    navSec.appendChild(tab2);
    navSec.appendChild(tab3);
    navSec.appendChild(space2);

    space1.textContent = "";
    tab1.textContent = "Home";
    tab2.textContent = "Menu";
    tab3.textContent = "Contact";
    space2.textContent = "";

    


    return element;
};


/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ component)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");





function component() {

    console.log("Opened Main page");

    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const text1 = document.createElement('div');
    const element2 = document.createElement('div');

    const sec1 = document.createElement('div');
    const sec2 = document.createElement('div');    

    const secHeader = document.createElement('div');

    const text2 = document.createElement('div');

    const navSec = document.createElement('div');

    const space1 = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const space2 = document.createElement('div');


    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    sec1.id = 'headSec';
    sec2.id = 'bodySec';

    secHeader.id = 'secHead';
    secHeader.textContent = "Home";
    
    text1.id = 'heading';
    text1.textContent = "Restaurant Page";

    navSec.id = 'navHead';

    text2.id = 'bodyHeader';
    text2.textContent = "Main";


    space1.id = 'spacer1';
    tab1.id = 'tab1';
    tab2.id = 'tab2';
    tab3.id = 'tab3';
    space2.id = 'spacer2';


    // Add the image to our existing div.
    element.appendChild(element1);
    element.appendChild(element2);

    element1.appendChild(text1);
  
    element2.appendChild(sec1);    
    element2.appendChild(sec2);

    sec1.appendChild(navSec);

    sec2.appendChild(secHeader);

    navSec.appendChild(space1);
    navSec.appendChild(tab1);
    navSec.appendChild(tab2);
    navSec.appendChild(tab3);
    navSec.appendChild(space2);

    space1.textContent = "";
    tab1.textContent = "Home";
    tab2.textContent = "Menu";
    tab3.textContent = "Contact";
    space2.textContent = "";

    


    return element;

};




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menuComponent)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");




function menuComponent() {

    console.log("Opened Menu page");

    const element = document.createElement('div');
    const element1 = document.createElement('div');
    const text1 = document.createElement('div');
    const element2 = document.createElement('div');

    const sec1 = document.createElement('div');
    const sec2 = document.createElement('div');    

    const secHeader = document.createElement('div');

    const text2 = document.createElement('div');

    const navSec = document.createElement('div');

    const space1 = document.createElement('div');
    const tab1 = document.createElement('div');
    const tab2 = document.createElement('div');
    const tab3 = document.createElement('div');
    const space2 = document.createElement('div');


    element.id ='outerContainer';
    element1.id = 'navBar';
    element2.id = 'mainSec';

    sec1.id = 'headSec';
    sec2.id = 'bodySec';

    secHeader.id = 'secHead';
    secHeader.textContent = "Menu";
    
    text1.id = 'heading';
    text1.textContent = "Restaurant Page";

    navSec.id = 'navHead';

    text2.id = 'bodyHeader';
    text2.textContent = "Main";


    space1.id = 'spacer1';
    tab1.id = 'tab1';
    tab2.id = 'tab2';
    tab3.id = 'tab3';
    space2.id = 'spacer2';


    // Add the image to our existing div.
    element.appendChild(element1);
    element.appendChild(element2);

    element1.appendChild(text1);
  
    element2.appendChild(sec1);    
    element2.appendChild(sec2);

    sec1.appendChild(navSec);

    sec2.appendChild(secHeader);

    navSec.appendChild(space1);
    navSec.appendChild(tab1);
    navSec.appendChild(tab2);
    navSec.appendChild(tab3);
    navSec.appendChild(space2);

    space1.textContent = "";
    tab1.textContent = "Home";
    tab2.textContent = "Menu";
    tab3.textContent = "Contact";
    space2.textContent = "";

    


    return element;
};


/***/ }),

/***/ "./src/Rowdies-Light.ttf":
/*!*******************************!*\
  !*** ./src/Rowdies-Light.ttf ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "97fd181336cb2a8b2b6e.ttf";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2012eecba02a726daf75.jpg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ "./src/main.js");
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");






var initialPage = () => {
console.log("START");

let bodyElement = document.body;
let page = bodyElement.firstElementChild;

const tabElement1 = document.getElementById("tab1"); // may need to be called again 
const tabElement2 = document.getElementById("tab2"); 
const tabElement3 = document.getElementById("tab3"); 

// put 'click' event listener for main page
tabElement1.addEventListener("click", function() {
    page = bodyElement.lastElementChild;
    
    bodyElement.removeChild(page);
    bodyElement.appendChild((0,_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

    initialPage();

});

// put 'click' event listener for menu page
tabElement2.addEventListener("click", function() {
    page = bodyElement.lastElementChild;
    
    bodyElement.removeChild(page);
    bodyElement.appendChild((0,_menu_js__WEBPACK_IMPORTED_MODULE_1__["default"])());

    initialPage();
});


// put 'click' event listener for contact page
tabElement3.addEventListener("click", function() {
    page = bodyElement.lastElementChild;
    
    bodyElement.removeChild(page);
    bodyElement.appendChild((0,_contact_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

    initialPage();  
});



}; // Ends initialPage



document.body.appendChild((0,_main_js__WEBPACK_IMPORTED_MODULE_0__["default"])());
initialPage();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXhidW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxtSEFBc0M7QUFDbEYsNENBQTRDLDZHQUFtQztBQUMvRSw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1DQUFtQzs7QUFFbEQ7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esc0JBQXNCLG1DQUFtQztBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qjs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sZ0ZBQWdGLFlBQVksY0FBYyxRQUFRLEtBQUssVUFBVSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxRQUFRLEtBQUssWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLHNCQUFzQixhQUFhLGFBQWEsV0FBVyxVQUFVLFFBQVEsTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxLQUFLLFlBQVksYUFBYSxjQUFjLFNBQVMsS0FBSyxVQUFVLGFBQWEsYUFBYSxjQUFjLGNBQWMsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxjQUFjLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSx3QkFBd0IsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLGFBQWEsV0FBVyxVQUFVLHdCQUF3QixPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSx3QkFBd0IsT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLHNDQUFzQyw0QkFBNEIsc0NBQXNDLEtBQUssWUFBWSxpQkFBaUIsbUJBQW1CLEtBQUssb0JBQW9CLG9CQUFvQiwwQ0FBMEMsNkJBQTZCLG1FQUFtRSw0Q0FBNEMsb0NBQW9DLEtBQUssYUFBYSxvQkFBb0Isc0JBQXNCLG1FQUFtRSxpREFBaUQsaUJBQWlCLGtCQUFrQiw4REFBOEQsU0FBUyxjQUFjLG9CQUFvQixvQkFBb0IsdUJBQXVCLDhCQUE4Qiw0QkFBNEIsNEJBQTRCLHNCQUFzQixTQUFTLGdCQUFnQixvQkFBb0Isc0JBQXNCLGtDQUFrQyxvRUFBb0UsbURBQW1ELHVDQUF1QyxzQ0FBc0MsS0FBSyxrQkFBa0Isb0JBQW9CLHlCQUF5QixvQ0FBb0MsaUNBQWlDLHFEQUFxRCxRQUFRLGdCQUFnQixvQkFBb0IsOEJBQThCLG9FQUFvRSw0QkFBNEIsR0FBRyxrQkFBa0Isb0JBQW9CLHlCQUF5QiwwREFBMEQsOEJBQThCLDRCQUE0QixTQUFTLGdCQUFnQixvQkFBb0IseUJBQXlCLHlDQUF5QyxtQkFBbUIsa0JBQWtCLHlCQUF5QiwyQkFBMkIsNEJBQTRCLEdBQUcsY0FBYyx5QkFBeUIsbUJBQW1CLEdBQUcsV0FBVyxvQkFBb0IseUNBQXlDLGlEQUFpRCxzQkFBc0Isc0JBQXNCLGlCQUFpQix5QkFBeUIscUNBQXFDLHFCQUFxQixzQkFBc0IseUJBQXlCLCtCQUErQixpQkFBaUIseUNBQXlDLEtBQUssV0FBVyxvQkFBb0IseUNBQXlDLGlEQUFpRCxzQkFBc0Isc0JBQXNCLGlCQUFpQix5QkFBeUIseUJBQXlCLHNCQUFzQix5QkFBeUIsK0JBQStCLGlCQUFpQix5Q0FBeUMsS0FBSyxXQUFXLG9CQUFvQix5Q0FBeUMsaURBQWlELHNCQUFzQixzQkFBc0IsaUJBQWlCLHlCQUF5QixzQ0FBc0MscUJBQXFCLHNCQUFzQix5QkFBeUIsK0JBQStCLGlCQUFpQix5Q0FBeUMsS0FBSyxjQUFjLHlCQUF5Qix3QkFBd0IsbUJBQW1CLEdBQUcsbUJBQW1CO0FBQzFvSjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2hNMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDekJhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsY0FBYztBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBbUc7QUFDbkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUk2QztBQUNyRSxPQUFPLGlFQUFlLHNGQUFPLElBQUksc0ZBQU8sVUFBVSxzRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNnQjs7O0FBR3RCOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGcUI7QUFDZ0I7Ozs7QUFJdEI7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZxQjtBQUNnQjs7O0FBR3RCOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7QUNBa0M7QUFDSTtBQUNNOzs7O0FBSTVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxxREFBcUQ7QUFDckQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFTOztBQUVyQzs7QUFFQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0RBQWE7O0FBRXpDO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1REFBZ0I7O0FBRTVDO0FBQ0EsQ0FBQzs7OztBQUlELEdBQUc7Ozs7QUFJSCwwQkFBMEIsb0RBQVM7QUFDbkMsYyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL1Jvd2RpZXMtTGlnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9yZXN0YXVyYW50LmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcblxufVxuXG5cbmJvZHkge1xuICAgIG1hcmdpbjowcHg7XG4gICAgcGFkZGluZzogMHB4O1xuXG59XG5cbiNvdXRlckNvbnRhaW5lcntcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGJhY2tncm91bmQ6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGdyaWQtdGVtcGxhdGU6IFxuICAgICduYXYgbmF2IG5hdidcbiAgICAnLiBtYWluIC4nXG4gICAgOyAgICBcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdncgODB2dyAxMHZ3O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTJ2aCA4OHZoO1xuXG59XG5cbiNuYXZCYXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBuYXY7IC8qIEFzc2lnbiB0aGUgZ3JpZCBhcmVhICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTQ5LCA1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgei1pbmRleDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlOiBcbiAgICAnLidcbiAgICBcImhlYWRcIlxuICAgIFwiLlwiXG4gICAgO1xuICAgIFxufVxuXG4jaGVhZGluZyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBjb2xvcjogYmlzcXVlO1xuICAgIGdyaWQtYXJlYTogaGVhZDsgXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgXG59XG5cbiNtYWluU2VjIHsgIFxuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC1hcmVhOiBtYWluO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcbiAgICBcImhlYWRTZWNcIlxuICAgIFwiYm9keVNlY1wiXG4gICAgO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUzLCAyNDcsIDI0NywgMC44NDIpO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAxMHB4O1xuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XG5cbn1cblxuXG5cbiNoZWFkU2VjIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogaGVhZFNlYztcblxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcblxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyMzMsIDIwNiwgMC43NzQpO1xuICAgXG59XG5cblxuI25hdkhlYWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZTogXG4gICAgXCJzcGFjZXIxIHRhYjEgdGFiMiB0YWIzIHNwYWNlcjJcIlxuICAgIDtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG59XG5cblxuXG4jYm9keVNlYyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGJvZHlTZWM7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBcbn1cblxuXG4jc2VjSGVhZCB7XG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTQ5LCA1KTtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtanVzdGlmeTogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250Jztcbn1cblxuI3NwYWNlcjEge1xuICAgIGdyaWQtYXJlYTogc3BhY2VyMTtcbiAgICB3aWR0aDogMTAwcHg7XG59XG5cbiN0YWIxIHtcbiAgICBjb2xvcjogYmlzcXVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGdyaWQtYXJlYTogdGFiMTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgei1pbmRleDogMztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xufVxuXG4jdGFiMTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTE3LCAxKTtcblxufVxuXG4jdGFiMiB7XG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBncmlkLWFyZWE6IHRhYjI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHotaW5kZXg6IDI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIFxuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gKi9cbn1cblxuI3RhYjI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDExNywgMSk7XG5cbn1cblxuI3RhYjMge1xuICAgIGNvbG9yOiBiaXNxdWU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTQ5LCA1KTtcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgZ3JpZC1hcmVhOiB0YWIzO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuXG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xufVxuXG4jdGFiMzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTE3LCAxKTtcblxufVxuXG4jc3BhY2VyMiB7XG4gICAgZ3JpZC1hcmVhOiBzcGFjZXIyO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIHdpZHRoOiAxMDBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsNENBQStCOztBQUVuQzs7O0FBR0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTs7QUFFaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbURBQW1DO0lBQ25DLHNCQUFzQjtJQUN0Qjs7O0lBR0E7SUFDQSxxQ0FBcUM7SUFDckMsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixjQUFjLEVBQUUseUJBQXlCO0lBQ3pDLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsVUFBVTtJQUNWLFdBQVc7SUFDWDs7OztJQUlBOztBQUVKOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLDJCQUEyQjtJQUMzQjs7O0lBR0E7SUFDQSw0Q0FBNEM7SUFDNUMsZ0NBQWdDO0lBQ2hDLCtCQUErQjs7QUFFbkM7Ozs7QUFJQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7O0lBRWxCLDJCQUEyQjtJQUMzQiwwQkFBMEI7O0lBRTFCLDRDQUE0Qzs7QUFFaEQ7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2Qjs7SUFFQTtJQUNBLHFCQUFxQjtBQUN6Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7QUFFekI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLDhCQUE4Qjs7SUFFOUIsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUIsRUFBRSwyQkFBMkI7QUFDbEQ7O0FBRUE7SUFDSSxrQ0FBa0M7O0FBRXRDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1Ysa0JBQWtCOztJQUVsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQixFQUFFLDJCQUEyQjtBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsK0JBQStCOztJQUUvQixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQixFQUFFLDJCQUEyQjtBQUNsRDs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vUm93ZGllcy1MaWdodC50dGYnKTtcXG5cXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG5cXG59XFxuXFxuI291dGVyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vcmVzdGF1cmFudC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgICduYXYgbmF2IG5hdidcXG4gICAgJy4gbWFpbiAuJ1xcbiAgICA7ICAgIFxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdncgODB2dyAxMHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEydmggODh2aDtcXG5cXG59XFxuXFxuI25hdkJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogbmF2OyAvKiBBc3NpZ24gdGhlIGdyaWQgYXJlYSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJy4nXFxuICAgIFxcXCJoZWFkXFxcIlxcbiAgICBcXFwiLlxcXCJcXG4gICAgO1xcbiAgICBcXG59XFxuXFxuI2hlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogYmlzcXVlO1xcbiAgICBncmlkLWFyZWE6IGhlYWQ7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgXFxufVxcblxcbiNtYWluU2VjIHsgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkU2VjXFxcIlxcbiAgICBcXFwiYm9keVNlY1xcXCJcXG4gICAgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMjQ3LCAyNDcsIDAuODQyKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuXFxufVxcblxcblxcblxcbiNoZWFkU2VjIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkU2VjO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMzLCAyMDYsIDAuNzc0KTtcXG4gICBcXG59XFxuXFxuXFxuI25hdkhlYWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgIFxcXCJzcGFjZXIxIHRhYjEgdGFiMiB0YWIzIHNwYWNlcjJcXFwiXFxuICAgIDtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG5cXG5cXG4jYm9keVNlYyB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogYm9keVNlYztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuXFxuI3NlY0hlYWQge1xcbiAgICBjb2xvcjogYmlzcXVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG59XFxuXFxuI3NwYWNlcjEge1xcbiAgICBncmlkLWFyZWE6IHNwYWNlcjE7XFxuICAgIHdpZHRoOiAxMDBweDtcXG59XFxuXFxuI3RhYjEge1xcbiAgICBjb2xvcjogYmlzcXVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGdyaWQtYXJlYTogdGFiMTtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB6LWluZGV4OiAzO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBQcmV2ZW50IHRleHQgc2VsZWN0aW9uICovXFxufVxcblxcbiN0YWIxOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTE3LCAxKTtcXG5cXG59XFxuXFxuI3RhYjIge1xcbiAgICBjb2xvcjogYmlzcXVlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGdyaWQtYXJlYTogdGFiMjtcXG4gICAgZm9udC1zaXplOiAxMHB4O1xcbiAgICB6LWluZGV4OiAyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIFxcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gKi9cXG59XFxuXFxuI3RhYjI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxMTcsIDEpO1xcblxcbn1cXG5cXG4jdGFiMyB7XFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZ3JpZC1hcmVhOiB0YWIzO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcXG5cXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lOyAvKiBQcmV2ZW50IHRleHQgc2VsZWN0aW9uICovXFxufVxcblxcbiN0YWIzOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTE3LCAxKTtcXG5cXG59XFxuXFxuI3NwYWNlcjIge1xcbiAgICBncmlkLWFyZWE6IHNwYWNlcjI7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB3aWR0aDogMTAwcHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdENvbXBvbmVudCgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwiT3BlbmVkIENvbnRhY3QgcGFnZVwiKTtcblxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHNlYzEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzZWMyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7ICAgIFxuXG4gICAgY29uc3Qgc2VjSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbmF2U2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzcGFjZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzcGFjZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuXG4gICAgZWxlbWVudC5pZCA9J291dGVyQ29udGFpbmVyJztcbiAgICBlbGVtZW50MS5pZCA9ICduYXZCYXInO1xuICAgIGVsZW1lbnQyLmlkID0gJ21haW5TZWMnO1xuXG4gICAgc2VjMS5pZCA9ICdoZWFkU2VjJztcbiAgICBzZWMyLmlkID0gJ2JvZHlTZWMnO1xuXG4gICAgc2VjSGVhZGVyLmlkID0gJ3NlY0hlYWQnO1xuICAgIHNlY0hlYWRlci50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIFxuICAgIHRleHQxLmlkID0gJ2hlYWRpbmcnO1xuICAgIHRleHQxLnRleHRDb250ZW50ID0gXCJSZXN0YXVyYW50IFBhZ2VcIjtcblxuICAgIG5hdlNlYy5pZCA9ICduYXZIZWFkJztcblxuICAgIHRleHQyLmlkID0gJ2JvZHlIZWFkZXInO1xuICAgIHRleHQyLnRleHRDb250ZW50ID0gXCJNYWluXCI7XG5cblxuICAgIHNwYWNlMS5pZCA9ICdzcGFjZXIxJztcbiAgICB0YWIxLmlkID0gJ3RhYjEnO1xuICAgIHRhYjIuaWQgPSAndGFiMic7XG4gICAgdGFiMy5pZCA9ICd0YWIzJztcbiAgICBzcGFjZTIuaWQgPSAnc3BhY2VyMic7XG5cblxuICAgIC8vIEFkZCB0aGUgaW1hZ2UgdG8gb3VyIGV4aXN0aW5nIGRpdi5cbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQxKTtcbiAgICBlbGVtZW50LmFwcGVuZENoaWxkKGVsZW1lbnQyKTtcblxuICAgIGVsZW1lbnQxLmFwcGVuZENoaWxkKHRleHQxKTtcbiAgXG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQoc2VjMSk7ICAgIFxuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKHNlYzIpO1xuXG4gICAgc2VjMS5hcHBlbmRDaGlsZChuYXZTZWMpO1xuXG4gICAgc2VjMi5hcHBlbmRDaGlsZChzZWNIZWFkZXIpO1xuXG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHNwYWNlMSk7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHRhYjEpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZCh0YWIyKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQodGFiMyk7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHNwYWNlMik7XG5cbiAgICBzcGFjZTEudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIHRhYjEudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICB0YWIyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgdGFiMy50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIHNwYWNlMi50ZXh0Q29udGVudCA9IFwiXCI7XG5cbiAgICBcblxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIk9wZW5lZCBNYWluIHBhZ2VcIik7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzZWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcblxuICAgIGNvbnN0IHNlY0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG5hdlNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc3BhY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3BhY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIGVsZW1lbnQuaWQgPSdvdXRlckNvbnRhaW5lcic7XG4gICAgZWxlbWVudDEuaWQgPSAnbmF2QmFyJztcbiAgICBlbGVtZW50Mi5pZCA9ICdtYWluU2VjJztcblxuICAgIHNlYzEuaWQgPSAnaGVhZFNlYyc7XG4gICAgc2VjMi5pZCA9ICdib2R5U2VjJztcblxuICAgIHNlY0hlYWRlci5pZCA9ICdzZWNIZWFkJztcbiAgICBzZWNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBcbiAgICB0ZXh0MS5pZCA9ICdoZWFkaW5nJztcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBQYWdlXCI7XG5cbiAgICBuYXZTZWMuaWQgPSAnbmF2SGVhZCc7XG5cbiAgICB0ZXh0Mi5pZCA9ICdib2R5SGVhZGVyJztcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiTWFpblwiO1xuXG5cbiAgICBzcGFjZTEuaWQgPSAnc3BhY2VyMSc7XG4gICAgdGFiMS5pZCA9ICd0YWIxJztcbiAgICB0YWIyLmlkID0gJ3RhYjInO1xuICAgIHRhYjMuaWQgPSAndGFiMyc7XG4gICAgc3BhY2UyLmlkID0gJ3NwYWNlcjInO1xuXG5cbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG5cbiAgICBlbGVtZW50MS5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gIFxuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKHNlYzEpOyAgICBcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChzZWMyKTtcblxuICAgIHNlYzEuYXBwZW5kQ2hpbGQobmF2U2VjKTtcblxuICAgIHNlYzIuYXBwZW5kQ2hpbGQoc2VjSGVhZGVyKTtcblxuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTEpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZCh0YWIxKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQodGFiMik7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHRhYjMpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTIpO1xuXG4gICAgc3BhY2UxLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB0YWIxLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgdGFiMi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIHRhYjMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBzcGFjZTIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgXG5cblxuICAgIHJldHVybiBlbGVtZW50O1xuXG59O1xuXG5cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnVDb21wb25lbnQoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIk9wZW5lZCBNZW51IHBhZ2VcIik7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzZWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcblxuICAgIGNvbnN0IHNlY0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGV4dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IG5hdlNlYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc3BhY2UxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3BhY2UyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIGVsZW1lbnQuaWQgPSdvdXRlckNvbnRhaW5lcic7XG4gICAgZWxlbWVudDEuaWQgPSAnbmF2QmFyJztcbiAgICBlbGVtZW50Mi5pZCA9ICdtYWluU2VjJztcblxuICAgIHNlYzEuaWQgPSAnaGVhZFNlYyc7XG4gICAgc2VjMi5pZCA9ICdib2R5U2VjJztcblxuICAgIHNlY0hlYWRlci5pZCA9ICdzZWNIZWFkJztcbiAgICBzZWNIZWFkZXIudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBcbiAgICB0ZXh0MS5pZCA9ICdoZWFkaW5nJztcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBQYWdlXCI7XG5cbiAgICBuYXZTZWMuaWQgPSAnbmF2SGVhZCc7XG5cbiAgICB0ZXh0Mi5pZCA9ICdib2R5SGVhZGVyJztcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiTWFpblwiO1xuXG5cbiAgICBzcGFjZTEuaWQgPSAnc3BhY2VyMSc7XG4gICAgdGFiMS5pZCA9ICd0YWIxJztcbiAgICB0YWIyLmlkID0gJ3RhYjInO1xuICAgIHRhYjMuaWQgPSAndGFiMyc7XG4gICAgc3BhY2UyLmlkID0gJ3NwYWNlcjInO1xuXG5cbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG5cbiAgICBlbGVtZW50MS5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gIFxuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKHNlYzEpOyAgICBcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChzZWMyKTtcblxuICAgIHNlYzEuYXBwZW5kQ2hpbGQobmF2U2VjKTtcblxuICAgIHNlYzIuYXBwZW5kQ2hpbGQoc2VjSGVhZGVyKTtcblxuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTEpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZCh0YWIxKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQodGFiMik7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHRhYjMpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTIpO1xuXG4gICAgc3BhY2UxLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB0YWIxLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgdGFiMi50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIHRhYjMudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBzcGFjZTIudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgXG5cblxuICAgIHJldHVybiBlbGVtZW50O1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBjb21wb25lbnQgZnJvbSBcIi4vbWFpbi5qc1wiO1xuaW1wb3J0IG1lbnVDb21wb25lbnQgZnJvbSBcIi4vbWVudS5qc1wiO1xuaW1wb3J0IGNvbnRhY3RDb21wb25lbnQgZnJvbSBcIi4vY29udGFjdC5qc1wiO1xuXG5cblxudmFyIGluaXRpYWxQYWdlID0gKCkgPT4ge1xuY29uc29sZS5sb2coXCJTVEFSVFwiKTtcblxubGV0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQuYm9keTtcbmxldCBwYWdlID0gYm9keUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQ7XG5cbmNvbnN0IHRhYkVsZW1lbnQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIxXCIpOyAvLyBtYXkgbmVlZCB0byBiZSBjYWxsZWQgYWdhaW4gXG5jb25zdCB0YWJFbGVtZW50MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiMlwiKTsgXG5jb25zdCB0YWJFbGVtZW50MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFiM1wiKTsgXG5cbi8vIHB1dCAnY2xpY2snIGV2ZW50IGxpc3RlbmVyIGZvciBtYWluIHBhZ2VcbnRhYkVsZW1lbnQxLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICBwYWdlID0gYm9keUVsZW1lbnQubGFzdEVsZW1lbnRDaGlsZDtcbiAgICBcbiAgICBib2R5RWxlbWVudC5yZW1vdmVDaGlsZChwYWdlKTtcbiAgICBib2R5RWxlbWVudC5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5cbiAgICBpbml0aWFsUGFnZSgpO1xuXG59KTtcblxuLy8gcHV0ICdjbGljaycgZXZlbnQgbGlzdGVuZXIgZm9yIG1lbnUgcGFnZVxudGFiRWxlbWVudDIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBhZ2UgPSBib2R5RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIFxuICAgIGJvZHlFbGVtZW50LnJlbW92ZUNoaWxkKHBhZ2UpO1xuICAgIGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKG1lbnVDb21wb25lbnQoKSk7XG5cbiAgICBpbml0aWFsUGFnZSgpO1xufSk7XG5cblxuLy8gcHV0ICdjbGljaycgZXZlbnQgbGlzdGVuZXIgZm9yIGNvbnRhY3QgcGFnZVxudGFiRWxlbWVudDMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBhZ2UgPSBib2R5RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIFxuICAgIGJvZHlFbGVtZW50LnJlbW92ZUNoaWxkKHBhZ2UpO1xuICAgIGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhY3RDb21wb25lbnQoKSk7XG5cbiAgICBpbml0aWFsUGFnZSgpOyAgXG59KTtcblxuXG5cbn07IC8vIEVuZHMgaW5pdGlhbFBhZ2VcblxuXG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29tcG9uZW50KCkpO1xuaW5pdGlhbFBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=