<script type="text/javascript">
</script>

<template>

  <div>
  <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" type="text/css" href="https://daneden.github.io/animate.css/animate.min.css">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,700,800" rel="stylesheet">
  <transition appear  name="custom-classes-transition"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <nuxt/>
  </transition>
  </div>
</template>

<style lang="sass">

.nuxt-link-active
  color: #10cfbd !important
.back-darkblue
  background: #1a4052
.color-middlegray
  color: #3d6475
.hide
  display: none
body
  color: #000 !important
  margin: 0
  padding: 0
  font-family: 'Montserrat', arial
  font-size: 15px
.content
  max-width: 1100px
  margin: 0 auto !important
  padding: 10px
.languages
  background: #10cfbd
  width: 170px

.pointer
  cursor: pointer

.oddBold:nth-child(odd)
  font-weight: bold

.anchor
  text-decoration: underline
  cursor: pointer
  &:hover
    text-decoration: none

.anchor-simple
  text-decoration: underline
  cursor: pointer

.deslised
  opacity: 0
  top: 50px !important
.font-normal
  font-weight: normal !important

.mask
  width: 100%
  height: 100%
  position: absolute
  left: 0
  top: 0
.mask-transparent
  background: transparent

.cleared
  position: relative
  z-index: 4
.borderAnchor
  border-bottom: 2px solid yellow
  cursor: pointer
  line-height: 0 !important
  &:hover
    border-bottom: 2px solid transparent
.border1white
  border: 1px solid white
.my-badge
  background: #fff
  border: 1px solid #ccc
  margin: 8px 11px
  width: 37px
  height: 37px
.my-badge-flex
  background: #fff
  border: 1px solid #ccc
  margin: 8px 11px
  padding: 10px 30px
  border: 1px solid #eadddd
.my-btn
  padding: 6px 1em
  color: #fff
  border-radius: 20px
  font-size: .9em
  transition: .2s
  outline: 0
  border: 0
  &:active
    box-shadow: 0 0 0  !important
    transform: scale(.95)

button.fixed
  border-top: 0 !important
  border-left: 0 !important
  border-right: 0 !important

.shadow-inset
   -moz-box-shadow: inset 0 0 10px
   -webkit-box-shadow: inset 0 0 10px
   box-shadow: inset 0 0 10px #000

.icon-circled
  width: 40px !important
  height: 40px !important
  border-radius: 50%
  border: 2px solid yellow
  font-size: 28px

.my-btn-flex
  padding: .4em .8em
  border: 0
  outline: 0
  font-size: 1.1em
  width: 100%
  border-radius: .3em

.my-input
  width: 100%
  border: 2px solid #f1f1f1
  outline: 0
  padding: .4em
  font-size: 1.15em
  transition: .3s
  border-radius: .2em
  background: #fff
  color: #333
  &:focus
    border-color: yellow

.my-input-file
  position: relative
  color: white
  margin: 0px auto
  width: 150px
  text-align: center
  input
    opacity: .1
    top: 0
    left: 0
    z-index: -1
    position: absolute
  label
    width: 100%
    height: 100%
    display: block
    padding: 10px 0
    margin: 0 !important
    cursor: pointer


.border2
  border: 2px solid !important
.border-btn
  border-bottom: 3px inset rgba(0,0,0, .3) !important
  cursor: pointer
  &:active
    border-bottom: 0px inset transparent !important
    transform: scale(.97)

.my-select
  position: relative
  background: gray
  select
     -webkit-appearance: none
     -moz-appearance: none
     appearance: none
     border: 0
     background: transparent
     width: 100%
     min-height: 50px
     color: #fff
     padding-left: .8em
     position: relative
     z-index: 3
       font-size: 1.2em
     cursor: pointer
     option
         color: gray
         font-size: 1.2em
         padding: .8em !important
  &-icon
    position: absolute
    right: 15px
    z-index: 2
    font-size: 23px
    top: 11px
    color: white !important

.my-container
  max-width: 500px
  padding-left: 15px !important
  padding-right: 15px !important
  margin-left: auto
  margin-right: auto

.center-block
  margin-right: auto
  margin-left: auto

.color-lightgray
  color: lightgray

.color-gray
  color: gray
.color-green
  color: #10cfbd

.border0
  border: 0 !important

.margin-top10
  margin-top: 10px
.margin-top15
  margin-top: 15px

.margin-bottom5
  margin-bottom: 5px
.margin-bottom25
  margin-bottom: 25px

.margin0
  margin: 0 !important
.margin20
  margin: 20px
.margin20-0
  margin: 20px 0
.margin10
  margin: 10px

.margin10-20
  margin: 10px 20px

.margin5
  margin: 5px

.margin-top0
  margin-top: 0 !important
.margin-top20
  margin-top: 20px !important
.marginP
  margin: 0 0 5px 0 !important

.margin20-0
  margin: 20px 0
.margin0-20
  margin: 0 20px

.margin0-5
  margin: 0 5px

.margin20-10
  margin: 20px 10px

.margin-right15
  margin-right: 15px

.margin-left25
  margin-left: 25px
.margin-left15
  margin-left: 15px
.margin-left5
  margin-left: 5px

.margin-right10
  margin-right: 10px
.border2white
  border: 2px solid white !important

.border2gray
  border: 2px solid lightgray !important

.border1gray
  border: 1px solid lightgray !important

.margin-right25
  margin-right: 25px

.margin-left50
  margin-left: 50px !important

.margin-left5
  margin-left: 5px
.margin-left10
  margin-left: 10px !important

.margin-top50
  margin-top: 50px !important

.margin-top30
  margin-top: 30px !important


.margin-right5
  margin-right: 5px

.margin-top5
  margin-top: 5px !important

.margin-bottom0
  margin-bottom: 0px

.margin-bottom10
  margin-bottom: 10px
.margin-bottom15
  margin-bottom: 15px

.margin-bottom20
  margin-bottom: 20px

.margin-bottom30
  margin-bottom: 30px
.margin-bottom60
  margin-bottom: 60px

.max-width800
  max-width: 800px
.widthCenter
  width: 80%
.widthCenter
  width: 80%

.max-width600
  max-width: 600px

.max-width300
  max-width: 300px

.widthHalf
  width: 50%


.list-style-none
  list-style: none

.padding0
  padding: 0 !important

.padding-left5
  padding-left: 5px

.padding-left10
  padding-left: 10px
.padding5
  padding: 5px
.padding15
  padding: 15px

.padding10-0
  padding: 10px 0

.padding15-0
  padding: 15px 0

.padding10-5
  padding: 10px 5px

.padding5-10
  padding: 5px 10px

.padding10-20
  padding: 10px 20px

.padding20-10
  padding: 20px 10px

.padding20-0
  padding: 20px 0px

.padding0-20
  padding: 0 20px

.padding0-40
  padding: 0 40px !important

.padding20
  padding: 20px

.padding40
  padding: 40px
.padding10
  padding: 10px

.padding-left10
  padding-left: 10px


.padding-left20
  padding-left: 20px



.padding-bottom10
  padding-bottom: 10px

.padding-bottom15
  padding-bottom: 15px

.rounded
  border-radius: 50% !important

.square50
  width: 50px
  height: 50px

.square30
  width: 30px
  height: 30px

.square35
  width: 35px
  height: 35px

.square40
  width: 40px
  height: 40px
.square20
  width: 20px
  height: 20px

.right0
  right: 0 !important

.info-text
  font-size: 17px
  font-weight: bold

.font-normal
  font-weight: normal

.font-bold
  font-weight: bold
.font35
  font-size: 35px !important

.font15
  font-size: 15px

.font14
  font-size: 14px

.font20
  font-size: 20px

.font50
  font-size: 50px

.font25
  font-size: 25px

.font18
  font-size: 18px

.font1em
  font-size: 1em

.width100
  width: 100%

.width98
  width: 98%

.height100
  height: 100%

.height100vh
  height: 100vh

.text-center
  text-align: center

.text-bold
  font-weight: 700

.color-black
  color: #000 !important

.color-yellow
  color: yellow !important

.color-white
  color: white !important


.text-uppercase
  text-transform: uppercase !important

.text-justify
  text-align: justify
  line-height: 1em

.text-lowercase
  text-transform: lowercase !important

.back-darkgray
  background: gray !important
.back-black
  background: #000000

.back-green
  background: #10cfbd


.backYellow
  &:before
    background: yellow !important

.flex
  display: flex

.flex-between
  justify-content: space-between

.flex-center
  justify-content: center
  

.flex-right
  justify-content: flex-end

.flex-middle
  align-items: center

.flex-column
  flex-direction: column

.flex-row
  flex-direction: row


.flex-top
  align-items: flex-start

.flex-wrap
  flex-wrap: wrap

.back-whity
  background: #f1f1f1

.color-red
  color: #ee0000


.back-grisclaro
  background: lightgray

.back-white
  background: #fff

.text-underline
  text-decoration: underline
  &:hover
    text-decoration: none
    cursor: pointer

.disabled
  background: #aaa !important
  color: #757575 !important
  border-color: #aaa !important

.relative
  position: relative

.min-height100
  min-height: 100px
.card-product
  position: relative
  .my-close
    position: absolute
    top: -13px
    right: -13px
    width: 35px
    height: 35px
    border-radius: 50%
    color: white
    background: #000
    cursor: pointer

.close-modal
  color: #7b7b7b
  border: 0
  font-size: 20px
  background: transparent !important

.check-icon-green
  font-size: 2.5em
  border: 5px solid #000
  width: 1.7em
  height: 1.7em
  border-radius: 50%

.checkWrap
    width: 26px !important;
    height: 26px !important;
    background: #fff;
    margin-bottom: 15px;
    position: relative;
    border: 1px solid gray
    border-radius: 50%
    z-index: 1 !important
    .check-icon
      background: yellow
      z-index: 2
      width: 18px
      height: 18px
      border-radius: 50%
      position: absolute
      left: 3px
      top: 3px
      opacity: 0

.checkWrap input
    width: 22px !important
    height: 22px !important
    background: #fff
    position: absolute
    left: 0
    z-index: 3
    top: -4px
    border-radius: 50%
    opacity: 0

.checkWrap input:checked ~ .check-icon
  opacity: 1
html, body
  overflow: hidden !important
  
.hideMobile
  display: none
.showMobile
  display: inline-block

.shadow-btn
  box-shadow: 0 0 20px #555

.img-tiny
  width: 80px

.borderGray
  border: 1px solid #ddd

.border-bottom1
  border-bottom: 1px solid lightgray


.border1white
  border: 1px solid #fff

.border2white
  border: 2px solid white

.transparent
  background: transparent




input[type="checkbox"].check
  &:not(:checked), &:checked
    position: absolute
    left: -9999px
  &:not(:checked) + label, &:checked + label
    position: relative
    padding-left: 1.95em
    cursor: pointer
  &:not(:checked) + label:before, &:checked + label:before
    content: ''
    position: absolute
    left: 0
    top: 0
    width: 1.5em
    height: 1.5em
    border: 2px solid #ccc
    background: #fff
    border-radius: 4px
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1)
  &:not(:checked) + label:after, &:checked + label:after
    content: '✔'
    position: absolute
    top: .2em
    left: .2em
    font-size: 1.2em
    line-height: 0.8
    color: yellow
    transition: all .2s
  &:not(:checked) + label:after
    opacity: 0
    transform: scale(0)
  &:checked + label:after
    opacity: 1
    transform: scale(1)
  &:disabled
    &:not(:checked) + label:before
      box-shadow: none
      border-color: #bbb
      background-color: #ddd
    &:checked + label
      &:before
        box-shadow: none
        border-color: #bbb
        background-color: #ddd
      &:after
        color: #999
    + label
      color: #aaa
  &:checked:focus + label:before, &:not(:checked):focus + label:before
    border: 2px dotted blue


label:hover:before
  border: 2px solid #4778d9 !important




.pace
  -webkit-pointer-events: none
  pointer-events: none

  -webkit-user-select: none
  -moz-user-select: none
  user-select: none


.pace-inactive
  display: none
.pace .pace-progress
  background: #fa9b45
  position: fixed
  z-index: 2000
  top: 0
  right: 100%
  width: 100%
  height: 2px



input[type="checkbox"].check
 &:not(:checked), &:checked
   position: absolute
   left: -9999px
 &:not(:checked) + label, &:checked + label
   position: relative
   padding-left: 1.95em
   cursor: pointer
 &:not(:checked) + label:before, &:checked + label:before
   content: ''
   position: absolute
   left: 0
   top: 0
   width: 1.2em
   height: 1.2em
   border: 2px solid #ccc
   background: #fff
   border-radius: 4px
   box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1)
 &:not(:checked) + label:after, &:checked + label:after
   content: '✔'
   position: absolute
   top: .35em
   left: .3em
   font-size: 1.1em
   line-height: 0.8
   color: #10CFBD
   transition all .2s
 &:not(:checked) + label:after
   opacity: 0
   transform: scale(0)
 &:checked + label:after
   opacity: 1
   transform: scale(1)
 &:disabled
   &:not(:checked) + label:before
     box-shadow: none
     border-color: #bbb
     background-color: #ddd
   &:checked + label
     &:before
       box-shadow: none
       border-color: #bbb
       background-color: #ddd
     &:after
       color: #999
   + label
     color: #aaa
 &:checked:focus + label:before, &:not(:checked):focus + label:before
   border: 2px solid #4778d9


label:hover:before
  border: 2px solid #4778d9 !important
</style>
