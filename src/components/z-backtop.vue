<template>
  <div class="backtop-container" v-if="isVisibility">
    <div class="backtop-body" :style="backtopStyle" @click="backToTop">
      <slot></slot>
    </div>  
  </div>  
</template>
<script>
export default {
  name: 'z-backtop',
  mounted(){
    window.addEventListener('scroll',this.scroll)
  },
  props: {
    target: {

    },
    right: {
      type: Number,
      default: 40
    },
    bottom: {
      type: Number,
      default: 40
    },
    visibilityHeight: {
      type: Number,
      default: 20
    }
  },
  methods: {
    backToTop(){
      var el = document.querySelector(this.target);
      var timer = setInterval(()=>{
        var scrollTop = document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop;
        var height = Math.floor(- scrollTop/5);
        scrollTop += height;
        if(scrollTop <= 0) {
          clearInterval(timer);
        }
        document.documentElement.scrollTop = document.body.scrollTop = scrollTop;
      },30)
      // if(document.documentElement.scrollTop !=0 ) {
      //   document.documentElement.scrollTop = 0;
      // }
      // if(document.body.scrollTop !=0 ) {
      //   document.body.scrollTop = 0;
      // }
    },
    scroll(){
      if(document.documentElement.scrollTop > this.visibilityHeight) {
        // console.log('show')
        this.isVisibility = true;
      } else {
        this.isVisibility = false;
      }
    }
  },
  data(){
    return {
      backtopStyle:{
        position: 'fixed',
        right: `${this.right}px`,
        bottom: `${this.bottom}px`
      },
      scrollTop: document.documentElement.scrollTop || document.body.scrollTop,
      isVisibility: false
    }
  },
  
}
</script>
<style>
.backtop-body{
  height: 40px;
  width: 40px;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0,0,0, .12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
  cursor: pointer;
}
</style>
