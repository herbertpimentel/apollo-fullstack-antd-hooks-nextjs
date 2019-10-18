import { ApolloServer } from 'apollo-server-micro'
import { typeDefs } from '../../apollo/type-defs'
import { resolvers } from '../../apollo/resolvers'

// formatError, formatResponse: 
// https://www.apollographql.com/docs/apollo-server/api/apollo-server/
const apolloServer = new ApolloServer({ 
  typeDefs, 
  resolvers,
  formatResponse: () => {
    console.log("executed in call bakc");
  },
  context: (req) => {
    return ({
      request : req,
      meuOvo: true,
    })
  }
  })

export const config = {
  api: {
    bodyParser: false
  }
}

export default apolloServer.createHandler({ path: '/api/graphql' })
