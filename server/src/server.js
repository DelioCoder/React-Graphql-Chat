const { GraphQLServer } = require('graphql-yoga');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(({ port }) => {
    console.log(`Server on http://localhost:${port}/`);
});