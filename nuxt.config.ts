// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  routeRules: {
    "/": { static:true },
    "/contacto": { static:true },
    "/login": { static:true },
    "/app/**": {ssr: false}
  },
  runtimeConfig: {
    public: {
      API_PATH: process.env.PUBLIC_API_PATH,
      API_BASE_URL: process.env.PUBLIC_API_BASE_URL,
      API_BASE_URL_APP: process.env.PUBLIC_API_BASE_URL_APP,
      BASE_URL: process.env.PUBLIC_BASE_URL
 
    },
  }
})
