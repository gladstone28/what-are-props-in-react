import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
base: '/what-are-props-in-react/',
  plugins: [react()],
})
