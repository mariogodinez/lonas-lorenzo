

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
    <img class="width100 height100" src="/clientes.png" alt="" style="position:absolute; top:0;">
    
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">
        
      <section class="width100" style="overflow:hidden;">
      	<article class="padding20">
      		<h4 class="text-uppercase color-green ">Clientes</h4>
      	</article>
      	
        <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight" class="relative">
          <article class="padding0-20 flex flex-column flex-center height100" style="position:absolute; top:0;" v-if="showItem == 1" key="1">
            <section class="flex flex-between" style="font-size:.9em;">
              	<div class="widthHalf margin-right25" >
              
            	</div>
	            <div class="widthHalf">
	              
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

