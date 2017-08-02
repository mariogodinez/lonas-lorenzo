<script type="text/javascript">
  export default {
    data () {
      return {
        count: 5
      }
    },
    props: ['percent'],
    computed: {
      currentPercent () {
        if (this.percent) {
          return this.percent
        } else {
          return 100
        }
      }
    }
  }
</script>

<template>
  <section>
    <div class="percent center-block">
      <div class="percent-circle" :style="{left : (percent - 9) + '%'}" v-if="percent"></div>
      <article class="percent-bar back-green" :style="{width : percent + '%'}"></article>
    </div>
  </section>
</template>

<style lang="sass">
.percent
  width: 300px
  height: 10px
  border-radius: 10px
  background: #999
  position: relative
  &-bar
    height: 100%
    border-radius: 10px
    transition: .4s

  &-circle
    width: 17px
    height: 17px
    border-radius: 50%
    background: white
    position: absolute
    transition: .4s
    top: -6px
    left: 9%
    border: 2px solid #10CFBD

</style>
