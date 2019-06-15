<template>
  <div class="container">
    <z-card>
     <z-tab>
       <z-tab-head>
         <z-tab-item name="1">阿里</z-tab-item>
         <z-tab-item name="2">腾讯</z-tab-item>
         <z-tab-item name="3">百度</z-tab-item>
       </z-tab-head>
       <z-tab-body>
          <z-tab-panel name="1">
          阿里阿里阿里阿里
          </z-tab-panel>
          <z-tab-panel name="2">
          腾讯腾讯腾讯腾讯
          </z-tab-panel>
          <z-tab-panel name="3">
          百度百度百度百度
          </z-tab-panel>
       </z-tab-body>
     </z-tab>
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
import zTab from '../../../src/components/z-tab/z-tab'
import zTabHead from '../../../src/components/z-tab/z-tab-head'
import zTabItem from '../../../src/components/z-tab/z-tab-item'
import zTabBody from '../../../src/components/z-tab/z-tab-body'
import zTabPanel from '../../../src/components/z-tab/z-tab-panel'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'Tabs',
  components:{
    'z-card': zCard,
    'z-tab': zTab,
    'z-tab-head': zTabHead,
    'z-tab-item': zTabItem,
    'z-tab-body': zTabBody,
    'z-tab-panel': zTabPanel
  },
  data(){
    return {
      code: `
        <z-tab>
          <z-tab-head>
            <z-tab-item name="1">阿里</z-tab-item>
            <z-tab-item name="2">腾讯</z-tab-item>
            <z-tab-item name="3">百度</z-tab-item>
          </z-tab-head>
          <z-tab-body>
              <z-tab-panel name="1">
              阿里阿里阿里阿里
              </z-tab-panel>
              <z-tab-panel name="2">
              腾讯腾讯腾讯腾讯
              </z-tab-panel>
              <z-tab-panel name="3">
              百度百度百度百度
              </z-tab-panel>
          </z-tab-body>
        </z-tab>
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
