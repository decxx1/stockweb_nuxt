<template>
    <div>
		<Header_web />
		<slot />
		<Footer_web />
    </div>
</template>
<script setup>

useHead({
    link:[
        {
            rel:"stylesheet",
            href:"/assets/css/style.css"
        },
        {
            rel:"stylesheet",
            href:"/app/css/adminlte.min.css"
        },
        {
            rel:"stylesheet",
            href:"/assets/vendor/aos/aos.css"
        }

    ],
    script:[
        { src:"assets/vendor/aos/aos.js"}
    ]
})
</script>
<script>
import "@fortawesome/fontawesome-free/css/all.min.css"
export default {
    async mounted() {
        AOS.init({
            duration: 500,
            once: true,
            mirror: false
        });
    }
}
</script>
<style>
@import 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:wght@400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap';
</style>

