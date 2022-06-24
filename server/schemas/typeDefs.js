const { gql } = require('apollo-server-express');

const typeDefs = gql `

    type User {
        _id: ID
        firstName: String
        lastName: String
        email: String
    }

    type Registration {
        prefix: String
        firstName: String
        lastName: String
        email: String
        contact: Float
        address: String
        company: String
        walkShirt: Boolean
        shirt: Boolean
        size: String
        referral: String
    }

    type Query {
        users: [User]
        registered: [Registration]
    }

    type Mutation {
        addUser(firstName: String!, lastName: String!, email: String!, password: String!): User
        addRegistration(prefix: String, firstName: String!, lastName: String!, email: String!, contact: Float, company: String, walkShirt: Boolean, shirt: Boolean, size: String, address: String, referral: String): Registration
    }
`

module.exports = typeDefs;