const messagesResolvers = require('./messages');

module.exports = {

    Query: {
        ...messagesResolvers.Query
    },

    Mutation: {
        ...messagesResolvers.Mutation
    },

    Subscription: {
        ...messagesResolvers.Subscription
    }

}