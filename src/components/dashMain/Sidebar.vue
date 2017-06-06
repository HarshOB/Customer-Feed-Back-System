<template>
<div class="sidebar" data-color="purple">

	<div class="logo">
	  <a href="#" class="simple-text">
		<span style="font-weight: 700;">Feedback</span>System
	  </a>
	</div>
	<div class="sidebar-background sidebarBg"></div>
	  	<div class="sidebar-wrapper">
			<ul class="nav">
				<li class="active">
					<a href="#/dashboard">
						<div @click="onDashboard()">
							<i class="material-icons">dashboard</i>
							<p>Dashboard</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#/dashboard" >
						<div @click="onNewFeedback()">
							<i class="material-icons">create_new_folder</i>
							<p>New Feedback</p>
						</div>
					</a>
				</li>
				<li>
					<a href="#/dashboard">
						<div @click="onMyFeedback()">
							<i class="material-icons">chat</i>
							<p>My Feedbacks</p>
						</div>
					</a>
				</li>
			</ul>
	  	</div>
	</div>
</template>

<script>
	export default {
		name: 'Sidebar',
		data() {
			return {
				option: 'Dashboard'
			}
		},
		methods: {
			onDashboard() {
				this.option = 'MainDash';
				this.onSetMainDash();
			},
			onNewFeedback() {
				this.option = 'NewFeedback';
				this.onSetMainDash();
			},
			onMyFeedback() {
				this.option = 'MyFeedback';
				this.onSetMainDash();
			},
			onSetMainDash() {
				this.$emit('fromSidebar',this.option);	
			}
		}
	}
</script>