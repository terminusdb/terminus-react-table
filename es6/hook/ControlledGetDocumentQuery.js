"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlledGetDocumentQuery = ControlledGetDocumentQuery;

var _react = _interopRequireWildcard(require("react"));

var _terminusdbClient = _interopRequireDefault(require("@terminusdb/terminusdb-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WOQL = _terminusdbClient["default"].WOQL;

function ControlledGetDocumentQuery(woqlClient, document, queryLimit, queryStart, order) {
  var _useState = (0, _react.useState)(queryLimit || 10),
      _useState2 = _slicedToArray(_useState, 2),
      limit = _useState2[0],
      setLimit = _useState2[1];

  var _useState3 = (0, _react.useState)(queryStart || 0),
      _useState4 = _slicedToArray(_useState3, 2),
      start = _useState4[0],
      setStart = _useState4[1];

  var _useState5 = (0, _react.useState)(order || false),
      _useState6 = _slicedToArray(_useState5, 2),
      orderBy = _useState6[0],
      setOrderBy = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      rowCount = _useState8[0],
      setRowCount = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loaded = _useState12[0],
      setLoaded = _useState12[1];

  var _useState13 = (0, _react.useState)(0),
      _useState14 = _slicedToArray(_useState13, 2),
      controlledRefresh = _useState14[0],
      setControlledRefresh = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      documentResults = _useState16[0],
      setDocumentResults = _useState16[1];

  var _useState17 = (0, _react.useState)(false),
      _useState18 = _slicedToArray(_useState17, 2),
      documentError = _useState18[0],
      setDocumentError = _useState18[1];

  var controlledDocument = document;

  var changeOrder = function changeOrder(ord) {
    if (JSON.stringify(orderBy) != JSON.stringify(ord)) {
      setOrderBy(ord);
      setStart(0);
    }
  };

  var changeLimits = function changeLimits(l, s) {
    var ll = parseInt(l) || 0;
    var ss = parseInt(s) || 0;

    if (ll !== limit) {
      setLimit(ll);
    }

    if (ss !== start) setStart(ss);
  };

  var onRefresh = function onRefresh() {
    setRefresh(controlledRefresh + 1);
  }; //I prefer run the query directly and pass the new document
  //to be review
  //the result is the only things that trigger a refresh


  var updateDocument = function updateDocument() {//setControlledDocument(document)
  }; // we need the query result and the count query result


  var executeQuery = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var params, tstart, db, response, countResult;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(controlledDocument && woqlClient)) {
                _context.next = 26;
                break;
              }

              params = {};
              setLoading(true);
              tstart = Date.now();
              db = woqlClient.db();
              params['type'] = controlledDocument;
              params['as_list'] = true;
              params['skip'] = start;
              params['count'] = limit;
              _context.prev = 9;
              _context.next = 12;
              return woqlClient.getDocument(params, db);

            case 12:
              response = _context.sent;
              _context.next = 15;
              return executeCountQuery();

            case 15:
              countResult = _context.sent;
              setDocumentResults(response);
              setRowCount(countResult);
              _context.next = 23;
              break;

            case 20:
              _context.prev = 20;
              _context.t0 = _context["catch"](9);
              processErrorResult(_context.t0, tstart);

            case 23:
              _context.prev = 23;
              setLoading(false);
              return _context.finish(23);

            case 26:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[9, 20, 23, 26]]);
    }));

    return function executeQuery() {
      return _ref.apply(this, arguments);
    };
  }();

  var executeCountQuery = function executeCountQuery() {
    var q = WOQL.count("v:Count", WOQL.triple("v:doc", "rdf:type", "@schema:".concat(document)));
    return woqlClient.query(q).then(function (cresult) {
      return cresult && cresult.bindings && cresult.bindings.length ? cresult.bindings[0]['Count']['@value'] : 0;
    });
  };
  /*
   * I have to review the error in interceptor
   */


  function processErrorResult(e, stime) {
    var response = {};
    response.status = e.status;
    response.error = e;
    setDocumentError(response);
  }

  (0, _react.useEffect)(function () {
    if (loaded) {
      setDocumentResults(false);
      executeQuery();
    } else {
      setLoaded(true);
    }
  }, [limit, start, orderBy, controlledRefresh]);
  (0, _react.useEffect)(function () {
    if (controlledDocument) {
      if (start > 0) {
        setStart(0);
      } else {
        executeQuery();
      }
    }
  }, [controlledDocument]);
  return {
    documentError: documentError,
    updateDocument: updateDocument,
    changeOrder: changeOrder,
    changeLimits: changeLimits,
    controlledDocument: controlledDocument,
    limit: limit,
    start: start,
    loading: loading,
    rowCount: rowCount,
    onRefresh: onRefresh,
    documentResults: documentResults,
    setDocumentResults: setDocumentResults,
    setControlledRefresh: setControlledRefresh,
    controlledRefresh: controlledRefresh
  };
}