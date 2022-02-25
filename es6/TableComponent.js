"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TableComponent = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactTable = require("react-table");

var _bi = require("react-icons/bi");

var _reactBootstrap = require("react-bootstrap");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

//replace;

/**
 * config options
 * pager - no, remote, local 
 * sort - no, local, remote
 */
var TableComponent = function TableComponent(_ref) {
  var columns = _ref.columns,
      data = _ref.data,
      view = _ref.view,
      pages = _ref.pages,
      freewidth = _ref.freewidth,
      orderBy = _ref.orderBy,
      rowCount = _ref.rowCount,
      pageNumber = _ref.pageNumber,
      setLimits = _ref.setLimits,
      setOrder = _ref.setOrder,
      pagesizes = _ref.pagesizes,
      onRefresh = _ref.onRefresh;
  pagesizes = pagesizes || [5, 10, 20, 30, 40, 50];
  var pager = view.config.pager();
  rowCount = rowCount || data.length;
  var startPageSize = view.config.pagesize() || 10;
  var startPageNumber = pageNumber || 0;
  var ut_config = {
    columns: columns,
    data: data,
    manualPagination: pager == "remote" ? true : false,
    manualSortBy: pager == "remote" ? true : false,
    pageCount: pages || 1,
    initialState: {
      pageSize: view.config.pagesize() || 10,
      pageIndex: pageNumber || 0,
      sortBy: woql_to_order(orderBy)
    }
  };

  var _useTable = (0, _reactTable.useTable)(ut_config, _reactTable.useSortBy, _reactTable.usePagination),
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
      pageSize = _useTable$state.pageSize,
      sortBy = _useTable$state.sortBy;

  var rowCountStr = "";

  if (pager) {
    var st = pageSize * pageIndex + 1;
    var en = page.length + st - 1;
    rowCountStr = "Record " + st + " to " + en;

    if (rowCount) {
      rowCountStr += " of " + rowCount;
    }
  }

  (0, _react.useEffect)(function () {
    if (pager === "remote") {
      var worder = order_to_woql(sortBy);
      if (setOrder) setOrder(worder);
    }
  }, [sortBy]);
  (0, _react.useEffect)(function () {
    if (pager === "remote" && setLimits && (pageSize !== ut_config.initialState.pageSize || pageIndex != (pageNumber || 0))) setLimits(pageSize, pageIndex * pageSize);
  }, [pageIndex, pageSize]);
  return /*#__PURE__*/_react["default"].createElement("span", null, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Table, _extends({}, getTableProps(), {
    hover: true
  }), /*#__PURE__*/_react["default"].createElement("thead", null, headerGroups.map(function (headerGroup) {
    return /*#__PURE__*/_react["default"].createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return /*#__PURE__*/_react["default"].createElement("th", column.getHeaderProps(column.getSortByToggleProps()), column.render('Header'), /*#__PURE__*/_react["default"].createElement("span", null, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''));
    }));
  })), /*#__PURE__*/_react["default"].createElement("tbody", getTableBodyProps(), page.map(function (row, i) {
    prepareRow(row);
    return /*#__PURE__*/_react["default"].createElement("tr", row.getRowProps(getRowProps(row, view)), row.cells.map(function (cell) {
      return /*#__PURE__*/_react["default"].createElement("td", cell.getCellProps([getColumnProps(cell.column, view, freewidth), getCellProps(cell, view)]), cell.render("Cell"));
    }));
  }))), pager && /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Row, {
    md: 12,
    className: "mr-0 ml-0"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    md: 3,
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return previousPage();
    },
    disabled: !canPreviousPage
  }, '<'), ' ', /*#__PURE__*/_react["default"].createElement("button", {
    onClick: function onClick() {
      return nextPage();
    },
    disabled: !canNextPage
  }, '>'), ' '), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    md: 6,
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("span", null, "Page", ' ', /*#__PURE__*/_react["default"].createElement("strong", {
    className: "mr-3"
  }, pageIndex + 1, " of ", pageCount)), /*#__PURE__*/_react["default"].createElement("select", {
    value: pageSize,
    onChange: function onChange(e) {
      setPageSize(Number(e.target.value));
    }
  }, pagesizes.map(function (pageSizeItem) {
    return /*#__PURE__*/_react["default"].createElement("option", {
      key: pageSizeItem,
      value: pageSizeItem
    }, "Show ", pageSizeItem);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "ml-4"
  }, rowCountStr)), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Col, {
    md: 3,
    className: "d-flex justify-content-center align-items-center"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "tdb__toolbar__base"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: onRefresh,
    className: "tdb__toolbar__base__button",
    title: "Refresh table contents"
  }, /*#__PURE__*/_react["default"].createElement(_bi.BiRefresh, {
    className: "tdb__toolbar__base__icon"
  }), /*#__PURE__*/_react["default"].createElement("span", null, "Refresh"))))));
};

exports.TableComponent = TableComponent;

function getCellProps(cell, view) {
  var cs = {};

  if (view.hasCellClick(cell.row.original, cell.column.id)) {
    var onc = view.getCellClick(cell.row.original, cell.column.id);

    if (onc) {
      cs.onClick = function () {
        onc(cell);
      };

      cs.style = {
        cursor: "pointer"
      };
    }
  }

  return cs;
}

function getRowProps(row, view) {
  var cs = {};

  if (view.hasRowClick(row.original)) {
    var onc = view.getRowClick(row.original);

    if (onc) {
      cs.onClick = function () {
        onc(row);
      };

      cs.style = {
        cursor: "pointer"
      };
    }
  }

  return cs;
}

function getColumnProps(column, view, freewidth) {
  var cstyle = {};

  if (freewidth) {
    cstyle = view.getColumnDimensions(column.id);
  } else {
    if (column.width) {
      cstyle.width = column.width;
    }

    if (column.maxWidth) {
      cstyle.maxWidth = column.maxWidth;
    }

    if (column.minWidth) {
      cstyle.minWidth = column.minWidth;
    }
  }

  return {
    style: cstyle
  };
}

var order_to_woql = function order_to_woql(lorder) {
  if (lorder.length == 0) return false;
  if (!Array.isArray(lorder)) return false;
  var orderarr = [];

  for (var i = 0; i < lorder.length; i++) {
    orderarr.push(lorder[i].id);
    orderarr.push(lorder[i].desc ? "desc" : "asc");
  }

  return orderarr;
};

var woql_to_order = function woql_to_order(ob) {
  if (!ob) return [];
  var order = [];
  if (!Array.isArray(ob)) ob = [ob];

  for (var i = 0; i < ob.length; i++) {
    if (ob[i] == "asc" || ob[i] == "desc") {} else {
      var nub = {
        id: ob[i],
        desc: false
      };
      if (i + 1 < ob.length && ob[i + 1] == "desc") nub.desc = true;
      order.push(nub);
    }
  }

  return order;
};