<template>
  <div>
    <div class="z_input_outer">
      <div v-if="multiple">
        <input type="text" 
        @click.stop="showValues" 
        placeholder="请选择"
        class="z_input_inner" 
        v-model="value"
        style="display:none"/>
        <div class="z_input_inner_multiple" @click.stop="showValues">
          <span v-for="(item,index) in label" :key="index" class="z_input_inner_item">
          {{item}}
          </span>
        </div>
        
        <ul class="z_input_dropdown" v-if="showValuesFlag">
          <slot></slot>
        </ul>
      </div>
      <div v-else>
        <input type="text" 
        v-model="label" 
        @click.stop="showValues" 
        placeholder="请选择"
        class="z_input_inner"
        />
        <ul class="z_input_dropdown" v-if="showValuesFlag">
          <slot></slot>
        </ul>
      </div>
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
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showValuesFlag: false,
      label: null,
    }
  },
  computed: {
    
  },
  provide(){
    return {
      'select': this
    }
  },
  mounted() {
    eventBus.$on('changeValue',(value,label,curent) => {
      if (curent !== this) return
      if(this.multiple) {
        var arr = [...this.value]
        var arr2 = []
        if(Array.isArray(this.label)){
          arr2 = [...this.label]
        } 
        if(arr.indexOf(value) !== -1) {
          arr.splice(arr.indexOf(value),1)
        } else {
          arr.push(value)
        }
        if(arr2.indexOf(label) !== -1) {
          arr2.splice(arr2.indexOf(label),1)
        } else {
          arr2.push(label)
        }
        this.label = arr2
        this.$emit('input',arr)
      } else {
        this.label = label
        this.$emit('input',value)
      }
      
    }) 
    eventBus.$on('close',(curent) => {
      if(curent !== this) return
      if(this.multiple !== true){
        this.showValuesFlag = false
      } 
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
  cursor: pointer;
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
.z_input_inner_multiple{
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  outline: none;
  padding: 5px 15px;
  transition: border-color .2s cubic-bezier(.645,.045,.355,1);
  width: 240px;
  display: flex;
  flex-wrap: wrap;
  min-height: 30px;
}
.z_input_outer{
  position: relative;
}
.z_input_inner_item{
  background-color: #f4f4f5;
  border: 1px solid #e9e9eb;
  border-radius: 4px;
  color: #909399;
  height: 24px;
  padding: 0 8px;
  line-height: 22px;
  font-size: 12px;
  margin: 2px 3px;
}
</style>