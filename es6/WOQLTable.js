"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WOQLTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _terminusdbClient = _interopRequireDefault(require("@terminusdb/terminusdb-client"));

var _utils = require("./utils");

var _TableComponent = require("./TableComponent");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WOQLTable = function WOQLTable(_ref) {
  var bindings = _ref.bindings,
      view = _ref.view,
      query = _ref.query,
      serverside = _ref.serverside;

  var _useMemo = (0, _react.useMemo)(function () {
    return makeData();
  }, [bindings]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      data = _useMemo2[0],
      columns = _useMemo2[1];

  function makeData() {
    view = view || {};

    var wt = _terminusdbClient["default"].View.table();

    if (view.rules) wt.loadJSON(view.table, view.rules);
    var wr = new _terminusdbClient["default"].WOQLResult({
      bindings: bindings
    }, query);
    var woqt = new _terminusdbClient["default"].WOQLTable(false, wt);
    woqt.setResult(wr, query);
    var columns = formatTableColumns(woqt);
    return [bindings, columns];
  }

  function formatTableColumns(woqt) {
    var colids = woqt.getColumnsToRender();
    var listOfColumns = colids.map(function (item, index) {
      return {
        Header: item,
        id: item,
        accessor: item,
        selector: item,
        canSort: woqt.isSortableColumn(item),
        filterable: woqt.isFilterableColumn(item),
        Cell: function Cell(props) {
          return renderCellValue(props, woqt);
        }
      };
    });
    var colstruct = {
      columns: listOfColumns
    };
    if (woqt.config.header()) colstruct.Header = woqt.config.header();else colstruct.Header = "waaa";
    return [colstruct];
  }

  function renderCellValue(props, woqt) {
    var value;

    if (_typeof(props.cell.value) === 'object') {
      value = props.cell.value['@value'];
    } else {
      value = props.cell.value;
    }

    return _react["default"].createElement("span", null, value);
  }

  return _react["default"].createElement(_TableComponent.TableComponent, {
    data: data,
    columns: columns
  });
};

exports.WOQLTable = WOQLTable;