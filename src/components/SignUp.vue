<template>
<div class="signup">
	<div class="signup-page">
		<component :is="top"></component>
	    <component :is="signup"></component>
		<component :is="down"></component>
	</div>
</div>
</template>

<script>
	import Top from './indexMain/Top'
	import Down from './indexMain/Down'
	import SignUpMain from './indexMain/SignUpMain'
	export default {
		name: 'Index',
		components: {
			Top, Down, SignUpMain
		},
		data() {
			return {
				top: 'Top',
				down: 'Down',
				signup: 'SignUpMain'
			}
		}
	}
</script>