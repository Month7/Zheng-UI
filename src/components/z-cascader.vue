<template>
  <div>
    <input class="cascader-input" placeholder="请选择" type="text" @click="toggle" v-model="selectValue"/>
    <div v-if="showFlag" class="wrapper">
      <z-cascader-item v-show="showFlag" v-for="item in options " 
      :key="item.id" 
      :model="item"
      :selectValue="selectValue"
      
      @updateSelected="updateSelected"
      >
      </z-cascader-item>
    </div>
  </div>
</template>
<script>
import zCascaderItem from './z-cascader-item';
export default {
  name: 'z-cascader',
  props: ['options'],
  components:{
    'z-cascader-item': zCascaderItem
  },
  methods:{
    toggle(){
      this.showFlag = !this.showFlag;
    },
    updateSelected(value){
      this.selectValue = value;
      this.$emit('input',value)
    }
  },
  data(){
    return {
      selectValue: null,
      showFlag: false,
      list:[{
        id:1,
        value: '河北',
        label: '河北',
        children: [{
          id:2,
          value: '唐山',
          label: '唐山'
        },{
          id:3,
          value: '石家庄',
          label: '石家庄'
        }]
      },{
        id:4,
        value: '陕西',
        label: '陕西',
        children: [{
          value: '西安',
          label: '西安'
        }]
      },{
        id: 5,
        value: '江苏',
        label: '江苏'
      }]
    }
  },
  computed: {
    
  }
}
</script>
<style>
.wrapper{
  position: absolute;
  background: #fff;
  z-index: 100;
  border: 1px solid #ccc;
  padding: 14px 0;
}
.cascader-input{
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;
    width: 180px;
}
</style>
