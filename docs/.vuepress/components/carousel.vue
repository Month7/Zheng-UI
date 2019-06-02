<template>
  <div class="container">
    <z-card>
      <z-carousel>
        <z-carousel-item name="1">
          <div class="box">1</div>
        </z-carousel-item>
        <z-carousel-item name="2">
          <div class="box">2</div>
        </z-carousel-item>
        <z-carousel-item name="3">
          <div class="box">3</div>
        </z-carousel-item>
      </z-carousel>
      <template v-slot:code>
        <highlight-code>
          {{code}}
		    </highlight-code>
      </template>
    </z-card>
  </div>
</template>
<script>

import zCard from '../../../src/components/z-card'
import zCarousel from '../../../src/components/z-carousel';
import zCarouselItem from '../../../src/components/z-carousel-item'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'carousel',
  components:{
    'z-carousel-item': zCarouselItem,
    'z-card': zCard,
    'z-carousel': zCarousel
  },
  data(){
    return {
      time: new Date('2019-05-05'),
      code: `
        <z-carousel>
        <z-carousel-item name="1">
          <div class="box">1</div>
        </z-carousel-item>
        <z-carousel-item name="2">
          <div class="box">2</div>
        </z-carousel-item>
        <z-carousel-item name="3">
          <div class="box">3</div>
        </z-carousel-item>
      </z-carousel>
      `
    }
  }
}
</script>
<style>
.box{
  box-sizing: border-box;
  background: #cccccc;
  height: 200px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 30px;
}
</style>
