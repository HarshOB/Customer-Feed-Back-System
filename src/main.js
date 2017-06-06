// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/bootstrap.min.css'
// import '@/assets/css/material-kit.css'
import '@/assets/css/demo.css'
// import '@/assets/css/material-bootstrap-wizard.css'
// import '@/assets/css/material-dashboard.css'
import '@/assets/css/main.css'
import '@/assets/js/jquery-3.2.1.js'
import '@/assets/js/bootstrap.min.js'
// import '@/assets/js/material.min.js'
import '@/assets/js/nouislider.min.js'
import '@/assets/js/bootstrap-datepicker.js'
// import '@/assets/js/material-kit.js'
import '@/assets/js/bootstrap-notify.js'
// import '@/assets/js/chartist.min.js'
import '@/assets/js/demo.js'
import '@/assets/js/jquery.bootstrap.js'
import '@/assets/js/jquery.validate.min.js'
import '@/assets/js/main.js'
import '@/assets/js/jqueryUI.js'
// import '@/assets/js/formbuilder.js'
// import '@/assets/js/material-bootstrap-wizard.js'
// import '@/assets/js/material-dashboard.js'


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
