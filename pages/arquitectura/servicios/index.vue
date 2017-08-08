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
      if (this.showItem < 6) {
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
      return this.showItem * 100 / 6
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
    <img class="width100 height100" src="/servicios.png" alt="" style="position:absolute; top:0;">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">

          <article class="padding0-20 height100 flex flex-center flex-middle" style="position:absolute; top:0;">
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <h4 class="margin0 color-green text-uppercase">SERVICIOS
                </h4>
                
                <p class="text-justify margin10-0">
                  <strong>Big Span / Lonas Lorenzo</strong>  es un aliado que ofrece soluciones
                360°.
                </p>

                <p class="text-justify margin10-0">
                 Todos estos años dentro de la misma industria han
                hecho que la empresa sea fuerte en cada uno de los
                eslabones de la cadena de valor en la arquitectura
                textil. Atiende necesidades puntuales o participa en el
                ciclo completo de los proyectos.
                </p>
               <p class="text-justify margin0">
                 La misma compañía ofrece servicios de asistencia técnica,
                diseño arquitectónico e ingeniería estructural y
                de membrana; fabricación de estructura y membrana;
                instalación, mantenimiento y reciclaje.
               </p>
               <div class="margin-top20">
                 <article class="color-white servicesItemsLeft flex flex-middle">

                   <div  style="width:25px">
                     <h1 class="margin0 font20">1</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Project Managment</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Gerencia de proyectos</h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsLeft flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">2</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">TECHNICAL ASSISTANCE</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Asistencia Técnica</h3>
                   </div>
                 </article>
                 <article class="color-white servicesItemsLeft flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">3</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">ARCHITECTURAL DESIGN</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Diseño arquitectónico</h3>
                   </div>
                 </article>
                 <article class="color-white servicesItemsLeft flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">4</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">3d modeling</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Modelado 3d</h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsLeft flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">5</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">WIND TUNNEL TEST
</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">TÚNEL DE VIENTO</h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsLeft flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">6</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">THERMAL SOLAR ANALYSIS</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Estudio TÉRMICO Y ASOLEAMIENTO </h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsLeft flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">7</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">FINITE ELEMENT ANALYSIS</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Diseño Estructural</h3>
                   </div>
                 </article>
                 
               </div>
            </div>
            <div class="widthHalf">
              <div style="visibility:hidden;">
                <h4 class="margin0 color-green text-uppercase">SERVICIOS
                </h4>
                
                <p class="text-justify margin10-0">
                  <strong>Big Span / Lonas Lorenzo</strong>  es un aliado que ofrece soluciones
                360°.
                </p>

                <p class="text-justify margin10-0">
                 Todos estos años dentro de la misma industria han
                hecho que la empresa sea fuerte en cada uno de los
                eslabones de la cadena de valor en la arquitectura
                textil. Atiende necesidades puntuales o participa en el
                ciclo completo de los proyectos.
                </p>
               <p class="text-justify margin0">
                 La misma compañía ofrece servicios de asistencia técnica,
                diseño arquitectónico e ingeniería estructural y
                de membrana; fabricación de estructura y membrana;
                instalación, mantenimiento y reciclaje.
               </p>
            </div>
               <div class="margin-top20">
                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">8</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">MECHANICAL DESIGN</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Diseño mecánico</h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">9</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">ACCESORIES DESIGN</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Diseño de accesorios</h3>
                   </div>
                 </article>
                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">10</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">STEEL FABRICATION</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Fabricación de estructuras</h3>
                   </div>
                 </article>
                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">11</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">MEMBRANE FABRICATION</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Confección de membrana</h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">12</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase" style="font-size:.65em;">STEEL ERECTION & MEMBRANE INSTALLATION</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase" style="font-size:.65em;">MONTAJE DE ESTRUCTURA Y DE MEMBRANA </h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">13</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Maintenance</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Mantenimiento</h3>
                   </div>
                 </article>

                 <article class="color-white servicesItemsRight flex flex-middle">
                   <div class="" style="width:25px">
                     <h1 class="margin0 font20">14</h1>
                   </div>
                     
                   <div class="padding-left10" style="border-left:1px solid white;">
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Reciclyng</h3>
                     <h3 class="margin0 servicesItemsLeft-text text-uppercase">Reciclaje</h3>
                   </div>
                 </article>
                 
               </div>
            </div>
            </section>
          </article>
           <div style="bottom:17px; position:absolute; left:27%;">
          
           <BarPercent></BarPercent>
        </div>
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
.servicesItemsLeft
  background: #5a7381
  margin-bottom: 5px
  padding: 7px
  height: 1.8em
  &-text
    font-size: .8em
  &:nth-child(odd)
    background: #1a4052

.servicesItemsRight
  background: #1a4052 
  margin-bottom: 5px
  height: 1.8em
  padding: 7px
  &-text
    font-size: .8em
  &:nth-child(odd)
    background: #5a7381
</style>

