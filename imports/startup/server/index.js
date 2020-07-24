import { createApolloServer } from "meteor/apollo"
import { makeExecutableSchema } from "graphql-tools"

// GrahpQL Schema
const typeDefs = `
    type Query {
        hello: String
    }
`;

// Actual Method for server-side
const resolvers = {
    // Media method wrapper
    Query: {
        hello() {
            return "Hello Level Up"
        }
    }
}

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

createApolloServer({ schema })
