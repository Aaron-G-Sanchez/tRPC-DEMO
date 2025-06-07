import { initTRPC } from '@trpc/server'

// Initialization of tRPC backend.
// Done once per backend.
const t = initTRPC.create()

export const router = t.router
export const publicProcedure = t.procedure
