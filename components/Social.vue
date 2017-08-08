<script type="text/javascript">
  export default {
    props: ['color'],
    computed: {
      currentColor () {
        if (this.color) {
          return this.color
        }
      }
    }
  }
</script>
<template>
  <section class="flex flex-center social">

    <a class="color-gray" href="https://www.facebook.com/BigSpanStructures/" target="_blank" style="text-decoration:none;">
      <div class="margin-right5 social-item square30 rounded flex flex-center flex-middle" style="border:1px solid;" :style="{color: color}">
        <span class="fa fa-facebook color-gray" :class="{'color-white' : color == 'white' }"></span>
      </div>
    </a>
    
    <a class="color-gray" href="https://twitter.com/bigspanllc?lang=es" target="_blank" style="text-decoration:none;">
      <div class="margin-right5 social-item square30 rounded flex flex-center flex-middle" style="border:1px solid;" :style="{color: color}">
        <span class="fa fa-twitter color-gray" :class="{'color-white' : color == 'white' }"></span>
      </div>
    </a>
     <a class="color-gray" href="https://www.instagram.com/bigspanllc/" target="_blank" style="text-decoration:none;">
      <div class="square30 social-item rounded flex flex-center flex-middle" style="border:1px solid;" :style="{color: color}">
        <span class="fa fa-instagram color-gray" :class="{'color-white' : color == 'white' }"></span>
      </div>
    </a>
  </section>
</template>

<style lang="sass">
.social
  margin: 0
  .social-item
    &:hover
      cursor: pointer
      border-color: #10cfbd !important
      .fa
        color: #10cfbd !important
      
</style>

