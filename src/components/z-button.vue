<template>
  <div>
    <button class="button" @click="emitClick" :class="[childType,allowed]" ><slot></slot></button>
  </div>
</template>
<script lang="tsx">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  name: 'z-button'
})
export default class Button extends Vue {
  @Prop() private type!: string
  @Prop() private disabled !: boolean

  public emitClick () {
    if(this.disabled){
      return false;
    } 
    this.$emit('click')
  }

  get childType () {
    switch(this.type) {
      case 'primary': return 'button-primary';
      case 'success': return 'button-success';
      case 'info': return 'button-info';
      case 'warn': return 'button-warn';
      case 'danger': return 'button-danger';
      default: return '';
    }
  }

  get allowed () {
    switch(this.disabled){
      case true: return 'not-allowed';
      case false: return '';
      default: return '';
    }
  }



  // export default {
//   name: 'z-button',
//   props: {
//     type: String,
//     disabled: Boolean
//   },
//   methods:{
//     emitClick(){
//       if(this.disabled){
//         return false;
//       } 
//       this.$emit('click')
//     }
//   },
//   computed:{
//     childType() {
//       switch(this.type) {
//         case 'primary': return 'button-primary';
//         case 'success': return 'button-success';
//         case 'info': return 'button-info';
//         case 'warn': return 'button-warn';
//         case 'danger': return 'button-danger';
//         default: return '';
//       }
//     },
//     allowed(){
//       switch(this.disabled){
//         case true: return 'not-allowed';
//         case false: return '';
//         default: return '';
//       }
//     }
//   },
// }
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
@media screen and (max-width: 768px){
  .button{
    color: #fff;
    outline: none;
    border: none;
    border-radius: 2px;
    padding: 10px 16px;
    cursor: pointer;
    margin: 4px;
    }
}
</style>
