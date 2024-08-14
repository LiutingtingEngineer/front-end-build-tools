import { defineConfig } from 'vite'

export default defineConfig({ 
    plugins: [
        {
            name: 'vite-plugin-logger',
            apply: 'build',
            enforce: 'pre',
            configResolved(config) {
                console.log(config)
            }
        }
    ]
})