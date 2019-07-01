<template>
  <div class="z-scroll">
    <z-card>
      Scroll down to see the bottom-right button.
      <div class="high">这个div是用来撑起高度的</div>
      <z-backtop target=".z-scroll">up</z-backtop>
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
import zBacktop from '../../../src/components/z-backtop'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'Backtop',
  components: {
    'z-card': zCard,
    'z-backtop': zBacktop
  },
  data(){
    return {
      code: `
        <template>
          <div class="z-scroll">
            <z-card>
              Scroll down to see the bottom-right button.
              <z-backtop target=".z-scroll">up</z-backtop>
            </z-card>
          </div>
        </template>
      `,

    }
  },
}
</script>
<style>
.high{
  height: 400px;
  border: 1px solid black;
}
</style>
