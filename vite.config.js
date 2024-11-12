import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/react-portfolio/', // Remplacez par le nom de votre dépôt
  plugins: [react()],
  css:{
    modules:{
      localsConvention: "camelCase",
    }
  }
})

