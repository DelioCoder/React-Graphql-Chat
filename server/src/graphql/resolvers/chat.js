const Chat = require('../../models/chat');
module.exports = {

    Query: {
        async getChats(_, { memberId }) {
           const chats = await Chat.find({ 'members.user_id': memberId });
           return chats;
        }
    },

}