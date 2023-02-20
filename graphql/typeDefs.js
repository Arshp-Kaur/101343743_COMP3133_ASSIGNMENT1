const { gql } = require('apollo-server');

const typeDefs = gql`
  type User {
    id: ID!
    username: String
    email: String
    password: String
  }

  type Employee {
    id: ID!
    first_name: String
    last_name: String
    email: String
    salary: Int
  }

  type Query {
    getUser(id: ID!): User!
    getUsers: [User!]!
    getEmployee(id: ID!): Employee!
    getEmployees: [Employee!]!
  }

  input UserInput {
    username: String!
    email: String!
    password: String!
  }

  input EmployeeInput {
    first_name: String!
    last_name: String!
    email: String!
    salary: Int!
  }

  type Mutation {
    createUser(userInput: UserInput!): User!
    updateUser(id: ID!, userInput: UserInput!): User!
    deleteUser(id: ID!): Boolean!
    createEmployee(employeeInput: EmployeeInput!): Employee!
    updateEmployee(id: ID!, employeeInput: EmployeeInput!): Employee!
    deleteEmployee(id: ID!): Boolean!
  }
`;

module.exports = typeDefs;
