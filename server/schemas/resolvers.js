// const { AuthenticationError } = require('apollo-server-express');;
const { User, Registration } = require('../models');

const resolvers = {
    Query: {
        users: async() => {
            return await User.find()
        },
        registered: async() => {
            return await Registration.find()
        }
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            
            return user;
        },
        addRegistration: async (parent, args) => {
            const registration = await Registration.create(args);

            return registration
        }
    }
}

module.exports = resolvers;