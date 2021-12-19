const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name: { type: String, required: true, unique: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: true },
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
},{ 
    timestamps: true // Created date
});

module.exports = model('User', userSchema);