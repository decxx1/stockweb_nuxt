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
                                <h4 style="margin-bottom:0;">Clientes</h4>
                                <div class="page-title-subheading">Gestiona y organiza a tus clientes de manera eficiente.</div>
                            </div>
                        </div>
                        <div class="page-title-actions">
                            <ol class="breadcrumb float-sm-right">
                                <li class="breadcrumb-item active">Clientes</li>
                            </ol>
                        </div>    
                    </div>
                </div>
            </div>
        </section>
    <section class="content">
      <div id="app" class="container-fluid">
          <div class="row" >
              <div class="col-12">
                  <div class="card card-primary">
                      <div class="card-body">
                          <button type="button" class="btn btn-primary" @click="openwebform(0)" ><i class="fas fa-plus mr-2"></i>Agregar Cliente</button>
                      </div>
                  </div>
              </div>
          </div>
                  
          <div class="row" style="margin-top:20px;">
            <div class="col-12">
  
              <div class="card card-primary card-outline">
                <div class="card-header">
                  <h3 class="card-title">Lista de clientes</h3>
                </div>
                <!-- /.card-header -->
                <div class="card-body">
                  <table id="example1" class="table table-bordered table-striped">
                  </table>
                </div>
                <!-- /.card-body -->
              </div>
              <!-- /.card -->
            </div>
            <!-- /.col -->
          </div>
          
          <div class="modal fade" id="modalwebform" >
              <div class="modal-dialog modal-lg" >
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title" >{{ id_actual ? "Editar cliente" : "Crear cliente" }}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form method="post" id="creareditar" enctype="multipart/form-data">
                      <input type="hidden" name="webform" v-model="id_actual" />
                      <div class="modal-body" >
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="card card-primary">
                                      <div class="card-header">
                                          <h3 class="card-title">Información Importante</h3>
                                      </div>
                                      <div class="card-body">
                                          <div class="form-group">
                                              <label for="Nombre">Nombre *</label>
                                              <input type="text" name="nombre" class="form-control" :value="cliente_actual.nombre" required>
                                          </div>
                      
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="card card-primary">
                                      <div class="card-header">
                                          <h3 class="card-title">Información Fiscal</h3>
                                      </div>
                                      <div class="card-body">
                                          <div class="form-group">
                                              <label for="NIF">NIF</label>
                                              <input type="text" name="cuit" class="form-control" :value="cliente_actual.cuit">
                                          </div>
                                          <div class="form-group">
                                              <label for="Cargo">Cargo</label>
                                              <input type="text" name="cargo" class="form-control" :value="cliente_actual.cargo">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="card card-primary">
                                      <div class="card-header">
                                          <h3 class="card-title">Información de contacto</h3>
                                      </div>
                                      <div class="card-body">
                                          <div class="form-group">
                                              <label for="Teléfono">Teléfono</label>
                                              <input type="text" name="telefono" class="form-control" :value="cliente_actual.telefono">
                                          </div>
                                          <div class="form-group">
                                              <label for="E-mail">E-mail</label>
                                              <input type="text" name="mail" class="form-control" :value="cliente_actual.mail">
                                          </div>
                                          <div class="form-group">
                                              <label for="Fax">Fax</label>
                                              <input type="text" name="fax" class="form-control" :value="cliente_actual.fax">
                                          </div>
                                          <div class="form-group">
                                              <label for="Web">Sitio Web</label>
                                              <input type="text" name="web" class="form-control" :value="cliente_actual.web">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="card card-primary">
                                      <div class="card-header">
                                          <h3 class="card-title">Dirección</h3>
                                      </div>
                                      <div class="card-body">
                                          <div class="form-group">
                                              <label for="País">País</label>
                                              <select name="pais" id="s_pais" class="custom-select rounded-0">
                                                  <option v-for="pais in paises" :value="pais" :key="pais.id">{{ pais }}</option>
                                              </select>
                                          </div>
                                          <div class="form-group">
                                              <label for="Provincia">Provincia</label>
                                              <input type="text" name="provincia" class="form-control" :value="cliente_actual.provincia">
                                          </div>
                                          <div class="form-group">
                                              <label for="Ciudad">Ciudad</label>
                                              <input type="text" name="ciudad" class="form-control" :value="cliente_actual.ciudad">
                                          </div>
                                          <div class="form-group">
                                              <label for="Dirección">Dirección</label>
                                              <input type="text" name="direccion" class="form-control" :value="cliente_actual.direccion">
                                          </div>
                                          <div class="form-group">
                                              <label for="Codigo postal">Codigo Postal</label>
                                              <input type="text" name="codigopostal" class="form-control" :value="cliente_actual.codigopostal">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-default" @click='closewebform'>Cancelar</button>
                        <button type="button" class="btn btn-success" @click="creareditar()">{{ id_actual ? "Editar cliente" : "Crear cliente" }}</button>
                      </div>
                  </form>
              </div>
          </div>
        </div>
          <!-- /.row -->
        </div>
    </section>
</div>
  </template>
  
  <script setup>
    definePageMeta({
        middleware: ['init', 'pago'],
    });
  import $ from 'jquery';
  import axios from 'axios';
  import DataTable from 'datatables.net-vue3'
  import 'datatables.net-buttons-bs4';
  import 'datatables.net-buttons/js/buttons.colVis.mjs';
  import 'datatables.net-buttons/js/buttons.html5.mjs';
  import 'datatables.net-buttons/js/buttons.print.mjs';
  import 'datatables.net-responsive-bs4';
  </script>
  
  <script>
  export default {
      data() {
          return{
              id_actual: 0,
              clientes: {},
              cliente_actual: {},
              paises: {},
              api: useState('api').value,
              jwt: useState('jwt').value
          }
      },
      methods: {
          events(){
              var self = this;
              this.$nextTick(() => {
                  $('table tbody').on( 'click', '.dtr-data button[name="eventeditar"]', function (e) {
                      self.openwebform(this.value);
                      e.stopPropagation();
                  });
                  
                  $('#example1').on('click', 'td button[name="eventeditar"]', function () {
                      self.openwebform(this.value);
                  });
                  
                  $('table tbody').on( 'click', '.dtr-data button[name="eventborrar"]', function (e) {
                      self.borrar(this.value);
                      e.stopPropagation();
                  });
                  
                  $('#example1').on('click', 'td button[name="eventborrar"]', function () {
                      self.borrar(this.value);
                  });

                  $('table tbody').on( 'click', '.dtr-data button[name="alperfil"]', function (e) {
                    e.stopPropagation();
                    navigateTo(this.value);
                      
                  });
                  
                  $('#example1').on('click', 'td button[name="alperfil"]', function () {
                    navigateTo(this.value);
                  });

  
              });
          },
          closewebform() {
              $('#modalwebform').modal('hide');
          },
          seleccionar_pais(oldValue){
              const selecta = document.getElementById("s_pais");
              var selecteded = 0;
              for (let i = 0; i < selecta.options.length; i++) {
                  if (selecta.options[i].value === oldValue) {
                      selecta.options[i].selected = true;
                      selecteded = 1;
                      break;
                  }
              }
              if(selecteded == 0){
                  selecta.options[0].selected = true;
              }
          },
          openwebform(pid) {
              var self = this;
              if(pid > 0){
                  axios.get(self.api + 'ajax-clientes.php', {
                      params: {
                          obtenercliente: pid
                      },
                      headers: {
                          'Authorization': `Bearer ${self.jwt}`
                      }
                  })
                  .then(function (response) {
                      self.cliente_actual = response.data;
                      if (response.data.pais && response.data.pais.length) {
                          self.seleccionar_pais(response.data.pais);
                      }else{
                          self.seleccionar_pais('España');
                      }
                      self.id_actual = pid;
                  })
                  .catch(function (error) {
                      console.log(error);
                  });
              }else{
                  this.cliente_actual = {};
                  this.seleccionar_pais('España');
                  this.id_actual = 0;
              }
              $('#modalwebform').modal('show');
          },
          creareditar() {
              var self = this;
              var data = new FormData( $( '#creareditar' )[ 0 ] );
              $.ajax({
                  url: self.api + 'ajax-clientes.php',
                  processData: false,
                  contentType: false,
                  type: 'POST',
                  data: data,
                  dataType: 'JSON',
                  headers: {
                      'Authorization': `Bearer ${self.jwt}`
                  },
                  success: function(resp){
                      self.get_clientes();
                      document.getElementById('creareditar').reset();
                      self.closewebform();
                      notie.alert({ type: resp.icono, text: resp.mensaje });
                  },
                  error: function(error){
                      notie.alert({ type: error.responseJSON.icono, text: error.responseJSON.mensaje });
                      console.log(error);
                  }
              });
          },
          borrar(value) {
              var self = this;
              if(value > 0){
                  notie.confirm({
                      text: '¿Seguro que quiere <b>eliminar</b> el cliente?',
                      cancelCallback: function () {
                          notie.alert({ type: 3, text: '¡Cancelado!', time: 2 });
                      },
                      submitCallback: function () {
                          axios.get(self.api + 'ajax-clientes.php', {
                              params: {
                                  borrar: value
                              },
                              headers: {
                                  'Authorization': `Bearer ${self.jwt}`
                              }
                          })
                          .then(function (response) {
                              self.get_clientes();
                              notie.alert({ type: response.data.icono, text: response.data.mensaje, time: 2 });
                          })
                          .catch(function (error) {
                              notie.alert({ type: error.response.data.icono, text: error.response.data.mensaje, time: 2 });
                              console.log(error);
                          });
                      }
                  });
              }
          },
          get_clientes() {
              var self = this;
              axios.get(self.api + 'ajax-clientes.php', {
                  params: {
                      preclientes: 1
                  },
                  headers: {
                      'Authorization': `Bearer ${self.jwt}`
                  }
              })
              .then(function (response) {
                  self.clientes = response.data ;
              })
              .catch(function (error) {
                  console.log(error);
              });
          },
          get_paises() {
              var self = this;
              axios.get(self.api + 'ajax-clientes.php', {
                  params: {
                      obtenerpaises: 1
                  },
                  headers: {
                      'Authorization': `Bearer ${self.jwt}`
                  }
              })
              .then(function (response) {
                  self.paises = response.data ;
              })
              .catch(function (error) {
                  console.log(error);
              });
          }
        },
        created(){
            this.get_clientes();
            this.get_paises();
        },
        async mounted(){
            window.jQuery = window.$ = $;
            this.events();
            await import("assets/jszip/jszip.min.js");
        },
        beforeUnmount() {
            if ($.fn.DataTable.isDataTable('#example1')) {
                $('#example1').DataTable().destroy();
            }
        },
        watch: {
          clientes() {
              var self = this;
              if ($.fn.DataTable.isDataTable('#example1')) {
                  var pagina_actual = $('#example1').DataTable().page();
                  $('#example1').DataTable().clear().rows.add(this.clientes).draw();
                  $('#example1').DataTable().page(pagina_actual).draw('page');
              }
              this.$nextTick(()=> {
                  if (!$.fn.DataTable.isDataTable('#example1')) {
                      $("#example1").DataTable({
                          "language": {
                              "url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/es-ES.json"
                          },
                          data: self.clientes,
                          columns: [
                              { title: 'id', visible: false,searchable: false },
                              { title: 'Nombre', "render": function(data, type, full) { return '<a style="margin-left:5px;" href="javascript:void(0)">'+data+'</a>'}},
                              { title: 'NIF'},
                              { title: 'E-mail'},
                              { title: 'Teléfono'},
                              { title: 'Dirección'},
                              { title: 'Opciones',
                                  data: null,
                                  orderable: false,
                                  "render": function(data, type, full) { return `<div class="btn-group">
                                      <button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">Opciones</button>
                                      <div class="dropdown-menu" role="menu">
                                          <button name="alperfil" class="dropdown-item" value="/app/clientes/perfil/`+full[0]+`"><i class="far fa-eye mr-2"></i>Ver</button>
                                          <button class="dropdown-item" name="eventeditar" value="`+full[0]+`"><i class="fas fa-edit mr-2"></i>Editar</button>
                                          <div class="dropdown-divider"></div>
                                          <button name="eventborrar" value="`+full[0]+`" class="dropdown-item"><i class="fas fa-trash-alt mr-2"></i>Borrar</button>
                                      </div>
                                  </div>` }}
                          ],
                          createdRow: (row, data, index) => {
                              $('td',row).eq(1).addClass('text-center');
                              $('td',row).eq(2).addClass('text-center');
                              $('td',row).eq(3).addClass('text-center');
                              $('td',row).eq(4).addClass('text-center');
                              $('td',row).eq(5).addClass('text-center');
                              $('td',row).eq(6).addClass('text-center');
                          },
                            rowCallback: function(row, data, index) {
                                var self = this;
                                $('td', row).eq(0).off('click');
                                $('td', row).eq(0).on('click', function() {
                                    navigateTo("/app/clientes/perfil/"+data[0]);
                                });
                                return row;
                            },
                      "order":[[0,"desc"]],
                      "responsive": true,
                      "lengthChange": false,
                      "autoWidth": false,
                      "ordering": true,
                      "paging": true,
                      "info": true,
                      "searching": true,
                      "dom": 'Bfrtip',
                      "buttons": [{
                          extend: "colvis",
                          enabled: (self.rol != 'moderador')
                      },{
                          extend: 'collection',
                          text: 'Exportar',
                          buttons: [{
                              extend: 'copy',
                              exportOptions: {
                                  columns: ":visible"
                              }
                          }, {
                              extend: 'excel',
                              exportOptions: {
                                  columns: ":visible"
                              }
                          }, {
                              extend: 'pdf',
                              download: 'open',
                              exportOptions: {
                                  columns: ":visible"
                              }
                          }, {
                              text: 'PDF (horizontal)',
                              extend: 'pdf',
                              orientation: 'landscape',
                              download: 'open',
                              exportOptions: {
                                  columns: ":visible"
                              }
                          }, {
                              extend: 'print',
                              exportOptions: {
                                  columns: ":visible"
                              }
                          }]
                      }]
                  });
                      $('#example1 thead').addClass('bg-gradient-primary');
                  }
              });
          }
      }
  }
  </script>
  
  <style>
  @import 'https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.13.1/b-2.3.3/b-colvis-2.3.3/b-html5-2.3.3/b-print-2.3.3/r-2.4.0/datatables.min.css';
  </style>