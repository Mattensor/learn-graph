import { buildSardine } from '@fixtures'
import { MutationResolvers } from '@generated'

export const feedSardine: MutationResolvers['feedSardine'] = (_parent, { id }, _context) => {
  return buildSardine({ id, potency: 'very mature' })
}
