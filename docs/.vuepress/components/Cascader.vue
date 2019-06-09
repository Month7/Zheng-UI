<template>
  <div class="container">
    <z-card>
     <z-cascader :options="options" v-model="selected"></z-cascader>
     <template v-slot:code>
        <highlight-code>
          {{code}}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>

import zCard from '../../../src/components/z-card'
import zCascader from '../../../src/components/z-cascader'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'Cascader',
  components:{
    'z-card': zCard,
    'z-cascader': zCascader
  },
  data(){
    return {
      selected: null,
      options:[{
        id:1,
        value: '河北',
        label: '河北',
        children: [{
          id:2,
          value: '唐山',
          label: '唐山'
        },{
          id:3,
          value: '石家庄',
          label: '石家庄'
        }]
        },{
        id:4,
        value: '陕西',
        label: '陕西',
        children: [{
          value: '西安',
          label: '西安'
        }]
        },{
        id: 5,
        value: '江苏',
        label: '江苏'
      }],
      code: `
        <z-carousel>
        <z-carousel-item name="1">
          <div class="box">1</div>
        </z-carousel-item>
        <z-carousel-item name="2">
          <div class="box">2</div>
        </z-carousel-item>
        <z-carousel-item name="3">
          <div class="box">3</div>
        </z-carousel-item>
      </z-carousel>
      `
    }
  }
}
</script>
<style>
.box{
  box-sizing: border-box;
  background: #cccccc;
  height: 200px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
}
</style>
