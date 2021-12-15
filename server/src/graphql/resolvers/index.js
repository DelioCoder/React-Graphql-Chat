const messagesResolvers = require('./messages');

module.exports = {

    Query: {
        ...messagesResolvers.Query
    }

}