<template>
   
      <div class="wrapper">
            <Header 
                :ajustes="ajustes"
                :user="usuario"
                :cuenta="cuenta"
                :avatar="avatar"
                :notificaciones="notificaciones"
                :tickets="tickets"
                :historiales="historiales"
                :usuarios_online="usuarios_online"
                :jwt="jwt"
                :api="api"
            />
		      <slot />
        
          <Footer />
      </div>
    
    
</template>
<script setup>
  import "@fortawesome/fontawesome-free/css/all.min.css"

  import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js"
  const api = useState('api').value;
  const jwt = useState('jwt').value;
  import {
      get_avatar,
      get_ajustes,
      get_notificaciones,
      get_historial,
      get_usuarios_online
  } from "../lib/variables.js";
  
  const avatar = await get_avatar(api,jwt);
  const ajustes = await get_ajustes(api,jwt);
  const usuario = useState('usuario').value;
  const cuenta = useState('cuenta').value;
  const noti = await get_notificaciones(api,jwt);
  const historiales = await get_historial(api,jwt);
  const usuarios_online = await get_usuarios_online(api,jwt);
  const notificaciones = noti.notificaciones;
  const tickets = noti.tickets;

  useState('usuario', () => usuario);
  useState('cuenta', () => cuenta);
useHead({
    link:[
        {
            rel:"stylesheet",
            href:"/assets/vendor/notie/notie.min.css"
        },
        {
            rel:"stylesheet",
            href:"admin-lte/dist/css/adminlte.min.css"
        }
    ],
    script:[
        { src:"/assets/vendor/notie/notie.min.js" }
    ],
    bodyAttrs: {
        class: 'hold-transition sidebar-mini layout-fixed layout-navbar-fixed'
    }
})
</script>
<script>

export default {
    mounted() {
        
        if (sessionStorage.getItem("mode") === "dark") {
            document.body.classList.add('dark-mode');
            var tables = document.getElementsByTagName('table');
            for (var i = 0; i < tables.length; i++) {
                tables[i].classList.add('table-dark');
            }
        } else {
            document.body.classList.remove('dark-mode');
            var tables = document.getElementsByTagName('table');
            for (var i = 0; i < tables.length; i++) {
                tables[i].classList.remove('table-dark');
            }
        }
        
    }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script&family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&family=Raleway:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400;1,600;1,700&display=swap');
.mercadopago-button{
  width: 100% !important;
}
.notie-container{
	z-index:2000 !important;
}
[v-cloak] { 
	display: none; 
}
@media screen and (max-width: 450px) {
    li.paginate_button.previous {
        display: inline !important;
    }
 
    li.paginate_button.next {
        display: inline !important;
    }
 
    li.paginate_button {
        display: none !important;
    }
}
.profileimg {
	border-radius: 5px;
}
.profile-picture {
	overflow: hidden;
	-webkit-box-sizing: content-box;
  	-moz-box-sizing: content-box;
  	box-sizing: content-box;	
}
.big-profile-picture {
	width: 6rem;
	height: 6rem;
}
.profile-picture img {
	border: 3px solid #fff;
	height: 90px !important;
	width: 90px;
	border-radius: 50%;
}

/* Awesome Modal CSS */
.overlay2 {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  visibility: hidden;
  opacity: 0;
  z-index:999;
  overflow-y: scroll;
}
.overlay2:target {
  visibility: visible;
  opacity: 1;
}

.popup2 {
  margin: 70px auto auto auto;
  padding: 15px;
  background: #fff;
  border-radius: 5px;
  max-width: 800px;
  position: relative;
}
.dark-mode .popup2 {
  background: #343a40 !important;
}

.popup2 h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}
.popup2 .close {
  position: absolute;
  top: 20px;
  right: 30px;
  transition: all 200ms;
  font-size: 30px;
  font-weight: bold;
  text-decoration: none;
  color: #333;
}
.dark-mode .popup2 .close {
  color: #fff !important;
}
.popup2 .close:hover {
  color: #06D85F;
}
.popup2 .contento {
	margin-top:50px;
	overflow: auto;
}

@media screen and (max-width: 700px){

  .popup2{
    width: 70%;
  }
}
@media screen and (max-width: 1310px) and (min-width: 992px){

  .popup2 {
	margin: 70px auto auto 250px !important;
  }
}
@media screen and (max-width: 400px){

  .popup2{
    width: 90%;
  }
}

@media screen and (min-width:753px) {
	.editarperf{
		margin:-30px 0 0 -20px;
	}

}
@media screen and (max-width:752px) {
	.editarperf{
		margin:-30px 0 0 -20px;
	}
}

.color-blocke {
	color:#fff;
	background-color: #17a2b8;
	border-color: #fff;
}
.color-blocke:hover {
	color: #fff;
	filter: brightness(85%);
}


.btn-cat{
		color:#fff !important;
	}
	.btn-cat:hover,.btn-cat:active,.btn-cat:focus,.service-tag .nav .nav-item .active {
		background-color:#fff !important;
		color:black !important;
	}
.service-wrapper .service-footer {
  max-width: 720px;
}
.service-work.card {
  border-radius: 10px !important;
  cursor: pointer;
}
.service-work .service-work-vertical {
	background: rgb(0,0,0);
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 33.33%, rgba(255,255,255,1) 66.66%, rgba(255,255,255,0) 99.99%);
  background-size: 300% 300%;
  background-position: 0% 100%;
  transition: .5s;
}
.service-work .service-work-vertical:hover {
  background-position: 0% 0%;
  transition: .5s;
}
.service-work .service-work-vertical:hover * {
  color: #000;
  border-color: #000;
  transition: .5s;
}
.recent-work.card{
  border-radius: 10px !important;
}
.recent-work .recent-work-vertical {
	background: rgb(255,255,255);
  background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 33.333%, rgba(97,84,199,1) 66.666%, rgba(255,255,255,0) 99.999%);
  background-size: 300% 300%;
  background-position: 0% 100%;
  transition: .5s;
  cursor: pointer;
}
.recent-work .recent-work-vertical:hover {
  background-position: 0% 0%;
  transition: .5s;
}
.recent-work .recent-work-vertical:hover div.recent-work-content {
  top: 50%;
  margin-top: -2.5em;
  position: absolute;
}
.recent-work .recent-work-vertical:hover * {
  color: white;
  transition: .5s;
}

.toggle-btn {
  width: 80px;
  height: 40px;
  margin: 10px;
  border-radius: 50px;
  display: inline-block;
  position: relative;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAyklEQVQ4T42TaxHCQAyENw5wAhLACVUAUkABOCkSwEkdhNmbpHNckzv689L98toIAKjqGcAFwElEFr5ln6ruAMwA7iLyFBM/TPDuQSrxwf6fCKBoX2UMIYGYkg8BLOnVg2RiAEexGaQQq4w9e9klcxGLLAUwgDAcihlYAR1IvZA1sz/+AAaQjXhTQQVoe2Yo3E7UQiT2ijeQdojRtClOfVKvMVyVpU594kZK9zzySWTlcNqZY9tjCsUds00+A57z1e35xzlzJjee8xf0HYp+cOZQUQAAAABJRU5ErkJggg==") no-repeat 50px center #e74c3c;
  cursor: pointer;
  -webkit-transition: background-color 0.4s ease-in-out;
  -moz-transition: background-color 0.4s ease-in-out;
  -o-transition: background-color 0.4s ease-in-out;
  transition: background-color 0.4s ease-in-out;
  cursor: pointer;
}
.toggle-btn.active {
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAmUlEQVQ4T6WT0RWDMAhFeZs4ipu0mawZpaO4yevBc6hUIWLNd+4NeQDk5sE/PMkZwFvZywKSTxF5iUgH0C4JHGyF97IggFVSqyCFga0CvQSg70Mdwd8QSSr4sGBMcgavAgdvwQCtApvA2uKr1x7Pu++06ItrF5LXPB/CP4M0kKTwYRIDyRAOR9lJTuF0F0hOAJbKopVHOZN9ACS0UgowIx8ZAAAAAElFTkSuQmCC") no-repeat 10px center #2ecc71;
}
.toggle-btn.active .round-btn {
  left: 45px;
}
.toggle-btn .round-btn {
  width: 30px;
  height: 30px;
  background-color: #fff;
  border-radius: 50%;
  display: inline-block;
  position: absolute;
  left: 5px;
  top: 50%;
  margin-top: -15px;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
}
.toggle-btn .cb-value {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  z-index: 9;
  cursor: pointer;
}

.dark-mode div.dt-datetime{background-color:#343a40;border:1px solid #ccc;box-shadow:0 5px 15px -5px rgba(0, 0, 0, 0.5);}
.dark-mode div.dt-datetime table td.selectable{text-align:center;background:#454d55 !important}.dark-mode div.dt-datetime table td.selectable.disabled{color:#aaa;background:#333 !important}
.dark-mode div.dt-datetime table td{color: inherit !important}
.dark-mode div.dt-datetime table th{color:#999 !important;}

.dark-mode input{
	background-color: #343a40;
	color: #fff;
	border-color: #6c757d;
}
.dark-mode .profile-picture img {
  border: 3px solid #555 !important;
}
.dark-mode div.dt-button-collection{
	background-color:#343a40;
}

.dark-mode iframe.calendario {
   filter: invert(.9) saturate(0.5) hue-rotate(145deg);
}
.dark-mode div.wrapper nav.main-header.navbar.navbar-expand.navbar-white.navbar-light.bg-light ul.navbar-nav li.nav-item.dropdown a.nav-link,
.dark-mode div.wrapper nav.main-header.navbar.navbar-expand.navbar-white.navbar-light.bg-light ul.navbar-nav li.nav-item a.nav-link {
	color: #ced4da;
}
.bg-image-inner {
	background-repeat: no-repeat;
	background-position: left center;
	background-size: cover;
}
.historial-icon {
	border-radius: 50%;
	font-size: 14px;
	height: 25px;
	right: 8px;
	line-height: 25px;
	position: relative;
	text-align: center;
	top: 0;
	width: 25px;
}

@media (max-width: 767.98px) {
  .app-page-title .page-title-icon,
  .ui-theme-settings {
    display: none !important;
  }
}
@media (max-width: 575.98px) {
	  .app-page-title {
    padding: 0.75rem !important;
    margin: -0.75rem -0.75rem 0.75rem !important;
  }
  .app-page-title + .body-tabs-layout {
    margin-top: -0.75rem !important;
  }
}

@media (max-width: 767.98px) {
.app-page-title {
    text-align: center !important;
  }
  .app-page-title .page-title-heading,
  .app-page-title .page-title-wrapper {
    margin: 0 auto !important;
    display: block !important;
  }
  .app-page-title .page-title-actions {
    margin: 0.75rem auto 0 !important;
  }
  .app-page-title .page-title-actions .breadcrumb-item,
  .app-page-title .page-title-actions .breadcrumb,
  .app-page-title .page-title-subheading .breadcrumb-item,
  .app-page-title .page-title-subheading .breadcrumb {
    display: inline-block !important;
  }
}
.app-page-title {
  padding: 1.5rem;
  margin: -1.5rem -0.9rem 0rem;
  position: relative;
}
.app-page-title + .body-tabs-layout {
  margin-top: -1.5rem !important;
}
.app-page-title .page-title-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.app-page-title .page-title-heading,
.app-page-title .page-title-subheading {
  margin: 0;
  padding: 0;
}
.app-page-title .page-title-heading {
  font-size: 1.1rem;
  font-weight: 400;
  display: flex;
  align-content: center;
  align-items: center;
}
.app-page-title .page-title-subheading {
  padding: 3px 0 0;
  font-size: 0.88rem;
  opacity: 0.6;
}
.app-page-title .page-title-subheading .breadcrumb {
  padding: 0;
  margin: 3px 0 0;
  background: transparent;
}
.app-page-title .page-title-actions {
  margin-left: auto;
}
.app-page-title .page-title-actions .breadcrumb {
  margin: 0;
  padding: 0;
  background: transparent;
}
.app-page-title .page-title-icon {
  font-size: 2rem;
  display: flex;
  align-items: center;
  align-content: center;
  text-align: center;
  padding: 0.8333333333rem;
  margin: 0 1.5rem 0 0;
  background: #fff;
  box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, 0.03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, 0.03), 0 0.25rem 0.53125rem rgba(4, 9, 20, 0.05), 0 0.125rem 0.1875rem rgba(4, 9, 20, 0.03);
  border-radius: 0.25rem;
  width: 60px;
  height: 60px;
}
.app-page-title .page-title-icon i {
  margin: auto;
}
.app-page-title .page-title-icon.rounded-circle {
  margin: 0 1rem 0 0;
}
.app-page-title + .RRT__container {
  margin-top: -1.1538461538rem;
}
.app-page-title.app-page-title-simple {
  margin: 0;
  background: none !important;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
}
.app-page-title {
  background: rgba(255, 255, 255, 0.45);
}
.dark-mode .app-page-title {
  background: #424951;
}
.dark-mode .page-title-icon {
	background: #343a40;
}
.icon-gradient {
	color: #719dca !important;
}
.datetimepicker-input{
	background-color:white !important;
	cursor:pointer;
}
.daterage-input-css {
	background-color:white !important;
	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMWVtIiB2aWV3Qm94PSIwIDAgMzIwIDUxMiI+PHBhdGggZD0iTTQxIDI4OGgyMzhjMjEuNCAwIDMyLjEgMjUuOSAxNyA0MUwxNzcgNDQ4Yy05LjQgOS40LTI0LjYgOS40LTMzLjkgMEwyNCAzMjljLTE1LjEtMTUuMS00LjQtNDEgMTctNDF6bTI1NS0xMDVMMTc3IDY0Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwyNCAxODNjLTE1LjEgMTUuMS00LjQgNDEgMTcgNDFoMjM4YzIxLjQgMCAzMi4xLTI1LjkgMTctNDF6Ii8+PC9zdmc+);
	background-repeat: no-repeat;
	background-position: right calc(.375em + .1875rem) center;
	background-size: .45rem;
}
.dark-mode .daterage-input-css {
	background-color: #343a40!important;
}
</style>