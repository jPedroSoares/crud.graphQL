const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const Subscription = require('./resolvers/Subscription')

//Defining a constant with resolvers functions
const resolvers = {
    Query,
    Mutation,
    Subscription
}

//Setting up GraphQL server
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
        return {
            ...request,
            prisma,
        }  
    },
})

//Starting the GraphQL server
server.start(() => console.log(`Server is running on http://localhost:4000`))