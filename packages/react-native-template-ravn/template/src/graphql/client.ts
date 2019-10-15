import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graphcms.com/simple/v1/swapi',
  }),
  cache: new InMemoryCache(),
})

export default client
