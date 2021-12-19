module.exports = `

    type Chat {
        messages: [Message]
        recipients: [Recipient]
    }

    type Recipient {
        id: ID!
    }

    type Message {
        id: ID!
        user: String!
        content: String!
    }

    type User {
        id: ID!
        name: String!
        lastname: String!
        email: String!
        friends: [Friend]
        token: String!
    }

    type Friend {
        friend_id: ID!
    }

    input RegisterInput {
        name: String!
        lastname: String!
        email: String!
        password: String!
        confirmPassword: String!
    }

    type Query {
        messages: [Message!]
        getChats( memberId: ID! ): [Chat!]
        getFriends( userId: ID! ): [User!]
        getUser( userId: ID! ): User!
    }

    type Mutation {
        postMessage(user: String!, content: String!): ID
        register( registerInput: RegisterInput ): User!
        login( email: String!, password: String! ): User!
        AddFriend( userId: ID!, friend_id: ID! ): ID
    }

    type Subscription {
        messages: [Message!]
    }

`;