const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
    }
    type Book {
        bookId: ID
        title: String
        authors: [String]
        description: String
        image: Sting
        link: String
    }
    type BookData {
        bookId: ID
        title: String
        authors: [String]
        description: String
        image: Sting
        link: String
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookData): User
        removeBook(bookId: ID!): User
    }
`

module.exports = typeDefs;