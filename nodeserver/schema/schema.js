const graphql = require('graphql');
// const _ = require('lodash');
const axios = require('axios').default;

const { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema } = graphql;

const users = [
    { id: "24", firstName: "Mamba", age: 34},
    { id: "23", firstName: "Kimba", age: 34},
];

const CompanyType = new GraphQLObjectType({
    name: 'Company',
    fields: {
        name: { type: GraphQLString },
        id: { type: GraphQLString },
        description: { type: GraphQLString }
    }
});

const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString },
        firstName: { type: GraphQLString },
        age: { type: GraphQLInt },
        // company: {
        //     type: CompanyType,
        //     resolve(parentValue, args) {
        //         console.log(parentvalue, args);
        //     }
        // }
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLString } },
            resolve(parentValue, args) {
                // return _.find(users, { id: args.id })
                return axios.get(`http://jsonserver_container:3000/users/${args.id}`).then(resp => resp.data);
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});