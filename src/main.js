import Vue from 'vue'
import VueKinesis from 'vue-kinesis'
import App from './App.vue'
import router from './router'

import './assets/scss/tailwind.scss'
import './assets/scss/styles.scss'

Vue.config.productionTip = false

Vue.use(VueKinesis)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
