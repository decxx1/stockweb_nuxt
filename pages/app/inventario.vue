<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="fas fa-boxes icon-gradient"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom:0;">Inventario</h4>
                                <div class="page-title-subheading">Cree un registro detallado de todos los productos disponibles en su negocio</div>
                            </div>
                        </div>
                        <div class="page-title-actions">
                    
                        </div>    
                    </div>
                </div>
            </div>
        </section>
  <section class="content" id="inventario-app">
			<!-- Cread editar producto -->
		<div class="modal fade" id="modalwebform" >
			<div class="modal-dialog modal-lg" >
			  <div class="modal-content">
				<div class="modal-header">
				  <h4 class="modal-title" >{{ id_prod ? 'Editar Producto' : 'Crear Producto' }}</h4>
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<form method="post" id="creareditar" enctype="multipart/form-data">
				<input type="hidden" name="webform" v-model="id_prod" />
				<div class="modal-body" v-if="producto.almacenes">
					<div class="row">
						<div class="col-md-12">
							<div class="card card-primary">
								<div class="card-header">
									<h3 class="card-title">Información Importante</h3>
								</div>
								<div class="card-body">
									<div class="form-group">
										<label for="Nombre">Nombre</label>
										<input type="text" name="nombre" class="form-control" :value="producto.nombre" required>
									</div>
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label>Proveedor</label>
												<div class="input-group">
													<select name="proveedor" id="s_proveedor" class="custom-select">
														<option value="">Seleccionar</option>
														<option v-for="proveedor in proveedores" :value="proveedor" :key="proveedor.index">{{ proveedor }}</option>
													</select>
												</div>
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<div class="form-group">
													<label for="marca">Marca</label>
													<input type="text" name="marca" class="form-control" :value="producto.marca" >
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-6">
							<div class="card card-primary">
								<div class="card-header">
									<h3 class="card-title">Información del producto</h3>
								</div>
								<div class="card-body">
									<div class="form-group">
										<label for="Codigo">Código</label>
										<input type="text" name="codigo" class="form-control" :value="producto.codigo">
									</div>
									<div class="form-group">
										<label for="Descripción">Descripción</label>
										<textarea :value="producto.descripcion" name="descripcion" rows="3" class="form-control"></textarea>
									</div>
									<div class="form-group">
										<label for="Plazo de entrega">Plazo de entrega</label>
										<input type="text" name="plazo" class="form-control" :value="producto.plazo">
									</div>
									<div class="form-group">
										<label for="Tipo de envío">Tipo de envío</label>
										<input type="text" name="envios" class="form-control" :value="producto.envios">
									</div>
									<div class="form-group">
										<label for="Garantía">Garantía</label>
										<input type="text" name="garantia" class="form-control" :value="producto.garantia">
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-6">
							<div class="card card-primary">
								<div class="card-header">
									<h3 class="card-title">Información de venta</h3>
								</div>
								<div class="card-body">
									
									<div class="form-group">
										<label for="Stock">Stock</label>
                                        <template v-if="producto.almacenes">
                                            <div  class="form-group" v-for="(almacen, index) in producto.almacenes" :key="almacen.index">
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text"><i class="fas fa-warehouse" style="margin-right:5px;"></i>{{ almacen.nombre }}</span>
                                                    </div>
                                                <input type="number" :name="'stock['+almacen.id+']'" class="form-control" :value="producto.stock[index]">
                                                </div>
                                            </div>
                                        </template>
										<div v-else class="form-group">
											<label >No hay almacénes para editar stock</label>
										</div>
									</div>
									
									<div class="card card-default">
										<div class="card-body">
											<div class="row">
												<div class="col-sm-6">
													<div class="form-group">
														<label for="Precio de compra">Precio de compra</label>
														<div class="input-group">
															<div class="input-group-prepend">
																<span class="input-group-text">€</span>
															</div>
															<input type="number" name="precio_compra" id="nuevoPrecioCompra" class="form-control" :value="producto.precio_compra">
														</div>
													</div>
												</div>
												<div class="col-sm-6">
													<div class="form-group">
														<label for="precio de venta">Precio de venta</label>
														<div class="input-group">
															<div class="input-group-prepend">
																<span class="input-group-text">€</span>
															</div>
															<input type="number" name="precio_venta" id="nuevoPrecioVenta" class="form-control" :value="producto.precio_venta">
														</div>
													</div>
													<!-- CHECKBOX PARA PORCENTAJE -->
													 
													  <!-- ENTRADA PARA PORCENTAJE -->
													  <div class="col-xs-6" style="padding:0">
														<div class="form-group">
														  <label style="font-size:15px;">
															<input type="checkbox" id="check_porcentaje" name="check_porcentaje" class="minimal porcentaje" >
															Utilizar procentaje
														  </label>
														</div>
														<div class="input-group">
														  <input type="number" name="porcentaje" class="form-control input-lg nuevoPorcentaje" min="0" :value="producto.porcentaje">
														  <div class="input-group-prepend">
																<span class="input-group-text">%</span>
															</div>
														</div>
													  </div>
												</div>
												<input type="hidden" name="ultima_actualizacion" class="form-control" :value="producto.ultima_actualizacion">
													
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">
							<div class="card card-primary">
								<div class="card-header">
									<h3 class="card-title">Subir imagen</h3>
								</div>
								<div class="card-body">
									<div class="form-group">
										<label for="Foto">Imagen max 5Mb</label>
										<input class="form-control" name ="file" type="file" @change="readURL" accept="image/jpg, image/jpeg, image/png, image/gif" maxlength="5242880" />
										<input type="hidden" name="image" :value="producto.imagen">
									</div>
									<div class="profileimg">
										<div class="profile-picture big-profile-picture">
											<picture>
												<source id="webp-source" :srcset="api + producto.mini_webp" style="border-radius: inherit !important;" >
												<source id="img-source" :srcset="api + producto.mini" style="border-radius: inherit !important;" >
												<img id="blah" :src="api + producto.mini" style="border-radius: inherit !important;" >
											</picture>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-body" v-else >
					<p>Para crear un <strong>producto</strong> primero deberás crear un <strong>almacén</strong> para indicar donde guardarlos</p>
					<a type="button" class="btn btn-primary" href="./almacenes" >Ir a Almacenes</a>
				</div>
					<div v-if="producto.almacenes" class="modal-footer justify-content-between">
					  <button type="button" class="btn btn-default" @click='closewebform'>Cancelar</button>
					  <button type="button" :disabled="buttonDisabled" class="btn btn-success" @click="creareditar()">{{ id_prod ? 'Editar Producto' : 'Crear Producto' }}</button>
					</div>
				</form>
			</div>
		</div>
      </div>
		<!-- editar end -->
		
		<!-- editar stock -->								
			<div class="modal fade" id="modalstock" >
				<div class="modal-dialog modal-lg" >
				  <div class="modal-content">
					<div class="modal-header">
					  <h4 class="modal-title">Cambiar Stock</h4>
					  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					  </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<div class="card card-default">
									<div class="card-body">
										<form method="post" id="formcambiarstock">
											<div class="form-group">
												<template v-if="producto.almacenes">
                                                    <div class="form-group" v-for="(almacen, index) in producto.almacenes" :key="almacen.index">
                                                        <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-warehouse" style="margin-right:5px;"></i>{{ almacen.nombre }}</span>
                                                        </div>
                                                        <input type="number" :name="'stock['+almacen.id+']'" class="form-control" 
                                                            :value="producto.stock[index]">
                                                        </div>
                                                    </div>
                                                </template>
												<div v-else class="form-group">
													<label >No hay almacénes para editar stock</label>
												</div>
											</div>
											
											<input type="hidden" name="cambiar_stock" v-model="id_prod" />
											
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer justify-content-between">
					  <button type="button" class="btn btn-default" @click='closestock'>Cerrar</button>
					  <button v-if="producto.almacenes" type="button" class="btn btn-success" @click='cambiar_stock'>Cambiar stock</button>
					</div>
				</div>
          <!-- /.modal-content -->
			</div>
      </div>

		<!-- restar stock -->					
			<div class="modal fade" id="modalquitar" >
				<div class="modal-dialog modal-lg" >
				  <div class="modal-content">
					<div class="modal-header">
					  <h4 class="modal-title">Restar al inventario</h4>
					  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					  </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<div class="card card-default">
									<div class="card-body">
										<form method="post" id="formrestarstock">
                                            <template v-if="producto.almacenes">
                                                <div  class="form-group" v-for="almacen in producto.almacenes" :key="almacen.index">
                                                    <label for="Sumar">Restar al stock de:</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-warehouse" style="margin-right:5px;"></i>{{ almacen.nombre }}</span>
                                                        </div>
                                                        <input type="number" :name="'stock['+almacen.id+']'" class="form-control">
                                                    </div>
                                                </div>
                                            </template>
											<div v-else class="form-group">
												<label >No hay almacénes para restar stock</label>
											</div>
											<input type="hidden" name="del_stock" v-model="id_prod" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer justify-content-between">
					  <button type="button" class="btn btn-default" @click='closerestar'>Cancelar</button>
					  <button v-if="producto.almacenes" type="button" class="btn btn-success" @click="deladd_stock('formrestarstock')">Restar al Stock</button>
					</div>
				</div>
			</div>
      </div>
	  <!-- Sumar stock -->
	  <div class="modal fade" id="modalsumar" >
				<div class="modal-dialog modal-lg" >
				  <div class="modal-content">
					<div class="modal-header">
					  <h4 class="modal-title">Sumar al inventario</h4>
					  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					  </button>
					</div>
					<div class="modal-body">
						<div class="row">
							<div class="col-md-12">
								<div class="card card-default">
									<div class="card-body">
										<form method="post" id="formsumarstock">
                                            <template v-if="producto.almacenes">
											<div  class="form-group" v-for="almacen in producto.almacenes" :key="almacen.index">
                                                <label for="Sumar">Sumar al stock de:</label>
                                                    <div class="input-group">
                                                        <div class="input-group-prepend">
                                                            <span class="input-group-text"><i class="fas fa-warehouse" style="margin-right:5px;"></i>{{ almacen.nombre }}</span>
                                                        </div>
                                                        
                                                        <input type="number" :name="'stock['+almacen.id+']'" class="form-control">
                                                    </div>
                                                </div>
                                            </template>
											<div v-else class="form-group">
												<label >No hay almacénes para sumar stock</label>
											</div>
											<input type="hidden" name="add_stock" v-model="id_prod" />
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="modal-footer justify-content-between">
					  <button type="button" class="btn btn-default" @click='closesumar'>Cancelar</button>
					  <button v-if="producto.almacenes" type="button" class="btn btn-success" @click="deladd_stock('formsumarstock')">Sumar al Stock</button>
					</div>
				</div>
          <!-- /.modal-content -->
			</div>
      </div>
		
	  <div class="modal fade" id="modalprecio" >
			<div class="modal-dialog modal-lg" >
			  <div class="modal-content">
				<div class="modal-header">
				  <h4 class="modal-title">Cambiar Precios</h4>
				  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				  </button>
				</div>
				<div class="modal-body">
					<div class="row">
						<div class="col-md-12">
							<div class="card card-default">
								<div class="card-body">
									<form method="post" id="formcambiarprecios">
										<div class="row">
											<div class="col-sm-6">
												<div class="form-group">
													<label for="Precio de compra">Precio de compra</label>
													<div class="input-group">
														<div class="input-group-prepend">
															<span class="input-group-text">€</span>
														</div>
														<input type="number" name="precio_compra" :value="precio_actual.precio_compra" id="nuevo2PrecioCompra" class="form-control" >
													</div>
												</div>
											</div>
											<div class="col-sm-6">
												<div class="form-group">
													<label for="precio de venta">precio de venta</label>
													<div class="input-group">
														<div class="input-group-prepend">
															<span class="input-group-text">€</span>
														</div>
														<input type="number" name="precio_venta" :value="precio_actual.precio_venta" id="nuevo2PrecioVenta" class="form-control" >
													</div>
												</div>
												<!-- ENTRADA PARA PORCENTAJE -->
												  <div class="col-xs-6" style="padding:0">
													<div class="form-group">
													  <label style="font-size:15px;">
														<input type="checkbox" id="check_porcentaje2" name="check_porcentaje" class="minimal porcentaje2">
														Utilizar procentaje
													  </label>
													</div>
													<div class="input-group">
													  <input type="number" name="porcentaje" class="form-control input-lg nuevo2Porcentaje" min="0" :value="precio_actual.porcentaje">
														<div class="input-group-prepend">
															<span class="input-group-text">%</span>
														</div>
													</div>
												  </div>
											</div>
											<input type="hidden" name="ultima_actualizacion" class="form-control" :value="precio_actual.ultima_actualizacion">
										</div>
										
										<input type="hidden" name="formcambiarprecios" v-model="id_prod" />
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="modal-footer justify-content-between">
				  <button type="button" class="btn btn-default" @click='closeprecios'>Cerrar</button>
				  <button type="button" class="btn btn-success" @click='cambiar_precios'>Cambiar precios</button>
				</div>
			</div>
	  <!-- /.modal-content -->
		</div>
      </div>
	<!-- ver producto END -->

      <div class="container-fluid" >
			<div class="row" >
				<div class="col-12">

					<div class="card card-primary">
						<div class="card-body">
							<button @click="openwebform(0)" class="btn btn-primary" ><i class="fas fa-plus mr-2"></i>Agregar Producto</button>
						</div>
					</div>
				</div>
			</div>
			
				
		<div class="row">
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-gradient-info"><i class="fas fa-layer-group"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">En Stock</span>
                <span class="info-box-number">{{ enstock }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-gradient-success"><i class="fas fa-euro-sign"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Valor en Stock</span>
                <span class="info-box-number">{{ valorstock }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-gradient-blue"><i class="fas fa-hand-holding-usd"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Costo de Stock</span>
                <span class="info-box-number">{{ costostock }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-md-3 col-sm-6 col-12">
            <div class="info-box">
              <span class="info-box-icon bg-gradient-orange"><i class="fas fa-chart-line"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">Ganancia estimada</span>
                <span class="info-box-number">{{ gananciaestimada }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>
        <div class="row" style="margin-top:100px;" v-cloak>
		
          <div class="col-12">
			
			
            <div class="card card-primary card-outline">
              <div class="card-header">
                <h3 class="card-title">Lista de productos </h3>
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
		<!-- Ver producto -->	
			<div class="modal fade" id="modalproducto" >
				<div class="modal-dialog modal-lg" >
				  <div class="modal-content">
					<div class="modal-header">
					  <h4 class="modal-title"></h4>
					  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
						<span aria-hidden="true">&times;</span>
					  </button>
					</div>
					<div class="modal-body">
						<div class="card">
							<div class="card card-body" style="margin: 0 !important">
							  <div class="row">
								<div class="col-12 col-sm-6">
									<h3 class="d-inline-block ">{{ producto.nombre }}</h3>
									<p>{{ producto.descripcion }}</p>
									<hr>
									<div class="col-12">
										<picture>
											<source :srcset="api + producto.mini_webp" class="product-image" >
											<source :srcset="api + producto.mini" class="product-image" >
											<img :src="api + producto.mini" class="product-image" >
										</picture>
									</div>
									<button v-show="rol != 'vendedor'" class="btn btn-block btn-default"  @click="closeproducto(); openwebform(producto.id);" type="button"><i class="fas fa-edit mr-2"></i>Editar</button>
								</div>
								<div class="col-12 col-sm-6">
									<div class="card-body">
										<dl class="row">
											<dt class="col-sm-4">Código:</dt>
											<dd class="col-sm-8">{{ producto.codigo }}</dd>
											<dt class="col-sm-4">Marca:</dt>
											<dd class="col-sm-8">{{ producto.marca }}</dd>
											<dt v-show="rol != 'vendedor'" class="col-sm-4">Proveedor:</dt>
											<dd v-show="rol != 'vendedor'" class="col-sm-8">{{ producto.proveedor }}</dd>
										</dl>
									</div>
									<hr>
								<h4 class="mt-3">Stock</h4>
                                <template v-if="producto.almacenes">
								    <div class="row" v-for="(almacen, index) in producto.almacenes" :key="almacen.index">
										<button class="transparente w-100"  @click="closeproducto(); openstock(producto.id);" >
											<div class="info-box" style="height: 70px;min-height: 70px;" >
												<span class="info-box-icon" :class="color_stock(producto.stock[index])">{{ producto.stock[index] }}</span>
												<div class="info-box-content">
													<span class="info-box-text">Almacén</span>
													<span class="info-box-number">{{ almacen.nombre }}</span>
												</div>
											</div>
										</button>
								    </div>
                                </template>
								  <div class="row mt-4">
									<div class="col">
										<button @click="closeproducto(); openrestar(producto.id);" class="btn btn-danger btn-flat" ><i class="fas fa-minus fa-lg mr-2"></i>Quitar</button>
										
									</div>
									<div class="col">
										<button @click="closeproducto(); opensumar(producto.id);" class="btn btn-success btn-flat float-right"><i class="fas fa-plus fa-lg mr-2"></i>Agregar</button>
									</div>
								  </div>
								</div>
							  </div>
								<div class="row mt-4">
									<div class="col-12 col-sm-6">
										<div class="card-body">
											<dl class="row">
												<dt v-show="rol != 'vendedor'" class="col-sm-6">precio de compra:</dt>
												<dd v-show="rol != 'vendedor'" class="col-sm-6 badge2 bg-gradient-primary">€ {{ producto.precio_compra }}</dd>
												<dt class="col-sm-6">precio de venta:</dt>
												<dd class="col-sm-6 badge2 bg-gradient-primary">€ {{ producto.precio_venta }}</dd>
												
												<button v-show="rol != 'vendedor'" class="btn btn-block btn-default"  @click="closeproducto(); openprecios(producto.id);"><i class="fas fa-edit mr-2"></i>Cambiar precios</button>
												
											</dl>
											
										</div>
									</div>
									<div class="col-12 col-sm-6">
										<nav class="w-100">
										  <div class="nav nav-tabs" id="product-tab" role="tablist">
											<a class="nav-item nav-link active" id="product-desc-tab" data-toggle="tab" href="#product-desc" role="tab" aria-controls="product-desc" aria-selected="true">Plazo de entrega</a>
											<a class="nav-item nav-link" id="product-comments-tab" data-toggle="tab" href="#product-comments" role="tab" aria-controls="product-comments" aria-selected="false">Envíos</a>
											<a class="nav-item nav-link" id="product-rating-tab" data-toggle="tab" href="#product-rating" role="tab" aria-controls="product-rating" aria-selected="false">Garantía</a>
										  </div>
										</nav>
										<div class="tab-content p-3" id="nav-tabContent">
										  <div class="tab-pane fade show active" id="product-desc" role="tabpanel" aria-labelledby="product-desc-tab"> {{ producto.plazo }}</div>
										  <div class="tab-pane fade" id="product-comments" role="tabpanel" aria-labelledby="product-comments-tab"> {{ producto.envios }}</div>
										  <div class="tab-pane fade" id="product-rating" role="tabpanel" aria-labelledby="product-rating-tab"> {{ producto.garantia }}</div>
										</div>
									</div>
									
									
								</div>
								<div class="row justify-content-center">
									<div v-if="producto.ultima_actualizacion && producto.ultima_actualizacion != null" class="callout callout-info mt-2">
										<p><span class="text-bold mr-2">Última actualización:</span>{{ producto.ultima_actualizacion }}</p>
									</div>
								</div>
							</div>
							<!-- /.card-body -->
						</div>
					</div>
				<div class="modal-footer justify-content-between">
				  <button type="button" class="btn btn-default w-100" @click='closeproducto()'>Cerrar</button>
				</div>
			</div>
			<!-- /.modal-content -->
		</div>
      </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </section>
    </div>
</template>

<script setup>
definePageMeta({
	middleware: ['init', 'pago'],
});

import $ from 'jquery';
import axios from 'axios';
import 'jszip';
import 'pdfmake';
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
				producto: { almacen:[], almacenes:[], codigo:'', descripcion:'', envios:'', garantia:'', id:'', imagen:'', marca:'', nombre:'', plazo:'', precio_compra:'', precio_venta:'', proveedor:'', stock:[], ultima_actualizacion:''},
				precio_actual: { precio_compra: '', precio_venta: '', ultima_actualizacion:''},
				id_prod: 0,
				inventario: {},
				proveedores: {},
				buttonDisabled: false,
				imageUrl: null,
                api: '',
                jwt:'',
                rol:''
			}
        },
        methods: {
            formatearNumero(numero) {
				const formato = new Intl.NumberFormat('es-ES');
				return formato.format(numero);
			},
			events(){
                var self = this;
				this.$nextTick(() => {
					$('table tbody').on( 'click', '.dtr-data button[name="eventprecios"]', function (e) {
						self.openprecios(this.value);
						e.stopPropagation();
					});
					
					$('#example1').on('click', 'td button[name="eventprecios"]', function () {
						
						self.openprecios(this.value);
					});

					$('table tbody').on( 'click', '.dtr-data button[name="eventstock"]', function (e) {
						self.openstock(this.value);
						e.stopPropagation();
					});

					$('#example1').on('click', 'td button[name="eventstock"]', function () {
						self.openstock(this.value);
					});
					$('table tbody').on( 'click', '.dtr-data button[name="eventproducto"]', function (e) {
						self.openproducto(this.value);
						e.stopPropagation();
					});

					$('#example1').on('click', 'td button[name="eventproducto"]', function () {
						self.openproducto(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventeditar"]', function (e) {
						self.openwebform(this.value);
						e.stopPropagation();
					});

					$('#example1').on('click', 'td button[name="eventeditar"]', function () {
						self.openwebform(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventduplicar"]', function (e) {
						e.stopPropagation();
						self.duplicarprod(this.value);
					});

					$('#example1').on('click', 'td button[name="eventduplicar"]', function (e) {
						e.stopPropagation();
						self.duplicarprod(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventborrar"]', function (e) {
						e.stopPropagation();
						self.borrarprod(this.value);
						
					});

					$('#example1').on('click', 'td button[name="eventborrar"]', function (e) {
						e.stopPropagation();
						self.borrarprod(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventprecios"]', function (e) {
						self.openprecios(this.value);
						e.stopPropagation();
					});
					
					$('#example2').on('click', 'td button[name="eventprecios"]', function () {
						self.openprecios(this.value);
					});

					$('table tbody').on( 'click', '.dtr-data button[name="eventstock"]', function (e) {
						self.openstock(this.value);
						e.stopPropagation();
					});

					$('#example2').on('click', 'td button[name="eventstock"]', function () {
						self.openstock(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventproducto"]', function (e) {
						self.openproducto(this.value);
						e.stopPropagation();
					});

					$('#example2').on('click', 'td button[name="eventproducto"]', function () {
						self.openproducto(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventeditar"]', function (e) {
						self.openwebform(this.value);
						e.stopPropagation();
					});

					$('#example2').on('click', 'td button[name="eventeditar"]', function () {
						self.openwebform(this.value);
					});
					
					$('table tbody').on( 'click', '.dtr-data button[name="eventborrar"]', function (e) {
						self.borrarprod(this.value);
						e.stopPropagation();
					});

					$('#example2').on('click', 'td button[name="eventborrar"]', function () {
						self.borrarprod(this.value);
					});
					
					function calcularPorcentaje(prefix) {
						var valorPorcentaje = $("." + prefix + "Porcentaje").val();
						var porcentaje = Number(($("#" + prefix + "PrecioCompra").val()*valorPorcentaje/100))+Number($("#" + prefix + "PrecioCompra").val());
						$("#" + prefix + "PrecioVenta").val(porcentaje);
						$("#" + prefix + "PrecioVenta").prop("readonly",true);
					}

					$("#nuevoPrecioCompra").on("keyup change", function(){
						if($(".porcentaje").prop("checked")){
						    calcularPorcentaje("nuevo");
						}
					});

					$(".nuevoPorcentaje").on("keyup change", function(){
						if($(".porcentaje").prop("checked")){
						    calcularPorcentaje("nuevo");
						}
					});

					$('.porcentaje').change(function(){
						if (this.checked) {
						    $("#nuevoPrecioVenta").prop("readonly",true);
						calcularPorcentaje("nuevo");
						}else{
						    $("#nuevoPrecioVenta").prop("readonly",false);
						}
					});

					$("#nuevo2PrecioCompra").on("keyup change", function(){
						if($(".porcentaje2").prop("checked")){
						    calcularPorcentaje("nuevo2");
						}
					});

					$(".nuevo2Porcentaje").on("keyup change", function(){
						if($(".porcentaje2").prop("checked")){
						    calcularPorcentaje("nuevo2");
						}
					});

					$('.porcentaje2').change(function(){
						if (this.checked) {
						    $("#nuevo2PrecioVenta").prop("readonly",true);
						    calcularPorcentaje("nuevo2");
						}else{
						    $("#nuevo2PrecioVenta").prop("readonly",false);
						}
					});
				});
			},
			readURL(event) {
				if (event.target.files && event.target.files[0]) {
					const reader = new FileReader();

					reader.onload = function (e) {
						$('#blah').attr('src', e.target.result);
						$('#img-source').attr('srcset', e.target.result);
						$('#webp-source').attr('srcset', e.target.result);
					}
					reader.readAsDataURL(event.target.files[0]);
				}
			},
			closeprecios() {
				$('#modalprecio').modal('hide');
			},
			openprecios(pid) {
                var self = this;
				if(pid > 0 && this.rol != 'vendedor'){
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obtenerprecios: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.precio_actual = response.data;
						self.id_prod = pid;
						document.getElementById('check_porcentaje2').checked = response.data.check_porcentaje == 1;
						if(response.data.check_porcentaje === 1) {
							$("#nuevo2PrecioVenta").prop("readonly",true);
						}else{
							$("#nuevo2PrecioVenta").prop("readonly",false);
						}
					})
					.catch(function (error) {
						console.log(error);
					});
					
					$('#modalprecio').modal('show');
				}
			},
			closeproducto() {
				$('#modalproducto').modal('hide');
			},
			openproducto(pid) {
				var self = this;
				$('#modalproducto').modal('show');
				
				if(pid > 0){
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obtenerproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.producto = response.data;
						self.id_prod = pid;
					})
					.catch(function (error) {
						console.log(error);
					});
				}
			},
			closestock() {
				$('#modalstock').modal('hide');
			},
			openstock(pid) {
				var self = this;
				$('#modalstock').modal('show');
				
				if(pid > 0){
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obtenerproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.producto = response.data;
						self.id_prod = pid;
					})
					.catch(function (error) {
						console.log(error);
					});
				}
			},
			closerestar() {
				$('#modalquitar').modal('hide');
			},
			openrestar(pid) {
                var self = this;

				$('#modalquitar').modal('show');
				if(pid > 0){
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obtenerproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.producto = response.data;
						self.id_prod = pid;
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				
				
			},
			closewebform() {
				$('#modalwebform').modal('hide');
			},
			seleccionar_proveedor(oldValue){
				const selecta = document.getElementById("s_proveedor");
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
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obtenerproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.producto = response.data;
						self.id_prod = pid;
						self.seleccionar_proveedor(response.data.proveedor);
						document.getElementById('check_porcentaje').checked = response.data.check_porcentaje == 1;
						if(response.data.check_porcentaje === 1) {
							$("#nuevoPrecioVenta").prop("readonly",true);
						}else{
							$("#nuevoPrecioVenta").prop("readonly",false);
						}
					})
					.catch(function (error) {
						console.log(error);
					});
				}else{
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obteneralmacenes: 1
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.producto = { almacen:[], almacenes: response.data.almacenes, codigo:'', porcentaje: 50, descripcion:'', envios:'', garantia:'', id:'', imagen:'',mini:'images/stock.png', mini_webp:'images/stock.png', marca:'', nombre:'',  plazo:'', precio_compra:'', precio_venta:'', proveedor:'', stock:[], ultima_actualizacion:''};
						self.id_prod = 0;
						document.getElementById('check_porcentaje').checked = false;
						$("#nuevoPrecioVenta").prop("readonly",false);
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				
				$('#modalwebform').modal('show');
			},
			get_proveedores(){
                var self = this;
				axios.get(self.api + 'ajax-inventario.php', {
					params: {
						obtenerproveedores: 1
					},
                    headers: {
                        'Authorization': `Bearer ${self.jwt}`
                    }
				})
				.then(function (response) {
					self.proveedores = response.data;
				})
				.catch(function (error) {
					console.log(error);
				});
			},
			closesumar() {
				$('#modalsumar').modal('hide');
			},
			opensumar(pid) {
                var self = this;
				$('#modalsumar').modal('show');
				
				if(pid > 0){
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							obtenerproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.producto = response.data;
						self.id_prod = pid;
					})
					.catch(function (error) {
						console.log(error);
					});
				}
				
				
			},
			cambiar_precios() {
                var self = this;
				var data = new FormData( $( '#formcambiarprecios' )[ 0 ] );
				$.ajax({
					url: self.api + 'ajax-inventario.php',
					processData: false,
					contentType: false,
					type: 'POST',
					data: data,
					dataType: 'JSON',
                    headers: {
                        'Authorization': `Bearer ${self.jwt}`
                    },
					success: function(){

						self.updateprod();
						self.closeprecios();
						notie.alert({ type: 'success', text: '¡Precios actualizados!' });
					},
					error: function(error){
						notie.alert({ type: 'error', text: '¡Error!' });
					}
				});
			},
			cambiar_stock() {
                var self = this;
				var data = new FormData( $( '#formcambiarstock' )[ 0 ] );
				$.ajax({
					url: self.api + 'ajax-inventario.php',
					processData: false,
					contentType: false,
					type: 'POST',
					data: data,
					dataType: 'JSON',
                    headers: {
                        'Authorization': `Bearer ${self.jwt}`
                    },
					success: function(){
						self.updateprod();
						self.closestock();
						notie.alert({ type: 'success', text: '¡Stock Actualizado!' });
					},
					error: function(error){
						notie.alert({ type: 'error', text: '¡Error!' });
						console.log(error);
					}
				});
			},
			deladd_stock(formulario) {
                var self = this;
				var data = new FormData( $( '#' + formulario )[ 0 ] );
				$.ajax({
					url: self.api + 'ajax-inventario.php',
					processData: false,
					contentType: false,
					type: 'POST',
					data: data,
					dataType: 'JSON',
                    headers: {
                        'Authorization': `Bearer ${self.jwt}`
                    },
					success: function(){
						
						self.updateprod();
						document.getElementById(formulario).reset();
						self.closesumar();
						self.closerestar();
						notie.alert({ type: 'success', text: '¡Stock Actualizado!' });
					},
					error: function(error){
						notie.alert({ type: 'error', text: '¡Error!' });
					}
				});
			},
			creareditar() {
                var self = this;
				this.buttonDisabled = true;
				var data = new FormData( $( '#creareditar' )[ 0 ] );
				$.ajax({
					url: self.api + 'ajax-inventario.php',
					processData: false,
					contentType: false,
					type: 'POST',
					data: data,
					dataType: 'JSON',
                    headers: {
                        'Authorization': `Bearer ${self.jwt}`
                    },
					success: function(resp){
						self.updateprod();
						document.getElementById('creareditar').reset();
						self.closewebform();
						notie.alert({ type: resp.icono, text: resp.mensaje });
						self.buttonDisabled = false;
					},
					error: function(error){
						console.log(error);
						notie.alert({ type: error.responseJSON.icono, text: error.responseJSON.mensaje });
						self.buttonDisabled = false;
					}
				});
			},
			updateprod() {
                var self = this;
				axios.get(self.api + 'ajax-inventario.php', {
					params: {
						preprod: 1
					},
                    headers: {
                        'Authorization': `Bearer ${self.jwt}`
                    }
				})
				.then(response => {
					self.inventario = response.data;
				})
				.catch(error => {
					console.log(error);
				});

			},
			color_stock(valor) {
				if(valor <= 10 || valor == null ){
					return 'btn btn-danger'; 
				}else if(valor >= 11 && valor < 20){
					return 'btn btn-warning';
				}else if(valor >= 20){
					return 'btn btn-success';
				}
				return '';
			},
			borrarprod(pid) {
                var self = this;
				notie.confirm({
				  text: '¿Realmente desea <b>eliminar</b>?',
				  cancelCallback: function () {
					notie.alert({ type: 3, text: '¡Cancelado!', time: 2 });
				  },
				  submitCallback: function () {
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							eliminarproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						self.updateprod();
						notie.alert({ type: response.data.icono, text: response.data.mensaje, time: 2 });
					})
					.catch(function (error) {
						notie.alert({ type: error.response.data.icono, text: error.response.data.mensaje, time: 2 });
					});
					
				  }
				})
			},
			duplicarprod(pid) {
                var self = this;
				notie.confirm({
				  text: '¿<b>Duplicar</b> producto?',
				  cancelCallback: function () {
					notie.alert({ type: 3, text: '¡No se duplicó!', time: 2 });
				  },
				  submitCallback: function () {
					axios.get(self.api + 'ajax-inventario.php', {
						params: {
							duplicarproducto: pid
						},
                        headers: {
                            'Authorization': `Bearer ${self.jwt}`
                        }
					})
					.then(function (response) {
						notie.alert({ type: 1, text: '¡Producto duplicado!', time: 2 });
						self.updateprod();
						console.log(response);
					})
					.catch(function (error) {
						notie.alert({ type: 3, text: '¡Hubo un error!', time: 2 });
					});
					
				  }
				})
			},
			redondear(numero) {
				numeroRegexp = new RegExp('\\d\\.(\\d){' + 2 + ',}');   // Expresion regular para numeros con un cierto numero de decimales o mas
				if (numeroRegexp.test(numero)) {         // Ya que el numero tiene el numero de decimales requeridos o mas, se realiza el redondeo
					return Number(numero.toFixed(2));
				} else {
					return Number(numero.toFixed(2)) === 0 ? 0 : numero;  // En valores muy bajos, se comprueba si el numero es 0 (con el redondeo deseado), si no lo es se devuelve el numero otra vez.
				}
			},
			formato: function(num){
				return num.toLocaleString('es-ES');
			}
        },
		created(){
            this.api = useState('api').value;
            this.jwt = useState('jwt').value;
            this.rol = useState('usuario').value.rol;
			this.get_proveedores();
			this.updateprod();
		},
		mounted(){
			this.events();
		},
        beforeUnmount() {
            if ($.fn.DataTable.isDataTable('#example1')) {
                $('#example1').DataTable().destroy();
            }
        },
        computed: {
			enstock() {
				var total = Array.from(this.inventario).reduce(function(accumulator, item) {
					if (item[7]) { 
						var cantidad = parseFloat(item[7]);
						return accumulator + cantidad;
					}
					return accumulator;
				}, 0);
				return total;
			},
			valorstock() {
				var total = Array.from(this.inventario).reduce(function(accumulator, item) {
					if (item[7] && item[9]) {
						var cantidad = parseFloat(item[7]);
                        var precio = parseFloat(item[9]);
						return accumulator + (precio * cantidad);
					}
					return accumulator;
				}, 0);
				return "€ " + this.formatearNumero(total.toFixed(2));
			},
			costostock() {
				var total = Array.from(this.inventario).reduce(function(accumulator, item) {
					if (item[7] && item[8]) {
						var cantidad = parseFloat(item[7]);
                        var precio = parseFloat(item[8]);
						return accumulator + (precio * cantidad);
					}
					return accumulator;
				}, 0);
				return "€ " + this.formatearNumero(total.toFixed(2));
			},
			gananciaestimada() {
                var valorstock = Array.from(this.inventario).reduce(function(accumulator, item) {
					if (item[7] && item[9]) {
						var cantidad = parseFloat(item[7]);
                        var precio = parseFloat(item[9]);
						return accumulator + (precio * cantidad);
					}
					return accumulator;
				}, 0);
                var costostock = Array.from(this.inventario).reduce(function(accumulator, item) {
					if (item[7] && item[8]) {
						var cantidad = parseFloat(item[7]);
                        var precio = parseFloat(item[8]);
						return accumulator + (precio * cantidad);
					}
					return accumulator;
				}, 0);
				var total =  valorstock - costostock;
                return "€ " + this.formatearNumero(total.toFixed(2));
			}
		},
		watch: {
			inventario() {
                var self = this;
				if ($.fn.DataTable.isDataTable('#example1')) {
					var pagina_actual = $('#example1').DataTable().page();
					$('#example1').DataTable().clear().rows.add(this.inventario).draw();
					$('#example1').DataTable().page(pagina_actual).draw('page');
				}
				this.$nextTick(()=> {
				  if (!$.fn.DataTable.isDataTable('#example1')) {
						$("#example1").DataTable({
							"language": {
								"url": "//cdn.datatables.net/plug-ins/1.13.1/i18n/es-ES.json"
							},
							data: self.inventario,
							columns: [
								{ title: 'id' },
								{ title: '#'},
								{ title: 'Nombre', "render": function(data, type, full) { return '<button class="dropdown-item" style="white-space: normal !important;padding: 0;" name="eventproducto" value="'+full[0]+'">'+data+'</button>'}},
								{ title: 'Descripción'},
								{ title: 'Marca'},
								{ title: 'Código'},
								{ title: 'Proveedor', "render": function(data, type, full) { return '<span style="'+full[12]+'" class="btn">'+data+'</span>'},
								visible: (self.rol != 'vendedor')},
								{ title: 'Stock',
								"render": function(data, type, full) { return '<button name="eventstock" value="'+full[0]+'" class="'+self.color_stock(data)+'">'+data+'</button>'}
								},
								{ title: 'Precio de compra',
								"render": function(data, type, full) { return '<button name="eventprecios" value="'+full[0]+'" class="dropdown-item" style="white-space: normal !important;padding: 0;" >€ '+data+'</button>'},
								visible: (self.rol != 'vendedor')},
								{ title: 'Precio de venta', "render": function(data, type, full) { return '<button name="eventprecios" value="'+full[0]+'" class="dropdown-item" style="white-space: normal !important;padding: 0;" >€ '+data+'</button>'}},
								{ title: 'Imagen', "render": function(data, type, full) { 
								var img = (data != null) ? data : 'images/stock.png';
								var img_webp = (full[13] != null) ? full[13] : img;
								return '<picture><source srcset="'+ self.api + img_webp+'" width="40"><source srcset="'+ self.api + img+'" width="40"><img src="'+self.api + img+'" width="40" /></picture>'}},
								{ title: 'Última act.'},
								{ title: 'Opciones',
									data: null,
									orderable: false,
									"render": function(data, type, full) { return `<div class="btn-group">
										<button type="button" class="btn btn-info dropdown-toggle" data-toggle="dropdown">Opciones</button>
										<div class="dropdown-menu" role="menu">
											<button class="dropdown-item" name="eventproducto" value="`+full[0]+`"><i class="far fa-eye mr-2"></i>Ver</button>
											<button class="dropdown-item" name="eventeditar" value="`+full[0]+`"><i class="fas fa-edit mr-2"></i>Editar</button>
											<div class="dropdown-divider"></div>
											<button class="dropdown-item" name="eventduplicar" value="`+full[0]+`"><i class="fas fa-copy mr-2"></i>Duplicar</button>
											<div class="dropdown-divider"></div>
											<button class="dropdown-item" name="eventstock" value="`+full[0]+`"><i class="fas fa-layer-group mr-2"></i>Editar Stock</button>
											<button name="eventprecios" value="`+full[0]+`" class="dropdown-item"  ><i class="fas fa-euro-sign mr-2"></i>Editar Precio</button>
											<div class="dropdown-divider"></div>
											<button name="eventborrar" value="`+full[0]+`" class="dropdown-item"><i class="fas fa-trash-alt mr-2"></i>Borrar</button>
										</div>
									</div>` },
								visible: (self.rol != 'vendedor')}
							],
							createdRow: (row, data, index) => {
								$('td',row).eq(3).addClass('text-center');
								$('td',row).eq(5).addClass('text-center');
								$('td',row).eq(6).addClass('text-center');
								$('td',row).eq(9).addClass('text-center');
								$('td',row).eq(10).addClass('text-center');
								$('td',row).eq(11).addClass('text-center');
							},
						"order":[[0,"desc"]],
						"columnDefs": [
						{   
							"targets": [0],
							"visible": false,
							"searchable": false
						}],
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
							enabled: (self.rol != 'vendedor')
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

<style scope>
@import 'https://cdn.datatables.net/v/bs4/jszip-2.5.0/dt-1.13.1/b-2.3.3/b-colvis-2.3.3/b-html5-2.3.3/b-print-2.3.3/r-2.4.0/datatables.min.css';
.badge2 {
    display: inline-block;
    padding: .25em .4em;
    font-weight: 700;
    text-align: center;
    white-space: nowrap;
    vertical-align: baseline;
    border-radius: .25rem;
    font-size: 20px;
}
.transparente {
    background-color: transparent;
    border-bottom: transparent;
    border-bottom-color: transparent;
    border-color: transparent;
}
.modal {
    overflow-y:auto;
}
</style>