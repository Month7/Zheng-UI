<template>
  <div>
    <div class="z_input_outer">
      <input type="text" 
      v-model="label2" 
      @click.stop="showValues" 
      placeholder="请选择"
      class="z_input_inner"
      />
      <ul class="z_input_dropdown" v-if="showValuesFlag">
        <slot></slot>
      </ul>
      
    </div>
  </div>
</template>
<script>
import { eventBus } from './eventBus'
export default {
  name: 'z-select',
  props: {
    value: {

    },
    label: {

    }
  },
  data() {
    return {
      showValuesFlag: false,
      label2: this.label
    }
  },
  computed: {
    
  },
  mounted() {
    eventBus.$on('changeValue',(value,label) => {
      this.label2 = label
      this.$emit('input',value)
    }) 
    eventBus.$on('close',(value) => {
      this.showValuesFlag = false
    })
  },
  methods:{
    showValues () {
      this.showValuesFlag = !this.showValuesFlag
    },
  },
  watch:{
    showValuesFlag(oldVal,newVal) {
      if(newVal === false) {
        document.body.addEventListener('click',()=>{
          this.showValuesFlag = false
        })
      }
    }
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}
.z_input_dropdown{
  z-index: 1001;
  border: 1px solid #e4e7ed;
  border-radius: 4px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  box-sizing: border-box;
  margin: 5px 0;
  width: 240px;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  cursor: pointer;

  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 0px;
}


.z_input_inner{
  -webkit-appearance: none;
  background-color: #fff;
  background-image: none;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 240px;
}
.z_input_outer{
  
  position: relative;
}
</style>