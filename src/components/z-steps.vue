<template>
  <div class="steps-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'z-steps',
  props: ['active','space'],
  watch:{
    active(active){
      this.setStep(active)
    }
  },
  mounted(){
    this.$children.forEach((step)=>{
      step.space = this.space;
      step.initSpace(this.space)
      // console.log(step)
    })
  },
  methods: {
    setStep(active){
      this.$children.forEach((step)=>{
        step.active = active;
        // console.log(step)
      })
    }
  } 
}
</script>
<style>
.steps-container{
  display: flex;
  margin: 10px;
}
</style>
