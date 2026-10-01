import { defineConfig } from 'lint-staged/config'

// biome-ignore lint/style/noDefaultExport: configuration file
export default defineConfig({
  '*.{ts,json}': 'bun run lint:fix',
})
