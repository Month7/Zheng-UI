import Vue from 'vue'
import App from './App.vue'
import VueHighlightJS from 'vue-highlight.js'
import 'highlight.js/styles/default.css';

Vue.use(VueHighlightJS)

// Vue.directive('focus',{
//   bind: function (el, binding, vnode){
//     console.log(el);
//   }
// })



Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})