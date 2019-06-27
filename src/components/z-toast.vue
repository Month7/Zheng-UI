<template>
  <div class="toast-container" :class="[toastOut,toastType]">
    <div v-if="enableContentHtml" class="toast-body" v-html="content"></div>
    <div class="toast-body" v-else>
      {{content}}
    </div>
    <div  v-if="showClose" class="toast-action">
      <div style="margin-right:20px">|</div>
      <div  @click="close">关闭</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Toast',
  props:{
    content: {
      default: '这是内容'
    },
    enableContentHtml: {
      type: Boolean,
      default: false
    },
    type: {
      default: 'success'
    },
    showClose:{
      type: Boolean,
      default: false
    },
    onClose:{
      type: Function
    },
    delay: {
      default: 2000
    }
  },
  data(){
    return {
      isClose: false,
    }
  },
  computed:{
    toastOut(){
      return this.isClose?'slide-out':'slide-in'
    },
    toastType(){
      return this.type;
    }
  },
  mounted(){
    if(this.delay != 0) this.autoClose();
  },
  methods: {
    autoClose() {
      setTimeout(()=>{
        this.close();
      },this.delay)
    },
    close() {
      if(this.isClose) return;
      this.isClose = true;
      setTimeout(()=>{
        this.onClose && this.onClose.call(this);
        this.$el.remove();
        this.$destroy();
      },500)
      
    }
  }
}
</script>
<style>
@keyframes slide-in {
  from {top:0px;opacity: 0;}
  to {top:20px;opacity: 1;}
}
@keyframes slide-out {
  from {top:20px;opacity: 1;}
  to {top:0px;opacity: 0;}
}
.slide-out{
  animation: slide-out 0.5s;
}
.slide-in{
  animation: slide-in 0.5s;
}
.toast-container{
  position: fixed;
  top: 20px;
  left: 50%;
  translate: transfromX(-50%);
  margin: auto;
  border: 1px solid;
  z-index: 99;
  min-width: 200px;
  max-width: 400px;
  border-radius: 4px;
  padding: 6px 12px;
  display: flex;
  justify-content: space-around;
}
.success{
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.info{
  background-color: #5bc0de;
  border-color: #46b8da;
}
.danger{
  background-color: #d9534f;
  border-color: #d43f3a;
}
.warn{
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.toast-body{
  color: #fff;
  padding: 6px 12px;
}
.toast-action{
  color: #fff;
  padding: 6px 12px;
  display: flex;
  justify-content: space-around;
}
</style>
