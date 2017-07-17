<script>
const $ = require('jquery')
import Social from '../../components/Social.vue'
import Menu from '../../components/Menu.vue'

export default {
  data () {
    return {
      name: 'mario',
      lang: 'spanish'
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
    }
  }
}
</script>

<template>
  <section class="" style="overflow:hidden;">
    <Menu></Menu>
    <header class="flex flex-between width100 padding20-10" style="position:absolute">
      <div style="margin-left:100px;width:200px"></div>
      <figure class="margin0" style="width:200px">
        <img class="width100" src="bigspan-logo.png">
      </figure>
      <div class="flex flex-middle flex-column" style="margin-right:100px;width:200px">
        <Social></Social>
         <button style="margin-top:7px; " class="center-block my-btn back-green shadow-btn pointer">Descargar catalogo</button>
      </div>
    </header>
    <article class="home flex width100" style="height:100vh">
      <div class="width100">
        <img class="width100 height100" src="home-bigspan1.png" alt="">
      </div>
    </article>
    
    <footer class="home-footer padding10 width100 flex flex-middle flex-between">
      <div style="margin-left:100px">
        <h4 class="text-cente margin0 color-white">©2017 Lonas Lorenzo todos los derechos reservados. </h4>
      </div>
      <article class="slide-actions flex flex-column flex-middle" style="margin-right:150px">
        <div class="color-white flex">
           <div class="margin5 rounded square20 flex border1white flex-middle flex-center">
                <span class="fa fa-chevron-left" style="font-size:.7em; margin-right:2px; margin-top:1px;"></span>
            </div>
            <div class="margin5 rounded square20 flex border1white flex-middle flex-center">
              <span class="fa fa-chevron-right" style="font-size:.7em; margin-left:2px; margin-top:1px;"></span>
            </div>
        </div>
        <section class="flex">
          <div class="slide-actions-item" v-for="i in 4"></div>
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
    &:first-child
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

