<template>
	<div class="signupmain">
	<div class="image-container set-full-height setSignIn">
		<div class="container">
	        <div class="row">
		        <div class="col-sm-8 col-sm-offset-2">
		            <!--      Wizard container        -->
		            <div class="wizard-container">
		                <div class="card wizard-card" data-color="purple" id="wizardProfile">
		                    <form action="login-page.html" method="post">
		                <!--        You can switch " data-color="purple" "  with one of the next bright colors: "green", "orange", "red", "blue"       -->

		                    	<div class="wizard-header">
		                        	<h3 class="wizard-title">
		                        	   Build Your Profile
		                        	</h3>
									<h5>This information will let us know more about you.</h5>
		                    	</div>
								<div class="wizard-navigation">
									<ul>
			                            <li><a href="#about" data-toggle="tab">Account</a></li>
			                            <li><a href="#account" data-toggle="tab">About</a></li>
			                            <li><a href="#address" data-toggle="tab">Address</a></li>
			                        </ul>
								</div>

		                        <div class="tab-content">
		                            <div class="tab-pane" id="about">
		                              <div class="row">
		                                	<h4 class="info-text"> Let's start with the basic information</h4>
		                                	<div class="col-sm-4 col-sm-offset-1">
		                                    	<div class="picture-container">
		                                        	<div class="picture">
                                        				<img src="../../assets/img/default-avatar.png" class="picture-src" id="wizardPicturePreview" title=""/>
		                                            	<input type="file" id="wizard-picture">
		                                        	</div>
		                                        	<h6>Choose Picture</h6>
		                                    	</div>
		                                	</div>
		                                	<div class="col-sm-6">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">face</i>
													</span>
													<div class="form-group label-floating">
			                                          <label class="control-label">First Name <small>(required)</small></label>
			                                          <input name="firstname" type="text" class="form-control">
			                                        </div>
												</div>

												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">record_voice_over</i>
													</span>
													<div class="form-group label-floating">
													  <label class="control-label">Last Name <small>(required)</small></label>
													  <input name="lastname" type="text" class="form-control">
													</div>
												</div>

												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">label_outline</i>
													</span>
													<div class="form-group label-floating">
													  <label class="control-label">Username <small>(required)</small></label>
													  <input name="username" type="text" class="form-control">
													</div>
												</div>
		                                	</div>
		                                	<div class="col-sm-10 col-sm-offset-1">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">email</i>
													</span>
													<div class="form-group label-floating">
			                                            <label class="control-label">Email <small>(required)</small></label>
			                                            <input name="email" type="email" class="form-control">
			                                        </div>
												</div>
		                                	</div>

		                                	<div class="col-sm-10 col-sm-offset-1">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">lock_open</i>
													</span>
													<div class="form-group label-floating">
			                                            <label class="control-label">Password <small>(required)</small></label>
			                                            <input id="password" name="password" type="password" class="form-control">
			                                        </div>
												</div>
		                                	</div>

		                                	<div class="col-sm-10 col-sm-offset-1">
												<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">lock_outline</i>
													</span>
													<div class="form-group label-floating">
			                                            <label class="control-label">Confirm Password <small>(must match)</small></label>
			                                            <input id="cpassword" name="cpassword" type="password" class="form-control">
			                                        </div>
												</div>
		                                	</div>
		                            	</div>
		                            </div>
		                            <div class="tab-pane" id="account">
		                                <h4 class="info-text"> What is your gender?</h4>
		                                <div class="row">
		                                    <div class="col-sm-10 col-sm-offset-1">
		                                        <div class="col-sm-6">
		                                            <div class="choice active" data-toggle="wizard-radio">
		                                                <input type="radio" name="gender" value="Male" checked>
		                                                <div class="icon">
		                                                    <i class="fa fa-male"></i>
		                                                </div>
		                                                <h6>Male</h6>
		                                            </div>
		                                        </div>
		                                        <div class="col-sm-6">
		                                            <div class="choice" data-toggle="wizard-radio">
		                                                <input type="radio" name="gender" value="Female">
		                                                <div class="icon">
		                                                    <i class="fa fa-female"></i>
		                                                </div>
		                                                <h6>Female</h6>
		                                            </div>
		                                        </div>
		                                    </div>
		                                </div>

		                                <div class="row">
		                                	<div class="col-md-12">
		                                		<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">event_note</i>
													</span>
													<div class="form-group label-floating">
			                                          <label class="control-label">Date of Birth</label>
			                                          <input class="form-control" name="dob" type="date" value="1994-09-19"/>
			                                        </div>
												</div>
		                                	</div>		
		                                </div>

		                                <div class="row">
		                                	<div class="col-md-12">
		                                		<div class="input-group">
													<span class="input-group-addon">
														<i class="material-icons">work</i>
													</span>
													<div class="form-group label-floating">
			                                          <label class="control-label">Company</label>
			                                          <input class="form-control" name="company" type="text"/>
			                                        </div>
												</div>
		                                	</div>		
		                                </div>

		                            </div>
		                            <div class="tab-pane" id="address">
		                                <div class="row">
		                                    <div class="col-sm-12">
		                                        <h4 class="info-text"> Are you living in a nice area? </h4>
		                                    </div>
		                                    <div class="col-sm-5 col-sm-offset-1">
	                                        	<div class="form-group label-floating">
	                                        		<label class="control-label">Address Line 1</label>
	                                    			<input type="text" name="add1" class="form-control">
	                                        	</div>
		                                    </div>
		                                    <div class="col-sm-5">
		                                        <div class="form-group label-floating">
		                                            <label class="control-label">Address Line 2</label>
		                                            <input type="text" name="add2" class="form-control">
		                                        </div>
		                                    </div>
		                                    <div class="col-sm-5 col-sm-offset-1">
		                                        <div class="form-group label-floating">
		                                            <label class="control-label">State</label>
		                                            <input type="text" name="state" class="form-control">
		                                        </div>
		                                    </div>
		                                    <div class="col-sm-5">
		                                        <div class="form-group label-floating">
		                                            <label class="control-label">City</label>
		                                            <input type="text" name="city" class="form-control">
		                                        </div>
		                                    </div>
		                                    <div class="col-sm-5 col-sm-offset-1">
		                                        <div class="form-group label-floating">
		                                            <label class="control-label">Zip Code</label>
		                                            <input type="text" name="zipcode" class="form-control">
		                                        </div>
		                                    </div>
		                                    <div class="col-sm-5">
		                                        <div class="form-group label-floating">
		                                            <label class="control-label">Country</label>
	                                            	<select name="country" class="form-control">
														<option value="AF">Afghanistan</option>
														<option value="AX">Åland Islands</option>
														<option value="AL">Albania</option>
														<option value="DZ">Algeria</option>
														<option value="AS">American Samoa</option>
														<option value="AD">Andorra</option>
														<option value="AO">Angola</option>
														<option value="AI">Anguilla</option>
														<option value="AQ">Antarctica</option>
														<option value="AG">Antigua and Barbuda</option>
														<option value="AR">Argentina</option>
														<option value="AM">Armenia</option>
														<option value="AW">Aruba</option>
														<option value="AU">Australia</option>
														<option value="AT">Austria</option>
														<option value="AZ">Azerbaijan</option>
														<option value="BS">Bahamas</option>
														<option value="BH">Bahrain</option>
														<option value="BD">Bangladesh</option>
														<option value="BB">Barbados</option>
														<option value="BY">Belarus</option>
														<option value="BE">Belgium</option>
														<option value="BZ">Belize</option>
														<option value="BJ">Benin</option>
														<option value="BM">Bermuda</option>
														<option value="BT">Bhutan</option>
														<option value="BO">Bolivia, Plurinational State of</option>
														<option value="BQ">Bonaire, Sint Eustatius and Saba</option>
														<option value="BA">Bosnia and Herzegovina</option>
														<option value="BW">Botswana</option>
														<option value="BV">Bouvet Island</option>
														<option value="BR">Brazil</option>
														<option value="IO">British Indian Ocean Territory</option>
														<option value="BN">Brunei Darussalam</option>
														<option value="BG">Bulgaria</option>
														<option value="BF">Burkina Faso</option>
														<option value="BI">Burundi</option>
														<option value="KH">Cambodia</option>
														<option value="CM">Cameroon</option>
														<option value="CA">Canada</option>
														<option value="CV">Cape Verde</option>
														<option value="KY">Cayman Islands</option>
														<option value="CF">Central African Republic</option>
														<option value="TD">Chad</option>
														<option value="CL">Chile</option>
														<option value="CN">China</option>
														<option value="CX">Christmas Island</option>
														<option value="CC">Cocos (Keeling) Islands</option>
														<option value="CO">Colombia</option>
														<option value="KM">Comoros</option>
														<option value="CG">Congo</option>
														<option value="CD">Congo, the Democratic Republic of the</option>
														<option value="CK">Cook Islands</option>
														<option value="CR">Costa Rica</option>
														<option value="CI">Côte d'Ivoire</option>
														<option value="HR">Croatia</option>
														<option value="CU">Cuba</option>
														<option value="CW">Curaçao</option>
														<option value="CY">Cyprus</option>
														<option value="CZ">Czech Republic</option>
														<option value="DK">Denmark</option>
														<option value="DJ">Djibouti</option>
														<option value="DM">Dominica</option>
														<option value="DO">Dominican Republic</option>
														<option value="EC">Ecuador</option>
														<option value="EG">Egypt</option>
														<option value="SV">El Salvador</option>
														<option value="GQ">Equatorial Guinea</option>
														<option value="ER">Eritrea</option>
														<option value="EE">Estonia</option>
														<option value="ET">Ethiopia</option>
														<option value="FK">Falkland Islands (Malvinas)</option>
														<option value="FO">Faroe Islands</option>
														<option value="FJ">Fiji</option>
														<option value="FI">Finland</option>
														<option value="FR">France</option>
														<option value="GF">French Guiana</option>
														<option value="PF">French Polynesia</option>
														<option value="TF">French Southern Territories</option>
														<option value="GA">Gabon</option>
														<option value="GM">Gambia</option>
														<option value="GE">Georgia</option>
														<option value="DE">Germany</option>
														<option value="GH">Ghana</option>
														<option value="GI">Gibraltar</option>
														<option value="GR">Greece</option>
														<option value="GL">Greenland</option>
														<option value="GD">Grenada</option>
														<option value="GP">Guadeloupe</option>
														<option value="GU">Guam</option>
														<option value="GT">Guatemala</option>
														<option value="GG">Guernsey</option>
														<option value="GN">Guinea</option>
														<option value="GW">Guinea-Bissau</option>
														<option value="GY">Guyana</option>
														<option value="HT">Haiti</option>
														<option value="HM">Heard Island and McDonald Islands</option>
														<option value="VA">Holy See (Vatican City State)</option>
														<option value="HN">Honduras</option>
														<option value="HK">Hong Kong</option>
														<option value="HU">Hungary</option>
														<option value="IS">Iceland</option>
														<option value="IN">India</option>
														<option value="ID">Indonesia</option>
														<option value="IR">Iran, Islamic Republic of</option>
														<option value="IQ">Iraq</option>
														<option value="IE">Ireland</option>
														<option value="IM">Isle of Man</option>
														<option value="IL">Israel</option>
														<option value="IT">Italy</option>
														<option value="JM">Jamaica</option>
														<option value="JP">Japan</option>
														<option value="JE">Jersey</option>
														<option value="JO">Jordan</option>
														<option value="KZ">Kazakhstan</option>
														<option value="KE">Kenya</option>
														<option value="KI">Kiribati</option>
														<option value="KP">Korea, Democratic People's Republic of</option>
														<option value="KR">Korea, Republic of</option>
														<option value="KW">Kuwait</option>
														<option value="KG">Kyrgyzstan</option>
														<option value="LA">Lao People's Democratic Republic</option>
														<option value="LV">Latvia</option>
														<option value="LB">Lebanon</option>
														<option value="LS">Lesotho</option>
														<option value="LR">Liberia</option>
														<option value="LY">Libya</option>
														<option value="LI">Liechtenstein</option>
														<option value="LT">Lithuania</option>
														<option value="LU">Luxembourg</option>
														<option value="MO">Macao</option>
														<option value="MK">Macedonia, the former Yugoslav Republic of</option>
														<option value="MG">Madagascar</option>
														<option value="MW">Malawi</option>
														<option value="MY">Malaysia</option>
														<option value="MV">Maldives</option>
														<option value="ML">Mali</option>
														<option value="MT">Malta</option>
														<option value="MH">Marshall Islands</option>
														<option value="MQ">Martinique</option>
														<option value="MR">Mauritania</option>
														<option value="MU">Mauritius</option>
														<option value="YT">Mayotte</option>
														<option value="MX">Mexico</option>
														<option value="FM">Micronesia, Federated States of</option>
														<option value="MD">Moldova, Republic of</option>
														<option value="MC">Monaco</option>
														<option value="MN">Mongolia</option>
														<option value="ME">Montenegro</option>
														<option value="MS">Montserrat</option>
														<option value="MA">Morocco</option>
														<option value="MZ">Mozambique</option>
														<option value="MM">Myanmar</option>
														<option value="NA">Namibia</option>
														<option value="NR">Nauru</option>
														<option value="NP">Nepal</option>
														<option value="NL">Netherlands</option>
														<option value="NC">New Caledonia</option>
														<option value="NZ">New Zealand</option>
														<option value="NI">Nicaragua</option>
														<option value="NE">Niger</option>
														<option value="NG">Nigeria</option>
														<option value="NU">Niue</option>
														<option value="NF">Norfolk Island</option>
														<option value="MP">Northern Mariana Islands</option>
														<option value="NO">Norway</option>
														<option value="OM">Oman</option>
														<option value="PK">Pakistan</option>
														<option value="PW">Palau</option>
														<option value="PS">Palestinian Territory, Occupied</option>
														<option value="PA">Panama</option>
														<option value="PG">Papua New Guinea</option>
														<option value="PY">Paraguay</option>
														<option value="PE">Peru</option>
														<option value="PH">Philippines</option>
														<option value="PN">Pitcairn</option>
														<option value="PL">Poland</option>
														<option value="PT">Portugal</option>
														<option value="PR">Puerto Rico</option>
														<option value="QA">Qatar</option>
														<option value="RE">Réunion</option>
														<option value="RO">Romania</option>
														<option value="RU">Russian Federation</option>
														<option value="RW">Rwanda</option>
														<option value="BL">Saint Barthélemy</option>
														<option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
														<option value="KN">Saint Kitts and Nevis</option>
														<option value="LC">Saint Lucia</option>
														<option value="MF">Saint Martin (French part)</option>
														<option value="PM">Saint Pierre and Miquelon</option>
														<option value="VC">Saint Vincent and the Grenadines</option>
														<option value="WS">Samoa</option>
														<option value="SM">San Marino</option>
														<option value="ST">Sao Tome and Principe</option>
														<option value="SA">Saudi Arabia</option>
														<option value="SN">Senegal</option>
														<option value="RS">Serbia</option>
														<option value="SC">Seychelles</option>
														<option value="SL">Sierra Leone</option>
														<option value="SG">Singapore</option>
														<option value="SX">Sint Maarten (Dutch part)</option>
														<option value="SK">Slovakia</option>
														<option value="SI">Slovenia</option>
														<option value="SB">Solomon Islands</option>
														<option value="SO">Somalia</option>
														<option value="ZA">South Africa</option>
														<option value="GS">South Georgia and the South Sandwich Islands</option>
														<option value="SS">South Sudan</option>
														<option value="ES">Spain</option>
														<option value="LK">Sri Lanka</option>
														<option value="SD">Sudan</option>
														<option value="SR">Suriname</option>
														<option value="SJ">Svalbard and Jan Mayen</option>
														<option value="SZ">Swaziland</option>
														<option value="SE">Sweden</option>
														<option value="CH">Switzerland</option>
														<option value="SY">Syrian Arab Republic</option>
														<option value="TW">Taiwan, Province of China</option>
														<option value="TJ">Tajikistan</option>
														<option value="TZ">Tanzania, United Republic of</option>
														<option value="TH">Thailand</option>
														<option value="TL">Timor-Leste</option>
														<option value="TG">Togo</option>
														<option value="TK">Tokelau</option>
														<option value="TO">Tonga</option>
														<option value="TT">Trinidad and Tobago</option>
														<option value="TN">Tunisia</option>
														<option value="TR">Turkey</option>
														<option value="TM">Turkmenistan</option>
														<option value="TC">Turks and Caicos Islands</option>
														<option value="TV">Tuvalu</option>
														<option value="UG">Uganda</option>
														<option value="UA">Ukraine</option>
														<option value="AE">United Arab Emirates</option>
														<option value="GB">United Kingdom</option>
														<option value="US">United States</option>
														<option value="UM">United States Minor Outlying Islands</option>
														<option value="UY">Uruguay</option>
														<option value="UZ">Uzbekistan</option>
														<option value="VU">Vanuatu</option>
														<option value="VE">Venezuela, Bolivarian Republic of</option>
														<option value="VN">Viet Nam</option>
														<option value="VG">Virgin Islands, British</option>
														<option value="VI">Virgin Islands, U.S.</option>
														<option value="WF">Wallis and Futuna</option>
														<option value="EH">Western Sahara</option>
														<option value="YE">Yemen</option>
														<option value="ZM">Zambia</option>
														<option value="ZW">Zimbabwe</option>
	                                            	</select>
		                                        </div>
		                                    </div>
		                                </div>
		                            </div>
		                        </div>
		                        <div class="wizard-footer">
		                            <div class="pull-right">
		                                <input type='button' class='btn btn-next btn-fill btn-primary btn-wd' name='next' value='Next' />
		                                <input type='submit' class='btn btn-finish btn-fill btn-primary btn-wd' name='finish' value='Finish' />
		                            </div>

		                            <div class="pull-left">
		                                <input type='button' class='btn btn-previous btn-fill btn-default btn-wd' name='previous' value='Previous' />
		                            </div>
		                            <div class="clearfix"></div>
		                        </div>
		                    </form>
		                </div>
		            </div> <!-- wizard container -->
		        </div>
	        </div><!-- end row -->
	    </div> <!--  big container -->
	    </div>
	</div>
</template>

<script>
	// import '../../assets/js/jquery-3.2.1.js'
	import '@/assets/js/material.min.js'
	import '@/assets/js/material-kit.js'
	import '@/assets/js/jquery.validate.min.js'
	import '@/assets/js/material-bootstrap-wizard.js'
	export default {
		name: 'SignUpMain',
		mounted: function () {
			var searchVisible = 0;
			var transparent = true;
			var mobile_device = false;

			$(document).ready(function(){

			    $.material.init();

			    /*  Activate the tooltips      */
			    $('[rel="tooltip"]').tooltip();

			    // Code for the Validator
			    var $validator = $('.wizard-card form').validate({
					  rules: {
					    firstname: {
					      required: true,
					      minlength: 3
					    },
					    lastname: {
					      required: true,
					      minlength: 3
					    },
			            username: {
			              required: true,
			              minlength: 3
			            },
					    email: {
					      required: true,
					      minlength: 3,
					    },
			            password: {
			                required: true,
			                minlength: 3,
			            },
			            current_password: {
			                required: true,
			                minlength: 3,
			            },
			            cpassword: {
			                equalTo: '#password',
			            },
			            add1: {
			                required: true,
			                minlength: 3,
			            },
			            add2: {
			                required: true,
			                minlength: 3,
			            },
			            city: {
			                required: true,
			                minlength: 3,
			            },
			            state: {
			                required: true,
			                minlength: 3,
			            },
			            zipcode: {
			                required: true,
			                minlength: 3,
			            }

			        },

			        errorPlacement: function(error, element) {
			            $(element).parent('div').addClass('has-error');
			         }
				});

			    // Wizard Initialization
			  	$('.wizard-card').bootstrapWizard({
			        'tabClass': 'nav nav-pills',
			        'nextSelector': '.btn-next',
			        'previousSelector': '.btn-previous',

			        onNext: function(tab, navigation, index) {
			        	var $valid = $('.wizard-card form').valid();
			        	if(!$valid) {
			        		$validator.focusInvalid();
			        		return false;
			        	}
			        },

			        onInit : function(tab, navigation, index){
			            //check number of tabs and fill the entire row
			            var $total = navigation.find('li').length;
			            var $wizard = navigation.closest('.wizard-card');

			            $first_li = navigation.find('li:first-child a').html();
			            $moving_div = $('<div class="moving-tab">' + $first_li + '</div>');
			            $('.wizard-card .wizard-navigation').append($moving_div);

			            refreshAnimation($wizard, index);

			            $('.moving-tab').css('transition','transform 0s');
			       },

			        onTabClick : function(tab, navigation, index){
			            var $valid = $('.wizard-card form').valid();

			            if(!$valid){
			                return false;
			            } else{
			                return true;
			            }
			        },

			        onTabShow: function(tab, navigation, index) {
			            var $total = navigation.find('li').length;
			            var $current = index+1;

			            var $wizard = navigation.closest('.wizard-card');

			            // If it's the last tab then hide the last button and show the finish instead
			            if($current >= $total) {
			                $($wizard).find('.btn-next').hide();
			                $($wizard).find('.btn-finish').show();
			            } else {
			                $($wizard).find('.btn-next').show();
			                $($wizard).find('.btn-finish').hide();
			            }

			            button_text = navigation.find('li:nth-child(' + $current + ') a').html();

			            setTimeout(function(){
			                $('.moving-tab').text(button_text);
			            }, 150);

			            var checkbox = $('.footer-checkbox');

			            if( !index == 0 ){
			                $(checkbox).css({
			                    'opacity':'0',
			                    'visibility':'hidden',
			                    'position':'absolute'
			                });
			            } else {
			                $(checkbox).css({
			                    'opacity':'1',
			                    'visibility':'visible'
			                });
			            }

			            refreshAnimation($wizard, index);
			        }
			  	});


			    // Prepare the preview for profile picture
			    $("#wizard-picture").change(function(){
			        readURL(this);
			    });

			    $('[data-toggle="wizard-radio"]').click(function(){
			        wizard = $(this).closest('.wizard-card');
			        wizard.find('[data-toggle="wizard-radio"]').removeClass('active');
			        $(this).addClass('active');
			        $(wizard).find('[type="radio"]').removeAttr('checked');
			        $(this).find('[type="radio"]').attr('checked','true');
			    });

			    $('[data-toggle="wizard-checkbox"]').click(function(){
			        if( $(this).hasClass('active')){
			            $(this).removeClass('active');
			            $(this).find('[type="checkbox"]').removeAttr('checked');
			        } else {
			            $(this).addClass('active');
			            $(this).find('[type="checkbox"]').attr('checked','true');
			        }
			    });

			    $('.set-full-height').css('height', 'auto');

			});



			 //Function to show image before upload

			function readURL(input) {
			    if (input.files && input.files[0]) {
			        var reader = new FileReader();

			        reader.onload = function (e) {
			            $('#wizardPicturePreview').attr('src', e.target.result).fadeIn('slow');
			        }
			        reader.readAsDataURL(input.files[0]);
			    }
			}

			$(window).resize(function(){
			    $('.wizard-card').each(function(){
			        $wizard = $(this);

			        index = $wizard.bootstrapWizard('currentIndex');
			        refreshAnimation($wizard, index);

			        $('.moving-tab').css({
			            'transition': 'transform 0s'
			        });
			    });
			});

			function refreshAnimation($wizard, index){
			    $total = $wizard.find('.nav li').length;
			    $li_width = 100/$total;

			    total_steps = $wizard.find('.nav li').length;
			    move_distance = $wizard.width() / total_steps;
			    index_temp = index;
			    vertical_level = 0;

			    mobile_device = $(document).width() < 600 && $total > 3;

			    if(mobile_device){
			        move_distance = $wizard.width() / 2;
			        index_temp = index % 2;
			        $li_width = 50;
			    }

			    $wizard.find('.nav li').css('width',$li_width + '%');

			    step_width = move_distance;
			    move_distance = move_distance * index_temp;

			    $current = index + 1;

			    if($current == 1 || (mobile_device == true && (index % 2 == 0) )){
			        move_distance -= 8;
			    } else if($current == total_steps || (mobile_device == true && (index % 2 == 1))){
			        move_distance += 8;
			    }

			    if(mobile_device){
			        vertical_level = parseInt(index / 2);
			        vertical_level = vertical_level * 38;
			    }

			    $wizard.find('.moving-tab').css('width', step_width);
			    $('.moving-tab').css({
			        'transform':'translate3d(' + move_distance + 'px, ' + vertical_level +  'px, 0)',
			        'transition': 'all 0.5s cubic-bezier(0.29, 1.42, 0.79, 1)'

			    });
			}

			materialDesign = {

			    checkScrollForTransparentNavbar: debounce(function() {
			                if($(document).scrollTop() > 260 ) {
			                    if(transparent) {
			                        transparent = false;
			                        $('.navbar-color-on-scroll').removeClass('navbar-transparent');
			                    }
			                } else {
			                    if( !transparent ) {
			                        transparent = true;
			                        $('.navbar-color-on-scroll').addClass('navbar-transparent');
			                    }
			                }
			        }, 17)

			}

			function debounce(func, wait, immediate) {
				var timeout;
				return function() {
					var context = this, args = arguments;
					clearTimeout(timeout);
					timeout = setTimeout(function() {
						timeout = null;
						if (!immediate) func.apply(context, args);
					}, wait);
					if (immediate && !timeout) func.apply(context, args);
				};
			};
		}
	}
</script>

<style scoped>
	@import '../../assets/css/material-kit.css';
	@import '../../assets/css/material-bootstrap-wizard.css';
	
</style>