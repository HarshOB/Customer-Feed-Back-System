<template>
  <div class="general">
    <div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="material-icons">chat</i>
        </span>
        <div class="form-group label-floating">
          <label class="control-label">Feedback Name <small>(required)</small></label>
          <input name="feedbackName" type="text" class="form-control">
        </div>
      </div>
      <div class="input-group">
        <span class="input-group-addon">
          <i class="material-icons">question_answer</i>
        </span>
        <div class="form-group label-floating">
          <label class="control-label">Feedback Type <small>(required)</small></label>
          <input name="firstname" type="text" class="form-control">
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <a href="#" id="next-form" class="btn btn-primary pull-right">Next</a>  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'General'
  }
</script>