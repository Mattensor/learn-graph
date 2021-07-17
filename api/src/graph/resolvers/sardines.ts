import { swimmingSardines } from '@fixtures'
import { QueryResolvers } from '@generated'

export const sardines: QueryResolvers['sardines'] = (_parent, _arguments, _context) => {
  return swimmingSardines
}
