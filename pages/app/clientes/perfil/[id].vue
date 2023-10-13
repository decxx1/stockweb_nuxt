<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="fas fa-hospital-user  icon-gradient"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom:0;">Perfil de cliente</h4>
                                <div class="page-title-subheading">Gestiona y organiza a tus clientes de manera eficiente.</div>
                            </div>
                        </div>
                        <div class="page-title-actions">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item"><NuxtLink href="/app/clientes">Clientes</NuxtLink></li>
                                <li class="breadcrumb-item active">Perfil de cliente</li>
                            </ol>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-3">
  
              <!-- Profile Image -->
              <div class="card card-primary card-outline">
                <div class="card-body box-profile">
  
                  <h3 class="profile-username text-center">{{ cliente.nombre }}</h3>
                  
                    <p v-if="cliente.cuit" class="text-muted text-center">NIF: {{ cliente.cuit }}</p>
                  
                  
                  <p class="text-muted text-center" style="font-size: 13px;">{{ cliente.ciudad }}<br/>{{ cliente.provincia ? cliente.provincia + ' - ' + cliente.pais : cliente.pais }}</p>
                
                  <dl v-if="cliente.cargo" class="row">
                    <dt class="col-sm-4">Cargo:</dt>
                    <dd class="col-sm-8">{{ cliente.cargo }}</dd>
                  </dl>
                  <ul class="list-group list-group-unbordered mb-3">
                    <li class="list-group-item">
                      <b>Ventas</b> <a class="float-right">{{ conteo_ventas }}</a>
                    </li>
  
                    <li class="list-group-item">
                      <b>Total Gastado</b> <a class="float-right">€ {{ total_gastado }}</a>
                    </li>
                  </ul>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
  
              <!-- About Me Box -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Contacto</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                <template v-if="cliente.telefono" >
                  <strong><i class="fas fa-phone mr-1"></i> Teléfono</strong>
                  <p class="text-muted">{{ cliente.telefono }}</p>
                  <hr>
               </template>
               <template v-if="cliente.mail" >
                  <strong><i class="fas fa-envelope mr-1"></i> E-mail</strong>
                  <p class="text-muted">{{ cliente.mail }}</p>
                  <hr>
              </template>
              <template v-if="cliente.fax" >
                  <strong><i class="fas fa-fax mr-1"></i> Fax</strong>
                  <p class="text-muted">{{ cliente.fax }}</p>
                  <hr>
              </template>
              <template v-if="cliente.web" >
                  <strong><i class="fas fa-globe mr-1"></i> Sitio Web</strong>
                  <p class="text-muted">{{ cliente.web }}</p>
              </template>
              
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
              <div class="card card-primary">
                <div class="card-header">
                  <h3 class="card-title">Dirección</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <template v-if="cliente.direccion" >
                  <strong><i class="fas fa-map-marker-alt mr-1"></i> Dirección</strong>
                  <p class="text-muted">{{ cliente.direccion }}</p>
                  <hr>
              </template>
              <template v-if="cliente.ciudad" >
                  <strong><i class="fas fa-city mr-1"></i> Ciudad</strong>
                  <p class="text-muted">{{ cliente.ciudad }}</p>
                  <hr>
              </template>
              <template v-if="cliente.provincia" >
                  <strong><i class="fab fa-font-awesome-flag mr-1"></i> Provincia</strong>
                  <p class="text-muted">{{ cliente.provincia }}</p>
                  <hr>
              </template>
              <template v-if="cliente.codigopostal" >
                  <strong><i class="fas fa-mail-bulk mr-1"></i> Código postal</strong>
                  <p class="text-muted">{{ cliente.codigopostal }}</p>
                  <hr>
              </template>
              <template v-if="cliente.pais" >
                  <strong><i class="fas fa-flag mr-1"></i> País</strong>
                  <p class="text-muted">{{ cliente.pais }}</p>
              </template>
                </div>
                <!-- /.card-body -->
              </div>
            </div>
            <!-- /.col -->
            <div class="col-md-9">
              <div class="card">
                <div class="card-header p-2">
                  <ul class="nav nav-pills">
                      <li class="nav-item"><a class="nav-link active" href="#presupuestos" data-toggle="tab">Presupuestos</a></li>
                    <li class="nav-item"><a class="nav-link" href="#ventas" data-toggle="tab">Ventas</a></li>
                    <li class="nav-item"><a class="nav-link" href="#compras" data-toggle="tab">Compras</a></li>
                  </ul>
                </div><!-- /.card-header -->
                <div class="card-body">
                  <div class="tab-content">
                      <div class="active tab-pane" id="presupuestos">
                      <section class="content">
  
                        <!-- Default box -->
                        <div class="card">
                          
                          <div class="card-body p-0">
                            <table class="table table-responsive table-striped projects">
                                <thead>
                                    <tr>
                                        <th style="width: 20%">
                                            Presupuesto
                                        </th>
                                        <th style="width: 20%" class="text-center">
                                            Vendedor
                                        </th>
                                        <th style="width: 8%" class="text-center">
                                            Estado
                                        </th>
                                        <th style="width: 20%" class="text-center">
                                            Monto
                                        </th>
                                        <th style="width: 5%" class="text-center">
                                            Productos
                                        </th>
                                        <th style="width: 30%">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <template v-if="presupuestos">
                                  <template v-for="presupuesto in presupuestos" :key="presupuesto.id">
                                    <tr data-expanded='false'>
                                        <td>
                                            <a style="margin-left:5px;" :href="'/app/presupuestos/editor/'+presupuesto.id" ># {{ presupuesto.numero }}</a>
                                            <br/>
                                            <small>
                                                Creado {{ presupuesto.fecha }}
                                            </small>
                                        </td>
                                        <td class="text-center">
                                          {{ presupuesto.e_vendedor }}
                                        </td>
                                        <td class="project-state">
                                            <span class="badge" :class="presupuesto.color">{{ presupuesto.estado }}</span>
                                        </td>
                                        <td class="text-center">
                                            {{ presupuesto.p_gran_total }}
                                        </td>
                                        
                                        <td>
                                          <button type='button' class='btn btn-success' @click="expandir">+</button>
                                        </td>
                                        
                                        <td class="project-actions text-right">
                                            <a class="btn btn-primary btn-sm" :href="'/app/presupuestos/editor/' + presupuesto.id">
                                                <i class="fas fa-folder">
                                                </i>
                                                Ver
                                            </a>
                                            <a class="btn btn-info btn-sm" :href="'/app/presupuesto-print?id=' + presupuesto.id">
                                                <i class="far fa-file-pdf">
                                                </i>
                                                Crear PDF
                                            </a>
                                        </td>
                                    </tr>
                                    <tr class='subfila' style='display:none;position:absolute;background-color:white;box-shadow: 0px 0px 0px 2px cornflowerblue;'>
                        <td style='white-space: nowrap;'>
                            <template v-for="value in presupuesto.nombrep" :key="value.id">
                                <span v-html="value + '<br/>'"></span>
                            </template>
                        </td>
                        <td style='white-space: nowrap;'>
                            <template v-for="value in presupuesto.cantidadp" :key="value.id">
                                <span v-html="value + '<br/>'"></span>
                            </template>
                        </td>
                        <td style='white-space: nowrap;'>
                            <template v-for="value in presupuesto.preciop" :key="value.id">
                                <span v-html="'€ ' + value + '<br/>'"></span>
                            </template>
                        </td>
                                      </tr>
                                  </template>
                                  </template>
                                </tbody>
                            </table>
                          </div>
                          <!-- /.card-body -->
                        </div>
                        <!-- /.card -->
  
                      </section>
                    </div>
                    <div class="tab-pane" id="ventas">
                      <section class="content">
  
                        <!-- Default box -->
                        <div class="card">
                          
                          <div class="card-body p-0">
                            <table class="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style="width: 20%">
                                            Venta
                                        </th>
                                        <th style="width: 20%" class="text-center">
                                            Vendedor
                                        </th>
                                        <th style="width: 8%" class="text-center">
                                            Estado
                                        </th>
                                        <th style="width: 20%" class="text-center">
                                            Monto
                                        </th>
                                        <th style="width: 5%" class="text-center">
                                            Productos
                                        </th>
                                        <th style="width: 30%">
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                  <template v-if="ventas">
                                  <template v-for="venta in ventas" :key="venta.id">
                                    <tr>
                                        <td>
                                            <a style="margin-left:5px;" :href="'/app/ventas/editor/'+venta.id"># {{ venta.numero }}</a>
                                            <br/>
                                            <small>
                                                Creado {{ venta.fecha }}
                                            </small>
                                        </td>
                                        <td class="text-center">
                                          {{ venta.e_vendedor }}
                                        </td>
                                        <td class="project-state">
                                            <span class="badge" :class="venta.color">{{ venta.estado }}</span>
                                        </td>
                                        <td class="text-center">
                                            {{ venta.p_gran_total }}
                                        </td>
                                        <td>
                                          <button type='button' class='btn btn-success' @click="expandir">+</button>
                                        </td>
                                        <td class="project-actions text-right">
                                            <a class="btn btn-primary btn-sm" :href="'/app/ventas/editor/'+venta.id">
                                                <i class="fas fa-folder">
                                                </i>
                                                Ver
                                            </a>
                                            <a class="btn btn-info btn-sm" :href="'/app/ventas-print?id='+venta.id">
                                                <i class="far fa-file-pdf">
                                                </i>
                                                Recibo PDF
                                            </a>
                                        </td>
                                    </tr>
                                    <tr class='subfila' style='display:none;position:absolute;background-color:white;box-shadow: 0px 0px 0px 2px cornflowerblue;'>
                        <td style='white-space: nowrap;'>
                            <template v-for="value in venta.nombrep" :key="value.id">
                              <span v-html="value + '<br/>'"></span>
                            </template>
                        </td>
                        <td style='white-space: nowrap;'>
                            <template v-for="value in venta.cantidadp" :key="value.id">
                              <span v-html="value + '<br/>'"></span>
                            </template>
                        </td>
                        <td style='white-space: nowrap;'>
                            <template v-for="value in venta.preciop" :key="value.id">
                                <span v-html="'€ '+ value + '<br/>'"></span>
                            </template>
                        </td>
                                      </tr>
                                  </template>
                                  </template>
                                </tbody>
                            </table>
                          </div>
                          
                          <!-- /.card-body -->
                        </div>
                        <div class="callout callout-success">
                            <h5>Monto Total</h5>
                            <p>€ {{ total_gastado }}</p>
  
                          </div>
                        <!-- /.card -->
  
                      </section>
                      
                    </div>
  
  
                    <div class="tab-pane" id="compras">
                      <div class="card">
              
                <div class="card-body table-responsive p-0">
                  <table class="table table-striped table-valign-middle">
                    <thead>
                    <tr>
                      <th>Producto</th>
                      <th>Cantidad</th>
                    </tr>
                    </thead>
                    <tbody>
                      <template v-for="value in dataproducto" :key="value.id">
                          <tr>
                              <td>{{ value.nombre }}</td>
                              <td>{{ value.quantity }}</td>
                          </tr>
                       </template>
                    </tbody>
                  </table>
                </div>
              </div>
                    </div>
                    <!-- /.tab-pane -->
                  </div>
                  <!-- /.tab-content -->
                </div><!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          <!-- /.row -->
        </div><!-- /.container-fluid -->
    </section>
    </div>
  </template>

<script setup>
    
    definePageMeta({
        middleware: ['init', 'pago'],
    });
    
</script>

<script>
export default {
    data() {
        return {
            id_cliente: 0,
            cliente: {},
            conteo_ventas: 0,
            total_gastado: 0,
            presupuestos:{},
            ventas:{},
            dataproducto:{}
        };
    },
    methods: {
        expandir(event) {
          // Obtener el botón que disparó el evento
          const btn = event.target;
          // Obtener la fila a la que pertenece el botón
          const fila = btn.parentNode.parentNode;
          // Obtener el atributo data-expanded de la fila
          const expandido = fila.getAttribute("data-expanded");
          // Obtener la subfila siguiente a la fila
          const subfila = fila.nextElementSibling;
          // Si la fila está expandida, ocultar la subfila y cambiar el signo del botón
          if (expandido === "true") {
            subfila.style.display = "none";
            btn.textContent = "+";
            fila.setAttribute("data-expanded", "false");
          } else {
            // Si la fila está contraída, mostrar la subfila y cambiar el signo del botón
            subfila.style.display = "";
            btn.textContent = "-";
            fila.setAttribute("data-expanded", "true");
          }
        }
    },
    async created() {
        
      const api = useState('api').value;
      const jwt = useState('jwt').value;
      const route = useRoute();
      this.id_cliente = route.params.id;
      let data = {};
      if(!this.id_cliente){
          navigateTo('/app/clientes')
      }else{
          const response = await fetch(api + "ajax-clientes.php?get_perfil_cliente=" + this.id_cliente, {
              headers: {
                  'Authorization': `Bearer ${jwt}`
              }
          });
          data = await response.json();
          if(!data.status){
            navigateTo('/app/clientes');
          }
      }
      this.cliente = data.cliente;
      this.conteo_ventas = data.conteo_ventas;
      this.total_gastado = data.total_gastado;
      this.presupuestos = data.presupuestos;
      this.ventas = data.ventas;
      this.dataproducto = data.dataproducto;
    },
    mounted(){
        
    }

}
</script>
