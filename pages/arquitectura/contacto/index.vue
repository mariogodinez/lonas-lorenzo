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
    <img class="width100 height100" src="/contacto.png" alt="" style="position:absolute; top:0;">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.8); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">
          <article class="padding0-20 height100 width100 flex flex-center flex-middle" style="position:absolute; top:0;">
            <section class="flex flex-center width100" style="font-size:.9em;">
              <div class="" style="width:41%; margin-right:40px;">
                <h4 class="margin0 color-green text-uppercase">
                  Contácto
                </h4>
                <p>Nos encantaría saber de ti. ¡escríbenos!</p>
                <div class="width100 margin-bottom15">
                  <input type="text" class="my-input border0" name="" placeholder="Nombre">
                </div>

                <div class="width100 margin-bottom15">
                  <input type="text" class="my-input border0" name="" placeholder="Compañia">
                </div>
                <div class="width100 margin-bottom15">
                  <input type="text" class="my-input border0" name="" placeholder="E-mail">
                </div>

                <div class="width100 margin-bottom15">
                  <input type="text" class="my-input border0" name="" placeholder="Teléfono">
                </div>

                <div class="width100 margin-bottom15">
                  <h4 class="margin0">Cuantos metros tiene su proyecto?</h4>
                  <div class="width100 flex" style="margin-left:12px;">
                    <input type="checkbox" name="">
                    <p class="margin0" style="font-size:.9em;">De 100 a 500 metros cuadrados</p>
                  </div>
                  <div class="width100 flex" style="margin-left:12px;">
                    <input type="checkbox" name="">
                    <p class="margin0" style="font-size:.9em;">De 600 a más de 6,000 metros cuadrados</p>
                  </div>
                </div>


                <div class="width100 margin-bottom15">
                  <textarea rows="8"  class="my-input border0" name="" placeholder="Dudas o Comentarios"></textarea>
                </div>

                <div class="width100 margin-bottom15 flex flex-middle">
                  <input type="checkbox" name="">
                  <p class="margin0" style="font-size:.9em;">He leído y acepto el  <span class="color-green">aviso de privacidad.</span></p>
                </div>

                <div class="margin-bottom15 center-block">
                  <button class="width100 border0 back-green color-white" style="margin-left:5px; font-size:1.1em; padding:.5em .8em;">
                    Enviar
                  </button>
                </div>

              
              </div>
              <div class="flex flex-center">
                <article class="margin-right15">
                  <div class="margin-bottom15">
                    <h5 class="margin0">Cuidad de méxico</h5>
                    <h5 class="margin0 color-middlegray">Lago Alberto 319</h5>
                    <h5 class="margin0 color-middlegray">Punto Polanco, 6to piso</h5>
                    <h5 class="margin0 color-middlegray">Col. Granada, 11520,</h5>
                    <h5 class="margin0 color-middlegray">Cd. de México</h5>
                    <h5 class="margin0">T. +52 55 4124 0654</h5>
                    <div style="height:10px;"></div>

                    <figure style="width:120px; height:85px;background:#888;" class="margin0">
                      <img src="mapa.com" class="height100 width100" >
                    </figure>
                  </div>

                  <div class="margin-bottom15">
                    <h5 class="margin0">ESTUDIO DE DISEÑO <br>
MÉXICO</h5>
                    <h5 class="margin0 color-middlegray">Av. 8 de Julio 1297, <br>
Col. Moderna</h5>
                    
                    <h5 class="margin0 color-middlegray">Guadalajara, Jal, 44190</h5>
                    <h5 class="margin0">T. +52 33 3650 3541</h5>
                    <div style="height:10px;"></div>
                    <figure style="width:120px; height:85px;background:#888;" class="margin0">
                      <img src="mapa.com" class="height100 width100" >
                    </figure>
                  </div>

                  <div class="margin-bottom15">
                    <h5 class="margin0">MANUFACTURA MÉXICO</h5>
                    <h5 class="margin0 color-middlegray">Carretera <br>
Guadalajara-Ameca</h5>
                    <h5 class="margin0 color-middlegray">Km. 26.4, C.P. 45300</h5>
                    
                    
                    <div style="height:10px;"></div>

                    <figure style="width:120px; height:85px;background:#888;" class="margin0">
                      <img src="mapa.com" class="height100 width100" >
                    </figure>
                  </div>
                </article>

                <article>
                  <div class="margin-bottom15">
                    <h5 class="margin0">Houston</h5>
                    <h5 class="margin0 color-middlegray">3663 North Sam <br>
Houston Pkwy</h5>
                    
                    <h5 class="margin0 color-middlegray">E, #600 Houston, <br>
Texas, 77032.</h5>
                    <h5 class="margin0">T. +1 832 234 4029</h5>
                    <div style="height:10px;"></div>

                    <figure style="width:120px; height:85px;background:#888;" class="margin0">
                      <img src="mapa.com" class="height100 width100" >
                    </figure>
                  </div>

                  <div class="margin-bottom15">
                    <h5 class="margin0">ESTUDIO DE DISEÑO <br>
USA</h5>
                    <h5 class="margin0 color-middlegray">1566 N Meadowcrest Blvd <br>
Crystal River FL, 34429</h5>
                    <h5 class="margin0">T. +1 352 419 4890</h5>
                    <h5 class="margin0 color-middlegray" style="opacity:0;">.</h5>
                    
                    
                    <div style="height:10px;"></div>

                    <figure style="width:120px; height:85px;background:#888;" class="margin0">
                      <img src="mapa.com" class="height100 width100" >
                    </figure>
                  </div>

                  <div class="margin-bottom15">
                    <h5 class="margin0">MANUFACTURA USA</h5>
                    <h5 class="margin0 color-middlegray">8150-B NW 90th <br>
St. Medley,</h5>
                    <h5 class="margin0 color-middlegray">Florida, 33166</h5>
                    
                    
                    <div style="height:10px;"></div>

                    <figure style="width:120px; height:85px;background:#888;" class="margin0">
                      <img src="mapa.com" class="height100 width100" >
                    </figure>
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

