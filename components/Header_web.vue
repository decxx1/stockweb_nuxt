<template>
    <!-- ======= Header ======= -->
    <header id="header" class="fixed-top d-flex align-items-center" :class="{ 'header-transparent': isRoot }">
        <div class="container d-flex align-items-center justify-content-between">
    
          <div class="logo">
            <a href="./"><img src="/assets/img/logo2.png" alt="logo de stock web" class="img-fluid"></a>
          </div>
    
          <nav id="navbar" class="navbar">
            <ul>
              <li class="dropdown"><a :class="{ 'active': isRoot }" href="/"><span>Inicio</span> <i class="fas fa-chevron-down"></i></a>
                <ul>
                  <li><a href="#caracteristicas">Características</a></li>
                  <li><a href="#precios">Precios</a></li>
                  <li><a href="#faq">Preguntas Frecuentes</a></li>
                </ul>
              </li>
              <li><a class="nav-link scrollto" :class="{ 'active': isContact }"  href="/contacto">Contacto</a></li>
                  <li><a class="get-a-quote" href="/login">Entrar</a></li>
            </ul>
            <i class="mobile-nav-toggle fas fa-bars"></i>
          </nav><!-- .navbar -->
    
        </div>
      </header><!-- End Header -->
      </template>
  
      <script>
    
        export default {
            data() {
              return {
                isRoot: false,
                isContact: false
              };
            },
            mounted() {
              this.$nextTick(()=> {
                document.querySelector('#preloader').remove()
                const select = (el, all = false) => {
                  el = el.trim()
                  if (!el) {
                    return null;
                  }
                  if (all) {
                    return [...document.querySelectorAll(el)]
                  } else {
                    return document.querySelector(el)
                  }
                }
                /**
                 * Easy event listener function
                 */
                const on = (type, el, listener, all = false) => {
                  let selectEl = select(el, all)
                  if (selectEl) {
                    if (all) {
                      selectEl.forEach(e => e.addEventListener(type, listener))
                    } else {
                      selectEl.addEventListener(type, listener)
                    }
                  }
                }
                /**
                 * Easy on scroll event listener 
                 */
                const onscroll = (el, listener) => {
                  el.addEventListener('scroll', listener)
                }
                /**
                 * Navbar links active state on scroll
                 */
                let navbarlinks = select('#navbar .scrollto', true)
                const navbarlinksActive = () => {
                  let position = window.scrollY + 200
                  navbarlinks.forEach(navbarlink => {
                    if (!navbarlink.hash) return
                    let section = select(navbarlink.hash)
                    if (!section) return
                    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
                      navbarlink.classList.add('active')
                    } else {
                      navbarlink.classList.remove('active')
                    }
                  })
                }
                window.addEventListener('load', navbarlinksActive)
                onscroll(document, navbarlinksActive)
                /**
                 * Scrolls to an element with header offset
                 */
                const scrollto = (el) => {
                  let header = select('#header')
                  let offset = header.offsetHeight
    
                  if (!header.classList.contains('header-scrolled')) {
                    offset -= 20
                  }
    
                  let elementPos = select(el).offsetTop
                  window.scrollTo({
                    top: elementPos - offset,
                    behavior: 'smooth'
                  })
                }
                /**
                 * Toggle .header-scrolled class to #header when page is scrolled
                 */
                let selectHeader = select('#header')
                if (selectHeader) {
                  const headerScrolled = () => {
                    if (window.scrollY > 100) {
                      selectHeader.classList.add('header-scrolled')
                    } else {
                      selectHeader.classList.remove('header-scrolled')
                    }
                  }
                  window.addEventListener('load', headerScrolled)
                  onscroll(document, headerScrolled)
                }
                /**
                 * Back to top button
                 */
                let backtotop = select('.back-to-top')
                if (backtotop) {
                  const toggleBacktotop = () => {
                    if (window.scrollY > 100) {
                      backtotop.classList.add('active')
                    } else {
                      backtotop.classList.remove('active')
                    }
                  }
                  window.addEventListener('load', toggleBacktotop)
                  onscroll(document, toggleBacktotop)
                }
                /**
                 * Mobile nav toggle
                 */
                on('click', '.mobile-nav-toggle', function(e) {
                  select('#navbar').classList.toggle('navbar-mobile')
                  this.classList.toggle('fa-bars')
                  this.classList.toggle('fa-times')
                })
                /**
                 * Scrool with ofset on links with a class name .scrollto
                 */
                on('click', '.scrollto', function(e) {
                  if (select(this.hash)) {
                    e.preventDefault()
    
                    let navbar = select('#navbar')
                    if (navbar.classList.contains('navbar-mobile')) {
                      navbar.classList.remove('navbar-mobile')
                      let navbarToggle = select('.mobile-nav-toggle')
                      navbarToggle.classList.toggle('fa-bars')
                      navbarToggle.classList.toggle('fa-times')
                    }
                    scrollto(this.hash)
                  }
                }, true)
                /**
                 * Scroll with ofset on page load with hash links in the url
                 */
                  if (window.location.hash) {
                    if (select(window.location.hash)) {
                      scrollto(window.location.hash)
                    }
                  }
                  this.isRoot = window.location.pathname === '/';
                  this.isContact = window.location.pathname === '/contacto';
                
              });
            }
           
        }
      </script>
      <style scoped>
      /*--------------------------------------------------------------
# Header
--------------------------------------------------------------*/
#header {
  height: 80px;
  transition: all 0.5s;
  z-index: 997;
  transition: all 0.5s;
  background: var(--color-primary-rgb);
}

#header.header-transparent {
  background: transparent;
}

#header.header-scrolled {
  background: var(--color-primary-rgb);
  height: 60px;
}

#header .logo h1 {
  font-size: 28px;
  margin: 0;
  padding: 0;
  line-height: 1;
  font-weight: 700;
}

#header .logo h1 a,
#header .logo h1 a:hover {
  color: #fff;
  text-decoration: none;
}

#header .logo img {
  padding: 0;
  margin: 0;
  max-height: 55px;
}
      .navbar {
  padding: 0;
}

.navbar ul {
  margin: 0;
  padding: 0;
  display: flex;
  list-style: none;
  align-items: center;
}

.navbar li {
  position: relative;
}

.navbar a,
.navbar a:focus {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0 10px 30px;
  font-size: 17px;
  font-weight: 500;
  font-family: "Poppins", sans-serif;
  color: rgba(255, 255, 255, 0.7);
  white-space: nowrap;
  transition: 0.3s;
}

.navbar a i,
.navbar a:focus i {
  font-size: 12px;
  line-height: 0;
  margin-left: 5px;
}

.navbar>ul>li>a:before {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 3px;
  left: 30px;
  background-color: var(--color-terceary);
  visibility: hidden;
  width: 0px;
  transition: all 0.3s ease-in-out 0s;
}

.navbar a:hover:before,
.navbar li:hover>a:before,
.navbar .active:before {
  visibility: visible;
  width: 25px;
}

.navbar a:hover,
.navbar .active,
.navbar .active:focus,
.navbar li:hover>a {
  color: #fff;
}

.navbar .dropdown ul {
  display: block;
  position: absolute;
  left: 30px;
  top: calc(100% + 30px);
  margin: 0;
  padding: 10px 0;
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
  transition: 0.3s;
  border-radius: 4px;
}

.navbar .dropdown ul li {
  min-width: 200px;
}

.navbar .dropdown ul a {
  padding: 10px 20px;
  font-size: 14px;
  font-weight: 500;
  text-transform: none;
  color: var(--color-terceary);
}

.navbar .dropdown ul a i {
  font-size: 12px;
}

.navbar .dropdown ul a:hover,
.navbar .dropdown ul .active:hover,
.navbar .dropdown ul li:hover>a {
  color: var(--color-secondary);
}

.navbar .dropdown:hover>ul {
  opacity: 1;
  top: 100%;
  visibility: visible;
}

.navbar .dropdown .dropdown ul {
  top: 0;
  left: calc(100% - 30px);
  visibility: hidden;
}

.navbar .dropdown .dropdown:hover>ul {
  opacity: 1;
  top: 0;
  left: 100%;
  visibility: visible;
}

@media (max-width: 1366px) {
  .navbar .dropdown .dropdown ul {
    left: -90%;
  }

  .navbar .dropdown .dropdown:hover>ul {
    left: -100%;
  }
}
.navbar .get-a-quote,
  .navbar .get-a-quote:focus {
    background: var(--color-secondary);
    padding: 8px 20px;
    margin-left: 100px;
    border-radius: 4px;
    color: #fff;
  }

  .navbar .get-a-quote:hover,
  .navbar .get-a-quote:focus:hover {
    color: #fff;
    background: var(--color-secondary-hover);
  }
  .navbar .get-a-quote:hover:before,
	.navbar li:hover>.get-a-quote:before {
	  visibility: hidden;
	}

  @media (max-width: 1279px) {
    .navbar .get-a-quote,
	  .navbar .get-a-quote:focus {
		background: var(--color-secondary);
		padding: 8px 20px;
		border-radius: 4px;
		margin: 15px;
		color: #fff;
	  }
	   .navbar .get-a-quote:hover,
	  .navbar .get-a-quote:focus:hover {
		color: #fff;
		background: var(--color-secondary-hover);
	  }
  }
/**
* Mobile Navigation 
*/
.mobile-nav-toggle {
  color: #fff;
  font-size: 26px;
  cursor: pointer;
  display: none;
  line-height: 0;
  transition: 0.5s;
  margin-right: 10px;
}

@media (max-width: 991px) {
  .mobile-nav-toggle {
    display: block;
  }

  .navbar ul {
    display: none;
  }
}
.navbar-mobile {
  position: fixed;
  overflow: hidden;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: rgba(1, 3, 91, 0.9);
  transition: 0.3s;
  z-index: 999;
}

.navbar-mobile .mobile-nav-toggle {
  position: absolute;
  top: 25px;
  right: 20px;
}

.navbar-mobile ul {
  display: block;
  position: absolute;
  top: 55px;
  right: 15px;
  bottom: 15px;
  left: 15px;
  padding: 10px 0;
  border-radius: 8px;
  background-color: #fff;
  overflow-y: auto;
  transition: 0.3s;
}

.navbar-mobile>ul>li>a:before {
  left: 20px;
}

.navbar-mobile a,
.navbar-mobile a:focus {
  padding: 10px 20px;
  font-size: 15px;
  color: var(--color-primary);
}

.navbar-mobile a:hover,
.navbar-mobile .active,
.navbar-mobile li:hover>a {
  color: black;
}

.navbar-mobile .getstarted,
.navbar-mobile .getstarted:focus {
  margin: 15px;
}

.navbar-mobile .dropdown ul,
.navbar-mobile .dropdown .dropdown ul {
  position: static;
  display: none;
  margin: 10px 20px;
  padding: 10px 0;
  z-index: 99;
  opacity: 1;
  visibility: visible;
  background: #fff;
  box-shadow: 0px 0px 30px rgba(127, 137, 161, 0.25);
}

.navbar-mobile .dropdown ul li,
.navbar-mobile .dropdown .dropdown ul li {
  min-width: 200px;
}

.navbar-mobile .dropdown ul a,
.navbar-mobile .dropdown .dropdown ul a {
  padding: 10px 20px;
}

.navbar-mobile .dropdown ul a i,
.navbar-mobile .dropdown .dropdown ul a i {
  font-size: 12px;
}

.navbar-mobile .dropdown ul a:hover,
.navbar-mobile .dropdown ul .active:hover,
.navbar-mobile .dropdown ul li:hover>a,
.navbar-mobile .dropdown .dropdown ul a:hover,
.navbar-mobile .dropdown .dropdown ul .active:hover,
.navbar-mobile .dropdown .dropdown ul li:hover>a {
  color: var(--color-secondary);
}

.navbar-mobile .dropdown>.dropdown-active,
.navbar-mobile .dropdown .dropdown>.dropdown-active {
  display: block;
}
      </style>
    