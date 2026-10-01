import { createRouter as createTanStackRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen.ts'

declare module '@tanstack/react-router' {
  interface Register {
    router: ReturnType<typeof getRouter>
  }
}

export function getRouter() {
  const router = createTanStackRouter({
    defaultPreload: 'intent',
    defaultPreloadStaleTime: 0,
    routeTree,
    scrollRestoration: true,
  })

  return router
}
