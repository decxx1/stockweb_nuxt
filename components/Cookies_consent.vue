<script>
export default {
  methods: {
    loaddeclaracion() {
        const script = document.createElement('script');
        script.id = 'CookieDeclaration';
        script.src = 'https://consent.cookiebot.com/a311638b-17d3-4187-97b8-487877081745/cd.js';
        script.type = 'text/javascript';
        script.async = true;
        // Agrega el script al contenido del modal
        const modalContent = document.querySelector('.CookieDeclaration');
        modalContent.appendChild(script);
    }
  },
  mounted(){
    this.loaddeclaracion();
  }

};
</script>
<template>
    <div class="modal fade" id="modal-default">
	<div class="modal-dialog modal-xl">
	  <div class="modal-content">
		<div class="modal-header">
			<h4 class="modal-title">Declaración de cookies</h4>
			<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
		   <div class="CookieDeclaration"></div>
		</div>
		<div class="modal-footer justify-content-between">
		  <button type="button" class="btn btn-default w-100" data-dismiss="modal">Cerrar</button>
		</div>
	  </div>
	</div>
</div>
<div class="modal fade" id="modal-politicas">
	<div class="modal-dialog modal-lg">
	  <div class="modal-content">
		<div class="modal-header">
			<h4 class="modal-title">Información básica sobre Protección de datos</h4>
			<button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<p>De acuerdo con lo establecido por el Reglamento (UE) 2016/679 del Parlamento
			Europeo y del Consejo, y de la Ley 3/2018 de Protección de Datos Personales y
			Garantías de los Derechos Digitales, le informamos que los datos personales aportados
			serán tratados por EDUARDO DAMIAN CISTERNAS, con domicilio en Felix Suarez 562 - Villa Nueva - Guaymallén - Mendoza (Argentina)..</p>
			<p>Los datos aportados por usted son necesarios para atender su solicitud.</p>
			<p>La legitimación del Responsable del Tratamiento para realizar el tratamiento de sus
			datos es: Ejecución de un contrato: Gestión de potenciales clientes que se han interesado
			sobre nuestros productos y/o servicios. (RGPD, art. 6.1.b, LSSICE art.21). Interés
			legítimo del Responsable: Gestión de los datos de contacto profesionales (LOPDGDD
			art.19, RGPD art. 6.1.f).</p>
			<p>Sobre los destinatarios de los datos, no se cederán datos a terceros, salvo obligación
			legal.</p>
			<p>Tiene derecho a acceder, rectificar y suprimir los datos, así como otros derechos,
			indicados en la información adicional, que puede ejercer dirigiéndose a
			privacidad@stockweb.com.es</p>
			<p>Los datos proceden del propio interesado.</p>
			<p>Puede consultar información adicional y detallada sobre Protección de Datos aquí:<br/>
			<a target="_blank" href="./politica-privacidad">Política de privacidad</a></p>
		</div>
		<div class="modal-footer justify-content-between">
		  <button type="button" class="btn btn-default w-100" data-dismiss="modal">Cerrar</button>
		</div>
	  </div>
	</div>
</div>
</template>