var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function getAugmentedNamespace(n2) {
  var f2 = n2.default;
  if (typeof f2 == "function") {
    var a = function() {
      return f2.apply(this, arguments);
    };
    a.prototype = f2.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n2).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n2, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n2[k];
      }
    });
  });
  return a;
}
var lodash = { exports: {} };
/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */
(function(module, exports) {
  (function() {
    var undefined$1;
    var VERSION = "4.17.21";
    var LARGE_ARRAY_SIZE = 200;
    var CORE_ERROR_TEXT = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", FUNC_ERROR_TEXT = "Expected a function", INVALID_TEMPL_VAR_ERROR_TEXT = "Invalid `variable` option passed into `_.template`";
    var HASH_UNDEFINED = "__lodash_hash_undefined__";
    var MAX_MEMOIZE_SIZE = 500;
    var PLACEHOLDER = "__lodash_placeholder__";
    var CLONE_DEEP_FLAG = 1, CLONE_FLAT_FLAG = 2, CLONE_SYMBOLS_FLAG = 4;
    var COMPARE_PARTIAL_FLAG = 1, COMPARE_UNORDERED_FLAG = 2;
    var WRAP_BIND_FLAG = 1, WRAP_BIND_KEY_FLAG = 2, WRAP_CURRY_BOUND_FLAG = 4, WRAP_CURRY_FLAG = 8, WRAP_CURRY_RIGHT_FLAG = 16, WRAP_PARTIAL_FLAG = 32, WRAP_PARTIAL_RIGHT_FLAG = 64, WRAP_ARY_FLAG = 128, WRAP_REARG_FLAG = 256, WRAP_FLIP_FLAG = 512;
    var DEFAULT_TRUNC_LENGTH = 30, DEFAULT_TRUNC_OMISSION = "...";
    var HOT_COUNT = 800, HOT_SPAN = 16;
    var LAZY_FILTER_FLAG = 1, LAZY_MAP_FLAG = 2, LAZY_WHILE_FLAG = 3;
    var INFINITY = 1 / 0, MAX_SAFE_INTEGER = 9007199254740991, MAX_INTEGER = 17976931348623157e292, NAN = 0 / 0;
    var MAX_ARRAY_LENGTH = 4294967295, MAX_ARRAY_INDEX = MAX_ARRAY_LENGTH - 1, HALF_MAX_ARRAY_LENGTH = MAX_ARRAY_LENGTH >>> 1;
    var wrapFlags = [
      ["ary", WRAP_ARY_FLAG],
      ["bind", WRAP_BIND_FLAG],
      ["bindKey", WRAP_BIND_KEY_FLAG],
      ["curry", WRAP_CURRY_FLAG],
      ["curryRight", WRAP_CURRY_RIGHT_FLAG],
      ["flip", WRAP_FLIP_FLAG],
      ["partial", WRAP_PARTIAL_FLAG],
      ["partialRight", WRAP_PARTIAL_RIGHT_FLAG],
      ["rearg", WRAP_REARG_FLAG]
    ];
    var argsTag = "[object Arguments]", arrayTag = "[object Array]", asyncTag = "[object AsyncFunction]", boolTag = "[object Boolean]", dateTag = "[object Date]", domExcTag = "[object DOMException]", errorTag = "[object Error]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", mapTag = "[object Map]", numberTag = "[object Number]", nullTag = "[object Null]", objectTag = "[object Object]", promiseTag = "[object Promise]", proxyTag = "[object Proxy]", regexpTag = "[object RegExp]", setTag = "[object Set]", stringTag = "[object String]", symbolTag = "[object Symbol]", undefinedTag = "[object Undefined]", weakMapTag = "[object WeakMap]", weakSetTag = "[object WeakSet]";
    var arrayBufferTag = "[object ArrayBuffer]", dataViewTag = "[object DataView]", float32Tag = "[object Float32Array]", float64Tag = "[object Float64Array]", int8Tag = "[object Int8Array]", int16Tag = "[object Int16Array]", int32Tag = "[object Int32Array]", uint8Tag = "[object Uint8Array]", uint8ClampedTag = "[object Uint8ClampedArray]", uint16Tag = "[object Uint16Array]", uint32Tag = "[object Uint32Array]";
    var reEmptyStringLeading = /\b__p \+= '';/g, reEmptyStringMiddle = /\b(__p \+=) '' \+/g, reEmptyStringTrailing = /(__e\(.*?\)|\b__t\)) \+\n'';/g;
    var reEscapedHtml = /&(?:amp|lt|gt|quot|#39);/g, reUnescapedHtml = /[&<>"']/g, reHasEscapedHtml = RegExp(reEscapedHtml.source), reHasUnescapedHtml = RegExp(reUnescapedHtml.source);
    var reEscape = /<%-([\s\S]+?)%>/g, reEvaluate = /<%([\s\S]+?)%>/g, reInterpolate = /<%=([\s\S]+?)%>/g;
    var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, reIsPlainProp = /^\w*$/, rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
    var reRegExpChar = /[\\^$.*+?()[\]{}|]/g, reHasRegExpChar = RegExp(reRegExpChar.source);
    var reTrimStart = /^\s+/;
    var reWhitespace = /\s/;
    var reWrapComment = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, reWrapDetails = /\{\n\/\* \[wrapped with (.+)\] \*/, reSplitDetails = /,? & /;
    var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;
    var reForbiddenIdentifierChars = /[()=,{}\[\]\/\s]/;
    var reEscapeChar = /\\(\\)?/g;
    var reEsTemplate = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g;
    var reFlags = /\w*$/;
    var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
    var reIsBinary = /^0b[01]+$/i;
    var reIsHostCtor = /^\[object .+?Constructor\]$/;
    var reIsOctal = /^0o[0-7]+$/i;
    var reIsUint = /^(?:0|[1-9]\d*)$/;
    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    var reNoMatch = /($^)/;
    var reUnescapedString = /['\n\r\u2028\u2029\\]/g;
    var rsAstralRange = "\\ud800-\\udfff", rsComboMarksRange = "\\u0300-\\u036f", reComboHalfMarksRange = "\\ufe20-\\ufe2f", rsComboSymbolsRange = "\\u20d0-\\u20ff", rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange, rsDingbatRange = "\\u2700-\\u27bf", rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff", rsMathOpRange = "\\xac\\xb1\\xd7\\xf7", rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", rsPunctuationRange = "\\u2000-\\u206f", rsSpaceRange = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde", rsVarRange = "\\ufe0e\\ufe0f", rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;
    var rsApos = "['\u2019]", rsAstral = "[" + rsAstralRange + "]", rsBreak = "[" + rsBreakRange + "]", rsCombo = "[" + rsComboRange + "]", rsDigits = "\\d+", rsDingbat = "[" + rsDingbatRange + "]", rsLower = "[" + rsLowerRange + "]", rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]", rsFitz = "\\ud83c[\\udffb-\\udfff]", rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")", rsNonAstral = "[^" + rsAstralRange + "]", rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}", rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]", rsUpper = "[" + rsUpperRange + "]", rsZWJ = "\\u200d";
    var rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")", rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")", rsOptContrLower = "(?:" + rsApos + "(?:d|ll|m|re|s|t|ve))?", rsOptContrUpper = "(?:" + rsApos + "(?:D|LL|M|RE|S|T|VE))?", reOptMod = rsModifier + "?", rsOptVar = "[" + rsVarRange + "]?", rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod + ")*", rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", rsSeq = rsOptVar + reOptMod + rsOptJoin, rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq, rsSymbol = "(?:" + [rsNonAstral + rsCombo + "?", rsCombo, rsRegional, rsSurrPair, rsAstral].join("|") + ")";
    var reApos = RegExp(rsApos, "g");
    var reComboMark = RegExp(rsCombo, "g");
    var reUnicode = RegExp(rsFitz + "(?=" + rsFitz + ")|" + rsSymbol + rsSeq, "g");
    var reUnicodeWord = RegExp([
      rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join("|") + ")",
      rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") + ")",
      rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower,
      rsUpper + "+" + rsOptContrUpper,
      rsOrdUpper,
      rsOrdLower,
      rsDigits,
      rsEmoji
    ].join("|"), "g");
    var reHasUnicode = RegExp("[" + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + "]");
    var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;
    var contextProps = [
      "Array",
      "Buffer",
      "DataView",
      "Date",
      "Error",
      "Float32Array",
      "Float64Array",
      "Function",
      "Int8Array",
      "Int16Array",
      "Int32Array",
      "Map",
      "Math",
      "Object",
      "Promise",
      "RegExp",
      "Set",
      "String",
      "Symbol",
      "TypeError",
      "Uint8Array",
      "Uint8ClampedArray",
      "Uint16Array",
      "Uint32Array",
      "WeakMap",
      "_",
      "clearTimeout",
      "isFinite",
      "parseInt",
      "setTimeout"
    ];
    var templateCounter = -1;
    var typedArrayTags = {};
    typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
    typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;
    var cloneableTags = {};
    cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
    cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;
    var deburredLetters = {
      "\xC0": "A",
      "\xC1": "A",
      "\xC2": "A",
      "\xC3": "A",
      "\xC4": "A",
      "\xC5": "A",
      "\xE0": "a",
      "\xE1": "a",
      "\xE2": "a",
      "\xE3": "a",
      "\xE4": "a",
      "\xE5": "a",
      "\xC7": "C",
      "\xE7": "c",
      "\xD0": "D",
      "\xF0": "d",
      "\xC8": "E",
      "\xC9": "E",
      "\xCA": "E",
      "\xCB": "E",
      "\xE8": "e",
      "\xE9": "e",
      "\xEA": "e",
      "\xEB": "e",
      "\xCC": "I",
      "\xCD": "I",
      "\xCE": "I",
      "\xCF": "I",
      "\xEC": "i",
      "\xED": "i",
      "\xEE": "i",
      "\xEF": "i",
      "\xD1": "N",
      "\xF1": "n",
      "\xD2": "O",
      "\xD3": "O",
      "\xD4": "O",
      "\xD5": "O",
      "\xD6": "O",
      "\xD8": "O",
      "\xF2": "o",
      "\xF3": "o",
      "\xF4": "o",
      "\xF5": "o",
      "\xF6": "o",
      "\xF8": "o",
      "\xD9": "U",
      "\xDA": "U",
      "\xDB": "U",
      "\xDC": "U",
      "\xF9": "u",
      "\xFA": "u",
      "\xFB": "u",
      "\xFC": "u",
      "\xDD": "Y",
      "\xFD": "y",
      "\xFF": "y",
      "\xC6": "Ae",
      "\xE6": "ae",
      "\xDE": "Th",
      "\xFE": "th",
      "\xDF": "ss",
      "\u0100": "A",
      "\u0102": "A",
      "\u0104": "A",
      "\u0101": "a",
      "\u0103": "a",
      "\u0105": "a",
      "\u0106": "C",
      "\u0108": "C",
      "\u010A": "C",
      "\u010C": "C",
      "\u0107": "c",
      "\u0109": "c",
      "\u010B": "c",
      "\u010D": "c",
      "\u010E": "D",
      "\u0110": "D",
      "\u010F": "d",
      "\u0111": "d",
      "\u0112": "E",
      "\u0114": "E",
      "\u0116": "E",
      "\u0118": "E",
      "\u011A": "E",
      "\u0113": "e",
      "\u0115": "e",
      "\u0117": "e",
      "\u0119": "e",
      "\u011B": "e",
      "\u011C": "G",
      "\u011E": "G",
      "\u0120": "G",
      "\u0122": "G",
      "\u011D": "g",
      "\u011F": "g",
      "\u0121": "g",
      "\u0123": "g",
      "\u0124": "H",
      "\u0126": "H",
      "\u0125": "h",
      "\u0127": "h",
      "\u0128": "I",
      "\u012A": "I",
      "\u012C": "I",
      "\u012E": "I",
      "\u0130": "I",
      "\u0129": "i",
      "\u012B": "i",
      "\u012D": "i",
      "\u012F": "i",
      "\u0131": "i",
      "\u0134": "J",
      "\u0135": "j",
      "\u0136": "K",
      "\u0137": "k",
      "\u0138": "k",
      "\u0139": "L",
      "\u013B": "L",
      "\u013D": "L",
      "\u013F": "L",
      "\u0141": "L",
      "\u013A": "l",
      "\u013C": "l",
      "\u013E": "l",
      "\u0140": "l",
      "\u0142": "l",
      "\u0143": "N",
      "\u0145": "N",
      "\u0147": "N",
      "\u014A": "N",
      "\u0144": "n",
      "\u0146": "n",
      "\u0148": "n",
      "\u014B": "n",
      "\u014C": "O",
      "\u014E": "O",
      "\u0150": "O",
      "\u014D": "o",
      "\u014F": "o",
      "\u0151": "o",
      "\u0154": "R",
      "\u0156": "R",
      "\u0158": "R",
      "\u0155": "r",
      "\u0157": "r",
      "\u0159": "r",
      "\u015A": "S",
      "\u015C": "S",
      "\u015E": "S",
      "\u0160": "S",
      "\u015B": "s",
      "\u015D": "s",
      "\u015F": "s",
      "\u0161": "s",
      "\u0162": "T",
      "\u0164": "T",
      "\u0166": "T",
      "\u0163": "t",
      "\u0165": "t",
      "\u0167": "t",
      "\u0168": "U",
      "\u016A": "U",
      "\u016C": "U",
      "\u016E": "U",
      "\u0170": "U",
      "\u0172": "U",
      "\u0169": "u",
      "\u016B": "u",
      "\u016D": "u",
      "\u016F": "u",
      "\u0171": "u",
      "\u0173": "u",
      "\u0174": "W",
      "\u0175": "w",
      "\u0176": "Y",
      "\u0177": "y",
      "\u0178": "Y",
      "\u0179": "Z",
      "\u017B": "Z",
      "\u017D": "Z",
      "\u017A": "z",
      "\u017C": "z",
      "\u017E": "z",
      "\u0132": "IJ",
      "\u0133": "ij",
      "\u0152": "Oe",
      "\u0153": "oe",
      "\u0149": "'n",
      "\u017F": "s"
    };
    var htmlEscapes = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    };
    var htmlUnescapes = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'"
    };
    var stringEscapes = {
      "\\": "\\",
      "'": "'",
      "\n": "n",
      "\r": "r",
      "\u2028": "u2028",
      "\u2029": "u2029"
    };
    var freeParseFloat = parseFloat, freeParseInt = parseInt;
    var freeGlobal = typeof commonjsGlobal == "object" && commonjsGlobal && commonjsGlobal.Object === Object && commonjsGlobal;
    var freeSelf = typeof self == "object" && self && self.Object === Object && self;
    var root = freeGlobal || freeSelf || Function("return this")();
    var freeExports = exports && !exports.nodeType && exports;
    var freeModule = freeExports && true && module && !module.nodeType && module;
    var moduleExports = freeModule && freeModule.exports === freeExports;
    var freeProcess = moduleExports && freeGlobal.process;
    var nodeUtil = function() {
      try {
        var types = freeModule && freeModule.require && freeModule.require("util").types;
        if (types) {
          return types;
        }
        return freeProcess && freeProcess.binding && freeProcess.binding("util");
      } catch (e) {
      }
    }();
    var nodeIsArrayBuffer = nodeUtil && nodeUtil.isArrayBuffer, nodeIsDate = nodeUtil && nodeUtil.isDate, nodeIsMap = nodeUtil && nodeUtil.isMap, nodeIsRegExp = nodeUtil && nodeUtil.isRegExp, nodeIsSet = nodeUtil && nodeUtil.isSet, nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;
    function apply(func, thisArg, args) {
      switch (args.length) {
        case 0:
          return func.call(thisArg);
        case 1:
          return func.call(thisArg, args[0]);
        case 2:
          return func.call(thisArg, args[0], args[1]);
        case 3:
          return func.call(thisArg, args[0], args[1], args[2]);
      }
      return func.apply(thisArg, args);
    }
    function arrayAggregator(array, setter, iteratee, accumulator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        var value = array[index];
        setter(accumulator, value, iteratee(value), array);
      }
      return accumulator;
    }
    function arrayEach(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEachRight(array, iteratee) {
      var length = array == null ? 0 : array.length;
      while (length--) {
        if (iteratee(array[length], length, array) === false) {
          break;
        }
      }
      return array;
    }
    function arrayEvery(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (!predicate(array[index], index, array)) {
          return false;
        }
      }
      return true;
    }
    function arrayFilter(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
          result[resIndex++] = value;
        }
      }
      return result;
    }
    function arrayIncludes(array, value) {
      var length = array == null ? 0 : array.length;
      return !!length && baseIndexOf(array, value, 0) > -1;
    }
    function arrayIncludesWith(array, value, comparator) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (comparator(value, array[index])) {
          return true;
        }
      }
      return false;
    }
    function arrayMap(array, iteratee) {
      var index = -1, length = array == null ? 0 : array.length, result = Array(length);
      while (++index < length) {
        result[index] = iteratee(array[index], index, array);
      }
      return result;
    }
    function arrayPush(array, values) {
      var index = -1, length = values.length, offset = array.length;
      while (++index < length) {
        array[offset + index] = values[index];
      }
      return array;
    }
    function arrayReduce(array, iteratee, accumulator, initAccum) {
      var index = -1, length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[++index];
      }
      while (++index < length) {
        accumulator = iteratee(accumulator, array[index], index, array);
      }
      return accumulator;
    }
    function arrayReduceRight(array, iteratee, accumulator, initAccum) {
      var length = array == null ? 0 : array.length;
      if (initAccum && length) {
        accumulator = array[--length];
      }
      while (length--) {
        accumulator = iteratee(accumulator, array[length], length, array);
      }
      return accumulator;
    }
    function arraySome(array, predicate) {
      var index = -1, length = array == null ? 0 : array.length;
      while (++index < length) {
        if (predicate(array[index], index, array)) {
          return true;
        }
      }
      return false;
    }
    var asciiSize = baseProperty("length");
    function asciiToArray(string) {
      return string.split("");
    }
    function asciiWords(string) {
      return string.match(reAsciiWord) || [];
    }
    function baseFindKey(collection, predicate, eachFunc) {
      var result;
      eachFunc(collection, function(value, key, collection2) {
        if (predicate(value, key, collection2)) {
          result = key;
          return false;
        }
      });
      return result;
    }
    function baseFindIndex(array, predicate, fromIndex, fromRight) {
      var length = array.length, index = fromIndex + (fromRight ? 1 : -1);
      while (fromRight ? index-- : ++index < length) {
        if (predicate(array[index], index, array)) {
          return index;
        }
      }
      return -1;
    }
    function baseIndexOf(array, value, fromIndex) {
      return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
    }
    function baseIndexOfWith(array, value, fromIndex, comparator) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (comparator(array[index], value)) {
          return index;
        }
      }
      return -1;
    }
    function baseIsNaN(value) {
      return value !== value;
    }
    function baseMean(array, iteratee) {
      var length = array == null ? 0 : array.length;
      return length ? baseSum(array, iteratee) / length : NAN;
    }
    function baseProperty(key) {
      return function(object) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function basePropertyOf(object) {
      return function(key) {
        return object == null ? undefined$1 : object[key];
      };
    }
    function baseReduce(collection, iteratee, accumulator, initAccum, eachFunc) {
      eachFunc(collection, function(value, index, collection2) {
        accumulator = initAccum ? (initAccum = false, value) : iteratee(accumulator, value, index, collection2);
      });
      return accumulator;
    }
    function baseSortBy(array, comparer) {
      var length = array.length;
      array.sort(comparer);
      while (length--) {
        array[length] = array[length].value;
      }
      return array;
    }
    function baseSum(array, iteratee) {
      var result, index = -1, length = array.length;
      while (++index < length) {
        var current = iteratee(array[index]);
        if (current !== undefined$1) {
          result = result === undefined$1 ? current : result + current;
        }
      }
      return result;
    }
    function baseTimes(n2, iteratee) {
      var index = -1, result = Array(n2);
      while (++index < n2) {
        result[index] = iteratee(index);
      }
      return result;
    }
    function baseToPairs(object, props) {
      return arrayMap(props, function(key) {
        return [key, object[key]];
      });
    }
    function baseTrim(string) {
      return string ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, "") : string;
    }
    function baseUnary(func) {
      return function(value) {
        return func(value);
      };
    }
    function baseValues(object, props) {
      return arrayMap(props, function(key) {
        return object[key];
      });
    }
    function cacheHas(cache2, key) {
      return cache2.has(key);
    }
    function charsStartIndex(strSymbols, chrSymbols) {
      var index = -1, length = strSymbols.length;
      while (++index < length && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function charsEndIndex(strSymbols, chrSymbols) {
      var index = strSymbols.length;
      while (index-- && baseIndexOf(chrSymbols, strSymbols[index], 0) > -1) {
      }
      return index;
    }
    function countHolders(array, placeholder) {
      var length = array.length, result = 0;
      while (length--) {
        if (array[length] === placeholder) {
          ++result;
        }
      }
      return result;
    }
    var deburrLetter = basePropertyOf(deburredLetters);
    var escapeHtmlChar = basePropertyOf(htmlEscapes);
    function escapeStringChar(chr) {
      return "\\" + stringEscapes[chr];
    }
    function getValue(object, key) {
      return object == null ? undefined$1 : object[key];
    }
    function hasUnicode(string) {
      return reHasUnicode.test(string);
    }
    function hasUnicodeWord(string) {
      return reHasUnicodeWord.test(string);
    }
    function iteratorToArray(iterator) {
      var data, result = [];
      while (!(data = iterator.next()).done) {
        result.push(data.value);
      }
      return result;
    }
    function mapToArray(map) {
      var index = -1, result = Array(map.size);
      map.forEach(function(value, key) {
        result[++index] = [key, value];
      });
      return result;
    }
    function overArg(func, transform) {
      return function(arg) {
        return func(transform(arg));
      };
    }
    function replaceHolders(array, placeholder) {
      var index = -1, length = array.length, resIndex = 0, result = [];
      while (++index < length) {
        var value = array[index];
        if (value === placeholder || value === PLACEHOLDER) {
          array[index] = PLACEHOLDER;
          result[resIndex++] = index;
        }
      }
      return result;
    }
    function setToArray(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = value;
      });
      return result;
    }
    function setToPairs(set) {
      var index = -1, result = Array(set.size);
      set.forEach(function(value) {
        result[++index] = [value, value];
      });
      return result;
    }
    function strictIndexOf(array, value, fromIndex) {
      var index = fromIndex - 1, length = array.length;
      while (++index < length) {
        if (array[index] === value) {
          return index;
        }
      }
      return -1;
    }
    function strictLastIndexOf(array, value, fromIndex) {
      var index = fromIndex + 1;
      while (index--) {
        if (array[index] === value) {
          return index;
        }
      }
      return index;
    }
    function stringSize(string) {
      return hasUnicode(string) ? unicodeSize(string) : asciiSize(string);
    }
    function stringToArray(string) {
      return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
    }
    function trimmedEndIndex(string) {
      var index = string.length;
      while (index-- && reWhitespace.test(string.charAt(index))) {
      }
      return index;
    }
    var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
    function unicodeSize(string) {
      var result = reUnicode.lastIndex = 0;
      while (reUnicode.test(string)) {
        ++result;
      }
      return result;
    }
    function unicodeToArray(string) {
      return string.match(reUnicode) || [];
    }
    function unicodeWords(string) {
      return string.match(reUnicodeWord) || [];
    }
    var runInContext = function runInContext2(context) {
      context = context == null ? root : _.defaults(root.Object(), context, _.pick(root, contextProps));
      var Array2 = context.Array, Date2 = context.Date, Error2 = context.Error, Function2 = context.Function, Math2 = context.Math, Object2 = context.Object, RegExp2 = context.RegExp, String2 = context.String, TypeError2 = context.TypeError;
      var arrayProto = Array2.prototype, funcProto = Function2.prototype, objectProto = Object2.prototype;
      var coreJsData = context["__core-js_shared__"];
      var funcToString = funcProto.toString;
      var hasOwnProperty2 = objectProto.hasOwnProperty;
      var idCounter = 0;
      var maskSrcKey = function() {
        var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || "");
        return uid ? "Symbol(src)_1." + uid : "";
      }();
      var nativeObjectToString = objectProto.toString;
      var objectCtorString = funcToString.call(Object2);
      var oldDash = root._;
      var reIsNative = RegExp2(
        "^" + funcToString.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
      );
      var Buffer2 = moduleExports ? context.Buffer : undefined$1, Symbol2 = context.Symbol, Uint8Array2 = context.Uint8Array, allocUnsafe = Buffer2 ? Buffer2.allocUnsafe : undefined$1, getPrototype = overArg(Object2.getPrototypeOf, Object2), objectCreate = Object2.create, propertyIsEnumerable = objectProto.propertyIsEnumerable, splice = arrayProto.splice, spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : undefined$1, symIterator = Symbol2 ? Symbol2.iterator : undefined$1, symToStringTag = Symbol2 ? Symbol2.toStringTag : undefined$1;
      var defineProperty = function() {
        try {
          var func = getNative(Object2, "defineProperty");
          func({}, "", {});
          return func;
        } catch (e) {
        }
      }();
      var ctxClearTimeout = context.clearTimeout !== root.clearTimeout && context.clearTimeout, ctxNow = Date2 && Date2.now !== root.Date.now && Date2.now, ctxSetTimeout = context.setTimeout !== root.setTimeout && context.setTimeout;
      var nativeCeil = Math2.ceil, nativeFloor = Math2.floor, nativeGetSymbols = Object2.getOwnPropertySymbols, nativeIsBuffer = Buffer2 ? Buffer2.isBuffer : undefined$1, nativeIsFinite = context.isFinite, nativeJoin = arrayProto.join, nativeKeys = overArg(Object2.keys, Object2), nativeMax = Math2.max, nativeMin = Math2.min, nativeNow = Date2.now, nativeParseInt = context.parseInt, nativeRandom = Math2.random, nativeReverse = arrayProto.reverse;
      var DataView = getNative(context, "DataView"), Map = getNative(context, "Map"), Promise2 = getNative(context, "Promise"), Set = getNative(context, "Set"), WeakMap = getNative(context, "WeakMap"), nativeCreate = getNative(Object2, "create");
      var metaMap = WeakMap && new WeakMap();
      var realNames = {};
      var dataViewCtorString = toSource(DataView), mapCtorString = toSource(Map), promiseCtorString = toSource(Promise2), setCtorString = toSource(Set), weakMapCtorString = toSource(WeakMap);
      var symbolProto = Symbol2 ? Symbol2.prototype : undefined$1, symbolValueOf = symbolProto ? symbolProto.valueOf : undefined$1, symbolToString = symbolProto ? symbolProto.toString : undefined$1;
      function lodash2(value) {
        if (isObjectLike(value) && !isArray(value) && !(value instanceof LazyWrapper)) {
          if (value instanceof LodashWrapper) {
            return value;
          }
          if (hasOwnProperty2.call(value, "__wrapped__")) {
            return wrapperClone(value);
          }
        }
        return new LodashWrapper(value);
      }
      var baseCreate = function() {
        function object() {
        }
        return function(proto) {
          if (!isObject(proto)) {
            return {};
          }
          if (objectCreate) {
            return objectCreate(proto);
          }
          object.prototype = proto;
          var result2 = new object();
          object.prototype = undefined$1;
          return result2;
        };
      }();
      function baseLodash() {
      }
      function LodashWrapper(value, chainAll) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__chain__ = !!chainAll;
        this.__index__ = 0;
        this.__values__ = undefined$1;
      }
      lodash2.templateSettings = {
        "escape": reEscape,
        "evaluate": reEvaluate,
        "interpolate": reInterpolate,
        "variable": "",
        "imports": {
          "_": lodash2
        }
      };
      lodash2.prototype = baseLodash.prototype;
      lodash2.prototype.constructor = lodash2;
      LodashWrapper.prototype = baseCreate(baseLodash.prototype);
      LodashWrapper.prototype.constructor = LodashWrapper;
      function LazyWrapper(value) {
        this.__wrapped__ = value;
        this.__actions__ = [];
        this.__dir__ = 1;
        this.__filtered__ = false;
        this.__iteratees__ = [];
        this.__takeCount__ = MAX_ARRAY_LENGTH;
        this.__views__ = [];
      }
      function lazyClone() {
        var result2 = new LazyWrapper(this.__wrapped__);
        result2.__actions__ = copyArray(this.__actions__);
        result2.__dir__ = this.__dir__;
        result2.__filtered__ = this.__filtered__;
        result2.__iteratees__ = copyArray(this.__iteratees__);
        result2.__takeCount__ = this.__takeCount__;
        result2.__views__ = copyArray(this.__views__);
        return result2;
      }
      function lazyReverse() {
        if (this.__filtered__) {
          var result2 = new LazyWrapper(this);
          result2.__dir__ = -1;
          result2.__filtered__ = true;
        } else {
          result2 = this.clone();
          result2.__dir__ *= -1;
        }
        return result2;
      }
      function lazyValue() {
        var array = this.__wrapped__.value(), dir = this.__dir__, isArr = isArray(array), isRight = dir < 0, arrLength = isArr ? array.length : 0, view = getView(0, arrLength, this.__views__), start = view.start, end = view.end, length = end - start, index = isRight ? end : start - 1, iteratees = this.__iteratees__, iterLength = iteratees.length, resIndex = 0, takeCount = nativeMin(length, this.__takeCount__);
        if (!isArr || !isRight && arrLength == length && takeCount == length) {
          return baseWrapperValue(array, this.__actions__);
        }
        var result2 = [];
        outer:
          while (length-- && resIndex < takeCount) {
            index += dir;
            var iterIndex = -1, value = array[index];
            while (++iterIndex < iterLength) {
              var data = iteratees[iterIndex], iteratee2 = data.iteratee, type = data.type, computed = iteratee2(value);
              if (type == LAZY_MAP_FLAG) {
                value = computed;
              } else if (!computed) {
                if (type == LAZY_FILTER_FLAG) {
                  continue outer;
                } else {
                  break outer;
                }
              }
            }
            result2[resIndex++] = value;
          }
        return result2;
      }
      LazyWrapper.prototype = baseCreate(baseLodash.prototype);
      LazyWrapper.prototype.constructor = LazyWrapper;
      function Hash(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function hashClear() {
        this.__data__ = nativeCreate ? nativeCreate(null) : {};
        this.size = 0;
      }
      function hashDelete(key) {
        var result2 = this.has(key) && delete this.__data__[key];
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function hashGet(key) {
        var data = this.__data__;
        if (nativeCreate) {
          var result2 = data[key];
          return result2 === HASH_UNDEFINED ? undefined$1 : result2;
        }
        return hasOwnProperty2.call(data, key) ? data[key] : undefined$1;
      }
      function hashHas(key) {
        var data = this.__data__;
        return nativeCreate ? data[key] !== undefined$1 : hasOwnProperty2.call(data, key);
      }
      function hashSet(key, value) {
        var data = this.__data__;
        this.size += this.has(key) ? 0 : 1;
        data[key] = nativeCreate && value === undefined$1 ? HASH_UNDEFINED : value;
        return this;
      }
      Hash.prototype.clear = hashClear;
      Hash.prototype["delete"] = hashDelete;
      Hash.prototype.get = hashGet;
      Hash.prototype.has = hashHas;
      Hash.prototype.set = hashSet;
      function ListCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function listCacheClear() {
        this.__data__ = [];
        this.size = 0;
      }
      function listCacheDelete(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          return false;
        }
        var lastIndex = data.length - 1;
        if (index == lastIndex) {
          data.pop();
        } else {
          splice.call(data, index, 1);
        }
        --this.size;
        return true;
      }
      function listCacheGet(key) {
        var data = this.__data__, index = assocIndexOf(data, key);
        return index < 0 ? undefined$1 : data[index][1];
      }
      function listCacheHas(key) {
        return assocIndexOf(this.__data__, key) > -1;
      }
      function listCacheSet(key, value) {
        var data = this.__data__, index = assocIndexOf(data, key);
        if (index < 0) {
          ++this.size;
          data.push([key, value]);
        } else {
          data[index][1] = value;
        }
        return this;
      }
      ListCache.prototype.clear = listCacheClear;
      ListCache.prototype["delete"] = listCacheDelete;
      ListCache.prototype.get = listCacheGet;
      ListCache.prototype.has = listCacheHas;
      ListCache.prototype.set = listCacheSet;
      function MapCache(entries) {
        var index = -1, length = entries == null ? 0 : entries.length;
        this.clear();
        while (++index < length) {
          var entry = entries[index];
          this.set(entry[0], entry[1]);
        }
      }
      function mapCacheClear() {
        this.size = 0;
        this.__data__ = {
          "hash": new Hash(),
          "map": new (Map || ListCache)(),
          "string": new Hash()
        };
      }
      function mapCacheDelete(key) {
        var result2 = getMapData(this, key)["delete"](key);
        this.size -= result2 ? 1 : 0;
        return result2;
      }
      function mapCacheGet(key) {
        return getMapData(this, key).get(key);
      }
      function mapCacheHas(key) {
        return getMapData(this, key).has(key);
      }
      function mapCacheSet(key, value) {
        var data = getMapData(this, key), size2 = data.size;
        data.set(key, value);
        this.size += data.size == size2 ? 0 : 1;
        return this;
      }
      MapCache.prototype.clear = mapCacheClear;
      MapCache.prototype["delete"] = mapCacheDelete;
      MapCache.prototype.get = mapCacheGet;
      MapCache.prototype.has = mapCacheHas;
      MapCache.prototype.set = mapCacheSet;
      function SetCache(values2) {
        var index = -1, length = values2 == null ? 0 : values2.length;
        this.__data__ = new MapCache();
        while (++index < length) {
          this.add(values2[index]);
        }
      }
      function setCacheAdd(value) {
        this.__data__.set(value, HASH_UNDEFINED);
        return this;
      }
      function setCacheHas(value) {
        return this.__data__.has(value);
      }
      SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
      SetCache.prototype.has = setCacheHas;
      function Stack(entries) {
        var data = this.__data__ = new ListCache(entries);
        this.size = data.size;
      }
      function stackClear() {
        this.__data__ = new ListCache();
        this.size = 0;
      }
      function stackDelete(key) {
        var data = this.__data__, result2 = data["delete"](key);
        this.size = data.size;
        return result2;
      }
      function stackGet(key) {
        return this.__data__.get(key);
      }
      function stackHas(key) {
        return this.__data__.has(key);
      }
      function stackSet(key, value) {
        var data = this.__data__;
        if (data instanceof ListCache) {
          var pairs = data.__data__;
          if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
            pairs.push([key, value]);
            this.size = ++data.size;
            return this;
          }
          data = this.__data__ = new MapCache(pairs);
        }
        data.set(key, value);
        this.size = data.size;
        return this;
      }
      Stack.prototype.clear = stackClear;
      Stack.prototype["delete"] = stackDelete;
      Stack.prototype.get = stackGet;
      Stack.prototype.has = stackHas;
      Stack.prototype.set = stackSet;
      function arrayLikeKeys(value, inherited) {
        var isArr = isArray(value), isArg = !isArr && isArguments(value), isBuff = !isArr && !isArg && isBuffer(value), isType = !isArr && !isArg && !isBuff && isTypedArray(value), skipIndexes = isArr || isArg || isBuff || isType, result2 = skipIndexes ? baseTimes(value.length, String2) : [], length = result2.length;
        for (var key in value) {
          if ((inherited || hasOwnProperty2.call(value, key)) && !(skipIndexes && (key == "length" || isBuff && (key == "offset" || key == "parent") || isType && (key == "buffer" || key == "byteLength" || key == "byteOffset") || isIndex(key, length)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function arraySample(array) {
        var length = array.length;
        return length ? array[baseRandom(0, length - 1)] : undefined$1;
      }
      function arraySampleSize(array, n2) {
        return shuffleSelf(copyArray(array), baseClamp(n2, 0, array.length));
      }
      function arrayShuffle(array) {
        return shuffleSelf(copyArray(array));
      }
      function assignMergeValue(object, key, value) {
        if (value !== undefined$1 && !eq(object[key], value) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assignValue(object, key, value) {
        var objValue = object[key];
        if (!(hasOwnProperty2.call(object, key) && eq(objValue, value)) || value === undefined$1 && !(key in object)) {
          baseAssignValue(object, key, value);
        }
      }
      function assocIndexOf(array, key) {
        var length = array.length;
        while (length--) {
          if (eq(array[length][0], key)) {
            return length;
          }
        }
        return -1;
      }
      function baseAggregator(collection, setter, iteratee2, accumulator) {
        baseEach(collection, function(value, key, collection2) {
          setter(accumulator, value, iteratee2(value), collection2);
        });
        return accumulator;
      }
      function baseAssign(object, source) {
        return object && copyObject(source, keys(source), object);
      }
      function baseAssignIn(object, source) {
        return object && copyObject(source, keysIn(source), object);
      }
      function baseAssignValue(object, key, value) {
        if (key == "__proto__" && defineProperty) {
          defineProperty(object, key, {
            "configurable": true,
            "enumerable": true,
            "value": value,
            "writable": true
          });
        } else {
          object[key] = value;
        }
      }
      function baseAt(object, paths) {
        var index = -1, length = paths.length, result2 = Array2(length), skip = object == null;
        while (++index < length) {
          result2[index] = skip ? undefined$1 : get(object, paths[index]);
        }
        return result2;
      }
      function baseClamp(number, lower, upper) {
        if (number === number) {
          if (upper !== undefined$1) {
            number = number <= upper ? number : upper;
          }
          if (lower !== undefined$1) {
            number = number >= lower ? number : lower;
          }
        }
        return number;
      }
      function baseClone(value, bitmask, customizer, key, object, stack) {
        var result2, isDeep = bitmask & CLONE_DEEP_FLAG, isFlat = bitmask & CLONE_FLAT_FLAG, isFull = bitmask & CLONE_SYMBOLS_FLAG;
        if (customizer) {
          result2 = object ? customizer(value, key, object, stack) : customizer(value);
        }
        if (result2 !== undefined$1) {
          return result2;
        }
        if (!isObject(value)) {
          return value;
        }
        var isArr = isArray(value);
        if (isArr) {
          result2 = initCloneArray(value);
          if (!isDeep) {
            return copyArray(value, result2);
          }
        } else {
          var tag = getTag(value), isFunc = tag == funcTag || tag == genTag;
          if (isBuffer(value)) {
            return cloneBuffer(value, isDeep);
          }
          if (tag == objectTag || tag == argsTag || isFunc && !object) {
            result2 = isFlat || isFunc ? {} : initCloneObject(value);
            if (!isDeep) {
              return isFlat ? copySymbolsIn(value, baseAssignIn(result2, value)) : copySymbols(value, baseAssign(result2, value));
            }
          } else {
            if (!cloneableTags[tag]) {
              return object ? value : {};
            }
            result2 = initCloneByTag(value, tag, isDeep);
          }
        }
        stack || (stack = new Stack());
        var stacked = stack.get(value);
        if (stacked) {
          return stacked;
        }
        stack.set(value, result2);
        if (isSet(value)) {
          value.forEach(function(subValue) {
            result2.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
          });
        } else if (isMap(value)) {
          value.forEach(function(subValue, key2) {
            result2.set(key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
          });
        }
        var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;
        var props = isArr ? undefined$1 : keysFunc(value);
        arrayEach(props || value, function(subValue, key2) {
          if (props) {
            key2 = subValue;
            subValue = value[key2];
          }
          assignValue(result2, key2, baseClone(subValue, bitmask, customizer, key2, value, stack));
        });
        return result2;
      }
      function baseConforms(source) {
        var props = keys(source);
        return function(object) {
          return baseConformsTo(object, source, props);
        };
      }
      function baseConformsTo(object, source, props) {
        var length = props.length;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (length--) {
          var key = props[length], predicate = source[key], value = object[key];
          if (value === undefined$1 && !(key in object) || !predicate(value)) {
            return false;
          }
        }
        return true;
      }
      function baseDelay(func, wait, args) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return setTimeout(function() {
          func.apply(undefined$1, args);
        }, wait);
      }
      function baseDifference(array, values2, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, isCommon = true, length = array.length, result2 = [], valuesLength = values2.length;
        if (!length) {
          return result2;
        }
        if (iteratee2) {
          values2 = arrayMap(values2, baseUnary(iteratee2));
        }
        if (comparator) {
          includes2 = arrayIncludesWith;
          isCommon = false;
        } else if (values2.length >= LARGE_ARRAY_SIZE) {
          includes2 = cacheHas;
          isCommon = false;
          values2 = new SetCache(values2);
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee2 == null ? value : iteratee2(value);
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var valuesIndex = valuesLength;
              while (valuesIndex--) {
                if (values2[valuesIndex] === computed) {
                  continue outer;
                }
              }
              result2.push(value);
            } else if (!includes2(values2, computed, comparator)) {
              result2.push(value);
            }
          }
        return result2;
      }
      var baseEach = createBaseEach(baseForOwn);
      var baseEachRight = createBaseEach(baseForOwnRight, true);
      function baseEvery(collection, predicate) {
        var result2 = true;
        baseEach(collection, function(value, index, collection2) {
          result2 = !!predicate(value, index, collection2);
          return result2;
        });
        return result2;
      }
      function baseExtremum(array, iteratee2, comparator) {
        var index = -1, length = array.length;
        while (++index < length) {
          var value = array[index], current = iteratee2(value);
          if (current != null && (computed === undefined$1 ? current === current && !isSymbol(current) : comparator(current, computed))) {
            var computed = current, result2 = value;
          }
        }
        return result2;
      }
      function baseFill(array, value, start, end) {
        var length = array.length;
        start = toInteger(start);
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end === undefined$1 || end > length ? length : toInteger(end);
        if (end < 0) {
          end += length;
        }
        end = start > end ? 0 : toLength(end);
        while (start < end) {
          array[start++] = value;
        }
        return array;
      }
      function baseFilter(collection, predicate) {
        var result2 = [];
        baseEach(collection, function(value, index, collection2) {
          if (predicate(value, index, collection2)) {
            result2.push(value);
          }
        });
        return result2;
      }
      function baseFlatten(array, depth, predicate, isStrict, result2) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result2 || (result2 = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result2);
            } else {
              arrayPush(result2, value);
            }
          } else if (!isStrict) {
            result2[result2.length] = value;
          }
        }
        return result2;
      }
      var baseFor = createBaseFor();
      var baseForRight = createBaseFor(true);
      function baseForOwn(object, iteratee2) {
        return object && baseFor(object, iteratee2, keys);
      }
      function baseForOwnRight(object, iteratee2) {
        return object && baseForRight(object, iteratee2, keys);
      }
      function baseFunctions(object, props) {
        return arrayFilter(props, function(key) {
          return isFunction(object[key]);
        });
      }
      function baseGet(object, path) {
        path = castPath(path, object);
        var index = 0, length = path.length;
        while (object != null && index < length) {
          object = object[toKey(path[index++])];
        }
        return index && index == length ? object : undefined$1;
      }
      function baseGetAllKeys(object, keysFunc, symbolsFunc) {
        var result2 = keysFunc(object);
        return isArray(object) ? result2 : arrayPush(result2, symbolsFunc(object));
      }
      function baseGetTag(value) {
        if (value == null) {
          return value === undefined$1 ? undefinedTag : nullTag;
        }
        return symToStringTag && symToStringTag in Object2(value) ? getRawTag(value) : objectToString(value);
      }
      function baseGt(value, other) {
        return value > other;
      }
      function baseHas(object, key) {
        return object != null && hasOwnProperty2.call(object, key);
      }
      function baseHasIn(object, key) {
        return object != null && key in Object2(object);
      }
      function baseInRange(number, start, end) {
        return number >= nativeMin(start, end) && number < nativeMax(start, end);
      }
      function baseIntersection(arrays, iteratee2, comparator) {
        var includes2 = comparator ? arrayIncludesWith : arrayIncludes, length = arrays[0].length, othLength = arrays.length, othIndex = othLength, caches = Array2(othLength), maxLength = Infinity, result2 = [];
        while (othIndex--) {
          var array = arrays[othIndex];
          if (othIndex && iteratee2) {
            array = arrayMap(array, baseUnary(iteratee2));
          }
          maxLength = nativeMin(array.length, maxLength);
          caches[othIndex] = !comparator && (iteratee2 || length >= 120 && array.length >= 120) ? new SetCache(othIndex && array) : undefined$1;
        }
        array = arrays[0];
        var index = -1, seen = caches[0];
        outer:
          while (++index < length && result2.length < maxLength) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (!(seen ? cacheHas(seen, computed) : includes2(result2, computed, comparator))) {
              othIndex = othLength;
              while (--othIndex) {
                var cache2 = caches[othIndex];
                if (!(cache2 ? cacheHas(cache2, computed) : includes2(arrays[othIndex], computed, comparator))) {
                  continue outer;
                }
              }
              if (seen) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseInverter(object, setter, iteratee2, accumulator) {
        baseForOwn(object, function(value, key, object2) {
          setter(accumulator, iteratee2(value), key, object2);
        });
        return accumulator;
      }
      function baseInvoke(object, path, args) {
        path = castPath(path, object);
        object = parent(object, path);
        var func = object == null ? object : object[toKey(last(path))];
        return func == null ? undefined$1 : apply(func, object, args);
      }
      function baseIsArguments(value) {
        return isObjectLike(value) && baseGetTag(value) == argsTag;
      }
      function baseIsArrayBuffer(value) {
        return isObjectLike(value) && baseGetTag(value) == arrayBufferTag;
      }
      function baseIsDate(value) {
        return isObjectLike(value) && baseGetTag(value) == dateTag;
      }
      function baseIsEqual(value, other, bitmask, customizer, stack) {
        if (value === other) {
          return true;
        }
        if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
          return value !== value && other !== other;
        }
        return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
      }
      function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
        var objIsArr = isArray(object), othIsArr = isArray(other), objTag = objIsArr ? arrayTag : getTag(object), othTag = othIsArr ? arrayTag : getTag(other);
        objTag = objTag == argsTag ? objectTag : objTag;
        othTag = othTag == argsTag ? objectTag : othTag;
        var objIsObj = objTag == objectTag, othIsObj = othTag == objectTag, isSameTag = objTag == othTag;
        if (isSameTag && isBuffer(object)) {
          if (!isBuffer(other)) {
            return false;
          }
          objIsArr = true;
          objIsObj = false;
        }
        if (isSameTag && !objIsObj) {
          stack || (stack = new Stack());
          return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
        }
        if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
          var objIsWrapped = objIsObj && hasOwnProperty2.call(object, "__wrapped__"), othIsWrapped = othIsObj && hasOwnProperty2.call(other, "__wrapped__");
          if (objIsWrapped || othIsWrapped) {
            var objUnwrapped = objIsWrapped ? object.value() : object, othUnwrapped = othIsWrapped ? other.value() : other;
            stack || (stack = new Stack());
            return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
          }
        }
        if (!isSameTag) {
          return false;
        }
        stack || (stack = new Stack());
        return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
      }
      function baseIsMap(value) {
        return isObjectLike(value) && getTag(value) == mapTag;
      }
      function baseIsMatch(object, source, matchData, customizer) {
        var index = matchData.length, length = index, noCustomizer = !customizer;
        if (object == null) {
          return !length;
        }
        object = Object2(object);
        while (index--) {
          var data = matchData[index];
          if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
            return false;
          }
        }
        while (++index < length) {
          data = matchData[index];
          var key = data[0], objValue = object[key], srcValue = data[1];
          if (noCustomizer && data[2]) {
            if (objValue === undefined$1 && !(key in object)) {
              return false;
            }
          } else {
            var stack = new Stack();
            if (customizer) {
              var result2 = customizer(objValue, srcValue, key, object, source, stack);
            }
            if (!(result2 === undefined$1 ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result2)) {
              return false;
            }
          }
        }
        return true;
      }
      function baseIsNative(value) {
        if (!isObject(value) || isMasked(value)) {
          return false;
        }
        var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
        return pattern.test(toSource(value));
      }
      function baseIsRegExp(value) {
        return isObjectLike(value) && baseGetTag(value) == regexpTag;
      }
      function baseIsSet(value) {
        return isObjectLike(value) && getTag(value) == setTag;
      }
      function baseIsTypedArray(value) {
        return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
      }
      function baseIteratee(value) {
        if (typeof value == "function") {
          return value;
        }
        if (value == null) {
          return identity;
        }
        if (typeof value == "object") {
          return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
        }
        return property(value);
      }
      function baseKeys(object) {
        if (!isPrototype(object)) {
          return nativeKeys(object);
        }
        var result2 = [];
        for (var key in Object2(object)) {
          if (hasOwnProperty2.call(object, key) && key != "constructor") {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseKeysIn(object) {
        if (!isObject(object)) {
          return nativeKeysIn(object);
        }
        var isProto = isPrototype(object), result2 = [];
        for (var key in object) {
          if (!(key == "constructor" && (isProto || !hasOwnProperty2.call(object, key)))) {
            result2.push(key);
          }
        }
        return result2;
      }
      function baseLt(value, other) {
        return value < other;
      }
      function baseMap(collection, iteratee2) {
        var index = -1, result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value, key, collection2) {
          result2[++index] = iteratee2(value, key, collection2);
        });
        return result2;
      }
      function baseMatches(source) {
        var matchData = getMatchData(source);
        if (matchData.length == 1 && matchData[0][2]) {
          return matchesStrictComparable(matchData[0][0], matchData[0][1]);
        }
        return function(object) {
          return object === source || baseIsMatch(object, source, matchData);
        };
      }
      function baseMatchesProperty(path, srcValue) {
        if (isKey(path) && isStrictComparable(srcValue)) {
          return matchesStrictComparable(toKey(path), srcValue);
        }
        return function(object) {
          var objValue = get(object, path);
          return objValue === undefined$1 && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
        };
      }
      function baseMerge(object, source, srcIndex, customizer, stack) {
        if (object === source) {
          return;
        }
        baseFor(source, function(srcValue, key) {
          stack || (stack = new Stack());
          if (isObject(srcValue)) {
            baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
          } else {
            var newValue = customizer ? customizer(safeGet(object, key), srcValue, key + "", object, source, stack) : undefined$1;
            if (newValue === undefined$1) {
              newValue = srcValue;
            }
            assignMergeValue(object, key, newValue);
          }
        }, keysIn);
      }
      function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
        var objValue = safeGet(object, key), srcValue = safeGet(source, key), stacked = stack.get(srcValue);
        if (stacked) {
          assignMergeValue(object, key, stacked);
          return;
        }
        var newValue = customizer ? customizer(objValue, srcValue, key + "", object, source, stack) : undefined$1;
        var isCommon = newValue === undefined$1;
        if (isCommon) {
          var isArr = isArray(srcValue), isBuff = !isArr && isBuffer(srcValue), isTyped = !isArr && !isBuff && isTypedArray(srcValue);
          newValue = srcValue;
          if (isArr || isBuff || isTyped) {
            if (isArray(objValue)) {
              newValue = objValue;
            } else if (isArrayLikeObject(objValue)) {
              newValue = copyArray(objValue);
            } else if (isBuff) {
              isCommon = false;
              newValue = cloneBuffer(srcValue, true);
            } else if (isTyped) {
              isCommon = false;
              newValue = cloneTypedArray(srcValue, true);
            } else {
              newValue = [];
            }
          } else if (isPlainObject(srcValue) || isArguments(srcValue)) {
            newValue = objValue;
            if (isArguments(objValue)) {
              newValue = toPlainObject(objValue);
            } else if (!isObject(objValue) || isFunction(objValue)) {
              newValue = initCloneObject(srcValue);
            }
          } else {
            isCommon = false;
          }
        }
        if (isCommon) {
          stack.set(srcValue, newValue);
          mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
          stack["delete"](srcValue);
        }
        assignMergeValue(object, key, newValue);
      }
      function baseNth(array, n2) {
        var length = array.length;
        if (!length) {
          return;
        }
        n2 += n2 < 0 ? length : 0;
        return isIndex(n2, length) ? array[n2] : undefined$1;
      }
      function baseOrderBy(collection, iteratees, orders) {
        if (iteratees.length) {
          iteratees = arrayMap(iteratees, function(iteratee2) {
            if (isArray(iteratee2)) {
              return function(value) {
                return baseGet(value, iteratee2.length === 1 ? iteratee2[0] : iteratee2);
              };
            }
            return iteratee2;
          });
        } else {
          iteratees = [identity];
        }
        var index = -1;
        iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
        var result2 = baseMap(collection, function(value, key, collection2) {
          var criteria = arrayMap(iteratees, function(iteratee2) {
            return iteratee2(value);
          });
          return { "criteria": criteria, "index": ++index, "value": value };
        });
        return baseSortBy(result2, function(object, other) {
          return compareMultiple(object, other, orders);
        });
      }
      function basePick(object, paths) {
        return basePickBy(object, paths, function(value, path) {
          return hasIn(object, path);
        });
      }
      function basePickBy(object, paths, predicate) {
        var index = -1, length = paths.length, result2 = {};
        while (++index < length) {
          var path = paths[index], value = baseGet(object, path);
          if (predicate(value, path)) {
            baseSet(result2, castPath(path, object), value);
          }
        }
        return result2;
      }
      function basePropertyDeep(path) {
        return function(object) {
          return baseGet(object, path);
        };
      }
      function basePullAll(array, values2, iteratee2, comparator) {
        var indexOf2 = comparator ? baseIndexOfWith : baseIndexOf, index = -1, length = values2.length, seen = array;
        if (array === values2) {
          values2 = copyArray(values2);
        }
        if (iteratee2) {
          seen = arrayMap(array, baseUnary(iteratee2));
        }
        while (++index < length) {
          var fromIndex = 0, value = values2[index], computed = iteratee2 ? iteratee2(value) : value;
          while ((fromIndex = indexOf2(seen, computed, fromIndex, comparator)) > -1) {
            if (seen !== array) {
              splice.call(seen, fromIndex, 1);
            }
            splice.call(array, fromIndex, 1);
          }
        }
        return array;
      }
      function basePullAt(array, indexes) {
        var length = array ? indexes.length : 0, lastIndex = length - 1;
        while (length--) {
          var index = indexes[length];
          if (length == lastIndex || index !== previous) {
            var previous = index;
            if (isIndex(index)) {
              splice.call(array, index, 1);
            } else {
              baseUnset(array, index);
            }
          }
        }
        return array;
      }
      function baseRandom(lower, upper) {
        return lower + nativeFloor(nativeRandom() * (upper - lower + 1));
      }
      function baseRange(start, end, step, fromRight) {
        var index = -1, length = nativeMax(nativeCeil((end - start) / (step || 1)), 0), result2 = Array2(length);
        while (length--) {
          result2[fromRight ? length : ++index] = start;
          start += step;
        }
        return result2;
      }
      function baseRepeat(string, n2) {
        var result2 = "";
        if (!string || n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return result2;
        }
        do {
          if (n2 % 2) {
            result2 += string;
          }
          n2 = nativeFloor(n2 / 2);
          if (n2) {
            string += string;
          }
        } while (n2);
        return result2;
      }
      function baseRest(func, start) {
        return setToString(overRest(func, start, identity), func + "");
      }
      function baseSample(collection) {
        return arraySample(values(collection));
      }
      function baseSampleSize(collection, n2) {
        var array = values(collection);
        return shuffleSelf(array, baseClamp(n2, 0, array.length));
      }
      function baseSet(object, path, value, customizer) {
        if (!isObject(object)) {
          return object;
        }
        path = castPath(path, object);
        var index = -1, length = path.length, lastIndex = length - 1, nested = object;
        while (nested != null && ++index < length) {
          var key = toKey(path[index]), newValue = value;
          if (key === "__proto__" || key === "constructor" || key === "prototype") {
            return object;
          }
          if (index != lastIndex) {
            var objValue = nested[key];
            newValue = customizer ? customizer(objValue, key, nested) : undefined$1;
            if (newValue === undefined$1) {
              newValue = isObject(objValue) ? objValue : isIndex(path[index + 1]) ? [] : {};
            }
          }
          assignValue(nested, key, newValue);
          nested = nested[key];
        }
        return object;
      }
      var baseSetData = !metaMap ? identity : function(func, data) {
        metaMap.set(func, data);
        return func;
      };
      var baseSetToString = !defineProperty ? identity : function(func, string) {
        return defineProperty(func, "toString", {
          "configurable": true,
          "enumerable": false,
          "value": constant(string),
          "writable": true
        });
      };
      function baseShuffle(collection) {
        return shuffleSelf(values(collection));
      }
      function baseSlice(array, start, end) {
        var index = -1, length = array.length;
        if (start < 0) {
          start = -start > length ? 0 : length + start;
        }
        end = end > length ? length : end;
        if (end < 0) {
          end += length;
        }
        length = start > end ? 0 : end - start >>> 0;
        start >>>= 0;
        var result2 = Array2(length);
        while (++index < length) {
          result2[index] = array[index + start];
        }
        return result2;
      }
      function baseSome(collection, predicate) {
        var result2;
        baseEach(collection, function(value, index, collection2) {
          result2 = predicate(value, index, collection2);
          return !result2;
        });
        return !!result2;
      }
      function baseSortedIndex(array, value, retHighest) {
        var low = 0, high = array == null ? low : array.length;
        if (typeof value == "number" && value === value && high <= HALF_MAX_ARRAY_LENGTH) {
          while (low < high) {
            var mid = low + high >>> 1, computed = array[mid];
            if (computed !== null && !isSymbol(computed) && (retHighest ? computed <= value : computed < value)) {
              low = mid + 1;
            } else {
              high = mid;
            }
          }
          return high;
        }
        return baseSortedIndexBy(array, value, identity, retHighest);
      }
      function baseSortedIndexBy(array, value, iteratee2, retHighest) {
        var low = 0, high = array == null ? 0 : array.length;
        if (high === 0) {
          return 0;
        }
        value = iteratee2(value);
        var valIsNaN = value !== value, valIsNull = value === null, valIsSymbol = isSymbol(value), valIsUndefined = value === undefined$1;
        while (low < high) {
          var mid = nativeFloor((low + high) / 2), computed = iteratee2(array[mid]), othIsDefined = computed !== undefined$1, othIsNull = computed === null, othIsReflexive = computed === computed, othIsSymbol = isSymbol(computed);
          if (valIsNaN) {
            var setLow = retHighest || othIsReflexive;
          } else if (valIsUndefined) {
            setLow = othIsReflexive && (retHighest || othIsDefined);
          } else if (valIsNull) {
            setLow = othIsReflexive && othIsDefined && (retHighest || !othIsNull);
          } else if (valIsSymbol) {
            setLow = othIsReflexive && othIsDefined && !othIsNull && (retHighest || !othIsSymbol);
          } else if (othIsNull || othIsSymbol) {
            setLow = false;
          } else {
            setLow = retHighest ? computed <= value : computed < value;
          }
          if (setLow) {
            low = mid + 1;
          } else {
            high = mid;
          }
        }
        return nativeMin(high, MAX_ARRAY_INDEX);
      }
      function baseSortedUniq(array, iteratee2) {
        var index = -1, length = array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
          if (!index || !eq(computed, seen)) {
            var seen = computed;
            result2[resIndex++] = value === 0 ? 0 : value;
          }
        }
        return result2;
      }
      function baseToNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        return +value;
      }
      function baseToString(value) {
        if (typeof value == "string") {
          return value;
        }
        if (isArray(value)) {
          return arrayMap(value, baseToString) + "";
        }
        if (isSymbol(value)) {
          return symbolToString ? symbolToString.call(value) : "";
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function baseUniq(array, iteratee2, comparator) {
        var index = -1, includes2 = arrayIncludes, length = array.length, isCommon = true, result2 = [], seen = result2;
        if (comparator) {
          isCommon = false;
          includes2 = arrayIncludesWith;
        } else if (length >= LARGE_ARRAY_SIZE) {
          var set2 = iteratee2 ? null : createSet(array);
          if (set2) {
            return setToArray(set2);
          }
          isCommon = false;
          includes2 = cacheHas;
          seen = new SetCache();
        } else {
          seen = iteratee2 ? [] : result2;
        }
        outer:
          while (++index < length) {
            var value = array[index], computed = iteratee2 ? iteratee2(value) : value;
            value = comparator || value !== 0 ? value : 0;
            if (isCommon && computed === computed) {
              var seenIndex = seen.length;
              while (seenIndex--) {
                if (seen[seenIndex] === computed) {
                  continue outer;
                }
              }
              if (iteratee2) {
                seen.push(computed);
              }
              result2.push(value);
            } else if (!includes2(seen, computed, comparator)) {
              if (seen !== result2) {
                seen.push(computed);
              }
              result2.push(value);
            }
          }
        return result2;
      }
      function baseUnset(object, path) {
        path = castPath(path, object);
        object = parent(object, path);
        return object == null || delete object[toKey(last(path))];
      }
      function baseUpdate(object, path, updater, customizer) {
        return baseSet(object, path, updater(baseGet(object, path)), customizer);
      }
      function baseWhile(array, predicate, isDrop, fromRight) {
        var length = array.length, index = fromRight ? length : -1;
        while ((fromRight ? index-- : ++index < length) && predicate(array[index], index, array)) {
        }
        return isDrop ? baseSlice(array, fromRight ? 0 : index, fromRight ? index + 1 : length) : baseSlice(array, fromRight ? index + 1 : 0, fromRight ? length : index);
      }
      function baseWrapperValue(value, actions) {
        var result2 = value;
        if (result2 instanceof LazyWrapper) {
          result2 = result2.value();
        }
        return arrayReduce(actions, function(result3, action) {
          return action.func.apply(action.thisArg, arrayPush([result3], action.args));
        }, result2);
      }
      function baseXor(arrays, iteratee2, comparator) {
        var length = arrays.length;
        if (length < 2) {
          return length ? baseUniq(arrays[0]) : [];
        }
        var index = -1, result2 = Array2(length);
        while (++index < length) {
          var array = arrays[index], othIndex = -1;
          while (++othIndex < length) {
            if (othIndex != index) {
              result2[index] = baseDifference(result2[index] || array, arrays[othIndex], iteratee2, comparator);
            }
          }
        }
        return baseUniq(baseFlatten(result2, 1), iteratee2, comparator);
      }
      function baseZipObject(props, values2, assignFunc) {
        var index = -1, length = props.length, valsLength = values2.length, result2 = {};
        while (++index < length) {
          var value = index < valsLength ? values2[index] : undefined$1;
          assignFunc(result2, props[index], value);
        }
        return result2;
      }
      function castArrayLikeObject(value) {
        return isArrayLikeObject(value) ? value : [];
      }
      function castFunction(value) {
        return typeof value == "function" ? value : identity;
      }
      function castPath(value, object) {
        if (isArray(value)) {
          return value;
        }
        return isKey(value, object) ? [value] : stringToPath(toString(value));
      }
      var castRest = baseRest;
      function castSlice(array, start, end) {
        var length = array.length;
        end = end === undefined$1 ? length : end;
        return !start && end >= length ? array : baseSlice(array, start, end);
      }
      var clearTimeout = ctxClearTimeout || function(id) {
        return root.clearTimeout(id);
      };
      function cloneBuffer(buffer, isDeep) {
        if (isDeep) {
          return buffer.slice();
        }
        var length = buffer.length, result2 = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);
        buffer.copy(result2);
        return result2;
      }
      function cloneArrayBuffer(arrayBuffer) {
        var result2 = new arrayBuffer.constructor(arrayBuffer.byteLength);
        new Uint8Array2(result2).set(new Uint8Array2(arrayBuffer));
        return result2;
      }
      function cloneDataView(dataView, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
        return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
      }
      function cloneRegExp(regexp) {
        var result2 = new regexp.constructor(regexp.source, reFlags.exec(regexp));
        result2.lastIndex = regexp.lastIndex;
        return result2;
      }
      function cloneSymbol(symbol) {
        return symbolValueOf ? Object2(symbolValueOf.call(symbol)) : {};
      }
      function cloneTypedArray(typedArray, isDeep) {
        var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
        return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
      }
      function compareAscending(value, other) {
        if (value !== other) {
          var valIsDefined = value !== undefined$1, valIsNull = value === null, valIsReflexive = value === value, valIsSymbol = isSymbol(value);
          var othIsDefined = other !== undefined$1, othIsNull = other === null, othIsReflexive = other === other, othIsSymbol = isSymbol(other);
          if (!othIsNull && !othIsSymbol && !valIsSymbol && value > other || valIsSymbol && othIsDefined && othIsReflexive && !othIsNull && !othIsSymbol || valIsNull && othIsDefined && othIsReflexive || !valIsDefined && othIsReflexive || !valIsReflexive) {
            return 1;
          }
          if (!valIsNull && !valIsSymbol && !othIsSymbol && value < other || othIsSymbol && valIsDefined && valIsReflexive && !valIsNull && !valIsSymbol || othIsNull && valIsDefined && valIsReflexive || !othIsDefined && valIsReflexive || !othIsReflexive) {
            return -1;
          }
        }
        return 0;
      }
      function compareMultiple(object, other, orders) {
        var index = -1, objCriteria = object.criteria, othCriteria = other.criteria, length = objCriteria.length, ordersLength = orders.length;
        while (++index < length) {
          var result2 = compareAscending(objCriteria[index], othCriteria[index]);
          if (result2) {
            if (index >= ordersLength) {
              return result2;
            }
            var order = orders[index];
            return result2 * (order == "desc" ? -1 : 1);
          }
        }
        return object.index - other.index;
      }
      function composeArgs(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersLength = holders.length, leftIndex = -1, leftLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(leftLength + rangeLength), isUncurried = !isCurried;
        while (++leftIndex < leftLength) {
          result2[leftIndex] = partials[leftIndex];
        }
        while (++argsIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[holders[argsIndex]] = args[argsIndex];
          }
        }
        while (rangeLength--) {
          result2[leftIndex++] = args[argsIndex++];
        }
        return result2;
      }
      function composeArgsRight(args, partials, holders, isCurried) {
        var argsIndex = -1, argsLength = args.length, holdersIndex = -1, holdersLength = holders.length, rightIndex = -1, rightLength = partials.length, rangeLength = nativeMax(argsLength - holdersLength, 0), result2 = Array2(rangeLength + rightLength), isUncurried = !isCurried;
        while (++argsIndex < rangeLength) {
          result2[argsIndex] = args[argsIndex];
        }
        var offset = argsIndex;
        while (++rightIndex < rightLength) {
          result2[offset + rightIndex] = partials[rightIndex];
        }
        while (++holdersIndex < holdersLength) {
          if (isUncurried || argsIndex < argsLength) {
            result2[offset + holders[holdersIndex]] = args[argsIndex++];
          }
        }
        return result2;
      }
      function copyArray(source, array) {
        var index = -1, length = source.length;
        array || (array = Array2(length));
        while (++index < length) {
          array[index] = source[index];
        }
        return array;
      }
      function copyObject(source, props, object, customizer) {
        var isNew = !object;
        object || (object = {});
        var index = -1, length = props.length;
        while (++index < length) {
          var key = props[index];
          var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined$1;
          if (newValue === undefined$1) {
            newValue = source[key];
          }
          if (isNew) {
            baseAssignValue(object, key, newValue);
          } else {
            assignValue(object, key, newValue);
          }
        }
        return object;
      }
      function copySymbols(source, object) {
        return copyObject(source, getSymbols(source), object);
      }
      function copySymbolsIn(source, object) {
        return copyObject(source, getSymbolsIn(source), object);
      }
      function createAggregator(setter, initializer) {
        return function(collection, iteratee2) {
          var func = isArray(collection) ? arrayAggregator : baseAggregator, accumulator = initializer ? initializer() : {};
          return func(collection, setter, getIteratee(iteratee2, 2), accumulator);
        };
      }
      function createAssigner(assigner) {
        return baseRest(function(object, sources) {
          var index = -1, length = sources.length, customizer = length > 1 ? sources[length - 1] : undefined$1, guard = length > 2 ? sources[2] : undefined$1;
          customizer = assigner.length > 3 && typeof customizer == "function" ? (length--, customizer) : undefined$1;
          if (guard && isIterateeCall(sources[0], sources[1], guard)) {
            customizer = length < 3 ? undefined$1 : customizer;
            length = 1;
          }
          object = Object2(object);
          while (++index < length) {
            var source = sources[index];
            if (source) {
              assigner(object, source, index, customizer);
            }
          }
          return object;
        });
      }
      function createBaseEach(eachFunc, fromRight) {
        return function(collection, iteratee2) {
          if (collection == null) {
            return collection;
          }
          if (!isArrayLike(collection)) {
            return eachFunc(collection, iteratee2);
          }
          var length = collection.length, index = fromRight ? length : -1, iterable = Object2(collection);
          while (fromRight ? index-- : ++index < length) {
            if (iteratee2(iterable[index], index, iterable) === false) {
              break;
            }
          }
          return collection;
        };
      }
      function createBaseFor(fromRight) {
        return function(object, iteratee2, keysFunc) {
          var index = -1, iterable = Object2(object), props = keysFunc(object), length = props.length;
          while (length--) {
            var key = props[fromRight ? length : ++index];
            if (iteratee2(iterable[key], key, iterable) === false) {
              break;
            }
          }
          return object;
        };
      }
      function createBind(func, bitmask, thisArg) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return fn.apply(isBind ? thisArg : this, arguments);
        }
        return wrapper;
      }
      function createCaseFirst(methodName) {
        return function(string) {
          string = toString(string);
          var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined$1;
          var chr = strSymbols ? strSymbols[0] : string.charAt(0);
          var trailing = strSymbols ? castSlice(strSymbols, 1).join("") : string.slice(1);
          return chr[methodName]() + trailing;
        };
      }
      function createCompounder(callback) {
        return function(string) {
          return arrayReduce(words(deburr(string).replace(reApos, "")), callback, "");
        };
      }
      function createCtor(Ctor) {
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return new Ctor();
            case 1:
              return new Ctor(args[0]);
            case 2:
              return new Ctor(args[0], args[1]);
            case 3:
              return new Ctor(args[0], args[1], args[2]);
            case 4:
              return new Ctor(args[0], args[1], args[2], args[3]);
            case 5:
              return new Ctor(args[0], args[1], args[2], args[3], args[4]);
            case 6:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
            case 7:
              return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
          }
          var thisBinding = baseCreate(Ctor.prototype), result2 = Ctor.apply(thisBinding, args);
          return isObject(result2) ? result2 : thisBinding;
        };
      }
      function createCurry(func, bitmask, arity) {
        var Ctor = createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length, placeholder = getHolder(wrapper);
          while (index--) {
            args[index] = arguments[index];
          }
          var holders = length < 3 && args[0] !== placeholder && args[length - 1] !== placeholder ? [] : replaceHolders(args, placeholder);
          length -= holders.length;
          if (length < arity) {
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              undefined$1,
              args,
              holders,
              undefined$1,
              undefined$1,
              arity - length
            );
          }
          var fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          return apply(fn, this, args);
        }
        return wrapper;
      }
      function createFind(findIndexFunc) {
        return function(collection, predicate, fromIndex) {
          var iterable = Object2(collection);
          if (!isArrayLike(collection)) {
            var iteratee2 = getIteratee(predicate, 3);
            collection = keys(collection);
            predicate = function(key) {
              return iteratee2(iterable[key], key, iterable);
            };
          }
          var index = findIndexFunc(collection, predicate, fromIndex);
          return index > -1 ? iterable[iteratee2 ? collection[index] : index] : undefined$1;
        };
      }
      function createFlow(fromRight) {
        return flatRest(function(funcs) {
          var length = funcs.length, index = length, prereq = LodashWrapper.prototype.thru;
          if (fromRight) {
            funcs.reverse();
          }
          while (index--) {
            var func = funcs[index];
            if (typeof func != "function") {
              throw new TypeError2(FUNC_ERROR_TEXT);
            }
            if (prereq && !wrapper && getFuncName(func) == "wrapper") {
              var wrapper = new LodashWrapper([], true);
            }
          }
          index = wrapper ? index : length;
          while (++index < length) {
            func = funcs[index];
            var funcName = getFuncName(func), data = funcName == "wrapper" ? getData(func) : undefined$1;
            if (data && isLaziable(data[0]) && data[1] == (WRAP_ARY_FLAG | WRAP_CURRY_FLAG | WRAP_PARTIAL_FLAG | WRAP_REARG_FLAG) && !data[4].length && data[9] == 1) {
              wrapper = wrapper[getFuncName(data[0])].apply(wrapper, data[3]);
            } else {
              wrapper = func.length == 1 && isLaziable(func) ? wrapper[funcName]() : wrapper.thru(func);
            }
          }
          return function() {
            var args = arguments, value = args[0];
            if (wrapper && args.length == 1 && isArray(value)) {
              return wrapper.plant(value).value();
            }
            var index2 = 0, result2 = length ? funcs[index2].apply(this, args) : value;
            while (++index2 < length) {
              result2 = funcs[index2].call(this, result2);
            }
            return result2;
          };
        });
      }
      function createHybrid(func, bitmask, thisArg, partials, holders, partialsRight, holdersRight, argPos, ary2, arity) {
        var isAry = bitmask & WRAP_ARY_FLAG, isBind = bitmask & WRAP_BIND_FLAG, isBindKey = bitmask & WRAP_BIND_KEY_FLAG, isCurried = bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG), isFlip = bitmask & WRAP_FLIP_FLAG, Ctor = isBindKey ? undefined$1 : createCtor(func);
        function wrapper() {
          var length = arguments.length, args = Array2(length), index = length;
          while (index--) {
            args[index] = arguments[index];
          }
          if (isCurried) {
            var placeholder = getHolder(wrapper), holdersCount = countHolders(args, placeholder);
          }
          if (partials) {
            args = composeArgs(args, partials, holders, isCurried);
          }
          if (partialsRight) {
            args = composeArgsRight(args, partialsRight, holdersRight, isCurried);
          }
          length -= holdersCount;
          if (isCurried && length < arity) {
            var newHolders = replaceHolders(args, placeholder);
            return createRecurry(
              func,
              bitmask,
              createHybrid,
              wrapper.placeholder,
              thisArg,
              args,
              newHolders,
              argPos,
              ary2,
              arity - length
            );
          }
          var thisBinding = isBind ? thisArg : this, fn = isBindKey ? thisBinding[func] : func;
          length = args.length;
          if (argPos) {
            args = reorder(args, argPos);
          } else if (isFlip && length > 1) {
            args.reverse();
          }
          if (isAry && ary2 < length) {
            args.length = ary2;
          }
          if (this && this !== root && this instanceof wrapper) {
            fn = Ctor || createCtor(fn);
          }
          return fn.apply(thisBinding, args);
        }
        return wrapper;
      }
      function createInverter(setter, toIteratee) {
        return function(object, iteratee2) {
          return baseInverter(object, setter, toIteratee(iteratee2), {});
        };
      }
      function createMathOperation(operator, defaultValue) {
        return function(value, other) {
          var result2;
          if (value === undefined$1 && other === undefined$1) {
            return defaultValue;
          }
          if (value !== undefined$1) {
            result2 = value;
          }
          if (other !== undefined$1) {
            if (result2 === undefined$1) {
              return other;
            }
            if (typeof value == "string" || typeof other == "string") {
              value = baseToString(value);
              other = baseToString(other);
            } else {
              value = baseToNumber(value);
              other = baseToNumber(other);
            }
            result2 = operator(value, other);
          }
          return result2;
        };
      }
      function createOver(arrayFunc) {
        return flatRest(function(iteratees) {
          iteratees = arrayMap(iteratees, baseUnary(getIteratee()));
          return baseRest(function(args) {
            var thisArg = this;
            return arrayFunc(iteratees, function(iteratee2) {
              return apply(iteratee2, thisArg, args);
            });
          });
        });
      }
      function createPadding(length, chars) {
        chars = chars === undefined$1 ? " " : baseToString(chars);
        var charsLength = chars.length;
        if (charsLength < 2) {
          return charsLength ? baseRepeat(chars, length) : chars;
        }
        var result2 = baseRepeat(chars, nativeCeil(length / stringSize(chars)));
        return hasUnicode(chars) ? castSlice(stringToArray(result2), 0, length).join("") : result2.slice(0, length);
      }
      function createPartial(func, bitmask, thisArg, partials) {
        var isBind = bitmask & WRAP_BIND_FLAG, Ctor = createCtor(func);
        function wrapper() {
          var argsIndex = -1, argsLength = arguments.length, leftIndex = -1, leftLength = partials.length, args = Array2(leftLength + argsLength), fn = this && this !== root && this instanceof wrapper ? Ctor : func;
          while (++leftIndex < leftLength) {
            args[leftIndex] = partials[leftIndex];
          }
          while (argsLength--) {
            args[leftIndex++] = arguments[++argsIndex];
          }
          return apply(fn, isBind ? thisArg : this, args);
        }
        return wrapper;
      }
      function createRange(fromRight) {
        return function(start, end, step) {
          if (step && typeof step != "number" && isIterateeCall(start, end, step)) {
            end = step = undefined$1;
          }
          start = toFinite(start);
          if (end === undefined$1) {
            end = start;
            start = 0;
          } else {
            end = toFinite(end);
          }
          step = step === undefined$1 ? start < end ? 1 : -1 : toFinite(step);
          return baseRange(start, end, step, fromRight);
        };
      }
      function createRelationalOperation(operator) {
        return function(value, other) {
          if (!(typeof value == "string" && typeof other == "string")) {
            value = toNumber(value);
            other = toNumber(other);
          }
          return operator(value, other);
        };
      }
      function createRecurry(func, bitmask, wrapFunc, placeholder, thisArg, partials, holders, argPos, ary2, arity) {
        var isCurry = bitmask & WRAP_CURRY_FLAG, newHolders = isCurry ? holders : undefined$1, newHoldersRight = isCurry ? undefined$1 : holders, newPartials = isCurry ? partials : undefined$1, newPartialsRight = isCurry ? undefined$1 : partials;
        bitmask |= isCurry ? WRAP_PARTIAL_FLAG : WRAP_PARTIAL_RIGHT_FLAG;
        bitmask &= ~(isCurry ? WRAP_PARTIAL_RIGHT_FLAG : WRAP_PARTIAL_FLAG);
        if (!(bitmask & WRAP_CURRY_BOUND_FLAG)) {
          bitmask &= ~(WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG);
        }
        var newData = [
          func,
          bitmask,
          thisArg,
          newPartials,
          newHolders,
          newPartialsRight,
          newHoldersRight,
          argPos,
          ary2,
          arity
        ];
        var result2 = wrapFunc.apply(undefined$1, newData);
        if (isLaziable(func)) {
          setData(result2, newData);
        }
        result2.placeholder = placeholder;
        return setWrapToString(result2, func, bitmask);
      }
      function createRound(methodName) {
        var func = Math2[methodName];
        return function(number, precision) {
          number = toNumber(number);
          precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
          if (precision && nativeIsFinite(number)) {
            var pair = (toString(number) + "e").split("e"), value = func(pair[0] + "e" + (+pair[1] + precision));
            pair = (toString(value) + "e").split("e");
            return +(pair[0] + "e" + (+pair[1] - precision));
          }
          return func(number);
        };
      }
      var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function(values2) {
        return new Set(values2);
      };
      function createToPairs(keysFunc) {
        return function(object) {
          var tag = getTag(object);
          if (tag == mapTag) {
            return mapToArray(object);
          }
          if (tag == setTag) {
            return setToPairs(object);
          }
          return baseToPairs(object, keysFunc(object));
        };
      }
      function createWrap(func, bitmask, thisArg, partials, holders, argPos, ary2, arity) {
        var isBindKey = bitmask & WRAP_BIND_KEY_FLAG;
        if (!isBindKey && typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var length = partials ? partials.length : 0;
        if (!length) {
          bitmask &= ~(WRAP_PARTIAL_FLAG | WRAP_PARTIAL_RIGHT_FLAG);
          partials = holders = undefined$1;
        }
        ary2 = ary2 === undefined$1 ? ary2 : nativeMax(toInteger(ary2), 0);
        arity = arity === undefined$1 ? arity : toInteger(arity);
        length -= holders ? holders.length : 0;
        if (bitmask & WRAP_PARTIAL_RIGHT_FLAG) {
          var partialsRight = partials, holdersRight = holders;
          partials = holders = undefined$1;
        }
        var data = isBindKey ? undefined$1 : getData(func);
        var newData = [
          func,
          bitmask,
          thisArg,
          partials,
          holders,
          partialsRight,
          holdersRight,
          argPos,
          ary2,
          arity
        ];
        if (data) {
          mergeData(newData, data);
        }
        func = newData[0];
        bitmask = newData[1];
        thisArg = newData[2];
        partials = newData[3];
        holders = newData[4];
        arity = newData[9] = newData[9] === undefined$1 ? isBindKey ? 0 : func.length : nativeMax(newData[9] - length, 0);
        if (!arity && bitmask & (WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG)) {
          bitmask &= ~(WRAP_CURRY_FLAG | WRAP_CURRY_RIGHT_FLAG);
        }
        if (!bitmask || bitmask == WRAP_BIND_FLAG) {
          var result2 = createBind(func, bitmask, thisArg);
        } else if (bitmask == WRAP_CURRY_FLAG || bitmask == WRAP_CURRY_RIGHT_FLAG) {
          result2 = createCurry(func, bitmask, arity);
        } else if ((bitmask == WRAP_PARTIAL_FLAG || bitmask == (WRAP_BIND_FLAG | WRAP_PARTIAL_FLAG)) && !holders.length) {
          result2 = createPartial(func, bitmask, thisArg, partials);
        } else {
          result2 = createHybrid.apply(undefined$1, newData);
        }
        var setter = data ? baseSetData : setData;
        return setWrapToString(setter(result2, newData), func, bitmask);
      }
      function customDefaultsAssignIn(objValue, srcValue, key, object) {
        if (objValue === undefined$1 || eq(objValue, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
          return srcValue;
        }
        return objValue;
      }
      function customDefaultsMerge(objValue, srcValue, key, object, source, stack) {
        if (isObject(objValue) && isObject(srcValue)) {
          stack.set(srcValue, objValue);
          baseMerge(objValue, srcValue, undefined$1, customDefaultsMerge, stack);
          stack["delete"](srcValue);
        }
        return objValue;
      }
      function customOmitClone(value) {
        return isPlainObject(value) ? undefined$1 : value;
      }
      function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, arrLength = array.length, othLength = other.length;
        if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
          return false;
        }
        var arrStacked = stack.get(array);
        var othStacked = stack.get(other);
        if (arrStacked && othStacked) {
          return arrStacked == other && othStacked == array;
        }
        var index = -1, result2 = true, seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined$1;
        stack.set(array, other);
        stack.set(other, array);
        while (++index < arrLength) {
          var arrValue = array[index], othValue = other[index];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
          }
          if (compared !== undefined$1) {
            if (compared) {
              continue;
            }
            result2 = false;
            break;
          }
          if (seen) {
            if (!arraySome(other, function(othValue2, othIndex) {
              if (!cacheHas(seen, othIndex) && (arrValue === othValue2 || equalFunc(arrValue, othValue2, bitmask, customizer, stack))) {
                return seen.push(othIndex);
              }
            })) {
              result2 = false;
              break;
            }
          } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
            result2 = false;
            break;
          }
        }
        stack["delete"](array);
        stack["delete"](other);
        return result2;
      }
      function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
        switch (tag) {
          case dataViewTag:
            if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
              return false;
            }
            object = object.buffer;
            other = other.buffer;
          case arrayBufferTag:
            if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array2(object), new Uint8Array2(other))) {
              return false;
            }
            return true;
          case boolTag:
          case dateTag:
          case numberTag:
            return eq(+object, +other);
          case errorTag:
            return object.name == other.name && object.message == other.message;
          case regexpTag:
          case stringTag:
            return object == other + "";
          case mapTag:
            var convert = mapToArray;
          case setTag:
            var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
            convert || (convert = setToArray);
            if (object.size != other.size && !isPartial) {
              return false;
            }
            var stacked = stack.get(object);
            if (stacked) {
              return stacked == other;
            }
            bitmask |= COMPARE_UNORDERED_FLAG;
            stack.set(object, other);
            var result2 = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
            stack["delete"](object);
            return result2;
          case symbolTag:
            if (symbolValueOf) {
              return symbolValueOf.call(object) == symbolValueOf.call(other);
            }
        }
        return false;
      }
      function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
        var isPartial = bitmask & COMPARE_PARTIAL_FLAG, objProps = getAllKeys(object), objLength = objProps.length, othProps = getAllKeys(other), othLength = othProps.length;
        if (objLength != othLength && !isPartial) {
          return false;
        }
        var index = objLength;
        while (index--) {
          var key = objProps[index];
          if (!(isPartial ? key in other : hasOwnProperty2.call(other, key))) {
            return false;
          }
        }
        var objStacked = stack.get(object);
        var othStacked = stack.get(other);
        if (objStacked && othStacked) {
          return objStacked == other && othStacked == object;
        }
        var result2 = true;
        stack.set(object, other);
        stack.set(other, object);
        var skipCtor = isPartial;
        while (++index < objLength) {
          key = objProps[index];
          var objValue = object[key], othValue = other[key];
          if (customizer) {
            var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
          }
          if (!(compared === undefined$1 ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
            result2 = false;
            break;
          }
          skipCtor || (skipCtor = key == "constructor");
        }
        if (result2 && !skipCtor) {
          var objCtor = object.constructor, othCtor = other.constructor;
          if (objCtor != othCtor && ("constructor" in object && "constructor" in other) && !(typeof objCtor == "function" && objCtor instanceof objCtor && typeof othCtor == "function" && othCtor instanceof othCtor)) {
            result2 = false;
          }
        }
        stack["delete"](object);
        stack["delete"](other);
        return result2;
      }
      function flatRest(func) {
        return setToString(overRest(func, undefined$1, flatten), func + "");
      }
      function getAllKeys(object) {
        return baseGetAllKeys(object, keys, getSymbols);
      }
      function getAllKeysIn(object) {
        return baseGetAllKeys(object, keysIn, getSymbolsIn);
      }
      var getData = !metaMap ? noop : function(func) {
        return metaMap.get(func);
      };
      function getFuncName(func) {
        var result2 = func.name + "", array = realNames[result2], length = hasOwnProperty2.call(realNames, result2) ? array.length : 0;
        while (length--) {
          var data = array[length], otherFunc = data.func;
          if (otherFunc == null || otherFunc == func) {
            return data.name;
          }
        }
        return result2;
      }
      function getHolder(func) {
        var object = hasOwnProperty2.call(lodash2, "placeholder") ? lodash2 : func;
        return object.placeholder;
      }
      function getIteratee() {
        var result2 = lodash2.iteratee || iteratee;
        result2 = result2 === iteratee ? baseIteratee : result2;
        return arguments.length ? result2(arguments[0], arguments[1]) : result2;
      }
      function getMapData(map2, key) {
        var data = map2.__data__;
        return isKeyable(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
      }
      function getMatchData(object) {
        var result2 = keys(object), length = result2.length;
        while (length--) {
          var key = result2[length], value = object[key];
          result2[length] = [key, value, isStrictComparable(value)];
        }
        return result2;
      }
      function getNative(object, key) {
        var value = getValue(object, key);
        return baseIsNative(value) ? value : undefined$1;
      }
      function getRawTag(value) {
        var isOwn = hasOwnProperty2.call(value, symToStringTag), tag = value[symToStringTag];
        try {
          value[symToStringTag] = undefined$1;
          var unmasked = true;
        } catch (e) {
        }
        var result2 = nativeObjectToString.call(value);
        if (unmasked) {
          if (isOwn) {
            value[symToStringTag] = tag;
          } else {
            delete value[symToStringTag];
          }
        }
        return result2;
      }
      var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
        if (object == null) {
          return [];
        }
        object = Object2(object);
        return arrayFilter(nativeGetSymbols(object), function(symbol) {
          return propertyIsEnumerable.call(object, symbol);
        });
      };
      var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
        var result2 = [];
        while (object) {
          arrayPush(result2, getSymbols(object));
          object = getPrototype(object);
        }
        return result2;
      };
      var getTag = baseGetTag;
      if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise2 && getTag(Promise2.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
        getTag = function(value) {
          var result2 = baseGetTag(value), Ctor = result2 == objectTag ? value.constructor : undefined$1, ctorString = Ctor ? toSource(Ctor) : "";
          if (ctorString) {
            switch (ctorString) {
              case dataViewCtorString:
                return dataViewTag;
              case mapCtorString:
                return mapTag;
              case promiseCtorString:
                return promiseTag;
              case setCtorString:
                return setTag;
              case weakMapCtorString:
                return weakMapTag;
            }
          }
          return result2;
        };
      }
      function getView(start, end, transforms) {
        var index = -1, length = transforms.length;
        while (++index < length) {
          var data = transforms[index], size2 = data.size;
          switch (data.type) {
            case "drop":
              start += size2;
              break;
            case "dropRight":
              end -= size2;
              break;
            case "take":
              end = nativeMin(end, start + size2);
              break;
            case "takeRight":
              start = nativeMax(start, end - size2);
              break;
          }
        }
        return { "start": start, "end": end };
      }
      function getWrapDetails(source) {
        var match = source.match(reWrapDetails);
        return match ? match[1].split(reSplitDetails) : [];
      }
      function hasPath(object, path, hasFunc) {
        path = castPath(path, object);
        var index = -1, length = path.length, result2 = false;
        while (++index < length) {
          var key = toKey(path[index]);
          if (!(result2 = object != null && hasFunc(object, key))) {
            break;
          }
          object = object[key];
        }
        if (result2 || ++index != length) {
          return result2;
        }
        length = object == null ? 0 : object.length;
        return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
      }
      function initCloneArray(array) {
        var length = array.length, result2 = new array.constructor(length);
        if (length && typeof array[0] == "string" && hasOwnProperty2.call(array, "index")) {
          result2.index = array.index;
          result2.input = array.input;
        }
        return result2;
      }
      function initCloneObject(object) {
        return typeof object.constructor == "function" && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
      }
      function initCloneByTag(object, tag, isDeep) {
        var Ctor = object.constructor;
        switch (tag) {
          case arrayBufferTag:
            return cloneArrayBuffer(object);
          case boolTag:
          case dateTag:
            return new Ctor(+object);
          case dataViewTag:
            return cloneDataView(object, isDeep);
          case float32Tag:
          case float64Tag:
          case int8Tag:
          case int16Tag:
          case int32Tag:
          case uint8Tag:
          case uint8ClampedTag:
          case uint16Tag:
          case uint32Tag:
            return cloneTypedArray(object, isDeep);
          case mapTag:
            return new Ctor();
          case numberTag:
          case stringTag:
            return new Ctor(object);
          case regexpTag:
            return cloneRegExp(object);
          case setTag:
            return new Ctor();
          case symbolTag:
            return cloneSymbol(object);
        }
      }
      function insertWrapDetails(source, details) {
        var length = details.length;
        if (!length) {
          return source;
        }
        var lastIndex = length - 1;
        details[lastIndex] = (length > 1 ? "& " : "") + details[lastIndex];
        details = details.join(length > 2 ? ", " : " ");
        return source.replace(reWrapComment, "{\n/* [wrapped with " + details + "] */\n");
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function isIndex(value, length) {
        var type = typeof value;
        length = length == null ? MAX_SAFE_INTEGER : length;
        return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
      }
      function isIterateeCall(value, index, object) {
        if (!isObject(object)) {
          return false;
        }
        var type = typeof index;
        if (type == "number" ? isArrayLike(object) && isIndex(index, object.length) : type == "string" && index in object) {
          return eq(object[index], value);
        }
        return false;
      }
      function isKey(value, object) {
        if (isArray(value)) {
          return false;
        }
        var type = typeof value;
        if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol(value)) {
          return true;
        }
        return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object2(object);
      }
      function isKeyable(value) {
        var type = typeof value;
        return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
      }
      function isLaziable(func) {
        var funcName = getFuncName(func), other = lodash2[funcName];
        if (typeof other != "function" || !(funcName in LazyWrapper.prototype)) {
          return false;
        }
        if (func === other) {
          return true;
        }
        var data = getData(other);
        return !!data && func === data[0];
      }
      function isMasked(func) {
        return !!maskSrcKey && maskSrcKey in func;
      }
      var isMaskable = coreJsData ? isFunction : stubFalse;
      function isPrototype(value) {
        var Ctor = value && value.constructor, proto = typeof Ctor == "function" && Ctor.prototype || objectProto;
        return value === proto;
      }
      function isStrictComparable(value) {
        return value === value && !isObject(value);
      }
      function matchesStrictComparable(key, srcValue) {
        return function(object) {
          if (object == null) {
            return false;
          }
          return object[key] === srcValue && (srcValue !== undefined$1 || key in Object2(object));
        };
      }
      function memoizeCapped(func) {
        var result2 = memoize(func, function(key) {
          if (cache2.size === MAX_MEMOIZE_SIZE) {
            cache2.clear();
          }
          return key;
        });
        var cache2 = result2.cache;
        return result2;
      }
      function mergeData(data, source) {
        var bitmask = data[1], srcBitmask = source[1], newBitmask = bitmask | srcBitmask, isCommon = newBitmask < (WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG | WRAP_ARY_FLAG);
        var isCombo = srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_CURRY_FLAG || srcBitmask == WRAP_ARY_FLAG && bitmask == WRAP_REARG_FLAG && data[7].length <= source[8] || srcBitmask == (WRAP_ARY_FLAG | WRAP_REARG_FLAG) && source[7].length <= source[8] && bitmask == WRAP_CURRY_FLAG;
        if (!(isCommon || isCombo)) {
          return data;
        }
        if (srcBitmask & WRAP_BIND_FLAG) {
          data[2] = source[2];
          newBitmask |= bitmask & WRAP_BIND_FLAG ? 0 : WRAP_CURRY_BOUND_FLAG;
        }
        var value = source[3];
        if (value) {
          var partials = data[3];
          data[3] = partials ? composeArgs(partials, value, source[4]) : value;
          data[4] = partials ? replaceHolders(data[3], PLACEHOLDER) : source[4];
        }
        value = source[5];
        if (value) {
          partials = data[5];
          data[5] = partials ? composeArgsRight(partials, value, source[6]) : value;
          data[6] = partials ? replaceHolders(data[5], PLACEHOLDER) : source[6];
        }
        value = source[7];
        if (value) {
          data[7] = value;
        }
        if (srcBitmask & WRAP_ARY_FLAG) {
          data[8] = data[8] == null ? source[8] : nativeMin(data[8], source[8]);
        }
        if (data[9] == null) {
          data[9] = source[9];
        }
        data[0] = source[0];
        data[1] = newBitmask;
        return data;
      }
      function nativeKeysIn(object) {
        var result2 = [];
        if (object != null) {
          for (var key in Object2(object)) {
            result2.push(key);
          }
        }
        return result2;
      }
      function objectToString(value) {
        return nativeObjectToString.call(value);
      }
      function overRest(func, start, transform2) {
        start = nativeMax(start === undefined$1 ? func.length - 1 : start, 0);
        return function() {
          var args = arguments, index = -1, length = nativeMax(args.length - start, 0), array = Array2(length);
          while (++index < length) {
            array[index] = args[start + index];
          }
          index = -1;
          var otherArgs = Array2(start + 1);
          while (++index < start) {
            otherArgs[index] = args[index];
          }
          otherArgs[start] = transform2(array);
          return apply(func, this, otherArgs);
        };
      }
      function parent(object, path) {
        return path.length < 2 ? object : baseGet(object, baseSlice(path, 0, -1));
      }
      function reorder(array, indexes) {
        var arrLength = array.length, length = nativeMin(indexes.length, arrLength), oldArray = copyArray(array);
        while (length--) {
          var index = indexes[length];
          array[length] = isIndex(index, arrLength) ? oldArray[index] : undefined$1;
        }
        return array;
      }
      function safeGet(object, key) {
        if (key === "constructor" && typeof object[key] === "function") {
          return;
        }
        if (key == "__proto__") {
          return;
        }
        return object[key];
      }
      var setData = shortOut(baseSetData);
      var setTimeout = ctxSetTimeout || function(func, wait) {
        return root.setTimeout(func, wait);
      };
      var setToString = shortOut(baseSetToString);
      function setWrapToString(wrapper, reference, bitmask) {
        var source = reference + "";
        return setToString(wrapper, insertWrapDetails(source, updateWrapDetails(getWrapDetails(source), bitmask)));
      }
      function shortOut(func) {
        var count = 0, lastCalled = 0;
        return function() {
          var stamp = nativeNow(), remaining = HOT_SPAN - (stamp - lastCalled);
          lastCalled = stamp;
          if (remaining > 0) {
            if (++count >= HOT_COUNT) {
              return arguments[0];
            }
          } else {
            count = 0;
          }
          return func.apply(undefined$1, arguments);
        };
      }
      function shuffleSelf(array, size2) {
        var index = -1, length = array.length, lastIndex = length - 1;
        size2 = size2 === undefined$1 ? length : size2;
        while (++index < size2) {
          var rand = baseRandom(index, lastIndex), value = array[rand];
          array[rand] = array[index];
          array[index] = value;
        }
        array.length = size2;
        return array;
      }
      var stringToPath = memoizeCapped(function(string) {
        var result2 = [];
        if (string.charCodeAt(0) === 46) {
          result2.push("");
        }
        string.replace(rePropName, function(match, number, quote, subString) {
          result2.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
        });
        return result2;
      });
      function toKey(value) {
        if (typeof value == "string" || isSymbol(value)) {
          return value;
        }
        var result2 = value + "";
        return result2 == "0" && 1 / value == -INFINITY ? "-0" : result2;
      }
      function toSource(func) {
        if (func != null) {
          try {
            return funcToString.call(func);
          } catch (e) {
          }
          try {
            return func + "";
          } catch (e) {
          }
        }
        return "";
      }
      function updateWrapDetails(details, bitmask) {
        arrayEach(wrapFlags, function(pair) {
          var value = "_." + pair[0];
          if (bitmask & pair[1] && !arrayIncludes(details, value)) {
            details.push(value);
          }
        });
        return details.sort();
      }
      function wrapperClone(wrapper) {
        if (wrapper instanceof LazyWrapper) {
          return wrapper.clone();
        }
        var result2 = new LodashWrapper(wrapper.__wrapped__, wrapper.__chain__);
        result2.__actions__ = copyArray(wrapper.__actions__);
        result2.__index__ = wrapper.__index__;
        result2.__values__ = wrapper.__values__;
        return result2;
      }
      function chunk(array, size2, guard) {
        if (guard ? isIterateeCall(array, size2, guard) : size2 === undefined$1) {
          size2 = 1;
        } else {
          size2 = nativeMax(toInteger(size2), 0);
        }
        var length = array == null ? 0 : array.length;
        if (!length || size2 < 1) {
          return [];
        }
        var index = 0, resIndex = 0, result2 = Array2(nativeCeil(length / size2));
        while (index < length) {
          result2[resIndex++] = baseSlice(array, index, index += size2);
        }
        return result2;
      }
      function compact(array) {
        var index = -1, length = array == null ? 0 : array.length, resIndex = 0, result2 = [];
        while (++index < length) {
          var value = array[index];
          if (value) {
            result2[resIndex++] = value;
          }
        }
        return result2;
      }
      function concat() {
        var length = arguments.length;
        if (!length) {
          return [];
        }
        var args = Array2(length - 1), array = arguments[0], index = length;
        while (index--) {
          args[index - 1] = arguments[index];
        }
        return arrayPush(isArray(array) ? copyArray(array) : [array], baseFlatten(args, 1));
      }
      var difference = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true)) : [];
      });
      var differenceBy = baseRest(function(array, values2) {
        var iteratee2 = last(values2);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2)) : [];
      });
      var differenceWith = baseRest(function(array, values2) {
        var comparator = last(values2);
        if (isArrayLikeObject(comparator)) {
          comparator = undefined$1;
        }
        return isArrayLikeObject(array) ? baseDifference(array, baseFlatten(values2, 1, isArrayLikeObject, true), undefined$1, comparator) : [];
      });
      function drop(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array, n2 < 0 ? 0 : n2, length);
      }
      function dropRight(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length - n2;
        return baseSlice(array, 0, n2 < 0 ? 0 : n2);
      }
      function dropRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true, true) : [];
      }
      function dropWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), true) : [];
      }
      function fill(array, value, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (start && typeof start != "number" && isIterateeCall(array, value, start)) {
          start = 0;
          end = length;
        }
        return baseFill(array, value, start, end);
      }
      function findIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index);
      }
      function findLastIndex(array, predicate, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length - 1;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = fromIndex < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return baseFindIndex(array, getIteratee(predicate, 3), index, true);
      }
      function flatten(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, 1) : [];
      }
      function flattenDeep(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function flattenDepth(array, depth) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(array, depth);
      }
      function fromPairs(pairs) {
        var index = -1, length = pairs == null ? 0 : pairs.length, result2 = {};
        while (++index < length) {
          var pair = pairs[index];
          result2[pair[0]] = pair[1];
        }
        return result2;
      }
      function head(array) {
        return array && array.length ? array[0] : undefined$1;
      }
      function indexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = fromIndex == null ? 0 : toInteger(fromIndex);
        if (index < 0) {
          index = nativeMax(length + index, 0);
        }
        return baseIndexOf(array, value, index);
      }
      function initial(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 0, -1) : [];
      }
      var intersection = baseRest(function(arrays) {
        var mapped = arrayMap(arrays, castArrayLikeObject);
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped) : [];
      });
      var intersectionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        if (iteratee2 === last(mapped)) {
          iteratee2 = undefined$1;
        } else {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, getIteratee(iteratee2, 2)) : [];
      });
      var intersectionWith = baseRest(function(arrays) {
        var comparator = last(arrays), mapped = arrayMap(arrays, castArrayLikeObject);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        if (comparator) {
          mapped.pop();
        }
        return mapped.length && mapped[0] === arrays[0] ? baseIntersection(mapped, undefined$1, comparator) : [];
      });
      function join(array, separator) {
        return array == null ? "" : nativeJoin.call(array, separator);
      }
      function last(array) {
        var length = array == null ? 0 : array.length;
        return length ? array[length - 1] : undefined$1;
      }
      function lastIndexOf(array, value, fromIndex) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return -1;
        }
        var index = length;
        if (fromIndex !== undefined$1) {
          index = toInteger(fromIndex);
          index = index < 0 ? nativeMax(length + index, 0) : nativeMin(index, length - 1);
        }
        return value === value ? strictLastIndexOf(array, value, index) : baseFindIndex(array, baseIsNaN, index, true);
      }
      function nth(array, n2) {
        return array && array.length ? baseNth(array, toInteger(n2)) : undefined$1;
      }
      var pull = baseRest(pullAll);
      function pullAll(array, values2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2) : array;
      }
      function pullAllBy(array, values2, iteratee2) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, getIteratee(iteratee2, 2)) : array;
      }
      function pullAllWith(array, values2, comparator) {
        return array && array.length && values2 && values2.length ? basePullAll(array, values2, undefined$1, comparator) : array;
      }
      var pullAt = flatRest(function(array, indexes) {
        var length = array == null ? 0 : array.length, result2 = baseAt(array, indexes);
        basePullAt(array, arrayMap(indexes, function(index) {
          return isIndex(index, length) ? +index : index;
        }).sort(compareAscending));
        return result2;
      });
      function remove(array, predicate) {
        var result2 = [];
        if (!(array && array.length)) {
          return result2;
        }
        var index = -1, indexes = [], length = array.length;
        predicate = getIteratee(predicate, 3);
        while (++index < length) {
          var value = array[index];
          if (predicate(value, index, array)) {
            result2.push(value);
            indexes.push(index);
          }
        }
        basePullAt(array, indexes);
        return result2;
      }
      function reverse(array) {
        return array == null ? array : nativeReverse.call(array);
      }
      function slice(array, start, end) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        if (end && typeof end != "number" && isIterateeCall(array, start, end)) {
          start = 0;
          end = length;
        } else {
          start = start == null ? 0 : toInteger(start);
          end = end === undefined$1 ? length : toInteger(end);
        }
        return baseSlice(array, start, end);
      }
      function sortedIndex(array, value) {
        return baseSortedIndex(array, value);
      }
      function sortedIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2));
      }
      function sortedIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value);
          if (index < length && eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedLastIndex(array, value) {
        return baseSortedIndex(array, value, true);
      }
      function sortedLastIndexBy(array, value, iteratee2) {
        return baseSortedIndexBy(array, value, getIteratee(iteratee2, 2), true);
      }
      function sortedLastIndexOf(array, value) {
        var length = array == null ? 0 : array.length;
        if (length) {
          var index = baseSortedIndex(array, value, true) - 1;
          if (eq(array[index], value)) {
            return index;
          }
        }
        return -1;
      }
      function sortedUniq(array) {
        return array && array.length ? baseSortedUniq(array) : [];
      }
      function sortedUniqBy(array, iteratee2) {
        return array && array.length ? baseSortedUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function tail(array) {
        var length = array == null ? 0 : array.length;
        return length ? baseSlice(array, 1, length) : [];
      }
      function take(array, n2, guard) {
        if (!(array && array.length)) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        return baseSlice(array, 0, n2 < 0 ? 0 : n2);
      }
      function takeRight(array, n2, guard) {
        var length = array == null ? 0 : array.length;
        if (!length) {
          return [];
        }
        n2 = guard || n2 === undefined$1 ? 1 : toInteger(n2);
        n2 = length - n2;
        return baseSlice(array, n2 < 0 ? 0 : n2, length);
      }
      function takeRightWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3), false, true) : [];
      }
      function takeWhile(array, predicate) {
        return array && array.length ? baseWhile(array, getIteratee(predicate, 3)) : [];
      }
      var union = baseRest(function(arrays) {
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true));
      });
      var unionBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), getIteratee(iteratee2, 2));
      });
      var unionWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseUniq(baseFlatten(arrays, 1, isArrayLikeObject, true), undefined$1, comparator);
      });
      function uniq(array) {
        return array && array.length ? baseUniq(array) : [];
      }
      function uniqBy(array, iteratee2) {
        return array && array.length ? baseUniq(array, getIteratee(iteratee2, 2)) : [];
      }
      function uniqWith(array, comparator) {
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return array && array.length ? baseUniq(array, undefined$1, comparator) : [];
      }
      function unzip(array) {
        if (!(array && array.length)) {
          return [];
        }
        var length = 0;
        array = arrayFilter(array, function(group) {
          if (isArrayLikeObject(group)) {
            length = nativeMax(group.length, length);
            return true;
          }
        });
        return baseTimes(length, function(index) {
          return arrayMap(array, baseProperty(index));
        });
      }
      function unzipWith(array, iteratee2) {
        if (!(array && array.length)) {
          return [];
        }
        var result2 = unzip(array);
        if (iteratee2 == null) {
          return result2;
        }
        return arrayMap(result2, function(group) {
          return apply(iteratee2, undefined$1, group);
        });
      }
      var without = baseRest(function(array, values2) {
        return isArrayLikeObject(array) ? baseDifference(array, values2) : [];
      });
      var xor = baseRest(function(arrays) {
        return baseXor(arrayFilter(arrays, isArrayLikeObject));
      });
      var xorBy = baseRest(function(arrays) {
        var iteratee2 = last(arrays);
        if (isArrayLikeObject(iteratee2)) {
          iteratee2 = undefined$1;
        }
        return baseXor(arrayFilter(arrays, isArrayLikeObject), getIteratee(iteratee2, 2));
      });
      var xorWith = baseRest(function(arrays) {
        var comparator = last(arrays);
        comparator = typeof comparator == "function" ? comparator : undefined$1;
        return baseXor(arrayFilter(arrays, isArrayLikeObject), undefined$1, comparator);
      });
      var zip = baseRest(unzip);
      function zipObject(props, values2) {
        return baseZipObject(props || [], values2 || [], assignValue);
      }
      function zipObjectDeep(props, values2) {
        return baseZipObject(props || [], values2 || [], baseSet);
      }
      var zipWith = baseRest(function(arrays) {
        var length = arrays.length, iteratee2 = length > 1 ? arrays[length - 1] : undefined$1;
        iteratee2 = typeof iteratee2 == "function" ? (arrays.pop(), iteratee2) : undefined$1;
        return unzipWith(arrays, iteratee2);
      });
      function chain(value) {
        var result2 = lodash2(value);
        result2.__chain__ = true;
        return result2;
      }
      function tap(value, interceptor) {
        interceptor(value);
        return value;
      }
      function thru(value, interceptor) {
        return interceptor(value);
      }
      var wrapperAt = flatRest(function(paths) {
        var length = paths.length, start = length ? paths[0] : 0, value = this.__wrapped__, interceptor = function(object) {
          return baseAt(object, paths);
        };
        if (length > 1 || this.__actions__.length || !(value instanceof LazyWrapper) || !isIndex(start)) {
          return this.thru(interceptor);
        }
        value = value.slice(start, +start + (length ? 1 : 0));
        value.__actions__.push({
          "func": thru,
          "args": [interceptor],
          "thisArg": undefined$1
        });
        return new LodashWrapper(value, this.__chain__).thru(function(array) {
          if (length && !array.length) {
            array.push(undefined$1);
          }
          return array;
        });
      });
      function wrapperChain() {
        return chain(this);
      }
      function wrapperCommit() {
        return new LodashWrapper(this.value(), this.__chain__);
      }
      function wrapperNext() {
        if (this.__values__ === undefined$1) {
          this.__values__ = toArray(this.value());
        }
        var done = this.__index__ >= this.__values__.length, value = done ? undefined$1 : this.__values__[this.__index__++];
        return { "done": done, "value": value };
      }
      function wrapperToIterator() {
        return this;
      }
      function wrapperPlant(value) {
        var result2, parent2 = this;
        while (parent2 instanceof baseLodash) {
          var clone2 = wrapperClone(parent2);
          clone2.__index__ = 0;
          clone2.__values__ = undefined$1;
          if (result2) {
            previous.__wrapped__ = clone2;
          } else {
            result2 = clone2;
          }
          var previous = clone2;
          parent2 = parent2.__wrapped__;
        }
        previous.__wrapped__ = value;
        return result2;
      }
      function wrapperReverse() {
        var value = this.__wrapped__;
        if (value instanceof LazyWrapper) {
          var wrapped = value;
          if (this.__actions__.length) {
            wrapped = new LazyWrapper(this);
          }
          wrapped = wrapped.reverse();
          wrapped.__actions__.push({
            "func": thru,
            "args": [reverse],
            "thisArg": undefined$1
          });
          return new LodashWrapper(wrapped, this.__chain__);
        }
        return this.thru(reverse);
      }
      function wrapperValue() {
        return baseWrapperValue(this.__wrapped__, this.__actions__);
      }
      var countBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          ++result2[key];
        } else {
          baseAssignValue(result2, key, 1);
        }
      });
      function every(collection, predicate, guard) {
        var func = isArray(collection) ? arrayEvery : baseEvery;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      function filter(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, getIteratee(predicate, 3));
      }
      var find = createFind(findIndex);
      var findLast = createFind(findLastIndex);
      function flatMap(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), 1);
      }
      function flatMapDeep(collection, iteratee2) {
        return baseFlatten(map(collection, iteratee2), INFINITY);
      }
      function flatMapDepth(collection, iteratee2, depth) {
        depth = depth === undefined$1 ? 1 : toInteger(depth);
        return baseFlatten(map(collection, iteratee2), depth);
      }
      function forEach(collection, iteratee2) {
        var func = isArray(collection) ? arrayEach : baseEach;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function forEachRight(collection, iteratee2) {
        var func = isArray(collection) ? arrayEachRight : baseEachRight;
        return func(collection, getIteratee(iteratee2, 3));
      }
      var groupBy = createAggregator(function(result2, value, key) {
        if (hasOwnProperty2.call(result2, key)) {
          result2[key].push(value);
        } else {
          baseAssignValue(result2, key, [value]);
        }
      });
      function includes(collection, value, fromIndex, guard) {
        collection = isArrayLike(collection) ? collection : values(collection);
        fromIndex = fromIndex && !guard ? toInteger(fromIndex) : 0;
        var length = collection.length;
        if (fromIndex < 0) {
          fromIndex = nativeMax(length + fromIndex, 0);
        }
        return isString(collection) ? fromIndex <= length && collection.indexOf(value, fromIndex) > -1 : !!length && baseIndexOf(collection, value, fromIndex) > -1;
      }
      var invokeMap = baseRest(function(collection, path, args) {
        var index = -1, isFunc = typeof path == "function", result2 = isArrayLike(collection) ? Array2(collection.length) : [];
        baseEach(collection, function(value) {
          result2[++index] = isFunc ? apply(path, value, args) : baseInvoke(value, path, args);
        });
        return result2;
      });
      var keyBy = createAggregator(function(result2, value, key) {
        baseAssignValue(result2, key, value);
      });
      function map(collection, iteratee2) {
        var func = isArray(collection) ? arrayMap : baseMap;
        return func(collection, getIteratee(iteratee2, 3));
      }
      function orderBy(collection, iteratees, orders, guard) {
        if (collection == null) {
          return [];
        }
        if (!isArray(iteratees)) {
          iteratees = iteratees == null ? [] : [iteratees];
        }
        orders = guard ? undefined$1 : orders;
        if (!isArray(orders)) {
          orders = orders == null ? [] : [orders];
        }
        return baseOrderBy(collection, iteratees, orders);
      }
      var partition = createAggregator(function(result2, value, key) {
        result2[key ? 0 : 1].push(value);
      }, function() {
        return [[], []];
      });
      function reduce(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduce : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEach);
      }
      function reduceRight(collection, iteratee2, accumulator) {
        var func = isArray(collection) ? arrayReduceRight : baseReduce, initAccum = arguments.length < 3;
        return func(collection, getIteratee(iteratee2, 4), accumulator, initAccum, baseEachRight);
      }
      function reject(collection, predicate) {
        var func = isArray(collection) ? arrayFilter : baseFilter;
        return func(collection, negate(getIteratee(predicate, 3)));
      }
      function sample(collection) {
        var func = isArray(collection) ? arraySample : baseSample;
        return func(collection);
      }
      function sampleSize(collection, n2, guard) {
        if (guard ? isIterateeCall(collection, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        var func = isArray(collection) ? arraySampleSize : baseSampleSize;
        return func(collection, n2);
      }
      function shuffle(collection) {
        var func = isArray(collection) ? arrayShuffle : baseShuffle;
        return func(collection);
      }
      function size(collection) {
        if (collection == null) {
          return 0;
        }
        if (isArrayLike(collection)) {
          return isString(collection) ? stringSize(collection) : collection.length;
        }
        var tag = getTag(collection);
        if (tag == mapTag || tag == setTag) {
          return collection.size;
        }
        return baseKeys(collection).length;
      }
      function some(collection, predicate, guard) {
        var func = isArray(collection) ? arraySome : baseSome;
        if (guard && isIterateeCall(collection, predicate, guard)) {
          predicate = undefined$1;
        }
        return func(collection, getIteratee(predicate, 3));
      }
      var sortBy = baseRest(function(collection, iteratees) {
        if (collection == null) {
          return [];
        }
        var length = iteratees.length;
        if (length > 1 && isIterateeCall(collection, iteratees[0], iteratees[1])) {
          iteratees = [];
        } else if (length > 2 && isIterateeCall(iteratees[0], iteratees[1], iteratees[2])) {
          iteratees = [iteratees[0]];
        }
        return baseOrderBy(collection, baseFlatten(iteratees, 1), []);
      });
      var now = ctxNow || function() {
        return root.Date.now();
      };
      function after(n2, func) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 < 1) {
            return func.apply(this, arguments);
          }
        };
      }
      function ary(func, n2, guard) {
        n2 = guard ? undefined$1 : n2;
        n2 = func && n2 == null ? func.length : n2;
        return createWrap(func, WRAP_ARY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, n2);
      }
      function before(n2, func) {
        var result2;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        n2 = toInteger(n2);
        return function() {
          if (--n2 > 0) {
            result2 = func.apply(this, arguments);
          }
          if (n2 <= 1) {
            func = undefined$1;
          }
          return result2;
        };
      }
      var bind = baseRest(function(func, thisArg, partials) {
        var bitmask = WRAP_BIND_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bind));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(func, bitmask, thisArg, partials, holders);
      });
      var bindKey = baseRest(function(object, key, partials) {
        var bitmask = WRAP_BIND_FLAG | WRAP_BIND_KEY_FLAG;
        if (partials.length) {
          var holders = replaceHolders(partials, getHolder(bindKey));
          bitmask |= WRAP_PARTIAL_FLAG;
        }
        return createWrap(key, bitmask, object, partials, holders);
      });
      function curry(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curry.placeholder;
        return result2;
      }
      function curryRight(func, arity, guard) {
        arity = guard ? undefined$1 : arity;
        var result2 = createWrap(func, WRAP_CURRY_RIGHT_FLAG, undefined$1, undefined$1, undefined$1, undefined$1, undefined$1, arity);
        result2.placeholder = curryRight.placeholder;
        return result2;
      }
      function debounce(func, wait, options2) {
        var lastArgs, lastThis, maxWait, result2, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options2)) {
          leading = !!options2.leading;
          maxing = "maxWait" in options2;
          maxWait = maxing ? nativeMax(toNumber(options2.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options2 ? !!options2.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = undefined$1;
          lastInvokeTime = time;
          result2 = func.apply(thisArg, args);
          return result2;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result2;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, timeWaiting = wait - timeSinceLastCall;
          return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === undefined$1 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = undefined$1;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = undefined$1;
          return result2;
        }
        function cancel() {
          if (timerId !== undefined$1) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = undefined$1;
        }
        function flush() {
          return timerId === undefined$1 ? result2 : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === undefined$1) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              clearTimeout(timerId);
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === undefined$1) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result2;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      var defer = baseRest(function(func, args) {
        return baseDelay(func, 1, args);
      });
      var delay = baseRest(function(func, wait, args) {
        return baseDelay(func, toNumber(wait) || 0, args);
      });
      function flip(func) {
        return createWrap(func, WRAP_FLIP_FLAG);
      }
      function memoize(func, resolver) {
        if (typeof func != "function" || resolver != null && typeof resolver != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        var memoized = function() {
          var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache2 = memoized.cache;
          if (cache2.has(key)) {
            return cache2.get(key);
          }
          var result2 = func.apply(this, args);
          memoized.cache = cache2.set(key, result2) || cache2;
          return result2;
        };
        memoized.cache = new (memoize.Cache || MapCache)();
        return memoized;
      }
      memoize.Cache = MapCache;
      function negate(predicate) {
        if (typeof predicate != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        return function() {
          var args = arguments;
          switch (args.length) {
            case 0:
              return !predicate.call(this);
            case 1:
              return !predicate.call(this, args[0]);
            case 2:
              return !predicate.call(this, args[0], args[1]);
            case 3:
              return !predicate.call(this, args[0], args[1], args[2]);
          }
          return !predicate.apply(this, args);
        };
      }
      function once(func) {
        return before(2, func);
      }
      var overArgs = castRest(function(func, transforms) {
        transforms = transforms.length == 1 && isArray(transforms[0]) ? arrayMap(transforms[0], baseUnary(getIteratee())) : arrayMap(baseFlatten(transforms, 1), baseUnary(getIteratee()));
        var funcsLength = transforms.length;
        return baseRest(function(args) {
          var index = -1, length = nativeMin(args.length, funcsLength);
          while (++index < length) {
            args[index] = transforms[index].call(this, args[index]);
          }
          return apply(func, this, args);
        });
      });
      var partial = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partial));
        return createWrap(func, WRAP_PARTIAL_FLAG, undefined$1, partials, holders);
      });
      var partialRight = baseRest(function(func, partials) {
        var holders = replaceHolders(partials, getHolder(partialRight));
        return createWrap(func, WRAP_PARTIAL_RIGHT_FLAG, undefined$1, partials, holders);
      });
      var rearg = flatRest(function(func, indexes) {
        return createWrap(func, WRAP_REARG_FLAG, undefined$1, undefined$1, undefined$1, indexes);
      });
      function rest(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start === undefined$1 ? start : toInteger(start);
        return baseRest(func, start);
      }
      function spread(func, start) {
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        start = start == null ? 0 : nativeMax(toInteger(start), 0);
        return baseRest(function(args) {
          var array = args[start], otherArgs = castSlice(args, 0, start);
          if (array) {
            arrayPush(otherArgs, array);
          }
          return apply(func, this, otherArgs);
        });
      }
      function throttle(func, wait, options2) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError2(FUNC_ERROR_TEXT);
        }
        if (isObject(options2)) {
          leading = "leading" in options2 ? !!options2.leading : leading;
          trailing = "trailing" in options2 ? !!options2.trailing : trailing;
        }
        return debounce(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function unary(func) {
        return ary(func, 1);
      }
      function wrap(value, wrapper) {
        return partial(castFunction(wrapper), value);
      }
      function castArray() {
        if (!arguments.length) {
          return [];
        }
        var value = arguments[0];
        return isArray(value) ? value : [value];
      }
      function clone(value) {
        return baseClone(value, CLONE_SYMBOLS_FLAG);
      }
      function cloneWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_SYMBOLS_FLAG, customizer);
      }
      function cloneDeep(value) {
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
      }
      function cloneDeepWith(value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG, customizer);
      }
      function conformsTo(object, source) {
        return source == null || baseConformsTo(object, source, keys(source));
      }
      function eq(value, other) {
        return value === other || value !== value && other !== other;
      }
      var gt = createRelationalOperation(baseGt);
      var gte = createRelationalOperation(function(value, other) {
        return value >= other;
      });
      var isArguments = baseIsArguments(function() {
        return arguments;
      }()) ? baseIsArguments : function(value) {
        return isObjectLike(value) && hasOwnProperty2.call(value, "callee") && !propertyIsEnumerable.call(value, "callee");
      };
      var isArray = Array2.isArray;
      var isArrayBuffer = nodeIsArrayBuffer ? baseUnary(nodeIsArrayBuffer) : baseIsArrayBuffer;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isBoolean(value) {
        return value === true || value === false || isObjectLike(value) && baseGetTag(value) == boolTag;
      }
      var isBuffer = nativeIsBuffer || stubFalse;
      var isDate = nodeIsDate ? baseUnary(nodeIsDate) : baseIsDate;
      function isElement(value) {
        return isObjectLike(value) && value.nodeType === 1 && !isPlainObject(value);
      }
      function isEmpty(value) {
        if (value == null) {
          return true;
        }
        if (isArrayLike(value) && (isArray(value) || typeof value == "string" || typeof value.splice == "function" || isBuffer(value) || isTypedArray(value) || isArguments(value))) {
          return !value.length;
        }
        var tag = getTag(value);
        if (tag == mapTag || tag == setTag) {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !baseKeys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty2.call(value, key)) {
            return false;
          }
        }
        return true;
      }
      function isEqual(value, other) {
        return baseIsEqual(value, other);
      }
      function isEqualWith(value, other, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        var result2 = customizer ? customizer(value, other) : undefined$1;
        return result2 === undefined$1 ? baseIsEqual(value, other, undefined$1, customizer) : !!result2;
      }
      function isError(value) {
        if (!isObjectLike(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == errorTag || tag == domExcTag || typeof value.message == "string" && typeof value.name == "string" && !isPlainObject(value);
      }
      function isFinite(value) {
        return typeof value == "number" && nativeIsFinite(value);
      }
      function isFunction(value) {
        if (!isObject(value)) {
          return false;
        }
        var tag = baseGetTag(value);
        return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
      }
      function isInteger(value) {
        return typeof value == "number" && value == toInteger(value);
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return value != null && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return value != null && typeof value == "object";
      }
      var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;
      function isMatch(object, source) {
        return object === source || baseIsMatch(object, source, getMatchData(source));
      }
      function isMatchWith(object, source, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return baseIsMatch(object, source, getMatchData(source), customizer);
      }
      function isNaN2(value) {
        return isNumber(value) && value != +value;
      }
      function isNative(value) {
        if (isMaskable(value)) {
          throw new Error2(CORE_ERROR_TEXT);
        }
        return baseIsNative(value);
      }
      function isNull(value) {
        return value === null;
      }
      function isNil(value) {
        return value == null;
      }
      function isNumber(value) {
        return typeof value == "number" || isObjectLike(value) && baseGetTag(value) == numberTag;
      }
      function isPlainObject(value) {
        if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
          return false;
        }
        var proto = getPrototype(value);
        if (proto === null) {
          return true;
        }
        var Ctor = hasOwnProperty2.call(proto, "constructor") && proto.constructor;
        return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
      }
      var isRegExp = nodeIsRegExp ? baseUnary(nodeIsRegExp) : baseIsRegExp;
      function isSafeInteger(value) {
        return isInteger(value) && value >= -MAX_SAFE_INTEGER && value <= MAX_SAFE_INTEGER;
      }
      var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;
      function isString(value) {
        return typeof value == "string" || !isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag;
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && baseGetTag(value) == symbolTag;
      }
      var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;
      function isUndefined(value) {
        return value === undefined$1;
      }
      function isWeakMap(value) {
        return isObjectLike(value) && getTag(value) == weakMapTag;
      }
      function isWeakSet(value) {
        return isObjectLike(value) && baseGetTag(value) == weakSetTag;
      }
      var lt = createRelationalOperation(baseLt);
      var lte = createRelationalOperation(function(value, other) {
        return value <= other;
      });
      function toArray(value) {
        if (!value) {
          return [];
        }
        if (isArrayLike(value)) {
          return isString(value) ? stringToArray(value) : copyArray(value);
        }
        if (symIterator && value[symIterator]) {
          return iteratorToArray(value[symIterator]());
        }
        var tag = getTag(value), func = tag == mapTag ? mapToArray : tag == setTag ? setToArray : values;
        return func(value);
      }
      function toFinite(value) {
        if (!value) {
          return value === 0 ? value : 0;
        }
        value = toNumber(value);
        if (value === INFINITY || value === -INFINITY) {
          var sign = value < 0 ? -1 : 1;
          return sign * MAX_INTEGER;
        }
        return value === value ? value : 0;
      }
      function toInteger(value) {
        var result2 = toFinite(value), remainder = result2 % 1;
        return result2 === result2 ? remainder ? result2 - remainder : result2 : 0;
      }
      function toLength(value) {
        return value ? baseClamp(toInteger(value), 0, MAX_ARRAY_LENGTH) : 0;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = baseTrim(value);
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      function toPlainObject(value) {
        return copyObject(value, keysIn(value));
      }
      function toSafeInteger(value) {
        return value ? baseClamp(toInteger(value), -MAX_SAFE_INTEGER, MAX_SAFE_INTEGER) : value === 0 ? value : 0;
      }
      function toString(value) {
        return value == null ? "" : baseToString(value);
      }
      var assign = createAssigner(function(object, source) {
        if (isPrototype(source) || isArrayLike(source)) {
          copyObject(source, keys(source), object);
          return;
        }
        for (var key in source) {
          if (hasOwnProperty2.call(source, key)) {
            assignValue(object, key, source[key]);
          }
        }
      });
      var assignIn = createAssigner(function(object, source) {
        copyObject(source, keysIn(source), object);
      });
      var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keysIn(source), object, customizer);
      });
      var assignWith = createAssigner(function(object, source, srcIndex, customizer) {
        copyObject(source, keys(source), object, customizer);
      });
      var at = flatRest(baseAt);
      function create2(prototype, properties) {
        var result2 = baseCreate(prototype);
        return properties == null ? result2 : baseAssign(result2, properties);
      }
      var defaults = baseRest(function(object, sources) {
        object = Object2(object);
        var index = -1;
        var length = sources.length;
        var guard = length > 2 ? sources[2] : undefined$1;
        if (guard && isIterateeCall(sources[0], sources[1], guard)) {
          length = 1;
        }
        while (++index < length) {
          var source = sources[index];
          var props = keysIn(source);
          var propsIndex = -1;
          var propsLength = props.length;
          while (++propsIndex < propsLength) {
            var key = props[propsIndex];
            var value = object[key];
            if (value === undefined$1 || eq(value, objectProto[key]) && !hasOwnProperty2.call(object, key)) {
              object[key] = source[key];
            }
          }
        }
        return object;
      });
      var defaultsDeep = baseRest(function(args) {
        args.push(undefined$1, customDefaultsMerge);
        return apply(mergeWith, undefined$1, args);
      });
      function findKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwn);
      }
      function findLastKey(object, predicate) {
        return baseFindKey(object, getIteratee(predicate, 3), baseForOwnRight);
      }
      function forIn(object, iteratee2) {
        return object == null ? object : baseFor(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forInRight(object, iteratee2) {
        return object == null ? object : baseForRight(object, getIteratee(iteratee2, 3), keysIn);
      }
      function forOwn(object, iteratee2) {
        return object && baseForOwn(object, getIteratee(iteratee2, 3));
      }
      function forOwnRight(object, iteratee2) {
        return object && baseForOwnRight(object, getIteratee(iteratee2, 3));
      }
      function functions(object) {
        return object == null ? [] : baseFunctions(object, keys(object));
      }
      function functionsIn(object) {
        return object == null ? [] : baseFunctions(object, keysIn(object));
      }
      function get(object, path, defaultValue) {
        var result2 = object == null ? undefined$1 : baseGet(object, path);
        return result2 === undefined$1 ? defaultValue : result2;
      }
      function has(object, path) {
        return object != null && hasPath(object, path, baseHas);
      }
      function hasIn(object, path) {
        return object != null && hasPath(object, path, baseHasIn);
      }
      var invert = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        result2[value] = key;
      }, constant(identity));
      var invertBy = createInverter(function(result2, value, key) {
        if (value != null && typeof value.toString != "function") {
          value = nativeObjectToString.call(value);
        }
        if (hasOwnProperty2.call(result2, value)) {
          result2[value].push(key);
        } else {
          result2[value] = [key];
        }
      }, getIteratee);
      var invoke = baseRest(baseInvoke);
      function keys(object) {
        return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
      }
      function keysIn(object) {
        return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
      }
      function mapKeys(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, iteratee2(value, key, object2), value);
        });
        return result2;
      }
      function mapValues(object, iteratee2) {
        var result2 = {};
        iteratee2 = getIteratee(iteratee2, 3);
        baseForOwn(object, function(value, key, object2) {
          baseAssignValue(result2, key, iteratee2(value, key, object2));
        });
        return result2;
      }
      var merge = createAssigner(function(object, source, srcIndex) {
        baseMerge(object, source, srcIndex);
      });
      var mergeWith = createAssigner(function(object, source, srcIndex, customizer) {
        baseMerge(object, source, srcIndex, customizer);
      });
      var omit = flatRest(function(object, paths) {
        var result2 = {};
        if (object == null) {
          return result2;
        }
        var isDeep = false;
        paths = arrayMap(paths, function(path) {
          path = castPath(path, object);
          isDeep || (isDeep = path.length > 1);
          return path;
        });
        copyObject(object, getAllKeysIn(object), result2);
        if (isDeep) {
          result2 = baseClone(result2, CLONE_DEEP_FLAG | CLONE_FLAT_FLAG | CLONE_SYMBOLS_FLAG, customOmitClone);
        }
        var length = paths.length;
        while (length--) {
          baseUnset(result2, paths[length]);
        }
        return result2;
      });
      function omitBy(object, predicate) {
        return pickBy(object, negate(getIteratee(predicate)));
      }
      var pick = flatRest(function(object, paths) {
        return object == null ? {} : basePick(object, paths);
      });
      function pickBy(object, predicate) {
        if (object == null) {
          return {};
        }
        var props = arrayMap(getAllKeysIn(object), function(prop) {
          return [prop];
        });
        predicate = getIteratee(predicate);
        return basePickBy(object, props, function(value, path) {
          return predicate(value, path[0]);
        });
      }
      function result(object, path, defaultValue) {
        path = castPath(path, object);
        var index = -1, length = path.length;
        if (!length) {
          length = 1;
          object = undefined$1;
        }
        while (++index < length) {
          var value = object == null ? undefined$1 : object[toKey(path[index])];
          if (value === undefined$1) {
            index = length;
            value = defaultValue;
          }
          object = isFunction(value) ? value.call(object) : value;
        }
        return object;
      }
      function set(object, path, value) {
        return object == null ? object : baseSet(object, path, value);
      }
      function setWith(object, path, value, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseSet(object, path, value, customizer);
      }
      var toPairs = createToPairs(keys);
      var toPairsIn = createToPairs(keysIn);
      function transform(object, iteratee2, accumulator) {
        var isArr = isArray(object), isArrLike = isArr || isBuffer(object) || isTypedArray(object);
        iteratee2 = getIteratee(iteratee2, 4);
        if (accumulator == null) {
          var Ctor = object && object.constructor;
          if (isArrLike) {
            accumulator = isArr ? new Ctor() : [];
          } else if (isObject(object)) {
            accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
          } else {
            accumulator = {};
          }
        }
        (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object2) {
          return iteratee2(accumulator, value, index, object2);
        });
        return accumulator;
      }
      function unset(object, path) {
        return object == null ? true : baseUnset(object, path);
      }
      function update(object, path, updater) {
        return object == null ? object : baseUpdate(object, path, castFunction(updater));
      }
      function updateWith(object, path, updater, customizer) {
        customizer = typeof customizer == "function" ? customizer : undefined$1;
        return object == null ? object : baseUpdate(object, path, castFunction(updater), customizer);
      }
      function values(object) {
        return object == null ? [] : baseValues(object, keys(object));
      }
      function valuesIn(object) {
        return object == null ? [] : baseValues(object, keysIn(object));
      }
      function clamp2(number, lower, upper) {
        if (upper === undefined$1) {
          upper = lower;
          lower = undefined$1;
        }
        if (upper !== undefined$1) {
          upper = toNumber(upper);
          upper = upper === upper ? upper : 0;
        }
        if (lower !== undefined$1) {
          lower = toNumber(lower);
          lower = lower === lower ? lower : 0;
        }
        return baseClamp(toNumber(number), lower, upper);
      }
      function inRange(number, start, end) {
        start = toFinite(start);
        if (end === undefined$1) {
          end = start;
          start = 0;
        } else {
          end = toFinite(end);
        }
        number = toNumber(number);
        return baseInRange(number, start, end);
      }
      function random(lower, upper, floating) {
        if (floating && typeof floating != "boolean" && isIterateeCall(lower, upper, floating)) {
          upper = floating = undefined$1;
        }
        if (floating === undefined$1) {
          if (typeof upper == "boolean") {
            floating = upper;
            upper = undefined$1;
          } else if (typeof lower == "boolean") {
            floating = lower;
            lower = undefined$1;
          }
        }
        if (lower === undefined$1 && upper === undefined$1) {
          lower = 0;
          upper = 1;
        } else {
          lower = toFinite(lower);
          if (upper === undefined$1) {
            upper = lower;
            lower = 0;
          } else {
            upper = toFinite(upper);
          }
        }
        if (lower > upper) {
          var temp = lower;
          lower = upper;
          upper = temp;
        }
        if (floating || lower % 1 || upper % 1) {
          var rand = nativeRandom();
          return nativeMin(lower + rand * (upper - lower + freeParseFloat("1e-" + ((rand + "").length - 1))), upper);
        }
        return baseRandom(lower, upper);
      }
      var camelCase = createCompounder(function(result2, word, index) {
        word = word.toLowerCase();
        return result2 + (index ? capitalize(word) : word);
      });
      function capitalize(string) {
        return upperFirst(toString(string).toLowerCase());
      }
      function deburr(string) {
        string = toString(string);
        return string && string.replace(reLatin, deburrLetter).replace(reComboMark, "");
      }
      function endsWith(string, target, position) {
        string = toString(string);
        target = baseToString(target);
        var length = string.length;
        position = position === undefined$1 ? length : baseClamp(toInteger(position), 0, length);
        var end = position;
        position -= target.length;
        return position >= 0 && string.slice(position, end) == target;
      }
      function escape2(string) {
        string = toString(string);
        return string && reHasUnescapedHtml.test(string) ? string.replace(reUnescapedHtml, escapeHtmlChar) : string;
      }
      function escapeRegExp(string) {
        string = toString(string);
        return string && reHasRegExpChar.test(string) ? string.replace(reRegExpChar, "\\$&") : string;
      }
      var kebabCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "-" : "") + word.toLowerCase();
      });
      var lowerCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toLowerCase();
      });
      var lowerFirst = createCaseFirst("toLowerCase");
      function pad(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        if (!length || strLength >= length) {
          return string;
        }
        var mid = (length - strLength) / 2;
        return createPadding(nativeFloor(mid), chars) + string + createPadding(nativeCeil(mid), chars);
      }
      function padEnd(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? string + createPadding(length - strLength, chars) : string;
      }
      function padStart(string, length, chars) {
        string = toString(string);
        length = toInteger(length);
        var strLength = length ? stringSize(string) : 0;
        return length && strLength < length ? createPadding(length - strLength, chars) + string : string;
      }
      function parseInt2(string, radix, guard) {
        if (guard || radix == null) {
          radix = 0;
        } else if (radix) {
          radix = +radix;
        }
        return nativeParseInt(toString(string).replace(reTrimStart, ""), radix || 0);
      }
      function repeat(string, n2, guard) {
        if (guard ? isIterateeCall(string, n2, guard) : n2 === undefined$1) {
          n2 = 1;
        } else {
          n2 = toInteger(n2);
        }
        return baseRepeat(toString(string), n2);
      }
      function replace() {
        var args = arguments, string = toString(args[0]);
        return args.length < 3 ? string : string.replace(args[1], args[2]);
      }
      var snakeCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? "_" : "") + word.toLowerCase();
      });
      function split(string, separator, limit) {
        if (limit && typeof limit != "number" && isIterateeCall(string, separator, limit)) {
          separator = limit = undefined$1;
        }
        limit = limit === undefined$1 ? MAX_ARRAY_LENGTH : limit >>> 0;
        if (!limit) {
          return [];
        }
        string = toString(string);
        if (string && (typeof separator == "string" || separator != null && !isRegExp(separator))) {
          separator = baseToString(separator);
          if (!separator && hasUnicode(string)) {
            return castSlice(stringToArray(string), 0, limit);
          }
        }
        return string.split(separator, limit);
      }
      var startCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + upperFirst(word);
      });
      function startsWith(string, target, position) {
        string = toString(string);
        position = position == null ? 0 : baseClamp(toInteger(position), 0, string.length);
        target = baseToString(target);
        return string.slice(position, position + target.length) == target;
      }
      function template(string, options2, guard) {
        var settings = lodash2.templateSettings;
        if (guard && isIterateeCall(string, options2, guard)) {
          options2 = undefined$1;
        }
        string = toString(string);
        options2 = assignInWith({}, options2, settings, customDefaultsAssignIn);
        var imports = assignInWith({}, options2.imports, settings.imports, customDefaultsAssignIn), importsKeys = keys(imports), importsValues = baseValues(imports, importsKeys);
        var isEscaping, isEvaluating, index = 0, interpolate = options2.interpolate || reNoMatch, source = "__p += '";
        var reDelimiters = RegExp2(
          (options2.escape || reNoMatch).source + "|" + interpolate.source + "|" + (interpolate === reInterpolate ? reEsTemplate : reNoMatch).source + "|" + (options2.evaluate || reNoMatch).source + "|$",
          "g"
        );
        var sourceURL = "//# sourceURL=" + (hasOwnProperty2.call(options2, "sourceURL") ? (options2.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++templateCounter + "]") + "\n";
        string.replace(reDelimiters, function(match, escapeValue, interpolateValue, esTemplateValue, evaluateValue, offset) {
          interpolateValue || (interpolateValue = esTemplateValue);
          source += string.slice(index, offset).replace(reUnescapedString, escapeStringChar);
          if (escapeValue) {
            isEscaping = true;
            source += "' +\n__e(" + escapeValue + ") +\n'";
          }
          if (evaluateValue) {
            isEvaluating = true;
            source += "';\n" + evaluateValue + ";\n__p += '";
          }
          if (interpolateValue) {
            source += "' +\n((__t = (" + interpolateValue + ")) == null ? '' : __t) +\n'";
          }
          index = offset + match.length;
          return match;
        });
        source += "';\n";
        var variable = hasOwnProperty2.call(options2, "variable") && options2.variable;
        if (!variable) {
          source = "with (obj) {\n" + source + "\n}\n";
        } else if (reForbiddenIdentifierChars.test(variable)) {
          throw new Error2(INVALID_TEMPL_VAR_ERROR_TEXT);
        }
        source = (isEvaluating ? source.replace(reEmptyStringLeading, "") : source).replace(reEmptyStringMiddle, "$1").replace(reEmptyStringTrailing, "$1;");
        source = "function(" + (variable || "obj") + ") {\n" + (variable ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (isEscaping ? ", __e = _.escape" : "") + (isEvaluating ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + source + "return __p\n}";
        var result2 = attempt(function() {
          return Function2(importsKeys, sourceURL + "return " + source).apply(undefined$1, importsValues);
        });
        result2.source = source;
        if (isError(result2)) {
          throw result2;
        }
        return result2;
      }
      function toLower(value) {
        return toString(value).toLowerCase();
      }
      function toUpper(value) {
        return toString(value).toUpperCase();
      }
      function trim(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return baseTrim(string);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), chrSymbols = stringToArray(chars), start = charsStartIndex(strSymbols, chrSymbols), end = charsEndIndex(strSymbols, chrSymbols) + 1;
        return castSlice(strSymbols, start, end).join("");
      }
      function trimEnd(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.slice(0, trimmedEndIndex(string) + 1);
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), end = charsEndIndex(strSymbols, stringToArray(chars)) + 1;
        return castSlice(strSymbols, 0, end).join("");
      }
      function trimStart(string, chars, guard) {
        string = toString(string);
        if (string && (guard || chars === undefined$1)) {
          return string.replace(reTrimStart, "");
        }
        if (!string || !(chars = baseToString(chars))) {
          return string;
        }
        var strSymbols = stringToArray(string), start = charsStartIndex(strSymbols, stringToArray(chars));
        return castSlice(strSymbols, start).join("");
      }
      function truncate(string, options2) {
        var length = DEFAULT_TRUNC_LENGTH, omission = DEFAULT_TRUNC_OMISSION;
        if (isObject(options2)) {
          var separator = "separator" in options2 ? options2.separator : separator;
          length = "length" in options2 ? toInteger(options2.length) : length;
          omission = "omission" in options2 ? baseToString(options2.omission) : omission;
        }
        string = toString(string);
        var strLength = string.length;
        if (hasUnicode(string)) {
          var strSymbols = stringToArray(string);
          strLength = strSymbols.length;
        }
        if (length >= strLength) {
          return string;
        }
        var end = length - stringSize(omission);
        if (end < 1) {
          return omission;
        }
        var result2 = strSymbols ? castSlice(strSymbols, 0, end).join("") : string.slice(0, end);
        if (separator === undefined$1) {
          return result2 + omission;
        }
        if (strSymbols) {
          end += result2.length - end;
        }
        if (isRegExp(separator)) {
          if (string.slice(end).search(separator)) {
            var match, substring = result2;
            if (!separator.global) {
              separator = RegExp2(separator.source, toString(reFlags.exec(separator)) + "g");
            }
            separator.lastIndex = 0;
            while (match = separator.exec(substring)) {
              var newEnd = match.index;
            }
            result2 = result2.slice(0, newEnd === undefined$1 ? end : newEnd);
          }
        } else if (string.indexOf(baseToString(separator), end) != end) {
          var index = result2.lastIndexOf(separator);
          if (index > -1) {
            result2 = result2.slice(0, index);
          }
        }
        return result2 + omission;
      }
      function unescape2(string) {
        string = toString(string);
        return string && reHasEscapedHtml.test(string) ? string.replace(reEscapedHtml, unescapeHtmlChar) : string;
      }
      var upperCase = createCompounder(function(result2, word, index) {
        return result2 + (index ? " " : "") + word.toUpperCase();
      });
      var upperFirst = createCaseFirst("toUpperCase");
      function words(string, pattern, guard) {
        string = toString(string);
        pattern = guard ? undefined$1 : pattern;
        if (pattern === undefined$1) {
          return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
        }
        return string.match(pattern) || [];
      }
      var attempt = baseRest(function(func, args) {
        try {
          return apply(func, undefined$1, args);
        } catch (e) {
          return isError(e) ? e : new Error2(e);
        }
      });
      var bindAll = flatRest(function(object, methodNames) {
        arrayEach(methodNames, function(key) {
          key = toKey(key);
          baseAssignValue(object, key, bind(object[key], object));
        });
        return object;
      });
      function cond(pairs) {
        var length = pairs == null ? 0 : pairs.length, toIteratee = getIteratee();
        pairs = !length ? [] : arrayMap(pairs, function(pair) {
          if (typeof pair[1] != "function") {
            throw new TypeError2(FUNC_ERROR_TEXT);
          }
          return [toIteratee(pair[0]), pair[1]];
        });
        return baseRest(function(args) {
          var index = -1;
          while (++index < length) {
            var pair = pairs[index];
            if (apply(pair[0], this, args)) {
              return apply(pair[1], this, args);
            }
          }
        });
      }
      function conforms(source) {
        return baseConforms(baseClone(source, CLONE_DEEP_FLAG));
      }
      function constant(value) {
        return function() {
          return value;
        };
      }
      function defaultTo(value, defaultValue) {
        return value == null || value !== value ? defaultValue : value;
      }
      var flow = createFlow();
      var flowRight = createFlow(true);
      function identity(value) {
        return value;
      }
      function iteratee(func) {
        return baseIteratee(typeof func == "function" ? func : baseClone(func, CLONE_DEEP_FLAG));
      }
      function matches(source) {
        return baseMatches(baseClone(source, CLONE_DEEP_FLAG));
      }
      function matchesProperty(path, srcValue) {
        return baseMatchesProperty(path, baseClone(srcValue, CLONE_DEEP_FLAG));
      }
      var method = baseRest(function(path, args) {
        return function(object) {
          return baseInvoke(object, path, args);
        };
      });
      var methodOf = baseRest(function(object, args) {
        return function(path) {
          return baseInvoke(object, path, args);
        };
      });
      function mixin(object, source, options2) {
        var props = keys(source), methodNames = baseFunctions(source, props);
        if (options2 == null && !(isObject(source) && (methodNames.length || !props.length))) {
          options2 = source;
          source = object;
          object = this;
          methodNames = baseFunctions(source, keys(source));
        }
        var chain2 = !(isObject(options2) && "chain" in options2) || !!options2.chain, isFunc = isFunction(object);
        arrayEach(methodNames, function(methodName) {
          var func = source[methodName];
          object[methodName] = func;
          if (isFunc) {
            object.prototype[methodName] = function() {
              var chainAll = this.__chain__;
              if (chain2 || chainAll) {
                var result2 = object(this.__wrapped__), actions = result2.__actions__ = copyArray(this.__actions__);
                actions.push({ "func": func, "args": arguments, "thisArg": object });
                result2.__chain__ = chainAll;
                return result2;
              }
              return func.apply(object, arrayPush([this.value()], arguments));
            };
          }
        });
        return object;
      }
      function noConflict() {
        if (root._ === this) {
          root._ = oldDash;
        }
        return this;
      }
      function noop() {
      }
      function nthArg(n2) {
        n2 = toInteger(n2);
        return baseRest(function(args) {
          return baseNth(args, n2);
        });
      }
      var over = createOver(arrayMap);
      var overEvery = createOver(arrayEvery);
      var overSome = createOver(arraySome);
      function property(path) {
        return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
      }
      function propertyOf(object) {
        return function(path) {
          return object == null ? undefined$1 : baseGet(object, path);
        };
      }
      var range = createRange();
      var rangeRight = createRange(true);
      function stubArray() {
        return [];
      }
      function stubFalse() {
        return false;
      }
      function stubObject() {
        return {};
      }
      function stubString() {
        return "";
      }
      function stubTrue() {
        return true;
      }
      function times(n2, iteratee2) {
        n2 = toInteger(n2);
        if (n2 < 1 || n2 > MAX_SAFE_INTEGER) {
          return [];
        }
        var index = MAX_ARRAY_LENGTH, length = nativeMin(n2, MAX_ARRAY_LENGTH);
        iteratee2 = getIteratee(iteratee2);
        n2 -= MAX_ARRAY_LENGTH;
        var result2 = baseTimes(length, iteratee2);
        while (++index < n2) {
          iteratee2(index);
        }
        return result2;
      }
      function toPath(value) {
        if (isArray(value)) {
          return arrayMap(value, toKey);
        }
        return isSymbol(value) ? [value] : copyArray(stringToPath(toString(value)));
      }
      function uniqueId(prefix) {
        var id = ++idCounter;
        return toString(prefix) + id;
      }
      var add = createMathOperation(function(augend, addend) {
        return augend + addend;
      }, 0);
      var ceil = createRound("ceil");
      var divide = createMathOperation(function(dividend, divisor) {
        return dividend / divisor;
      }, 1);
      var floor = createRound("floor");
      function max(array) {
        return array && array.length ? baseExtremum(array, identity, baseGt) : undefined$1;
      }
      function maxBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseGt) : undefined$1;
      }
      function mean(array) {
        return baseMean(array, identity);
      }
      function meanBy(array, iteratee2) {
        return baseMean(array, getIteratee(iteratee2, 2));
      }
      function min(array) {
        return array && array.length ? baseExtremum(array, identity, baseLt) : undefined$1;
      }
      function minBy(array, iteratee2) {
        return array && array.length ? baseExtremum(array, getIteratee(iteratee2, 2), baseLt) : undefined$1;
      }
      var multiply = createMathOperation(function(multiplier, multiplicand) {
        return multiplier * multiplicand;
      }, 1);
      var round2 = createRound("round");
      var subtract = createMathOperation(function(minuend, subtrahend) {
        return minuend - subtrahend;
      }, 0);
      function sum(array) {
        return array && array.length ? baseSum(array, identity) : 0;
      }
      function sumBy(array, iteratee2) {
        return array && array.length ? baseSum(array, getIteratee(iteratee2, 2)) : 0;
      }
      lodash2.after = after;
      lodash2.ary = ary;
      lodash2.assign = assign;
      lodash2.assignIn = assignIn;
      lodash2.assignInWith = assignInWith;
      lodash2.assignWith = assignWith;
      lodash2.at = at;
      lodash2.before = before;
      lodash2.bind = bind;
      lodash2.bindAll = bindAll;
      lodash2.bindKey = bindKey;
      lodash2.castArray = castArray;
      lodash2.chain = chain;
      lodash2.chunk = chunk;
      lodash2.compact = compact;
      lodash2.concat = concat;
      lodash2.cond = cond;
      lodash2.conforms = conforms;
      lodash2.constant = constant;
      lodash2.countBy = countBy;
      lodash2.create = create2;
      lodash2.curry = curry;
      lodash2.curryRight = curryRight;
      lodash2.debounce = debounce;
      lodash2.defaults = defaults;
      lodash2.defaultsDeep = defaultsDeep;
      lodash2.defer = defer;
      lodash2.delay = delay;
      lodash2.difference = difference;
      lodash2.differenceBy = differenceBy;
      lodash2.differenceWith = differenceWith;
      lodash2.drop = drop;
      lodash2.dropRight = dropRight;
      lodash2.dropRightWhile = dropRightWhile;
      lodash2.dropWhile = dropWhile;
      lodash2.fill = fill;
      lodash2.filter = filter;
      lodash2.flatMap = flatMap;
      lodash2.flatMapDeep = flatMapDeep;
      lodash2.flatMapDepth = flatMapDepth;
      lodash2.flatten = flatten;
      lodash2.flattenDeep = flattenDeep;
      lodash2.flattenDepth = flattenDepth;
      lodash2.flip = flip;
      lodash2.flow = flow;
      lodash2.flowRight = flowRight;
      lodash2.fromPairs = fromPairs;
      lodash2.functions = functions;
      lodash2.functionsIn = functionsIn;
      lodash2.groupBy = groupBy;
      lodash2.initial = initial;
      lodash2.intersection = intersection;
      lodash2.intersectionBy = intersectionBy;
      lodash2.intersectionWith = intersectionWith;
      lodash2.invert = invert;
      lodash2.invertBy = invertBy;
      lodash2.invokeMap = invokeMap;
      lodash2.iteratee = iteratee;
      lodash2.keyBy = keyBy;
      lodash2.keys = keys;
      lodash2.keysIn = keysIn;
      lodash2.map = map;
      lodash2.mapKeys = mapKeys;
      lodash2.mapValues = mapValues;
      lodash2.matches = matches;
      lodash2.matchesProperty = matchesProperty;
      lodash2.memoize = memoize;
      lodash2.merge = merge;
      lodash2.mergeWith = mergeWith;
      lodash2.method = method;
      lodash2.methodOf = methodOf;
      lodash2.mixin = mixin;
      lodash2.negate = negate;
      lodash2.nthArg = nthArg;
      lodash2.omit = omit;
      lodash2.omitBy = omitBy;
      lodash2.once = once;
      lodash2.orderBy = orderBy;
      lodash2.over = over;
      lodash2.overArgs = overArgs;
      lodash2.overEvery = overEvery;
      lodash2.overSome = overSome;
      lodash2.partial = partial;
      lodash2.partialRight = partialRight;
      lodash2.partition = partition;
      lodash2.pick = pick;
      lodash2.pickBy = pickBy;
      lodash2.property = property;
      lodash2.propertyOf = propertyOf;
      lodash2.pull = pull;
      lodash2.pullAll = pullAll;
      lodash2.pullAllBy = pullAllBy;
      lodash2.pullAllWith = pullAllWith;
      lodash2.pullAt = pullAt;
      lodash2.range = range;
      lodash2.rangeRight = rangeRight;
      lodash2.rearg = rearg;
      lodash2.reject = reject;
      lodash2.remove = remove;
      lodash2.rest = rest;
      lodash2.reverse = reverse;
      lodash2.sampleSize = sampleSize;
      lodash2.set = set;
      lodash2.setWith = setWith;
      lodash2.shuffle = shuffle;
      lodash2.slice = slice;
      lodash2.sortBy = sortBy;
      lodash2.sortedUniq = sortedUniq;
      lodash2.sortedUniqBy = sortedUniqBy;
      lodash2.split = split;
      lodash2.spread = spread;
      lodash2.tail = tail;
      lodash2.take = take;
      lodash2.takeRight = takeRight;
      lodash2.takeRightWhile = takeRightWhile;
      lodash2.takeWhile = takeWhile;
      lodash2.tap = tap;
      lodash2.throttle = throttle;
      lodash2.thru = thru;
      lodash2.toArray = toArray;
      lodash2.toPairs = toPairs;
      lodash2.toPairsIn = toPairsIn;
      lodash2.toPath = toPath;
      lodash2.toPlainObject = toPlainObject;
      lodash2.transform = transform;
      lodash2.unary = unary;
      lodash2.union = union;
      lodash2.unionBy = unionBy;
      lodash2.unionWith = unionWith;
      lodash2.uniq = uniq;
      lodash2.uniqBy = uniqBy;
      lodash2.uniqWith = uniqWith;
      lodash2.unset = unset;
      lodash2.unzip = unzip;
      lodash2.unzipWith = unzipWith;
      lodash2.update = update;
      lodash2.updateWith = updateWith;
      lodash2.values = values;
      lodash2.valuesIn = valuesIn;
      lodash2.without = without;
      lodash2.words = words;
      lodash2.wrap = wrap;
      lodash2.xor = xor;
      lodash2.xorBy = xorBy;
      lodash2.xorWith = xorWith;
      lodash2.zip = zip;
      lodash2.zipObject = zipObject;
      lodash2.zipObjectDeep = zipObjectDeep;
      lodash2.zipWith = zipWith;
      lodash2.entries = toPairs;
      lodash2.entriesIn = toPairsIn;
      lodash2.extend = assignIn;
      lodash2.extendWith = assignInWith;
      mixin(lodash2, lodash2);
      lodash2.add = add;
      lodash2.attempt = attempt;
      lodash2.camelCase = camelCase;
      lodash2.capitalize = capitalize;
      lodash2.ceil = ceil;
      lodash2.clamp = clamp2;
      lodash2.clone = clone;
      lodash2.cloneDeep = cloneDeep;
      lodash2.cloneDeepWith = cloneDeepWith;
      lodash2.cloneWith = cloneWith;
      lodash2.conformsTo = conformsTo;
      lodash2.deburr = deburr;
      lodash2.defaultTo = defaultTo;
      lodash2.divide = divide;
      lodash2.endsWith = endsWith;
      lodash2.eq = eq;
      lodash2.escape = escape2;
      lodash2.escapeRegExp = escapeRegExp;
      lodash2.every = every;
      lodash2.find = find;
      lodash2.findIndex = findIndex;
      lodash2.findKey = findKey;
      lodash2.findLast = findLast;
      lodash2.findLastIndex = findLastIndex;
      lodash2.findLastKey = findLastKey;
      lodash2.floor = floor;
      lodash2.forEach = forEach;
      lodash2.forEachRight = forEachRight;
      lodash2.forIn = forIn;
      lodash2.forInRight = forInRight;
      lodash2.forOwn = forOwn;
      lodash2.forOwnRight = forOwnRight;
      lodash2.get = get;
      lodash2.gt = gt;
      lodash2.gte = gte;
      lodash2.has = has;
      lodash2.hasIn = hasIn;
      lodash2.head = head;
      lodash2.identity = identity;
      lodash2.includes = includes;
      lodash2.indexOf = indexOf;
      lodash2.inRange = inRange;
      lodash2.invoke = invoke;
      lodash2.isArguments = isArguments;
      lodash2.isArray = isArray;
      lodash2.isArrayBuffer = isArrayBuffer;
      lodash2.isArrayLike = isArrayLike;
      lodash2.isArrayLikeObject = isArrayLikeObject;
      lodash2.isBoolean = isBoolean;
      lodash2.isBuffer = isBuffer;
      lodash2.isDate = isDate;
      lodash2.isElement = isElement;
      lodash2.isEmpty = isEmpty;
      lodash2.isEqual = isEqual;
      lodash2.isEqualWith = isEqualWith;
      lodash2.isError = isError;
      lodash2.isFinite = isFinite;
      lodash2.isFunction = isFunction;
      lodash2.isInteger = isInteger;
      lodash2.isLength = isLength;
      lodash2.isMap = isMap;
      lodash2.isMatch = isMatch;
      lodash2.isMatchWith = isMatchWith;
      lodash2.isNaN = isNaN2;
      lodash2.isNative = isNative;
      lodash2.isNil = isNil;
      lodash2.isNull = isNull;
      lodash2.isNumber = isNumber;
      lodash2.isObject = isObject;
      lodash2.isObjectLike = isObjectLike;
      lodash2.isPlainObject = isPlainObject;
      lodash2.isRegExp = isRegExp;
      lodash2.isSafeInteger = isSafeInteger;
      lodash2.isSet = isSet;
      lodash2.isString = isString;
      lodash2.isSymbol = isSymbol;
      lodash2.isTypedArray = isTypedArray;
      lodash2.isUndefined = isUndefined;
      lodash2.isWeakMap = isWeakMap;
      lodash2.isWeakSet = isWeakSet;
      lodash2.join = join;
      lodash2.kebabCase = kebabCase;
      lodash2.last = last;
      lodash2.lastIndexOf = lastIndexOf;
      lodash2.lowerCase = lowerCase;
      lodash2.lowerFirst = lowerFirst;
      lodash2.lt = lt;
      lodash2.lte = lte;
      lodash2.max = max;
      lodash2.maxBy = maxBy;
      lodash2.mean = mean;
      lodash2.meanBy = meanBy;
      lodash2.min = min;
      lodash2.minBy = minBy;
      lodash2.stubArray = stubArray;
      lodash2.stubFalse = stubFalse;
      lodash2.stubObject = stubObject;
      lodash2.stubString = stubString;
      lodash2.stubTrue = stubTrue;
      lodash2.multiply = multiply;
      lodash2.nth = nth;
      lodash2.noConflict = noConflict;
      lodash2.noop = noop;
      lodash2.now = now;
      lodash2.pad = pad;
      lodash2.padEnd = padEnd;
      lodash2.padStart = padStart;
      lodash2.parseInt = parseInt2;
      lodash2.random = random;
      lodash2.reduce = reduce;
      lodash2.reduceRight = reduceRight;
      lodash2.repeat = repeat;
      lodash2.replace = replace;
      lodash2.result = result;
      lodash2.round = round2;
      lodash2.runInContext = runInContext2;
      lodash2.sample = sample;
      lodash2.size = size;
      lodash2.snakeCase = snakeCase;
      lodash2.some = some;
      lodash2.sortedIndex = sortedIndex;
      lodash2.sortedIndexBy = sortedIndexBy;
      lodash2.sortedIndexOf = sortedIndexOf;
      lodash2.sortedLastIndex = sortedLastIndex;
      lodash2.sortedLastIndexBy = sortedLastIndexBy;
      lodash2.sortedLastIndexOf = sortedLastIndexOf;
      lodash2.startCase = startCase;
      lodash2.startsWith = startsWith;
      lodash2.subtract = subtract;
      lodash2.sum = sum;
      lodash2.sumBy = sumBy;
      lodash2.template = template;
      lodash2.times = times;
      lodash2.toFinite = toFinite;
      lodash2.toInteger = toInteger;
      lodash2.toLength = toLength;
      lodash2.toLower = toLower;
      lodash2.toNumber = toNumber;
      lodash2.toSafeInteger = toSafeInteger;
      lodash2.toString = toString;
      lodash2.toUpper = toUpper;
      lodash2.trim = trim;
      lodash2.trimEnd = trimEnd;
      lodash2.trimStart = trimStart;
      lodash2.truncate = truncate;
      lodash2.unescape = unescape2;
      lodash2.uniqueId = uniqueId;
      lodash2.upperCase = upperCase;
      lodash2.upperFirst = upperFirst;
      lodash2.each = forEach;
      lodash2.eachRight = forEachRight;
      lodash2.first = head;
      mixin(lodash2, function() {
        var source = {};
        baseForOwn(lodash2, function(func, methodName) {
          if (!hasOwnProperty2.call(lodash2.prototype, methodName)) {
            source[methodName] = func;
          }
        });
        return source;
      }(), { "chain": false });
      lodash2.VERSION = VERSION;
      arrayEach(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(methodName) {
        lodash2[methodName].placeholder = lodash2;
      });
      arrayEach(["drop", "take"], function(methodName, index) {
        LazyWrapper.prototype[methodName] = function(n2) {
          n2 = n2 === undefined$1 ? 1 : nativeMax(toInteger(n2), 0);
          var result2 = this.__filtered__ && !index ? new LazyWrapper(this) : this.clone();
          if (result2.__filtered__) {
            result2.__takeCount__ = nativeMin(n2, result2.__takeCount__);
          } else {
            result2.__views__.push({
              "size": nativeMin(n2, MAX_ARRAY_LENGTH),
              "type": methodName + (result2.__dir__ < 0 ? "Right" : "")
            });
          }
          return result2;
        };
        LazyWrapper.prototype[methodName + "Right"] = function(n2) {
          return this.reverse()[methodName](n2).reverse();
        };
      });
      arrayEach(["filter", "map", "takeWhile"], function(methodName, index) {
        var type = index + 1, isFilter = type == LAZY_FILTER_FLAG || type == LAZY_WHILE_FLAG;
        LazyWrapper.prototype[methodName] = function(iteratee2) {
          var result2 = this.clone();
          result2.__iteratees__.push({
            "iteratee": getIteratee(iteratee2, 3),
            "type": type
          });
          result2.__filtered__ = result2.__filtered__ || isFilter;
          return result2;
        };
      });
      arrayEach(["head", "last"], function(methodName, index) {
        var takeName = "take" + (index ? "Right" : "");
        LazyWrapper.prototype[methodName] = function() {
          return this[takeName](1).value()[0];
        };
      });
      arrayEach(["initial", "tail"], function(methodName, index) {
        var dropName = "drop" + (index ? "" : "Right");
        LazyWrapper.prototype[methodName] = function() {
          return this.__filtered__ ? new LazyWrapper(this) : this[dropName](1);
        };
      });
      LazyWrapper.prototype.compact = function() {
        return this.filter(identity);
      };
      LazyWrapper.prototype.find = function(predicate) {
        return this.filter(predicate).head();
      };
      LazyWrapper.prototype.findLast = function(predicate) {
        return this.reverse().find(predicate);
      };
      LazyWrapper.prototype.invokeMap = baseRest(function(path, args) {
        if (typeof path == "function") {
          return new LazyWrapper(this);
        }
        return this.map(function(value) {
          return baseInvoke(value, path, args);
        });
      });
      LazyWrapper.prototype.reject = function(predicate) {
        return this.filter(negate(getIteratee(predicate)));
      };
      LazyWrapper.prototype.slice = function(start, end) {
        start = toInteger(start);
        var result2 = this;
        if (result2.__filtered__ && (start > 0 || end < 0)) {
          return new LazyWrapper(result2);
        }
        if (start < 0) {
          result2 = result2.takeRight(-start);
        } else if (start) {
          result2 = result2.drop(start);
        }
        if (end !== undefined$1) {
          end = toInteger(end);
          result2 = end < 0 ? result2.dropRight(-end) : result2.take(end - start);
        }
        return result2;
      };
      LazyWrapper.prototype.takeRightWhile = function(predicate) {
        return this.reverse().takeWhile(predicate).reverse();
      };
      LazyWrapper.prototype.toArray = function() {
        return this.take(MAX_ARRAY_LENGTH);
      };
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var checkIteratee = /^(?:filter|find|map|reject)|While$/.test(methodName), isTaker = /^(?:head|last)$/.test(methodName), lodashFunc = lodash2[isTaker ? "take" + (methodName == "last" ? "Right" : "") : methodName], retUnwrapped = isTaker || /^find/.test(methodName);
        if (!lodashFunc) {
          return;
        }
        lodash2.prototype[methodName] = function() {
          var value = this.__wrapped__, args = isTaker ? [1] : arguments, isLazy = value instanceof LazyWrapper, iteratee2 = args[0], useLazy = isLazy || isArray(value);
          var interceptor = function(value2) {
            var result3 = lodashFunc.apply(lodash2, arrayPush([value2], args));
            return isTaker && chainAll ? result3[0] : result3;
          };
          if (useLazy && checkIteratee && typeof iteratee2 == "function" && iteratee2.length != 1) {
            isLazy = useLazy = false;
          }
          var chainAll = this.__chain__, isHybrid = !!this.__actions__.length, isUnwrapped = retUnwrapped && !chainAll, onlyLazy = isLazy && !isHybrid;
          if (!retUnwrapped && useLazy) {
            value = onlyLazy ? value : new LazyWrapper(this);
            var result2 = func.apply(value, args);
            result2.__actions__.push({ "func": thru, "args": [interceptor], "thisArg": undefined$1 });
            return new LodashWrapper(result2, chainAll);
          }
          if (isUnwrapped && onlyLazy) {
            return func.apply(this, args);
          }
          result2 = this.thru(interceptor);
          return isUnwrapped ? isTaker ? result2.value()[0] : result2.value() : result2;
        };
      });
      arrayEach(["pop", "push", "shift", "sort", "splice", "unshift"], function(methodName) {
        var func = arrayProto[methodName], chainName = /^(?:push|sort|unshift)$/.test(methodName) ? "tap" : "thru", retUnwrapped = /^(?:pop|shift)$/.test(methodName);
        lodash2.prototype[methodName] = function() {
          var args = arguments;
          if (retUnwrapped && !this.__chain__) {
            var value = this.value();
            return func.apply(isArray(value) ? value : [], args);
          }
          return this[chainName](function(value2) {
            return func.apply(isArray(value2) ? value2 : [], args);
          });
        };
      });
      baseForOwn(LazyWrapper.prototype, function(func, methodName) {
        var lodashFunc = lodash2[methodName];
        if (lodashFunc) {
          var key = lodashFunc.name + "";
          if (!hasOwnProperty2.call(realNames, key)) {
            realNames[key] = [];
          }
          realNames[key].push({ "name": methodName, "func": lodashFunc });
        }
      });
      realNames[createHybrid(undefined$1, WRAP_BIND_KEY_FLAG).name] = [{
        "name": "wrapper",
        "func": undefined$1
      }];
      LazyWrapper.prototype.clone = lazyClone;
      LazyWrapper.prototype.reverse = lazyReverse;
      LazyWrapper.prototype.value = lazyValue;
      lodash2.prototype.at = wrapperAt;
      lodash2.prototype.chain = wrapperChain;
      lodash2.prototype.commit = wrapperCommit;
      lodash2.prototype.next = wrapperNext;
      lodash2.prototype.plant = wrapperPlant;
      lodash2.prototype.reverse = wrapperReverse;
      lodash2.prototype.toJSON = lodash2.prototype.valueOf = lodash2.prototype.value = wrapperValue;
      lodash2.prototype.first = lodash2.prototype.head;
      if (symIterator) {
        lodash2.prototype[symIterator] = wrapperToIterator;
      }
      return lodash2;
    };
    var _ = runInContext();
    if (freeModule) {
      (freeModule.exports = _)._ = _;
      freeExports._ = _;
    } else {
      root._ = _;
    }
  }).call(commonjsGlobal);
})(lodash, lodash.exports);
const DEFAULT_SYSTEM_DATE_FORMAT = "YYYY-MM-DD HH:mm:ss";
const DEFAULT_SYSTEM_DATE_MS_FORMAT = "YYYY-MM-DD HH:mm:ss.SSS";
class SystemDateFormatsState {
  constructor() {
    this.fullDate = DEFAULT_SYSTEM_DATE_FORMAT;
    this.fullDateMS = DEFAULT_SYSTEM_DATE_MS_FORMAT;
    this.interval = {
      millisecond: "HH:mm:ss.SSS",
      second: "HH:mm:ss",
      minute: "HH:mm",
      hour: "MM/DD HH:mm",
      day: "MM/DD",
      month: "YYYY-MM",
      year: "YYYY"
    };
  }
  update(settings) {
    this.fullDate = settings.fullDate;
    this.interval = settings.interval;
    if (settings.useBrowserLocale) {
      this.useBrowserLocale();
    }
  }
  useBrowserLocale() {
    this.fullDate = localTimeFormat({
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    });
    this.fullDateMS = this.fullDate.replace("ss", "ss.SSS");
    this.interval.millisecond = localTimeFormat(
      { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false },
      null,
      this.interval.second
    ).replace("ss", "ss.SSS");
    this.interval.second = localTimeFormat(
      { hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false },
      null,
      this.interval.second
    );
    this.interval.minute = localTimeFormat(
      { hour: "2-digit", minute: "2-digit", hour12: false },
      null,
      this.interval.minute
    );
    this.interval.hour = localTimeFormat(
      { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", hour12: false },
      null,
      this.interval.hour
    );
    this.interval.day = localTimeFormat({ month: "2-digit", day: "2-digit", hour12: false }, null, this.interval.day);
    this.interval.month = localTimeFormat(
      { year: "numeric", month: "2-digit", hour12: false },
      null,
      this.interval.month
    );
  }
  getTimeFieldUnit(useMsResolution) {
    return `time:${useMsResolution ? this.fullDateMS : this.fullDate}`;
  }
}
function localTimeFormat(options2, locale, fallback) {
  if (missingIntlDateTimeFormatSupport()) {
    return fallback != null ? fallback : DEFAULT_SYSTEM_DATE_FORMAT;
  }
  if (!locale && navigator) {
    locale = [...navigator.languages];
  }
  const dateTimeFormat = new Intl.DateTimeFormat(locale || void 0, options2);
  const parts = dateTimeFormat.formatToParts(new Date());
  const hour12 = dateTimeFormat.resolvedOptions().hour12;
  const mapping = {
    year: "YYYY",
    month: "MM",
    day: "DD",
    hour: hour12 ? "hh" : "HH",
    minute: "mm",
    second: "ss",
    weekday: "ddd",
    era: "N",
    dayPeriod: "A",
    timeZoneName: "Z"
  };
  return parts.map((part) => mapping[part.type] || part.value).join("");
}
const systemDateFormats = new SystemDateFormatsState();
const missingIntlDateTimeFormatSupport = () => {
  return !("DateTimeFormat" in Intl) || !("formatToParts" in Intl.DateTimeFormat.prototype);
};
const FALLBACK_COLOR = "gray";
var tinycolor = { exports: {} };
(function(module) {
  (function(Math2) {
    var trimLeft = /^\s+/, trimRight = /\s+$/, tinyCounter = 0, mathRound = Math2.round, mathMin = Math2.min, mathMax = Math2.max, mathRandom = Math2.random;
    function tinycolor2(color, opts) {
      color = color ? color : "";
      opts = opts || {};
      if (color instanceof tinycolor2) {
        return color;
      }
      if (!(this instanceof tinycolor2)) {
        return new tinycolor2(color, opts);
      }
      var rgb = inputToRGB(color);
      this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = mathRound(100 * this._a) / 100, this._format = opts.format || rgb.format;
      this._gradientType = opts.gradientType;
      if (this._r < 1) {
        this._r = mathRound(this._r);
      }
      if (this._g < 1) {
        this._g = mathRound(this._g);
      }
      if (this._b < 1) {
        this._b = mathRound(this._b);
      }
      this._ok = rgb.ok;
      this._tc_id = tinyCounter++;
    }
    tinycolor2.prototype = {
      isDark: function() {
        return this.getBrightness() < 128;
      },
      isLight: function() {
        return !this.isDark();
      },
      isValid: function() {
        return this._ok;
      },
      getOriginalInput: function() {
        return this._originalInput;
      },
      getFormat: function() {
        return this._format;
      },
      getAlpha: function() {
        return this._a;
      },
      getBrightness: function() {
        var rgb = this.toRgb();
        return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1e3;
      },
      getLuminance: function() {
        var rgb = this.toRgb();
        var RsRGB, GsRGB, BsRGB, R2, G2, B2;
        RsRGB = rgb.r / 255;
        GsRGB = rgb.g / 255;
        BsRGB = rgb.b / 255;
        if (RsRGB <= 0.03928) {
          R2 = RsRGB / 12.92;
        } else {
          R2 = Math2.pow((RsRGB + 0.055) / 1.055, 2.4);
        }
        if (GsRGB <= 0.03928) {
          G2 = GsRGB / 12.92;
        } else {
          G2 = Math2.pow((GsRGB + 0.055) / 1.055, 2.4);
        }
        if (BsRGB <= 0.03928) {
          B2 = BsRGB / 12.92;
        } else {
          B2 = Math2.pow((BsRGB + 0.055) / 1.055, 2.4);
        }
        return 0.2126 * R2 + 0.7152 * G2 + 0.0722 * B2;
      },
      setAlpha: function(value) {
        this._a = boundAlpha(value);
        this._roundA = mathRound(100 * this._a) / 100;
        return this;
      },
      toHsv: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        return { h: hsv.h * 360, s: hsv.s, v: hsv.v, a: this._a };
      },
      toHsvString: function() {
        var hsv = rgbToHsv(this._r, this._g, this._b);
        var h = mathRound(hsv.h * 360), s = mathRound(hsv.s * 100), v2 = mathRound(hsv.v * 100);
        return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v2 + "%)" : "hsva(" + h + ", " + s + "%, " + v2 + "%, " + this._roundA + ")";
      },
      toHsl: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        return { h: hsl.h * 360, s: hsl.s, l: hsl.l, a: this._a };
      },
      toHslString: function() {
        var hsl = rgbToHsl(this._r, this._g, this._b);
        var h = mathRound(hsl.h * 360), s = mathRound(hsl.s * 100), l2 = mathRound(hsl.l * 100);
        return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l2 + "%)" : "hsla(" + h + ", " + s + "%, " + l2 + "%, " + this._roundA + ")";
      },
      toHex: function(allow3Char) {
        return rgbToHex(this._r, this._g, this._b, allow3Char);
      },
      toHexString: function(allow3Char) {
        return "#" + this.toHex(allow3Char);
      },
      toHex8: function(allow4Char) {
        return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
      },
      toHex8String: function(allow4Char) {
        return "#" + this.toHex8(allow4Char);
      },
      toRgb: function() {
        return { r: mathRound(this._r), g: mathRound(this._g), b: mathRound(this._b), a: this._a };
      },
      toRgbString: function() {
        return this._a == 1 ? "rgb(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ")" : "rgba(" + mathRound(this._r) + ", " + mathRound(this._g) + ", " + mathRound(this._b) + ", " + this._roundA + ")";
      },
      toPercentageRgb: function() {
        return { r: mathRound(bound01(this._r, 255) * 100) + "%", g: mathRound(bound01(this._g, 255) * 100) + "%", b: mathRound(bound01(this._b, 255) * 100) + "%", a: this._a };
      },
      toPercentageRgbString: function() {
        return this._a == 1 ? "rgb(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%)" : "rgba(" + mathRound(bound01(this._r, 255) * 100) + "%, " + mathRound(bound01(this._g, 255) * 100) + "%, " + mathRound(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
      },
      toName: function() {
        if (this._a === 0) {
          return "transparent";
        }
        if (this._a < 1) {
          return false;
        }
        return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
      },
      toFilter: function(secondColor) {
        var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
        var secondHex8String = hex8String;
        var gradientType = this._gradientType ? "GradientType = 1, " : "";
        if (secondColor) {
          var s = tinycolor2(secondColor);
          secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
        }
        return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
      },
      toString: function(format) {
        var formatSet = !!format;
        format = format || this._format;
        var formattedString = false;
        var hasAlpha = this._a < 1 && this._a >= 0;
        var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
        if (needsAlphaFormat) {
          if (format === "name" && this._a === 0) {
            return this.toName();
          }
          return this.toRgbString();
        }
        if (format === "rgb") {
          formattedString = this.toRgbString();
        }
        if (format === "prgb") {
          formattedString = this.toPercentageRgbString();
        }
        if (format === "hex" || format === "hex6") {
          formattedString = this.toHexString();
        }
        if (format === "hex3") {
          formattedString = this.toHexString(true);
        }
        if (format === "hex4") {
          formattedString = this.toHex8String(true);
        }
        if (format === "hex8") {
          formattedString = this.toHex8String();
        }
        if (format === "name") {
          formattedString = this.toName();
        }
        if (format === "hsl") {
          formattedString = this.toHslString();
        }
        if (format === "hsv") {
          formattedString = this.toHsvString();
        }
        return formattedString || this.toHexString();
      },
      clone: function() {
        return tinycolor2(this.toString());
      },
      _applyModification: function(fn, args) {
        var color = fn.apply(null, [this].concat([].slice.call(args)));
        this._r = color._r;
        this._g = color._g;
        this._b = color._b;
        this.setAlpha(color._a);
        return this;
      },
      lighten: function() {
        return this._applyModification(lighten2, arguments);
      },
      brighten: function() {
        return this._applyModification(brighten, arguments);
      },
      darken: function() {
        return this._applyModification(darken2, arguments);
      },
      desaturate: function() {
        return this._applyModification(desaturate, arguments);
      },
      saturate: function() {
        return this._applyModification(saturate, arguments);
      },
      greyscale: function() {
        return this._applyModification(greyscale, arguments);
      },
      spin: function() {
        return this._applyModification(spin, arguments);
      },
      _applyCombination: function(fn, args) {
        return fn.apply(null, [this].concat([].slice.call(args)));
      },
      analogous: function() {
        return this._applyCombination(analogous, arguments);
      },
      complement: function() {
        return this._applyCombination(complement, arguments);
      },
      monochromatic: function() {
        return this._applyCombination(monochromatic, arguments);
      },
      splitcomplement: function() {
        return this._applyCombination(splitcomplement, arguments);
      },
      triad: function() {
        return this._applyCombination(triad, arguments);
      },
      tetrad: function() {
        return this._applyCombination(tetrad, arguments);
      }
    };
    tinycolor2.fromRatio = function(color, opts) {
      if (typeof color == "object") {
        var newColor = {};
        for (var i in color) {
          if (color.hasOwnProperty(i)) {
            if (i === "a") {
              newColor[i] = color[i];
            } else {
              newColor[i] = convertToPercentage(color[i]);
            }
          }
        }
        color = newColor;
      }
      return tinycolor2(color, opts);
    };
    function inputToRGB(color) {
      var rgb = { r: 0, g: 0, b: 0 };
      var a = 1;
      var s = null;
      var v2 = null;
      var l2 = null;
      var ok = false;
      var format = false;
      if (typeof color == "string") {
        color = stringInputToObject(color);
      }
      if (typeof color == "object") {
        if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
          rgb = rgbToRgb(color.r, color.g, color.b);
          ok = true;
          format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
          s = convertToPercentage(color.s);
          v2 = convertToPercentage(color.v);
          rgb = hsvToRgb(color.h, s, v2);
          ok = true;
          format = "hsv";
        } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
          s = convertToPercentage(color.s);
          l2 = convertToPercentage(color.l);
          rgb = hslToRgb2(color.h, s, l2);
          ok = true;
          format = "hsl";
        }
        if (color.hasOwnProperty("a")) {
          a = color.a;
        }
      }
      a = boundAlpha(a);
      return {
        ok,
        format: color.format || format,
        r: mathMin(255, mathMax(rgb.r, 0)),
        g: mathMin(255, mathMax(rgb.g, 0)),
        b: mathMin(255, mathMax(rgb.b, 0)),
        a
      };
    }
    function rgbToRgb(r2, g2, b) {
      return {
        r: bound01(r2, 255) * 255,
        g: bound01(g2, 255) * 255,
        b: bound01(b, 255) * 255
      };
    }
    function rgbToHsl(r2, g2, b) {
      r2 = bound01(r2, 255);
      g2 = bound01(g2, 255);
      b = bound01(b, 255);
      var max = mathMax(r2, g2, b), min = mathMin(r2, g2, b);
      var h, s, l2 = (max + min) / 2;
      if (max == min) {
        h = s = 0;
      } else {
        var d = max - min;
        s = l2 > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
          case r2:
            h = (g2 - b) / d + (g2 < b ? 6 : 0);
            break;
          case g2:
            h = (b - r2) / d + 2;
            break;
          case b:
            h = (r2 - g2) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, l: l2 };
    }
    function hslToRgb2(h, s, l2) {
      var r2, g2, b;
      h = bound01(h, 360);
      s = bound01(s, 100);
      l2 = bound01(l2, 100);
      function hue2rgb(p3, q3, t2) {
        if (t2 < 0)
          t2 += 1;
        if (t2 > 1)
          t2 -= 1;
        if (t2 < 1 / 6)
          return p3 + (q3 - p3) * 6 * t2;
        if (t2 < 1 / 2)
          return q3;
        if (t2 < 2 / 3)
          return p3 + (q3 - p3) * (2 / 3 - t2) * 6;
        return p3;
      }
      if (s === 0) {
        r2 = g2 = b = l2;
      } else {
        var q2 = l2 < 0.5 ? l2 * (1 + s) : l2 + s - l2 * s;
        var p2 = 2 * l2 - q2;
        r2 = hue2rgb(p2, q2, h + 1 / 3);
        g2 = hue2rgb(p2, q2, h);
        b = hue2rgb(p2, q2, h - 1 / 3);
      }
      return { r: r2 * 255, g: g2 * 255, b: b * 255 };
    }
    function rgbToHsv(r2, g2, b) {
      r2 = bound01(r2, 255);
      g2 = bound01(g2, 255);
      b = bound01(b, 255);
      var max = mathMax(r2, g2, b), min = mathMin(r2, g2, b);
      var h, s, v2 = max;
      var d = max - min;
      s = max === 0 ? 0 : d / max;
      if (max == min) {
        h = 0;
      } else {
        switch (max) {
          case r2:
            h = (g2 - b) / d + (g2 < b ? 6 : 0);
            break;
          case g2:
            h = (b - r2) / d + 2;
            break;
          case b:
            h = (r2 - g2) / d + 4;
            break;
        }
        h /= 6;
      }
      return { h, s, v: v2 };
    }
    function hsvToRgb(h, s, v2) {
      h = bound01(h, 360) * 6;
      s = bound01(s, 100);
      v2 = bound01(v2, 100);
      var i = Math2.floor(h), f2 = h - i, p2 = v2 * (1 - s), q2 = v2 * (1 - f2 * s), t2 = v2 * (1 - (1 - f2) * s), mod = i % 6, r2 = [v2, q2, p2, p2, t2, v2][mod], g2 = [t2, v2, v2, q2, p2, p2][mod], b = [p2, p2, t2, v2, v2, q2][mod];
      return { r: r2 * 255, g: g2 * 255, b: b * 255 };
    }
    function rgbToHex(r2, g2, b, allow3Char) {
      var hex = [
        pad2(mathRound(r2).toString(16)),
        pad2(mathRound(g2).toString(16)),
        pad2(mathRound(b).toString(16))
      ];
      if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToHex(r2, g2, b, a, allow4Char) {
      var hex = [
        pad2(mathRound(r2).toString(16)),
        pad2(mathRound(g2).toString(16)),
        pad2(mathRound(b).toString(16)),
        pad2(convertDecimalToHex(a))
      ];
      if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
        return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
      }
      return hex.join("");
    }
    function rgbaToArgbHex(r2, g2, b, a) {
      var hex = [
        pad2(convertDecimalToHex(a)),
        pad2(mathRound(r2).toString(16)),
        pad2(mathRound(g2).toString(16)),
        pad2(mathRound(b).toString(16))
      ];
      return hex.join("");
    }
    tinycolor2.equals = function(color1, color2) {
      if (!color1 || !color2) {
        return false;
      }
      return tinycolor2(color1).toRgbString() == tinycolor2(color2).toRgbString();
    };
    tinycolor2.random = function() {
      return tinycolor2.fromRatio({
        r: mathRandom(),
        g: mathRandom(),
        b: mathRandom()
      });
    };
    function desaturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.s -= amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor2(hsl);
    }
    function saturate(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.s += amount / 100;
      hsl.s = clamp01(hsl.s);
      return tinycolor2(hsl);
    }
    function greyscale(color) {
      return tinycolor2(color).desaturate(100);
    }
    function lighten2(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.l += amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor2(hsl);
    }
    function brighten(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var rgb = tinycolor2(color).toRgb();
      rgb.r = mathMax(0, mathMin(255, rgb.r - mathRound(255 * -(amount / 100))));
      rgb.g = mathMax(0, mathMin(255, rgb.g - mathRound(255 * -(amount / 100))));
      rgb.b = mathMax(0, mathMin(255, rgb.b - mathRound(255 * -(amount / 100))));
      return tinycolor2(rgb);
    }
    function darken2(color, amount) {
      amount = amount === 0 ? 0 : amount || 10;
      var hsl = tinycolor2(color).toHsl();
      hsl.l -= amount / 100;
      hsl.l = clamp01(hsl.l);
      return tinycolor2(hsl);
    }
    function spin(color, amount) {
      var hsl = tinycolor2(color).toHsl();
      var hue = (hsl.h + amount) % 360;
      hsl.h = hue < 0 ? 360 + hue : hue;
      return tinycolor2(hsl);
    }
    function complement(color) {
      var hsl = tinycolor2(color).toHsl();
      hsl.h = (hsl.h + 180) % 360;
      return tinycolor2(hsl);
    }
    function triad(color) {
      var hsl = tinycolor2(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor2(color),
        tinycolor2({ h: (h + 120) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 240) % 360, s: hsl.s, l: hsl.l })
      ];
    }
    function tetrad(color) {
      var hsl = tinycolor2(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor2(color),
        tinycolor2({ h: (h + 90) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 180) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 270) % 360, s: hsl.s, l: hsl.l })
      ];
    }
    function splitcomplement(color) {
      var hsl = tinycolor2(color).toHsl();
      var h = hsl.h;
      return [
        tinycolor2(color),
        tinycolor2({ h: (h + 72) % 360, s: hsl.s, l: hsl.l }),
        tinycolor2({ h: (h + 216) % 360, s: hsl.s, l: hsl.l })
      ];
    }
    function analogous(color, results, slices) {
      results = results || 6;
      slices = slices || 30;
      var hsl = tinycolor2(color).toHsl();
      var part = 360 / slices;
      var ret = [tinycolor2(color)];
      for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results; ) {
        hsl.h = (hsl.h + part) % 360;
        ret.push(tinycolor2(hsl));
      }
      return ret;
    }
    function monochromatic(color, results) {
      results = results || 6;
      var hsv = tinycolor2(color).toHsv();
      var h = hsv.h, s = hsv.s, v2 = hsv.v;
      var ret = [];
      var modification = 1 / results;
      while (results--) {
        ret.push(tinycolor2({ h, s, v: v2 }));
        v2 = (v2 + modification) % 1;
      }
      return ret;
    }
    tinycolor2.mix = function(color1, color2, amount) {
      amount = amount === 0 ? 0 : amount || 50;
      var rgb1 = tinycolor2(color1).toRgb();
      var rgb2 = tinycolor2(color2).toRgb();
      var p2 = amount / 100;
      var rgba = {
        r: (rgb2.r - rgb1.r) * p2 + rgb1.r,
        g: (rgb2.g - rgb1.g) * p2 + rgb1.g,
        b: (rgb2.b - rgb1.b) * p2 + rgb1.b,
        a: (rgb2.a - rgb1.a) * p2 + rgb1.a
      };
      return tinycolor2(rgba);
    };
    tinycolor2.readability = function(color1, color2) {
      var c1 = tinycolor2(color1);
      var c2 = tinycolor2(color2);
      return (Math2.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math2.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
    };
    tinycolor2.isReadable = function(color1, color2, wcag2) {
      var readability = tinycolor2.readability(color1, color2);
      var wcag2Parms, out;
      out = false;
      wcag2Parms = validateWCAG2Parms(wcag2);
      switch (wcag2Parms.level + wcag2Parms.size) {
        case "AAsmall":
        case "AAAlarge":
          out = readability >= 4.5;
          break;
        case "AAlarge":
          out = readability >= 3;
          break;
        case "AAAsmall":
          out = readability >= 7;
          break;
      }
      return out;
    };
    tinycolor2.mostReadable = function(baseColor, colorList, args) {
      var bestColor = null;
      var bestScore = 0;
      var readability;
      var includeFallbackColors, level, size;
      args = args || {};
      includeFallbackColors = args.includeFallbackColors;
      level = args.level;
      size = args.size;
      for (var i = 0; i < colorList.length; i++) {
        readability = tinycolor2.readability(baseColor, colorList[i]);
        if (readability > bestScore) {
          bestScore = readability;
          bestColor = tinycolor2(colorList[i]);
        }
      }
      if (tinycolor2.isReadable(baseColor, bestColor, { "level": level, "size": size }) || !includeFallbackColors) {
        return bestColor;
      } else {
        args.includeFallbackColors = false;
        return tinycolor2.mostReadable(baseColor, ["#fff", "#000"], args);
      }
    };
    var names = tinycolor2.names = {
      aliceblue: "f0f8ff",
      antiquewhite: "faebd7",
      aqua: "0ff",
      aquamarine: "7fffd4",
      azure: "f0ffff",
      beige: "f5f5dc",
      bisque: "ffe4c4",
      black: "000",
      blanchedalmond: "ffebcd",
      blue: "00f",
      blueviolet: "8a2be2",
      brown: "a52a2a",
      burlywood: "deb887",
      burntsienna: "ea7e5d",
      cadetblue: "5f9ea0",
      chartreuse: "7fff00",
      chocolate: "d2691e",
      coral: "ff7f50",
      cornflowerblue: "6495ed",
      cornsilk: "fff8dc",
      crimson: "dc143c",
      cyan: "0ff",
      darkblue: "00008b",
      darkcyan: "008b8b",
      darkgoldenrod: "b8860b",
      darkgray: "a9a9a9",
      darkgreen: "006400",
      darkgrey: "a9a9a9",
      darkkhaki: "bdb76b",
      darkmagenta: "8b008b",
      darkolivegreen: "556b2f",
      darkorange: "ff8c00",
      darkorchid: "9932cc",
      darkred: "8b0000",
      darksalmon: "e9967a",
      darkseagreen: "8fbc8f",
      darkslateblue: "483d8b",
      darkslategray: "2f4f4f",
      darkslategrey: "2f4f4f",
      darkturquoise: "00ced1",
      darkviolet: "9400d3",
      deeppink: "ff1493",
      deepskyblue: "00bfff",
      dimgray: "696969",
      dimgrey: "696969",
      dodgerblue: "1e90ff",
      firebrick: "b22222",
      floralwhite: "fffaf0",
      forestgreen: "228b22",
      fuchsia: "f0f",
      gainsboro: "dcdcdc",
      ghostwhite: "f8f8ff",
      gold: "ffd700",
      goldenrod: "daa520",
      gray: "808080",
      green: "008000",
      greenyellow: "adff2f",
      grey: "808080",
      honeydew: "f0fff0",
      hotpink: "ff69b4",
      indianred: "cd5c5c",
      indigo: "4b0082",
      ivory: "fffff0",
      khaki: "f0e68c",
      lavender: "e6e6fa",
      lavenderblush: "fff0f5",
      lawngreen: "7cfc00",
      lemonchiffon: "fffacd",
      lightblue: "add8e6",
      lightcoral: "f08080",
      lightcyan: "e0ffff",
      lightgoldenrodyellow: "fafad2",
      lightgray: "d3d3d3",
      lightgreen: "90ee90",
      lightgrey: "d3d3d3",
      lightpink: "ffb6c1",
      lightsalmon: "ffa07a",
      lightseagreen: "20b2aa",
      lightskyblue: "87cefa",
      lightslategray: "789",
      lightslategrey: "789",
      lightsteelblue: "b0c4de",
      lightyellow: "ffffe0",
      lime: "0f0",
      limegreen: "32cd32",
      linen: "faf0e6",
      magenta: "f0f",
      maroon: "800000",
      mediumaquamarine: "66cdaa",
      mediumblue: "0000cd",
      mediumorchid: "ba55d3",
      mediumpurple: "9370db",
      mediumseagreen: "3cb371",
      mediumslateblue: "7b68ee",
      mediumspringgreen: "00fa9a",
      mediumturquoise: "48d1cc",
      mediumvioletred: "c71585",
      midnightblue: "191970",
      mintcream: "f5fffa",
      mistyrose: "ffe4e1",
      moccasin: "ffe4b5",
      navajowhite: "ffdead",
      navy: "000080",
      oldlace: "fdf5e6",
      olive: "808000",
      olivedrab: "6b8e23",
      orange: "ffa500",
      orangered: "ff4500",
      orchid: "da70d6",
      palegoldenrod: "eee8aa",
      palegreen: "98fb98",
      paleturquoise: "afeeee",
      palevioletred: "db7093",
      papayawhip: "ffefd5",
      peachpuff: "ffdab9",
      peru: "cd853f",
      pink: "ffc0cb",
      plum: "dda0dd",
      powderblue: "b0e0e6",
      purple: "800080",
      rebeccapurple: "663399",
      red: "f00",
      rosybrown: "bc8f8f",
      royalblue: "4169e1",
      saddlebrown: "8b4513",
      salmon: "fa8072",
      sandybrown: "f4a460",
      seagreen: "2e8b57",
      seashell: "fff5ee",
      sienna: "a0522d",
      silver: "c0c0c0",
      skyblue: "87ceeb",
      slateblue: "6a5acd",
      slategray: "708090",
      slategrey: "708090",
      snow: "fffafa",
      springgreen: "00ff7f",
      steelblue: "4682b4",
      tan: "d2b48c",
      teal: "008080",
      thistle: "d8bfd8",
      tomato: "ff6347",
      turquoise: "40e0d0",
      violet: "ee82ee",
      wheat: "f5deb3",
      white: "fff",
      whitesmoke: "f5f5f5",
      yellow: "ff0",
      yellowgreen: "9acd32"
    };
    var hexNames = tinycolor2.hexNames = flip(names);
    function flip(o) {
      var flipped = {};
      for (var i in o) {
        if (o.hasOwnProperty(i)) {
          flipped[o[i]] = i;
        }
      }
      return flipped;
    }
    function boundAlpha(a) {
      a = parseFloat(a);
      if (isNaN(a) || a < 0 || a > 1) {
        a = 1;
      }
      return a;
    }
    function bound01(n2, max) {
      if (isOnePointZero(n2)) {
        n2 = "100%";
      }
      var processPercent = isPercentage(n2);
      n2 = mathMin(max, mathMax(0, parseFloat(n2)));
      if (processPercent) {
        n2 = parseInt(n2 * max, 10) / 100;
      }
      if (Math2.abs(n2 - max) < 1e-6) {
        return 1;
      }
      return n2 % max / parseFloat(max);
    }
    function clamp01(val) {
      return mathMin(1, mathMax(0, val));
    }
    function parseIntFromHex(val) {
      return parseInt(val, 16);
    }
    function isOnePointZero(n2) {
      return typeof n2 == "string" && n2.indexOf(".") != -1 && parseFloat(n2) === 1;
    }
    function isPercentage(n2) {
      return typeof n2 === "string" && n2.indexOf("%") != -1;
    }
    function pad2(c) {
      return c.length == 1 ? "0" + c : "" + c;
    }
    function convertToPercentage(n2) {
      if (n2 <= 1) {
        n2 = n2 * 100 + "%";
      }
      return n2;
    }
    function convertDecimalToHex(d) {
      return Math2.round(parseFloat(d) * 255).toString(16);
    }
    function convertHexToDecimal(h) {
      return parseIntFromHex(h) / 255;
    }
    var matchers = function() {
      var CSS_INTEGER = "[-\\+]?\\d+%?";
      var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";
      var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";
      var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(CSS_UNIT),
        rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
        rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
        hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
        hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
        hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
        hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
      };
    }();
    function isValidCSSUnit(color) {
      return !!matchers.CSS_UNIT.exec(color);
    }
    function stringInputToObject(color) {
      color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
      var named = false;
      if (names[color]) {
        color = names[color];
        named = true;
      } else if (color == "transparent") {
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      }
      var match;
      if (match = matchers.rgb.exec(color)) {
        return { r: match[1], g: match[2], b: match[3] };
      }
      if (match = matchers.rgba.exec(color)) {
        return { r: match[1], g: match[2], b: match[3], a: match[4] };
      }
      if (match = matchers.hsl.exec(color)) {
        return { h: match[1], s: match[2], l: match[3] };
      }
      if (match = matchers.hsla.exec(color)) {
        return { h: match[1], s: match[2], l: match[3], a: match[4] };
      }
      if (match = matchers.hsv.exec(color)) {
        return { h: match[1], s: match[2], v: match[3] };
      }
      if (match = matchers.hsva.exec(color)) {
        return { h: match[1], s: match[2], v: match[3], a: match[4] };
      }
      if (match = matchers.hex8.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          a: convertHexToDecimal(match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex6.exec(color)) {
        return {
          r: parseIntFromHex(match[1]),
          g: parseIntFromHex(match[2]),
          b: parseIntFromHex(match[3]),
          format: named ? "name" : "hex"
        };
      }
      if (match = matchers.hex4.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          a: convertHexToDecimal(match[4] + "" + match[4]),
          format: named ? "name" : "hex8"
        };
      }
      if (match = matchers.hex3.exec(color)) {
        return {
          r: parseIntFromHex(match[1] + "" + match[1]),
          g: parseIntFromHex(match[2] + "" + match[2]),
          b: parseIntFromHex(match[3] + "" + match[3]),
          format: named ? "name" : "hex"
        };
      }
      return false;
    }
    function validateWCAG2Parms(parms) {
      var level, size;
      parms = parms || { "level": "AA", "size": "small" };
      level = (parms.level || "AA").toUpperCase();
      size = (parms.size || "small").toLowerCase();
      if (level !== "AA" && level !== "AAA") {
        level = "AA";
      }
      if (size !== "small" && size !== "large") {
        size = "small";
      }
      return { "level": level, "size": size };
    }
    if (module.exports) {
      module.exports = tinycolor2;
    } else {
      window.tinycolor = tinycolor2;
    }
  })(Math);
})(tinycolor);
function createBreakpoints() {
  const step = 5;
  const keys = ["xs", "sm", "md", "lg", "xl", "xxl"];
  const unit = "px";
  const values = {
    xs: 0,
    sm: 544,
    md: 769,
    lg: 992,
    xl: 1200,
    xxl: 1440
  };
  function up(key) {
    const value = typeof key === "number" ? key : values[key];
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof key === "number" ? key : values[key];
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  return {
    values,
    up,
    down,
    keys,
    unit
  };
}
function clamp(value, min = 0, max = 1) {
  return Math.min(Math.max(min, value), max);
}
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, "g");
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map((n2) => n2 + n2);
  }
  return colors ? `rgb${colors.length === 4 ? "a" : ""}(${colors.map((n2, index) => {
    return index < 3 ? parseInt(n2, 16) : Math.round(parseInt(n2, 16) / 255 * 1e3) / 1e3;
  }).join(", ")})` : "";
}
function hslToRgb(color) {
  const parts = decomposeColor(color);
  const { values } = parts;
  const h = values[0];
  const s = values[1] / 100;
  const l2 = values[2] / 100;
  const a = s * Math.min(l2, 1 - l2);
  const f2 = (n2, k = (n2 + h / 30) % 12) => l2 - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = "rgb";
  const rgb = [Math.round(f2(0) * 255), Math.round(f2(8) * 255), Math.round(f2(4) * 255)];
  if (parts.type === "hsla") {
    type += "a";
    rgb.push(values[3]);
  }
  return recomposeColor({ type, values: rgb });
}
function decomposeColor(color) {
  if (typeof color !== "string") {
    return color;
  }
  if (color.charAt(0) === "#") {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf("(");
  const type = color.substring(0, marker);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(type) === -1) {
    throw new Error(
      `Unsupported '${color}' color. The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()`
    );
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === "color") {
    values = values.split(" ");
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === "/") {
      values[3] = values[3].slice(1);
    }
    if (["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(colorSpace) === -1) {
      throw new Error(
        `Unsupported ${colorSpace} color space. The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.`
      );
    }
  } else {
    values = values.split(",");
  }
  values = values.map((value) => parseFloat(value));
  return { type, values, colorSpace };
}
function recomposeColor(color) {
  const { type, colorSpace } = color;
  let values = color.values;
  if (type.indexOf("rgb") !== -1) {
    values = values.map((n2, i) => i < 3 ? parseInt(n2, 10) : n2);
  } else if (type.indexOf("hsl") !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf("color") !== -1) {
    values = `${colorSpace} ${values.join(" ")}`;
  } else {
    values = `${values.join(", ")}`;
  }
  return `${type}(${values})`;
}
function getContrastRatio(foreground, background, canvas) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background, canvas);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}
function getLuminance(color, background) {
  const parts = decomposeColor(color);
  let rgb = parts.type === "hsl" ? decomposeColor(hslToRgb(color)).values : parts.values;
  if (background && parts.type === "rgba") {
    const backgroundParts = decomposeColor(background);
    const alpha2 = rgb[3];
    rgb[0] = rgb[0] * alpha2 + backgroundParts.values[0] * (1 - alpha2);
    rgb[1] = rgb[1] * alpha2 + backgroundParts.values[1] * (1 - alpha2);
    rgb[2] = rgb[2] * alpha2 + backgroundParts.values[2] * (1 - alpha2);
  }
  const rgbNumbers = rgb.map((val) => {
    if (parts.type !== "color") {
      val /= 255;
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });
  return Number((0.2126 * rgbNumbers[0] + 0.7152 * rgbNumbers[1] + 0.0722 * rgbNumbers[2]).toFixed(3));
}
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function alpha(color, value) {
  if (color === "") {
    return "#000000";
  }
  value = clamp(value);
  if (color[0] === "#") {
    if (color.length === 9) {
      color = color.substring(0, 7);
    } else if (color.length <= 5) {
      let c = "#";
      for (let i = 1; i < 4; i++) {
        c += color[i] + color[i];
      }
      color = c;
    }
    return color + Math.round(value * 255).toString(16).padStart(2, "0");
  } else if (color[3] === "(") {
    return color.replace(")", `, ${value})`);
  } else if (color[4] === "(") {
    return color.substring(0, color.lastIndexOf(",")) + `, ${value})`;
  }
  const parts = decomposeColor(color);
  if (parts.type === "color") {
    parts.values[3] = `/${value}`;
  } else {
    parts.values[3] = value;
  }
  return recomposeColor(parts);
}
function darken(color, coefficient) {
  const parts = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (parts.type.indexOf("hsl") !== -1) {
    parts.values[2] *= 1 - coefficient;
  } else if (parts.type.indexOf("rgb") !== -1 || parts.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      parts.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(parts);
}
function lighten(color, coefficient) {
  const parts = decomposeColor(color);
  coefficient = clamp(coefficient);
  if (parts.type.indexOf("hsl") !== -1) {
    parts.values[2] += (100 - parts.values[2]) * coefficient;
  } else if (parts.type.indexOf("rgb") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      parts.values[i] += (255 - parts.values[i]) * coefficient;
    }
  } else if (parts.type.indexOf("color") !== -1) {
    for (let i = 0; i < 3; i += 1) {
      parts.values[i] += (1 - parts.values[i]) * coefficient;
    }
  }
  return recomposeColor(parts);
}
const palette = {
  white: "#FFFFFF",
  black: "#000000",
  gray25: "#2c3235",
  gray15: "#22252b",
  gray10: "#181b1f",
  gray05: "#111217",
  darkLayer0: "#18181A",
  darkLayer1: "#212124",
  darkLayer2: "#2a2a2f",
  darkBorder1: "#34343B",
  darkBorder2: "#64646B",
  gray90: "#F4F5F5",
  gray100: "#F4F5F5",
  gray80: "#D0D1D3",
  lightBorder1: "#E4E7E7",
  blueDarkMain: "#3D71D9",
  blueDarkText: "#6E9FFF",
  redDarkMain: "#D10E5C",
  redDarkText: "#FF5286",
  greenDarkMain: "#1A7F4B",
  greenDarkText: "#6CCF8E",
  orangeDarkMain: "#F5B73D",
  orangeDarkText: "#F8D06B",
  blueLightMain: "#3871DC",
  blueLightText: "#1F62E0",
  redLightMain: "#E0226E",
  redLightText: "#CF0E5B",
  greenLightMain: "#1B855E",
  greenLightText: "#0A764E",
  orangeLightMain: "#FAD34A",
  orangeLightText: "#8A6C00"
};
var __defProp$3 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp$3.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum$3.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
class DarkColors {
  constructor() {
    this.mode = "dark";
    this.whiteBase = "204, 204, 220";
    this.border = {
      weak: `rgba(${this.whiteBase}, 0.07)`,
      medium: `rgba(${this.whiteBase}, 0.15)`,
      strong: `rgba(${this.whiteBase}, 0.25)`
    };
    this.text = {
      primary: `rgb(${this.whiteBase})`,
      secondary: `rgba(${this.whiteBase}, 0.65)`,
      disabled: `rgba(${this.whiteBase}, 0.6)`,
      link: palette.blueDarkText,
      maxContrast: palette.white
    };
    this.primary = {
      main: palette.blueDarkMain,
      text: palette.blueDarkText,
      border: palette.blueDarkText
    };
    this.secondary = {
      main: `rgba(${this.whiteBase}, 0.16)`,
      shade: `rgba(${this.whiteBase}, 0.20)`,
      text: this.text.primary,
      contrastText: `rgb(${this.whiteBase})`,
      border: this.border.strong
    };
    this.info = this.primary;
    this.error = {
      main: palette.redDarkMain,
      text: palette.redDarkText
    };
    this.success = {
      main: palette.greenDarkMain,
      text: palette.greenDarkText
    };
    this.warning = {
      main: palette.orangeDarkMain,
      text: palette.orangeDarkText
    };
    this.background = {
      canvas: palette.gray05,
      primary: palette.gray10,
      secondary: palette.gray15
    };
    this.action = {
      hover: `rgba(${this.whiteBase}, 0.16)`,
      selected: `rgba(${this.whiteBase}, 0.12)`,
      focus: `rgba(${this.whiteBase}, 0.16)`,
      hoverOpacity: 0.08,
      disabledText: this.text.disabled,
      disabledBackground: `rgba(${this.whiteBase}, 0.04)`,
      disabledOpacity: 0.38
    };
    this.gradients = {
      brandHorizontal: "linear-gradient(270deg, #F55F3E 0%, #FF8833 100%)",
      brandVertical: "linear-gradient(0.01deg, #F55F3E 0.01%, #FF8833 99.99%)"
    };
    this.contrastThreshold = 3;
    this.hoverFactor = 0.03;
    this.tonalOffset = 0.15;
  }
}
class LightColors {
  constructor() {
    this.mode = "light";
    this.blackBase = "36, 41, 46";
    this.primary = {
      main: palette.blueLightMain,
      border: palette.blueLightText,
      text: palette.blueLightText
    };
    this.text = {
      primary: `rgba(${this.blackBase}, 1)`,
      secondary: `rgba(${this.blackBase}, 0.75)`,
      disabled: `rgba(${this.blackBase}, 0.50)`,
      link: this.primary.text,
      maxContrast: palette.black
    };
    this.border = {
      weak: `rgba(${this.blackBase}, 0.12)`,
      medium: `rgba(${this.blackBase}, 0.30)`,
      strong: `rgba(${this.blackBase}, 0.40)`
    };
    this.secondary = {
      main: `rgba(${this.blackBase}, 0.16)`,
      shade: `rgba(${this.blackBase}, 0.20)`,
      contrastText: `rgba(${this.blackBase},  1)`,
      text: this.text.primary,
      border: this.border.strong
    };
    this.info = {
      main: palette.blueLightMain,
      text: palette.blueLightText
    };
    this.error = {
      main: palette.redLightMain,
      text: palette.redLightText,
      border: palette.redLightText
    };
    this.success = {
      main: palette.greenLightMain,
      text: palette.greenLightText
    };
    this.warning = {
      main: palette.orangeLightMain,
      text: palette.orangeLightText
    };
    this.background = {
      canvas: palette.gray90,
      primary: palette.white,
      secondary: palette.gray100
    };
    this.action = {
      hover: `rgba(${this.blackBase}, 0.12)`,
      selected: `rgba(${this.blackBase}, 0.08)`,
      hoverOpacity: 0.08,
      focus: `rgba(${this.blackBase}, 0.12)`,
      disabledBackground: `rgba(${this.blackBase}, 0.04)`,
      disabledText: this.text.disabled,
      disabledOpacity: 0.38
    };
    this.gradients = {
      brandHorizontal: "linear-gradient(90deg, #FF8833 0%, #F53E4C 100%)",
      brandVertical: "linear-gradient(0.01deg, #F53E4C -31.2%, #FF8833 113.07%)"
    };
    this.contrastThreshold = 3;
    this.hoverFactor = 0.03;
    this.tonalOffset = 0.2;
  }
}
function createColors(colors) {
  var _a;
  const dark = new DarkColors();
  const light = new LightColors();
  const base = ((_a = colors.mode) != null ? _a : "dark") === "dark" ? dark : light;
  const _b = colors, {
    primary = base.primary,
    secondary = base.secondary,
    info = base.info,
    warning = base.warning,
    success = base.success,
    error = base.error,
    tonalOffset = base.tonalOffset,
    hoverFactor = base.hoverFactor,
    contrastThreshold = base.contrastThreshold
  } = _b, other = __objRest(_b, [
    "primary",
    "secondary",
    "info",
    "warning",
    "success",
    "error",
    "tonalOffset",
    "hoverFactor",
    "contrastThreshold"
  ]);
  function getContrastText(background, threshold = contrastThreshold) {
    const contrastText = getContrastRatio(dark.text.maxContrast, background, base.background.primary) >= threshold ? dark.text.maxContrast : light.text.maxContrast;
    return contrastText;
  }
  const getRichColor = ({ color, name }) => {
    color = __spreadProps$2(__spreadValues$3({}, color), { name });
    if (!color.main) {
      throw new Error(`Missing main color for ${name}`);
    }
    if (!color.text) {
      color.text = color.main;
    }
    if (!color.border) {
      color.border = color.text;
    }
    if (!color.shade) {
      color.shade = base.mode === "light" ? darken(color.main, tonalOffset) : lighten(color.main, tonalOffset);
    }
    if (!color.transparent) {
      color.transparent = base.mode === "light" ? alpha(color.main, 0.08) : alpha(color.main, 0.15);
    }
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  return lodash.exports.merge(
    __spreadProps$2(__spreadValues$3({}, base), {
      primary: getRichColor({ color: primary, name: "primary" }),
      secondary: getRichColor({ color: secondary, name: "secondary" }),
      info: getRichColor({ color: info, name: "info" }),
      error: getRichColor({ color: error, name: "error" }),
      success: getRichColor({ color: success, name: "success" }),
      warning: getRichColor({ color: warning, name: "warning" }),
      getContrastText,
      emphasize: (color, factor) => {
        return emphasize(color, factor != null ? factor : hoverFactor);
      }
    }),
    other
  );
}
function createComponents(colors, shadows) {
  const panel = {
    padding: 1,
    headerHeight: 4,
    background: colors.background.primary,
    borderColor: colors.border.weak,
    boxShadow: "none"
  };
  const input = {
    borderColor: colors.border.medium,
    borderHover: colors.border.strong,
    text: colors.text.primary,
    background: colors.mode === "dark" ? colors.background.canvas : colors.background.primary
  };
  return {
    height: {
      sm: 3,
      md: 4,
      lg: 6
    },
    input,
    panel,
    dropdown: {
      background: input.background
    },
    tooltip: {
      background: colors.background.secondary,
      text: colors.text.primary
    },
    dashboard: {
      background: colors.background.canvas,
      padding: 1
    },
    overlay: {
      background: colors.mode === "dark" ? "rgba(63, 62, 62, 0.45)" : "rgba(208, 209, 211, 0.24)"
    },
    sidemenu: {
      width: 57
    },
    menuTabs: {
      height: 41
    },
    textHighlight: {
      text: colors.warning.contrastText,
      background: colors.warning.main
    },
    horizontalDrawer: {
      defaultHeight: 400
    }
  };
}
function createShadows(colors) {
  if (colors.mode === "dark") {
    return {
      z1: "0px 1px 2px rgba(24, 26, 27, 0.75)",
      z2: "0px 4px 8px rgba(24, 26, 27, 0.75)",
      z3: "0px 8px 24px rgb(1,4,9)"
    };
  }
  return {
    z1: "0px 1px 2px rgba(24, 26, 27, 0.2)",
    z2: "0px 4px 8px rgba(24, 26, 27, 0.2)",
    z3: "0px 13px 20px 1px rgba(24, 26, 27, 0.18)"
  };
}
function createShape(options2) {
  var _a;
  const baseBorderRadius = (_a = options2.borderRadius) != null ? _a : 2;
  const borderRadius = (amount) => {
    const value = (amount != null ? amount : 1) * baseBorderRadius;
    return `${value}px`;
  };
  return {
    borderRadius
  };
}
function createSpacing(options2 = {}) {
  const { gridSize = 8 } = options2;
  const transform = (value) => {
    if (typeof value === "string") {
      return value;
    }
    return value * gridSize;
  };
  const spacing = (...args) => {
    if (args.length === 0) {
      args[0] = 1;
    }
    return args.map((argument) => {
      const output = transform(argument);
      return typeof output === "number" ? `${output}px` : output;
    }).join(" ");
  };
  spacing.gridSize = gridSize;
  return spacing;
}
const easing = {
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
};
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  standard: 300,
  complex: 375,
  enteringScreen: 225,
  leavingScreen: 195
};
function create(props = ["all"], options2 = {}) {
  const { duration: durationOption = duration.standard, easing: easingOption = easing.easeInOut, delay = 0 } = options2;
  return (Array.isArray(props) ? props : [props]).map(
    (animatedProp) => `${animatedProp} ${typeof durationOption === "string" ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === "string" ? delay : formatMs(delay)}`
  ).join(",");
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function createTransitions() {
  return {
    create,
    duration,
    easing,
    getAutoHeightDuration
  };
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';
const defaultFontFamilyMonospace = "'Roboto Mono', monospace";
function createTypography(colors, typographyInput = {}) {
  const {
    fontFamily = defaultFontFamily,
    fontFamilyMonospace = defaultFontFamilyMonospace,
    fontSize = 14,
    fontWeightLight = 300,
    fontWeightRegular = 400,
    fontWeightMedium = 500,
    fontWeightBold = 500,
    htmlFontSize = 14
  } = typographyInput;
  const coef = fontSize / 14;
  const pxToRem = (size2) => `${size2 / htmlFontSize * coef}rem`;
  const buildVariant = (fontWeight, size2, lineHeight, letterSpacing, casing) => __spreadValues$2(__spreadValues$2({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size2),
    lineHeight
  }, fontFamily === defaultFontFamily ? { letterSpacing: `${round(letterSpacing / size2)}em` } : {}), casing);
  const variants = {
    h1: buildVariant(fontWeightLight, 28, 1.167, -0.25),
    h2: buildVariant(fontWeightLight, 24, 1.2, 0),
    h3: buildVariant(fontWeightRegular, 21, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 18, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 16, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 14, 1.6, 0.15),
    body: buildVariant(fontWeightRegular, 14, 1.5, 0.15),
    bodySmall: buildVariant(fontWeightRegular, 12, 1.5, 0.15)
  };
  const size = {
    base: "14px",
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "18px"
  };
  return __spreadValues$2({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontFamilyMonospace,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold,
    size
  }, variants);
}
function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
var GrafanaThemeType = /* @__PURE__ */ ((GrafanaThemeType2) => {
  GrafanaThemeType2["Light"] = "light";
  GrafanaThemeType2["Dark"] = "dark";
  return GrafanaThemeType2;
})(GrafanaThemeType || {});
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
function createV1Theme(theme) {
  const oldCommon = {
    name: "Grafana Default",
    typography: {
      fontFamily: {
        sansSerif: theme.typography.fontFamily,
        monospace: theme.typography.fontFamilyMonospace
      },
      size: {
        base: `${theme.typography.fontSize}px`,
        xs: theme.typography.size.xs,
        sm: theme.typography.size.sm,
        md: theme.typography.size.md,
        lg: theme.typography.size.lg
      },
      heading: {
        h1: theme.typography.h1.fontSize,
        h2: theme.typography.h2.fontSize,
        h3: theme.typography.h3.fontSize,
        h4: theme.typography.h4.fontSize,
        h5: theme.typography.h5.fontSize,
        h6: theme.typography.h6.fontSize
      },
      weight: {
        light: theme.typography.fontWeightLight,
        regular: theme.typography.fontWeightRegular,
        semibold: theme.typography.fontWeightMedium,
        bold: theme.typography.fontWeightBold
      },
      lineHeight: {
        xs: theme.typography.bodySmall.lineHeight,
        sm: theme.typography.bodySmall.lineHeight,
        md: theme.typography.body.lineHeight,
        lg: theme.typography.h2.lineHeight
      },
      link: {
        decoration: "none",
        hoverDecoration: "none"
      }
    },
    breakpoints: {
      xs: `${theme.breakpoints.values.xs}px`,
      sm: `${theme.breakpoints.values.sm}px`,
      md: `${theme.breakpoints.values.md}px`,
      lg: `${theme.breakpoints.values.lg}px`,
      xl: `${theme.breakpoints.values.xl}px`,
      xxl: `${theme.breakpoints.values.xxl}px`
    },
    spacing: {
      base: theme.spacing.gridSize,
      insetSquishMd: theme.spacing(0.5, 1),
      d: theme.spacing(2),
      xxs: theme.spacing(0.25),
      xs: theme.spacing(0.5),
      sm: theme.spacing(1),
      md: theme.spacing(2),
      lg: theme.spacing(3),
      xl: theme.spacing(4),
      gutter: theme.spacing(4),
      formSpacingBase: theme.spacing.gridSize,
      formMargin: `${theme.spacing.gridSize * 4}px`,
      formFieldsetMargin: `${theme.spacing.gridSize * 2}px`,
      formInputHeight: theme.spacing.gridSize * 4,
      formButtonHeight: theme.spacing.gridSize * 4,
      formInputPaddingHorizontal: `${theme.spacing.gridSize}px`,
      formInputAffixPaddingHorizontal: `${theme.spacing.gridSize / 2}px`,
      formInputMargin: `${theme.spacing.gridSize * 2}px`,
      formLabelPadding: "0 0 0 2px",
      formLabelMargin: `0 0 ${theme.spacing.gridSize / 2 + "px"} 0`,
      formValidationMessagePadding: "4px 8px",
      formValidationMessageMargin: "4px 0 0 0",
      inlineFormMargin: "4px"
    },
    border: {
      radius: {
        sm: theme.shape.borderRadius(1),
        md: theme.shape.borderRadius(2),
        lg: theme.shape.borderRadius(3)
      },
      width: {
        sm: "1px"
      }
    },
    height: {
      sm: theme.spacing.gridSize * theme.components.height.sm,
      md: theme.spacing.gridSize * theme.components.height.md,
      lg: theme.spacing.gridSize * theme.components.height.lg
    },
    panelPadding: theme.components.panel.padding * theme.spacing.gridSize,
    panelHeaderHeight: theme.spacing.gridSize * theme.components.panel.headerHeight,
    zIndex: theme.zIndex
  };
  const basicColors = __spreadProps$1(__spreadValues$1({}, commonColorsPalette), {
    black: "#000000",
    white: "#ffffff",
    dark1: "#141414",
    dark2: "#161719",
    dark3: "#1f1f20",
    dark4: "#212124",
    dark5: "#222426",
    dark6: "#262628",
    dark7: "#292a2d",
    dark8: "#2f2f32",
    dark9: "#343436",
    dark10: "#424345",
    gray1: "#555555",
    gray2: "#8e8e8e",
    gray3: "#b3b3b3",
    gray4: "#d8d9da",
    gray5: "#ececec",
    gray6: "#f4f5f8",
    gray7: "#fbfbfb",
    redBase: "#e02f44",
    redShade: "#c4162a",
    greenBase: "#299c46",
    greenShade: "#23843b",
    red: "#d44a3a",
    yellow: "#ecbb13",
    purple: "#9933cc",
    variable: "#32d1df",
    orange: "#eb7b18",
    orangeDark: "#ff780a"
  });
  const backgrounds = {
    bg1: theme.colors.background.primary,
    bg2: theme.colors.background.secondary,
    bg3: theme.colors.action.hover,
    dashboardBg: theme.colors.background.canvas,
    bgBlue1: theme.colors.primary.main,
    bgBlue2: theme.colors.primary.shade
  };
  const borders = {
    border1: theme.colors.border.weak,
    border2: theme.colors.border.medium,
    border3: theme.colors.border.strong
  };
  const textColors = {
    textStrong: theme.colors.text.maxContrast,
    textHeading: theme.colors.text.primary,
    text: theme.colors.text.primary,
    textSemiWeak: theme.colors.text.secondary,
    textWeak: theme.colors.text.secondary,
    textFaint: theme.colors.text.disabled,
    textBlue: theme.colors.primary.text
  };
  const form = {
    formLabel: theme.colors.text.primary,
    formDescription: theme.colors.text.secondary,
    formInputBg: theme.components.input.background,
    formInputBgDisabled: theme.colors.action.disabledBackground,
    formInputBorder: theme.components.input.borderColor,
    formInputBorderHover: theme.components.input.borderHover,
    formInputBorderActive: theme.colors.primary.border,
    formInputBorderInvalid: theme.colors.error.border,
    formInputPlaceholderText: theme.colors.text.disabled,
    formInputText: theme.components.input.text,
    formInputDisabledText: theme.colors.action.disabledText,
    formFocusOutline: theme.colors.primary.main,
    formValidationMessageText: theme.colors.error.contrastText,
    formValidationMessageBg: theme.colors.error.main
  };
  return __spreadProps$1(__spreadValues$1({}, oldCommon), {
    type: theme.colors.mode === "dark" ? GrafanaThemeType.Dark : GrafanaThemeType.Light,
    isDark: theme.isDark,
    isLight: theme.isLight,
    name: theme.name,
    palette: __spreadProps$1(__spreadValues$1({}, basicColors), {
      brandPrimary: basicColors.orange,
      brandSuccess: theme.colors.success.main,
      brandWarning: theme.colors.warning.main,
      brandDanger: theme.colors.error.main,
      queryRed: theme.colors.error.text,
      queryGreen: theme.colors.success.text,
      queryPurple: "#fe85fc",
      queryOrange: basicColors.orange,
      online: theme.colors.success.main,
      warn: theme.colors.success.main,
      critical: theme.colors.success.main
    }),
    colors: __spreadProps$1(__spreadValues$1(__spreadValues$1(__spreadValues$1(__spreadValues$1({}, backgrounds), borders), form), textColors), {
      bodyBg: theme.colors.background.canvas,
      panelBg: theme.components.panel.background,
      panelBorder: theme.components.panel.borderColor,
      pageHeaderBg: theme.colors.background.canvas,
      pageHeaderBorder: theme.colors.background.canvas,
      dropdownBg: form.formInputBg,
      dropdownShadow: basicColors.black,
      dropdownOptionHoverBg: backgrounds.bg2,
      link: theme.colors.text.primary,
      linkDisabled: theme.colors.text.disabled,
      linkHover: theme.colors.text.maxContrast,
      linkExternal: theme.colors.text.link
    }),
    shadows: {
      listItem: "none"
    },
    visualization: theme.visualization
  });
}
const commonColorsPalette = {
  gray98: "#f7f8fa",
  gray97: "#f1f5f9",
  gray95: "#e9edf2",
  gray90: "#dce1e6",
  gray85: "#c7d0d9",
  gray70: "#9fa7b3",
  gray60: "#7b8087",
  gray33: "#464c54",
  gray25: "#2c3235",
  gray15: "#202226",
  gray10: "#141619",
  gray05: "#0b0c0e",
  blue95: "#5794f2",
  blue85: "#33a2e5",
  blue80: "#3274d9",
  blue77: "#1f60c4",
  red88: "#e02f44"
};
function createVisualizationColors(colors) {
  const hues = colors.mode === "light" ? getLightHues() : getDarkHues();
  const byNameIndex = {};
  for (const hue of hues) {
    for (const shade of hue.shades) {
      byNameIndex[shade.name] = shade.color;
      if (shade.aliases) {
        for (const alias of shade.aliases) {
          byNameIndex[alias] = shade.color;
        }
      }
    }
  }
  byNameIndex["transparent"] = "rgba(0,0,0,0)";
  byNameIndex["panel-bg"] = colors.background.primary;
  byNameIndex["text"] = colors.text.primary;
  const getColorByName = (colorName) => {
    if (!colorName) {
      return FALLBACK_COLOR;
    }
    const realColor = byNameIndex[colorName];
    if (realColor) {
      return realColor;
    }
    if (colorName[0] === "#") {
      return colorName;
    }
    if (colorName.indexOf("rgb") > -1) {
      return colorName;
    }
    const nativeColor = nativeColorNames[colorName.toLowerCase()];
    if (nativeColor) {
      byNameIndex[colorName] = nativeColor;
      return nativeColor;
    }
    return colorName;
  };
  const palette2 = getClassicPalette();
  return {
    hues,
    palette: palette2,
    getColorByName
  };
}
function getDarkHues() {
  return [
    {
      name: "red",
      shades: [
        { color: "#FFA6B0", name: "super-light-red" },
        { color: "#FF7383", name: "light-red" },
        { color: "#F2495C", name: "red", primary: true },
        { color: "#E02F44", name: "semi-dark-red" },
        { color: "#C4162A", name: "dark-red" }
      ]
    },
    {
      name: "orange",
      shades: [
        { color: "#FFCB7D", name: "super-light-orange", aliases: [] },
        { color: "#FFB357", name: "light-orange", aliases: [] },
        { color: "#FF9830", name: "orange", aliases: [], primary: true },
        { color: "#FF780A", name: "semi-dark-orange", aliases: [] },
        { color: "#FA6400", name: "dark-orange", aliases: [] }
      ]
    },
    {
      name: "yellow",
      shades: [
        { color: "#FFF899", name: "super-light-yellow", aliases: [] },
        { color: "#FFEE52", name: "light-yellow", aliases: [] },
        { color: "#FADE2A", name: "yellow", aliases: [], primary: true },
        { color: "#F2CC0C", name: "semi-dark-yellow", aliases: [] },
        { color: "#E0B400", name: "dark-yellow", aliases: [] }
      ]
    },
    {
      name: "green",
      shades: [
        { color: "#C8F2C2", name: "super-light-green", aliases: [] },
        { color: "#96D98D", name: "light-green", aliases: [] },
        { color: "#73BF69", name: "green", aliases: [], primary: true },
        { color: "#56A64B", name: "semi-dark-green", aliases: [] },
        { color: "#37872D", name: "dark-green", aliases: [] }
      ]
    },
    {
      name: "blue",
      shades: [
        { color: "#C0D8FF", name: "super-light-blue", aliases: [] },
        { color: "#8AB8FF", name: "light-blue", aliases: [] },
        { color: "#5794F2", name: "blue", aliases: [], primary: true },
        { color: "#3274D9", name: "semi-dark-blue", aliases: [] },
        { color: "#1F60C4", name: "dark-blue", aliases: [] }
      ]
    },
    {
      name: "purple",
      shades: [
        { color: "#DEB6F2", name: "super-light-purple", aliases: [] },
        { color: "#CA95E5", name: "light-purple", aliases: [] },
        { color: "#B877D9", name: "purple", aliases: [], primary: true },
        { color: "#A352CC", name: "semi-dark-purple", aliases: [] },
        { color: "#8F3BB8", name: "dark-purple", aliases: [] }
      ]
    }
  ];
}
function getLightHues() {
  return [
    {
      name: "red",
      shades: [
        { color: "#FF7383", name: "super-light-red" },
        { color: "#F2495C", name: "light-red" },
        { color: "#E02F44", name: "red", primary: true },
        { color: "#C4162A", name: "semi-dark-red" },
        { color: "#AD0317", name: "dark-red" }
      ]
    },
    {
      name: "orange",
      shades: [
        { color: "#FFB357", name: "super-light-orange", aliases: [] },
        { color: "#FF9830", name: "light-orange", aliases: [] },
        { color: "#FF780A", name: "orange", aliases: [], primary: true },
        { color: "#FA6400", name: "semi-dark-orange", aliases: [] },
        { color: "#E55400", name: "dark-orange", aliases: [] }
      ]
    },
    {
      name: "yellow",
      shades: [
        { color: "#FFEE52", name: "super-light-yellow", aliases: [] },
        { color: "#FADE2A", name: "light-yellow", aliases: [] },
        { color: "#F2CC0C", name: "yellow", aliases: [], primary: true },
        { color: "#E0B400", name: "semi-dark-yellow", aliases: [] },
        { color: "#CC9D00", name: "dark-yellow", aliases: [] }
      ]
    },
    {
      name: "green",
      shades: [
        { color: "#96D98D", name: "super-light-green", aliases: [] },
        { color: "#73BF69", name: "light-green", aliases: [] },
        { color: "#56A64B", name: "green", aliases: [], primary: true },
        { color: "#37872D", name: "semi-dark-green", aliases: [] },
        { color: "#19730E", name: "dark-green", aliases: [] }
      ]
    },
    {
      name: "blue",
      shades: [
        { color: "#8AB8FF", name: "super-light-blue", aliases: [] },
        { color: "#5794F2", name: "light-blue", aliases: [] },
        { color: "#3274D9", name: "blue", aliases: [], primary: true },
        { color: "#1F60C4", name: "semi-dark-blue", aliases: [] },
        { color: "#1250B0", name: "dark-blue", aliases: [] }
      ]
    },
    {
      name: "purple",
      shades: [
        { color: "#CA95E5", name: "super-light-purple", aliases: [] },
        { color: "#B877D9", name: "light-purple", aliases: [] },
        { color: "#A352CC", name: "purple", aliases: [], primary: true },
        { color: "#8F3BB8", name: "semi-dark-purple", aliases: [] },
        { color: "#7C2EA3", name: "dark-purple", aliases: [] }
      ]
    }
  ];
}
function getClassicPalette() {
  return [
    "green",
    "semi-dark-yellow",
    "light-blue",
    "semi-dark-orange",
    "red",
    "blue",
    "purple",
    "#705DA0",
    "dark-green",
    "yellow",
    "#447EBC",
    "#C15C17",
    "#890F02",
    "#0A437C",
    "#6D1F62",
    "#584477",
    "#B7DBAB",
    "#F4D598",
    "#70DBED",
    "#F9BA8F",
    "#F29191",
    "#82B5D8",
    "#E5A8E2",
    "#AEA2E0",
    "#629E51",
    "#E5AC0E",
    "#64B0C8",
    "#E0752D",
    "#BF1B00",
    "#0A50A1",
    "#962D82",
    "#614D93",
    "#9AC48A",
    "#F2C96D",
    "#65C5DB",
    "#F9934E",
    "#EA6460",
    "#5195CE",
    "#D683CE",
    "#806EB7",
    "#3F6833",
    "#967302",
    "#2F575E",
    "#99440A",
    "#58140C",
    "#052B51",
    "#511749",
    "#3F2B5B",
    "#E0F9D7",
    "#FCEACA",
    "#CFFAFF",
    "#F9E2D2",
    "#FCE2DE",
    "#BADFF4",
    "#F9D9F9",
    "#DEDAF7"
  ];
}
const nativeColorNames = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  gold: "#ffd700",
  goldenrod: "#daa520",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  "indianred ": "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavender: "#e6e6fa",
  lavenderblush: "#fff0f5",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgrey: "#d3d3d3",
  lightgreen: "#90ee90",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370d8",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#d87093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
const zIndex = {
  navbarFixed: 1e3,
  sidemenu: 1020,
  dropdown: 1030,
  typeahead: 1030,
  tooltip: 1040,
  modalBackdrop: 1050,
  modal: 1060,
  portal: 1061
};
var __defProp2 = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp2(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp2(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
function createTheme(options2 = {}) {
  const {
    colors: colorsInput = {},
    spacing: spacingInput = {},
    shape: shapeInput = {},
    typography: typographyInput = {}
  } = options2;
  const colors = createColors(colorsInput);
  const breakpoints = createBreakpoints();
  const spacing = createSpacing(spacingInput);
  const shape = createShape(shapeInput);
  const typography = createTypography(colors, typographyInput);
  const shadows = createShadows(colors);
  const transitions = createTransitions();
  const components = createComponents(colors);
  const visualization = createVisualizationColors(colors);
  const theme = {
    name: colors.mode === "dark" ? "Dark" : "Light",
    isDark: colors.mode === "dark",
    isLight: colors.mode === "light",
    colors,
    breakpoints,
    spacing,
    shape,
    components,
    typography,
    shadows,
    transitions,
    visualization,
    zIndex: __spreadValues({}, zIndex),
    flags: {}
  };
  return __spreadProps(__spreadValues({}, theme), {
    v1: createV1Theme(theme)
  });
}
class GrafanaBootConfig {
  constructor(options2) {
    __publicField(this, "isPublicDashboardView");
    __publicField(this, "datasources", {});
    __publicField(this, "panels", {});
    __publicField(this, "auth", {});
    __publicField(this, "minRefreshInterval", "");
    __publicField(this, "appUrl", "");
    __publicField(this, "appSubUrl", "");
    __publicField(this, "windowTitlePrefix", "");
    __publicField(this, "buildInfo");
    __publicField(this, "newPanelTitle", "");
    __publicField(this, "bootData");
    __publicField(this, "externalUserMngLinkUrl", "");
    __publicField(this, "externalUserMngLinkName", "");
    __publicField(this, "externalUserMngInfo", "");
    __publicField(this, "allowOrgCreate", false);
    __publicField(this, "feedbackLinksEnabled", true);
    __publicField(this, "disableLoginForm", false);
    __publicField(this, "defaultDatasource", "");
    __publicField(this, "alertingEnabled", false);
    __publicField(this, "alertingErrorOrTimeout", "");
    __publicField(this, "alertingNoDataOrNullValues", "");
    __publicField(this, "alertingMinInterval", 1);
    __publicField(this, "angularSupportEnabled", false);
    __publicField(this, "authProxyEnabled", false);
    __publicField(this, "exploreEnabled", false);
    __publicField(this, "queryHistoryEnabled", false);
    __publicField(this, "helpEnabled", false);
    __publicField(this, "profileEnabled", false);
    __publicField(this, "ldapEnabled", false);
    __publicField(this, "jwtHeaderName", "");
    __publicField(this, "jwtUrlLogin", false);
    __publicField(this, "sigV4AuthEnabled", false);
    __publicField(this, "azureAuthEnabled", false);
    __publicField(this, "samlEnabled", false);
    __publicField(this, "samlName", "");
    __publicField(this, "autoAssignOrg", true);
    __publicField(this, "verifyEmailEnabled", false);
    __publicField(this, "oauth", {});
    __publicField(this, "rbacEnabled", true);
    __publicField(this, "disableUserSignUp", false);
    __publicField(this, "loginHint", "");
    __publicField(this, "passwordHint", "");
    __publicField(this, "loginError");
    __publicField(this, "viewersCanEdit", false);
    __publicField(this, "editorsCanAdmin", false);
    __publicField(this, "disableSanitizeHtml", false);
    __publicField(this, "liveEnabled", true);
    __publicField(this, "theme");
    __publicField(this, "theme2");
    __publicField(this, "pluginsToPreload", []);
    __publicField(this, "featureToggles", {});
    __publicField(this, "licenseInfo", {});
    __publicField(this, "rendererAvailable", false);
    __publicField(this, "dashboardPreviews", { systemRequirements: { met: false, requiredImageRendererPluginVersion: "" }, thumbnailsExist: false });
    __publicField(this, "rendererVersion", "");
    __publicField(this, "secretsManagerPluginEnabled", false);
    __publicField(this, "http2Enabled", false);
    __publicField(this, "dateFormats");
    __publicField(this, "sentry", {
      enabled: false,
      dsn: "",
      customEndpoint: "",
      sampleRate: 1
    });
    __publicField(this, "grafanaJavascriptAgent", {
      enabled: false,
      customEndpoint: "",
      apiKey: "",
      errorInstrumentalizationEnabled: true,
      consoleInstrumentalizationEnabled: false,
      webVitalsInstrumentalizationEnabled: false
    });
    __publicField(this, "pluginCatalogURL", "https://grafana.com/grafana/plugins/");
    __publicField(this, "pluginAdminEnabled", true);
    __publicField(this, "pluginAdminExternalManageEnabled", false);
    __publicField(this, "pluginCatalogHiddenPlugins", []);
    __publicField(this, "expressionsEnabled", false);
    __publicField(this, "customTheme");
    __publicField(this, "awsAllowedAuthProviders", []);
    __publicField(this, "awsAssumeRoleEnabled", false);
    __publicField(this, "azure", {
      managedIdentityEnabled: false
    });
    __publicField(this, "caching", {
      enabled: false
    });
    __publicField(this, "geomapDefaultBaseLayerConfig");
    __publicField(this, "geomapDisableCustomBaseLayer");
    __publicField(this, "unifiedAlertingEnabled", false);
    __publicField(this, "unifiedAlerting", { minInterval: "" });
    __publicField(this, "applicationInsightsConnectionString");
    __publicField(this, "applicationInsightsEndpointUrl");
    __publicField(this, "recordedQueries", {
      enabled: true
    });
    __publicField(this, "featureHighlights", {
      enabled: false
    });
    __publicField(this, "reporting", {
      enabled: true
    });
    __publicField(this, "googleAnalyticsId");
    __publicField(this, "googleAnalytics4Id");
    __publicField(this, "rudderstackWriteKey");
    __publicField(this, "rudderstackDataPlaneUrl");
    __publicField(this, "rudderstackSdkUrl");
    __publicField(this, "rudderstackConfigUrl");
    this.bootData = options2.bootData;
    this.isPublicDashboardView = options2.bootData.settings.isPublicDashboardView;
    const defaults = {
      datasources: {},
      windowTitlePrefix: "Grafana - ",
      panels: {},
      newPanelTitle: "Panel Title",
      playlist_timespan: "1m",
      unsaved_changes_warning: true,
      appUrl: "",
      appSubUrl: "",
      buildInfo: {
        version: "1.0",
        commit: "1",
        env: "production"
      },
      viewersCanEdit: false,
      editorsCanAdmin: false,
      disableSanitizeHtml: false
    };
    lodash.exports.merge(this, defaults, options2);
    this.buildInfo = options2.buildInfo || defaults.buildInfo;
    if (this.dateFormats) {
      systemDateFormats.update(this.dateFormats);
    }
    overrideFeatureTogglesFromUrl(this);
    this.theme2 = createTheme(getThemeCustomizations(this));
    this.theme = this.theme2.v1;
    this.theme2.flags.topnav = this.featureToggles.topnav;
  }
}
function getThemeCustomizations(config2) {
  const mode = config2.bootData.user.lightTheme ? "light" : "dark";
  const themeOptions = {
    colors: { mode }
  };
  if (config2.featureToggles.interFont) {
    themeOptions.typography = { fontFamily: '"Inter", "Helvetica", "Arial", sans-serif' };
  }
  return themeOptions;
}
function overrideFeatureTogglesFromUrl(config2) {
  if (window.location.href.indexOf("__feature") === -1) {
    return;
  }
  const params = new URLSearchParams(window.location.search);
  params.forEach((value, key) => {
    if (key.startsWith("__feature.")) {
      const featureName = key.substring(10);
      const toggleState = value === "true";
      if (toggleState !== config2.featureToggles[key]) {
        config2.featureToggles[featureName] = toggleState;
        console.log(`Setting feature toggle ${featureName} = ${toggleState}`);
      }
    }
  });
}
const bootData = window.grafanaBootData || {
  settings: {},
  user: {},
  navTree: []
};
const options = bootData.settings;
options.bootData = bootData;
const config = new GrafanaBootConfig(options);
function commonjsRequire(path) {
  throw new Error('Could not dynamically require "' + path + '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.');
}
var system = { exports: {} };
const __viteBrowserExternal = {};
const __viteBrowserExternal$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
const require$$0 = /* @__PURE__ */ getAugmentedNamespace(__viteBrowserExternal$1);
(function(module) {
  !function() {
    function e(e2) {
      return ut ? Symbol() : "@@" + e2;
    }
    function t2(e2, t3) {
      ot || (t3 = t3.replace(at ? /file:\/\/\//g : /file:\/\//g, ""));
      var r3, n3 = (e2.message || e2) + "\n  " + t3;
      r3 = ft && e2.fileName ? new Error(n3, e2.fileName, e2.lineNumber) : new Error(n3);
      var o2 = e2.originalErr ? e2.originalErr.stack : e2.stack;
      return r3.stack = it ? n3 + "\n  " + o2 : o2, r3.originalErr = e2.originalErr || e2, r3;
    }
    function r2(e2, t3) {
      throw new RangeError('Unable to resolve "' + e2 + '" to ' + t3);
    }
    function n2(e2, t3) {
      e2 = e2.trim();
      var n3 = t3 && t3.substr(0, t3.indexOf(":") + 1), o2 = e2[0], i2 = e2[1];
      if ("/" === o2 && "/" === i2)
        return n3 || r2(e2, t3), n3 + e2;
      if ("." === o2 && ("/" === i2 || "." === i2 && ("/" === e2[2] || 2 === e2.length && (e2 += "/")) || 1 === e2.length && (e2 += "/")) || "/" === o2) {
        var a2, s2 = !n3 || "/" !== t3[n3.length];
        if (s2 ? (void 0 === t3 && r2(e2, t3), a2 = t3) : a2 = "/" === t3[n3.length + 1] ? "file:" !== n3 ? (a2 = t3.substr(n3.length + 2)).substr(a2.indexOf("/") + 1) : t3.substr(8) : t3.substr(n3.length + 1), "/" === o2) {
          if (!s2)
            return t3.substr(0, t3.length - a2.length - 1) + e2;
          r2(e2, t3);
        }
        for (var u3 = a2.substr(0, a2.lastIndexOf("/") + 1) + e2, l3 = [], c2 = -1, f3 = 0; f3 < u3.length; f3++)
          if (-1 === c2)
            if ("." !== u3[f3])
              c2 = f3;
            else {
              if ("." !== u3[f3 + 1] || "/" !== u3[f3 + 2] && f3 + 2 !== u3.length) {
                if ("/" !== u3[f3 + 1] && f3 + 1 !== u3.length) {
                  c2 = f3;
                  continue;
                }
                f3 += 1;
              } else
                l3.pop(), f3 += 2;
              s2 && 0 === l3.length && r2(e2, t3);
            }
          else
            "/" === u3[f3] && (l3.push(u3.substring(c2, f3 + 1)), c2 = -1);
        return -1 !== c2 && l3.push(u3.substr(c2)), t3.substr(0, t3.length - a2.length) + l3.join("");
      }
      return -1 !== e2.indexOf(":") ? it && ":" === e2[1] && "\\" === e2[2] && e2[0].match(/[a-z]/i) ? "file:///" + e2.replace(/\\/g, "/") : e2 : void 0;
    }
    function o(e2) {
      if (e2.values)
        return e2.values();
      if ("undefined" == typeof Symbol || !Symbol.iterator)
        throw new Error("Symbol.iterator not supported in this browser");
      var t3 = {};
      return t3[Symbol.iterator] = function() {
        var t4 = Object.keys(e2), r3 = 0;
        return { next: function() {
          return r3 < t4.length ? { value: e2[t4[r3++]], done: false } : { value: void 0, done: true };
        } };
      }, t3;
    }
    function i() {
      this.registry = new u2();
    }
    function a(e2) {
      if (!(e2 instanceof l2))
        throw new TypeError("Module instantiation did not return a valid namespace object.");
      return e2;
    }
    function s(e2) {
      if (void 0 === e2)
        throw new RangeError("No resolution found.");
      return e2;
    }
    function u2() {
      this[mt] = {};
    }
    function l2(e2) {
      Object.defineProperty(this, vt, { value: e2 }), Object.keys(e2).forEach(c, this);
    }
    function c(e2) {
      Object.defineProperty(this, e2, { enumerable: true, get: function() {
        return this[vt][e2];
      } });
    }
    function f2() {
      i.call(this);
      var e2 = this.registry.delete;
      this.registry.delete = function(r3) {
        var n3 = e2.call(this, r3);
        return t3.hasOwnProperty(r3) && !t3[r3].linkRecord && (delete t3[r3], n3 = true), n3;
      };
      var t3 = {};
      this[yt] = { lastRegister: void 0, records: t3 }, this.trace = false;
    }
    function d(e2, t3, r3) {
      return e2.records[t3] = { key: t3, registration: r3, module: void 0, importerSetters: void 0, loadError: void 0, evalError: void 0, linkRecord: { instantiatePromise: void 0, dependencies: void 0, execute: void 0, executingRequire: false, moduleObj: void 0, setters: void 0, depsInstantiatePromise: void 0, dependencyInstantiations: void 0 } };
    }
    function p2(e2, t3, r3, n3, o2) {
      var i2 = n3[t3];
      if (i2)
        return Promise.resolve(i2);
      var a2 = o2.records[t3];
      return a2 && !a2.module ? a2.loadError ? Promise.reject(a2.loadError) : h(e2, a2, a2.linkRecord, n3, o2) : e2.resolve(t3, r3).then(function(t4) {
        if (i2 = n3[t4])
          return i2;
        if ((a2 = o2.records[t4]) && !a2.module || (a2 = d(o2, t4, a2 && a2.registration)), a2.loadError)
          return Promise.reject(a2.loadError);
        var r4 = a2.linkRecord;
        return r4 ? h(e2, a2, r4, n3, o2) : a2;
      });
    }
    function g2(e2, t3, r3) {
      return function() {
        var e3 = r3.lastRegister;
        return e3 ? (r3.lastRegister = void 0, t3.registration = e3, true) : !!t3.registration;
      };
    }
    function h(e2, r3, n3, o2, i2) {
      return n3.instantiatePromise || (n3.instantiatePromise = (r3.registration ? Promise.resolve() : Promise.resolve().then(function() {
        return i2.lastRegister = void 0, e2[bt](r3.key, e2[bt].length > 1 && g2(e2, r3, i2));
      })).then(function(t3) {
        if (void 0 !== t3) {
          if (!(t3 instanceof l2))
            throw new TypeError("Instantiate did not return a valid Module object.");
          return delete i2.records[r3.key], e2.trace && v2(e2, r3, n3), o2[r3.key] = t3;
        }
        var a2 = r3.registration;
        if (r3.registration = void 0, !a2)
          throw new TypeError("Module instantiation did not call an anonymous or correctly named System.register.");
        return n3.dependencies = a2[0], r3.importerSetters = [], n3.moduleObj = {}, a2[2] ? (n3.moduleObj.default = n3.moduleObj.__useDefault = {}, n3.executingRequire = a2[1], n3.execute = a2[2]) : y2(e2, r3, n3, a2[1]), r3;
      }).catch(function(e3) {
        throw r3.linkRecord = void 0, r3.loadError = r3.loadError || t2(e3, "Instantiating " + r3.key);
      }));
    }
    function m2(e2, t3, r3, n3, o2, i2) {
      return e2.resolve(t3, r3).then(function(r4) {
        i2 && (i2[t3] = r4);
        var a2 = o2.records[r4], s2 = n3[r4];
        if (s2 && (!a2 || a2.module && s2 !== a2.module))
          return s2;
        if (a2 && a2.loadError)
          throw a2.loadError;
        (!a2 || !s2 && a2.module) && (a2 = d(o2, r4, a2 && a2.registration));
        var u3 = a2.linkRecord;
        return u3 ? h(e2, a2, u3, n3, o2) : a2;
      });
    }
    function v2(e2, t3, r3) {
      e2.loads = e2.loads || {}, e2.loads[t3.key] = { key: t3.key, deps: r3.dependencies, dynamicDeps: [], depMap: r3.depMap || {} };
    }
    function y2(e2, t3, r3, n3) {
      var o2 = r3.moduleObj, i2 = t3.importerSetters, a2 = false, s2 = n3.call(st, function(e3, t4) {
        if ("object" == typeof e3) {
          var r4 = false;
          for (var n4 in e3)
            t4 = e3[n4], "__useDefault" === n4 || n4 in o2 && o2[n4] === t4 || (r4 = true, o2[n4] = t4);
          if (false === r4)
            return t4;
        } else {
          if ((a2 || e3 in o2) && o2[e3] === t4)
            return t4;
          o2[e3] = t4;
        }
        for (var s3 = 0; s3 < i2.length; s3++)
          i2[s3](o2);
        return t4;
      }, new x2(e2, t3.key));
      r3.setters = s2.setters, r3.execute = s2.execute, s2.exports && (r3.moduleObj = o2 = s2.exports, a2 = true);
    }
    function b(e2, r3, n3, o2, i2) {
      if (n3.depsInstantiatePromise)
        return n3.depsInstantiatePromise;
      for (var a2 = Array(n3.dependencies.length), s2 = 0; s2 < n3.dependencies.length; s2++)
        a2[s2] = m2(e2, n3.dependencies[s2], r3.key, o2, i2, e2.trace && n3.depMap || (n3.depMap = {}));
      var u3 = Promise.all(a2).then(function(e3) {
        if (n3.dependencyInstantiations = e3, n3.setters)
          for (var t3 = 0; t3 < e3.length; t3++) {
            var o3 = n3.setters[t3];
            if (o3) {
              var i3 = e3[t3];
              if (i3 instanceof l2)
                o3(i3);
              else {
                if (i3.loadError)
                  throw i3.loadError;
                o3(i3.module || i3.linkRecord.moduleObj), i3.importerSetters && i3.importerSetters.push(o3);
              }
            }
          }
        return r3;
      });
      return e2.trace && (u3 = u3.then(function() {
        return v2(e2, r3, n3), r3;
      })), (u3 = u3.catch(function(e3) {
        throw n3.depsInstantiatePromise = void 0, t2(e3, "Loading " + r3.key);
      })).catch(function() {
      }), n3.depsInstantiatePromise = u3;
    }
    function w(e2, t3, r3, n3, o2) {
      return new Promise(function(r4, i2) {
        function a2(t4) {
          var r5 = t4.linkRecord;
          r5 && -1 === u3.indexOf(t4) && (u3.push(t4), c2++, b(e2, t4, r5, n3, o2).then(s2, i2));
        }
        function s2(e3) {
          c2--;
          var t4 = e3.linkRecord;
          if (t4)
            for (var n4 = 0; n4 < t4.dependencies.length; n4++) {
              var o3 = t4.dependencyInstantiations[n4];
              o3 instanceof l2 || a2(o3);
            }
          0 === c2 && r4();
        }
        var u3 = [], c2 = 0;
        a2(t3);
      });
    }
    function x2(e2, t3) {
      this.loader = e2, this.key = this.id = t3, this.meta = { url: t3 };
    }
    function k(e2, t3, r3, n3, o2, i2) {
      if (t3.module)
        return t3.module;
      if (t3.evalError)
        throw t3.evalError;
      if (i2 && -1 !== i2.indexOf(t3))
        return t3.linkRecord.moduleObj;
      var a2 = O2(e2, t3, r3, n3, o2, r3.setters ? [] : i2 || []);
      if (a2)
        throw a2;
      return t3.module;
    }
    function E2(e2, t3, r3, n3, o2, i2, a2) {
      return function(s2) {
        for (var u3 = 0; u3 < r3.length; u3++)
          if (r3[u3] === s2) {
            var c2, f3 = n3[u3];
            return c2 = f3 instanceof l2 ? f3 : k(e2, f3, f3.linkRecord, o2, i2, a2), "__useDefault" in c2 ? c2.__useDefault : c2;
          }
        throw new Error("Module " + s2 + " not declared as a System.registerDynamic dependency of " + t3);
      };
    }
    function O2(e2, r3, n3, o2, i2, a2) {
      a2.push(r3);
      var s2;
      if (n3.setters) {
        for (var u3, c2, f3 = 0; f3 < n3.dependencies.length; f3++)
          if (!((u3 = n3.dependencyInstantiations[f3]) instanceof l2) && ((c2 = u3.linkRecord) && -1 === a2.indexOf(u3) && (s2 = u3.evalError ? u3.evalError : O2(e2, u3, c2, o2, i2, c2.setters ? a2 : [])), s2))
            return r3.linkRecord = void 0, r3.evalError = t2(s2, "Evaluating " + r3.key), r3.evalError;
      }
      if (n3.execute)
        if (n3.setters)
          s2 = S2(n3.execute);
        else {
          var d2 = { id: r3.key }, p3 = n3.moduleObj;
          Object.defineProperty(d2, "exports", { configurable: true, set: function(e3) {
            p3.default = p3.__useDefault = e3;
          }, get: function() {
            return p3.__useDefault;
          } });
          var g3 = E2(e2, r3.key, n3.dependencies, n3.dependencyInstantiations, o2, i2, a2);
          if (!n3.executingRequire)
            for (f3 = 0; f3 < n3.dependencies.length; f3++)
              g3(n3.dependencies[f3]);
          s2 = j(n3.execute, g3, p3.default, d2), d2.exports !== p3.__useDefault && (p3.default = p3.__useDefault = d2.exports);
          var h2 = p3.default;
          if (h2 && h2.__esModule)
            for (var m3 in h2)
              Object.hasOwnProperty.call(h2, m3) && (p3[m3] = h2[m3]);
        }
      if (r3.linkRecord = void 0, s2)
        return r3.evalError = t2(s2, "Evaluating " + r3.key);
      if (o2[r3.key] = r3.module = new l2(n3.moduleObj), !n3.setters) {
        if (r3.importerSetters)
          for (f3 = 0; f3 < r3.importerSetters.length; f3++)
            r3.importerSetters[f3](r3.module);
        r3.importerSetters = void 0;
      }
    }
    function S2(e2) {
      try {
        e2.call(wt);
      } catch (e3) {
        return e3;
      }
    }
    function j(e2, t3, r3, n3) {
      try {
        var o2 = e2.call(st, t3, r3, n3);
        void 0 !== o2 && (n3.exports = o2);
      } catch (e3) {
        return e3;
      }
    }
    function _() {
    }
    function P2(e2) {
      return e2 instanceof l2 ? e2 : new l2(e2 && e2.__esModule ? e2 : { default: e2, __useDefault: e2 });
    }
    function M2(e2) {
      return void 0 === xt && (xt = "undefined" != typeof Symbol && !!Symbol.toStringTag), e2 instanceof l2 || xt && "[object Module]" == Object.prototype.toString.call(e2);
    }
    function R2(e2, t3) {
      (t3 || this.warnings && "undefined" != typeof console && console.warn) && console.warn(e2);
    }
    function C2(e2, t3, r3) {
      var n3 = new Uint8Array(t3);
      return 0 === n3[0] && 97 === n3[1] && 115 === n3[2] ? WebAssembly.compile(t3).then(function(t4) {
        var n4 = [], o2 = [], i2 = {};
        return WebAssembly.Module.imports && WebAssembly.Module.imports(t4).forEach(function(e3) {
          var t5 = e3.module;
          o2.push(function(e4) {
            i2[t5] = e4;
          }), -1 === n4.indexOf(t5) && n4.push(t5);
        }), e2.register(n4, function(e3) {
          return { setters: o2, execute: function() {
            e3(new WebAssembly.Instance(t4, i2).exports);
          } };
        }), r3(), true;
      }) : Promise.resolve(false);
    }
    function L2(e2, t3) {
      if ("." === e2[0])
        throw new Error("Node module " + e2 + " can't be loaded as it is not a package require.");
      if (!kt) {
        var r3 = this._nodeRequire("module"), n3 = decodeURI(t3.substr(at ? 8 : 7));
        (kt = new r3(n3)).paths = r3._nodeModulePaths(n3);
      }
      return kt.require(e2);
    }
    function A2(e2, t3) {
      for (var r3 in t3)
        Object.hasOwnProperty.call(t3, r3) && (e2[r3] = t3[r3]);
      return e2;
    }
    function I2(e2, t3) {
      for (var r3 in t3)
        Object.hasOwnProperty.call(t3, r3) && void 0 === e2[r3] && (e2[r3] = t3[r3]);
      return e2;
    }
    function F2(e2, t3, r3) {
      for (var n3 in t3)
        if (Object.hasOwnProperty.call(t3, n3)) {
          var o2 = t3[n3];
          void 0 === e2[n3] ? e2[n3] = o2 : o2 instanceof Array && e2[n3] instanceof Array ? e2[n3] = [].concat(r3 ? o2 : e2[n3]).concat(r3 ? e2[n3] : o2) : "object" == typeof o2 && null !== o2 && "object" == typeof e2[n3] ? e2[n3] = (r3 ? I2 : A2)(A2({}, e2[n3]), o2) : r3 || (e2[n3] = o2);
        }
    }
    function K2(e2) {
      if (Pt || Mt) {
        var t3 = document.createElement("link");
        Pt ? (t3.rel = "preload", t3.as = "script") : t3.rel = "prefetch", t3.href = e2, document.head.appendChild(t3);
      } else
        new Image().src = e2;
    }
    function D2(e2, t3, r3) {
      try {
        importScripts(e2);
      } catch (e3) {
        r3(e3);
      }
      t3();
    }
    function U(e2, t3, r3, n3, o2) {
      function i2() {
        n3(), s2();
      }
      function a2(t4) {
        s2(), o2(new Error("Fetching " + e2));
      }
      function s2() {
        for (var e3 = 0; e3 < Rt.length; e3++)
          if (Rt[e3].err === a2) {
            Rt.splice(e3, 1);
            break;
          }
        u3.removeEventListener("load", i2, false), u3.removeEventListener("error", a2, false), document.head.removeChild(u3);
      }
      if (e2 = e2.replace(/#/g, "%23"), _t)
        return D2(e2, n3, o2);
      var u3 = document.createElement("script");
      u3.type = "text/javascript", u3.charset = "utf-8", u3.async = true, t3 && (u3.crossOrigin = t3), r3 && (u3.integrity = r3), u3.addEventListener("load", i2, false), u3.addEventListener("error", a2, false), u3.src = e2, document.head.appendChild(u3);
    }
    function q2(e2, t3) {
      for (var r3 = e2.split("."); r3.length; )
        t3 = t3[r3.shift()];
      return t3;
    }
    function T2(e2, t3, r3) {
      var o2 = N2(t3, r3);
      if (o2) {
        var i2 = t3[o2] + r3.substr(o2.length), a2 = n2(i2, nt);
        return void 0 !== a2 ? a2 : e2 + i2;
      }
      return -1 !== r3.indexOf(":") ? r3 : e2 + r3;
    }
    function z2(e2) {
      var t3 = this.name;
      if (t3.substr(0, e2.length) === e2 && (t3.length === e2.length || "/" === t3[e2.length] || "/" === e2[e2.length - 1] || ":" === e2[e2.length - 1])) {
        var r3 = e2.split("/").length;
        r3 > this.len && (this.match = e2, this.len = r3);
      }
    }
    function N2(e2, t3) {
      if (Object.hasOwnProperty.call(e2, t3))
        return t3;
      var r3 = { name: t3, match: void 0, len: 0 };
      return Object.keys(e2).forEach(z2, r3), r3.match;
    }
    function J2(e2, t3, r3, n3) {
      if ("file:///" === e2.substr(0, 8)) {
        if (Ft)
          return $(e2, t3, r3, n3);
        throw new Error("Unable to fetch file URLs in this environment.");
      }
      e2 = e2.replace(/#/g, "%23");
      var o2 = { headers: { Accept: "application/x-es-module, */*" } };
      return r3 && (o2.integrity = r3), t3 && ("string" == typeof t3 && (o2.headers.Authorization = t3), o2.credentials = "include"), fetch(e2, o2).then(function(e3) {
        if (e3.ok)
          return n3 ? e3.arrayBuffer() : e3.text();
        throw new Error("Fetch error: " + e3.status + " " + e3.statusText);
      });
    }
    function $(e2, t3, r3, n3) {
      return new Promise(function(r4, o2) {
        function i2() {
          r4(n3 ? s2.response : s2.responseText);
        }
        function a2() {
          o2(new Error("XHR error: " + (s2.status ? " (" + s2.status + (s2.statusText ? " " + s2.statusText : "") + ")" : "") + " loading " + e2));
        }
        e2 = e2.replace(/#/g, "%23");
        var s2 = new XMLHttpRequest();
        n3 && (s2.responseType = "arraybuffer"), s2.onreadystatechange = function() {
          4 === s2.readyState && (0 == s2.status ? s2.response ? i2() : (s2.addEventListener("error", a2), s2.addEventListener("load", i2)) : 200 === s2.status ? i2() : a2());
        }, s2.open("GET", e2, true), s2.setRequestHeader && (s2.setRequestHeader("Accept", "application/x-es-module, */*"), t3 && ("string" == typeof t3 && s2.setRequestHeader("Authorization", t3), s2.withCredentials = true)), s2.send(null);
      });
    }
    function B2(e2, t3, r3, n3) {
      return "file:///" != e2.substr(0, 8) ? Promise.reject(new Error('Unable to fetch "' + e2 + '". Only file URLs of the form file:/// supported running in Node.')) : (Lt = Lt || require$$0, e2 = at ? e2.replace(/\//g, "\\").substr(8) : e2.substr(7), new Promise(function(t4, r4) {
        Lt.readFile(e2, function(e3, o2) {
          if (e3)
            return r4(e3);
          if (n3)
            t4(o2);
          else {
            var i2 = o2 + "";
            "\uFEFF" === i2[0] && (i2 = i2.substr(1)), t4(i2);
          }
        });
      }));
    }
    function W() {
      throw new Error("No fetch method is defined for this environment.");
    }
    function G2() {
      return { pluginKey: void 0, pluginArgument: void 0, pluginModule: void 0, packageKey: void 0, packageConfig: void 0, load: void 0 };
    }
    function H2(e2, t3, r3) {
      var n3 = G2();
      if (r3) {
        var o2;
        t3.pluginFirst ? -1 !== (o2 = r3.lastIndexOf("!")) && (n3.pluginArgument = n3.pluginKey = r3.substr(0, o2)) : -1 !== (o2 = r3.indexOf("!")) && (n3.pluginArgument = n3.pluginKey = r3.substr(o2 + 1)), n3.packageKey = N2(t3.packages, r3), n3.packageKey && (n3.packageConfig = t3.packages[n3.packageKey]);
      }
      return n3;
    }
    function Z(e2, t3) {
      var r3 = this[St], n3 = G2(), o2 = H2(this, r3, t3), i2 = this;
      return Promise.resolve().then(function() {
        var r4 = e2.lastIndexOf("#?");
        if (-1 === r4)
          return Promise.resolve(e2);
        var n4 = he.call(i2, e2.substr(r4 + 2));
        return me.call(i2, n4, t3, true).then(function(t4) {
          return t4 ? e2.substr(0, r4) : "@empty";
        });
      }).then(function(e3) {
        var a2 = ne(r3.pluginFirst, e3);
        return a2 ? (n3.pluginKey = a2.plugin, Promise.all([ee.call(i2, r3, a2.argument, o2 && o2.pluginArgument || t3, n3, o2, true), i2.resolve(a2.plugin, t3)]).then(function(e4) {
          if (n3.pluginArgument = e4[0], n3.pluginKey = e4[1], n3.pluginArgument === n3.pluginKey)
            throw new Error("Plugin " + n3.pluginArgument + " cannot load itself, make sure it is excluded from any wildcard meta configuration via a custom loader: false rule.");
          return oe(r3.pluginFirst, e4[0], e4[1]);
        })) : ee.call(i2, r3, e3, o2 && o2.pluginArgument || t3, n3, o2, false);
      }).then(function(e3) {
        return ve.call(i2, e3, t3, o2);
      }).then(function(e3) {
        return re.call(i2, r3, e3, n3), n3.pluginKey || !n3.load.loader ? e3 : i2.resolve(n3.load.loader, e3).then(function(t4) {
          return n3.pluginKey = t4, n3.pluginArgument = e3, e3;
        });
      }).then(function(e3) {
        return i2[jt][e3] = n3, e3;
      });
    }
    function X(e2, t3) {
      var r3 = ne(e2.pluginFirst, t3);
      if (r3) {
        var n3 = X.call(this, e2, r3.plugin);
        return oe(e2.pluginFirst, Q2.call(this, e2, r3.argument, void 0, false, false), n3);
      }
      return Q2.call(this, e2, t3, void 0, false, false);
    }
    function Y(e2, t3) {
      var r3 = this[St], n3 = G2(), o2 = o2 || H2(this, r3, t3), i2 = ne(r3.pluginFirst, e2);
      return i2 ? (n3.pluginKey = Y.call(this, i2.plugin, t3), oe(r3.pluginFirst, V.call(this, r3, i2.argument, o2.pluginArgument || t3, n3, o2, !!n3.pluginKey), n3.pluginKey)) : V.call(this, r3, e2, o2.pluginArgument || t3, n3, o2, !!n3.pluginKey);
    }
    function Q2(e2, t3, r3, o2, i2) {
      var a2 = n2(t3, r3 || nt);
      if (a2)
        return T2(e2.baseURL, e2.paths, a2);
      if (o2) {
        var s2 = N2(e2.map, t3);
        if (s2 && (t3 = e2.map[s2] + t3.substr(s2.length), a2 = n2(t3, nt)))
          return T2(e2.baseURL, e2.paths, a2);
      }
      if (this.registry.has(t3))
        return t3;
      if ("@node/" === t3.substr(0, 6))
        return t3;
      var u3 = i2 && "/" !== t3[t3.length - 1], l3 = T2(e2.baseURL, e2.paths, u3 ? t3 + "/" : t3);
      return u3 ? l3.substr(0, l3.length - 1) : l3;
    }
    function V(e2, t3, r3, n3, o2, i2) {
      if (o2 && o2.packageConfig && "." !== t3[0]) {
        var a2 = o2.packageConfig.map, s2 = a2 && N2(a2, t3);
        if (s2 && "string" == typeof a2[s2]) {
          var u3 = ue(this, e2, o2.packageConfig, o2.packageKey, s2, t3, n3, i2);
          if (u3)
            return u3;
        }
      }
      var l3 = Q2.call(this, e2, t3, r3, true, true), c2 = de(e2, l3);
      if (n3.packageKey = c2 && c2.packageKey || N2(e2.packages, l3), !n3.packageKey)
        return l3;
      if (-1 !== e2.packageConfigKeys.indexOf(l3))
        return n3.packageKey = void 0, l3;
      n3.packageConfig = e2.packages[n3.packageKey] || (e2.packages[n3.packageKey] = Ee());
      var f3 = l3.substr(n3.packageKey.length + 1);
      return ae(this, e2, n3.packageConfig, n3.packageKey, f3, n3, i2);
    }
    function ee(e2, t3, r3, n3, o2, i2) {
      var a2 = this;
      return Et.then(function() {
        if (o2 && o2.packageConfig && "./" !== t3.substr(0, 2)) {
          var r4 = o2.packageConfig.map, s2 = r4 && N2(r4, t3);
          if (s2)
            return ce(a2, e2, o2.packageConfig, o2.packageKey, s2, t3, n3, i2);
        }
        return Et;
      }).then(function(o3) {
        if (o3)
          return o3;
        var s2 = Q2.call(a2, e2, t3, r3, true, true), u3 = de(e2, s2);
        return n3.packageKey = u3 && u3.packageKey || N2(e2.packages, s2), n3.packageKey ? -1 !== e2.packageConfigKeys.indexOf(s2) ? (n3.packageKey = void 0, n3.load = te(), n3.load.format = "json", n3.load.loader = "", Promise.resolve(s2)) : (n3.packageConfig = e2.packages[n3.packageKey] || (e2.packages[n3.packageKey] = Ee()), (u3 && !n3.packageConfig.configured ? pe(a2, e2, u3.configPath, n3) : Et).then(function() {
          var t4 = s2.substr(n3.packageKey.length + 1);
          return le(a2, e2, n3.packageConfig, n3.packageKey, t4, n3, i2);
        })) : Promise.resolve(s2);
      });
    }
    function te() {
      return { extension: "", deps: void 0, format: void 0, loader: void 0, scriptLoad: void 0, globals: void 0, nonce: void 0, integrity: void 0, sourceMap: void 0, exports: void 0, encapsulateGlobal: false, crossOrigin: void 0, cjsRequireDetection: true, cjsDeferDepsExecute: false, esModule: false };
    }
    function re(e2, t3, r3) {
      r3.load = r3.load || te();
      var n3, o2 = 0;
      for (var i2 in e2.meta)
        if (-1 !== (n3 = i2.indexOf("*")) && i2.substr(0, n3) === t3.substr(0, n3) && i2.substr(n3 + 1) === t3.substr(t3.length - i2.length + n3 + 1)) {
          var a2 = i2.split("/").length;
          a2 > o2 && (o2 = a2), F2(r3.load, e2.meta[i2], o2 !== a2);
        }
      if (e2.meta[t3] && F2(r3.load, e2.meta[t3], false), r3.packageKey) {
        var s2 = t3.substr(r3.packageKey.length + 1), u3 = {};
        if (r3.packageConfig.meta) {
          o2 = 0;
          ge(r3.packageConfig.meta, s2, function(e3, t4, r4) {
            r4 > o2 && (o2 = r4), F2(u3, t4, r4 && o2 > r4);
          }), F2(r3.load, u3, false);
        }
        !r3.packageConfig.format || r3.pluginKey || r3.load.loader || (r3.load.format = r3.load.format || r3.packageConfig.format);
      }
    }
    function ne(e2, t3) {
      var r3, n3, o2 = e2 ? t3.indexOf("!") : t3.lastIndexOf("!");
      if (-1 !== o2)
        return e2 ? (r3 = t3.substr(o2 + 1), n3 = t3.substr(0, o2)) : (r3 = t3.substr(0, o2), n3 = t3.substr(o2 + 1) || r3.substr(r3.lastIndexOf(".") + 1)), { argument: r3, plugin: n3 };
    }
    function oe(e2, t3, r3) {
      return e2 ? r3 + "!" + t3 : t3 + "!" + r3;
    }
    function ie(e2, t3, r3, n3, o2) {
      if (!n3 || !t3.defaultExtension || "/" === n3[n3.length - 1] || o2)
        return n3;
      var i2 = false;
      if (t3.meta && ge(t3.meta, n3, function(e3, t4, r4) {
        if (0 === r4 || e3.lastIndexOf("*") !== e3.length - 1)
          return i2 = true;
      }), !i2 && e2.meta && ge(e2.meta, r3 + "/" + n3, function(e3, t4, r4) {
        if (0 === r4 || e3.lastIndexOf("*") !== e3.length - 1)
          return i2 = true;
      }), i2)
        return n3;
      var a2 = "." + t3.defaultExtension;
      return n3.substr(n3.length - a2.length) !== a2 ? n3 + a2 : n3;
    }
    function ae(e2, t3, r3, n3, o2, i2, a2) {
      if (!o2) {
        if (!r3.main)
          return n3;
        o2 = "./" === r3.main.substr(0, 2) ? r3.main.substr(2) : r3.main;
      }
      if (r3.map) {
        var s2 = "./" + o2, u3 = N2(r3.map, s2);
        if (u3 || (s2 = "./" + ie(t3, r3, n3, o2, a2)) !== "./" + o2 && (u3 = N2(r3.map, s2)), u3) {
          var l3 = ue(e2, t3, r3, n3, u3, s2, i2, a2);
          if (l3)
            return l3;
        }
      }
      return n3 + "/" + ie(t3, r3, n3, o2, a2);
    }
    function se(e2, t3, r3) {
      return !(t3.substr(0, e2.length) === e2 && r3.length > e2.length);
    }
    function ue(e2, t3, r3, n3, o2, i2, a2, s2) {
      "/" === i2[i2.length - 1] && (i2 = i2.substr(0, i2.length - 1));
      var u3 = r3.map[o2];
      if ("object" == typeof u3)
        throw new Error("Synchronous conditional normalization not supported sync normalizing " + o2 + " in " + n3);
      if (se(o2, u3, i2) && "string" == typeof u3)
        return V.call(e2, t3, u3 + i2.substr(o2.length), n3 + "/", a2, a2, s2);
    }
    function le(e2, t3, r3, n3, o2, i2, a2) {
      if (!o2) {
        if (!r3.main)
          return Promise.resolve(n3);
        o2 = "./" === r3.main.substr(0, 2) ? r3.main.substr(2) : r3.main;
      }
      var s2, u3;
      return r3.map && (s2 = "./" + o2, (u3 = N2(r3.map, s2)) || (s2 = "./" + ie(t3, r3, n3, o2, a2)) !== "./" + o2 && (u3 = N2(r3.map, s2))), (u3 ? ce(e2, t3, r3, n3, u3, s2, i2, a2) : Et).then(function(e3) {
        return e3 ? Promise.resolve(e3) : Promise.resolve(n3 + "/" + ie(t3, r3, n3, o2, a2));
      });
    }
    function ce(e2, t3, r3, n3, o2, i2, a2, s2) {
      "/" === i2[i2.length - 1] && (i2 = i2.substr(0, i2.length - 1));
      var u3 = r3.map[o2];
      if ("string" == typeof u3)
        return se(o2, u3, i2) ? ee.call(e2, t3, u3 + i2.substr(o2.length), n3 + "/", a2, a2, s2).then(function(t4) {
          return ve.call(e2, t4, n3 + "/", a2);
        }) : Et;
      var l3 = [], c2 = [];
      for (var d2 in u3) {
        var p3 = he(d2);
        c2.push({ condition: p3, map: u3[d2] }), l3.push(f2.prototype.import.call(e2, p3.module, n3));
      }
      return Promise.all(l3).then(function(e3) {
        for (var t4 = 0; t4 < c2.length; t4++) {
          var r4 = c2[t4].condition, n4 = q2(r4.prop, "__useDefault" in e3[t4] ? e3[t4].__useDefault : e3[t4]);
          if (!r4.negate && n4 || r4.negate && !n4)
            return c2[t4].map;
        }
      }).then(function(r4) {
        if (r4)
          return se(o2, r4, i2) ? ee.call(e2, t3, r4 + i2.substr(o2.length), n3 + "/", a2, a2, s2).then(function(t4) {
            return ve.call(e2, t4, n3 + "/", a2);
          }) : Et;
      });
    }
    function fe(e2) {
      var t3 = e2.lastIndexOf("*"), r3 = Math.max(t3 + 1, e2.lastIndexOf("/"));
      return { length: r3, regEx: new RegExp("^(" + e2.substr(0, r3).replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^\\/]+") + ")(\\/|$)"), wildcard: -1 !== t3 };
    }
    function de(e2, t3) {
      for (var r3, n3, o2 = false, i2 = 0; i2 < e2.packageConfigPaths.length; i2++) {
        var a2 = e2.packageConfigPaths[i2], s2 = Dt[a2] || (Dt[a2] = fe(a2));
        if (!(t3.length < s2.length)) {
          var u3 = t3.match(s2.regEx);
          !u3 || r3 && (o2 && s2.wildcard || !(r3.length < u3[1].length)) || (r3 = u3[1], o2 = !s2.wildcard, n3 = r3 + a2.substr(s2.length));
        }
      }
      if (r3)
        return { packageKey: r3, configPath: n3 };
    }
    function pe(e2, r3, n3, o2, i2) {
      var a2 = e2.pluginLoader || e2;
      return -1 === r3.packageConfigKeys.indexOf(n3) && r3.packageConfigKeys.push(n3), a2.import(n3).then(function(e3) {
        Oe(o2.packageConfig, e3, o2.packageKey, true, r3), o2.packageConfig.configured = true;
      }).catch(function(e3) {
        throw t2(e3, "Unable to fetch package configuration file " + n3);
      });
    }
    function ge(e2, t3, r3) {
      var n3;
      for (var o2 in e2) {
        var i2 = "./" === o2.substr(0, 2) ? "./" : "";
        if (i2 && (o2 = o2.substr(2)), -1 !== (n3 = o2.indexOf("*")) && o2.substr(0, n3) === t3.substr(0, n3) && o2.substr(n3 + 1) === t3.substr(t3.length - o2.length + n3 + 1) && r3(o2, e2[i2 + o2], o2.split("/").length))
          return;
      }
      var a2 = e2[t3] && Object.hasOwnProperty.call(e2, t3) ? e2[t3] : e2["./" + t3];
      a2 && r3(a2, a2, 0);
    }
    function he(e2) {
      var t3, r3, n3, o2 = e2.lastIndexOf("|");
      return -1 !== o2 ? (t3 = e2.substr(o2 + 1), r3 = e2.substr(0, o2), "~" === t3[0] && (n3 = true, t3 = t3.substr(1))) : (n3 = "~" === e2[0], t3 = "default", r3 = e2.substr(n3), -1 !== Ut.indexOf(r3) && (t3 = r3, r3 = null)), { module: r3 || "@system-env", prop: t3, negate: n3 };
    }
    function me(e2, t3, r3) {
      return f2.prototype.import.call(this, e2.module, t3).then(function(t4) {
        var n3 = q2(e2.prop, t4);
        if (r3 && "boolean" != typeof n3)
          throw new TypeError("Condition did not resolve to a boolean.");
        return e2.negate ? !n3 : n3;
      });
    }
    function ve(e2, t3, r3) {
      var n3 = e2.match(qt);
      if (!n3)
        return Promise.resolve(e2);
      var o2 = he.call(this, n3[0].substr(2, n3[0].length - 3));
      return me.call(this, o2, t3, false).then(function(r4) {
        if ("string" != typeof r4)
          throw new TypeError("The condition value for " + e2 + " doesn't resolve to a string.");
        if (-1 !== r4.indexOf("/"))
          throw new TypeError("Unabled to interpolate conditional " + e2 + (t3 ? " in " + t3 : "") + "\n	The condition value " + r4 + ' cannot contain a "/" separator.');
        return e2.replace(qt, r4);
      });
    }
    function ye(e2, t3, r3) {
      for (var n3 = 0; n3 < Tt.length; n3++) {
        var o2 = Tt[n3];
        t3[o2] && Er[o2.substr(0, o2.length - 6)] && r3(t3[o2]);
      }
    }
    function be(e2, t3) {
      var r3 = {};
      for (var n3 in e2) {
        var o2 = e2[n3];
        t3 > 1 ? o2 instanceof Array ? r3[n3] = [].concat(o2) : "object" == typeof o2 ? r3[n3] = be(o2, t3 - 1) : "packageConfig" !== n3 && (r3[n3] = o2) : r3[n3] = o2;
      }
      return r3;
    }
    function we(e2, t3) {
      var r3 = e2[t3];
      return r3 instanceof Array ? e2[t3].concat([]) : "object" == typeof r3 ? be(r3, 3) : e2[t3];
    }
    function xe(e2) {
      if (e2) {
        if (-1 !== Or.indexOf(e2))
          return we(this[St], e2);
        throw new Error('"' + e2 + '" is not a valid configuration name. Must be one of ' + Or.join(", ") + ".");
      }
      for (var t3 = {}, r3 = 0; r3 < Or.length; r3++) {
        var n3 = Or[r3], o2 = we(this[St], n3);
        void 0 !== o2 && (t3[n3] = o2);
      }
      return t3;
    }
    function ke(e2, t3) {
      var r3 = this, o2 = this[St];
      if ("warnings" in e2 && (o2.warnings = e2.warnings), "wasm" in e2 && (o2.wasm = "undefined" != typeof WebAssembly && e2.wasm), ("production" in e2 || "build" in e2) && tt.call(r3, !!e2.production, !!(e2.build || Er && Er.build)), !t3) {
        var i2;
        ye(r3, e2, function(e3) {
          i2 = i2 || e3.baseURL;
        }), (i2 = i2 || e2.baseURL) && (o2.baseURL = n2(i2, nt) || n2("./" + i2, nt), "/" !== o2.baseURL[o2.baseURL.length - 1] && (o2.baseURL += "/")), e2.paths && A2(o2.paths, e2.paths), ye(r3, e2, function(e3) {
          e3.paths && A2(o2.paths, e3.paths);
        });
        for (var a2 in o2.paths)
          -1 !== o2.paths[a2].indexOf("*") && (R2.call(o2, "Path config " + a2 + " -> " + o2.paths[a2] + " is no longer supported as wildcards are deprecated."), delete o2.paths[a2]);
      }
      if (e2.defaultJSExtensions && R2.call(o2, "The defaultJSExtensions configuration option is deprecated.\n  Use packages defaultExtension instead.", true), "boolean" == typeof e2.pluginFirst && (o2.pluginFirst = e2.pluginFirst), e2.map)
        for (var a2 in e2.map) {
          var s2 = e2.map[a2];
          if ("string" == typeof s2) {
            var u3 = Q2.call(r3, o2, s2, void 0, false, false);
            "/" === u3[u3.length - 1] && ":" !== a2[a2.length - 1] && "/" !== a2[a2.length - 1] && (u3 = u3.substr(0, u3.length - 1)), o2.map[a2] = u3;
          } else {
            m3 = (m3 = Q2.call(r3, o2, "/" !== a2[a2.length - 1] ? a2 + "/" : a2, void 0, true, true)).substr(0, m3.length - 1);
            var l3 = o2.packages[m3];
            l3 || ((l3 = o2.packages[m3] = Ee()).defaultExtension = ""), Oe(l3, { map: s2 }, m3, false, o2);
          }
        }
      if (e2.packageConfigPaths) {
        for (var c2 = [], f3 = 0; f3 < e2.packageConfigPaths.length; f3++) {
          var d2 = e2.packageConfigPaths[f3], p3 = Math.max(d2.lastIndexOf("*") + 1, d2.lastIndexOf("/")), g3 = Q2.call(r3, o2, d2.substr(0, p3), void 0, false, false);
          c2[f3] = g3 + d2.substr(p3);
        }
        o2.packageConfigPaths = c2;
      }
      if (e2.bundles)
        for (var a2 in e2.bundles) {
          for (var h2 = [], f3 = 0; f3 < e2.bundles[a2].length; f3++)
            h2.push(r3.normalizeSync(e2.bundles[a2][f3]));
          o2.bundles[a2] = h2;
        }
      if (e2.packages)
        for (var a2 in e2.packages) {
          if (a2.match(/^([^\/]+:)?\/\/$/))
            throw new TypeError('"' + a2 + '" is not a valid package name.');
          var m3 = Q2.call(r3, o2, "/" !== a2[a2.length - 1] ? a2 + "/" : a2, void 0, true, true);
          m3 = m3.substr(0, m3.length - 1), Oe(o2.packages[m3] = o2.packages[m3] || Ee(), e2.packages[a2], m3, false, o2);
        }
      if (e2.depCache)
        for (var a2 in e2.depCache)
          o2.depCache[r3.normalizeSync(a2)] = [].concat(e2.depCache[a2]);
      if (e2.meta)
        for (var a2 in e2.meta)
          if ("*" === a2[0])
            A2(o2.meta[a2] = o2.meta[a2] || {}, e2.meta[a2]);
          else {
            var v3 = Q2.call(r3, o2, a2, void 0, true, true);
            A2(o2.meta[v3] = o2.meta[v3] || {}, e2.meta[a2]);
          }
      "transpiler" in e2 && (o2.transpiler = e2.transpiler);
      for (var y3 in e2)
        -1 === Or.indexOf(y3) && -1 === Tt.indexOf(y3) && (r3[y3] = e2[y3]);
      ye(r3, e2, function(e3) {
        r3.config(e3, true);
      });
    }
    function Ee() {
      return { defaultExtension: void 0, main: void 0, format: void 0, meta: void 0, map: void 0, packageConfig: void 0, configured: false };
    }
    function Oe(e2, t3, r3, n3, o2) {
      for (var i2 in t3)
        "main" === i2 || "format" === i2 || "defaultExtension" === i2 || "configured" === i2 ? n3 && void 0 !== e2[i2] || (e2[i2] = t3[i2]) : "map" === i2 ? (n3 ? I2 : A2)(e2.map = e2.map || {}, t3.map) : "meta" === i2 ? (n3 ? I2 : A2)(e2.meta = e2.meta || {}, t3.meta) : Object.hasOwnProperty.call(t3, i2) && R2.call(o2, '"' + i2 + '" is not a valid package configuration option in package ' + r3);
      return void 0 === e2.defaultExtension && (e2.defaultExtension = "js"), void 0 === e2.main && e2.map && e2.map["."] ? (e2.main = e2.map["."], delete e2.map["."]) : "object" == typeof e2.main && (e2.map = e2.map || {}, e2.map["./@main"] = e2.main, e2.main.default = e2.main.default || "./", e2.main = "@main"), e2;
    }
    function Se(e2) {
      return zt ? Wt + new Buffer(e2).toString("base64") : "undefined" != typeof btoa ? Wt + btoa(unescape(encodeURIComponent(e2))) : "";
    }
    function je(e2, t3, r3, n3) {
      var o2 = e2.lastIndexOf("\n");
      if (t3) {
        if ("object" != typeof t3)
          throw new TypeError("load.metadata.sourceMap must be set to an object.");
        t3 = JSON.stringify(t3);
      }
      return (n3 ? "(function(System, SystemJS) {" : "") + e2 + (n3 ? "\n})(System, System);" : "") + ("\n//# sourceURL=" != e2.substr(o2, 15) ? "\n//# sourceURL=" + r3 + (t3 ? "!transpiled" : "") : "") + (t3 && Se(t3) || "");
    }
    function _e(e2, t3, r3, n3, o2) {
      Nt || (Nt = document.head || document.body || document.documentElement);
      var i2 = document.createElement("script");
      i2.text = je(t3, r3, n3, false);
      var a2, s2 = window.onerror;
      if (window.onerror = function(e3) {
        a2 = addToError(e3, "Evaluating " + n3), s2 && s2.apply(this, arguments);
      }, Pe(e2), o2 && i2.setAttribute("nonce", o2), Nt.appendChild(i2), Nt.removeChild(i2), Me(), window.onerror = s2, a2)
        return a2;
    }
    function Pe(e2) {
      0 == Gt++ && (Bt = st.System), st.System = st.SystemJS = e2;
    }
    function Me() {
      0 == --Gt && (st.System = st.SystemJS = Bt);
    }
    function Re(e2, t3, r3, n3, o2, i2, a2) {
      if (t3) {
        if (i2 && Ht)
          return _e(e2, t3, r3, n3, i2);
        try {
          Pe(e2), !Jt && e2._nodeRequire && (Jt = e2._nodeRequire("vm"), $t = Jt.runInThisContext("typeof System !== 'undefined' && System") === e2), $t ? Jt.runInThisContext(je(t3, r3, n3, !a2), { filename: n3 + (r3 ? "!transpiled" : "") }) : (0, eval)(je(t3, r3, n3, !a2)), Me();
        } catch (e3) {
          return Me(), e3;
        }
      }
    }
    function Ce(e2) {
      return "file:///" === e2.substr(0, 8) ? e2.substr(7 + !!at) : Zt && e2.substr(0, Zt.length) === Zt ? e2.substr(Zt.length) : e2;
    }
    function Le(e2, t3) {
      return Ce(this.normalizeSync(e2, t3));
    }
    function Ae(e2) {
      var t3, r3 = e2.lastIndexOf("!"), n3 = (t3 = -1 !== r3 ? e2.substr(0, r3) : e2).split("/");
      return n3.pop(), n3 = n3.join("/"), { filename: Ce(t3), dirname: Ce(n3) };
    }
    function Ie(e2) {
      function t3(e3, t4) {
        for (var r4 = 0; r4 < e3.length; r4++)
          if (e3[r4][0] < t4.index && e3[r4][1] > t4.index)
            return true;
        return false;
      }
      It.lastIndex = tr.lastIndex = rr.lastIndex = 0;
      var r3, n3 = [], o2 = [], i2 = [];
      if (e2.length / e2.split("\n").length < 200) {
        for (; r3 = rr.exec(e2); )
          o2.push([r3.index, r3.index + r3[0].length]);
        for (; r3 = tr.exec(e2); )
          t3(o2, r3) || i2.push([r3.index + r3[1].length, r3.index + r3[0].length - 1]);
      }
      for (; r3 = It.exec(e2); )
        if (!t3(o2, r3) && !t3(i2, r3)) {
          var a2 = r3[1].substr(1, r3[1].length - 2);
          if (a2.match(/"|'/))
            continue;
          n3.push(a2);
        }
      return n3;
    }
    function Fe(e2) {
      if (-1 === nr.indexOf(e2)) {
        try {
          var t3 = st[e2];
        } catch (t4) {
          nr.push(e2);
        }
        this(e2, t3);
      }
    }
    function Ke(e2) {
      if ("string" == typeof e2)
        return q2(e2, st);
      if (!(e2 instanceof Array))
        throw new Error("Global exports must be a string or array.");
      for (var t3 = {}, r3 = 0; r3 < e2.length; r3++)
        t3[e2[r3].split(".").pop()] = q2(e2[r3], st);
      return t3;
    }
    function De(e2, t3, r3, n3) {
      var o2 = st.define;
      st.define = void 0;
      var i2;
      if (r3) {
        i2 = {};
        for (var a2 in r3)
          i2[a2] = st[a2], st[a2] = r3[a2];
      }
      return t3 || (Yt = {}, Object.keys(st).forEach(Fe, function(e3, t4) {
        Yt[e3] = t4;
      })), function() {
        var e3, r4 = t3 ? Ke(t3) : {}, a3 = !!t3;
        if (t3 && !n3 || Object.keys(st).forEach(Fe, function(o3, i3) {
          Yt[o3] !== i3 && void 0 !== i3 && (n3 && (st[o3] = void 0), t3 || (r4[o3] = i3, void 0 !== e3 ? a3 || e3 === i3 || (a3 = true) : e3 = i3));
        }), r4 = a3 ? r4 : e3, i2)
          for (var s2 in i2)
            st[s2] = i2[s2];
        return st.define = o2, r4;
      };
    }
    function Ue(e2, t3) {
      var r3 = ((e2 = e2.replace(tr, "")).match(ar)[1].split(",")[t3] || "require").replace(sr, ""), n3 = ur[r3] || (ur[r3] = new RegExp(or + r3 + ir, "g"));
      n3.lastIndex = 0;
      for (var o2, i2 = []; o2 = n3.exec(e2); )
        i2.push(o2[2] || o2[3]);
      return i2;
    }
    function qe(e2) {
      return function(t3, r3, n3) {
        e2(t3, r3, n3), "object" != typeof (r3 = n3.exports) && "function" != typeof r3 || "__esModule" in r3 || Object.defineProperty(n3.exports, "__esModule", { value: true });
      };
    }
    function Te(e2, t3) {
      Vt = e2, cr = t3, Qt = void 0, lr = false;
    }
    function ze(e2) {
      Qt ? e2.registerDynamic(Vt ? Qt[0].concat(Vt) : Qt[0], false, cr ? qe(Qt[1]) : Qt[1]) : lr && e2.registerDynamic([], false, _);
    }
    function Ne(e2, t3) {
      !e2.load.esModule || "object" != typeof t3 && "function" != typeof t3 || "__esModule" in t3 || Object.defineProperty(t3, "__esModule", { value: true });
    }
    function Je(e2, t3) {
      var r3 = this, n3 = this[St];
      return (Be(n3, this, e2) || Et).then(function() {
        if (!t3()) {
          var o2 = r3[jt][e2];
          if ("@node/" === e2.substr(0, 6)) {
            if (!r3._nodeRequire)
              throw new TypeError("Error loading " + e2 + ". Can only load node core modules in Node.");
            return r3.registerDynamic([], false, function() {
              return L2.call(r3, e2.substr(6), r3.baseURL);
            }), void t3();
          }
          return o2.load.scriptLoad ? !o2.load.pluginKey && fr || (o2.load.scriptLoad = false, R2.call(n3, 'scriptLoad not supported for "' + e2 + '"')) : false !== o2.load.scriptLoad && !o2.load.pluginKey && fr && (o2.load.deps || o2.load.globals || !("system" === o2.load.format || "register" === o2.load.format || "global" === o2.load.format && o2.load.exports) || (o2.load.scriptLoad = true)), o2.load.scriptLoad ? new Promise(function(n4, i2) {
            if ("amd" === o2.load.format && st.define !== r3.amdDefine)
              throw new Error("Loading AMD with scriptLoad requires setting the global `" + pr + ".define = SystemJS.amdDefine`");
            U(e2, o2.load.crossOrigin, o2.load.integrity, function() {
              if (!t3()) {
                o2.load.format = "global";
                var e3 = o2.load.exports && Ke(o2.load.exports);
                r3.registerDynamic([], false, function() {
                  return Ne(o2, e3), e3;
                }), t3();
              }
              n4();
            }, i2);
          }) : $e(r3, e2, o2).then(function() {
            return We(r3, e2, o2, t3, n3.wasm);
          });
        }
      }).then(function(t4) {
        return delete r3[jt][e2], t4;
      });
    }
    function $e(e2, t3, r3) {
      return r3.pluginKey ? e2.import(r3.pluginKey).then(function(e3) {
        r3.pluginModule = e3, r3.pluginLoad = { name: t3, address: r3.pluginArgument, source: void 0, metadata: r3.load }, r3.load.deps = r3.load.deps || [];
      }) : Et;
    }
    function Be(e2, t3, r3) {
      var n3 = e2.depCache[r3];
      if (n3)
        for (a2 = 0; a2 < n3.length; a2++)
          t3.normalize(n3[a2], r3).then(K2);
      else {
        var o2 = false;
        for (var i2 in e2.bundles) {
          for (var a2 = 0; a2 < e2.bundles[i2].length; a2++) {
            var s2 = e2.bundles[i2][a2];
            if (s2 === r3) {
              o2 = true;
              break;
            }
            if (-1 !== s2.indexOf("*")) {
              var u3 = s2.split("*");
              if (2 !== u3.length) {
                e2.bundles[i2].splice(a2--, 1);
                continue;
              }
              if (r3.substr(0, u3[0].length) === u3[0] && r3.substr(r3.length - u3[1].length, u3[1].length) === u3[1]) {
                o2 = true;
                break;
              }
            }
          }
          if (o2)
            return t3.import(i2);
        }
      }
    }
    function We(e2, t3, r3, n3, o2) {
      return r3.load.exports && !r3.load.format && (r3.load.format = "global"), Et.then(function() {
        if (r3.pluginModule && r3.pluginModule.locate)
          return Promise.resolve(r3.pluginModule.locate.call(e2, r3.pluginLoad)).then(function(e3) {
            e3 && (r3.pluginLoad.address = e3);
          });
      }).then(function() {
        return r3.pluginModule ? (o2 = false, r3.pluginModule.fetch ? r3.pluginModule.fetch.call(e2, r3.pluginLoad, function(e3) {
          return Kt(e3.address, r3.load.authorization, r3.load.integrity, false);
        }) : Kt(r3.pluginLoad.address, r3.load.authorization, r3.load.integrity, false)) : Kt(t3, r3.load.authorization, r3.load.integrity, o2);
      }).then(function(i2) {
        return o2 && "string" != typeof i2 ? C2(e2, i2, n3).then(function(o3) {
          if (!o3) {
            var a2 = ot ? new TextDecoder("utf-8").decode(new Uint8Array(i2)) : i2.toString();
            return Ge(e2, t3, a2, r3, n3);
          }
        }) : Ge(e2, t3, i2, r3, n3);
      });
    }
    function Ge(e2, t3, r3, n3, o2) {
      return Promise.resolve(r3).then(function(t4) {
        return "detect" === n3.load.format && (n3.load.format = void 0), Ve(t4, n3), n3.pluginModule ? (n3.pluginLoad.source = t4, n3.pluginModule.translate ? Promise.resolve(n3.pluginModule.translate.call(e2, n3.pluginLoad, n3.traceOpts)).then(function(e3) {
          if (n3.load.sourceMap) {
            if ("object" != typeof n3.load.sourceMap)
              throw new Error("metadata.load.sourceMap must be set to an object.");
            Xe(n3.pluginLoad.address, n3.load.sourceMap);
          }
          return "string" == typeof e3 ? e3 : n3.pluginLoad.source;
        }) : t4) : t4;
      }).then(function(r4) {
        return n3.load.format || '"bundle"' !== r4.substring(0, 8) ? "register" === n3.load.format || !n3.load.format && He(r4) ? (n3.load.format = "register", r4) : "esm" === n3.load.format || !n3.load.format && r4.match(gr) ? (n3.load.format = "esm", Ye(e2, r4, t3, n3)) : r4 : (n3.load.format = "system", r4);
      }).then(function(t4) {
        if ("string" != typeof t4 || !n3.pluginModule || !n3.pluginModule.instantiate)
          return t4;
        var r4 = false;
        return n3.pluginLoad.source = t4, Promise.resolve(n3.pluginModule.instantiate.call(e2, n3.pluginLoad, function(e3) {
          if (t4 = e3.source, n3.load = e3.metadata, r4)
            throw new Error("Instantiate must only be called once.");
          r4 = true;
        })).then(function(e3) {
          return r4 ? t4 : P2(e3);
        });
      }).then(function(r4) {
        if ("string" != typeof r4)
          return r4;
        n3.load.format || (n3.load.format = Ze(r4));
        var i2 = false;
        switch (n3.load.format) {
          case "esm":
          case "register":
          case "system":
            if (u3 = Re(e2, r4, n3.load.sourceMap, t3, n3.load.integrity, n3.load.nonce, false))
              throw u3;
            if (!o2())
              return Ot;
            return;
          case "json":
            var a2 = JSON.parse(r4);
            return e2.newModule({ default: a2, __useDefault: a2 });
          case "amd":
            var s2 = st.define;
            st.define = e2.amdDefine, Te(n3.load.deps, n3.load.esModule);
            var u3 = Re(e2, r4, n3.load.sourceMap, t3, n3.load.integrity, n3.load.nonce, false);
            if ((i2 = o2()) || (ze(e2), i2 = o2()), st.define = s2, u3)
              throw u3;
            break;
          case "cjs":
            var l3 = n3.load.deps, c2 = (n3.load.deps || []).concat(n3.load.cjsRequireDetection ? Ie(r4) : []);
            for (var f3 in n3.load.globals)
              n3.load.globals[f3] && c2.push(n3.load.globals[f3]);
            e2.registerDynamic(c2, true, function(o3, i3, a3) {
              if (o3.resolve = function(t4) {
                return Le.call(e2, t4, a3.id);
              }, a3.paths = [], a3.require = o3, !n3.load.cjsDeferDepsExecute && l3)
                for (var s3 = 0; s3 < l3.length; s3++)
                  o3(l3[s3]);
              var u4 = Ae(a3.id), c3 = { exports: i3, args: [o3, i3, a3, u4.filename, u4.dirname, st, st] }, f4 = "(function (require, exports, module, __filename, __dirname, global, GLOBAL";
              if (n3.load.globals)
                for (var d3 in n3.load.globals)
                  c3.args.push(o3(n3.load.globals[d3])), f4 += ", " + d3;
              var p3 = st.define;
              st.define = void 0, st.__cjsWrapper = c3, r4 = f4 + ") {" + r4.replace(yr, "") + "\n}).apply(__cjsWrapper.exports, __cjsWrapper.args);";
              var g3 = Re(e2, r4, n3.load.sourceMap, t3, n3.load.integrity, n3.load.nonce, false);
              if (g3)
                throw g3;
              Ne(n3, i3), st.__cjsWrapper = void 0, st.define = p3;
            }), i2 = o2();
            break;
          case "global":
            c2 = n3.load.deps || [];
            for (var f3 in n3.load.globals) {
              var d2 = n3.load.globals[f3];
              d2 && c2.push(d2);
            }
            e2.registerDynamic(c2, false, function(o3, i3, a3) {
              var s3;
              if (n3.load.globals) {
                s3 = {};
                for (var u4 in n3.load.globals)
                  n3.load.globals[u4] && (s3[u4] = o3(n3.load.globals[u4]));
              }
              var l4 = n3.load.exports;
              l4 && (r4 += "\n" + pr + '["' + l4 + '"] = ' + l4 + ";");
              var c3 = De(a3.id, l4, s3, n3.load.encapsulateGlobal), f4 = Re(e2, r4, n3.load.sourceMap, t3, n3.load.integrity, n3.load.nonce, true);
              if (f4)
                throw f4;
              var d3 = c3();
              return Ne(n3, d3), d3;
            }), i2 = o2();
            break;
          default:
            throw new TypeError('Unknown module format "' + n3.load.format + '" for "' + t3 + '".' + ("es6" === n3.load.format ? ' Use "esm" instead here.' : ""));
        }
        if (!i2)
          throw new Error("Module " + t3 + " detected as " + n3.load.format + " but didn't execute correctly.");
      });
    }
    function He(e2) {
      var t3 = e2.match(hr);
      return t3 && "System.register" === e2.substr(t3[0].length, 15);
    }
    function Ze(e2) {
      return e2.match(mr) ? "amd" : (vr.lastIndex = 0, It.lastIndex = 0, It.exec(e2) || vr.exec(e2) ? "cjs" : "global");
    }
    function Xe(e2, t3) {
      var r3 = e2.split("!")[0];
      t3.file && t3.file != e2 || (t3.file = r3 + "!transpiled"), (!t3.sources || t3.sources.length <= 1 && (!t3.sources[0] || t3.sources[0] === e2)) && (t3.sources = [r3]);
    }
    function Ye(e2, r3, n3, o2, i2) {
      if (!e2.transpiler)
        throw new TypeError("Unable to dynamically transpile ES module\n   A loader plugin needs to be configured via `SystemJS.config({ transpiler: 'transpiler-module' })`.");
      if (o2.load.deps) {
        for (var a2 = "", s2 = 0; s2 < o2.load.deps.length; s2++)
          a2 += 'import "' + o2.load.deps[s2] + '"; ';
        r3 = a2 + r3;
      }
      return e2.import.call(e2, e2.transpiler).then(function(t3) {
        if (!(t3 = t3.__useDefault || t3).translate)
          throw new Error(e2.transpiler + " is not a valid transpiler plugin.");
        return t3 === o2.pluginModule ? r3 : ("string" == typeof o2.load.sourceMap && (o2.load.sourceMap = JSON.parse(o2.load.sourceMap)), o2.pluginLoad = o2.pluginLoad || { name: n3, address: n3, source: r3, metadata: o2.load }, o2.load.deps = o2.load.deps || [], Promise.resolve(t3.translate.call(e2, o2.pluginLoad, o2.traceOpts)).then(function(e3) {
          var t4 = o2.load.sourceMap;
          return t4 && "object" == typeof t4 && Xe(n3, t4), "esm" === o2.load.format && He(e3) && (o2.load.format = "register"), e3;
        }));
      }, function(e3) {
        throw t2(e3, "Unable to load transpiler to transpile " + n3);
      });
    }
    function Qe(e2, t3, r3) {
      for (var n3, o2 = t3.split("."); o2.length > 1; )
        e2 = e2[n3 = o2.shift()] = e2[n3] || {};
      void 0 === e2[n3 = o2.shift()] && (e2[n3] = r3);
    }
    function Ve(e2, t3) {
      var r3 = e2.match(br);
      if (r3)
        for (var n3 = r3[0].match(wr), o2 = 0; o2 < n3.length; o2++) {
          var i2 = n3[o2], a2 = i2.length, s2 = i2.substr(0, 1);
          if (";" == i2.substr(a2 - 1, 1) && a2--, '"' == s2 || "'" == s2) {
            var u3 = i2.substr(1, i2.length - 3), l3 = u3.substr(0, u3.indexOf(" "));
            if (l3) {
              var c2 = u3.substr(l3.length + 1, u3.length - l3.length - 1);
              "deps" === l3 && (l3 = "deps[]"), "[]" === l3.substr(l3.length - 2, 2) ? (l3 = l3.substr(0, l3.length - 2), t3.load[l3] = t3.load[l3] || [], t3.load[l3].push(c2)) : "use" !== l3 && Qe(t3.load, l3, c2);
            } else
              t3.load[u3] = true;
          }
        }
    }
    function et() {
      f2.call(this), this._loader = {}, this[jt] = {}, this[St] = { baseURL: nt, paths: {}, packageConfigPaths: [], packageConfigKeys: [], map: {}, packages: {}, depCache: {}, meta: {}, bundles: {}, production: false, transpiler: void 0, loadedBundles: {}, warnings: false, pluginFirst: false, wasm: false }, this.scriptSrc = dr, this._nodeRequire = er, this.registry.set("@empty", Ot), tt.call(this, false, false), Xt(this);
    }
    function tt(e2, t3) {
      this[St].production = e2, this.registry.set("@system-env", Er = this.newModule({ browser: ot, node: !!this._nodeRequire, production: !t3 && e2, dev: t3 || !e2, build: t3, default: true }));
    }
    function rt(e2, t3) {
      R2.call(e2[St], "SystemJS." + t3 + " is deprecated for SystemJS.registry." + t3);
    }
    var nt, ot = "undefined" != typeof window && "undefined" != typeof document, it = "undefined" != typeof process && process.versions && process.versions.node, at = "undefined" != typeof process && "string" == typeof process.platform && process.platform.match(/^win/), st = "undefined" != typeof self ? self : commonjsGlobal, ut = "undefined" != typeof Symbol;
    if ("undefined" != typeof document && document.getElementsByTagName) {
      if (!(nt = document.baseURI)) {
        var lt = document.getElementsByTagName("base");
        nt = lt[0] && lt[0].href || window.location.href;
      }
    } else
      "undefined" != typeof location && (nt = location.href);
    if (nt) {
      var ct = (nt = nt.split("#")[0].split("?")[0]).lastIndexOf("/");
      -1 !== ct && (nt = nt.substr(0, ct + 1));
    } else {
      if ("undefined" == typeof process || !process.cwd)
        throw new TypeError("No environment baseURI");
      nt = "file://" + (at ? "/" : "") + process.cwd(), at && (nt = nt.replace(/\\/g, "/"));
    }
    "/" !== nt[nt.length - 1] && (nt += "/");
    var ft = "_" == new Error(0, "_").fileName, dt = Promise.resolve();
    i.prototype.constructor = i, i.prototype.import = function(e2, r3) {
      if ("string" != typeof e2)
        throw new TypeError("Loader import method must be passed a module key string");
      var n3 = this;
      return dt.then(function() {
        return n3[gt](e2, r3);
      }).then(a).catch(function(n4) {
        throw t2(n4, "Loading " + e2 + (r3 ? " from " + r3 : ""));
      });
    };
    var pt = i.resolve = e("resolve"), gt = i.resolveInstantiate = e("resolveInstantiate");
    i.prototype[gt] = function(e2, t3) {
      var r3 = this;
      return r3.resolve(e2, t3).then(function(e3) {
        return r3.registry.get(e3);
      });
    }, i.prototype.resolve = function(e2, r3) {
      var n3 = this;
      return dt.then(function() {
        return n3[pt](e2, r3);
      }).then(s).catch(function(n4) {
        throw t2(n4, "Resolving " + e2 + (r3 ? " to " + r3 : ""));
      });
    };
    var ht = "undefined" != typeof Symbol && Symbol.iterator, mt = e("registry");
    ht && (u2.prototype[Symbol.iterator] = function() {
      return this.entries()[Symbol.iterator]();
    }, u2.prototype.entries = function() {
      var e2 = this[mt];
      return o(Object.keys(e2).map(function(t3) {
        return [t3, e2[t3]];
      }));
    }), u2.prototype.keys = function() {
      return o(Object.keys(this[mt]));
    }, u2.prototype.values = function() {
      var e2 = this[mt];
      return o(Object.keys(e2).map(function(t3) {
        return e2[t3];
      }));
    }, u2.prototype.get = function(e2) {
      return this[mt][e2];
    }, u2.prototype.set = function(e2, t3) {
      if (!(t3 instanceof l2))
        throw new Error("Registry must be set with an instance of Module Namespace");
      return this[mt][e2] = t3, this;
    }, u2.prototype.has = function(e2) {
      return Object.hasOwnProperty.call(this[mt], e2);
    }, u2.prototype.delete = function(e2) {
      return !!Object.hasOwnProperty.call(this[mt], e2) && (delete this[mt][e2], true);
    };
    var vt = e("baseObject");
    l2.prototype = /* @__PURE__ */ Object.create(null), "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(l2.prototype, Symbol.toStringTag, { value: "Module" });
    var yt = e("register-internal");
    f2.prototype = Object.create(i.prototype), f2.prototype.constructor = f2;
    var bt = f2.instantiate = e("instantiate");
    f2.prototype[f2.resolve = i.resolve] = function(e2, t3) {
      return n2(e2, t3 || nt);
    }, f2.prototype[bt] = function(e2, t3) {
    }, f2.prototype[i.resolveInstantiate] = function(e2, t3) {
      var r3 = this, n3 = this[yt], o2 = this.registry[mt];
      return p2(r3, e2, t3, o2, n3).then(function(e3) {
        if (e3 instanceof l2)
          return e3;
        var t4 = e3.linkRecord;
        if (!t4) {
          if (e3.module)
            return e3.module;
          throw e3.evalError;
        }
        return w(r3, e3, t4, o2, n3).then(function() {
          return k(r3, e3, t4, o2, n3, void 0);
        });
      });
    }, f2.prototype.register = function(e2, t3, r3) {
      var n3 = this[yt];
      void 0 === r3 ? n3.lastRegister = [e2, t3, void 0] : (n3.records[e2] || d(n3, e2, void 0)).registration = [t3, r3, void 0];
    }, f2.prototype.registerDynamic = function(e2, t3, r3, n3) {
      var o2 = this[yt];
      "string" != typeof e2 ? o2.lastRegister = [e2, t3, r3] : (o2.records[e2] || d(o2, e2, void 0)).registration = [t3, r3, n3];
    }, x2.prototype.import = function(e2) {
      return this.loader.trace && this.loader.loads[this.key].dynamicDeps.push(e2), this.loader.import(e2, this.key);
    };
    var wt = {};
    Object.freeze && Object.freeze(wt);
    var xt, kt, Et = Promise.resolve(), Ot = new l2({}), St = e("loader-config"), jt = e("metadata"), _t = "undefined" == typeof window && "undefined" != typeof self && "undefined" != typeof importScripts, Pt = false, Mt = false;
    if (ot && function() {
      var e2 = document.createElement("link").relList;
      if (e2 && e2.supports) {
        Mt = true;
        try {
          Pt = e2.supports("preload");
        } catch (e3) {
        }
      }
    }(), ot) {
      var Rt = [], Ct = window.onerror;
      window.onerror = function(e2, t3) {
        for (var r3 = 0; r3 < Rt.length; r3++)
          if (Rt[r3].src === t3)
            return void Rt[r3].err(e2);
        Ct && Ct.apply(this, arguments);
      };
    }
    var Lt, It = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF."'])require\s*\(\s*("[^"\\]*(?:\\.[^"\\]*)*"|'[^'\\]*(?:\\.[^'\\]*)*'|`[^`\\]*(?:\\.[^`\\]*)*`)\s*\)/g, Ft = "undefined" != typeof XMLHttpRequest, Kt = "undefined" != typeof self && void 0 !== self.fetch ? J2 : Ft ? $ : "undefined" != typeof commonjsRequire && "undefined" != typeof process ? B2 : W, Dt = {}, Ut = ["browser", "node", "dev", "build", "production", "default"], qt = /#\{[^\}]+\}/, Tt = ["browserConfig", "nodeConfig", "devConfig", "buildConfig", "productionConfig"], zt = "undefined" != typeof Buffer;
    try {
      zt && "YQ==" !== new Buffer("a").toString("base64") && (zt = false);
    } catch (e2) {
      zt = false;
    }
    var Nt, Jt, $t, Bt, Wt = "\n//# sourceMappingURL=data:application/json;base64,", Gt = 0, Ht = false;
    ot && "undefined" != typeof document && document.getElementsByTagName && (window.chrome && window.chrome.extension || navigator.userAgent.match(/^Node\.js/) || (Ht = true));
    var Zt, Xt = function(e2) {
      function t3(r4, n3, o2, i2) {
        if ("object" == typeof r4 && !(r4 instanceof Array))
          return t3.apply(null, Array.prototype.splice.call(arguments, 1, arguments.length - 1));
        if ("string" == typeof r4 && "function" == typeof n3 && (r4 = [r4]), !(r4 instanceof Array)) {
          if ("string" == typeof r4) {
            var a2 = e2.decanonicalize(r4, i2), s2 = e2.get(a2);
            if (!s2)
              throw new Error('Module not already loaded loading "' + r4 + '" as ' + a2 + (i2 ? ' from "' + i2 + '".' : "."));
            return "__useDefault" in s2 ? s2.__useDefault : s2;
          }
          throw new TypeError("Invalid require");
        }
        for (var u3 = [], l3 = 0; l3 < r4.length; l3++)
          u3.push(e2.import(r4[l3], i2));
        Promise.all(u3).then(function(e3) {
          n3 && n3.apply(null, e3);
        }, o2);
      }
      function r3(r4, n3, o2) {
        function i2(r5, i3, l3) {
          for (var c2 = [], f3 = 0; f3 < n3.length; f3++)
            c2.push(r5(n3[f3]));
          if (l3.uri = l3.id, l3.config = _, -1 !== u3 && c2.splice(u3, 0, l3), -1 !== s2 && c2.splice(s2, 0, i3), -1 !== a2) {
            var d2 = function(n4, o3, i4) {
              return "string" == typeof n4 && "function" != typeof o3 ? r5(n4) : t3.call(e2, n4, o3, i4, l3.id);
            };
            d2.toUrl = function(t4) {
              return e2.normalizeSync(t4, l3.id);
            }, c2.splice(a2, 0, d2);
          }
          var p3 = st.require;
          st.require = t3;
          var g3 = o2.apply(-1 === s2 ? st : i3, c2);
          st.require = p3, void 0 !== g3 && (l3.exports = g3);
        }
        "string" != typeof r4 && (o2 = n3, n3 = r4, r4 = null), n3 instanceof Array || (o2 = n3, n3 = ["require", "exports", "module"].splice(0, o2.length)), "function" != typeof o2 && (o2 = function(e3) {
          return function() {
            return e3;
          };
        }(o2)), r4 || Vt && (n3 = n3.concat(Vt), Vt = void 0);
        var a2, s2, u3;
        -1 !== (a2 = n3.indexOf("require")) && (n3.splice(a2, 1), r4 || (n3 = n3.concat(Ue(o2.toString(), a2)))), -1 !== (s2 = n3.indexOf("exports")) && n3.splice(s2, 1), -1 !== (u3 = n3.indexOf("module")) && n3.splice(u3, 1), r4 ? (e2.registerDynamic(r4, n3, false, i2), Qt ? (Qt = void 0, lr = true) : lr || (Qt = [n3, i2])) : e2.registerDynamic(n3, false, cr ? qe(i2) : i2);
      }
      e2.set("@@cjs-helpers", e2.newModule({ requireResolve: Le.bind(e2), getPathVars: Ae })), e2.set("@@global-helpers", e2.newModule({ prepareGlobal: De })), r3.amd = {}, e2.amdDefine = r3, e2.amdRequire = t3;
    };
    "undefined" != typeof window && "undefined" != typeof document && window.location && (Zt = location.protocol + "//" + location.hostname + (location.port ? ":" + location.port : ""));
    var Yt, Qt, Vt, er, tr = /(^|[^\\])(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm, rr = /("[^"\\\n\r]*(\\.[^"\\\n\r]*)*"|'[^'\\\n\r]*(\\.[^'\\\n\r]*)*')/g, nr = ["_g", "sessionStorage", "localStorage", "clipboardData", "frames", "frameElement", "external", "mozAnimationStartTime", "webkitStorageInfo", "webkitIndexedDB", "mozInnerScreenY", "mozInnerScreenX"], or = "(?:^|[^$_a-zA-Z\\xA0-\\uFFFF.])", ir = `\\s*\\(\\s*("([^"]+)"|'([^']+)')\\s*\\)`, ar = /\(([^\)]*)\)/, sr = /^\s+|\s+$/g, ur = {}, lr = false, cr = false, fr = (ot || _t) && "undefined" != typeof navigator && navigator.userAgent && !navigator.userAgent.match(/MSIE (9|10).0/);
    "undefined" == typeof commonjsRequire || "undefined" == typeof process || process.browser || (er = commonjsRequire);
    var dr, pr = "undefined" != typeof self ? "self" : "global", gr = /(^\s*|[}\);\n]\s*)(import\s*(['"]|(\*\s+as\s+)?(?!type)([^"'\(\)\n; ]+)\s*from\s*['"]|\{)|export\s+\*\s+from\s+["']|export\s*(\{|default|function|class|var|const|let|async\s+function))/, hr = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)*\s*/, mr = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])define\s*\(\s*("[^"]+"\s*,\s*|'[^']+'\s*,\s*)?\s*(\[(\s*(("[^"]+"|'[^']+')\s*,|\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*(\s*("[^"]+"|'[^']+')\s*,?)?(\s*(\/\/.*\r?\n|\/\*(.|\s)*?\*\/))*\s*\]|function\s*|{|[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*\))/, vr = /(?:^\uFEFF?|[^$_a-zA-Z\xA0-\uFFFF.])(exports\s*(\[['"]|\.)|module(\.exports|\['exports'\]|\["exports"\])\s*(\[['"]|[=,\.]))/, yr = /^\#\!.*/, br = /^(\s*\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\s*\/\/[^\n]*|\s*"[^"]+"\s*;?|\s*'[^']+'\s*;?)+/, wr = /\/\*[^\*]*(\*(?!\/)[^\*]*)*\*\/|\/\/[^\n]*|"[^"]+"\s*;?|'[^']+'\s*;?/g;
    if ("undefined" == typeof Promise)
      throw new Error("SystemJS needs a Promise polyfill.");
    if ("undefined" != typeof document) {
      var xr = document.getElementsByTagName("script"), kr = xr[xr.length - 1];
      document.currentScript && (kr.defer || kr.async) && (kr = document.currentScript), dr = kr && kr.src;
    } else if ("undefined" != typeof importScripts)
      try {
        throw new Error("_");
      } catch (e2) {
        e2.stack.replace(/(?:at|@).*(http.+):[\d]+:[\d]+/, function(e3, t3) {
          dr = t3;
        });
      }
    else
      "undefined" != typeof __filename && (dr = __filename);
    var Er;
    et.prototype = Object.create(f2.prototype), et.prototype.constructor = et, et.prototype[et.resolve = f2.resolve] = et.prototype.normalize = Z, et.prototype.load = function(e2, t3) {
      return R2.call(this[St], "System.load is deprecated."), this.import(e2, t3);
    }, et.prototype.decanonicalize = et.prototype.normalizeSync = et.prototype.resolveSync = Y, et.prototype[et.instantiate = f2.instantiate] = Je, et.prototype.config = ke, et.prototype.getConfig = xe, et.prototype.global = st, et.prototype.import = function() {
      return f2.prototype.import.apply(this, arguments).then(function(e2) {
        return "__useDefault" in e2 ? e2.__useDefault : e2;
      });
    };
    for (var Or = ["baseURL", "map", "paths", "packages", "packageConfigPaths", "depCache", "meta", "bundles", "transpiler", "warnings", "pluginFirst", "production", "wasm"], Sr = "undefined" != typeof Proxy, jr = 0; jr < Or.length; jr++)
      !function(e2) {
        Object.defineProperty(et.prototype, e2, { get: function() {
          var t3 = we(this[St], e2);
          return Sr && "object" == typeof t3 && (t3 = new Proxy(t3, { set: function(t4, r3) {
            throw new Error("Cannot set SystemJS." + e2 + '["' + r3 + '"] directly. Use SystemJS.config({ ' + e2 + ': { "' + r3 + '": ... } }) rather.');
          } })), t3;
        }, set: function(t3) {
          throw new Error("Setting `SystemJS." + e2 + "` directly is no longer supported. Use `SystemJS.config({ " + e2 + ": ... })`.");
        } });
      }(Or[jr]);
    et.prototype.delete = function(e2) {
      return rt(this, "delete"), this.registry.delete(e2);
    }, et.prototype.get = function(e2) {
      return rt(this, "get"), this.registry.get(e2);
    }, et.prototype.has = function(e2) {
      return rt(this, "has"), this.registry.has(e2);
    }, et.prototype.set = function(e2, t3) {
      return rt(this, "set"), this.registry.set(e2, t3);
    }, et.prototype.newModule = function(e2) {
      return new l2(e2);
    }, et.prototype.isModule = M2, et.prototype.register = function(e2, t3, r3) {
      return "string" == typeof e2 && (e2 = X.call(this, this[St], e2)), f2.prototype.register.call(this, e2, t3, r3);
    }, et.prototype.registerDynamic = function(e2, t3, r3, n3) {
      return "string" == typeof e2 && (e2 = X.call(this, this[St], e2)), f2.prototype.registerDynamic.call(this, e2, t3, r3, n3);
    }, et.prototype.version = "0.20.19 Dev";
    var _r = new et();
    (ot || _t) && (st.SystemJS = st.System = _r), module.exports && (module.exports = _r);
  }();
})(system);
const System = /* @__PURE__ */ getDefaultExportFromCjs(system.exports);
const cache = {};
const initializedAt = Date.now();
function locateWithCache(load, defaultBust = initializedAt) {
  const { address } = load;
  const path = extractPath(address);
  if (!path) {
    return `${address}?_cache=${defaultBust}`;
  }
  const version = cache[path];
  const bust = version || defaultBust;
  return `${address}?_cache=${bust}`;
}
function extractPath(address) {
  const match = /\/public\/(plugins\/.+\/module)\.js/i.exec(address);
  if (!match) {
    return;
  }
  const [_, path] = match;
  if (!path) {
    return;
  }
  return path;
}
const SystemJS = System;
function loadPluginCss(options2) {
  const theme = config.bootData.user.lightTheme ? options2.light : options2.dark;
  return SystemJS.import(`${theme}!css`);
}
SystemJS.registry.set("plugin-loader", SystemJS.newModule({ locate: locateWithCache }));
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i = 0; i < 10; i++) {
      test2["_" + String.fromCharCode(i)] = i;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }
  return to;
};
var react = { exports: {} };
var react_production_min = {};
/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l = objectAssign, n$1 = 60103, p$1 = 60106;
react_production_min.Fragment = 60107;
react_production_min.StrictMode = 60108;
react_production_min.Profiler = 60114;
var q$1 = 60109, r = 60110, t = 60112;
react_production_min.Suspense = 60113;
var u = 60115, v = 60116;
if ("function" === typeof Symbol && Symbol.for) {
  var w = Symbol.for;
  n$1 = w("react.element");
  p$1 = w("react.portal");
  react_production_min.Fragment = w("react.fragment");
  react_production_min.StrictMode = w("react.strict_mode");
  react_production_min.Profiler = w("react.profiler");
  q$1 = w("react.provider");
  r = w("react.context");
  t = w("react.forward_ref");
  react_production_min.Suspense = w("react.suspense");
  u = w("react.memo");
  v = w("react.lazy");
}
var x = "function" === typeof Symbol && Symbol.iterator;
function y(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = x && a[x] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
function z(a) {
  for (var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var A = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, B = {};
function C(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
C.prototype.isReactComponent = {};
C.prototype.setState = function(a, b) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error(z(85));
  this.updater.enqueueSetState(this, a, b, "setState");
};
C.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function D() {
}
D.prototype = C.prototype;
function E(a, b, c) {
  this.props = a;
  this.context = b;
  this.refs = B;
  this.updater = c || A;
}
var F = E.prototype = new D();
F.constructor = E;
l(F, C.prototype);
F.isPureReactComponent = true;
var G = { current: null }, H = Object.prototype.hasOwnProperty, I = { key: true, ref: true, __self: true, __source: true };
function J(a, b, c) {
  var e, d = {}, k = null, h = null;
  if (null != b)
    for (e in void 0 !== b.ref && (h = b.ref), void 0 !== b.key && (k = "" + b.key), b)
      H.call(b, e) && !I.hasOwnProperty(e) && (d[e] = b[e]);
  var g2 = arguments.length - 2;
  if (1 === g2)
    d.children = c;
  else if (1 < g2) {
    for (var f2 = Array(g2), m2 = 0; m2 < g2; m2++)
      f2[m2] = arguments[m2 + 2];
    d.children = f2;
  }
  if (a && a.defaultProps)
    for (e in g2 = a.defaultProps, g2)
      void 0 === d[e] && (d[e] = g2[e]);
  return { $$typeof: n$1, type: a, key: k, ref: h, props: d, _owner: G.current };
}
function K(a, b) {
  return { $$typeof: n$1, type: a.type, key: b, ref: a.ref, props: a.props, _owner: a._owner };
}
function L(a) {
  return "object" === typeof a && null !== a && a.$$typeof === n$1;
}
function escape(a) {
  var b = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b[a2];
  });
}
var M = /\/+/g;
function N(a, b) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function O(a, b, c, e, d) {
  var k = typeof a;
  if ("undefined" === k || "boolean" === k)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case n$1:
          case p$1:
            h = true;
        }
    }
  if (h)
    return h = a, d = d(h), a = "" === e ? "." + N(h, 0) : e, Array.isArray(d) ? (c = "", null != a && (c = a.replace(M, "$&/") + "/"), O(d, b, c, "", function(a2) {
      return a2;
    })) : null != d && (L(d) && (d = K(d, c + (!d.key || h && h.key === d.key ? "" : ("" + d.key).replace(M, "$&/") + "/") + a)), b.push(d)), 1;
  h = 0;
  e = "" === e ? "." : e + ":";
  if (Array.isArray(a))
    for (var g2 = 0; g2 < a.length; g2++) {
      k = a[g2];
      var f2 = e + N(k, g2);
      h += O(k, b, c, f2, d);
    }
  else if (f2 = y(a), "function" === typeof f2)
    for (a = f2.call(a), g2 = 0; !(k = a.next()).done; )
      k = k.value, f2 = e + N(k, g2++), h += O(k, b, c, f2, d);
  else if ("object" === k)
    throw b = "" + a, Error(z(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
  return h;
}
function P(a, b, c) {
  if (null == a)
    return a;
  var e = [], d = 0;
  O(a, e, "", "", function(a2) {
    return b.call(c, a2, d++);
  });
  return e;
}
function Q(a) {
  if (-1 === a._status) {
    var b = a._result;
    b = b();
    a._status = 0;
    a._result = b;
    b.then(function(b2) {
      0 === a._status && (b2 = b2.default, a._status = 1, a._result = b2);
    }, function(b2) {
      0 === a._status && (a._status = 2, a._result = b2);
    });
  }
  if (1 === a._status)
    return a._result;
  throw a._result;
}
var R = { current: null };
function S() {
  var a = R.current;
  if (null === a)
    throw Error(z(321));
  return a;
}
var T = { ReactCurrentDispatcher: R, ReactCurrentBatchConfig: { transition: 0 }, ReactCurrentOwner: G, IsSomeRendererActing: { current: false }, assign: l };
react_production_min.Children = { map: P, forEach: function(a, b, c) {
  P(a, function() {
    b.apply(this, arguments);
  }, c);
}, count: function(a) {
  var b = 0;
  P(a, function() {
    b++;
  });
  return b;
}, toArray: function(a) {
  return P(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!L(a))
    throw Error(z(143));
  return a;
} };
react_production_min.Component = C;
react_production_min.PureComponent = E;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = T;
react_production_min.cloneElement = function(a, b, c) {
  if (null === a || void 0 === a)
    throw Error(z(267, a));
  var e = l({}, a.props), d = a.key, k = a.ref, h = a._owner;
  if (null != b) {
    void 0 !== b.ref && (k = b.ref, h = G.current);
    void 0 !== b.key && (d = "" + b.key);
    if (a.type && a.type.defaultProps)
      var g2 = a.type.defaultProps;
    for (f2 in b)
      H.call(b, f2) && !I.hasOwnProperty(f2) && (e[f2] = void 0 === b[f2] && void 0 !== g2 ? g2[f2] : b[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    e.children = c;
  else if (1 < f2) {
    g2 = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g2[m2] = arguments[m2 + 2];
    e.children = g2;
  }
  return {
    $$typeof: n$1,
    type: a.type,
    key: d,
    ref: k,
    props: e,
    _owner: h
  };
};
react_production_min.createContext = function(a, b) {
  void 0 === b && (b = null);
  a = { $$typeof: r, _calculateChangedBits: b, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null };
  a.Provider = { $$typeof: q$1, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = J;
react_production_min.createFactory = function(a) {
  var b = J.bind(null, a);
  b.type = a;
  return b;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: t, render: a };
};
react_production_min.isValidElement = L;
react_production_min.lazy = function(a) {
  return { $$typeof: v, _payload: { _status: -1, _result: a }, _init: Q };
};
react_production_min.memo = function(a, b) {
  return { $$typeof: u, type: a, compare: void 0 === b ? null : b };
};
react_production_min.useCallback = function(a, b) {
  return S().useCallback(a, b);
};
react_production_min.useContext = function(a, b) {
  return S().useContext(a, b);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useEffect = function(a, b) {
  return S().useEffect(a, b);
};
react_production_min.useImperativeHandle = function(a, b, c) {
  return S().useImperativeHandle(a, b, c);
};
react_production_min.useLayoutEffect = function(a, b) {
  return S().useLayoutEffect(a, b);
};
react_production_min.useMemo = function(a, b) {
  return S().useMemo(a, b);
};
react_production_min.useReducer = function(a, b, c) {
  return S().useReducer(a, b, c);
};
react_production_min.useRef = function(a) {
  return S().useRef(a);
};
react_production_min.useState = function(a) {
  return S().useState(a);
};
react_production_min.version = "17.0.2";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react);
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f = react.exports, g = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h = Symbol.for;
  g = h("react.element");
  reactJsxRuntime_production_min.Fragment = h("react.fragment");
}
var m = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = Object.prototype.hasOwnProperty, p = { key: true, ref: true, __self: true, __source: true };
function q(c, a, k) {
  var b, d = {}, e = null, l2 = null;
  void 0 !== k && (e = "" + k);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (l2 = a.ref);
  for (b in a)
    n.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
  if (c && c.defaultProps)
    for (b in a = c.defaultProps, a)
      void 0 === d[b] && (d[b] = a[b]);
  return { $$typeof: g, type: c, key: e, ref: l2, props: d, _owner: m.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
let PanelRenderer = () => {
  return /* @__PURE__ */ jsx("div", {
    children: "PanelRenderer can only be used after Grafana instance has been started."
  });
};
let PanelDataErrorView = ({
  message
}) => {
  return /* @__PURE__ */ jsxs("div", {
    children: ["Unable to render data: ", message, "."]
  });
};
let PluginPage = ({
  children
}) => {
  return /* @__PURE__ */ jsx("div", {
    children
  });
};
export {
  GrafanaBootConfig,
  PanelDataErrorView,
  PanelRenderer,
  PluginPage,
  SystemJS,
  config,
  loadPluginCss
};
