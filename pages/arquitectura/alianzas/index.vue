<script>
const $ = require('jquery')
import Social from '../../../components/Social.vue'
import Menu from '../../../components/Menu.vue'
import BarPercent from '../../../components/BarPercent.vue'

export default {
  data () {
    return {
      activePan: true,
      showItem: 1
    }
  },
  components: {
    Social,
    Menu,
    BarPercent
  },
  methods: {
    toggleActivePan () {
      this.activePan = !this.activePan
    },
    nextShow () {
      if (this.showItem < 3) {
        this.showItem ++
      }
    },
    beforeShow () {
      if (this.showItem > 1) {
        this.showItem --
      }
    }
  },
  computed: {
    currentPercent () {
      return this.showItem * 100 / 3
    }
  },
  created () {
    let self = this
    setTimeout(function () {
      self.toggleActivePan()
    }, 500)
    $('.log')
  }
}
</script>

<template>
  <section class="" style="overflow:hidden; height:100vh;">
    <header class="flex flex-between padding20-0 " style="transition:all .4s;position:absolute; z-index:10; width:65%; right:49vw; background:transparent;" :class="{togglerHeader : activePan}">
      <div style="margin-left:100px;width:200px"></div>
      <figure class="margin0" style="width:200px">
        <img class="width100" src="/bigspan-white.png">
      </figure>
      <div class="flex flex-middle flex-column" style=" z-index:100;width:200px; margin-right:10px;">
        <Social color="white"></Social>
         <button style="margin-top:7px; " class="center-block my-btn back-green shadow-btn pointer">Descargar Catálogo</button>
      </div>
    </header>
    <img class="width100 height100" src="/alianzas.png" alt="" style="position:absolute; top:0;">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">
        
      <section class="width100" style="overflow:hidden;">
        <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight" class="relative">
          <article class="padding0-20 flex flex-column flex-center height100" style="position:absolute; top:0;" v-if="showItem == 1" key="1">
            
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <h4 class="color-green text-uppercase">Alianzas
                </h4>
               
                <p class="text-justify margin0">
                  <strong>Lonas Lorenzo Big Span Structures </strong> mantienen las
                  alianzas con otras compañías del extranjero que le
                  permiten ofrecer un servicio puntual y de calidad en
                  proyectos fuera de casa. Entre las compañías aliadas
                  se encuentran: 
                </p>

                <figure>
                  <img src="dwr.coo">
                </figure>

                <h4 class="margin0">
                  Crearquitectura:
                </h4>
                <p class="text-justify margin0">
                  Con sede en la ciudad de Guatemala, Crearquitectura
                  desarrolla proyectos de arquitectura ligera desde el
                  año 2009 con el respaldo de Serge Ferrari y Lonas
                  Lorenzo. La empresa ha ganado una excelente reputación
                  en todo Centroamérica, donde es líder en la construcción
                  de tensoestructuras para residencias, hoteles,
                  centros de convenciones y comerciales.  
                </p>

                <figure>
                  <img src="dwr.coo">
                </figure>

                <h4 class="margin0">
                  Tent Module: 
                </h4>
                <p class="text-justify margin0">
                  Nuestra aliada europea se ubica en Kiev, Ucrania
                  donde ofrece los servicios integrales de arquitectura
                  basada en membranas textiles.  
                </p>


              </div>
              <div class="widthHalf">
                <figure>
                  <img src="dwr.coo">
                </figure>

                <h4 class="margin0">
                  Sobresaliente Tensoestructuras: 
                </h4>
                <p class="text-justify margin0">
                  Opera desde Montevideo, Uruguay, donde se involucra
                  en todas las etapas de los proyectos con membranas
                  arquitectónicas: su equipo de ingenieros y arquitectos
                  está capacitado para diseñar, proyectar y coordinar la
                  realización de grandes coberturas, desarrollos a la
                  medida y fachadas textiles.  
                </p>

                <figure>
                  <img src="dwr.coo">
                </figure>

                <h4 class="margin0">
                  Sky Cleaners: 
                </h4>
                <p class="text-justify margin0">
                  Empresa mexicana con una trayectoria de más de 10
                  años de experiencia en servicio de limpieza de alturas
                  utilizando las técnicas rope-acces; gracias a su cumplimiento
                  de los lineamientos de las certificaciones <strong>RATA</strong>  y
                   <strong>SPRAT</strong> y la implementación de alta tecnología y el uso
                  de materiales biodegradables, se convierte en un aliado de
                  <strong>Lonas Lorenzo Big Span Structures </strong> para proveer el mantenimiento
                  adecuado que las estructuras y las cubiertas con
                  membrana requieren con cierta temporalidad.
                </p>

              </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 2" key="2">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <figure>
                  <img src="dwr.coo">
                </figure>

                <h4 class="margin0">
                  Eventstar: 
                </h4>
                <p class="text-justify margin0">
                  En Estados Unidos,  <strong>Eventstar</strong> se ha consolidado como
                  un proveedor de peso para las industrias del entretenimiento
                  y las convenciones corporativas pues se
                  especializa en el diseño, la manufactura, la instalación
                  y el reciclado de coberturas de gran calado para proyectos
                  efímeros. La participación de  <strong>Eventstar</strong> también
                  ha sido fundamental en situaciones de emergencias
                  y en sitios o eventos que requieren de cubiertas
                  con especificaciones especiales. 
                </p>

                <figure>
                  <img src="dwr.coo">
                </figure>

                <h4 class="margin0">
                  Wacker Ingenieure / Wind Ingeneering
                  (Túnel de viento): 
                </h4>
                <p class="text-justify margin0">
                  Compañía alemana especializada en servicios técnicos
                  y científicos para la medición con túnel de viento
                  de las fuerzas aerodinámicas y las corrientes de aire al
                  interior de los proyectos arquitectónicos. En su cartera
                  de proyectos se cuentan estadios olímpicos y sedes
                  FIFA, rascacielos, puentes, entre otros.
                </p>

               
              </div>
              <div class="widthHalf">
                <figure class="margin0 width100">
                  <img class="margin0 width100" src="/nosotros-text.png">
                </figure>
              </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 3" key="3">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >

                <h4 class="text-uppercase color-green">
                  Asociaciones
                </h4>
                <p class="text-justify margin0">
                  El éxito de Lonas Lorenzo en el mercado global se
                  debe, en buena medida, a una filosofía corporativa
                  basada en el impulso a la colaboración, la transferencia
                  de conocimientos y tecnologías, así como el apoyo
                  entre compañías líderes de todo el mundo.
                  Lonas Lorenzo es miembro activo de:
                </p>

                 <figure>
                    <img src="dwr.coo">
                  </figure>

                <h4 class="margin0">
                  Fabric Structures Association (FSA): 
                </h4>
                <p class="text-justify margin0">
                  Antes conocida como <strong>Lightweight Structures Association
                  (LSA)</strong>, FSA representa a compañías de todo el
                  mundo que proveen textiles estructurales y productos
                  relacionados a usuarios finales. El objetivo de la FSA
                  es incentivar el uso de textiles estructurales como materiales
                  de alta viabilidad entre la comunidad de
                  arquitectos. FSA es una división de la Industrial
                  Fabrics Association International (IFAI).
                </p>

                
              </div>
            <div class="widthHalf">
              <figure>
                  <img src="dwr.coo">
                </figure>

              <p class="text-justify margin0">
                Industrial Fabrics Association International (IFAI):
                IFAI es la asociación mercantil que representa al
                sector de los textiles industriales a escala global. IFAI
                genera eventos, publicaciones, servicios educativos,
                redes de trabajo, recursos útiles para la creación de
                negocios, consultorías legales y más.
              </p>

              <figure>
                  <img src="dwr.coo">
                </figure>

              <h4 class="margin0">
                 Tensinet:
              </h4>
              <p class="text-justify margin0">
                
                Asociación multidisciplinaria que reúne y sirve a todos
                los involucrados en la construcción de tensoestructuras.
                Tensinet produce bases de datos, publicaciones,
                newsletters y reuniones anuales que involucran a empresas
                de manufactura, productores de materia
                prima, ensambladores, oficinas de arquitectura e
                ingeniería, así como instituciones académicas.
              </p>

            </div>
            </section>
          </article>
          
        </transition>
        </section>

        <div style="bottom:19px; position:absolute; left:27%;">
          <div class="color-gray flex flex-center flex-middle">
              Anterior
             <div  class="margin5 pointer rounded square20 flex border1gray flex-middle flex-center" @click="beforeShow">
                  <span class="fa fa-chevron-left" style="font-size:.7em; margin-right:2px; margin-top:1px;"></span>
              </div>
              <div class="margin5 pointer rounded square20 flex border1gray flex-middle flex-center" @click="nextShow">
                <span class="fa fa-chevron-right" style="font-size:.7em; margin-left:2px; margin-top:1px;"></span>
              </div>
              Siguiente
          </div>
           <BarPercent :percent="currentPercent"></BarPercent>
        </div>
      </section>
      
      
      <div class="square35 pointer flex flex-middle flex-center back-green rounded shadow-btn border1white" style="position:absolute; top:45vh; left:-20px" @click="toggleActivePan">
        <span class="fa fa-chevron-right color-white font20" v-show="!activePan" style="margin-left:3px;"></span>
        <span class="fa fa-chevron-left color-white font20" v-show="activePan" style="margin-right:3px;"></span>
      </div>
    </article>
    
    <footer class="home-footer padding10-0 width100 flex flex-middle flex-between">
      <article class="flex flex-middle" style="margin-left:90px">
        <div class="flex flex-column flex-center" style="position:relative; top:-20px">
          <h4 class="margin0 color-white text-center" style="text-shadow:0 0 3px #000;">¿Necesitas una <br> cotización?</h4>
          <button class="pointer center-block shadow-btn my-btn back-green" style="margin-top:8px; width:100px">
            <span class="color-white">Click aquí</span>
          </button>
        </div>
        <div class="margin0-20">
          <h4 class="text-center margin0 color-white font15" style="text-shadow:0 0 3px #000;">©2017 Big Span Structures & Lonas Lorenzo todos los derechos reservados.
          </h4>
        </div>
      </article>
    </footer>
  </section>
</template>
<style lang="sass">
.togglerHeader
  width: 100% !important
  right: 6% !important
.togglerAside
  width: 50vw !important
  right: 0 !important

.slide-actions
  &-item
    border: 2px solid 
    padding: 1px
    width: 5px
    height: 5px
    border-radius: 50%
    margin: 5px
    color: white
.slideActive
  background: #10CFBD
  color: #10CFBD
.textActive
  text-decoration: underline
.home
  z-index: 1
  .option
    width: 50%
.home-footer
  position: absolute
  bottom: 0
  right: 0
  width: 100%
  z-index: 10
  height: 50px
.home-banner
  position: absolute
  bottom: 50px
  right: 0
  height: 200px
  width: 100%
  z-index: 10
  &-item
    width: 100%
</style>

