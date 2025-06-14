import { createTRPCClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from '../SERVER/index'

// TODO: Move to a connection.ts file
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:3001'
    })
  ]
})

const main = async () => {
  const userList = await trpc.userList.query()

  console.log(userList)
}

main()
