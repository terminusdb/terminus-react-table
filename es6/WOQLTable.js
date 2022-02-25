"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WOQLTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _terminusdbClient = _interopRequireDefault(require("@terminusdb/terminusdb-client"));

var _TableComponent = require("./TableComponent");

var _CellRenderer = require("./CellRenderer");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//this only render the logic of do the query is in an external hook
var WOQLTable = function WOQLTable(_ref) {
  var bindings = _ref.bindings,
      result = _ref.result,
      view = _ref.view,
      freewidth = _ref.freewidth,
      query = _ref.query,
      start = _ref.start,
      limit = _ref.limit,
      orderBy = _ref.orderBy,
      totalRows = _ref.totalRows,
      setLimits = _ref.setLimits,
      setOrder = _ref.setOrder,
      onRefresh = _ref.onRefresh,
      resultColumns = _ref.resultColumns;

  var wt = _terminusdbClient["default"].View.table();

  if (view) wt.loadJSON(view.table, view.rules); //we have to review the limit must stay only in one place or we get confused
  //the table read the limit from here
  //set the limit in the view conf

  if (limit) wt.pagesize(limit);
  var woqt = new _terminusdbClient["default"].WOQLTable(false, wt); //the current page (like 1st page , 2nd page...)

  var pagenum = limit ? parseInt(start / limit) : 1; //total number of Pages    

  var pages = limit && totalRows ? parseInt((totalRows - 1) / limit + 1) : 1;
  if (totalRows == 0) pages = 0;
  var prefixes = {}; // (result && result.prefixes ? result.prefixes : (query ? query.getContext() : {}))

  var _useMemo = (0, _react.useMemo)(function () {
    return makeData();
  }, [bindings, result]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      data = _useMemo2[0],
      columns = _useMemo2[1];

  function makeData() {
    var qres = {};

    if (Array.isArray(result.bindings)) {
      //let trans = woqt.bindings()
      qres.bindings = result.bindings;
    } else qres.bindings = result;

    var wr = new _terminusdbClient["default"].WOQLResult(qres, query);
    woqt.setResult(wr, query);
    var columns = formatTableColumns(woqt); //const columns = resultColumns

    return [wr.rows(), columns];
  }

  function addColumnDimensions(item, col) {
    var cstyle = woqt.getColumnDimensions(item);

    for (var k in cstyle) {
      col[k] = cstyle[k];
    }

    return col;
  }

  function renderCellValue(props, woqt) {
    var rend = woqt.getSpecificRender(props.cell.column.id, props.cell.row.original);

    if (rend) {
      return rend(props.cell);
    } else {
      if (!props.cell.value || typeof props.cell.value == "undefined") {
        return "";
      }

      var rendargs = woqt.getRenderer(props.cell.column.id, props.cell.row.original);

      if (typeof props.cell.value == "string" || typeof props.cell.value == "number" || Array.isArray(props.cell.value) || _typeof(props.cell.value) === "object" && (props.cell.value['@type'] || typeof props.cell.value['@value'] != "undefined")) {
        return /*#__PURE__*/_react["default"].createElement(_CellRenderer.CellRenderer, {
          args: rendargs,
          value: props.cell.value,
          column: props.cell.column.id,
          row: props.cell.row.original,
          view: woqt,
          cell: props.cell,
          prefixes: prefixes
        });
      }

      return props.cell.value;
    }
  }

  function formatTableColumns() {
    var colids = woqt.getColumnsToRender();
    if (!Array.isArray(colids)) return [];
    var fixedColIds = colids.map(function (item, index) {
      if (item == "") {
        item = "_" + index;
      }

      return item;
    });
    var listOfColumns = fixedColIds.map(function (item, index) {
      var col = {
        Header: woqt.getColumnHeaderContents(item) || item,
        id: item,
        accessor: item,
        Cell: function Cell(props) {
          return renderCellValue(props, woqt);
        }
      };

      if (!woqt.isSortableColumn(item)) {
        col.disableSortBy = true;
      }

      if (freewidth) return col;
      return addColumnDimensions(item, col, woqt);
    });
    var colstruct = {
      columns: listOfColumns
    };
    if (woqt.config.header()) colstruct.Header = woqt.config.header();else colstruct.Header = " ";
    return [colstruct];
  }

  if (!data || !data.length) return null;
  return /*#__PURE__*/_react["default"].createElement(_TableComponent.TableComponent, {
    data: data,
    columns: columns,
    freewidth: freewidth,
    view: woqt,
    orderBy: orderBy,
    pages: pages,
    pageNumber: pagenum,
    rowCount: totalRows,
    setLimits: setLimits,
    setOrder: setOrder,
    onRefresh: onRefresh
  });
};

exports.WOQLTable = WOQLTable;