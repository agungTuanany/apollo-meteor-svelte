import { ApolloClient }  from "apollo-client"
import { HttpLink }      from "apollo-link-http"
import { InMemoryCache } from "apollo-cache-inmemory"

const httpLink = new HttpLink({
    uri: Meteor.absoluteUrl("graphql")
})

const cache = new InMemoryCache()

const apolloClient = new ApolloClient({
    link: httpLink,
    cache
})

export default apolloClient
