import bootstrap from 'admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js'

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('bootstrap', bootstrap)
})