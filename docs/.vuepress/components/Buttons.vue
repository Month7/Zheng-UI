<template>
  <div class="container">
    <h3>基础用法</h3>
    <z-card>
      <div class="btn-group">
        <z-button type="primary">主要按钮</z-button>
        <z-button type="success">成功按钮</z-button>
        <z-button type="info">信息按钮</z-button>
        <z-button type="warn">警告按钮</z-button>
        <z-button type="danger">危险按钮</z-button> 
      </div> 
      <template v-slot:code>
        <highlight-code>
          {{ code1 }}
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
          {{ code2 }}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>

<script lang="tsx">
import { Component } from 'vue-property-decorator'
import Vue from 'vue'
import zhengUI from '../../../src/components/index'
import zButton from '../../../src/components/z-button.vue'
import zCard from '../../../src/components/z-card.vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)

const defaultCode1 = `
  <z-button type="primary">主要按钮</z-button>
  <z-button type="success">成功按钮</z-button>
  <z-button type="info">信息按钮</z-button>
  <z-button type="warn">警告按钮</z-button>
  <z-button type="danger">危险按钮</z-button> 
`

const defaultCode2 = `
  <z-button type="primary" disabled>主要按钮</z-button>
  <z-button type="success" disabled>成功按钮</z-button>
  <z-button type="info" disabled>信息按钮</z-button>
  <z-button type="warn" disabled>警告按钮</z-button>
  <z-button type="danger" disabled>危险按钮</z-button>
`

@Component({
  name: 'buttons',
  components: {
    zButton,
    zCard
  }
})
export default class Buttons extends Vue {
  public code1 = defaultCode1
  public code2 = defaultCode2
  constructor () {
    super()
    this.code1 = defaultCode1
  }
}
</script>
<style>
.btn-group{
  display: flex;
  flex-wrap: wrap;
}
</style>