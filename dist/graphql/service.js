"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBookGlobalRealtime = exports.getBookGlobalHistory = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _moment = _interopRequireDefault(require("moment"));

var _models = require("../models");

var getBookGlobalHistory =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee(_ref2) {
    var book, from, to, author, type, query, histories;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            book = _ref2.book, from = _ref2.from, to = _ref2.to, author = _ref2.author, type = _ref2.type;
            query = {
              book: book,
              type: type,
              author: author,
              date: {
                $gte: from ? (0, _moment["default"])(from) : (0, _moment["default"])().startOf("day"),
                $lte: to ? (0, _moment["default"])(to) : (0, _moment["default"])().endOf("day")
              }
            };
            _context.next = 4;
            return _models.Global.find(query).sort({
              date: -1
            }).lean().exec();

          case 4:
            histories = _context.sent;
            return _context.abrupt("return", {
              book: book,
              histories: histories
            });

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getBookGlobalHistory(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.getBookGlobalHistory = getBookGlobalHistory;

var getBookGlobalRealtime =
/*#__PURE__*/
function () {
  var _ref3 = (0, _asyncToGenerator2["default"])(
  /*#__PURE__*/
  _regenerator["default"].mark(function _callee2(_ref4) {
    var books, listQuery, data, result;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            books = _ref4.books;
            listQuery = books.map(function (item) {
              return _models.Global.findOne({
                book: item
              }).sort({
                updateAt: -1
              });
            });
            _context2.next = 4;
            return Promise.all(listQuery);

          case 4:
            data = _context2.sent;
            result = data.filter(function (i) {
              return i;
            });
            return _context2.abrupt("return", {
              data: result
            });

          case 7:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getBookGlobalRealtime(_x2) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getBookGlobalRealtime = getBookGlobalRealtime;