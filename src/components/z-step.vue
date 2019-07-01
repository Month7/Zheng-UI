<template>
  <div class="z-step">
    <div class="z-step-head">
      <div class="circle-line" >
        <div class="circle" :class="isCirleActive">
          <div v-if="inner"><svg t="1561971341874" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1924" width="16" height="16"><path d="M892.064 261.888a31.936 31.936 0 0 0-45.216 1.472L421.664 717.248l-220.448-185.216a32 32 0 1 0-41.152 48.992l243.648 204.704a31.872 31.872 0 0 0 20.576 7.488 31.808 31.808 0 0 0 23.36-10.112L893.536 307.136a32 32 0 0 0-1.472-45.248z" p-id="1925" fill="#409EFF"></path></svg></div>
          <div v-else>{{stepIndex+1}}</div>
        </div>
        <div class="line" :style="lineStyle" :class="isLineActive"></div>
      </div>
    </div>
    
    <div>{{title}}</div>
    
  </div>
</template>
<script>
export default {
  name: 'z-step',
  methods: {
    initSpace(space){
      var lineStyle = {
        display: 'block',
        width: `${space}px`
      }
      this.$parent.$children.indexOf(this) == this.$parent.$children.length-1?lineStyle.display = 'none':lineStyle.display = 'block';
      this.lineStyle = lineStyle;
    }
  },
  mounted(){
    this.stepLength = this.$parent.$children.length;
    this.stepIndex = this.$parent.$children.indexOf(this);
  },
  data(){
    return {
      stepIndex: 0,
      stepLength: 0,
      lineStyle:{
      },
      active: 0,
      space: 200,
    }
  },
  computed: {
    isCirleActive(){
      var res = this.stepIndex <= this.active? 'active': 'default'
      return res;
    },
    isLineActive(){
      var res = this.stepIndex <= this.active-1? 'active': 'default'
      return res;
    },
    inner(){
      if(this.stepIndex <= this.active && this.active !=0) {
        return true;
      }
      return false;
    }
  },
  props: {
    title: {
      type: String,
      default: 'title'
    },
    
  }  
}
</script>


<style scoped>
.z-step{
  /* border: 1px solid red; */
}

.circle{
  border: 2px solid #ccc;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: #fff!important;
  display: flex;
  justify-content: center;
  align-items: center;
}
.active{
  border-color: rgb(64, 158, 255);
  color: rgb(64, 158, 255);
  background-color: rgb(64, 158, 255);
}
.line{
  /* width: 200px; */
  height: 4px;
}
.default{
  background-color: #ccc;
}
.circle-line{
  display: flex;
  align-items: center;
  height: 30px;;
}
</style>
