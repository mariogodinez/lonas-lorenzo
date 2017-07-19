<script>
const $ = require('jquery')
import Social from '../components/Social.vue'

export default {
  data () {
    return {
      name: 'mario',
      lang: 'spanish'
    }
  },
  components: {
    Social
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
    <article class="home flex width100" style="height:100vh">
      <div class="option">
        <img class="width100 height100" src="intro-left.png" alt="">
      </div>

      <div class="option">
        <img class="width100 height100" src="intro-right.png" alt="">
      </div>
    </article>
    <div class="languages flex padding5 flex-center" style="position: absolute; top:20px; right:100px; border-radius:18px; z-index:10;">
      <p class="margin0 font18 color-white pointer" :class="{textActive : lang == 'spanish'}" style="padding-right:7px;border-right:1px solid white;" @click="changeLang('spanish')">
        español
      </p>
      <p class="margin0 font18 color-white pointer" style="padding-left:7px;" :class="{textActive : lang == 'english'}" @click="changeLang('english')">
        english
      </p>
    </div>

    <section class="width100 back-white home-banner flex padding20-0 flex-center">
      <article class="home-banner-item flex  flex-right" style="padding-right:3px; border-right: 3px solid gray; ">
        <div style="margin-right:80px; width:200px">
          <figure class="margin0 width100 relative" style="right:20px">
            <img class="width100" style="" src="logo-bigspan.png">
          </figure>
          <div class="margin-bottom10">
            <h2 class="font18 text-center margin0 ">
              
            <router-link to="/arquitectura" class="color-green">Arquitectura textil</router-link>
            </h2>
          </div>
          <Social></Social>
        </div>
      </article>
      <article class="home-banner-item">
        <div  style="margin-left:80px;width:200px; margin-top:20px">
          <figure class="margin0 width100" >
            <img class="width100" src="lonas-logo.png">
          </figure>
          <div class="margin-bottom10 margin-top10">
            <h2 class="font18 text-center margin0" >
              
            <router-link to="/industrial" style="color:#597280;">Industrial</router-link>
            </h2>
          </div>
          <Social></Social>
        </div>
      </article>
    </section>
    
    <footer class="home-footer width100 flex flex-center flex-middle">
      <h4 class="text-cente margin0 color-white">©2017 Lonas Lorenzo todos los derechos reservados.</h4>
    </footer>
  </section>

</template>
<style lang="sass">
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
    height: 180px
    width: 100%
    z-index: 10
    &-item
      width: 50%
</style>

