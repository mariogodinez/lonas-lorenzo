<script>
const $ = require('jquery')
import Social from '../../components/Social.vue'
import Menu from '../../components/Menu.vue'

export default {
  data () {
    return {
      name: 'mario',
      lang: 'spanish',
      currentImg: 1,
      slideImages: [
        {
          id: 1,
          name: '/slider1.png'
        },
        {
          id: 2,
          name: '/slider2.png'
        },
        {
          id: 3,
          name: '/slider3.png'
        },
        {
          id: 4,
          name: '/slider4.png'
        }
      ]
    }
  },
  components: {
    Social,
    Menu
  },
  methods: {
    changeLang (val) {
      this.lang = val
      console.log($('.home'))
    },
    nextImg () {
      if (this.currentImg < this.slideImages.length) {
        this.currentImg ++
      }
    },
    beforeImg () {
      if (this.currentImg > 1) {
        this.currentImg --
      }
    },
    changeSlider (id) {
      this.currentImg = id
    }
  },
  created () {
    let self = this
    let count
    setInterval(function () {
      count = Math.floor(Math.random() * self.slideImages.length)
      self.currentImg = count + 1
    }, 3000)
  }
}
</script>

<template>
  <section class="" style="overflow:hidden;">
    <Menu></Menu>
    <header class="flex flex-between width100 padding20-0" style="position:absolute; z-index:10;">
      <div style="margin-left:100px;width:200px"></div>
      <figure class="margin0" style="width:200px">
        <img class="width100" src="logo-bigspan.png">
      </figure>
      <div class="flex flex-middle flex-column" style="margin-right:100px;width:200px">
        <Social color="white"></Social>
         <button style="margin-top:7px; " class="center-block my-btn back-green shadow-btn pointer">Descargar Catálogo</button>
      </div>
    </header>
    <article class="home flex width100" style="height:100vh; overflow:hidden">
      <div class="width100" >
        <transition-group name="custom-classes-transition"
      enter-active-class="animated fadeIn"
      leave-active-class="animated fadeOut">
          <img class="width100 height100" v-for="item in slideImages" v-if="item.id == currentImg" :src="item.name" alt="" :key="item.id" style="position:absolute; top:0;">
        </transition-group>
      </div>
    </article>
    
    <footer class="home-footer padding10-0 width100 flex flex-middle flex-between">
      <article class="flex flex-middle" style="margin-left:68px">
        <div class="flex flex-column flex-center" style="position:relative; top:-20px">
          <h4 class="margin0 color-white text-center">¿Tienes un proyecto <br> de menos de 600m? </h4>
          <button class="pointer center-block shadow-btn my-btn back-green" style="margin-top:8px; width:100px">
            <span class="color-white">Click aquí</span>
          </button>
        </div>
        <div class="margin0-20">
          <h4 class="text-center margin0 color-white font15">©2017 Big Span Structures todos los derechos reservados. </h4>
        </div>
        
      </article>
      <article class="slide-actions flex flex-column flex-middle" style="margin-right:150px; position:relative; top:-20px">
        <div class="color-white flex">
           <div @click="beforeImg" class="margin5 pointer rounded square20 flex border1white flex-middle flex-center">
                <span class="fa fa-chevron-left" style="font-size:.7em; margin-right:2px; margin-top:1px;"></span>
            </div>
            <div @click="nextImg" class="margin5 pointer rounded square20 flex border1white flex-middle flex-center">
              <span class="fa fa-chevron-right" style="font-size:.7em; margin-left:2px; margin-top:1px;"></span>
            </div>
        </div>
        <section class="flex">
          <div class="slide-actions-item pointer" v-for="i in slideImages" :class="{slideActive : i.id == currentImg}" @click="changeSlider(i.id)"></div>
        </section>
        
      </article>
    </footer>
  </section>
</template>
<style lang="sass">
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

