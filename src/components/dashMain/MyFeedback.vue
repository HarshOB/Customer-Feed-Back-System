<template>
	<div class="myfeedback">
		<div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <component :is="active"></component>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <component :is="inactive"></component>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
	import Active from './myfeedback/Active'
	import Inactive from './myfeedback/Inactive'
	export default {
		name: 'MyFeedback',
		components: {
			Active, Inactive
		},
		data() {
			return {
				active: 'Active',
				inactive: 'Inactive'
			}
		}
	}
</script>