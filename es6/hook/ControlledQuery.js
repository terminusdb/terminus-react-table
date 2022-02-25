"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControlledQueryHook = ControlledQueryHook;

var _react = _interopRequireWildcard(require("react"));

var _terminusdbClient = _interopRequireDefault(require("@terminusdb/terminusdb-client"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var WOQL = _terminusdbClient["default"].WOQL;

function ControlledQueryHook(woqlClient, query, results, queryLimit, queryStart, order, total) {
  var _useState = (0, _react.useState)(queryLimit || 0),
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

  var _useState7 = (0, _react.useState)(),
      _useState8 = _slicedToArray(_useState7, 2),
      rowCount = _useState8[0],
      setRowCount = _useState8[1];

  var _useState9 = (0, _react.useState)(results),
      _useState10 = _slicedToArray(_useState9, 2),
      result = _useState10[0],
      setResult = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      loading = _useState12[0],
      setLoading = _useState12[1];

  var _useState13 = (0, _react.useState)(query || false),
      _useState14 = _slicedToArray(_useState13, 2),
      woql = _useState14[0],
      setWOQL = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      loaded = _useState16[0],
      setLoaded = _useState16[1];

  var _useState17 = (0, _react.useState)(),
      _useState18 = _slicedToArray(_useState17, 2),
      commitMsg = _useState18[0],
      setCommitMsg = _useState18[1];

  var _useState19 = (0, _react.useState)(0),
      _useState20 = _slicedToArray(_useState19, 2),
      refresh = _useState20[0],
      setRefresh = _useState20[1];

  var docQuery = function docQuery(q) {
    if (q.containsUpdate()) return q;
    var wrapper = WOQL.query();
    if (limit) wrapper.limit(limit);
    if (start) wrapper.start(start);
    if (orderBy) wrapper.order_by.apply(wrapper, _toConsumableArray(orderBy));
    return wrapper.and(q);
  };

  var changeOrder = function changeOrder(ord) {
    if (JSON.stringify(orderBy) != JSON.stringify(ord)) {
      setOrderBy(ord);
      setStart(0);
    }
  };

  var onRefresh = function onRefresh() {
    setRefresh(refresh + 1);
  };
  /*
  * change the limit and the start-page
  */


  var changeLimits = function changeLimits(l, s) {
    var ll = parseInt(l) || 0;
    var ss = parseInt(s) || 0;

    if (ll != limit) {
      setLimit(ll);
    }

    if (ss != start) setStart(ss);
  };

  var updateQuery = function updateQuery(nwoql, commitMsg) {
    setWOQL(nwoql);
    setCommitMsg(commitMsg);
  };

  var executeQuery = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var tstart, q, response, countResult;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(woql && woqlClient.db())) {
                _context.next = 22;
                break;
              }

              setLoading(true);
              tstart = Date.now();
              q = docQuery(woql);
              _context.prev = 4;
              _context.next = 7;
              return woqlClient.query(q, commitMsg);

            case 7:
              response = _context.sent;

              if (woql.containsUpdate()) {
                _context.next = 13;
                break;
              }

              _context.next = 11;
              return executeCountQuery();

            case 11:
              countResult = _context.sent;
              setRowCount(countResult);

            case 13:
              processSuccessfulResult(response, tstart);
              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](4);
              processErrorResult(error, tstart);

            case 19:
              _context.prev = 19;
              setLoading(false);
              return _context.finish(19);

            case 22:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 16, 19, 22]]);
    }));

    return function executeQuery() {
      return _ref.apply(this, arguments);
    };
  }();

  var executeCountQuery = function executeCountQuery() {
    var q = WOQL.count("v:Count", woql);
    return woqlClient.query(q).then(function (cresult) {
      return cresult && cresult.bindings && cresult.bindings.length ? cresult.bindings[0]['Count']['@value'] : 0;
    });
  };

  function attachMetadata(metadata, stime) {
    metadata.start = stime;
    metadata.end = new Date();
    metadata.duration = metadata.end - stime;

    if (typeof metadata.bindings != "undefined") {
      metadata.rows = metadata.bindings ? metadata.bindings.length : 0;
      metadata.columns = metadata.bindings && metadata.bindings[0] ? metadata.bindings[0].length : 0;
    }
  }

  function processSuccessfulResult(response, stime) {
    if (response) {
      attachMetadata(response, stime);
      response.status = 200;
      setResult(response);
    }
  }
  /*
   * I have to review the error in interceptor
   */


  function processErrorResult(e, stime) {
    var response = {};
    attachMetadata(response, stime);
    response.status = e.status;
    response.error = e;
    setResult(response);
  }

  (0, _react.useEffect)(function () {
    if (loaded) {
      executeQuery();
    } else {
      setLoaded(true);
    }
  }, [limit, start, orderBy, refresh]); //run query is for query panel

  (0, _react.useEffect)(function () {
    if (woql) {
      if (start > 0) {
        setStart(0);
      } else {
        executeQuery();
      }
    }
  }, [woql]);
  return {
    updateQuery: updateQuery,
    changeOrder: changeOrder,
    changeLimits: changeLimits,
    woql: woql,
    result: result,
    limit: limit,
    start: start,
    loading: loading,
    rowCount: rowCount,
    onRefresh: onRefresh
  };
}