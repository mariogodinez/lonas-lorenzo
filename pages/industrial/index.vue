<script>
const $ = require('jquery')
import Social from '../../components/Social.vue'

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
<transition appear  name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
<div>
	
	<section class="flex flex-center flex-middle" style="width:100vw; height:100vh;" v-if="s">
		<h3 style="font-size:40px;" class="color-green" >Industrial en construcción. . .</h3>
	</section>


  <section class="" style="overflow:hidden;">
    <article class="home flex width100" style="height:100vh">
       <div class="width100">
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
      <article class="home-banner-item" >
        <div class="center-block" style="width:200px">
          <figure class="margin0 width100" >
            <img class="width100" src="lonas-logo.png">
          </figure>
          <div class="margin-bottom10">
            <h2 class="font18 text-center margin0 ">
              
            <router-link to="/industrial" class="color-green">Industrial</router-link>
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
  </div>
</transition>
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
    height: 200px
    width: 100%
    z-index: 10
    &-item
      width: 100%
</style>

