<template>
  <div>
    <!-- Navbar -->
    <nav
      class="main-header navbar navbar-expand navbar-white navbar-light bg-light"
    >
      <!-- Left navbar links -->
      <ul class="navbar-nav">
        <li class="nav-item">
          <a
            class="nav-link text-dark"
            data-widget="pushmenu"
            href="#"
            role="button"
            ><i class="fas fa-bars"></i
          ></a>
        </li>
        <!-- Usuarios Online -->
        <li class="nav-item dropdown">
          <a class="nav-link text-dark" data-toggle="dropdown" href="#">
            <i class="fas fa-globe"></i>
            <span class="badge badge-danger navbar-badge">{{
              usuarios_online.count
            }}</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-left">
            <a class="dropdown-item dropdown-footer">Usuarios conectados</a>
            <div class="dropdown-divider"></div>
            <template
              v-for="usuario in usuarios_online.usuarios"
              :key="usuario.id"
            >
              <a class="dropdown-item">
                <!-- Message Start -->
                <div class="media">
                  <img
                    :src="api + usuario.avatar"
                    class="mr-3 img-circle"
                    style="height: 2.1rem; width: 2.1rem"
                  />
                  <div class="media-body">
                    <h3 class="dropdown-item-title">
                      {{ usuario.nombre }}
                      <span
                        v-if="usuario.online"
                        class="float-right text-sm text-success mr-1"
                        ><i class="fas fa-circle"></i
                      ></span>
                      <span v-else class="float-right text-sm text-danger mr-1"
                        ><i class="fas fa-circle"></i
                      ></span>
                    </h3>
                    <p class="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> {{ usuario.tiempo }}
                    </p>
                  </div>
                </div>
                <!-- Message End -->
              </a>
              <div class="dropdown-divider"></div>
            </template>
          </div>
        </li>
        <!-- Tu historial -->
        <li class="nav-item dropdown">
          <a class="nav-link text-dark" data-toggle="dropdown" href="#">
            <i class="fas fa-history"></i>
          </a>
          <div
            id="hist"
            class="dropdown-menu dropdown-menu-lg"
          >
            <a class="dropdown-item dropdown-footer">Tu Historial</a>
            <div class="dropdown-divider"></div>
            <div style="overflow-y: auto; max-height: 600px">
              <template v-for="historial in historiales" :key="historial.id">
                <a class="dropdown-item">
                  <!-- Message Start -->
                  <div class="media">
                    <i
                      :class="`historial-icon ${historial.color} ${historial.icono}`"
                    ></i>
                    <div class="media-body">
                      <h3
                        class="dropdown-item-title text-uppercase mb-2"
                        style="font-size: 14px !important"
                      >
                        {{ historial.titulo }}
                      </h3>
                      <p class="text-sm mb-2" v-html="historial.mensaje"></p>
                      <p class="text-sm text-muted">
                        <i class="far fa-clock mr-1"></i> {{ historial.tiempo }}
                      </p>
                    </div>
                  </div>
                  <!-- Message End -->
                </a>
                <div class="dropdown-divider"></div>
              </template>
            </div>
            <a href="./historial" class="dropdown-item dropdown-footer"
              >Ver todo</a
            >
            <div class="dropdown-divider"></div>
          </div>
        </li>
        <!-- Dark Mode -->
        <li class="nav-item">
          <a class="nav-link text-dark" @click="modo()" role="button">
            <i class="oscuro far fa-sun" v-show="user.modo === 'dark'"></i>
            <i class="oscuro fas fa-moon" v-show="user.modo !== 'dark'"></i>
          </a>
        </li>
      </ul>
      <!-- Usuario -->
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span
              v-if="notificaciones.numero > 0"
              class="badge badge-danger navbar-badge"
              >{{ notificaciones.numero }}</span
            >
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-item dropdown-header">{{
              notificaciones.numero + " " + notificaciones.texto
            }}</span>
            <template v-if="!ajustes.nombre_empresa && cuenta.pago">
              <div class="dropdown-divider"></div>
              <a
                href="./ajustes"
                class="dropdown-item"
                style="white-space: inherit"
              >
                <i class="fas fa-exclamation-triangle mr-2 text-red"></i
                >Completa la información de tu empresa
                <p class="text-sm">
                  Ve a <span class="text-primary">Ajustes</span>
                </p>
              </a>
            </template>
            <template v-if="!user.email">
              <div class="dropdown-divider"></div>
              <a href="./usuarios" class="dropdown-item">
                <i class="fas fa-exclamation-triangle mr-2 text-red"></i>Ingresa
                tu e-mail
                <p class="text-sm">
                  Ve a <span class="text-primary">Usuarios</span> y edita tu
                  usuario
                </p>
              </a>
            </template>
            <template
              v-else-if="!user.verificado && user.rol === 'propietario'"
            >
              <div class="dropdown-divider"></div>
              <a href="./usuarios" class="dropdown-item">
                <i class="fas fa-exclamation-triangle mr-2 text-red"></i
                >Verifica tu e-mail
                <p class="text-sm">Revisa tu correo</p>
              </a>
            </template>
            <template v-if="tickets > 0">
              <div class="dropdown-divider"></div>
              <a href="./atencion-cliente" class="dropdown-item">
                <i class="fas fa-envelope mr-2"></i>1 mensaje nuevo
              </a>
            </template>
            <template v-if="!cuenta.pago">
              <div class="dropdown-divider"></div>
              <a href="./" class="dropdown-item">
                <i class="fas fa-exclamation-triangle mr-2 text-red"></i>Pago
                vencido<br />
                <i class="far fa-credit-card mr-2"></i>Ir a pagar
              </a>
            </template>
          </div>
        </li>
        <li class="nav-item dropdown user-menu">
          <a
            href="#"
            class="nav-link dropdown-toggle text-dark"
            data-toggle="dropdown"
          >
            <img
              :src="api + avatar"
              class="user-image img-circle elevation-2"
              alt="User Image"
            />
            <span class="d-none d-md-inline">{{ user.nombre }}</span>
          </a>
          <ul class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <!-- User image -->
            <li class="user-header bg-gradient-primary">
              <img
                :src="api + avatar"
                class="img-circle elevation-2"
                alt="User Image"
              />
              <p>
                {{ user.nombre + (user.titulo ? " - " + user.titulo : "") }}
                <small>{{ user.rol }}</small>
              </p>
            </li>
            <!-- Menu Body -->
            <li class="user-footer">
              <a href="./ajustes" class="btn btn-default btn-flat">Ajustes</a>
              <a @click="salir()" class="btn btn-default btn-flat float-right"
                >Cerrar Sesión</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-lightblue elevation-4">
    <!-- Brand Logo -->
    <a :href="cuenta.pago ? '/app/dashboard' : '/app/'" class="brand-link">
      <img src="/app/images/mini_logo-blanco.jpg" alt="sistema de stock" class="brand-image img-circle elevation-3" >
      <span class="brand-text font-weight-light">Stock Web</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user (optional) -->


      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
            <template v-if="user.rol === 'propietario' || user.rol === 'administrador'">
                <li class="nav-item">
                    <NuxtLink to="/app/" class="nav-link linkMenuLateral " :class="{ 'active': isPath('/app/') }" >
                        <i class="nav-icon fas fa-home"></i>
                        <p>Inicio</p>
                    </NuxtLink>
                </li>
            </template>
		  <li class="nav-item">
            <NuxtLink to="/app/dashboard" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/dashboard') }">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>Panel de control</p>
            </NuxtLink>
          </li>
			<template v-if="cuenta.pago">
		  <li class="nav-header">Gestión</li>
			
			<li class="nav-item">
				<NuxtLink href="/app/inventario" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/inventario') }">
				  <i class="nav-icon fas fa-boxes"></i>
				  <p>Inventario</p>
				</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink href="/app/clientes" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/clientes') }">
				  <i class="nav-icon fas fa-hospital-user"></i>
				  <p>Clientes</p>
				</NuxtLink>
			</li>
            <template v-if="user.rol === 'propietario' || user.rol === 'administrador' || user.rol === 'moderador'">
				<li class="nav-item">
					<NuxtLink href="/app/proveedores" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/proveedores') }">
					  <i class="nav-icon fas fa-truck-loading"></i>
					  <p>Proveedores</p>
					</NuxtLink>
				</li>
				<li class="nav-item">
					<NuxtLink href="/app/almacenes" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/almacenes') }">
					  <i class="nav-icon fas fa-warehouse"></i>
					  <p>Almacenes</p>
					</NuxtLink>
				</li>
			</template>
			<li class="nav-header">Comercio</li>
			<li class="nav-item">
				<NuxtLink href="/app/presupuestos" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/presupuestos') }">
				  <i class="nav-icon fas fa-file-invoice"></i>
				  <p>Presupuestos</p>
				</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink href="/app/ventas" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/ventas') }">
				  <i class="nav-icon fas fa-cash-register"></i>
				  <p>Ventas</p>
				</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink href="/app/pedidos" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/pedidos') }">
				  <i class="nav-icon fas fa-dolly"></i>
				  <p>Pedidos</p>
				</NuxtLink>
			</li>
			<li class="nav-item">
				<NuxtLink href="/app/ingresos-gastos" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/ingresos-gastos') }">
				  <i class="nav-icon fas fa-hand-holding-usd"></i>
				  <p>Ingresos y gastos</p>
				</NuxtLink>
			</li>
			<li class="nav-header">Correos</li>
			<li class="nav-item">
				<NuxtLink href="/app/enviar-correo" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/enviar-correo') }">
				  <i class="nav-icon fas fa-paper-plane"></i>
				  <p>Enviar</p>
				</NuxtLink>
			</li>
                <template v-if="user.rol === 'propietario' || user.rol === 'administrador' || user.rol === 'moderador'">
                    <li class="nav-header">Métricas</li>
                    <li class="nav-item">
                        <NuxtLink href="/app/estadisticas" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/estadisticas') }">
                            <i class="nav-icon far fa-chart-bar"></i>
                            <p>Estadísticas</p>
                        </NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink href="/app/historial" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/historial') }">
                        <i class="nav-icon fas fa-history"></i>
                        <p>Historial</p>
                        </NuxtLink>
                    </li>
				</template>
			</template>
		  <li class="nav-header">Configuración</li>
            <template v-if="user.rol === 'propietario' || user.rol === 'administrador'" >
				<li class="nav-item">
					<NuxtLink href="/app/ajustes" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/ajustes') }">
						<i class="nav-icon fas fa-cog"></i>
						<p>Ajustes</p>
					</NuxtLink>
				</li>
			</template>
			<li class="nav-item">
				<NuxtLink href="./usuarios" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/usuarios') }">
					<i class="nav-icon fas fa-users"></i>
					<p>Usuarios</p>
				</NuxtLink>
			</li>
		  <li class="nav-header">Cerrar Sesión</li>
		  <li class="nav-item">
            <a @click="salir()" class="nav-link linkMenuLateral">
              <i class="nav-icon fas fa-sign-out-alt"></i>
              <p>Salir</p>
            </a>
          </li>
		  <li class="nav-header">Mesa de ayuda</li>
		  <li class="nav-item">
            <NuxtLink href="/app/atencion-cliente" class="nav-link linkMenuLateral" :class="{ 'active': isPath('/app/atencion-cliente') }">
              <i class="nav-icon fas fa-headset text-warning"></i>
              <p>Atención al cliente</p>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>

<script setup>
  import Cookies from "js-cookie";
  import axios from "axios";
</script>

<script>
export default {

  props:{
    usuarios_online: {
      type: Object,
      required: true
    },
    historiales: {
      type: Object,
      required: true
    },
    cuenta: {
      type: Object,
      required: true
    },
    ajustes: {
      type: Object,
      required: true
    },
    notificaciones: {
      type: Object,
      required: true
    },
    tickets: {
      type: Number,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    user: {
      type: Object,
      required: true
    },
    api: {
      type: String,
      required: true
    },
    jwt: {
      type: String,
      required: true
    }
  },
  methods: {
    set_dark(){
      document.body.classList.add('dark-mode');
      var tables = document.getElementsByTagName('table');
      for (var i = 0; i < tables.length; i++) {
          tables[i].classList.add('table-dark');
      }
      sessionStorage.setItem("mode", "dark"); 
    },
    set_light(){
      document.body.classList.remove('dark-mode');
      var tables = document.getElementsByTagName('table');
      for (var i = 0; i < tables.length; i++) {
          tables[i].classList.remove('table-dark');
      }
      sessionStorage.setItem("mode", "light");
    },
    
    salir() {
      Cookies.remove('jwt');
      if(typeof window !== 'undefined'){
        window.location.href = "/login";
      }
    },
    modificar_modo(modo){
      var self = this;
      var activado = modo === 'dark' ? 'Modo Nocturno <b>Activado</b>' : 'Modo Nocturno <b>Desactivado</b>';
      axios.get(self.api + "dark.php", {
          params: {
            modo: modo,
          },
          headers: {
            'Authorization': `Bearer ${self.jwt}`
          }
        })
        .then(function () {
          notie.alert({ type: 'info', text: activado, time:9999 });
        })
        .catch(function (error) {
          console.error(error);
        });
    },
    modo() {
      if (sessionStorage.getItem("mode") === "dark") {
        this.set_light();
        this.user.modo = 'light';
        this.modificar_modo('light');
      } else {
        this.set_dark();
        this.user.modo = 'dark';
        this.modificar_modo('dark');
      }
    }
  },
  mounted(){
    if(this.user.modo === 'dark'){
      this.set_dark();
    }
  },
  computed:{
    isPath() {
      return (ruta) =>{
        return useRoute().fullPath === ruta;
      }
    }
  }
};
</script>
<style scope>
#hist {
  right: auto;
  left: -5rem;
}
</style>