// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css', 'primeicons/primeicons.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@primevue/nuxt-module'],
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
