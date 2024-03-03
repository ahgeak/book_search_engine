const { User } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    // users: async () => {
    //   return User.find();
    // },

    // user: async (parent, { userId }) => {
    //   return User.findOne({ _id: userId });
    // },

    // Returns a User type 
    me: async (parent, args, context) => {
        if (context.user) {
          return User.findOne({ _id: context.user._id });
        }
        throw AuthenticationError;
      },
  },

  Mutation: {
    // get a single user by either their id or their username
    // getSingleUser: async (parent, { id, User }) => {
    //     const foundUser = await User.findOne({ id });

    //     if (!foundUser) {
    //         throw AuthenticationError;
    //     }

    //     return { foundUser };
    // },

    // TODO: Determine which mutations are required, not all will be needed from user-controller.js
  }
};


module.exports = resolvers;
