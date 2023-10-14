<template>
    <div>
		<slot />
    </div>
</template>
<script setup>
import "@fortawesome/fontawesome-free/css/all.min.css"
useHead({
    link:[
        {
            rel:"stylesheet",
            href:"/assets/css/login.css"
        },
        {
            rel:"stylesheet",
            href:"/app/css/adminlte.min.css"
        },
        {
            rel:"stylesheet",
            href:"/assets/vendor/notie/notie.min.css"

        }
    ],
    script:[
        { src:"/assets/vendor/notie/notie.min.js" }
    ]
})
</script>
<script>
export default {
    async mounted() {
    }
}
</script>
<style>
@import "https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700;800&display=swap";
</style>

