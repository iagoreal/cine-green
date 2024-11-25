// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: ['@primevue/nuxt-module', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts:{
    families:{
      Montserrat: '200...900'
    }
  },
  vite: {
    server: {
      proxy: {
        '/api': {
          target: process.env.NUXT_API_BASE,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_API_BASE,
      apiSecret: process.env.NUXT_API_SECRET,
    },
  },
  primevue: {
    options: {
      theme: {
        preset: Aura,
        options: {
          darkModeSelector: 'system',
        },
      },
    },
    components: {
      prefix: 'Prime',
      include: ['Menubar', 'Button', 'Card'],
    },
  },
});