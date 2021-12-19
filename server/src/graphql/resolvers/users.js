const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { validateRegisterInput, validateLoginInput } = require('../../utils/validator');
const User = require('../../models/user');
const { SECRET_KEY } = require('../../config/config');

function generateToken(user) {
    return jwt.sign(
      {
        id: user.id,
        email: user.email,
        username: user.username
      },
      SECRET_KEY,
      { expiresIn: '1h' }
    );
  }

module.exports = {
    
    Query: {
        async getFriends(_, {
            userId
        }) {
               
            const friends = await User.findOne({_id: userId}).populate('friends').then(users => {
                return users.friends;
            })

            return friends;

        },

        async getUser(_, { userId }) {

            const user = await User.findById(userId);

            return user;

        }
    },

    Mutation: {
        async register(
            _, 
            { registerInput: { name, lastname, email, password, confirmPassword } }
            ) {
            
                const { errors, valid } = validateRegisterInput( email, password, confirmPassword );

                if( !valid ) {
                    throw new Error('Errors', { errors });
                }

                const user = await User.findOne({ email });

                if( user ) {
                    throw new Error('Email is taken', {
                        errors: {
                            email: 'This email is taken'
                        }
                    })
                }

                const newUser = new User({
                    name,
                    lastname,
                    email,
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
                });

                const res = await newUser.save();

                const token = generateToken(res);

                return {
                    ...res._doc,
                    id: res._id,
                    token
                }

        },

        async login(_, {
            email,
            password
        }) {

            const { errors, valid } = validateLoginInput( email, password );

            if ( !valid ) {
                throw new Error('Errors', { errors });
            }

            const user = await User.findOne({ email });

            if( !user ) {
                errors.general = 'User not found';
                throw new Error( 'User not found', { errors } );
            }

            const match = await bcrypt.compare( password, user.password );

            if( !match ) {
                errors.general = 'Wrong credentials';
                throw new Error('Wrong credentials', { errors });
            }

            const token = generateToken(user);

            return {
                ...user._doc,
                id: user._id,
                token
            };

        },

        async AddFriend(_, { userId, friend_id }) {

            const user = await User.findById(userId);

            if( !user ) {
                throw new Error('You are not allowed to do this D:<');
            }

            user.friends.unshift({
                _id: friend_id
            });

            await user.save();

            return friend_id;

        }

    }

}