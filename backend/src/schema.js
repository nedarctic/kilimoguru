const gql = require('graphql-tag');

const typeDefs = gql`
type Device {
id: String!
name: String!
gateway_id: String!
date_modified: String!
date_created: String!
}

type Query {
device(id: ID!): Device!
}
`;

module.exports = typeDefs;
