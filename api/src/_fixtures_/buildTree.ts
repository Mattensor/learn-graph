import { Tree } from '../graph'

export const buildTree = (input?: Partial<Tree>): Tree => ({
  size: '10ft',
  leaves: 'all the leaves',
  location: 'backyard, next to the bbq',
  ...input
})
