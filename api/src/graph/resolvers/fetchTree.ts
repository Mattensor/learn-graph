import { buildTree } from '@fixtures'
import { QueryResolvers } from '@generated'

export const fetchTree: QueryResolvers['fetchTree'] = (_parent, _arguments, _context) => {
  return buildTree()
}
