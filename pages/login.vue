<template>
  <main>
    <div class="containerlogin" :class="{ 'sign-up-mode': signUpMode }">
      <div class="forms-container">
        <div class="signin-signup">
          <form id="entrar" method="post" class="sign-in-form">
            <h2 class="title">Iniciar sesión</h2>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" name="usuario" placeholder="Usuario" required>
            </div>
            <div class="input-field">
              <i class="fas fa-unlock-alt"></i>
              <input type="password" name="password" placeholder="Contraseña" required>
            </div>
			  <input type="hidden" name="l_recaptcha_response" value="" id="l_recaptchaResponse">
			  <button type="submit" name="login" @click.prevent="login()" class="boton solid">Entrar</button>
		  </form>
		  
          <form id="registro" method="post" class="sign-up-form" autocomplete="off">
            <h2 class="title">Registrarse</h2>
            <div class="input-field">
              <i class="fas fa-id-card"></i>
              <input name="nombre" type="text" placeholder="Nombre y Apellido" required>
            </div>
			<div class="input-field">
              <i class="fas fa-envelope"></i>
              <input name="email" type="email" placeholder="E-mail" required>
            </div>
            <div class="input-field">
              <i class="fas fa-user"></i>
              <input type="text" name="usuario" placeholder="Usuario" required>
            </div>
            <div class="input-field">
              <i class="fas fa-unlock-alt"></i>
              <input type="password" name="password" placeholder="Contraseña" required>
            </div>
			<div class="input-field">
              <i class="fas fa-unlock-alt"></i>
              <input type="password" name="passwordr" placeholder="Repetir Contraseña" required>
            </div>
			<input type="hidden" name="r_recaptcha_response" value="" id="r_recaptchaResponse">
			<label class="check">
				<input type="checkbox" name="politicas" required />
					<span class="checkmark">
						He leído y acepto la 
						<a class="link-politica" data-toggle="modal" data-target="#modal-politicas">cláusula en Protección de Datos</a>
						y 
						<a class="link-politica" target="_blank" href="./politica-privacidad">Políticas de Privacidad</a>
						para el tratamiento de mis datos sobre mi solicitud.
					</span>
			</label>
            <button type="submit" @click.prevent="register()" name="register" class="button">Registrar</button>
          </form>
        </div>
      </div>

      <div class="panels-container">
        <div class="panel left-panel">
          <div class="content">
            <h3>¿No tienes una cuenta?</h3>
            <p>Crea una nueva cuenta para poder utilizar el programa de gestión de inventario.<br/> Pruébalo GRATIS no requiere tarjeta.</p>
            <button class="boton transparent" id="sign-up-btn" @click="switchToSignUp">
              Registrarse
            </button>
          </div>

        </div>
        <div class="panel right-panel">
          <div class="content">
            <h3>¿Ya tienes una cuenta?</h3>
            <p>
				Si ya te has registrado previamente, inicia sesión con tus datos.
            </p>
            <button class="boton transparent" id="sign-in-btn" @click="switchToSignIn">
				Iniciar Sesión
            </button>
          </div>

        </div>
      </div>
	<footer id="footerlogin" :style="footerStyle">
		<span><a class="boton-enlace" data-toggle="modal" data-target="#modal-default">Declaración de cookies</a> - </span>
		<span><a href="./aviso-legal">Aviso Legal</a> - </span>
		<span><a href="./politica-privacidad">Política de Privacidad</a></span>
	</footer>
  <Cookies_consent/>
</div>
  </main>
</template>

<script setup>
import Cookies from "js-cookie";
definePageMeta({
    layout: "login",
});
useHead({
  title: 'Stock Web - Inicia sesión o registra tu cuenta',
  link: [
        { rel: 'canonical', href: 'https://stockweb.com.ar/login' },
        { rel: 'alternate', href: 'https://stockweb.com.ar/login', hreflang:"es-ar" },
        { rel: 'alternate', href: 'https://stockweb.com.es/login', hreflang:"es-es" }
    ],
  meta: [
    { name: 'generator', content: 'Nuxt' },
    { name: 'title', content: 'Stock Web - Inicia sesión o registra tu cuenta' },
    { name: 'description', content: 'Accede o crea tu cuenta en nuestro programa de gestión empresarial. ¡Pruébalo gratis durante 14 días! Simplifica la administración de tu negocio y aumenta la eficiencia. ¡Regístrate ahora y comienza a optimizar tu empresa!' },
    { 'http-equiv': 'Cache-Control', content: 'no-cache' },
    { 'http-equiv': 'Expires', content: 'Mon, 01 Jul 1970 00:00:00 GMT' },
    { name: 'robots', content: 'index, follow' },
    { name: 'googlebot', content: 'index, follow' },
    { property: 'og:title', content: 'Stock Web - Inicia sesión o registra tu cuenta' },
    { property: 'og:description', content: 'Accede o crea tu cuenta en nuestro programa de gestión empresarial. ¡Pruébalo gratis durante 14 días! Simplifica la administración de tu negocio y aumenta la eficiencia. ¡Regístrate ahora y comienza a optimizar tu empresa!' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://stockweb.com.ar/login' },
    { property: 'og:image', content: '/assets/img/sistema-stock.png' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@' },
    { name: 'twitter:title', content: 'Stock Web - Inicia sesión o registra tu cuenta' },
    { name: 'twitter:description', content: 'Accede o crea tu cuenta en nuestro programa de gestión empresarial. ¡Pruébalo gratis durante 14 días! Simplifica la administración de tu negocio y aumenta la eficiencia. ¡Regístrate ahora y comienza a optimizar tu empresa!' },
    { name: 'twitter:url', content: 'https://stockweb.com.ar/login' },
    { name: 'twitter:image', content: '/assets/img/sistema-stock.png' }
  ]
})

</script>

<script>

export default {
  data() {
    return {
      signUpMode: false,
      footerStyle: {bottom: "0"},
      api: useRuntimeConfig().public.API_PATH
    };
  },
  methods: {
    loadScript() {
      const script = document.createElement('script');
      script.src = 'https://www.google.com/recaptcha/api.js?render=6LeUaC0lAAAAACCITms44qBRANvTYaJ3yRFKB_yt';
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
    },
    cookiebot(){
      const externalScript = document.createElement('script')
      externalScript.setAttribute('src', 'https://consent.cookiebot.com/uc.js?cbid=a311638b-17d3-4187-97b8-487877081745')
      externalScript.async = true;
      document.head.appendChild(externalScript)
    },
    switchToSignUp() {
      this.signUpMode = true;
      this.footerStyle = {
        top: "15px"
      };
    },
    switchToSignIn() {
      this.signUpMode = false;
      this.footerStyle = {
        bottom: "0"
      };
    },
    login(){
		var self = this;
			grecaptcha.ready(function () {
				grecaptcha.execute('6LeUaC0lAAAAACCITms44qBRANvTYaJ3yRFKB_yt', { action: 'submit' }).then(function (token) {
					var recaptchaResponse = document.getElementById('l_recaptchaResponse');
					recaptchaResponse.value = token;
					var data = new FormData( $( '#entrar' )[ 0 ] );
					data.append('login', '1');
					$.ajax({
						url: self.api + 'ajax-login.php',
						processData: false,
						contentType: false,
						method: 'POST',
						data: data,
						dataType: 'JSON',
						success: function(response) {
							
							Cookies.set("jwt", response.jwt);           
							window.location.href = "/app/";
						},
						error: function(error) {
							if (error.responseJSON) {
								notie.alert({ type: error.responseJSON.icono, text: error.responseJSON.mensaje });
							}
						}
					});
				});
			});
    },
    register(){
			var button = 'button[name="register"]',
			spinner = '<span class="spinner"></span>';
			button.prop("disabled", true);
			button.toggleClass('loading');
			button.html(spinner);
			
			grecaptcha.ready(function () {
				grecaptcha.execute('6LeUaC0lAAAAACCITms44qBRANvTYaJ3yRFKB_yt', { action: 'submit' }).then(function (token) {
					var recaptchaResponse = document.getElementById('r_recaptchaResponse');
					recaptchaResponse.value = token;
					var data = new FormData( $( '#registro' )[ 0 ] );
					data.append('register', '1');
					$.ajax({
						url: '../api/ajax-login.php',
						processData: false,
						contentType: false,
						method: 'POST',
						data: data,
						dataType: 'JSON',
						success: function(response) {
							// Enviar evento personalizado a Google Tag Manager después de enviar el formulario
							if (typeof dataLayer !== 'undefined'){
								dataLayer.push({
									'event': 'Registro_completo',
									'formulario': 'registro_web'
								});
							}
							window.location.href = "./app";
						},
						error: function(error) {
							if (error.responseJSON) {
								notie.alert({ type: error.responseJSON.icono, text: error.responseJSON.mensaje });
							}
							button.prop("disabled", false);
							button.toggleClass('loading').html("Registrar");
						}
					});
				});
			});
    }
  },
  mounted() {
    // Obtener los parámetros "email" y "hash" de la URL actual
		var urlParams = new URLSearchParams(window.location.search);
		var email = urlParams.get('email');
		var hash = urlParams.get('hash');
		if (email !== null && hash !== null) {
			$.ajax({
				url: 'ajax-login.php',
				dataType: 'JSON',
				method: 'GET',
				data: { email: email, hash: hash },
				success: function(response) {
					notie.alert({ type: response.icono, text: response.mensaje });
					window.location.href = "./app?status=email_verificado";
				},
				error: function(error){
					console.log(error);
					notie.alert({ type: error.responseJSON.icono, text: error.responseJSON.mensaje });
				}
			});
		}
    this.loadScript();
    this.cookiebot();
  }
};
</script>

<style>

</style>