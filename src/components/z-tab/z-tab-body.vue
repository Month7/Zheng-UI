<template>
  <div class="z-tab-body">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name: 'z-tab-body',
  
  data(){
    return {
      visable: false,
      
    }
  },
  computed:{
    selectedTab(){
      return this.$store.selectedTab
    }
  }
}
</script>
<style>
.z-tab-body{
  padding: .5em .2em;
}
</style>
