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
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
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
    border-bottom-left-radius: 5px;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
    grid-template: 
    'tabSpacer1"'
    "home"
    "tabSpacer1"
    ;
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
    z-index: 3;
    border: none;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
    grid-template: 
    'tabSpacer2'
    "menu1"
    "tabSpacer2"
    ;
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
    z-index: 3;
    border-bottom-right-radius: 5px;
    border: none;
    cursor: pointer;
    user-select: none; /* Prevent text selection */
    grid-template: 
    'tabSpacer3'
    "contact"
    "tabSpacer3"
    ;
}

#tab3:hover {
    background-color: rgb(160, 117, 1);

}

#spacer2 {
    grid-area: spacer2;
    justify-self: end;
    width: 100px;
}


#tabText1 {
    grid-area: home;
    color: bisque;

    text-align: center;
    font-family: 'MyFont';
    font-size: 12px;
    
}

#tabText2 {
    grid-area: menu1;
    color: bisque;

    text-align: center;
    font-family: 'MyFont';
    font-size: 12px;
    
}

#tabText3 {
    grid-area: contact;
    color: bisque;

    text-align: center;
    font-family: 'MyFont';
    font-size: 12px;
    
}

#tabSpace {
    grid-area: tabSpacer1;

    height: 6px;
}

#tabSpace2 {
    grid-area: tabSpacer2;

    height: 6px;
}

#tabSpace3 {
    grid-area: tabSpacer3;

    height: 6px;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,qBAAqB;IACrB,4CAA+B;;AAEnC;;;AAGA;IACI,UAAU;IACV,YAAY;;AAEhB;;AAEA;IACI,aAAa;IACb,mDAAmC;IACnC,sBAAsB;IACtB;;;IAGA;IACA,qCAAqC;IACrC,6BAA6B;;AAEjC;;AAEA;IACI,aAAa;IACb,cAAc,EAAE,yBAAyB;IACzC,kCAAkC;IAClC,0CAA0C;IAC1C,UAAU;IACV,WAAW;IACX;;;;IAIA;;AAEJ;;AAEA;IACI,aAAa;IACb,aAAa;IACb,eAAe;IACf,uBAAuB;IACvB,qBAAqB;IACrB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;IACI,aAAa;IACb,eAAe;IACf,2BAA2B;IAC3B;;;IAGA;IACA,4CAA4C;IAC5C,gCAAgC;IAChC,+BAA+B;;AAEnC;;;;AAIA;IACI,aAAa;IACb,kBAAkB;;IAElB,2BAA2B;IAC3B,0BAA0B;;IAE1B,4CAA4C;;AAEhD;;;AAGA;IACI,aAAa;IACb,uBAAuB;IACvB,0CAA0C;IAC1C;;IAEA;IACA,qBAAqB;AACzB;;;;AAIA;IACI,aAAa;IACb,kBAAkB;IAClB,mDAAmD;IACnD,uBAAuB;IACvB,qBAAqB;;AAEzB;;;AAGA;IACI,aAAa;IACb,kBAAkB;IAClB,kCAAkC;IAClC,YAAY;IACZ,WAAW;IACX,kBAAkB;IAClB,oBAAoB;IACpB,qBAAqB;AACzB;;AAEA;IACI,kBAAkB;IAClB,YAAY;AAChB;;AAEA;;IAEI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,eAAe;IACf,eAAe;IACf,UAAU;IACV,8BAA8B;IAC9B,eAAe;IACf,iBAAiB,EAAE,2BAA2B;IAC9C;;;;IAIA;AACJ;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;;IAEI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,eAAe;IACf,eAAe;IACf,UAAU;IACV,YAAY;IACZ,eAAe;IACf,iBAAiB,EAAE,2BAA2B;IAC9C;;;;IAIA;AACJ;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;;IAEI,aAAa;IACb,kCAAkC;IAClC,0CAA0C;IAC1C,eAAe;IACf,eAAe;IACf,UAAU;IACV,+BAA+B;IAC/B,YAAY;IACZ,eAAe;IACf,iBAAiB,EAAE,2BAA2B;IAC9C;;;;IAIA;AACJ;;AAEA;IACI,kCAAkC;;AAEtC;;AAEA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,YAAY;AAChB;;;AAGA;IACI,eAAe;IACf,aAAa;;IAEb,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;IACI,gBAAgB;IAChB,aAAa;;IAEb,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;IACI,kBAAkB;IAClB,aAAa;;IAEb,kBAAkB;IAClB,qBAAqB;IACrB,eAAe;;AAEnB;;AAEA;IACI,qBAAqB;;IAErB,WAAW;AACf;;AAEA;IACI,qBAAqB;;IAErB,WAAW;AACf;;AAEA;IACI,qBAAqB;;IAErB,WAAW;AACf","sourcesContent":["@font-face {\n    font-family: 'MyFont';\n    src: url('./Rowdies-Light.ttf');\n\n}\n\n\nbody {\n    margin:0px;\n    padding: 0px;\n\n}\n\n#outerContainer{\n    display: grid;\n    background: url('./restaurant.jpg');\n    background-size: cover;\n    grid-template: \n    'nav nav nav'\n    '. main .'\n    ;    \n    grid-template-columns: 10vw 80vw 10vw;\n    grid-template-rows: 12vh 88vh;\n\n}\n\n#navBar {\n    display: grid;\n    grid-area: nav; /* Assign the grid area */\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    z-index: 0;\n    width: 100%;\n    grid-template: \n    '.'\n    \"head\"\n    \".\"\n    ;\n    \n}\n\n#heading {\n    display: grid;\n    color: bisque;\n    grid-area: head; \n    justify-content: center;\n    align-content: center;\n    font-family: 'MyFont';\n    font-size: 30px;\n    \n}\n\n#mainSec {  \n    display: grid;\n    grid-area: main;\n    grid-template-rows: 1fr 9fr;\n    grid-template-areas: \n    \"headSec\"\n    \"bodySec\"\n    ;\n    background-color: rgba(253, 247, 247, 0.842);\n    border-bottom-right-radius: 10px;\n    border-bottom-left-radius: 10px;\n\n}\n\n\n\n#headSec {\n    display: grid;\n    grid-area: headSec;\n\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n\n    background-color: rgba(255, 233, 206, 0.774);\n   \n}\n\n\n#navHead {\n    display: grid;\n    grid-template-rows: 1fr;\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n    grid-template: \n    \"spacer1 tab1 tab2 tab3 spacer2\"\n    ;\n    font-family: 'MyFont';\n}\n\n\n\n#bodySec {\n    display: grid;\n    grid-area: bodySec;\n    grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;\n    justify-content: center;\n    align-content: center;\n    \n}\n\n\n#secHead {\n    color: bisque;\n    border-radius: 5px;\n    background-color: rgb(202, 149, 5);\n    height: 20px;\n    width: 80px;\n    text-align: center;\n    text-justify: center;\n    font-family: 'MyFont';\n}\n\n#spacer1 {\n    grid-area: spacer1;\n    width: 100px;\n}\n\n#tab1 {\n\n    color: bisque;\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    grid-area: tab1;\n    font-size: 10px;\n    z-index: 3;\n    border-bottom-left-radius: 5px;\n    cursor: pointer;\n    user-select: none; /* Prevent text selection */\n    grid-template: \n    'tabSpacer1\"'\n    \"home\"\n    \"tabSpacer1\"\n    ;\n}\n\n#tab1:hover {\n    background-color: rgb(160, 117, 1);\n\n}\n\n#tab2 {\n\n    color: bisque;\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    grid-area: tab2;\n    font-size: 10px;\n    z-index: 3;\n    border: none;\n    cursor: pointer;\n    user-select: none; /* Prevent text selection */\n    grid-template: \n    'tabSpacer2'\n    \"menu1\"\n    \"tabSpacer2\"\n    ;\n}\n\n#tab2:hover {\n    background-color: rgb(160, 117, 1);\n\n}\n\n#tab3 {\n\n    color: bisque;\n    background-color: rgb(202, 149, 5);\n    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);\n    grid-area: tab3;\n    font-size: 10px;\n    z-index: 3;\n    border-bottom-right-radius: 5px;\n    border: none;\n    cursor: pointer;\n    user-select: none; /* Prevent text selection */\n    grid-template: \n    'tabSpacer3'\n    \"contact\"\n    \"tabSpacer3\"\n    ;\n}\n\n#tab3:hover {\n    background-color: rgb(160, 117, 1);\n\n}\n\n#spacer2 {\n    grid-area: spacer2;\n    justify-self: end;\n    width: 100px;\n}\n\n\n#tabText1 {\n    grid-area: home;\n    color: bisque;\n\n    text-align: center;\n    font-family: 'MyFont';\n    font-size: 12px;\n    \n}\n\n#tabText2 {\n    grid-area: menu1;\n    color: bisque;\n\n    text-align: center;\n    font-family: 'MyFont';\n    font-size: 12px;\n    \n}\n\n#tabText3 {\n    grid-area: contact;\n    color: bisque;\n\n    text-align: center;\n    font-family: 'MyFont';\n    font-size: 12px;\n    \n}\n\n#tabSpace {\n    grid-area: tabSpacer1;\n\n    height: 6px;\n}\n\n#tabSpace2 {\n    grid-area: tabSpacer2;\n\n    height: 6px;\n}\n\n#tabSpace3 {\n    grid-area: tabSpacer3;\n\n    height: 6px;\n}"],"sourceRoot":""}]);
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

    const text3 = document.createElement('div');
    const text4 = document.createElement('div');
    const text5 = document.createElement('div');

    const tabSpacer1 = document.createElement('div');
    const tabSpacer2 = document.createElement('div');

    const tabSpacer3 = document.createElement('div');
    const tabSpacer4 = document.createElement('div');

    const tabSpacer5 = document.createElement('div');
    const tabSpacer6 = document.createElement('div');


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
    
    tabSpacer1.id = 'tabSpace';
    tabSpacer2.id = 'tabSpace';
    
    tab1.appendChild(tabSpacer2);
    tab1.appendChild(text3);
    tab1.appendChild(tabSpacer1);

    text3.textContent = "Home";
    text3.id = 'tabText1';

    tabSpacer3.id = 'tabSpace2';
    tabSpacer4.id = 'tabSpace2';

    tab2.appendChild(tabSpacer4);
    tab2.appendChild(text4);
    tab2.appendChild(tabSpacer3);

    text4.textContent = "Menu";
    text4.id = 'tabText2';


    tabSpacer5.id = 'tabSpace3';
    tabSpacer6.id = 'tabSpace3';
    
    tab3.appendChild(tabSpacer6);
    tab3.appendChild(text5);
    tab3.appendChild(tabSpacer5);

    text5.textContent = "Contact";
    text5.id = 'tabText3';

    


    return element;};


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

    const text3 = document.createElement('div');
    const text4 = document.createElement('div');
    const text5 = document.createElement('div');

    const tabSpacer1 = document.createElement('div');
    const tabSpacer2 = document.createElement('div');

    const tabSpacer3 = document.createElement('div');
    const tabSpacer4 = document.createElement('div');

    const tabSpacer5 = document.createElement('div');
    const tabSpacer6 = document.createElement('div');


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
    
    tabSpacer1.id = 'tabSpace';
    tabSpacer2.id = 'tabSpace';
    
    tab1.appendChild(tabSpacer2);
    tab1.appendChild(text3);
    tab1.appendChild(tabSpacer1);

    text3.textContent = "Home";
    text3.id = 'tabText1';

    tabSpacer3.id = 'tabSpace2';
    tabSpacer4.id = 'tabSpace2';

    tab2.appendChild(tabSpacer4);
    tab2.appendChild(text4);
    tab2.appendChild(tabSpacer3);

    text4.textContent = "Menu";
    text4.id = 'tabText2';


    tabSpacer5.id = 'tabSpace3';
    tabSpacer6.id = 'tabSpace3';
    
    tab3.appendChild(tabSpacer6);
    tab3.appendChild(text5);
    tab3.appendChild(tabSpacer5);

    text5.textContent = "Contact";
    text5.id = 'tabText3';

    


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

    const text3 = document.createElement('div');
    const text4 = document.createElement('div');
    const text5 = document.createElement('div');

    const tabSpacer1 = document.createElement('div');
    const tabSpacer2 = document.createElement('div');

    const tabSpacer3 = document.createElement('div');
    const tabSpacer4 = document.createElement('div');

    const tabSpacer5 = document.createElement('div');
    const tabSpacer6 = document.createElement('div');


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
    
    tabSpacer1.id = 'tabSpace';
    tabSpacer2.id = 'tabSpace';
    
    tab1.appendChild(tabSpacer2);
    tab1.appendChild(text3);
    tab1.appendChild(tabSpacer1);

    text3.textContent = "Home";
    text3.id = 'tabText1';

    tabSpacer3.id = 'tabSpace2';
    tabSpacer4.id = 'tabSpace2';

    tab2.appendChild(tabSpacer4);
    tab2.appendChild(text4);
    tab2.appendChild(tabSpacer3);

    text4.textContent = "Menu";
    text4.id = 'tabText2';


    tabSpacer5.id = 'tabSpace3';
    tabSpacer6.id = 'tabSpace3';
    
    tab3.appendChild(tabSpacer6);
    tab3.appendChild(text5);
    tab3.appendChild(tabSpacer5);

    text5.textContent = "Contact";
    text5.id = 'tabText3';

    


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2JxQjtBQUNnQjs7O0FBR3RCOztBQUVmOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdIcUI7QUFDZ0I7Ozs7QUFJdEI7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoSXFCO0FBQ2dCOzs7QUFHdEI7O0FBRWY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDOUhBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7Ozs7V0NyQkE7Ozs7Ozs7Ozs7Ozs7O0FDQWtDO0FBQ0k7QUFDTTs7OztBQUk1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUEscURBQXFEO0FBQ3JEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixvREFBUzs7QUFFckM7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9EQUFhOztBQUV6QztBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsdURBQWdCOztBQUU1QztBQUNBLENBQUM7Ozs7QUFJRCxHQUFHOzs7O0FBSUgsMEJBQTBCLG9EQUFTO0FBQ25DLGMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGFja2FnZS5qc29uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3BhY2thZ2UuanNvbi93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9wYWNrYWdlLmpzb24vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3BhY2thZ2UuanNvbi8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9Sb3dkaWVzLUxpZ2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vcmVzdGF1cmFudC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG5cbn1cblxuXG5ib2R5IHtcbiAgICBtYXJnaW46MHB4O1xuICAgIHBhZGRpbmc6IDBweDtcblxufVxuXG4jb3V0ZXJDb250YWluZXJ7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBncmlkLXRlbXBsYXRlOiBcbiAgICAnbmF2IG5hdiBuYXYnXG4gICAgJy4gbWFpbiAuJ1xuICAgIDsgICAgXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHZ3IDgwdncgMTB2dztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEydmggODh2aDtcblxufVxuXG4jbmF2QmFyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogbmF2OyAvKiBBc3NpZ24gdGhlIGdyaWQgYXJlYSAqL1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZTogXG4gICAgJy4nXG4gICAgXCJoZWFkXCJcbiAgICBcIi5cIlxuICAgIDtcbiAgICBcbn1cblxuI2hlYWRpbmcge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgICBncmlkLWFyZWE6IGhlYWQ7IFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIFxufVxuXG4jbWFpblNlYyB7ICBcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogbWFpbjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciA5ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgXCJoZWFkU2VjXCJcbiAgICBcImJvZHlTZWNcIlxuICAgIDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMjQ3LCAyNDcsIDAuODQyKTtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuXG59XG5cblxuXG4jaGVhZFNlYyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLWFyZWE6IGhlYWRTZWM7XG5cbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG5cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMzLCAyMDYsIDAuNzc0KTtcbiAgIFxufVxuXG5cbiNuYXZIZWFkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlOiBcbiAgICBcInNwYWNlcjEgdGFiMSB0YWIyIHRhYjMgc3BhY2VyMlwiXG4gICAgO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250Jztcbn1cblxuXG5cbiNib2R5U2VjIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtYXJlYTogYm9keVNlYztcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIFxufVxuXG5cbiNzZWNIZWFkIHtcbiAgICBjb2xvcjogYmlzcXVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1qdXN0aWZ5OiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xufVxuXG4jc3BhY2VyMSB7XG4gICAgZ3JpZC1hcmVhOiBzcGFjZXIxO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuI3RhYjEge1xuXG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBncmlkLWFyZWE6IHRhYjE7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xuICAgIGdyaWQtdGVtcGxhdGU6IFxuICAgICd0YWJTcGFjZXIxXCInXG4gICAgXCJob21lXCJcbiAgICBcInRhYlNwYWNlcjFcIlxuICAgIDtcbn1cblxuI3RhYjE6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDExNywgMSk7XG5cbn1cblxuI3RhYjIge1xuXG4gICAgY29sb3I6IGJpc3F1ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBncmlkLWFyZWE6IHRhYjI7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHotaW5kZXg6IDM7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xuICAgIGdyaWQtdGVtcGxhdGU6IFxuICAgICd0YWJTcGFjZXIyJ1xuICAgIFwibWVudTFcIlxuICAgIFwidGFiU3BhY2VyMlwiXG4gICAgO1xufVxuXG4jdGFiMjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTE3LCAxKTtcblxufVxuXG4jdGFiMyB7XG5cbiAgICBjb2xvcjogYmlzcXVlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIGdyaWQtYXJlYTogdGFiMztcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgei1pbmRleDogMztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFByZXZlbnQgdGV4dCBzZWxlY3Rpb24gKi9cbiAgICBncmlkLXRlbXBsYXRlOiBcbiAgICAndGFiU3BhY2VyMydcbiAgICBcImNvbnRhY3RcIlxuICAgIFwidGFiU3BhY2VyM1wiXG4gICAgO1xufVxuXG4jdGFiMzpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2MCwgMTE3LCAxKTtcblxufVxuXG4jc3BhY2VyMiB7XG4gICAgZ3JpZC1hcmVhOiBzcGFjZXIyO1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIHdpZHRoOiAxMDBweDtcbn1cblxuXG4jdGFiVGV4dDEge1xuICAgIGdyaWQtYXJlYTogaG9tZTtcbiAgICBjb2xvcjogYmlzcXVlO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG59XG5cbiN0YWJUZXh0MiB7XG4gICAgZ3JpZC1hcmVhOiBtZW51MTtcbiAgICBjb2xvcjogYmlzcXVlO1xuXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgXG59XG5cbiN0YWJUZXh0MyB7XG4gICAgZ3JpZC1hcmVhOiBjb250YWN0O1xuICAgIGNvbG9yOiBiaXNxdWU7XG5cbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBcbn1cblxuI3RhYlNwYWNlIHtcbiAgICBncmlkLWFyZWE6IHRhYlNwYWNlcjE7XG5cbiAgICBoZWlnaHQ6IDZweDtcbn1cblxuI3RhYlNwYWNlMiB7XG4gICAgZ3JpZC1hcmVhOiB0YWJTcGFjZXIyO1xuXG4gICAgaGVpZ2h0OiA2cHg7XG59XG5cbiN0YWJTcGFjZTMge1xuICAgIGdyaWQtYXJlYTogdGFiU3BhY2VyMztcblxuICAgIGhlaWdodDogNnB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQiw0Q0FBK0I7O0FBRW5DOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixZQUFZOztBQUVoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtREFBbUM7SUFDbkMsc0JBQXNCO0lBQ3RCOzs7SUFHQTtJQUNBLHFDQUFxQztJQUNyQyw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGNBQWMsRUFBRSx5QkFBeUI7SUFDekMsa0NBQWtDO0lBQ2xDLDBDQUEwQztJQUMxQyxVQUFVO0lBQ1YsV0FBVztJQUNYOzs7O0lBSUE7O0FBRUo7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHFCQUFxQjtJQUNyQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCOzs7SUFHQTtJQUNBLDRDQUE0QztJQUM1QyxnQ0FBZ0M7SUFDaEMsK0JBQStCOztBQUVuQzs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjs7SUFFbEIsMkJBQTJCO0lBQzNCLDBCQUEwQjs7SUFFMUIsNENBQTRDOztBQUVoRDs7O0FBR0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDBDQUEwQztJQUMxQzs7SUFFQTtJQUNBLHFCQUFxQjtBQUN6Qjs7OztBQUlBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtREFBbUQ7SUFDbkQsdUJBQXVCO0lBQ3ZCLHFCQUFxQjs7QUFFekI7OztBQUdBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsMENBQTBDO0lBQzFDLGVBQWU7SUFDZixlQUFlO0lBQ2YsVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixlQUFlO0lBQ2YsaUJBQWlCLEVBQUUsMkJBQTJCO0lBQzlDOzs7O0lBSUE7QUFDSjs7QUFFQTtJQUNJLGtDQUFrQzs7QUFFdEM7O0FBRUE7O0lBRUksYUFBYTtJQUNiLGtDQUFrQztJQUNsQywwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGVBQWU7SUFDZixVQUFVO0lBQ1YsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUIsRUFBRSwyQkFBMkI7SUFDOUM7Ozs7SUFJQTtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDOztBQUV0Qzs7QUFFQTs7SUFFSSxhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLDBDQUEwQztJQUMxQyxlQUFlO0lBQ2YsZUFBZTtJQUNmLFVBQVU7SUFDViwrQkFBK0I7SUFDL0IsWUFBWTtJQUNaLGVBQWU7SUFDZixpQkFBaUIsRUFBRSwyQkFBMkI7SUFDOUM7Ozs7SUFJQTtBQUNKOztBQUVBO0lBQ0ksa0NBQWtDOztBQUV0Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsWUFBWTtBQUNoQjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTs7SUFFYixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7O0FBRW5COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7O0lBRWIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlOztBQUVuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhOztJQUViLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTs7QUFFbkI7O0FBRUE7SUFDSSxxQkFBcUI7O0lBRXJCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjs7SUFFckIsV0FBVztBQUNmOztBQUVBO0lBQ0kscUJBQXFCOztJQUVyQixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgc3JjOiB1cmwoJy4vUm93ZGllcy1MaWdodC50dGYnKTtcXG5cXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIG1hcmdpbjowcHg7XFxuICAgIHBhZGRpbmc6IDBweDtcXG5cXG59XFxuXFxuI291dGVyQ29udGFpbmVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4vcmVzdGF1cmFudC5qcGcnKTtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTogXFxuICAgICduYXYgbmF2IG5hdidcXG4gICAgJy4gbWFpbiAuJ1xcbiAgICA7ICAgIFxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwdncgODB2dyAxMHZ3O1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEydmggODh2aDtcXG5cXG59XFxuXFxuI25hdkJhciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtYXJlYTogbmF2OyAvKiBBc3NpZ24gdGhlIGdyaWQgYXJlYSAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjAyLCAxNDksIDUpO1xcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJy4nXFxuICAgIFxcXCJoZWFkXFxcIlxcbiAgICBcXFwiLlxcXCJcXG4gICAgO1xcbiAgICBcXG59XFxuXFxuI2hlYWRpbmcge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBjb2xvcjogYmlzcXVlO1xcbiAgICBncmlkLWFyZWE6IGhlYWQ7IFxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgXFxufVxcblxcbiNtYWluU2VjIHsgIFxcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLWFyZWE6IG1haW47XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDlmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXFxuICAgIFxcXCJoZWFkU2VjXFxcIlxcbiAgICBcXFwiYm9keVNlY1xcXCJcXG4gICAgO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MywgMjQ3LCAyNDcsIDAuODQyKTtcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuXFxufVxcblxcblxcblxcbiNoZWFkU2VjIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkU2VjO1xcblxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjMzLCAyMDYsIDAuNzc0KTtcXG4gICBcXG59XFxuXFxuXFxuI25hdkhlYWQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlOiBcXG4gICAgXFxcInNwYWNlcjEgdGFiMSB0YWIyIHRhYjMgc3BhY2VyMlxcXCJcXG4gICAgO1xcbiAgICBmb250LWZhbWlseTogJ015Rm9udCc7XFxufVxcblxcblxcblxcbiNib2R5U2VjIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC1hcmVhOiBib2R5U2VjO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG5cXG4jc2VjSGVhZCB7XFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwMiwgMTQ5LCA1KTtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB0ZXh0LWp1c3RpZnk6IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbn1cXG5cXG4jc3BhY2VyMSB7XFxuICAgIGdyaWQtYXJlYTogc3BhY2VyMTtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG4jdGFiMSB7XFxuXFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZ3JpZC1hcmVhOiB0YWIxO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xcbiAgICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ3RhYlNwYWNlcjFcXFwiJ1xcbiAgICBcXFwiaG9tZVxcXCJcXG4gICAgXFxcInRhYlNwYWNlcjFcXFwiXFxuICAgIDtcXG59XFxuXFxuI3RhYjE6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxMTcsIDEpO1xcblxcbn1cXG5cXG4jdGFiMiB7XFxuXFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZ3JpZC1hcmVhOiB0YWIyO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xcbiAgICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ3RhYlNwYWNlcjInXFxuICAgIFxcXCJtZW51MVxcXCJcXG4gICAgXFxcInRhYlNwYWNlcjJcXFwiXFxuICAgIDtcXG59XFxuXFxuI3RhYjI6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYwLCAxMTcsIDEpO1xcblxcbn1cXG5cXG4jdGFiMyB7XFxuXFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMDIsIDE0OSwgNSk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgZ3JpZC1hcmVhOiB0YWIzO1xcbiAgICBmb250LXNpemU6IDEwcHg7XFxuICAgIHotaW5kZXg6IDM7XFxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTsgLyogUHJldmVudCB0ZXh0IHNlbGVjdGlvbiAqL1xcbiAgICBncmlkLXRlbXBsYXRlOiBcXG4gICAgJ3RhYlNwYWNlcjMnXFxuICAgIFxcXCJjb250YWN0XFxcIlxcbiAgICBcXFwidGFiU3BhY2VyM1xcXCJcXG4gICAgO1xcbn1cXG5cXG4jdGFiMzpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjAsIDExNywgMSk7XFxuXFxufVxcblxcbiNzcGFjZXIyIHtcXG4gICAgZ3JpZC1hcmVhOiBzcGFjZXIyO1xcbiAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcXG4gICAgd2lkdGg6IDEwMHB4O1xcbn1cXG5cXG5cXG4jdGFiVGV4dDEge1xcbiAgICBncmlkLWFyZWE6IGhvbWU7XFxuICAgIGNvbG9yOiBiaXNxdWU7XFxuXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1mYW1pbHk6ICdNeUZvbnQnO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIFxcbn1cXG5cXG4jdGFiVGV4dDIge1xcbiAgICBncmlkLWFyZWE6IG1lbnUxO1xcbiAgICBjb2xvcjogYmlzcXVlO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBcXG59XFxuXFxuI3RhYlRleHQzIHtcXG4gICAgZ3JpZC1hcmVhOiBjb250YWN0O1xcbiAgICBjb2xvcjogYmlzcXVlO1xcblxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnTXlGb250JztcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICBcXG59XFxuXFxuI3RhYlNwYWNlIHtcXG4gICAgZ3JpZC1hcmVhOiB0YWJTcGFjZXIxO1xcblxcbiAgICBoZWlnaHQ6IDZweDtcXG59XFxuXFxuI3RhYlNwYWNlMiB7XFxuICAgIGdyaWQtYXJlYTogdGFiU3BhY2VyMjtcXG5cXG4gICAgaGVpZ2h0OiA2cHg7XFxufVxcblxcbiN0YWJTcGFjZTMge1xcbiAgICBncmlkLWFyZWE6IHRhYlNwYWNlcjM7XFxuXFxuICAgIGhlaWdodDogNnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IEltYWdlIGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbnRhY3RDb21wb25lbnQoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIk9wZW5lZCBDb250YWN0IHBhZ2VcIik7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzZWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcblxuXG5cbiAgICBjb25zdCBzZWNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBuYXZTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHNwYWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNwYWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YWJTcGFjZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiU3BhY2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGFiU3BhY2VyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYlNwYWNlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRhYlNwYWNlcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWJTcGFjZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIGVsZW1lbnQuaWQgPSdvdXRlckNvbnRhaW5lcic7XG4gICAgZWxlbWVudDEuaWQgPSAnbmF2QmFyJztcbiAgICBlbGVtZW50Mi5pZCA9ICdtYWluU2VjJztcblxuICAgIHNlYzEuaWQgPSAnaGVhZFNlYyc7XG4gICAgc2VjMi5pZCA9ICdib2R5U2VjJztcblxuICAgIHNlY0hlYWRlci5pZCA9ICdzZWNIZWFkJztcbiAgICBzZWNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBcbiAgICB0ZXh0MS5pZCA9ICdoZWFkaW5nJztcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBQYWdlXCI7XG5cbiAgICBuYXZTZWMuaWQgPSAnbmF2SGVhZCc7XG5cbiAgICB0ZXh0Mi5pZCA9ICdib2R5SGVhZGVyJztcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiTWFpblwiO1xuXG5cbiAgICBzcGFjZTEuaWQgPSAnc3BhY2VyMSc7XG4gICAgdGFiMS5pZCA9ICd0YWIxJztcbiAgICB0YWIyLmlkID0gJ3RhYjInO1xuICAgIHRhYjMuaWQgPSAndGFiMyc7XG4gICAgc3BhY2UyLmlkID0gJ3NwYWNlcjInO1xuXG5cbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG5cbiAgICBlbGVtZW50MS5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gIFxuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKHNlYzEpOyAgICBcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChzZWMyKTtcblxuICAgIHNlYzEuYXBwZW5kQ2hpbGQobmF2U2VjKTtcblxuICAgIHNlYzIuYXBwZW5kQ2hpbGQoc2VjSGVhZGVyKTtcblxuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTEpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZCh0YWIxKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQodGFiMik7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHRhYjMpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTIpO1xuXG4gICAgc3BhY2UxLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBcbiAgICB0YWJTcGFjZXIxLmlkID0gJ3RhYlNwYWNlJztcbiAgICB0YWJTcGFjZXIyLmlkID0gJ3RhYlNwYWNlJztcbiAgICBcbiAgICB0YWIxLmFwcGVuZENoaWxkKHRhYlNwYWNlcjIpO1xuICAgIHRhYjEuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICAgIHRhYjEuYXBwZW5kQ2hpbGQodGFiU3BhY2VyMSk7XG5cbiAgICB0ZXh0My50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHRleHQzLmlkID0gJ3RhYlRleHQxJztcblxuICAgIHRhYlNwYWNlcjMuaWQgPSAndGFiU3BhY2UyJztcbiAgICB0YWJTcGFjZXI0LmlkID0gJ3RhYlNwYWNlMic7XG5cbiAgICB0YWIyLmFwcGVuZENoaWxkKHRhYlNwYWNlcjQpO1xuICAgIHRhYjIuYXBwZW5kQ2hpbGQodGV4dDQpO1xuICAgIHRhYjIuYXBwZW5kQ2hpbGQodGFiU3BhY2VyMyk7XG5cbiAgICB0ZXh0NC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIHRleHQ0LmlkID0gJ3RhYlRleHQyJztcblxuXG4gICAgdGFiU3BhY2VyNS5pZCA9ICd0YWJTcGFjZTMnO1xuICAgIHRhYlNwYWNlcjYuaWQgPSAndGFiU3BhY2UzJztcbiAgICBcbiAgICB0YWIzLmFwcGVuZENoaWxkKHRhYlNwYWNlcjYpO1xuICAgIHRhYjMuYXBwZW5kQ2hpbGQodGV4dDUpO1xuICAgIHRhYjMuYXBwZW5kQ2hpbGQodGFiU3BhY2VyNSk7XG5cbiAgICB0ZXh0NS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIHRleHQ1LmlkID0gJ3RhYlRleHQzJztcblxuICAgIFxuXG5cbiAgICByZXR1cm4gZWxlbWVudDt9O1xuIiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi9yZXN0YXVyYW50LmpwZyc7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wb25lbnQoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcIk9wZW5lZCBNYWluIHBhZ2VcIik7XG5cbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZWxlbWVudDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsZW1lbnQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzZWMxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc2VjMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpOyAgICBcblxuXG5cbiAgICBjb25zdCBzZWNIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRleHQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBuYXZTZWMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHNwYWNlMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNwYWNlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGV4dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRleHQ1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YWJTcGFjZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiU3BhY2VyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGFiU3BhY2VyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYlNwYWNlcjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRhYlNwYWNlcjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWJTcGFjZXI2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cblxuICAgIGVsZW1lbnQuaWQgPSdvdXRlckNvbnRhaW5lcic7XG4gICAgZWxlbWVudDEuaWQgPSAnbmF2QmFyJztcbiAgICBlbGVtZW50Mi5pZCA9ICdtYWluU2VjJztcblxuICAgIHNlYzEuaWQgPSAnaGVhZFNlYyc7XG4gICAgc2VjMi5pZCA9ICdib2R5U2VjJztcblxuICAgIHNlY0hlYWRlci5pZCA9ICdzZWNIZWFkJztcbiAgICBzZWNIZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICBcbiAgICB0ZXh0MS5pZCA9ICdoZWFkaW5nJztcbiAgICB0ZXh0MS50ZXh0Q29udGVudCA9IFwiUmVzdGF1cmFudCBQYWdlXCI7XG5cbiAgICBuYXZTZWMuaWQgPSAnbmF2SGVhZCc7XG5cbiAgICB0ZXh0Mi5pZCA9ICdib2R5SGVhZGVyJztcbiAgICB0ZXh0Mi50ZXh0Q29udGVudCA9IFwiTWFpblwiO1xuXG5cbiAgICBzcGFjZTEuaWQgPSAnc3BhY2VyMSc7XG4gICAgdGFiMS5pZCA9ICd0YWIxJztcbiAgICB0YWIyLmlkID0gJ3RhYjInO1xuICAgIHRhYjMuaWQgPSAndGFiMyc7XG4gICAgc3BhY2UyLmlkID0gJ3NwYWNlcjInO1xuXG5cbiAgICAvLyBBZGQgdGhlIGltYWdlIHRvIG91ciBleGlzdGluZyBkaXYuXG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50MSk7XG4gICAgZWxlbWVudC5hcHBlbmRDaGlsZChlbGVtZW50Mik7XG5cbiAgICBlbGVtZW50MS5hcHBlbmRDaGlsZCh0ZXh0MSk7XG4gIFxuICAgIGVsZW1lbnQyLmFwcGVuZENoaWxkKHNlYzEpOyAgICBcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChzZWMyKTtcblxuICAgIHNlYzEuYXBwZW5kQ2hpbGQobmF2U2VjKTtcblxuICAgIHNlYzIuYXBwZW5kQ2hpbGQoc2VjSGVhZGVyKTtcblxuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTEpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZCh0YWIxKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQodGFiMik7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHRhYjMpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZChzcGFjZTIpO1xuXG4gICAgc3BhY2UxLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICBcbiAgICB0YWJTcGFjZXIxLmlkID0gJ3RhYlNwYWNlJztcbiAgICB0YWJTcGFjZXIyLmlkID0gJ3RhYlNwYWNlJztcbiAgICBcbiAgICB0YWIxLmFwcGVuZENoaWxkKHRhYlNwYWNlcjIpO1xuICAgIHRhYjEuYXBwZW5kQ2hpbGQodGV4dDMpO1xuICAgIHRhYjEuYXBwZW5kQ2hpbGQodGFiU3BhY2VyMSk7XG5cbiAgICB0ZXh0My50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIHRleHQzLmlkID0gJ3RhYlRleHQxJztcblxuICAgIHRhYlNwYWNlcjMuaWQgPSAndGFiU3BhY2UyJztcbiAgICB0YWJTcGFjZXI0LmlkID0gJ3RhYlNwYWNlMic7XG5cbiAgICB0YWIyLmFwcGVuZENoaWxkKHRhYlNwYWNlcjQpO1xuICAgIHRhYjIuYXBwZW5kQ2hpbGQodGV4dDQpO1xuICAgIHRhYjIuYXBwZW5kQ2hpbGQodGFiU3BhY2VyMyk7XG5cbiAgICB0ZXh0NC50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIHRleHQ0LmlkID0gJ3RhYlRleHQyJztcblxuXG4gICAgdGFiU3BhY2VyNS5pZCA9ICd0YWJTcGFjZTMnO1xuICAgIHRhYlNwYWNlcjYuaWQgPSAndGFiU3BhY2UzJztcbiAgICBcbiAgICB0YWIzLmFwcGVuZENoaWxkKHRhYlNwYWNlcjYpO1xuICAgIHRhYjMuYXBwZW5kQ2hpbGQodGV4dDUpO1xuICAgIHRhYjMuYXBwZW5kQ2hpbGQodGFiU3BhY2VyNSk7XG5cbiAgICB0ZXh0NS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIHRleHQ1LmlkID0gJ3RhYlRleHQzJztcblxuICAgIFxuXG5cbiAgICByZXR1cm4gZWxlbWVudDtcblxufTtcblxuXG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBJbWFnZSBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJztcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZW51Q29tcG9uZW50KCkge1xuXG4gICAgY29uc29sZS5sb2coXCJPcGVuZWQgTWVudSBwYWdlXCIpO1xuXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGVsZW1lbnQxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBlbGVtZW50MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3Qgc2VjMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHNlYzIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTsgICAgXG5cblxuXG4gICAgY29uc3Qgc2VjSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0ZXh0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgbmF2U2VjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBzcGFjZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzcGFjZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRleHQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGV4dDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0ZXh0NSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgdGFiU3BhY2VyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhYlNwYWNlcjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGNvbnN0IHRhYlNwYWNlcjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YWJTcGFjZXI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCB0YWJTcGFjZXI1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFiU3BhY2VyNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG5cbiAgICBlbGVtZW50LmlkID0nb3V0ZXJDb250YWluZXInO1xuICAgIGVsZW1lbnQxLmlkID0gJ25hdkJhcic7XG4gICAgZWxlbWVudDIuaWQgPSAnbWFpblNlYyc7XG5cbiAgICBzZWMxLmlkID0gJ2hlYWRTZWMnO1xuICAgIHNlYzIuaWQgPSAnYm9keVNlYyc7XG5cbiAgICBzZWNIZWFkZXIuaWQgPSAnc2VjSGVhZCc7XG4gICAgc2VjSGVhZGVyLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICAgXG4gICAgdGV4dDEuaWQgPSAnaGVhZGluZyc7XG4gICAgdGV4dDEudGV4dENvbnRlbnQgPSBcIlJlc3RhdXJhbnQgUGFnZVwiO1xuXG4gICAgbmF2U2VjLmlkID0gJ25hdkhlYWQnO1xuXG4gICAgdGV4dDIuaWQgPSAnYm9keUhlYWRlcic7XG4gICAgdGV4dDIudGV4dENvbnRlbnQgPSBcIk1haW5cIjtcblxuXG4gICAgc3BhY2UxLmlkID0gJ3NwYWNlcjEnO1xuICAgIHRhYjEuaWQgPSAndGFiMSc7XG4gICAgdGFiMi5pZCA9ICd0YWIyJztcbiAgICB0YWIzLmlkID0gJ3RhYjMnO1xuICAgIHNwYWNlMi5pZCA9ICdzcGFjZXIyJztcblxuXG4gICAgLy8gQWRkIHRoZSBpbWFnZSB0byBvdXIgZXhpc3RpbmcgZGl2LlxuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDEpO1xuICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoZWxlbWVudDIpO1xuXG4gICAgZWxlbWVudDEuYXBwZW5kQ2hpbGQodGV4dDEpO1xuICBcbiAgICBlbGVtZW50Mi5hcHBlbmRDaGlsZChzZWMxKTsgICAgXG4gICAgZWxlbWVudDIuYXBwZW5kQ2hpbGQoc2VjMik7XG5cbiAgICBzZWMxLmFwcGVuZENoaWxkKG5hdlNlYyk7XG5cbiAgICBzZWMyLmFwcGVuZENoaWxkKHNlY0hlYWRlcik7XG5cbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQoc3BhY2UxKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQodGFiMSk7XG4gICAgbmF2U2VjLmFwcGVuZENoaWxkKHRhYjIpO1xuICAgIG5hdlNlYy5hcHBlbmRDaGlsZCh0YWIzKTtcbiAgICBuYXZTZWMuYXBwZW5kQ2hpbGQoc3BhY2UyKTtcblxuICAgIHNwYWNlMS50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgXG4gICAgdGFiU3BhY2VyMS5pZCA9ICd0YWJTcGFjZSc7XG4gICAgdGFiU3BhY2VyMi5pZCA9ICd0YWJTcGFjZSc7XG4gICAgXG4gICAgdGFiMS5hcHBlbmRDaGlsZCh0YWJTcGFjZXIyKTtcbiAgICB0YWIxLmFwcGVuZENoaWxkKHRleHQzKTtcbiAgICB0YWIxLmFwcGVuZENoaWxkKHRhYlNwYWNlcjEpO1xuXG4gICAgdGV4dDMudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcbiAgICB0ZXh0My5pZCA9ICd0YWJUZXh0MSc7XG5cbiAgICB0YWJTcGFjZXIzLmlkID0gJ3RhYlNwYWNlMic7XG4gICAgdGFiU3BhY2VyNC5pZCA9ICd0YWJTcGFjZTInO1xuXG4gICAgdGFiMi5hcHBlbmRDaGlsZCh0YWJTcGFjZXI0KTtcbiAgICB0YWIyLmFwcGVuZENoaWxkKHRleHQ0KTtcbiAgICB0YWIyLmFwcGVuZENoaWxkKHRhYlNwYWNlcjMpO1xuXG4gICAgdGV4dDQudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICB0ZXh0NC5pZCA9ICd0YWJUZXh0Mic7XG5cblxuICAgIHRhYlNwYWNlcjUuaWQgPSAndGFiU3BhY2UzJztcbiAgICB0YWJTcGFjZXI2LmlkID0gJ3RhYlNwYWNlMyc7XG4gICAgXG4gICAgdGFiMy5hcHBlbmRDaGlsZCh0YWJTcGFjZXI2KTtcbiAgICB0YWIzLmFwcGVuZENoaWxkKHRleHQ1KTtcbiAgICB0YWIzLmFwcGVuZENoaWxkKHRhYlNwYWNlcjUpO1xuXG4gICAgdGV4dDUudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICB0ZXh0NS5pZCA9ICd0YWJUZXh0Myc7XG5cbiAgICBcblxuXG4gICAgcmV0dXJuIGVsZW1lbnQ7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiaW5kZXhcIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGNvbXBvbmVudCBmcm9tIFwiLi9tYWluLmpzXCI7XG5pbXBvcnQgbWVudUNvbXBvbmVudCBmcm9tIFwiLi9tZW51LmpzXCI7XG5pbXBvcnQgY29udGFjdENvbXBvbmVudCBmcm9tIFwiLi9jb250YWN0LmpzXCI7XG5cblxuXG52YXIgaW5pdGlhbFBhZ2UgPSAoKSA9PiB7XG5jb25zb2xlLmxvZyhcIlNUQVJUXCIpO1xuXG5sZXQgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xubGV0IHBhZ2UgPSBib2R5RWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZDtcblxuY29uc3QgdGFiRWxlbWVudDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhYjFcIik7IC8vIG1heSBuZWVkIHRvIGJlIGNhbGxlZCBhZ2FpbiBcbmNvbnN0IHRhYkVsZW1lbnQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIyXCIpOyBcbmNvbnN0IHRhYkVsZW1lbnQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWIzXCIpOyBcblxuLy8gcHV0ICdjbGljaycgZXZlbnQgbGlzdGVuZXIgZm9yIG1haW4gcGFnZVxudGFiRWxlbWVudDEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgIHBhZ2UgPSBib2R5RWxlbWVudC5sYXN0RWxlbWVudENoaWxkO1xuICAgIFxuICAgIGJvZHlFbGVtZW50LnJlbW92ZUNoaWxkKHBhZ2UpO1xuICAgIGJvZHlFbGVtZW50LmFwcGVuZENoaWxkKGNvbXBvbmVudCgpKTtcblxuICAgIGluaXRpYWxQYWdlKCk7XG5cbn0pO1xuXG4vLyBwdXQgJ2NsaWNrJyBldmVudCBsaXN0ZW5lciBmb3IgbWVudSBwYWdlXG50YWJFbGVtZW50Mi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgcGFnZSA9IGJvZHlFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgXG4gICAgYm9keUVsZW1lbnQucmVtb3ZlQ2hpbGQocGFnZSk7XG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVudUNvbXBvbmVudCgpKTtcblxuICAgIGluaXRpYWxQYWdlKCk7XG59KTtcblxuXG4vLyBwdXQgJ2NsaWNrJyBldmVudCBsaXN0ZW5lciBmb3IgY29udGFjdCBwYWdlXG50YWJFbGVtZW50My5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgcGFnZSA9IGJvZHlFbGVtZW50Lmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgXG4gICAgYm9keUVsZW1lbnQucmVtb3ZlQ2hpbGQocGFnZSk7XG4gICAgYm9keUVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFjdENvbXBvbmVudCgpKTtcblxuICAgIGluaXRpYWxQYWdlKCk7ICBcbn0pO1xuXG5cblxufTsgLy8gRW5kcyBpbml0aWFsUGFnZVxuXG5cblxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSk7XG5pbml0aWFsUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==