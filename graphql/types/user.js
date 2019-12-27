var {
  GraphQLID,
  GraphQLString,
  GraphQLNonNull,
  GraphQLObjectType
} = require('graphql')
// User Type
exports.userType = new GraphQLObjectType({
  name: 'user',
  fields: function () {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLID)
      },
      name: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      password: {
        type: GraphQLString
      }
    }
  }
});