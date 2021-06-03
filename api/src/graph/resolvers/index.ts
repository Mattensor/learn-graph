import { Resolvers } from '@generated'
import { fetchTree } from './fetchTree'
import { relocateTree } from './relocateTree'

export const resolvers: Resolvers = {
  Query: {
    fetchTree
  },
  Mutation: {
    relocateTree
  }
}
