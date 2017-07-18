
<script>

export default {
  data () {
    return {
      name: 'mario'
    }
  },
  components: {
  }
}
</script>



<template>
  <section class="" >
    <article class="home flex width100" style="height:100vh; overflow:hidden;">
      <div class="option shadowBox">
        <article class="width100 height100" style="position:absolute; overflow:hidden;">
          <img class="width100 height100"src="http://www.lonaslorenzo.com.mx/a/sites/default/files/Slide004.jpg" alt="">
        </article>
      </div>

      <div class="option">
        <article class="width100 height100" style="position:absolute; overflow:hidden;">
          <img class="width100 height100" src="http://www.lonaslorenzo.com.mx/a/sites/default/files/styles/galeria_proyecto_grande/public/fotos_proyectos/Estadio-Elias-003.jpg?itok=KBrJZxjM" alt="">
        </article>
      </div>
    </article>
    <div class="languages flex padding5 flex-center" style="position: absolute; top:20px; right:100px; border-radius:18px; z-index:10;">
      <p class="margin0 font18 color-white" style="padding-right:7px;border-right:1px solid white;">
        español
      </p>
      <p class="margin0 font18 color-white" style="padding-left:7px;">
        english
      </p>
    </div>
    <section class="width100 back-white home-banner flex padding20-0">
      <article class="home-banner-item flex flex-right" style="padding-right:3px;border-right: 3px solid gray;">
        <div class="margin0">Arquitectura textil</div>

      </article>
      <article class="home-banner-item">
        <div class="margin0" >industrial</div>

      </article>
    </section>

    <footer class="home-footer width100 flex flex-center flex-middle">
      <h4 class="text-cente margin0">©2017 Lonas Lorenzo todos los derechos reservados.</h4>
    </footer>
  </section>
</template>
<style lang="sass">


.home
  position: relative
  z-index: 1
  .option
    width: 50%
    transition: .7s
    cursor: pointer
    &:hover
      width: 100%

.home-footer
  position: absolute
  bottom: 0
  right: 0
  width: 100%
  z-index: 10
  height: 60px
.home-banner
  position: absolute
  bottom: 60px
  right: 0
  height: 250px
  width: 100%
  z-index: 10
  &-item
    width: 50%
</style>

