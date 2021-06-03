import { GraphQLSchema } from 'graphql'
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from '@resolvers'
import { typeDefs } from '@typeDefs'

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers
})
