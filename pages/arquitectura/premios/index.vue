<script>
const $ = require('jquery')
import Social from '../../../components/Social.vue'
import Menu from '../../../components/Menu.vue'
import BarPercent from '../../../components/BarPercent.vue'

export default {
  data () {
    return {
      activePan: true,
      showItem: 1
    }
  },
  components: {
    Social,
    Menu,
    BarPercent
  },
  methods: {
    toggleActivePan () {
      this.activePan = !this.activePan
    },
    nextShow () {
      if (this.showItem < 5) {
        this.showItem ++
      }
    },
    beforeShow () {
      if (this.showItem > 1) {
        this.showItem --
      }
    }
  },
  computed: {
    currentPercent () {
      return this.showItem * 100 / 5
    }
  },
  created () {
    let self = this
    setTimeout(function () {
      self.toggleActivePan()
    }, 500)
    $('.log')
  }
}
</script>

<template>
  <section class="" style="overflow:hidden; height:100vh;">
    <header class="flex flex-between padding20-0 " style="transition:all .4s;position:absolute; z-index:10; width:65%; right:49vw; background:transparent;" :class="{togglerHeader : activePan}">
      <div style="margin-left:100px;width:200px"></div>
      <figure class="margin0" style="width:200px">
        <img class="width100" src="/bigspan-white.png">
      </figure>
      <div class="flex flex-middle flex-column" style=" z-index:100;width:200px; margin-right:10px;">
        <Social color="white"></Social>
         <button style="margin-top:7px; " class="center-block my-btn back-green shadow-btn pointer">Descargar Catálogo</button>
      </div>
    </header>
    <img class="width100 height100" src="/premios.png" alt="" style="position:absolute; top:0;">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">
        
      <section class="width100" style="overflow:hidden;">
        <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight" class="relative">
          <article class="padding0-20 flex flex-column flex-center height100" style="position:absolute; top:0;" v-if="showItem == 1" key="1">
            
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                  <figure>
                      <img src="International.png">
                    </figure>
                <h4 class="color-green text-uppercase">premios
                </h4>
               
                <p class="text-justify margin0">
                  International Achievement Awards es una competencia
                  anual que tiene por objetivo promover el conocimiento
                  de los tejidos de especialidad utilizados en
                  miles de productos y aplicaciones en un amplio
                  espectro de formas y tamaños. IFAI ha reconocido la
                  innovación, las habilidades técnicas y el diseño de
                  excelencia desde 1968 con las categorías <strong>“Award of
                  Excellence” y “Outstanding Achievement Award”.</strong>
                </p>


              </div>
              <div class="widthHalf relative" style="top:-20px">
                <div class="back-darkblue margin-bottom10">
                  <h4 class="margin0 padding10 font-normal color-white">
                    OUTSTANDING
                    ACHIEVEMENT AWARD
                  </h4>
                </div>
               
                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">ESTADIO SÁNCHEZ RUMOROSO</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                       558-2322 <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Coquimbo, Chile</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1202 S2</h4>
                      <h4 class="margin0 color-middlegray">Iglesis Prat Arquitectos</h4>
                    </div>
                  </div>
                  
                </article>

                <article class="margin-top20">
                  <h4 class="margin0 back-darkblue color-white padding10">TEPIC FAIR ENTRANCE</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                       558 <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Nayarit, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 902 S2-1202 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>

              </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 2" key="2">
           
            <section class="flex flex-between relative" style="font-size:.9em; top:-20px;">
              <div class="widthHalf margin-right25" >
                <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10">SANTA FÉ</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                       2300 <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Ciudad de México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1202 S2</h4>
                      <h4 class="margin0 color-middlegray">Fernando Cárdenas (Grow Arquitectos)</h4>
                      <h4 class="margin0 color-middlegray">Estudio de diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>

                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">NOW SECRETS</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> Multiple Modular Structures</h4>
                      <h4 class="margin0 color-middlegray">Jalisco, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1202 S2 - 902 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de diseño </h4>
                      <h4 class="margin0 color-middlegray">Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>


               
              </div>
              <div class="widthHalf">
                <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10">BE GRAND LOMAS</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:2px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                        <span style="font-size:.86em"> less than 600 <span class="relative" >m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></span></h4>
                      <h4 class="margin0 color-middlegray">Ciudad de México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 902 S2</h4>
                      <h4 class="margin0 color-middlegray">S3Z Sáenz Arquitectos</h4>
                      <h4 class="margin0 color-middlegray">Estudio de diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>


                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">CU VALLES</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                      600-2300  <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Jalisco, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1402 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>

              </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 3" key="3">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >

                <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10">TECÁMAC SHOPPING CENTER</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                        <span class="color-black">Tensile Structures</span>
                      </h4>
                      <h4 class="margin0 color-middlegray">
Estado de México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1202 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>

                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">CENTRAL DE ABASTOS TUXTLA</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" >
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                        <span class="color-black">Hybrid Tension Structures</span>
                      </h4>
                      <h4 class="margin0 color-middlegray">Chiapas, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1402 S2</h4>
                      <h4 class="margin0 color-middlegray">Rafael Ordáz, Espacios Integrales -
Estudio de diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>
                
              </div>
            <div class="widthHalf relative" style="top:-50px">
              <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10">ALBERCA OLÍMPICA DEL CAMPUS
NÁINARI-ITSON </h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                      600-2300  <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Sonora, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1202 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>
                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">CENOPY TULIPS</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Grand Entrance</span>
                      600-2300</h4>
                      <h4 class="margin0 color-middlegray">Michoacán, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1202 S2 </h4>
                      <h4 class="margin0 color-middlegray">Estudio de diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                </article>
            </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 4" key="4">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25 relative" style="top:-30px;">

                <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10">CHEDRAUI SANTA FÉ</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                        <span class="color-black">Tensile Structures more than</span> 2300
                        <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span>
                      </h4>
                      <h4 class="margin0 color-middlegray">
Cuidad de México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1402 S2</h4>
                      <h4 class="margin0 color-middlegray">Rojkind Arquitectos -
Estudio de diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>

                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">
                    ESTADIO ELÍAS FIGUEROA BRANDER
                  </h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" >
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                        <span class="color-black">Freestanding Structures</span>
                        92
                        <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span>
                      </h4>
                      <h4 class="margin0 color-middlegray">Valparaíso, Chile</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari Soltis FT 381
Gerardo Marambio</h4>
                      <h4 class="margin0 color-middlegray">Claudio Aceituno
Mauricio Carrión
Claudio Palavecino</h4>
                    </div>
                  </div>
                  
                </article>
                
              </div>
            <div class="widthHalf">
              <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10">WESTHILL</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                      600-2300 <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Ciudad de México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1402 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>
                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">NATIVA</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Freestanding Structures</span>
                      more than 92 <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Nuevo León, México</h4>
                      <h4 class="margin0 color-middlegray">ETFE </h4>
                      <h4 class="margin0 color-middlegray">(MAZ Arquitectos) -
Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                </article>
            </div>
            </section>
          </article>

          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 5" key="5">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25">

                <article class="margin-bottom20">
                  <h4 class="margin0 back-darkblue color-white padding10"> PABELLON</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                        <span class="color-black"> FACHADAS</span>
                      </h4>
                      <h4 class="margin0 color-middlegray">
Jalisco, México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari Soltis FT
381 - 3108</h4>
                      <h4 class="margin0 color-middlegray">
                        Estudio de diseño Lonas Lorenzo
                      </h4>
                    </div>
                  </div>
                  
                </article>

                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">
                    ESTADIO TOMATEROS
                  </h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" >
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                        <span class="color-black">Freestanding Structures</span>
                        92
                        <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span>
                      </h4>
                      <h4 class="margin0 color-middlegray">Sinaloa, México</h4>
                      <h4 class="margin0 color-middlegray">
                        Serge Ferrari 1201 S2
                      </h4>
                      <h4 class="margin0 color-middlegray">
                        Jacobo Sevilla <br>
                        Isla Cortéz
                      </h4>
                      <h4 class="margin0 color-middlegray">
                        Estudio de Diseño
Lonas Lorenzo
                      </h4>
                    </div>
                  </div>
                  
                </article>
                
              </div>
            <div class="widthHalf"> <br>
              <article class="margin-bottom20" style="visibility:hidden;">
                  <h4 class="margin0 back-darkblue color-white padding10">WESTHILL</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Tensile Structures</span>
                      600-2300 <span class="relative">m<span style="position:absolute; top:-1px; font-size:.7em;">2</span></span></h4>
                      <h4 class="margin0 color-middlegray">Ciudad de México</h4>
                      <h4 class="margin0 color-middlegray">Serge Ferrari 1402 S2</h4>
                      <h4 class="margin0 color-middlegray">Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                  
                </article>
                <article>
                  <h4 class="margin0 back-darkblue color-white padding10">STAND DE SAINT - GOBIAN</h4>
                  <div class="flex">
                    <div class="margin-right10 width100">
                      <figure class="width100 margin0" >
                        <img class="width100" src="/premios-text1.png">
                      </figure>
                    </div>
                    
                    <figure class="width100 margin0">
                      <img class="width100" src="/premios-text1.png">
                    </figure>
                  </div>
                  <div class="flex margin-top10" style="">
                    <figure class="margin0" style="width:70px; border:1px solid green;">
                      <img src="International.png" class="width100">
                    </figure>
                    <div style="margin-left:5px;">
                      <h4 class="margin0 color-middlegray"> 
                      <span class="color-black">Interior Display</span></h4>
                      <h4 class="margin0 color-middlegray">Ciudad de México</h4>
                      <h4 class="margin0 color-middlegray">Saint Gobain Solar </h4>
                      <h4 class="margin0 color-middlegray">Screen - PVC coated fiberglass</h4>
                      <h4 class="margin0 color-middlegray">Moyao Arquitecto -
Estudio de Diseño Lonas Lorenzo</h4>
                    </div>
                  </div>
                </article>
            </div>
            </section>
          </article>
          
        </transition>
        </section>
        <div style="bottom:19px; position:absolute; left:27%;">
          <div class="color-gray flex flex-center flex-middle">
            Anterior
             <div  class="margin5 pointer rounded square20 flex border1gray flex-middle flex-center" @click="beforeShow">
                  <span class="fa fa-chevron-left" style="font-size:.7em; margin-right:2px; margin-top:1px;"></span>
              </div>
              <div class="margin5 pointer rounded square20 flex border1gray flex-middle flex-center" @click="nextShow">
                <span class="fa fa-chevron-right" style="font-size:.7em; margin-left:2px; margin-top:1px;"></span>
              </div>
              Siguiente
          </div>
           <BarPercent :percent="currentPercent"></BarPercent>
        </div>
      </section>
      
      
      <div class="square35 pointer flex flex-middle flex-center back-green rounded shadow-btn border1white" style="position:absolute; top:45vh; left:-20px" @click="toggleActivePan">
        <span class="fa fa-chevron-right color-white font20" v-show="!activePan" style="margin-left:3px;"></span>
        <span class="fa fa-chevron-left color-white font20" v-show="activePan" style="margin-right:3px;"></span>
      </div>
    </article>
    
    <footer class="home-footer padding10-0 width100 flex flex-middle flex-between">
      <article class="flex flex-middle" style="margin-left:90px">
        <div class="flex flex-column flex-center" style="position:relative; top:-20px">
          <h4 class="margin0 color-white text-center" style="text-shadow:0 0 3px #000;">¿Necesitas una <br> cotización?</h4>
          <button class="pointer center-block shadow-btn my-btn back-green" style="margin-top:8px; width:100px">
            <span class="color-white">Click aquí</span>
          </button>
        </div>
        <div class="margin0-20">
          <h4 class="text-center margin0 color-white font15" style="text-shadow:0 0 3px #000;">©2017 Big Span Structures & Lonas Lorenzo todos los derechos reservados.
          </h4>
        </div>
      </article>
    </footer>
  </section>
</template>
<style lang="sass">
.togglerHeader
  width: 100% !important
  right: 6% !important
.togglerAside
  width: 50vw !important
  right: 0 !important

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

