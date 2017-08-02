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
    $('.log')
  }
}
</script>

<template>
  <section class="" style="overflow:hidden; height:100vh;">
    <header class="flex flex-between padding20-0 " style="transition:all .4s;position:absolute; z-index:10; width:65%; right:49vw; background:transparent;" :class="{togglerHeader : activePan}">
      <div style="margin-left:100px;width:200px"></div>
      <figure class="margin0" style="width:200px">
        <img class="width100" src="/logo-bigspan.png">
      </figure>
      <div class="flex flex-middle flex-column" style=" z-index:100;width:200px; margin-right:10px;">
        <Social color="white"></Social>
         <button style="margin-top:7px; " class="center-block my-btn back-green shadow-btn pointer">Descargar Catálogo</button>
      </div>
    </header>
    <img class="width100 height100" src="/proyectos.png" alt="" style="position:absolute; top:0;">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">

          <article class="padding0-20 height100 flex flex-center flex-middle" style="position:absolute; top:0;">
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <h4 class="color-green text-uppercase center-block" style="width:82%;">Proyectos
                </h4>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Fachadas</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Recintos deportivos</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Recintos feriales</span>
                  </h4>
                </article>
                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Proyectos especiales</span>
                  </h4>
                </article>
                
            </div>
            <div class="widthHalf">
              <h4 class="color-green text-uppercase" style="opacity:0;" >.
                </h4>
                 <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Centros Comerciales</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">ESTRUCTURAS
NEUMÁTICAS</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">HANGARES Y
AEROPUERTOS</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">RESIDENCIAL
Y HOTEL</span>
                  </h4>
                </article>
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
          <h4 class="margin0 color-white text-center">¿Tienes un proyecto <br> de menos de 600m? </h4>
          <button class="pointer center-block shadow-btn my-btn back-green" style="margin-top:8px; width:100px">
            <span class="color-white">Click aquí</span>
          </button>
        </div>
        <div class="margin0-20">
          <h4 class="text-center margin0 color-white font15">©2017 Big Span Structures todos los derechos reservados.
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

