import { buildSardine, swimmingSardines } from '@fixtures'
import { QueryResolvers } from '@generated'

export const getSardine: QueryResolvers['getSardine'] = (_parent, { id }, _context) => {
  const meetSardine = swimmingSardines.find((sardine) => sardine.id === id)
  return meetSardine || buildSardine({ id: '3', name: 'Puck', potency: 'mild' })
}
