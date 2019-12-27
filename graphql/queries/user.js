var {
  GraphQLList,
  GraphQLObjectType,
  GraphQLID
} = require('graphql')

var UserModel = require('../../models/user');
var userType = require('../types/user').userType;

// Query
exports.queryType = new GraphQLObjectType({
  name: 'Query',
  fields: function () {
    return {
      users: {
        type: new GraphQLList(userType),
        resolve: function () {
          const users = UserModel.find().exec()
          if (!users) {
            throw new Error('Error')
          }
          return users
        }
      },
      user: {
        type: userType,
        args: {
          id: {
            type: GraphQLID
          }
        },
        resolve(parent, args) {
          return UserModel.findById(args.id);
        }
      },
    }
  }
});