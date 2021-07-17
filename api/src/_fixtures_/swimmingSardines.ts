import { buildSardine } from '@fixtures'

const jerry = buildSardine({ id: '1', name: 'Jerry' })
const sandy = buildSardine({ id: '2', name: 'Sandy', age: '28', potency: 'incredibly mild' })

export const swimmingSardines = [jerry, sandy]
