<template>
  <div class="container"> 
    <!--进度条-->
    <div class="progress-outer" :style="progressOuterStyle">
      <div class="progress-inner" :style="progressInnerStyle">
        <span class="percentageTxt">{{realPercentage}}%</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'z-progress',
  props: {
    percentage: {
      default: 1,
      type: Number
    },
    strokeWidth: {
      default: 100,
      type: Number
    },
    color: {
      default: '#409EFF',
      type: String
    }
  },
  data(){
    return {
      
    }
  },
  computed: {
    realPercentage() {
      if(this.percentage < 0) {
        return 0;
      } else if(this.percentage > 100) {
        return 100
      }
      return this.percentage
    },
    progressInnerStyle() {
      var percentage
      if(this.percentage < 0) {
        percentage = 0
      } else if(this.percentage > 100) {
        percentage = 100
      } else {
        percentage = this.percentage
      }
      return {
        width: percentage + '%',
        backgroundColor: this.color
      }
    },
    progressOuterStyle() {
      return {
        width: this.strokeWidth + 'px',
      }
    }
  }
}
</script>
<style>

.progress-outer{
  height: 30px;
  border-radius: 100px;
  background-color: #ebeef5;
}
.progress-inner{
  border-radius: 100px;
  height: 100%;
  position: relative;
}
.percentageTxt{
  color: #fff;
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
