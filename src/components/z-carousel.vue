<template>
  <div class="container" ref="carouselDom">
    <div class="z-carousel">
      <!--底部操作button-->
      <div class="carousel-btns">
        <div v-for="(item,index) in list" :key="index" :class="index==currentIndex?'index-active':''" @click="changeIndex(index)">
          
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import { setTimeout, setInterval, clearInterval } from 'timers';

export default {
  name: 'z-carousel',
  props: {
    autoPlay: Boolean
  },
  data(){
    return {
      list: [],
      timer: null,
      currentIndex: 0
    }
  },
  mounted(){
    this.getSlideList();
    if(this.autoPlay) this.playAutomatically();
    this.$refs.carouselDom.addEventListener('mouseenter',() => {
      if(this.timer) {
        clearInterval(this.timer)
      }
    })
    this.$refs.carouselDom.addEventListener('mouseleave',() => {
      if(this.autoPlay) this.playAutomatically();
    })
  },
  beforeDestroy(){
    // clearInterval(timer)
  },
  methods: {
    startSlide(){

    },
    stopSlide(){

    },
    nextImg(){

    },
    playAutomatically(){
      if(this.timer) {
        clearInterval(this.timer);
      }
      this.timer = setInterval(()=>{
        var index = this.currentIndex + 1;
        if(index > this.$children.length-1) index = 0;
        this.changeIndex(index)  
        },2000)
    },
    // 改变显示的index
    changeIndex(index){
      this.$children.forEach((vm)=> {
        if(vm.$options && vm.$options.name == 'z-carousel-item'){
          vm.index = index;
        }
      })
      this.currentIndex = index;
    },
    // 
    getSlideList(){
      var index = 1;
      this.$children.forEach((vm)=>{
        if(vm.$options && vm.$options.name == 'z-carousel-item'){
          this.list.push(index++);
        }
      })
    }
  }
}
</script>
<style>
.z-carousel{
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
}
.carousel-btns{
  position: absolute;
  bottom:10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 1!important;
  z-index: 90!important;
}
.carousel-btns div {
  display: inline-block;
  width: 24px;
  height: 6px;
  font-size:12px;
  line-height: 40px;
  margin-right: .4em;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.index-active{
  background: lightblue!important;
  color: #fff;
}

</style>
         
