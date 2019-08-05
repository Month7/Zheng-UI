import Vue from 'vue';
import zButton from './z-button';
import zCarousel from './z-carousel';
import zDatetimepicker from './z-datetimepicker';
import zInfinitescroll from './z-infinitescroll';
import zRate from './z-rate';
import zTab from './z-tab/z-tab';
import zBacktop from './z-backtop';
import zToast from './z-toast';
import zModal from './z-modal';

const Components = {
  'z-button': zButton,
  'z-carousel': zCarousel,
  'z-datetimepicker': zDatetimepicker,
  'z-infinitescroll': zInfinitescroll,
  'z-rate': zRate,
  'z-tab': zTab,
  'z-backtop': zBacktop
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const install = function (vue) {
  if(install.installed) return;
  var toast;
  Vue.prototype.$toast = (option) => {
    var Constructor = Vue.extend(zToast);
    if(toast) toast.close();
    toast = new Constructor({propsData:option});
    toast.$mount();
    document.body.appendChild(toast.$el)
  }
  var jsonOption;
  var modal;
  Vue.prototype.$modal = (option) => {
    if(jsonOption !== JSON.stringify(option)) {
      const Constructor = Vue.extend(zModal)
      modal = new Constructor({propsData:option});
      modal.$mount();
      document.body.appendChild(modal.$el);
    }
    modal.visable = true;
    jsonOption = JSON.stringify(option);
  }

  
  Object.keys(Components).forEach(name => {
    vue.component(name,Components[name])
  })
}

export default {
  install,
  zButton,
  zCarousel,
  zDatetimepicker,
  zInfinitescroll,
  zRate,
  zBacktop
}