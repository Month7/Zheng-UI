<template>
  <div class="container">
    <div class="z-carousel">
      <!--底部操作button-->
      <div class="carousel-btns">
        <div v-for="(item,index) in list" :key="index" :class="index==currentIndex?'index-active':''" @click="changeIndex(index)">
          &nbsp
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'z-carousel',
  data(){
    return {
      list: [],
      imgs: [
        '/1.png',
        '/2.png'
      ],
      currentIndex: 0
    }
  },
  mounted(){
    this.getSlideList();
  },
  methods: {
    startSlide(){

    },
    stopSlide(){

    },
    nextImg(){

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
         
