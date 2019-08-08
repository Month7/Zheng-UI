<template>
  <div class="container">
    <z-card>
      <z-progress 
      :percentage="percentage" 
      :strokeWidth="strokeWidth"
      ></z-progress>
      <div style="display:flex">
        <z-button type="primary" @click="addProgress">+</z-button>
        <z-button type="warn" @click="subProgress">-</z-button>
      </div>
      
    </z-card>
  </div>
</template>
<script>
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
import zProgress from '../../../src/components/z-progress'
import zCard from '../../../src/components/z-card'
import zButton from '../../../src/components/z-button'
Vue.use(VueHighlightJS)

export default {
  name: 'Progress',
  components:{
    'z-progress': zProgress,
    'z-card': zCard,
    'z-button': zButton
  },
  methods:{
    addProgress() {
      this.percentage += 10;
    },
    subProgress() {
      this.percentage -= 10;
    }
  },
  data(){
    return {
      percentage: 0,
      strokeWidth: 220,
      code1: `
        <template>
          <div style="display:flex">
            <z-button type="primary" @click="showModal">点我</z-button>
          </div> 
        </template>
        export default{
          methods:{
            showModal(){
              this.$modal({
                title: '这是一个title',
                content: '这是content',
              });
            }
          },
        }
       `,
   
    }
  }
}
</script>
<style>

</style>
