"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServer = require("apollo-server");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  # Comments in GraphQL are defined with the hash (#) symbol.\n\n  # This \"Global\" type can be used in other type declarations.\n  type BookHistory {\n    book: String\n    author: String\n    name: String\n    number: Float\n    date: String\n    type: String\n    status: Boolean\n  }\n\n  type BookGlobalHistory {\n    book: String\n    histories: [BookHistory]\n  }\n\n  type GlobalRealtime {\n    book: String\n    author: String\n    name: String\n    number: Float\n    date: String\n    type: String\n    status: Boolean\n  }\n\n  type BookGlobalRealtime {\n    data: [GlobalRealtime]\n  }\n\n  # The \"Query\" type is the root of all GraphQL queries.\n  # (A \"Mutation\" type will be covered later on.)\n  type Query {\n    bookGlobalHistory(\n      \"\"\"\n      Book name\n      \"\"\"\n      book: String!\n      \"\"\"\n      From date default today\n\n      daily: YYYY-MM-DD\n      \"\"\"\n      from: String\n      \"\"\"\n      To date default today\n\n      daily: YYYY-MM-DD\n      \"\"\"\n      to: String\n      \"\"\"\n      Author of book\n      \"\"\"\n      author: String\n      \"\"\"\n      Boolean: true(default)\n      \"\"\"\n      type: Boolean\n    ): BookGlobalHistory\n    bookGlobalRealtime(books: [String!]): BookGlobalRealtime\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
var _default = (0, _apolloServer.gql)(_templateObject());

exports["default"] = _default;