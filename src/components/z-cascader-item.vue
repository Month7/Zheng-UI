<template>
  <div class="cascader-warp"  @click.stop="toggle(model.value)">
    <span class="cascader-label" :class="isActive">{{model.label}}</span>
    <div v-if="isFolder">
      <z-cascader-item v-show="showFlag" v-for="item in model.children" 
      :key="item.id" 
      :model="item"
      :selectValue="selectValue"
      :leval="leval+1"
      @updateSelected="updateSelected"
      >
      </z-cascader-item>
    </div>
  </div>
</template>
<script>
export default {
  name: 'z-cascader-item',
  props: {
    model: Object,
    selectValue: String,
    leval:{
      default: 1
    }
  },
  methods:{
    toggle(value){
      this.$emit('updateSelected',value)
      if(this.isFolder) {
        this.showFlag = !this.showFlag;
      }
    },
    updateSelected(value){
      // var value2 = this.selectValue.split('').push(value).join('')
      
      
      this.$emit('updateSelected',value)
    }
  },
  data(){
    return {
      showFlag: false,
    }
  },
  computed:{
    isFolder(){
      if(this.model.children && this.model.children.length>0){
        return true
      } 
      return false;
    },
    isActive(){
      if(this.selectValue == this.model.value) {
        return 'cascader-active-item'
      }
      return '';
    },
    selectdValue(value){
      return this.selectValue.split('').push(value).join('')
    }
  }
}
</script>


<style scoped> 
.cascader-warp{
  display: flex;
  width: fit-content;
  outline: none;
  min-width: 30px;
  cursor: pointer;
  color: #606266;
  padding: 0;
}
.cascader-active-item{
  background: rgb(245,247,250);
  color: #409eff;
  font-weight: 700;
}
.cascader-label:hover{
  background: rgb(245,247,250);
}
.cascader-label{
  padding: 10px 30px 10px 20px;
}
</style>
