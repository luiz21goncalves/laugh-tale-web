import { createFileRoute } from '@tanstack/react-router'

function Home() {
  const message = 'Welcome'

  return (
    <div>
      <h1>{message}</h1>
    </div>
  )
}

export const Route = createFileRoute('/')({ component: Home })
