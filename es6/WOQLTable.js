"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WOQLTable = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTable = require("react-table");

var _reactstrap = require("reactstrap");

var _terminusdbClient = _interopRequireDefault(require("@terminusdb/terminusdb-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var WOQLTable = function WOQLTable(_ref) {
  var bindings = _ref.bindings,
      view = _ref.view,
      query = _ref.query,
      serverside = _ref.serverside;
  serverside = serverside || false;
  var columns = (0, _react.useMemo)(function () {
    return makeColumns();
  }, []);
  var data = (0, _react.useMemo)(function () {
    return makeData();
  }, []);

  function makeColumns() {
    view = view || {};

    var wt = _terminusdbClient["default"].View.table();

    if (view.rules) wt.loadJSON(view.table, view.rules);
    var wr = new _terminusdbClient["default"].WOQLResult({
      bindings: bindings
    });
    var woqt = new _terminusdbClient["default"].WOQLTable(false, wt);
    woqt.setResult(wr, query);
    var colids = woqt.getColumnsToRender();
    var cols = [];

    for (var i = 0; i < colids.length; i++) {
      var cnt = woqt.getColumnHeaderContents(colids[i]).innerHTML;
      cols.push({
        id: colids[i],
        accessor: colids[i],
        Header: colids[i],
        selector: colids[i],
        canSort: true
      });
    }

    return cols;
  }

  function makeData() {
    view = view || {};

    var wt = _terminusdbClient["default"].View.table();

    if (view.rules) wt.loadJSON(view.table, view.rules);
    var wr = new _terminusdbClient["default"].WOQLResult({
      bindings: bindings
    });
    var woqt = new _terminusdbClient["default"].WOQLTable(false, wt);
    woqt.setResult(wr, query);
    var dat = [];
    var row = false;

    while (row = woqt.next()) {
      var nrow = {};

      for (var k in row) {
        nrow[k] = typeof row[k]["@value"] != "undefined" ? row[k]["@value"] : row[k];
      }

      dat.push(nrow);
    }

    return dat;
  }

  if (data && columns) {
    var _useTable = (0, _reactTable.useTable)({
      columns: columns,
      data: data,
      initialState: {
        pageIndex: 0
      },
      manualPagination: serverside // Tell the usePagination
      // hook that we'll handle our own data fetching
      // This means we'll also have to provide our own
      // pageCount.
      //pageCount: controlledPageCount,

    }, _reactTable.useSortBy, _reactTable.usePagination),
        getTableProps = _useTable.getTableProps,
        getTableBodyProps = _useTable.getTableBodyProps,
        headerGroups = _useTable.headerGroups,
        prepareRow = _useTable.prepareRow,
        page = _useTable.page,
        canPreviousPage = _useTable.canPreviousPage,
        canNextPage = _useTable.canNextPage,
        pageOptions = _useTable.pageOptions,
        pageCount = _useTable.pageCount,
        gotoPage = _useTable.gotoPage,
        nextPage = _useTable.nextPage,
        previousPage = _useTable.previousPage,
        setPageSize = _useTable.setPageSize,
        _useTable$state = _useTable.state,
        pageIndex = _useTable$state.pageIndex,
        pageSize = _useTable$state.pageSize;

    return _react["default"].createElement("span", null, _react["default"].createElement(_reactstrap.Table, _extends({}, getTableProps(), {
      hover: true
    }), _react["default"].createElement("thead", null, headerGroups.map(function (headerGroup) {
      return _react["default"].createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
        return _react["default"].createElement("th", column.getHeaderProps(column.getSortByToggleProps()), column.render('Header'), _react["default"].createElement("span", null, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''));
      }));
    })), _react["default"].createElement("tbody", getTableBodyProps(), page.map(function (row, i) {
      prepareRow(row);
      return _react["default"].createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
        return _react["default"].createElement("td", cell.getCellProps(), cell.render("Cell"));
      }));
    }))), _react["default"].createElement(_reactstrap.Row, {
      md: 12
    }, _react["default"].createElement(_reactstrap.Col, {
      md: 6
    }, _react["default"].createElement(_reactstrap.Pagination, {
      className: "pagination"
    }, _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
      previous: true,
      href: "#",
      onClick: function onClick() {
        return previousPage();
      },
      disabled: !canPreviousPage
    })), _react["default"].createElement(_reactstrap.PaginationItem, null, _react["default"].createElement(_reactstrap.PaginationLink, {
      next: true,
      href: "#",
      onClick: function onClick() {
        return nextPage();
      },
      disabled: !canNextPage
    })))), _react["default"].createElement(_reactstrap.Col, {
      md: 6,
      className: "justify-content-end"
    }, _react["default"].createElement("span", null, "Page", ' ', _react["default"].createElement("strong", null, pageIndex + 1, " of ", pageCount), ' '), _react["default"].createElement("select", {
      value: pageSize,
      onChange: function onChange(e) {
        setPageSize(Number(e.target.value));
      }
    }, [10, 20, 30, 40, 50].map(function (pageSize) {
      return _react["default"].createElement("option", {
        key: pageSize,
        value: pageSize
      }, "Show ", pageSize);
    })))));
  }
};

exports.WOQLTable = WOQLTable;