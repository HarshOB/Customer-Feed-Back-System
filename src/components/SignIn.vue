<template>
<div class="signip">
	<div class="signup-page">
		<component :is="top"></component>
	    <component :is="signin"></component>
		<component :is="down"></component>
	</div>
</div>
</template>

<script>
	import Top from './indexMain/Top'
	import Down from './indexMain/Down'
	import SignInMain from './indexMain/SignInMain'
	export default {
		name: 'Index',
		components: {
			Top, Down, SignInMain
		},
		data() {
			return {
				top: 'Top',
				down: 'Down',
				signin: 'SignInMain'
			}
		}
	}
</script>