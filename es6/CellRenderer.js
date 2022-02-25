"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.shortenedText = exports.TypeRenderer = exports.TimeRenderer = exports.StringRenderer = exports.RangeRenderer = exports.NumberRenderer = exports.LiteralRenderer = exports.JSONRenderer = exports.JSONLDRenderer = exports.IRIRenderer = exports.HTMLRenderer = exports.CellRenderer = exports.ArrayRenderer = void 0;

var _react = _interopRequireWildcard(require("react"));

var _terminusdbClient = _interopRequireDefault(require("@terminusdb/terminusdb-client"));

var _dateFns = require("date-fns");

var _md = require("react-icons/md");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var CellRenderer = function CellRenderer(_ref) {
  var value = _ref.value,
      column = _ref.column,
      row = _ref.row,
      cell = _ref.cell,
      view = _ref.view,
      args = _ref.args,
      depth = _ref.depth,
      prefixes = _ref.prefixes;
  depth = depth || 0;

  if (isEmptyValue(value)) {
    return "";
  } else if (typeof value == "string" && _terminusdbClient["default"].UTILS.isIRI(value, prefixes, true)) {
    return /*#__PURE__*/_react["default"].createElement(IRIRenderer, {
      value: value,
      depth: depth,
      prefixes: prefixes,
      view: view,
      row: row,
      cell: cell,
      column: column,
      args: args
    });
  } else if ((typeof value == "string" || typeof value == "number") && args && args.datatype) {
    var nvalue = {
      "@value": value,
      "@type": args.datatype
    };
    return /*#__PURE__*/_react["default"].createElement(LiteralRenderer, {
      prefixes: prefixes,
      value: nvalue,
      view: view,
      row: row,
      cell: cell,
      column: column,
      args: args
    });
  } else if (Array.isArray(value)) {
    if (value.length == 1 && Array.isArray(value[0])) {
      value = value[0];
    }

    return /*#__PURE__*/_react["default"].createElement(ArrayRenderer, {
      prefixes: prefixes,
      value: value,
      depth: depth,
      view: view,
      row: row,
      cell: cell,
      column: column,
      args: args
    });
  } else if (_typeof(value) == "object" && typeof value['@value'] != "undefined") {
    if (args && args.types) {
      return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(LiteralRenderer, {
        prefixes: prefixes,
        value: value,
        view: view,
        row: row,
        cell: cell,
        column: column,
        args: args
      }), /*#__PURE__*/_react["default"].createElement(TypeRenderer, {
        prefixes: prefixes,
        value: ty,
        view: view,
        row: row,
        cell: cell,
        column: column,
        args: args
      }));
    } else {
      return /*#__PURE__*/_react["default"].createElement(LiteralRenderer, {
        prefixes: prefixes,
        value: value,
        view: view,
        row: row,
        cell: cell,
        column: column,
        args: args
      });
    }
  } else if (_typeof(value) == "object" && _typeof(value['@type'])) {
    return /*#__PURE__*/_react["default"].createElement(JSONLDRenderer, {
      prefixes: prefixes,
      value: value,
      view: view,
      row: row,
      cell: cell,
      column: column,
      args: args
    });
  }

  return value;
};

exports.CellRenderer = CellRenderer;

var IRIRenderer = function IRIRenderer(_ref2) {
  var value = _ref2.value,
      column = _ref2.column,
      row = _ref2.row,
      cell = _ref2.cell,
      view = _ref2.view,
      args = _ref2.args,
      prefixes = _ref2.prefixes;

  if (!view.uncompressed(row, column)) {
    var shirival = _terminusdbClient["default"].UTILS.shorten(value, prefixes);

    if (shirival != value) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "shortened_iri",
        title: value
      }, " ", shirival, " ");
    }
  }

  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "iri"
  }, value);
};

exports.IRIRenderer = IRIRenderer;

var TypeRenderer = function TypeRenderer(_ref3) {
  var value = _ref3.value,
      column = _ref3.column,
      row = _ref3.row,
      cell = _ref3.cell,
      view = _ref3.view,
      args = _ref3.args,
      prefixes = _ref3.prefixes;

  if (!view.uncompressed(row, column)) {
    var shirival = _terminusdbClient["default"].UTILS.shorten(value, prefixes);

    if (shirival != value) {
      return /*#__PURE__*/_react["default"].createElement("span", {
        className: "shortened_iri",
        title: "Type: " + value
      }, " ", shirival, " ");
    }
  }

  return /*#__PURE__*/_react["default"].createElement("span", {
    className: "iri"
  }, value);
};

exports.TypeRenderer = TypeRenderer;

var JSONLDRenderer = function JSONLDRenderer(_ref4) {
  var value = _ref4.value,
      column = _ref4.column,
      row = _ref4.row,
      cell = _ref4.cell,
      view = _ref4.view,
      args = _ref4.args,
      prefixes = _ref4.prefixes;
  return /*#__PURE__*/_react["default"].createElement(JSONRenderer, {
    prefixes: prefixes,
    value: value,
    view: view,
    row: row,
    cell: cell,
    column: column,
    args: args
  });
};

exports.JSONLDRenderer = JSONLDRenderer;

var JSONRenderer = function JSONRenderer(_ref5) {
  var value = _ref5.value,
      column = _ref5.column,
      row = _ref5.row,
      cell = _ref5.cell,
      view = _ref5.view,
      args = _ref5.args,
      prefixes = _ref5.prefixes;
  return JSON.stringify(value, false, 2);
};

exports.JSONRenderer = JSONRenderer;

function isTemporalType(ty) {
  var tts = ["xsd:date", "xsd:dateTime"];
  return tts.indexOf(ty) != -1;
}

function isHTMLType(ty) {
  var tts = ["xdd:html"];
  return tts.indexOf(ty) != -1;
}

function isJSONType(ty) {
  var tts = ["xdd:json"];
  return tts.indexOf(ty) != -1;
}

function isRangeType(ty) {
  var tts = ["xdd:gYearRange", "xdd:decimalRange", "xdd:dateRange", "xdd:integerRange"];
  return tts.indexOf(ty) != -1;
}

var LiteralRenderer = function LiteralRenderer(_ref6) {
  var value = _ref6.value,
      column = _ref6.column,
      row = _ref6.row,
      cell = _ref6.cell,
      view = _ref6.view,
      args = _ref6.args,
      prefixes = _ref6.prefixes;
  var ty = value["@type"] ? _terminusdbClient["default"].UTILS.shorten(value["@type"], prefixes) : "xsd:string";
  var vy = value['@value'];
  args = args || {};

  if (args.type == "time" || !args.type && isTemporalType(ty)) {
    return /*#__PURE__*/_react["default"].createElement(TimeRenderer, {
      value: vy,
      type: ty,
      prefixes: prefixes,
      column: column,
      row: row,
      cell: cell,
      view: view,
      args: args
    });
  }

  if (args.type == "number" || !args.type && typeof vy == "number") {
    return /*#__PURE__*/_react["default"].createElement(NumberRenderer, {
      value: vy,
      type: ty,
      prefixes: prefixes,
      column: column,
      row: row,
      cell: cell,
      view: view,
      args: args
    });
  }

  if (args.type == "html" || !args.type && isHTMLType(ty)) {
    return /*#__PURE__*/_react["default"].createElement(HTMLRenderer, {
      value: vy,
      type: ty,
      prefixes: prefixes,
      column: column,
      row: row,
      cell: cell,
      view: view,
      args: args
    });
  }

  if (args.type == "json" || !args.type && isJSONType(ty)) {
    return /*#__PURE__*/_react["default"].createElement(JSONRenderer, {
      value: vy,
      type: ty,
      prefixes: prefixes,
      column: column,
      row: row,
      cell: cell,
      view: view,
      args: args
    });
  }

  if (args.type == "range" || !args.type && isRangeType(ty)) {
    return /*#__PURE__*/_react["default"].createElement(RangeRenderer, {
      value: vy,
      type: ty,
      prefixes: prefixes,
      column: column,
      row: row,
      cell: cell,
      view: view,
      args: args
    });
  }

  return /*#__PURE__*/_react["default"].createElement(StringRenderer, {
    value: vy,
    type: ty,
    prefixes: prefixes,
    column: column,
    row: row,
    cell: cell,
    view: view,
    args: args
  });
};

exports.LiteralRenderer = LiteralRenderer;

var StringRenderer = function StringRenderer(_ref7) {
  var value = _ref7.value,
      type = _ref7.type,
      column = _ref7.column,
      row = _ref7.row,
      cell = _ref7.cell,
      view = _ref7.view,
      args = _ref7.args,
      prefixes = _ref7.prefixes;
  var maxlen = args && args.maxlen ? args.maxlen : 200;
  var maxword = args && args.maxword ? args.maxword : 32;
  var txt = shortenedText(value, maxlen, maxword);
  var sf = txt == value || args && args.full;
  var canTruncate = !(txt == value);

  var _useState = (0, _react.useState)(sf),
      _useState2 = _slicedToArray(_useState, 2),
      showingFull = _useState2[0],
      setShowingFull = _useState2[1];

  var toggleFull = function toggleFull(e) {
    e.stopPropagation();
    setShowingFull(!showingFull);
  };

  return /*#__PURE__*/_react["default"].createElement("span", null, showingFull && /*#__PURE__*/_react["default"].createElement("span", {
    title: "String Type: " + type
  }, value, " "), !showingFull && /*#__PURE__*/_react["default"].createElement("span", {
    title: "Type: " + type + ", Value: " + value
  }, txt, " "), canTruncate && showingFull && /*#__PURE__*/_react["default"].createElement("span", {
    className: "",
    title: "Show Less",
    onClick: toggleFull
  }, /*#__PURE__*/_react["default"].createElement(_md.MdExpandLess, {
    color: "#0055bb",
    className: ""
  })), canTruncate && !showingFull && /*#__PURE__*/_react["default"].createElement("span", {
    className: "",
    title: "Show More",
    onClick: toggleFull
  }, /*#__PURE__*/_react["default"].createElement(_md.MdExpandMore, {
    color: "#0055bb",
    className: ""
  })));
};

exports.StringRenderer = StringRenderer;

var ArrayRenderer = function ArrayRenderer(_ref8) {
  var depth = _ref8.depth,
      value = _ref8.value,
      column = _ref8.column,
      row = _ref8.row,
      cell = _ref8.cell,
      view = _ref8.view,
      args = _ref8.args,
      prefixes = _ref8.prefixes;

  if (isEmptyValue(value)) {
    return "";
  }

  var maxlen = args && args.maxlen ? args.maxlen : 5;
  var sf = maxlen >= value.length || args && args.full;
  var canTruncate = value.length > maxlen;

  var _useState3 = (0, _react.useState)(sf),
      _useState4 = _slicedToArray(_useState3, 2),
      showingFull = _useState4[0],
      setShowingFull = _useState4[1];

  var toggleFull = function toggleFull(e) {
    e.stopPropagation();
    setShowingFull(!showingFull);
  };

  function getVals() {
    var l = showingFull ? value.length : maxlen;
    var vals = [];

    for (var i = 0; i < l; i++) {
      vals.push( /*#__PURE__*/_react["default"].createElement(CellRenderer, {
        key: "cellr_" + i,
        prefixes: prefixes,
        value: value[i],
        column: column,
        row: row,
        cell: cell,
        view: view,
        args: args,
        depth: depth + 1
      }));
    }

    return vals;
  }

  return /*#__PURE__*/_react["default"].createElement("span", null, depth > 0 && /*#__PURE__*/_react["default"].createElement("span", null, "[ "), /*#__PURE__*/_react["default"].createElement("span", null, getVals()), depth > 0 && /*#__PURE__*/_react["default"].createElement("span", null, " ]"), depth == 0 && canTruncate && /*#__PURE__*/_react["default"].createElement("button", {
    onClick: toggleFull
  }, " ", showingFull ? "less" : "" + (value.length - maxlen) + " more", " "));
};

exports.ArrayRenderer = ArrayRenderer;

var shortenedText = function shortenedText(text, max_cell_size, max_word_size) {
  if (max_cell_size && text.length > max_cell_size) {
    text = text.substring(0, max_cell_size);
    var lastword = text.lastIndexOf(" ");
    if (text.length - lastword < 15) text = text.substring(0, lastword);
    text += "... ";
  }

  if (text && text.length > max_word_size) {
    var replacements = {};
    var words = text.split(" ");

    for (var i = 0; i < words.length; i++) {
      var word = words[i];

      if (word.length > max_word_size) {
        var newstr = word.substring(0, max_word_size) + "...";
        replacements[word] = newstr;
      }
    }

    for (var k in replacements) {
      text = text.replace(k, replacements[k]);
    }
  }

  return text;
};

exports.shortenedText = shortenedText;

var NumberRenderer = function NumberRenderer(_ref9) {
  var value = _ref9.value,
      type = _ref9.type,
      column = _ref9.column,
      row = _ref9.row,
      cell = _ref9.cell,
      view = _ref9.view,
      args = _ref9.args,
      prefixes = _ref9.prefixes;
  var fmt = args.format || "commas";

  if (fmt == "bytes") {
    value = _terminusdbClient["default"].UTILS.TypeHelper.formatBytes(value);
  }

  if (fmt == "commas") {
    value = _terminusdbClient["default"].UTILS.TypeHelper.numberWithCommas(value);
  }

  return /*#__PURE__*/_react["default"].createElement("span", {
    title: "Numeric Type: " + type
  }, value);
};

exports.NumberRenderer = NumberRenderer;

var TimeRenderer = function TimeRenderer(_ref10) {
  var value = _ref10.value,
      type = _ref10.type,
      column = _ref10.column,
      row = _ref10.row,
      cell = _ref10.cell,
      view = _ref10.view,
      args = _ref10.args,
      prefixes = _ref10.prefixes;
  var d, fstr;

  if (typeof value == "number") {
    if (!isNaN(parseFloat(value))) {
      d = new Date(parseFloat(value * 1000));
    } else {
      return /*#__PURE__*/_react["default"].createElement("span", null, value);
    }
  } else {
    d = new Date(value);
  }

  if (args && args.format) fstr = args.format;else fstr = type == "xsd:date" ? "d MMM yy" : "MMM d, yyyy - HH:mm:ss";

  if (d instanceof Date && !isNaN(d)) {
    return /*#__PURE__*/_react["default"].createElement("span", {
      title: "Temporal Type: " + type
    }, (0, _dateFns.format)(d, fstr));
  } else {
    return /*#__PURE__*/_react["default"].createElement("span", null, value);
  }
};

exports.TimeRenderer = TimeRenderer;

var RangeRenderer = function RangeRenderer(_ref11) {
  var value = _ref11.value,
      type = _ref11.type,
      column = _ref11.column,
      row = _ref11.row,
      cell = _ref11.cell,
      view = _ref11.view,
      args = _ref11.args,
      prefixes = _ref11.prefixes;
  return /*#__PURE__*/_react["default"].createElement("span", {
    title: "Range Type: " + type
  }, value);
};

exports.RangeRenderer = RangeRenderer;

var HTMLRenderer = function HTMLRenderer(_ref12) {
  var value = _ref12.value,
      type = _ref12.type,
      column = _ref12.column,
      row = _ref12.row,
      cell = _ref12.cell,
      view = _ref12.view,
      args = _ref12.args,
      prefixes = _ref12.prefixes;
  return /*#__PURE__*/_react["default"].createElement("span", {
    title: "HTML Type: " + type
  }, value);
};

exports.HTMLRenderer = HTMLRenderer;

function isEmptyValue(val) {
  if (val == "system:unknown") return true;
  if (val === "") return true;
  if (_typeof(val) == "object" && val['@value'] === "") return true;
  if (Array.isArray(val) && val.length == 0) return true;
  if (Array.isArray(val) && val.length == 1 && isEmptyValue(val[1])) return true;
  return false;
}