<template>
  <div class="container">
    <z-card>
      <z-select v-model="value">
        <z-option v-for="(item,index) in options" 
        :value="item.value" 
        :label="item.label">
        </z-option>
      </z-select>
      <template v-slot:code>
        <highlight-code>
          {{code1}}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>
import zSelect from '../../../src/components/z-select/z-select'
import zOption from '../../../src/components/z-select/z-option'
import zCard from '../../../src/components/z-card'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)

export default {
  name: 'Select',
  components:{
    'z-select': zSelect,
    'z-card': zCard,
    'z-option': zOption
  },
  methods:{

  },
  data(){
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: null,
      code1: `
        <template>
          <z-select v-model="value">
            <z-option v-for="(item,index) in options" 
            :value="item.value" 
            :label="item.label">
            </z-option>
          </z-select>
        </template>
        export default{
          data(){
            return {
              options: [{
                value: '选项1',
                label: '黄金糕'
              }, {
                value: '选项2',
                label: '双皮奶'
              }, {
                value: '选项3',
                label: '蚵仔煎'
              }, {
                value: '选项4',
                label: '龙须面'
              }, {
                value: '选项5',
                label: '北京烤鸭'
              }],
              value: null,
            }
          }
       `,
    }
  }
}
</script>
<style>

</style>
