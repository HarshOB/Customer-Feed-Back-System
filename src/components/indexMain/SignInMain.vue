<template>
	<div class="signinmain header header-filter setSignIn">
		<div class="container">
			<div class="row">
				<div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
					<div class="card card-signup">
						<form class="form" method="" action="">
							<div class="header header-primary text-center">
								<h4>Login</h4>
								<div class="social-line">
									<a href="#" class="btn btn-simple btn-just-icon">
										<i class="fa fa-facebook-square"></i>
									</a>
									<a href="#" class="btn btn-simple btn-just-icon">
										<i class="fa fa-twitter"></i>
									</a>
									<a href="#" class="btn btn-simple btn-just-icon">
										<i class="fa fa-google-plus"></i>
									</a>
								</div>
							</div>
							<p class="text-divider">Or Be Classical</p>
							<div class="content">

								<div class="input-group">
									<span class="input-group-addon">
										<i class="material-icons">label_outline</i>
									</span>
									<input type="text" class="form-control" placeholder="Username...">
								</div>

								<div class="input-group">
									<span class="input-group-addon">
										<i class="material-icons">lock_outline</i>
									</span>
									<input type="password" placeholder="Password..." class="form-control" />
									<a href="#" class="pull-right" data-toggle="modal" data-target="#myModal"><small>Forgot Password?</small></a>
								</div>

								<div class="checkbox">
									<label>
										<input type="checkbox" name="optionsCheckboxes" checked>
										Keep me Logged in
									</label>
								</div>
							</div>
							<div class="footer text-center">
								<a href="#/dashboard" class="btn btn-primary btn-lg">Login</a>
								<a href="#/signup" class="btn btn-simple btn-primary">OR Register?</a>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>

		<!-- Modal Core -->
		<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
		  <div class="modal-dialog">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
		        <!-- <h4 class="modal-title" id="myModalLabel">Reset Password</h4> -->
		      </div>
		      <form class="form">
		      <div class="modal-body">
		      	<h5 align="center">Let us verify your email address. We'll send you link to reset your password.</h5>
		        
		        	<div class="input-group">
						<span class="input-group-addon">
							<i class="material-icons">email</i>
						</span>
						<input type="text" class="form-control" placeholder="Email..." required>
					</div>
		      </div>
		      <div class="modal-footer">
		        <button type="button" class="btn btn-default btn-simple" data-dismiss="modal">Close</button>
		        <button type="submit" class="btn btn-primary">Submit</button>
		      </div>
		      </form>
		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	import '../../assets/js/jquery-3.2.1.js'
	import '../../assets/js/material.min.js'
	import '../../assets/js/material-kit.js'

	export default {
		name: 'SignInMain',
		mounted: function () {
			$(document).ready(function(){

			    // Init Material scripts for buttons ripples, inputs animations etc, more info on the next link https://github.com/FezVrasta/bootstrap-material-design#materialjs
			    $.material.init();

			    //  Activate the Tooltips
			    $('[data-toggle="tooltip"], [rel="tooltip"]').tooltip();

			    // Activate Datepicker
			    if($('.datepicker').length != 0){
			        $('.datepicker').datepicker({
			             weekStart:1
			        });
			    }

			    // Check if we have the class "navbar-color-on-scroll" then add the function to remove the class "navbar-transparent" so it will transform to a plain color.
			    if($('.navbar-color-on-scroll').length != 0){
			        $(window).on('scroll', materialKit.checkScrollForTransparentNavbar)
			    }

			    // Activate Popovers
			    $('[data-toggle="popover"]').popover();

			    // Active Carousel
				$('.carousel').carousel({
			      interval: 400000
			    });

			});
		}
	}
</script>

<style scoped>
	@import '../../assets/css/material-kit.css';

	.landing-page .header {
		height: auto;
	}
</style>