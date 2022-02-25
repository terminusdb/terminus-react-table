"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormatColumns = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var replaceStr = function replaceStr(label) {
  if (typeof label === "string") {
    return label.replace('v:', '');
  }

  return label;
};
/*
the conf must be implemented
*/


var FormatColumns = function FormatColumns(columnVars, conf) {
  var columnList = columnVars || [];
  return columnList.map(function (item, index) {
    return {
      Header: replaceStr(item),
      id: item,
      accessor: item,
      filterable: false,
      show: true,
      Cell: function Cell(props) {
        var value;

        if (_typeof(props.cell.value) === 'object') {
          value = props.cell.value['@value'];
        } else {
          value = props.cell.value; //.substring(props.value.lastIndexOf('/')+1)).replace("#",":")
        }

        return /*#__PURE__*/_react["default"].createElement("span", null, value);
      }
    };
  });
};

exports.FormatColumns = FormatColumns;