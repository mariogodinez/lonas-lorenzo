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
      if (this.showItem < 6) {
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
      return this.showItem * 100 / 6
    }
  },
  created () {
    $('.log')
  }
}
</script>

<template>
  <section class="" style="overflow:hidden; height:100vh;">
    <header class="flex flex-between padding20-0 " style="transition:all .4s;position:absolute; z-index:10; width:65%; right:49vw; background:transparent;" :class="{togglerHeader : activePan}">
      <div style="margin-left:100px;width:200px"></div>
      <figure class="margin0" style="width:200px">
        <img class="width100" src="/logo-bigspan.png">
      </figure>
      <div class="flex flex-middle flex-column" style=" z-index:100;width:200px; margin-right:10px;">
        <Social color="white"></Social>
         <button style="margin-top:7px; " class="center-block my-btn back-green shadow-btn pointer">Descargar Catálogo</button>
      </div>
    </header>
    <img class="width100 height100" src="/nosotros.png" alt="" style="position:absolute; top:0;" v-show="showItem < 4">
    <img class="width100 height100" src="/nosotros2.png" alt="" style="position:absolute; top:0;" v-show="showItem > 3">
    <Menu></Menu>
    <article class="flex hide flex-between padding0 height100" style="position:absolute; z-index:11000; right:-49vw; top:0; width:50vw; background: rgba(255,255,255,.9); transition:all .4s;" :class="{togglerAside : !activePan}">
    <!-- content here -->
      <section class="width100 relative" style="overflow:hidden;">
        
      <section class="width100" style="overflow:hidden;">
        <transition name="custom-classes-transition" enter-active-class="animated bounceInLeft"
    leave-active-class="animated bounceOutRight" class="relative">
          <article class="padding0-20 flex flex-column flex-center height100" style="position:absolute; top:0;" v-if="showItem == 1" key="1">
            <figure class="marign0" style="width: 150px">
              <img class="width100" src="/logo-bigspan.png">
            </figure>
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
              <h4 class="margin0 color-green text-uppercase">LONAS LORENZO &
              BIG SPAN STRUCTURES:
              </h4>
              <h4 class="margin0 color-green font-normal text-uppercase">
              UN TITÁN EN EL
              CONTINENTE
              </h4>
              <p class="text-justify margin10-0">
                Aliadas durante años en proyectos de gran relevancia,
                Lonas <strong>Lorenzo y Big Span LLC</strong>  coinciden en trabajar
                bajo los mismos lineamientos para atender exigencias
                del mercado mayores en dimensión y técnicamente
                más específicas y puntuales. A partir de la adquisición
                realizada por la empresa mexicana de las acciones de
                la firma norteamericana nos transformamos en <strong>Lonas
                Lorenzo Big Span Structures</strong>. 
              </p>
              <p class="text-justify margin10-0">
                Este nuevo titán de la arquitectura ligera reúne el
                 <strong>know how</strong> de dos empresas que a lo largo de 40 años
                han crecido exponencialmente en infraestructura,
                capacidad de integración de las materias primas,
                logística, instalación, servicio postventa y por supuesto
                capital humano preparado en ingenierías de alta
                especialización.
              </p>

              <p class="text-justify margin0">
                <strong>Big Span Structures</strong>  es una apuesta en serio por la
                innovación. <strong>Big Span Structures</strong>  tiene 30 años de
                experiencia en diseño, ingeniería e instalación de
                estructuras ligeras de diversos formatos en los que se
                destacan las cubiertas neumáticas y estructuras metálicas
                de grandes dimensiones.
              </p>
            </div>
            <div class="widthHalf">
              <figure class="margin0 width100">
                <img class="margin0 width100" src="/nosotros-text.png">
              </figure>

              <p class="text-justify">
                <strong>Lonas Lorenzo</strong>  empresa pionera de arquitectura textil
                en México, Centro y Sudamérica es líder en el sector
                con más de dos millones de metros cuadrados instalados
                en proyectos importantes como estadios, hangares,
                aeropuertos, centros culturales y comerciales,
                fachadas, etc.
              </p>
            </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 2" key="2">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <h4 class="color-green text-uppercase">Tecnologías</h4>
                <p class="text-justify">
                  <strong>Lonas Lorenzo Big Span Structures</strong>  es una suma de
                  experiencia, conocimiento especializado, innovación
                  e infraestructura
                </p>

                <p class="text-justify">
                  Todos los proyectos pasan por nuestro laboratorio de
                  diseño e ingeniería en tensoestructuras donde se realizan
                  los análisis de fuerzas y resistencia apoyados en
                  <strong>software</strong>  especializado.
                </p>

                <p class="text-justify">
                  Nuestro equipo técnico está capacitado y cuenta con
                  las certificaciones necesarias para la fabricación de
                  estructuras metálicas así como la confección de
                  membranas estructurales en diversos materiales
                  como PVC, PTFE, ETFE, Etc. 
                </p>

                <p class="text-justify">
                  <strong>Lonas Lorenzo Big Span Structures</strong>
                   cuenta con las
                  instalaciones especializadas en México y Estados
                  Unidos donde se han fabricado más de dos millones
                  de metros cuadrados de cubiertas y fachadas. 
                </p>
                <p class="text-justify">
                  Además, gracias a nuestra filosofía corporativa basada
                  en la creación de alianzas y la cooperación global con
                  líderes del sector, Lonas Lorenzo Big Span Structures
                  fusiona tecnología, conocimiento y recursos humanos
                  entre aliados para satisfacer a todos sus clientes.
                </p>
            </div>
            <div class="widthHalf">
            <br><br><br>
              <figure class="margin0 width100">
                <img class="margin0 width100" src="/nosotros-text.png">
              </figure>
            </div>
            </section>
          </article>


          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 3" key="3">
           
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
                <article class="margin-bottom10">
                  <h4 class="margin0 text-uppercase">Nuestra folosofía</h4>
                  <p class="text-justify margin0">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing
                    elit. Aenean commodo ligula eget dolor. Aenean
                    massa. Cum sociis natoque penatibus et magnis dis
                    parturient montes, nascetur ridiculus mus. Donec
                    quam felis, ultricies nec, pellentesque eu, pretium
                    quis, sem
                  </p>
                </article>


                <article class="margin-bottom10">
                  <h4 class="margin0 text-uppercase">Misión</h4>
                  <p class="text-justify margin0">
                    Lorem ipsum dolor sit amet, consectetue
                  </p>
                </article>

                <article class="margin-bottom10">
                  <h4 class="margin0 text-uppercase">Visión</h4>
                  <p class="text-justify margin0">
                    Ser la empresa líder en el mercado a nivel mundial
                    que cuente con los recursos tecnológicos de última
                    generación en la construcción de membranas y
                    estructuras en los proyectos de arquitectura ligera
                    innovando siempre en el diseño y la funcionalidad.
                  </p>
                </article>

                <article class="margin-bottom10">
                  <h4 class="margin0 text-uppercase">Objetivos</h4>
                  <p class="text-justify margin0">
                    <ol class="" style="padding-left:18px; margin-top:3px;">
                      <li>
                        Implementación y desarrollo de nuevas tecnologías
                        y productos innovadores que ofrezcan soluciones
                        integrales a las necesidades de infraestructura de
                        nuestro país.
                      </li>
                      <li>
                        Apoyar a las instituciones educativas del país en el
                        desarrollo de un programa de capacitación y promoción
                        para jóvenes arquitectos que deseen incursionar
                        en esta atractiva industria.
                      </li>
                      <li>
                        Consolidarnos como empresa líder a nivel internacional
                        en la fabricación de membranas arquitectónicas
                        participando en el desarrollo de la infraestructura
                        deportiva de los principales eventos mundiales.
                      </li>
                    </ol>
                  </p>
                </article>

                
            </div>
            <div class="widthHalf">
              <article class="margin-bottom10">
                    <h4 class="margin0 text-uppercase">Ventajas <br>competitivas</h4>
                    <p class="text-justify margin0">
                      Empresa número uno en arquitectura textil del mercado
                      nacional. <br>
                      Personal altamente capacitado
                      Tecnología de vanguardia
                      Ganadora de varios premios internacionales IFAI en
                      “Vanguardia en Diseño” y "Excelencía".
                    </p>
                </article>
              <figure class="margin0 width100">
                <img class="margin0 width100" src="/nosotros-text2.png">
              </figure>

              


            </div>
            </section>
          </article>
          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 4" key="4">
            <br> <br> <br>
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
              <h4 class="margin0 color-green text-uppercase">MÁSTERS
              </h4>
              <h4 class="margin0 font-normal text-uppercase">
              CAPACITACIÓN
              CONTINUA
              </h4>
              <p class="text-justify margin10-0">
                <strong>Lonas Lorenzo Big Span Structures</strong>  promueve la
                formación continua entre sus asociados porque sólo
                así es posible crecer, innovar y responder a las exigencias
                del mercado.  
              </p>
              <p class="text-justify margin10-0">
                El cuerpo de arquitectos e ingenieros ha cursado dos
                de los programas académicos de primera línea en
                esta industria a nivel internacional:
              </p>

              <p class="text-justify margin10-0">
                El Máster en Ingeniería de Estructuras Ligeras que
                imparte la Universidad Tecnológica de Viena (Austria)
                y la Maestría Archineer de Ingeniería en Estructuras
                de Membrana de la Universidad de Ciencias Aplicadas
                de Anhalt (Alemania).
              </p>

              <p class="text-justify margin10-0">
                En el programa vienés, los profesionales adquieren
                conocimiento clave en fundamentos de las tensoestructuras,
                la arquitectura y la ingeniería con membranas,
                la dinámica de los materiales, el uso de <strong>software</strong> 
                aplicado a las ingenierías y el análisis en el comportamiento
                de las membranas; el desarrollo de proyectos
                (diseño y tecnologías de construcción); el diseño experimental
                y las edificaciones sustentables; las normativas,
                la coordinación de equipos de trabajo, entre otros
                aspectos. 
              </p>

              <p class="text-justify margin0">
                El enfoque de la escuela alemana está en el uso del
              <strong>software</strong> para el cálculo de cargas y estructuras, el
              diseño estructural, el estudio de las propiedades
              físicas y mecánicas de los materiales, el conocimiento
              de los mecanismos de testeo, los dimensionamientos,
              los patrones constructivos, el desarrollo de proyectos y
              el mantenimiento de los mismos. 
              </p>
            </div>
            <div class="widthHalf">
              <figure class="margin0 width100">
                <img class="margin0 width100" src="/nosotros-text4.png">
              </figure>
            </div>
            </section>
          </article>

          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 5" key="5">
            <br> <br> <br>
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
              <h4 class="margin0 color-green text-uppercase">Mensaje del CEO
              </h4>
              <h4 class="margin0 font-normal text-uppercase">
              Bienvenidos a una nueva etapa
              en la historia de Lonas Lorenzo
              </h4>
              <p class="text-justify margin10-0">
                Un gran equipo de gente apasionada y preparada para
                resolver los retos que supone la industria global de la
                arquitectura ligera ha trabajado con todo el empeño
                para llegar a este momento: <strong>Lonas Lorenzo</strong> , pionero y
                líder del ramo en México, Centro y Sudamérica, se
                fortalece a partir de la fusión con el gran innovador de
                la ingeniería on membranas textiles en Estados Unidos,
                 <strong>Big Span Structures LLC.</strong>
              </p>

              <p class="text-justify margin10-0">
                De esta manera, unimos fortalezas y complementamos
                áreas de especialidad, para avanzar como un conglomerado
                capaz de atender necesidades mayores en
                nuevos mercados internacionales. Es importante hacer
                un recuento de lo que hemos hecho hasta ahora,
                voltear hacia atrás y reconocer dónde radica nuestra
                fuerza y dónde se encuentran las oportunidades. 
              </p>
             
            </div>
            <div class="widthHalf">
              <figure class="" style="width:170px:margin:0 auto;">
                <img class="margin0 width100" src="/nosotros-text-ceo.png">
              </figure>
              <div class="text-center center-block" style="width:170px;">
                <h4 class="margin0 text-uppercase" style="border-bottom:1px solid gray; padding-bottom:5px;">Lorenzo ponce</h4>
                <h4 class="margin0 font-normal text-uppercase" style="padding-top:5px;">CEO</h4>
              </div>
            </div>
            </section>
          </article>

          <article class="padding0-20 flex flex-middle flex-center height100" style="position:absolute; top:0;" v-if="showItem == 6" key="6">
            <br> <br> <br>
            <section class="flex flex-between" style="font-size:.9em;">
              <div class="widthHalf margin-right25" >
              <h4 class="margin0 color-green text-uppercase">MENSAJE DEL DIRECTOR
              DE OPERACIONES
              </h4>
             
              <p class="text-justify margin10-0">
                Innovación, tecnología de punta, materiales de la más
                alta calidad y un capital humano altamente calificado,
                son las fortalezas principales que han llevado a <strong>Big
                Span Structures</strong>  a ser líder en el mercado de la arquitectura
                textil a nivel mundial.
              </p>
              <p class="text-justify margin10-0">
                Durante tres décadas, hemos diseñado, fabricado e
                instalado, con responsabilidad y dedicación; más de
                un centenar de Mega estructuras brindando solución
                temporal y permanente al sector público y privado.
                Hemos traspasando fronteras llevando nuestra misión
                a cuatro de los cinco continentes, posicionando el
                nombre de <strong>Span Structures</strong>  con cada uno de nuestros
                proyectos.
              </p>

              <p class="text-justify margin10-0">
                Proyectándonos para los desafíos requeridos en nuestra
                industria, y con el propósito de buscar nuevas
                oportunidades de negocio, me enorgullece presentar
                la fusión de <strong>Big Span Structures LLC.</strong>, pioneros de la
                arquitectura ligera en México y líderes en el mercado
                de Centro y Sudamérica. 
              </p>
             
            </div>
            <div class="widthHalf">
              <figure class="" style="width:170px:margin:0 auto;">
                <img class="margin0 width100" src="/nosotros-text-operacione.png" alt="Gerente de operaciones">
              </figure>
              <div class="text-center center-block" style="width:220px;">
                <h4 class="margin0 text-uppercase" style="border-bottom:1px solid gray; padding-bottom:5px;">German buitrago</h4>
                <h4 class="margin0 font-normal text-uppercase" style="padding-top:5px;">Director de operaciones</h4>
              </div>
              <p class="text-justify">
                Dos compañías competitivas y solidas que unirán
                esfuerzos para satisfacer las necesidades de nuevos
                clientes, prestando un servicio personalizado y de
                calidad.
              </p>

              <p class="text-justify">
                Este material visual, es un compendio del ingenio, la
                dedicación y el trabajo, de cientos de profesionales,
                que hoy hacen posible esta nueva empresa.
              </p>

              <p class="text-justify">
                Bienvenidos a la revolución de la arquitectura textil.
  Bienvenidos a <strong>Lonas Lorenzo Big Span Structures.</strong> 
              </p>
            </div>
            </section>
          </article>
        </transition>
        </section>

        <div style="bottom:19px; position:absolute; left:27%;">
          <div class="color-gray flex flex-center">
             <div  class="margin5 pointer rounded square20 flex border1gray flex-middle flex-center" @click="beforeShow">
                  <span class="fa fa-chevron-left" style="font-size:.7em; margin-right:2px; margin-top:1px;"></span>
              </div>
              <div class="margin5 pointer rounded square20 flex border1gray flex-middle flex-center" @click="nextShow">
                <span class="fa fa-chevron-right" style="font-size:.7em; margin-left:2px; margin-top:1px;"></span>
              </div>
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
          <h4 class="margin0 color-white text-center">¿Tienes un proyecto <br> de menos de 600m? </h4>
          <button class="pointer center-block shadow-btn my-btn back-green" style="margin-top:8px; width:100px">
            <span class="color-white">Click aquí</span>
          </button>
        </div>
        <div class="margin0-20">
          <h4 class="text-center margin0 color-white font15">©2017 Big Span Structures todos los derechos reservados.
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

