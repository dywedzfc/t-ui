import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import TUi from 't-ui'
import 't-ui/theme/src/index.scss'

Vue.use(TUi)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
