<template>
  <div class="container">
    <h3>基础用法</h3>
    <h5>适用广泛的基础单选</h5>
    <z-card>
      <z-select v-model="value">
        <z-option v-for="(item,index) in options" 
        :value="item.value" 
        :label="item.label"
        >
        </z-option>
      </z-select>
      <template v-slot:code>
        <highlight-code>
          {{code1}}
		    </highlight-code>
      </template>
    </z-card>
    <h3>有禁用选项</h3>
    <h5>在z-option中，设定disabled值为 true，即可禁用该选项</h5>
    <z-card>
      <z-select v-model="value">
        <z-option v-for="(item,index) in options" 
        :value="item.value" 
        :label="item.label"
        :disabled="item.disabled">
        </z-option>
      </z-select>
      <template v-slot:code>
        <highlight-code>
          {{code2}}
		    </highlight-code>
      </template>
    </z-card>
    <h3>基础多选</h3>
    <h5>提供多选</h5>
    <z-card>
      <z-select v-model="value2" multiple >
        <z-option v-for="(item,index) in options2" 
        :value="item.value" 
        :label="item.label"
        >
        </z-option>
      </z-select>
      <template v-slot:code>
        <highlight-code>
          {{code2}}
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
        label: '黄金糕',
        disabled: false
      }, {
        value: '选项2',
        label: '双皮奶',
        disabled: true
      }, {
        value: '选项3',
        label: '蚵仔煎',
        disabled: false
      }, {
        value: '选项4',
        label: '龙须面',
        disabled: false
      }, {
        value: '选项5',
        label: '北京烤鸭',
        disabled: false
      }],
      options2: [{
        value: '多选1',
        label: '吃饭',
        disabled: false
      }, {
        value: '多选2',
        label: '睡觉',
        disabled: true
      }, {
        value: '多选3',
        label: '上班',
        disabled: false
      }, {
        value: '多选4',
        label: '看电影',
        disabled: false
      }, {
        value: '多选5',
        label: '发呆',
        disabled: false
      }],
      value: null,
      value2: [],
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
      code2: `
        <template>
          <z-select v-model="value">
            <z-option v-for="(item,index) in options" 
            :value="item.value" 
            :label="item.label"
            :disabled="item.disabled">
            </z-option>
          </z-select>
        </template>
        export default{
          data(){
            return {
              options: [{
                value: '选项1',
                label: '黄金糕',
                disabled: false
              }, {
                value: '选项2',
                label: '双皮奶',
                disabled: true
              }, {
                value: '选项3',
                label: '蚵仔煎',
                disabled: false
              }, {
                value: '选项4',
                label: '龙须面',
                disabled: false
              }, {
                value: '选项5',
                label: '北京烤鸭',
                disabled: false
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
h3{
  margin: 20px 0;
  font-weight: normal;
}
h5{
  margin: 20px 0;
  font-weight: normal;
}
</style>
