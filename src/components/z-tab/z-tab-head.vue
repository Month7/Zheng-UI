<template>
  <div class="z-tab-head">
    <slot></slot>
  </div>
</template>
<script>

export default {
  name:'z-tab-head'
}
</script>
<style>
  .z-tab-head{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
    font-weight: 700;
    border-bottom: 2px solid #cccccc;
  }
</style>
