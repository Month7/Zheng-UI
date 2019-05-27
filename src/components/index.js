import Vue from 'vue';
import zButton from './z-button';

const Components = {
  'z-button': zButton
}

Object.keys(Components).forEach(name => {
  Vue.component(name,Components[name])
})

export default Components