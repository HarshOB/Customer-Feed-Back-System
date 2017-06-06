<template>
  <div class="newfeedback">
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-nav-tabs">
              <div class="card-header" data-background-color="purple">
                <div class="nav-tabs-navigation">
                  <div class="nav-tabs-wrapper">
                    <span class="nav-tabs-title">New Feedback Details:</span>
                    <ul class="nav nav-tabs" data-tabs="tabs">
                      <li class="active">
                        <a href="#general" data-toggle="tab" id="general-tab">
                          <i class="material-icons">description</i>
                          General
                        <div class="ripple-container"></div></a>
                      </li>
                      <li class="">
                        <a href="#form" data-toggle="tab" id="form-tab">
                          <i class="material-icons">code</i>
                          Feedback Form
                        <div class="ripple-container"></div></a>
                      </li>
                      <li class="">
                        <a href="#final" data-toggle="tab" id="final-tab">
                          <i class="material-icons">done_all</i>
                          Finalization
                        <div class="ripple-container"></div></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <form method="" action="" class="">
                <div class="card-content">
                  <div class="tab-content">
                    <div class="tab-pane active" id="general">
                      <component :is="general"></component>         
                    </div>
                    <div class="tab-pane" id="form">
                      <component :is="formbuilder"></component>
                    </div>
                    <div class="tab-pane" id="final">
                      <div class="row">
                        <div class="col-md-12">
                          <a href="#" id="prev-form" class="btn btn-default pull-left">Previous</a>
                          <button type="submit" id="submit" class="btn btn-primary pull-right">Submit</button>    
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import '../../assets/js/material.min.js'
  import '../../assets/js/material-dashboard.js'
  import '../../assets/js/formbuilder.js'
  import General from './newfeedback/General'
  import FormBuilder from './newfeedback/FormBuilder'
  export default {
    name: 'NewFeedback',
    components: {
      General, FormBuilder
    },
    data() {
      return {
        general: 'General',
        formbuilder: 'FormBuilder'
      }
    },
  }
</script>

<style scoped>
  @import '../../assets/css/material-dashboard.css'
</style>