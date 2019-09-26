<template>
  <div class="z-layout">
    <h3>默认布局</h3>
    <z-card>
      <z-row>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#BF827E"></div>
        </z-col>
      </z-row>
      <template v-slot:code>
        <highlight-code>
          {{code}}
        </highlight-code>
      </template>
    </z-card>
    <h3>分栏间隔</h3>
    <h4>Row 组件 提供 gutter 属性来指定每一栏之间的间隔，默认间隔为 0。</h4>
    <z-card>
      <z-row gutter=20>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#BF827E"></div>
        </z-col>
      </z-row>
      <template v-slot:code>
        <highlight-code>
          {{code1}}
        </highlight-code>
      </template>
    </z-card>
    <!--分栏偏移-->
    
    <h3>分栏偏移</h3>
    <h4>支持偏移指定的栏数。</h4>
    <z-card>
      <z-row>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </z-col>
        <z-col span=4 offset=4>
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </z-col>
      </z-row>
      <template v-slot:code>
        <highlight-code>
          {{code2}}
        </highlight-code>
      </template>
    </z-card>
    <!--响应式布局-->
    <h3>响应式布局</h3>
    <h4>参照了 Bootstrap 的 响应式设计，预设了五个响应尺寸：xs、sm、md、lg 和 xl。</h4>
    <z-card>
      <z-row>
        <z-col span=4 :xs="{span:1}" :sm="{span:7}">
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </z-col>
        <z-col span=4 :xs="{span:1,offset:2}" :sm="{span:7}">
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#BF827E"></div>
        </z-col>
      </z-row>
      <template v-slot:code>
        <highlight-code>
          {{code3}}
        </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>
import zCard from '../../../src/components/z-card'
import zRow from '../../../src/components/layout/z-row'
import zCol from '../../../src/components/layout/z-col'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  data () {
    return {
      code: `
      <z-row>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
        </z-col>
        <z-col span=4>
          <div class="demo-col" style="backgroundColor:#BF827E"></div>
        </z-col>
      </z-row>
      `,
      code1: `
        <z-row gutter=20>
          <z-col span=4>
            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
          </z-col>
          <z-col span=4>
            <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
          </z-col>
          <z-col span=4>
            <div class="demo-col" style="backgroundColor:#BF827E"></div>
          </z-col>
        </z-row>
      `,
      code2: `
        <z-row>
          <z-col span=4>
            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
          </z-col>
          <z-col span=4 offset=4>
            <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
          </z-col>
        </z-row>
      `,
      code3: `
        <z-row>
          <z-col span=4 :xs="{span:1}" :sm="{span:7}">
            <div class="demo-col" style="backgroundColor:#d4b1b5"></div>
          </z-col>
          <z-col span=4 :xs="{span:1,offset:2}" :sm="{span:7}">
            <div class="demo-col" style="backgroundColor:#E3CBA8"></div>
          </z-col>
          <z-col span=4>
            <div class="demo-col" style="backgroundColor:#BF827E"></div>
          </z-col>
        </z-row>
      `
    }
  },
  components: {
    'z-row': zRow,
    'z-col': zCol,
    'z-card': zCard
  }
}
</script>
<style>
h3 {
  font-weight: normal;
  margin-bottom: 10px;
}
h4 {
  font-weight: normal;
}
.z-row {
  height: 30px;
}
.demo-col {
  height: 30px;
  width: 100%;
}
</style>