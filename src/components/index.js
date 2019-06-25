import Vue from 'vue';
import zButton from './z-button';
import zCarousel from './z-carousel';
import zDatetimepicker from './z-datetimepicker';

const Components = {
  'z-button': zButton,
  'z-carousel': zCarousel,
  'z-datetimepicker': zDatetimepicker
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  console.log('!!');
  install(window.Vue)
}

const install = function (vue) {
  console.log('执行install')
  vue.wtf = () => {
    console.log('$alert?');
  } 
  vue.prototype.$modal = () => {
    console.log('$alert!');
  }
  console.log(vue.prototype.$modal);
  if(install.installed) return;
  Object.keys(Components).forEach(name => {
    vue.component(name,Components[name])
  })
}

export default {
  install,
  zButton,
  zCarousel,
  zDatetimepicker
}