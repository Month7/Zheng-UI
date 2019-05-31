<template>
  <div class="container">
    
    <z-card>
      <z-datetimepicker v-model="time"></z-datetimepicker>
      <template v-slot:code>
        <highlight-code>
          {{code1}}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>

import zCard from '../../../src/components/z-card'
import zDateTimePicker from '../../../src/components/z-datetimepicker'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'z-datetimepicker2',
  components:{
    
    'z-card': zCard,
    'z-datetimepicker': zDateTimePicker
  },
  data(){
    return {
      time: new Date('2019-05-05'),
      code1: `
        <z-datetimepicker v-model="time"></z-datetimepicker>
        export default {
        data(){
          return {
            time: new Date('2019-05-05')
            }
          }
      }
      `
    }
  }
}
</script>
<style>

</style>
