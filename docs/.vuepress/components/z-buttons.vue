<template>
  <div class="container">
    <h3>基础用法</h3>
    <z-card>
      <div class="btn-group">
        <z-button type="primary" @click="test">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="info">信息按钮</z-button>
        <z-button type="warn">警告按钮</z-button>
        <z-button type="danger">危险按钮</z-button> 
      </div> 
      <template v-slot:code>
        <highlight-code>
          {{code1}}
		    </highlight-code>
      </template>
    </z-card>
    <h3>禁用状态</h3>
    <z-card>
      <div class="btn-group">
        <z-button type="primary" disabled>主要按钮</z-button>
        <z-button type="success" disabled>成功按钮</z-button>
        <z-button type="info" disabled>信息按钮</z-button>
        <z-button type="warn" disabled>警告按钮</z-button>
        <z-button type="danger" disabled>危险按钮</z-button>
      </div>
      <template v-slot:code>
        <highlight-code>
          {{code2}}
		    </highlight-code>
      </template>
    </z-card>
    
  </div>
</template>
<script>
import zButton from '../../../src/components/z-button'
import zCard from '../../../src/components/z-card'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import zhengUI from '../../../src/components/index'
import zModal from '../../../src/components/z-modal'
Vue.use(VueHighlightJS)
Vue.use(zhengUI)
Vue.prototype.$test = () => {
  const Constructor = Vue.extend(zModal)
  var modal = new Constructor();
  modal.$mount();
  document.body.appendChild(modal.$el);
  console.log(modal)
}

export default {
  name: 'z-buttons',
  components:{
    'z-button': zButton,
    'z-card': zCard
  },
  methods:{
    test(){
      this.$test();

    }
  },
  data(){
    return {
      code1: `
        <z-button type="primary">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="info">信息按钮</z-button>
        <z-button type="warn">警告按钮</z-button>
        <z-button type="danger">危险按钮</z-button> 
        `,
      code2: `
        <z-button type="primary" disabled>主要按钮</z-button>
        <z-button type="success" disabled>成功按钮</z-button>
        <z-button type="info" disabled>信息按钮</z-button>
        <z-button type="warn" disabled>警告按钮</z-button>
        <z-button type="danger" disabled>危险按钮</z-button>
        `,
    }
  }
}
</script>
<style>
.btn-group{
  display: flex;
  flex-wrap: wrap;
}
</style>
