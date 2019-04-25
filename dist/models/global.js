"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var GlobalSchema = new _mongoose["default"].Schema({
  book: String,
  author: String,
  name: String,
  number: Number,
  date: {
    type: Date,
    "default": Date.now
  },
  type: {
    type: String,
    "default": "daily"
  },
  status: {
    type: Boolean,
    "default": true
  }
}, {
  collection: "Global",
  versionKey: false,
  strict: false
});

var _default = _mongoose["default"].model("Global", GlobalSchema);

exports["default"] = _default;