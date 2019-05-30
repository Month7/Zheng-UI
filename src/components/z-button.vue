<template>
  <div>
    <button class="button" :class="[childType,allowed]" ><slot></slot></button>
  </div>
</template>
<script>
export default {
  name: 'z-button',
  props: {
    type: String,
    disabled: Boolean
  },
  computed:{
    childType() {
      switch(this.type) {
        case 'primary': return 'button-primary';
        case 'success': return 'button-success';
        case 'info': return 'button-info';
        case 'warn': return 'button-warn';
        case 'danger': return 'button-danger';
        default: return '';
      }
    },
    allowed(){
      switch(this.disabled){
        case true: return 'not-allowed';
        case false: return '';
        default: return '';
      }
    }
  },
}
</script>
<style>
.button{
  color: #fff;
  outline: none;
  border: none;
  border-radius: 2px;
  padding: 6px 12px;
  cursor: pointer;
  margin: 4px;
}
.button:hover{
  opacity: .9;
}
.not-allowed{
  cursor: not-allowed;
  opacity: .6;
}
.button-primary{
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.button-success{
  color: #fff;
  background-color: #5cb85c;
  border-color: #4cae4c;
}
.button-info{
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.button-danger{
  color: #fff;
  background-color: #d9534f;
  border-color: #d43f3a;
}
.button-warn{
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
</style>
