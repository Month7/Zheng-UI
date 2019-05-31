import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/default.css';
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
