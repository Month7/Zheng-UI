<template>
  <div class="">
    <slot></slot>
  </div>
</template>
<script>
import Vue from 'vue';
export default {
  name: 'z-tab',
  data(){
    return {
      name: null,
      eventBus: new Vue()
    }
  },
  mounted(){
    var name = this.$children[1].$children[0].name
    this.eventBus.$emit('changeName',name);
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  }
}
</script>
<style>

</style>
