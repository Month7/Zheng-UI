<template>
  <div class="container">
    <div class="card">
      <div class="card-content">
        <slot></slot>
        <div v-if="codeVisable">
          <slot name="code"></slot>
        </div>
      </div>
      
      <div class="card-desc" @click="toggle">{{msg}}</div>
    </div>
  </div>  
</template>
<script>
export default {
  name: 'z-card',
  props: ['code'],
  data(){
    return {
      msg: '显示代码',
      codeVisable: false
    }
  },
  methods: {
    toggle(){
      this.codeVisable = !this.codeVisable;
      this.msg = this.msg == '显示代码'?'隐藏代码':'显示代码'
    }
  },
}
</script>
<style>
.card{
  border:1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 3px 0 #ccc;
  padding: 14px;
  padding-bottom: 0;
}
.card-desc{
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
.card-content{
  
  border-bottom: 1px solid #ccc;
  padding: 14px;
}
</style>
