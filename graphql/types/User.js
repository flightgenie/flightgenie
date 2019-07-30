const { GraphQLID, GraphQLString, GraphQLObjectType } = require('graphql');

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLID },
    username: { type: GraphQLString },
    password: { type: GraphQLString }
  }
});
