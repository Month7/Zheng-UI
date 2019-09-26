<template>
  <div class="z-row" :style="rowStyle">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'z-row',
  props: {
    gutter:{
      type: [String, Number]
    }
  },
  
  data() {
    return {
      offset: this.gutter
    }
  },
  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    })
  },
  computed: {
    rowStyle() {
      return `margin: 0 -${this.gutter/2}px`
    }
  }
}
</script>
<style>
.z-row {
  display: flex;
  justify-content: flex-start;
}
</style>