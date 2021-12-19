const messagesResolvers = require('./messages');
const chatsResolvers    = require('./chat');
const userResolvers     = require('./users'); 
module.exports = {

    Query: {
        ...messagesResolvers.Query,
        ...chatsResolvers.Query,
        ...userResolvers.Query,
    },

    Mutation: {
        ...messagesResolvers.Mutation,
        ...userResolvers.Mutation,
    },

    Subscription: {
        ...messagesResolvers.Subscription
    }

}