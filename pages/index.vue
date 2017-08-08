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
  },
  created () {
    // $('body').on('click', function () {
    //   alert('intro')
    // })
  }
}
</script>

<template>

  <section class="" style="">
    <article class="home flex width100" style="height:100vh">
      <div class="option left moveLeft pointer" id="introLeft">
        <router-link to="./arquitectura" class="color-green">
          <img class="width100 height100vh" src="aquitectura.jpg" alt="" style="">
        </router-link>
      </div>

      <div class=" option right moveRight pointer" id="introRight">
        <router-link to="./industrial" class="color-green">
          <img class="height100vh width100" src="industrial.jpg" alt="" style="">
        </router-link>
      </div>
    </article>
    <div class="languages flex padding5 flex-center" style="position: absolute; top:20px; z-index:500; right:100px; border-radius:18px;">
      <p class="margin0 font18 color-white pointer" :class="{textActive : lang == 'spanish'}" style="padding-right:7px;border-right:1px solid white;" @click="changeLang('spanish')">
        español
      </p>
      <p class="margin0 font18 color-white pointer" style="padding-left:7px;" :class="{textActive : lang == 'english'}" @click="changeLang('english')">
        english
      </p>
    </div>


    <section class="width100 back-white home-banner flex padding20-0 flex-center">
      <article class="home-banner-item flex  flex-right relative" style="padding-right:3px; border-right: 3px solid gray; ">
        <div style="margin-right:80px; width:200px">
          <figure class="margin0 width100 relative" style="right:20px">
            <img class="width100" style="" src="/logo-bigSpan.png">
          </figure>
          <div class="margin-bottom10">
            <h2 class="font18 text-center margin0 ">
            <router-link to="./arquitectura" class="color-green">Arquitectura textil</router-link>
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
      <h4 class="text-cente margin0 color-white">©2017 Big Span Structures & Lonas Lorenzo todos los derechos reservados.</h4>
    </footer>
  </section>

</template>
<style lang="sass">
  // .moveRight
  //   width: 100%
  //   position: absolute
  //   transition: .5s
  //   right: -50%
  //   &:hover
  //     right: -20%

  .textActive
    text-decoration: underline
  .home
    z-index: 1
    .option
      width: 100%
      position: absolute
      transition: .5s
      cursor: pointer
      box-shadow: 0 0 20px #000
    .option.left
      left: -50%
      z-index: 10
      &:hover
        left: -10%
        z-index: 15

    .option.right
      right: -50%
      z-index: 10
      &:hover
        right: -10%
        z-index: 15
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
    z-index: 100
    &-item
      width: 50%
</style>

