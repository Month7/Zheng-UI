<template>
  <div class="container" ref="carouselDom">
    <div class="z-carousel">
      <!--底部操作button-->
      <div class="carousel-btns">
        <div v-for="(item,index) in list" :key="index" :class="index==currentIndex?'index-active':''" @click="changeIndex(index)">
        </div>
      </div>
      <!--左右两边的btn-->
      <div @click="goPrevious" :style="sideBtnShow?'display:block':'display:none'" class="carousel-side-btns-left"><svg t="1565838002086" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1323" width="32" height="32"><path d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m186.289687 719.054461c15.425261 15.425261 15.425261 40.34299 0 55.768251L622.349942 853.135574a39.393743 39.393743 0 0 1-55.76825 0L331.643105 619.383546c-1.186559-1.186559-2.373117-1.186559-2.373117-2.373117l-77.126303-77.126304c-3.559676-3.559676-7.119351-8.30591-8.30591-13.052144-5.932793-14.238702-3.559676-32.03708 8.30591-42.716106l77.126303-77.126304c1.186559-1.186559 3.559676-3.559676 5.932793-4.746234l232.565469-232.565469c15.425261-15.425261 40.34299-15.425261 55.768251 0l77.126303 77.126303c15.425261 15.425261 15.425261 40.34299 0 55.768251L489.455388 511.406721l208.834299 210.020857z" p-id="1324" fill="#e6e6e6"></path></svg></div>
      <div @click="goNext" :style="sideBtnShow?'display:block':'display:none'" class="carousel-side-btns-right"><svg t="1565838522470" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2030" width="32" height="32"><path d="M512 2.373117C230.785632 2.373117 2.966396 230.192352 2.966396 511.406721S230.785632 1020.440324 512 1020.440324s509.033604-227.819235 509.033604-509.033603S793.214368 2.373117 512 2.373117z m259.856315 537.511008L695.91657 617.010429c-1.186559 1.186559-3.559676 3.559676-5.932792 4.746234L457.418308 853.135574a39.393743 39.393743 0 0 1-55.76825 0l-77.126304-77.126304a39.393743 39.393743 0 0 1 0-55.76825l208.834299-208.834299L325.710313 302.572422a39.393743 39.393743 0 0 1 0-55.768251l77.126303-77.126303c15.425261-15.425261 40.34299-15.425261 55.768251 0L693.543453 404.616454c1.186559 1.186559 2.373117 1.186559 2.373117 2.373117l77.126304 77.126304c3.559676 3.559676 7.119351 8.30591 8.305909 13.052144 4.746234 14.238702 2.373117 30.850521-9.492468 42.716106z" p-id="2031" fill="#e6e6e6"></path></svg></div>
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'z-carousel',
  props: {
    autoPlay: Boolean
  },
  data(){
    return {
      list: [],
      timer: null,
      currentIndex: 0,
      sideBtnShow: false
    }
  },
  mounted(){
    this.getSlideList();
    if(this.autoPlay) this.playAutomatically();
    this.$refs.carouselDom.addEventListener('mouseenter',() => {
      this.sideBtnShow = true
      if(this.timer) {
        clearInterval(this.timer)
      }
    })
    this.$refs.carouselDom.addEventListener('mouseleave',() => {
      this.sideBtnShow = false
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
    goPrevious () {
      var index = this.currentIndex - 1;
      
      if(index < 0) index = 0;
      console.log(index)
      this.changeIndex(index)  
    },
    goNext () {
      var index = this.currentIndex + 1;
      if(index > this.$children.length-1) index = 0;
      this.changeIndex(index)  
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
.carousel-side-btns-right{
  position: absolute;
  right: 10%;
  top:50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 1;
  z-index: 999;
}
.carousel-side-btns-left{
  position: absolute;
  left: 8%;
  top:50%;
  transform: translateY(-50%);
  height: 20px;
  width: 20px;
  cursor: pointer;
  opacity: 1;
  z-index: 999;
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
         
