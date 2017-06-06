<template>
	<div class="changepassword">
		<div class="card">
            <div class="card-header" data-background-color="purple">
                <h4 class="title">Change Password</h4>
                <p class="category">Change your old password with new.</p>
            </div>
            <div class="card-content table-responsive">
                <form>
                	<div class="col-sm-12" style="padding-left: 6px">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="material-icons">lock_open</i>
							</span>
							<div class="form-group label-floating">
                                <label class="control-label">Current Password <small>(required)</small></label>
                                <input id="password" name="current_password" type="password" class="form-control">
                            </div>
						</div>
                	</div>

                	<div class="col-sm-12">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="material-icons">lock_open</i>
							</span>
							<div class="form-group label-floating">
                                <label class="control-label">New Password <small>(required)</small></label>
                                <input id="password" name="password" type="password" class="form-control">
                            </div>
						</div>
                	</div>

                	<div class="col-sm-12">
						<div class="input-group">
							<span class="input-group-addon">
								<i class="material-icons">lock_outline</i>
							</span>
							<div class="form-group label-floating">
                                <label class="control-label">Confirm New Password <small>(must match)</small></label>
                                <input id="cpassword" name="cpassword" type="password" class="form-control">
                            </div>
						</div>
                	</div>

                	<button type="submit" class="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        </div>
	</div>
</template>

<script>
	export default {
		name: 'ChangePassword'
	}
</script>