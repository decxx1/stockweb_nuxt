<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="fas fa-tachometer-alt icon-gradient"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom:0;">Panel de control</h4>
                                <div class="page-title-subheading">Resumen de su cuenta, accesos rápidos y movimientos realizados</div>
                            </div>
                        </div>
                        <div class="page-title-actions">
                    
                        </div>    
                    </div>
                </div>
            </div>
        </section>
        <section class="content">
        <div class="container-fluid">
            <div class="row justify-content-center">
                <template v-if="user.rol !== 'vendedor'">
                    <div class="col-lg-3 col-6">
                        <!-- small card -->
                        <div class="small-box bg-gradient-primary">
                        <div class="inner">
                            <h3>{{ conteo_proveedores }}</h3>
                            <p>Proveedores</p>
                        </div>
                        <div class="icon">
                            <i class="fas fa-truck-loading"></i>
                        </div>
                        <a href="./proveedores" class="small-box-footer">
                            Ver más <i class="fas fa-arrow-circle-right"></i>
                        </a>
                        </div>
                    </div>
            </template>
            <div class="col-lg-3 col-6">
                <!-- small card -->
                <div class="small-box bg-gradient-info">
                <div class="inner">
                    <h3>{{ conteo_clientes }}</h3>
                    <p>Clientes</p>
                </div>
                <div class="icon">
                    <i class="fas fa-user-tie"></i>
                </div>
                <a href="./clientes" class="small-box-footer">
                    Ver más <i class="fas fa-arrow-circle-right"></i>
                </a>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <!-- small card -->
                <div class="small-box bg-gradient-purple">
                <div class="inner">
                    <h3>{{ conteo_presupuestos }}</h3>
                    <p>Presupuestos</p>
                </div>
                <div class="icon">
                    <i class="fas fa-file-invoice"></i>
                </div>
                <a href="./presupuestos" class="small-box-footer">
                    Ver más <i class="fas fa-arrow-circle-right"></i>
                </a>
                </div>
            </div>
            <div class="col-lg-3 col-6">
                <!-- small card -->
                <div class="small-box bg-gradient-orange">
                <div class="inner">
                    <h3>{{ conteo_ventas }}</h3>
                    <p>Ventas</p>
                </div>
                <div class="icon">
                    <i class="fas fa-cash-register"></i>
                </div>
                <a href="./ventas" class="small-box-footer">
                    Ver más <i class="fas fa-arrow-circle-right"></i>
                </a>
                </div>
            </div>
            
            <div class="col-12 col-sm-6 col-md-3 mb-5">
                <div class="info-box">
                    <span class="info-box-icon bg-gradient-navy elevation-1"><i class="fas fa-box-open"></i></span>
                    <div class="info-box-content">
                        <span class="info-box-text">Productos</span>
                        <span class="info-box-number">
                        {{ conteo_productos }}
                        <small></small>
                        </span>
                    </div>
                </div>
            </div>
            <template v-if="user.rol !== 'vendedor'">
                <div class="col-12 col-sm-6 col-md-3 mb-5">
                    <div class="info-box">
                        <span class="info-box-icon bg-gradient-secondary elevation-1"><i class="fas fa-user-tie"></i></span>
                        <div class="info-box-content">
                            <span class="info-box-text">Usuarios</span>
                            <span class="info-box-number">
                            {{ conteo_usuarios }}
                            <small></small>
                            </span>
                        </div>
                    </div>
                </div>
            </template>
        </div>
        <div class="row">
            <div :class="user.rol === 'vendedor' ? 'col-12' : 'col-md-8'">
                <div class="row">
                    <div :class="user.rol === 'vendedor' ? 'col-md-4' : 'col-md-6'">
                        <template v-if="productos">
                            <div class="card card-navy card-outline">
                                <div class="card-header">
                                    <h3 class="card-title">Productos agregados recientemente</h3>
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body p-0" style="max-height: 400px;overflow-y: auto;">
                                    <ul class="products-list product-list-in-card pl-2 pr-2">
                                        <template v-for="producto in productos" :key="producto.id">
                                            <li class="item">
                                                <div class="product-img">
                                                    <picture>
                                                        <source :srcset="api + producto.mini_webp" class="img-size-50" >
                                                        <source :srcset="api + producto.mini" class="img-size-50" >
                                                        <img :src="api + producto.mini" class="img-size-50" >
                                                    </picture>
                                                </div>
                                                <div class="product-info">
                                                    <a href="javascript:void(0)" class="product-title">{{producto.nombre}}
                                                        <span class="badge float-right" :class="producto.clase" style="margin-left:20px;" >{{producto.stock}}</span>
                                                    </a>
                                                    <span class="product-description">
                                                        {{producto.descripcion}}
                                                    </span>
                                                </div>
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                                <div class="card-footer text-center">
                                    <a href="./inventario" class="uppercase">Ver todo el inventario</a>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div :class="user.rol === 'vendedor' ? 'col-md-4' : 'col-md-6'">
                        <template v-if="ventas">
                            <div class="card card-orange card-outline">
                                <div class="card-header border-transparent">
                                    <h3 class="card-title">Últimas ventas</h3>

                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body p-0" style="max-height: 400px;overflow-y: auto;">
                                    <div class="table-responsive">
                                        <table class="table m-0">
                                            <thead>
                                                <tr>
                                                    <th>Venta</th>
                                                    <th>Estado</th>
                                                    <th>Cliente</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <template v-for="venta in ventas" :key="venta.id">						
                                                    <tr>
                                                        <td><a :href="'./ventas?venta=' + venta.id">{{ venta.numero }}</a></td>
                                                        <td><span class="badge" :class="venta.clase">{{ venta.estado }}</span></td>
                                                        <td>{{ venta.c_nombre }}</td>
                                                    </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
                                    <a href="./ventas">Ver todas las ventas</a>
                                </div>
                            </div>
                        </template>
                    </div>
                    <div :class="user.rol === 'vendedor' ? 'col-md-4' : 'col-md-6'">
                        <template v-if="presupuestos">
                            <div class="card card-purple card-outline">
                                <div class="card-header border-transparent">
                                    <h3 class="card-title">Últimos presupuestos</h3>
                                    <div class="card-tools">
                                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                            <i class="fas fa-minus"></i>
                                        </button>
                                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                                            <i class="fas fa-times"></i>
                                        </button>
                                    </div>
                                </div>
                                <!-- /.card-header -->
                                <div class="card-body p-0" style="max-height: 400px;overflow-y: auto;">
                                    <div class="table-responsive">
                                        <table class="table m-0">
                                            <thead>
                                                <tr>
                                                    <th>Presupuesto</th>
                                                    <th>Estado</th>
                                                    <th>Cliente</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <template v-for="presupuesto in presupuestos" :key="presupuesto.id">							
                                                    <tr>
                                                        <td><a :href="'./presupuestos?presupuesto=' + presupuesto.id">{{ presupuesto.numero }}</a></td>
                                                        <td><span class="badge" :class="presupuesto.clase">{{ presupuesto.estado }}</span></td>
                                                        <td>{{ presupuesto.c_nombre }}</td>
                                                    </tr>
                                                </template>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div class="card-footer text-center">
                                    <a href="./presupuestos">Ver todos los presupuestos</a>
                                </div>
                            </div>
                        </template>
                    </div>
                    <template v-if="user.rol !== 'vendedor'">
                        <div class="col-md-6">
                            <!-- USERS LIST -->
                            <template v-if="usuarios">
                                <div class="card card-secondary card-outline">
                                    <div class="card-header">
                                        <h3 class="card-title">Últimos Usuarios</h3>
                                        <div class="card-tools">
                                            <span class="badge badge-primary">{{ conteo_usuarios }} usuarios</span>
                                            <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                                <i class="fas fa-minus"></i>
                                            </button>
                                            <button type="button" class="btn btn-tool" data-card-widget="remove">
                                                <i class="fas fa-times"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <!-- /.card-header -->
                                    <div class="card-body p-0" style="max-height: 400px;overflow-y: auto;">
                                        <ul class="users-list clearfix">
                                            <template v-for="usuario in usuarios" :key="usuario.id">
                                                <li>
                                                    <img style="width:6rem !important; height:6rem !important;" :src="api + usuario.avatar" alt="User Image">
                                                    <a class="users-list-name" href="#">{{ usuario.nombre }}</a>
                                                    <span class="users-list-date">{{ usuario.titulo }}</span>
                                                </li>
                                            </template>
                                        </ul>
                                        <!-- /.users-list -->
                                    </div>
                                    <!-- /.card-body -->
                                    <div class="card-footer text-center">
                                        <a href="./usuarios">Ver todos los usuarios</a>
                                    </div>
                                    <!-- /.card-footer -->
                                </div>
                            </template>
                        </div>
                    </template>
                </div>
            </div>
                <template v-if="user.rol !== 'vendedor'">
                    <div class="col-md-4">
                        <div class="card card-primary card-outline">
                            <div class="card-header">
                                <h3 class="card-title">Últimos movimientos</h3>
                                <div class="card-tools">
                                    <button type="button" class="btn btn-tool" data-card-widget="collapse">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <button type="button" class="btn btn-tool" data-card-widget="remove">
                                        <i class="fas fa-times"></i>
                                    </button>
                                </div>
                            </div>
                            <div class="card-body p-0">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="timeline">
                                            <template v-if="historiales">
                                                <template v-for="(historial, index) in historiales" :key="historial.id">

                                                    <div class="time-label" v-if="index === 0 || historial.dias !== historiales[index - 1].dias">
                                                        <span class="bg-gradient-green">{{ historial.dias }}</span>
                                                    </div>
                                                    
                                                    <!-- timeline item -->
                                                    <div>
                                                        <i :class="historial.clase"></i>
                                                        <div class="timeline-item">
                                                            <span class="time"><i class="fas fa-clock"></i> {{ historial.fecha }}</span>
                                                            <h3 class="timeline-header"><a >{{ historial.usuario }}</a> {{ historial.titulo}}</h3>

                                                            <div class="timeline-body" v-html="historial.mensaje"></div>

                                                            <div class="timeline-footer">
                                                                <a :href="historial.boton" class="btn btn-primary btn-sm">Ver</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                            </template>
                                            <template v-else>
                                                <div>
                                                    <i class="fas fa-arrow-circle-right bg-gradient-info"></i>
                                                    <div class="timeline-item">
                                                        <span class="time"><i class="fas fa-clock"></i> Ahora</span>
                                                        <h3 class="timeline-header"> Historial</h3>

                                                        <div class="timeline-body">
                                                            No se han registrado acciones
                                                        </div>
                                                    </div>
                                                </div>
                                            </template>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer text-center">
                                <a href="./historial" class="uppercase">Ver todo el historial</a>
                            </div>
                        </div>
                    </div>
                </template>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
definePageMeta({
	middleware: 'init',
});
</script>
<script>
export default {
    data() {
        return{
            conteo_proveedores: 0,
            conteo_clientes: 0,
            conteo_presupuestos: 0,
            conteo_ventas: 0,
            conteo_productos: 0,
            conteo_usuarios: 0,
            productos: {},
            ventas: {},
            presupuestos: {},
            usuarios: {},
            historiales: {},
            api: '',
            jwt: '',
            user: {}
        }
    },
    async created(){
        this.api = useState('api').value;
        this.jwt = useState('jwt').value;
        const response = await fetch(this.api + 'ajax-dashboard.php?get_dashboard=1', {
            headers: {
            'Authorization': `Bearer ${this.jwt}`
            }
        });
        const data = await response.json();
        this.conteo_proveedores = data.conteo_proveedores;
        this.conteo_clientes = data.conteo_clientes;
        this.conteo_presupuestos = data.conteo_presupuestos;
        this.conteo_ventas = data.conteo_ventas;
        this.conteo_productos = data.conteo_productos;
        this.conteo_usuarios = data.conteo_usuarios;
        this.productos = data.productos;
        this.ventas = data.ventas;
        this.presupuestos = data.presupuestos;
        this.usuarios = data.usuarios;
        this.historiales = data.historiales;
        this.user = useState('usuario').value;
    }

}
</script>

<style>

</style>