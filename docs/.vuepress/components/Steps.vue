<template>
  <div class="container">
    <z-card>
      <z-steps :active="active" space="250">
      <z-step title="步骤1"></z-step>
      <z-step title="步骤2"></z-step>
      <z-step title="步骤3"></z-step>
      </z-steps>
      <z-button type="primary" @click="nextStep">下一步</z-button>
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
import zSteps from '../../../src/components/z-steps'
import zStep from '../../../src/components/z-step'
import zButton from '../../../src/components/z-button'

import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'Steps',
  components:{
    'z-card': zCard,
    'z-steps': zSteps,
    'z-step': zStep,
    'z-button': zButton
  },
  data(){
    return {
      active: 0,
      code: `
        <template>
          <z-steps :active="active">
          <z-step title="步骤1"></z-step>
          <z-step title="步骤2"></z-step>
          <z-step title="步骤3"></z-step>
          </z-steps>
          <z-button type="primary" @click="nextStep">下一步</z-button>
        </template>
        export default {
          methods:{
          nextStep(){
            if(this.active++ >1) this.active = 0;
            }
          }
        }
      `
    }
  },
  methods:{
    nextStep(){
      if(this.active++ >1) this.active = 0;
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
