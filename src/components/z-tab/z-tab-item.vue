<template>
  <div class="z-tab-item" @click="change" :class="isActive">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name:'z-tab-item',
  props: ['name'],
  inject:['eventBus'],
  data(){
    return {
      isActive: ''
    }
  },
  mounted(){
    this.eventBus.$on('changeName',(name)=>{
      this.isActive = name === this.name?'z-tac-active':''
    })
  },
  methods: {
    change(){
      this.eventBus.$emit('changeName',this.name);
    }
  }
}
</script>
<style>
  .z-tab-item{
    cursor: pointer;
    padding: 8px 16px;
  }
  .z-tac-active{
    color: #3BA0E9;
    border-bottom: 2px solid #3BA0E9;
    z-index: 99;
    margin-bottom: -2px;
  }
</style>
