import { Resolvers } from '@generated'
import { getSardine } from './getSardine'
import { feedSardine } from './feedSardine'
import { sardines } from './sardines'

export const resolvers: Resolvers = {
  Query: {
    getSardine,
    sardines
  },
  Mutation: {
    feedSardine
  }
}
