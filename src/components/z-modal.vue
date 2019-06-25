<template>
  <div class="modal-container" v-show="visable">
    <div class="modal-body">
      <div class="modal-title">
        {{title}}
      </div>
      <div class="modal-content">
        <div v-if="enableContentHtml" v-html="content"></div>
        <div v-else>{{content}}</div>
      </div>
      <div class="modal-action">
        <z-button type="success" @click="close">确认</z-button>
      </div>
    </div>
  </div>
</template>
<script>
import zButton from './z-button'
export default {
  props:{
    'title': {
      default: '标题',
    },
    'content': {
      default: '内容'
    },
    'enableContentHtml': {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      visable: true
    }
  },
  components:{
    'z-button': zButton
  },
  methods:{
    close(){
      this.visable = false;
    }
  }
}
</script>
<style>
.modal-container{
  width: 100%;
  height: 100%;
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5)
  
}
.modal-body{
  width: 420px;
  padding-bottom: 10px;
  vertical-align: middle;
  background: #fff;
  border-radius: 4px;
  border: 1px solid #ebeef5;
  font-size: 18px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
  text-align: left;
  overflow: hidden;
  backface-visibility: hidden;
  z-index: 999;
}
.modal-title{
  padding: 15px 15px 10px;
  font-size: 18px;
  line-height: 1;
  color: #303133;
}
.modal-content{
  padding: 15px 15px 10px;
  color: #606266;
  font-size: 14px;
}
.modal-action{
  padding: 15px 15px 10px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
