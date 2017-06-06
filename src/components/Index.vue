<template>
<div class="index">
	<div class="landing-page">
		<component :is="top"></component>
	    <component :is="main"></component>
		<component :is="down"></component>
	</div>
</div>
</template>

<script>
	import Top from './indexMain/Top'
	import Down from './indexMain/Down'
	import MainPage from './indexMain/MainPage'
	export default {
		name: 'Index',
		components: {
			Top, Down, MainPage
		},
		data() {
			return {
				top: 'Top',
				down: 'Down',
				main: 'MainPage'
			}
		}
	}
</script>