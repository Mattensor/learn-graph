import express from 'express'
import cors from 'cors'
import { ApolloServer } from 'apollo-server-express'
import { schema } from '@schema'

const PORT = 4000

const app = express()
const appCors = cors()

app.use(appCors)
app.options('*', appCors)

const server = new ApolloServer({
  schema
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen(PORT, () => {
  console.log(`\n🚀      GraphQL is now running on http://localhost:${PORT}/graphql`)
})
