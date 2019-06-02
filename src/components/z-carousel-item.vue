<template>
  <transition name="fade" tag="div">
    <div class="" v-show="index+1 == this.name">
      <slot></slot>  
    </div>  
  </transition>  
</template>
<script>
export default {
  name: 'z-carousel-item',
  data(){
    return {
      index: 0,
    }
  },
  props:{
    name: String
  }
}
</script>
<style>
.fade-enter-active, .fade-leave-active{
  transition: all 1s;
}
.fade-leave-active{

  position: absolute;
  left: 0;
  top: 0;
}
.fade-enter{
  opacity: 0;
  transform: translateX(100%)
}
.fade-leave, .fade-leave-to{
  opacity: 0;
  transform: translateX(-100%)
}

</style>
