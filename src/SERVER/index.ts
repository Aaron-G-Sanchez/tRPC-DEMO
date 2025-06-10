import cors from 'cors'
import { createHTTPServer } from '@trpc/server/adapters/standalone'
import { publicProcedure, router } from './trpc'

import { users } from './users.json'

const appRouter = router({
  userList: publicProcedure.query(async () => {
    console.log('userList procedure called.')
    const usersList = users

    return usersList
  })
})

export type AppRouter = typeof appRouter

const server = createHTTPServer({
  middleware: cors(),
  router: appRouter
})

server.listen(3001, () => {
  console.log('Listening on port 3001')
})
