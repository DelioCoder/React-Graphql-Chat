const messages = [];
const subscribers = [];
const onMessagesUpdates = ( fn ) => subscribers.push(fn);

module.exports = {

    Query: {
        messages() {
            return messages;
        }
    },
    
    Mutation: {
        postMessage(_, { user, content }) {
            const id = messages.length;
            messages.push({
                id,
                user,
                content
            });
            subscribers.forEach((fn) => fn());
            return id;
        }
    },

    Subscription: {
        messages: {
            subscribe: (parent, args, { pubsub }) => {
                const channel = Math.random().toString(36).slice(2, 15);
                onMessagesUpdates(() => pubsub.publish(channel, { messages }));
                setTimeout(() => pubsub.publish(channel, { messages }), 0);
                return pubsub.asyncIterator(channel);
            },
        }
    }

}