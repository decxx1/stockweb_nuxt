<template>
    <div class="content-wrapper">
        <section class="content-header">
            <div class="container-fluid">
                <div class="app-page-title">
                    <div class="page-title-wrapper">
                        <div class="page-title-heading">
                            <div class="page-title-icon">
                                <i class="fas fa-home icon-gradient"></i>
                            </div>
                            <div>
                                <h4 style="margin-bottom:0;">Inicio</h4>
                                <div class="page-title-subheading">Podrá ver el estado de su cuenta y realizar el pago del programa</div>
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
			<div class="row">
				<div class="col-lg-12">
					<div class="card card-info card-outline">
						<div class="card-header">
							<h3 class="card-title">Estado de la cuenta</h3>
							<div class="card-tools">
								<button type="button" class="btn btn-tool" data-card-widget="collapse"><i class="fas fa-minus"></i>
								</button>
							</div>
						</div>
						<div class="card-body">
							<div class="row">
								<div class="col-lg-4">
									<div class="info-box" :class="estado_color">
									  <span class="info-box-icon "><i :class="estado_icono"></i></span>
									  <div class="info-box-content">
										<span class="info-box-text">Estado</span>
										<span class="info-box-number">{{ estado_pago }}</span>
									  </div>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="info-box" :class="estado_color">
									  <span class="info-box-icon"><i class="far fa-calendar-check"></i></span>
									  <div class="info-box-content">
										<span class="info-box-text">Último pago</span>
										<span class="info-box-number">{{estado_fecha }}</span>
									  </div>
									</div>
								</div>
								<div class="col-lg-4">
									<div class="info-box" :class="estado_color">
									  <span class="info-box-icon"><i class="fas fa-hourglass-half"></i></span>
									  <div class="info-box-content">
										<span class="info-box-text">Vencimiento</span>
										<span class="info-box-number">{{estado_vencimiento}}</span>
									  </div>
									</div>
								</div>
							</div>
						</div>

					</div>
				</div>
			</div>
			<div class="row justify-content-between">
				<div class="col-lg-4 col-md-6">
					<!-- Pago -->
					<div class="card card-primary card-outline">
					  <div class="card-body box-profile">

						<h3 class="profile-username text-center">Sistema Stock Web</h3>

						<p class="text-muted text-center">Completo</p>

						<ul class="list-group list-group-unbordered mb-3">
						  <li class="list-group-item">
							<b>Precio</b> <a class="float-right">$7.500</a>
						  </li>
						  <li class="list-group-item">
							<b>Extender</b> <a class="float-right">+30 Días</a>
						  </li>
						  <li class="list-group-item text-center">
							Cada vez que realices un pago, sumará 30 días a tu cuenta. Es acumulable
						  </li>
						</ul>

						<div id="payButton" class="text-center" style="height: 38px;"></div>
					  </div>
					  <!-- /.card-body -->
					</div>
				</div>
				<div class="col-lg-4 col-md-6">
                <!-- DIRECT CHAT -->
                <div class="card card-primary card-outline direct-chat direct-chat-gradient-light">
                  <div class="card-header">
                    <h3 class="card-title">Comunicados<i class="far fa-list-alt ml-2"></i></h3>

                    <div class="card-tools">
                      <button type="button" class="btn btn-tool" data-card-widget="collapse">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <!-- /.card-header -->
                  <div class="card-body" style="height: 298px;">
                    <!-- Conversations are loaded here -->
                    <div class="direct-chat-messages" style="height:inherit !important">
                      <template v-if="comunicados">
                        <div class="direct-chat-msg right" v-for="comunicado in comunicados" :key="comunicado.id">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-timestamp float-left">{{ comunicado.fecha }}</span>
                          </div>
                          <!-- /.direct-chat-infos -->
                          <img class="direct-chat-img" src="/app/images/mini_logo-blanco.jpg" >
                          <!-- /.direct-chat-img -->
                          <div class="direct-chat-text" v-html="comunicado.mensaje"></div>
                          <!-- /.direct-chat-text -->
                        </div>
                      </template>
                    </div>
                  </div>
                </div>
              </div>
			</div>
			<div class="card card-primary card-outline">
			  <div class="card-body box-profile">
				<div class="mb-2 text-center" >
					<picture >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/mercado-pago.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/mercado-pago.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/mercado-pago.jpg" alt="Mercado Pago" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/visa.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/visa.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/visa.jpg" alt="Visa" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/mastercard.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/mastercard.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/mastercard.jpg" alt="Mastercard" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/american-express.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/american-express.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/american-express.jpg" alt="American Express" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/naranja.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/naranja.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/naranja.jpg" alt="Naranja" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/maestro.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/maestro.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/maestro.jpg" alt="Maestro" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/cabal.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/cabal.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/cabal.jpg" alt="Cabal">
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/nativa.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/nativa.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/nativa.jpg" alt="Nativa" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/argencard.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/argencard.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/argencard.jpg" alt="Argencard" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/tarjeta-shopping.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/tarjeta-shopping.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/tarjeta-shopping.jpg" alt="Tarjeta Shopping" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/cencosud.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/cencosud.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/cencosud.jpg" alt="Cencosud" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/diners-club.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/diners-club.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/diners-club.jpg" alt="Diners Club" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/pago-facil.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/pago-facil.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/pago-facil.jpg" alt="Pago fácil" >
					</picture>
					<picture>
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/rapipago.webp" >
						<source class="medio-pago mr-2 mt-2" srcset="/assets/img/medios/rapipago.jpg" >
						<img class="medio-pago mr-2 mt-2" src="/assets/img/medios/rapipago.jpg" alt="Rapipago" >
					</picture>
				</div>
				<ul>
					<li>Para pagar se utiliza el sistema de cobros de MercadoPago lo cual lo hace un sistema seguro para poner su tarjeta y sus datos.</li>
					<li>Puede pagar con tarjeta de crédito, débito o dinero en MercadoPago.</li>
					<li>El sistema de stock estará disponible para utilizar cuando MercadoPago notifique el pago aprobado (es automático)</li>
					<li>Si ya pagaste un mes y quieres renovar antes de que se venza, se te sumará el tiempo restante al nuevo mes que estás pagando.</li>
					<li>Si se te vence el pago <b>NO</b> se borrará tu inventario, clientes, proveedores, ventas etc... se conservan hasta que vuelva a estar al día con el pago.</li>
				</ul>
			  </div>
			</div>
		</div>
	</section>
</div>
</template>

<script setup>
definePageMeta({
	middleware: ['init', 'inicio'],

});

import { loadMercadoPago } from "@mercadopago/sdk-js"

</script>
<script>
export default {
    data(){
        return {
            preference: "",
			mp:null,
            comunicados: {},
            estado_pago: "",
            estado_fecha: "",
            estado_vencimiento: "",
            estado_color: "",
            estado_icono: ""
        }
    },
	methods: {
		async initMercadoPago() {
			var self = this;
			const publicKey = "APP_USR-27c10cda-224d-4e63-9837-a2b32d8352fc";
			const preferenceId = this.preference;
			console.log(this.preference)
			var payButton = document.getElementById('payButton');
			var button = payButton.querySelector('button');
			if (button) {
				payButton.removeChild(button);
			}
			await loadMercadoPago();
			const mp = new window.MercadoPago(publicKey, {
				locale: "es-AR",
			});
			mp.checkout({
				preference: {
					id: preferenceId,
				},
				render: {
					container: '#payButton',
					label: 'Pagar'
				},
			})
			
		}
	},
    async created(){
		const api = useState('api').value;
		const jwt = useState('jwt').value;
		const response2 = await fetch(api+'ajax-varios.php?get_comunicados=1', {
			headers: {
			'Authorization': `Bearer ${jwt}`
			}
		});
		const comunicados = await response2.json();
		this.preference = useState('preference_id').value;
		this.comunicados = comunicados;
		const estados = useState('estados').value;
		this.estado_pago = estados.estado_pago;
		this.estado_fecha = estados.estado_fecha;
		this.estado_vencimiento = estados.estado_vencimiento;
		this.estado_color = estados.estado_color
		this.estado_icono = estados.estado_icono;
        
    },
	mounted(){
		this.initMercadoPago();
	}
}
</script>

<style scoped>
	.medio-pago {
		border-radius: 8px;
		height:47px;
		transition: 1s ease-in opacity;
	}
	.medio-pago:hover {
	  border: 1px solid #999;
	}
	@media only screen and (max-width: 900px) {
		.medio-pago {
			height:39px !important;
		}
	}
</style>