<template>
  <div class="z_input_dropdown_item" @click.stop="setValue" :class="disabled?'z_input_dropdown_item_disabled':''">
    <li :style="selected?'color:#409eff':''">
      {{label}}
    </li>
  </div>
</template>
<script>
import { eventBus } from './eventBus'
export default {
  name: 'z-option',
  data() {
    return {
      selected: this.contains(this.select.value,this.value)
    }
  },
  inject:['select'],
  props: {
    label: {
      type: String,
    },
    value: {

    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // selected () {
    //   return this.contains(this.select.value,this.value)
    // }
  },
  methods:{
    contains(arr = [],target){
      if(arr === null) {
        return false
      }
      return arr.indexOf(target) !== -1
    },
    setValue() {
      if(this.disabled) return
      this.selected = !this.selected
      eventBus.$emit('changeValue',this.value,this.label,this.$parent)
      eventBus.$emit('close',this.$parent)
      
    }
  }
}
</script>
<style>
*{
  padding: 0;
  margin: 0;
}

.z_input_dropdown_item{
  font-size: 14px;
  padding: 0 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #606266;
  height: 34px;
  line-height: 34px;
  box-sizing: border-box;
  cursor: pointer;
  list-style-type: none;
}
.z_input_dropdown_item:hover{
  background-color: #f5f7fa;
  color: #409eff;
}

.z_input_dropdown_item_disabled{
  cursor: not-allowed;
  color: #c0c4cc;
}
.z_input_dropdown_item_disabled:hover{
  cursor: not-allowed;
  color: #c0c4cc;
}
</style>