<template>
  <div v-show="visible">
    <slot></slot>
  </div>
</template>
<script>
export default {
  data(){
    return {
      visible: true,
    }
  },
  inject:['eventBus'],
  props:['name'],
  created(){
    
    this.eventBus.$on('changeName',(name)=>{
      this.visible = name == this.name ? true: false;
    })
  },
}
</script>
<style>

</style>
