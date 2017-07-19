<template>
	<section>
		<nav class="nav" style="z-index:100;">
			<div id="burger-menu" class="flex flex-middle">
				<div class="square30 back-green border1white rounded flex flex-center flex-middle">
					<span class="fa fa-bars color-white"></span>
				</div>
				<h4 class="margin0 color-white">
					<span class="margin-left10">menú</span>
				</h4>
			</div>
			<div id="play-circle" class="back-green border1white rounded square20 flex flex-middle flex-center">
				<span class="fa fa-play color-white" style="font-size:.7em; margin-left:2px;"></span>
			</div>
			<ul class="nav-list">
				
				<li class="nav-list-item">
					<router-link to=""> <span class="color-green">inicio</span></router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">nosotros</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">proyectos</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">servicios</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">alianzas</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">premios</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">clientes</router-link>
				</li>
				<li class="nav-list-item">
					<router-link to="">contacto</router-link>
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
		top: 52px
		left: 23px
		&-item
			color: white
			a
				color: white
				font-size: 1.2em
				text-decoration: none

</style>

