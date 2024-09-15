// This file is used to configure Vite.
// You can add configuration to this file to customize Vite such as adding plugins or configuring the development server.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
