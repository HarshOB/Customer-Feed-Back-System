<template>
  <div class="formbuilder">
    <div class="row">
      <div class="col-md-12">
<<<<<<< HEAD
=======
        <!-- Form Builder -->
>>>>>>> 7496e47df84503ff7dde1579728a9b6fecb43533
        <div id="build-wrap"></div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <a href="#" id="prev-general" class="btn btn-default pull-left">Previous</a>
        <a href="#" id="next-final" class="btn btn-primary pull-right">Next</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormBuilder',
     mounted: function () {
      jQuery(function($) {
        var fbTemplate = document.getElementById('build-wrap');
        $(fbTemplate).formBuilder();
      });
    }
  }
<<<<<<< HEAD
</script>
=======
</script>
>>>>>>> 7496e47df84503ff7dde1579728a9b6fecb43533
