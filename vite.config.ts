import { devtools } from '@tanstack/devtools-vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { nitro } from 'nitro/vite'
import { defineConfig } from 'vite'

const config = defineConfig({
  plugins: [devtools(), nitro({ preset: 'bun' }), tanstackStart(), viteReact()],
  resolve: { tsconfigPaths: true },
})

// biome-ignore lint/style/noDefaultExport: configuration file
export default config
