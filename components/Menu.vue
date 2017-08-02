<script type="text/javascript">
  import $ from 'jquery'
  export default {
    methods: {
      inicio () {
        this.$router.push('/arquitectura')
      },
      activeMenu () {
        $('.toggleDownPlay').slideToggle(200)
        setTimeout(function () {
          $('.toggleDownMenu').slideToggle(200)
        }, 300)
      }
    },
    mounted () {
      let self = this
      setTimeout(function () {
        self.activeMenu()
      }, 200)
    }
  }
</script>



<template>
  <section>
    <nav class="nav">
      <div id="burger-menu" class="flex flex-middle">
        <div class="square30 back-green pointer border1white rounded flex flex-center flex-middle" @click="activeMenu">
          <span class="fa fa-bars color-white"></span>
        </div>
        <h4 class="margin0 color-white">
          <span class="margin-left10" style="text-shadow: 0 0 5px #000;">menú</span>
        </h4>
      </div>
      <div id="play-circle" class="toggleDownPlay back-green border1white rounded square20 flex flex-middle flex-center" style="display:none;">
        <span class="fa fa-play color-white" style="font-size:.7em; margin-left:2px;"></span>
      </div>
      <ul class="nav-list hide toggleDownMenu" style="font-size:.9em;">
        
        <li class="nav-list-item">
          <a @click="inicio()" class="pointer">inicio</a> 
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/nosotros">nosotros</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/proyectos">proyectos</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/servicios">servicios</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/alianzas">alianzas</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/premios">premios</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/clientes">clientes</router-link>
        </li>
        <li class="nav-list-item">
          <router-link to="/arquitectura/contacto">contácto</router-link>
        </li>
      </ul>
      <div class="line"></div>
    </nav>
  </section>
</template>

<style lang="sass">
.nav
  height: 100vh
  position: absolute
  margin-left: 30px
  border-left: 4px solid white
  z-index: 100
  #burger-menu
    position: relative
    left: -18px
    margin-top: 30px

  #play-circle
    position: relative
    left: -13px
    top: 7px
  &-list
    background: transparent
    list-style: none
    padding: 0
    position: absolute
    top: 55px
    left: 23px
    &-item
      color: white
      a
        color: white
        font-size: 1.2em
        text-decoration: none
        text-shadow: 0 0 3px #000

</style>

