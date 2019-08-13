<template>
  <div class="container">
    <z-card>
      <z-magnifying></z-magnifying>
    </z-card>
  </div>
</template>
<script>
import zCard from '../../../src/components/z-card'
import zMagnifying from '../../../src/components/z-magnifying'
import Vue from 'vue'
import VueHighlightJS from 'vue-highlight.js'
Vue.use(VueHighlightJS)
export default {
  name: 'Infinitescroll',
  components:{
    'z-card': zCard,
    'z-magnifying': zMagnifying
  },
  methods: {
    loadMore(){
      this.count++;
    }
  },
  data(){
    return {
      count: 5,
      code: `
        <template>
          <div class="container">
              <z-infinitescroll :loadMore="loadMore">
                <li v-for="i in count" class="infinite-list-item">{{ i }}</li>
              </z-infinitescroll>
          </div>
        </template>
        
        <script>
        export default {
          data () {
            return {
              count: 0
            }
          },
          methods: {
            load () {
              this.count ++
            }
          }
        }
        
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
.infinite-list-item{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  background: #e8f3fe;
  margin: 10px;
  color: #7dbcfc;
}
</style>
