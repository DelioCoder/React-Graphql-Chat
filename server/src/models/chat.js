const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    messages: [
        {
            _id: false,
            id: { type: Schema.Types.ObjectId },
            sender: { type: Schema.Types.ObjectId, required: true },
            content: { type: String }   
        }
    ],
    members: [
        {
            _id: false,
            user_id: { type: Schema.Types.ObjectId }
        }
    ]
});

module.exports = model('Chat', chatSchema);