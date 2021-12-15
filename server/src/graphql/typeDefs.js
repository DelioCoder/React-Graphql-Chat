module.exports = `

    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type Query {
        messages: [Message!]
    }

`