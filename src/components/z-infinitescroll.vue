<template>
  <div class="scorll-container" ref="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'z-infinitescroll',
  props: ['loadMore'],
  data(){
    return {
      timer: null,
    }
  },
  mounted(){
    var el = this.$refs.container;
    var height = el.offsetHeight;
    var self = this;
    el.onscroll = function () {
      var parentOffsetTop = el.offsetTop;
      var childOffsetTop = el.childNodes[el.childNodes.length-1].offsetTop;
      var childOffsetHeight = el.childNodes[el.childNodes.length-1].offsetHeight;
      if(childOffsetTop - parentOffsetTop + childOffsetHeight > height){
        if(!self.timer){
            self.timer = setTimeout(() => {
              self.loadMore();
              self.timer = null;
            },250)
          }
      }
    }
  },
  methods:{
    throttle(fn,time){
      var nowDate = new Date();
      return function () {
        console.log('??');
        var date = new Date();
        if(date - nowDate > time) {
          fn.call(this,arguments);
          nowDate = new Date();
        }
      }
    },
    debounce(fn,time){
      console.log(fn);
      var timer = null;
    
      return function () {
        if(!timer){
          timer = setTimeout(() => {
            fn.call(this,arguments);
            timer = null;
          },time)
        }
      }
      
    }
    // loadMore(){
    //   console.log('loadMore')
    // }
  }
}
</script>

<style>
.scorll-container{
  height: 250px;
  overflow-y: scroll;
}
</style>
