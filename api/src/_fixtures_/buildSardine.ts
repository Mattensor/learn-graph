import { Sardine } from '../graph'

export const buildSardine = (input?: Partial<Sardine>): Sardine => ({
  id: '1',
  name: 'Jerry',
  potency: 'Real',
  age: '22',
  source: 'Ocean',
  ...input
})
