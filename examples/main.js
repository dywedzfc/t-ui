import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import TUi from '../packages'

Vue.use(TUi)

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
}).$mount('#app')
