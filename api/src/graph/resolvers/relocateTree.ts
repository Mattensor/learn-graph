import { buildTree } from '@fixtures'
import { MutationResolvers } from '@generated'

export const relocateTree: MutationResolvers['relocateTree'] = (_parent, _arguments, _context) => {
  return buildTree()
}
