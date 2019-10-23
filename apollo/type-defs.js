import gql from 'graphql-tag'

export const typeDefs = gql`
  
  type Usuario {
    id: ID!
    nome_usuario: String!
  }

  type Query {
    usuarios: [Usuario]
  }

  type Mutation {
    mudarNome(id: ID!, nome: String!): Usuario
  }
`
