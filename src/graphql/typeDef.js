import { gql } from "apollo-server";

// This is a (sample) collection of books we'll be able to query
// the GraphQL server for.  A more complete example might fetch
// from an existing data source like a REST API or database.
// Type definitions define the "shape" of your data and specify
// which ways the data can be fetched from the GraphQL server.
export default gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  # This "Global" type can be used in other type declarations.
  type BookHistory {
    book: String
    author: String
    name: String
    number: Float
    date: String
    type: String
    status: Boolean
  }

  type BookGlobalHistory {
    book: String
    histories: [BookHistory]
  }

  type GlobalRealtime {
    book: String
    author: String
    name: String
    number: Float
    date: String
    type: String
    status: Boolean
  }

  type BookGlobalRealtime {
    data: [GlobalRealtime]
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    bookGlobalHistory(
      """
      Book name
      """
      book: String!
      """
      From date default today

      daily: YYYY-MM-DD
      """
      from: String
      """
      To date default today

      daily: YYYY-MM-DD
      """
      to: String
      """
      Author of book
      """
      author: String
      """
      Boolean: true(default)
      """
      type: Boolean
    ): BookGlobalHistory
    bookGlobalRealtime(books: [String!]): BookGlobalRealtime
  }
`;
