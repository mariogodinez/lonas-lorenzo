<script>
const $ = require('jquery')
import Social from '../../../components/Social.vue'
import Menu from '../../../components/Menu.vue'
import BarPercent from '../../../components/BarPercent.vue'

export default {
  data () {
    return {
      activePan: true,
      showItem: 1,
      showBlock: '',
      selfItem: 'none',
      showGallery: false,
      proyectos: [{
        name: 'fachadas',
        img: 'sdd.com',
        items: [
          {
            name: 'pabellón',
            img: 'sds.com'
          },
          {
            name: 'Asej',
            img: 'sds.com'
          },
          {
            name: 'Cinemex morelia',
            img: 'sds.com'
          },
          {
            name: 'Sanirent',
            img: 'sds.com'
          }
        ]
      }, {
        name: 'Centros Comerciales',
        img: 'sdd.com',
        items: [
          {
            name: 'pabellón',
            img: 'sds.com'
          }
        ]
      }
      ]

    }
  },
  components: {
    Social,
    Menu,
    BarPercent
  },
  methods: {
    changeShow (value) {
      if (value === '') {
        this.selfItem = 'none'
      }
      this.showBlock = value
      this.selfItem = 'none'
    },
    changeSelf (value) {
      this.selfItem = value
    },
    toggleActivePan () {
      this.activePan = !this.activePan
    },
    nextShow () {
      if (this.showItem < 6) {
        this.showItem ++
      }
    },
    changeShowGallery () {
      this.showGallery = !this.showGallery
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
    <section class="width100 height100 flex flex-middle flex-center" style="position:absolute; top:0; left:0; z-index:200000000; background:rgba(255,255,255,.8);"v-if="showGallery" >
      
      <div class="back-white relative" style="width:80%; height:88%;">

        <article class="square35 pointer flex flex-middle flex-center back-green rounded  border1white" style="position:absolute; top:-18px; right:-18px" @click="changeShowGallery">
          <span class="fa fa-times color-white" style="margin-left:1px; font-size:21px;"></span>
        </article>
        <div  class="square35 pointer flex flex-middle flex-center back-green rounded border1white" style="position:absolute; top:48%; left:-15px">
            <span class="fa fa-chevron-left color-white" style="font-size:18px; margin-right:2px; margin-top:1px;"></span>
        </div>
        <div  class="square35 pointer flex flex-middle flex-center back-green rounded border1white" style="position:absolute; top:48%; right:-15px">
          <span class="fa fa-chevron-right color-white" style="font-size:18px; margin-left:2px; margin-top:1px;"></span>
        </div>
        <figure class="margin0 width100 height100">
          <img class="width100 height100" src="/slider4.png">
        </figure>
        <h4 class="text-uppercase width100 color-white back-green margin0 padding15-0" style="position:absolute; bottom:-5px;">
           <span style="margin-left:20px;">PABELLÓN / 2015 / MÉXICO</span>
        </h4>
      </div>
    </section>
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
    <img class="width100 height100" src="/proyectos.png" alt="" style="position:absolute; top:0;">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" >
          <article class="padding0-20 height100 flex flex-center flex-middle" style="position:absolute; top:0;" v-if="showBlock == ''">
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <h4 class="color-green text-uppercase center-block" style="width:82%;">Proyectos
                </h4>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('fachadas')">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Fachadas</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('recintos deportivos')">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Recintos deportivos</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('')">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Recintos feriales</span>
                  </h4>
                </article>
                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('')">
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
                 <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('')">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">Centros Comerciales</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('')">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">ESTRUCTURAS
NEUMÁTICAS</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('')">
                  <figure class="width100 margin0">
                    <img src="/servicios.png" class="width100">
                  </figure>
                  <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                  
                  <span class="margin-left10">HANGARES Y
AEROPUERTOS</span>
                  </h4>
                </article>

                <article class=" relative center-block margin-bottom10 pointer" style="width:82%;" @click="changeShow('')">
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
        <div class="square35 pointer flex flex-middle flex-center back-green rounded shadow-btn border1white" style="position:relative; top:45vh; left:-20px" @click="toggleActivePan">
        <span class="fa fa-chevron-right color-white font20" v-show="!activePan" style="margin-left:3px;"></span>
        <span class="fa fa-chevron-left color-white font20" v-show="activePan" style="margin-right:3px;"></span>
      </div>
  </section>

       <article class="padding0-20 height100 flex flex-middle" style="position:absolute; top:-20px;" v-if="showBlock == 'fachadas' && selfItem == 'none'">
            <section class="width100 margin10px" style="font-size:.9em;">

                <h4 class="color-green text-uppercase" style="margin-left:50px;">{{showBlock}}</h4>
                <div class="flex flex-middle flex-wrap flex-center">
                  <article v-for="item in proyectos[0].items" class=" relative center-block margin10-20 pointer" @click="changeSelf(item)">
                    <figure class="margin0" style="width:200px; height:200px;">
                      <img src="/servicios.png" class="width100 height100">
                    </figure>
                    <h4 class="margin0 width100 text-uppercase color-white padding10-0 " style="position:absolute; bottom:15px; left:0; background:rgba(26, 64, 82, 0.7);">
                    <span class="margin-left10 text-uppercase">{{item.name}}</span>
                    </h4>
                  </article>
                </div>
                 
            </section>

          </article>
          

          <article class="padding0-20 height100 width100 flex flex-middle" style="position:absolute; top:-20px;" v-show="selfItem != 'none'">
            <section class="width100 margin10px flex flex-center" style="font-size:.9em;">
                

                <div class="" style="width:41%;margin-right:40px;">
                  <h4 class="margin0 color-green text-uppercase">
                    proyectos/{{showBlock}}
                  </h4>
                  <h1 class="margin0 font20 text-uppercase color-middlegray">{{selfItem.name}}</h1>
                  <div style="margin-top:30px;">
                    <h4 class="margin0">
                      Locación: <span class="color-middlegray">Jalisco, México</span>
                    </h4>

                    <h4 class="margin0">
                      Superficie: <span class="color-middlegray">2,034 m</span>
                    </h4>
                    <h4 class="margin0">
                      Material: <span class="color-middlegray">Serge Ferrari Soltis FT 381 - 3108</span>
                    </h4>
                    <h4 class="margin0">
                      Diseño: <span class="color-middlegray">Estudio de diseño Lonas Lorenzo</span>
                    </h4>
                    <h4 class="margin0">
                      Gerenciadora: <span class="color-middlegray">Galerías Pabellón</span>
                    </h4>
                    <h4 class="margin0">
                      Fecha: <span class="color-middlegray">2015</span>
                    </h4>
                  </div>

                  <div class="width100 margin20 flex flex-center">
                    <button style="margin-top:7px; font-size:11px; width:150px;" class="center-block my-btn back-green shadow-btn pointer" @click="changeShowGallery">ver galería</button>
                  </div>
                   
                </div>

                <div class="" style="width:41%;">
                  <figure class="width100 height100 margin0">
                    <img  class="width100 height100"src="/nosotros-text2.png">
                  </figure>
                </div>
            </section>

          </article>
          

           <div style="bottom:17px; position:absolute; left:27%;">
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
            <button style="margin-top:7px; font-size:11px; right:-80px; top:-15px; position:absolute;" class="center-block my-btn back-green shadow-btn pointer" @click="changeShow('')" v-if="showBlock != ''">Volver al menu de proyéctos</button>

            <button style="margin-top:7px; font-size:11px; left:-80px; top:-15px; position:absolute;" class="center-block my-btn back-green shadow-btn pointer" @click="changeShow(showBlock)" v-if="showBlock != '' && selfItem != 'none'">Volver al menu de {{showBlock}}</button>
          </div>
        </div>
      </article>



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

