<template>
  <div class="container">
    <z-card>
      <z-rate :value.sync="value1" :max="max"></z-rate>
      <template v-slot:code>
        <highlight-code>
          {{code1}}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>
import zRate from '../../../src/components/z-rate'
import zCard from '../../../src/components/z-card'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)

export default {
  name: 'Rate',
  components:{
    'z-rate': zRate,
    'z-card': zCard
  },
  methods:{

  },
  data(){
    return {
      value1: 2,
      max: 5,
      code1: `
        <template>
          <z-rate :value.sync="value1"></z-rate>
        </template>
        export default{
          data(){
            return {
              value1: 2,
              max: 5
            }
          }
        }
       `,
   
    }
  }
}
</script>
<style>

</style>
