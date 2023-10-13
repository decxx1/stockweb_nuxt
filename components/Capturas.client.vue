<template>
    <section id="gallery" class="gallery">
        <div class="container">
      
          <div class="section-title" data-aos="fade-up">
            <h2>Galería</h2>
            <p>Algunas capturas</p>
          </div>
      
          <div class="row g-0" data-aos="fade-left">
      
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-delay="100">
                <a href="/assets/img/gallery/inventario.jpg" class="gallery-lightbox">
                  <img loading="lazy" src="/assets/img/gallery/thumb_inventario.jpg" alt="inventario y gestión de stock" class="img-fluid">
                </a>
              </div>
            </div>
      
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-delay="150">
                <a href="/assets/img/gallery/recibo.jpg" class="gallery-lightbox">
                  <img loading="lazy" src="/assets/img/gallery/thumb_recibo.jpg" alt="recibo en pdf" class="img-fluid">
                </a>
              </div>
            </div>
      
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-delay="200">
                <a href="/assets/img/gallery/clientes.jpg" class="gallery-lightbox">
                  <img loading="lazy" src="/assets/img/gallery/thumb_clientes.jpg" alt="crear clientes" class="img-fluid">
                </a>
              </div>
            </div>
      
            <div class="col-lg-3 col-md-4">
              <div class="gallery-item" data-aos="zoom-in" data-aos-delay="250">
                <a href="/assets/img/gallery/historial.jpg" class="gallery-lightbox">
                  <img loading="lazy" src="/assets/img/gallery/thumb_historial.jpg" alt="captura de historial" class="img-fluid">
                </a>
              </div>
            </div>
          </div>
      
        </div>
      </section><!-- End Gallery Section -->
      </template>

<script>
    
    export default {
        async mounted(){
            const { default: GLightbox } = await import('glightbox')
            await import('glightbox/dist/css/glightbox.css')
            const galleryLightbox = GLightbox({
                selector: '.gallery-lightbox'
            });
            galleryLightbox.reload();
        }
    }
</script>