<template>
  <div class="z_input_dropdown_item" @click="setValue">
    <li>
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
    }
  },
  props: {
    label: {
      type: String,
    },
    value: {

    }
  },
  methods:{
    setValue() {
      eventBus.$emit('changeValue',this.value,this.label)
      eventBus.$emit('close',this.value)
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
</style>