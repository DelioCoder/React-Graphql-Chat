const { GraphQLServer, PubSub } = require('graphql-yoga');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config/config');

const pubsub = new PubSub();

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });

mongoose
    .connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
        return server.start(({ port }) => {
            console.log(`Server on http://localhost:${port}/`);
        });
    })
    .catch(err => {
        console.log(err);
    });