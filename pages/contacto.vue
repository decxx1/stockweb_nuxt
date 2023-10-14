
<template>
    <main id="main">

<!-- ======= Breadcrumbs Section ======= -->
<section class="breadcrumbs">
  <div class="container">

    <div class="d-flex justify-content-between align-items-center">
      <h2>Contacto</h2>
      <ol>
        <li><a href="./">Inicio</a></li>
        <li>Contacto</li>
      </ol>
    </div>

  </div>
</section><!-- End Breadcrumbs Section -->

<section class="inner-page">
  <div class="container">
    <!-- ======= Contact Section ======= -->
<section id="contact" class="contact">
  <div class="container">

    <div class="section-title" data-aos="fade-up">
      <h1>Contáctanos</h1>
      <p>Envíanos un mensaje</p>
    </div>

    <div class="row">

      <div class="col-lg-4" data-aos="fade-right" data-aos-delay="100">
        <div class="info">

          <div class="email">
            <i class="fas fa-envelope"></i>
            <h4>E-mail:</h4>
            <p><a href="mailto:info@stockweb.com.es">info@stockweb.com.es</a></p>
          </div>

        </div>

      </div>

      <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left" data-aos-delay="200">

        <form id="newsletterForm" method="post" role="form" class="php-email-form">
            <div class="row">
                <div class="col-md-12 form-group mt-3">
                    <input type="text" name="nombre" class="form-control" placeholder="Tu nombre" required>
                </div>
                <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="telefono" placeholder="Tu teléfono" required>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" class="form-control" name="email" placeholder="Tu E-mail (opcional)">
                </div>
                <div class="col-md-12 form-group mt-3">
                  <textarea class="form-control" name="mensaje" rows="5" placeholder="Tu mensaje" required></textarea>
                </div>
            </div>        
            <input type="hidden" name="recaptcha_response" value="" id="recaptchaResponse">
            <label class="check">
                <input type="checkbox" name="politicas" style="height: inherit !important" required />
                    <span class="checkmark">
                        He leído y acepto la 
                        <a class="link-politica" data-toggle="modal" data-target="#modal-politicas">cláusula en Protección de Datos</a>
                        y 
                        <a class="link-politica" target="_blank" href="./politica-privacidad">Políticas de Privacidad</a>
                        para el tratamiento de mis datos sobre mi solicitud.
                    </span>
            </label>
            <div class="text-center"><button type="submit" id="load1" >Enviar mensaje</button></div>
        </form>
      </div>

    </div>

  </div>
</section><!-- End Contact Section -->
  </div>
</section>

</main><!-- End #main -->
</template>

<script setup>
definePageMeta({
    layout: "web",
});
useHead({

    script: [
        {src: "https://www.google.com/recaptcha/api.js?render=6LeUaC0lAAAAACCITms44qBRANvTYaJ3yRFKB_yt"}
    ],
  title: 'Stock Web - Contacta con nuestro equipo',
  link: [
        { rel: 'canonical', href: 'https://stockweb.com.ar/contacto' },
        { rel: 'alternate', href: 'https://stockweb.com.ar/contacto', hreflang:"es-ar" },
        { rel: 'alternate', href: 'https://stockweb.com.es/contacto', hreflang:"es-es" }
    ],
  meta: [
    { name: 'generator', content: 'Nuxt' },
    { name: 'title', content: 'Stock Web - Contacta con nuestro equipo' },
    { name: 'description', content: '¿Necesitas ayuda con nuestro programa de gestión empresarial? Ponte en contacto con nuestro equipo de soporte técnico y te ayudaremos a resolver cualquier duda o problema. Además, también puedes contactarnos para solicitar información adicional o para conocer más sobre nuestros servicios. ¡Impulsa el crecimiento de tu negocio con nuestro programa de gestión empresarial!' },
    { 'http-equiv': 'Cache-Control', content: 'no-cache' },
    { 'http-equiv': 'Expires', content: 'Mon, 01 Jul 1970 00:00:00 GMT' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { property: 'og:title', content: 'Stock Web - Contacta con nuestro equipo' },
    { property: 'og:description', content: '¿Necesitas ayuda con nuestro programa de gestión empresarial? Ponte en contacto con nuestro equipo de soporte técnico y te ayudaremos a resolver cualquier duda o problema. Además, también puedes contactarnos para solicitar información adicional o para conocer más sobre nuestros servicios. ¡Impulsa el crecimiento de tu negocio con nuestro programa de gestión empresarial!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://stockweb.com.ar/contacto' },
    { property: 'og:image', content: 'assets/img/logo.png' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@' },
    { name: 'twitter:title', content: 'Stock Web - Contacta con nuestro equipo' },
    { name: 'twitter:description', content: '¿Necesitas ayuda con nuestro programa de gestión empresarial? Ponte en contacto con nuestro equipo de soporte técnico y te ayudaremos a resolver cualquier duda o problema. Además, también puedes contactarnos para solicitar información adicional o para conocer más sobre nuestros servicios. ¡Impulsa el crecimiento de tu negocio con nuestro programa de gestión empresarial!' },
    { name: 'twitter:url', content: 'https://stockweb.com.ar/contacto' },
    { name: 'twitter:image', content: 'assets/img/logo.png' }
  ]
})
import $ from 'jquery';
import notie from 'notie';
</script>

<script>


export default {
    async mounted() {
      window.jQuery = window.$ = $;
        $('#newsletterForm').submit(function(event) {
        event.preventDefault(); //Prevent the default form submission
        $('#load1').prop('disabled', true);
            grecaptcha.ready(function () {
            grecaptcha.execute('6LeUaC0lAAAAACCITms44qBRANvTYaJ3yRFKB_yt', { action: 'submit' }).then(function (token) {
                var recaptchaResponse = document.getElementById('recaptchaResponse');
                recaptchaResponse.value = token;
                // Making the simple AJAX call to capture the data and submit
                var data = new FormData( $( '#newsletterForm' )[ 0 ] );
                $.ajax({
                        url: 'http://localhost/api/ajax.php',
                        processData: false,
                        contentType: false,
                        type: 'POST',
                        data: data,
                        dataType: 'JSON',
                        success: function(){
                            notie.alert({ type: 'success', text: 'Tu mensaje fue enviado correctamente! Gracias por contactarnos.' });
                            $("#newsletterForm")[0].reset();
                            $('#load1').prop('disabled', false);
                        },
                        error: function(error){
                            notie.alert({ type: 'error', text: 'Hubo un error al enviar el mensaje, intentelo de nuevo más tarde' });
                            $('#load1').prop('disabled', false);
                            console.error(error);
                        }
                    });
                });
            });
        });
    }
}
   
</script>

<style scope>
@import 'notie/dist/notie.min.css';
.check {
  display: block;
  position: relative;
  margin: 12px 0;
  cursor: pointer;
  font-size: 0.9rem;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.checkmark {
  color: #333;
}

.checkmark a {
  color: #4d84e2;
  text-decoration: underline;
}

.checkmark a:hover {
  color: #333;
}
.notie-container{
    z-index:2000;
}
.bg-gradient-success{
    background-color: #28a745;
}
.bg-gradient-warning{
    background-color: #ffc107;
}
.bg-gradient-danger{
    background-color: #dc3545;
}
.bg-gradient-info{
    background-color: #17a2b8;
}
.bg-gradient-default{
    background-color: #f8f9fa;
}
label:not(.form-check-label):not(.custom-file-label) {
  font-weight: 400;
}
</style>