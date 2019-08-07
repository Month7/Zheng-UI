<template>
  <div class="container">
    <input type="text" class="date-input" v-model="dateValue" @click="showPanel">
    <div class="panel" v-show="panelShow" @click="prevent">
      <div class="panel-header">
        <span class="panel-arrow" @click="previousYear"><<</span>
        <span class="panel-arrow" @click="previousMonth"><</span>
        {{curYear}}年 {{curMonth}}月
        <span class="panel-arrow" @click="nextMonth">></span>
        <span class="panel-arrow" @click="nextYear">>></span>
      </div>
      <div class="panel-content">
        <div v-for="item in weekList" :key="item.index" class="panel-tr">{{item}}</div>
        <div v-for="item in list" :key="item.index" :class="item.month == curMonth?'black':'gray'" class="panel-item" @click="selectDate(item.day,item.month)">{{item.day}}</div>
      </div>
    </div>
    <div class="mask" v-show="panelShow" @click="showPanel">
    </div>
  </div>
</template>
<script>

export default {
  name: 'z-datetimepicker',
  props:{
    value: String
  },
  computed:{
    value2(){
      return this.value
    }
  },
  data(){
    return {
      dateValue: null,
      panelShow: false,
      curDay: null,             // 今天是星期几
      curMonth: null,           // 今天的月份
      curYear: null,            // 今天的年数
      dateObj:{
        date: new Date()
      },
      weekList:['日','一','二','三','四','五','六'],
      list: [],
      monthList: [  // 月
        { label: "Jan", value: 0 },
        { label: "Feb", value: 1 },
        { label: "Mar", value: 2 },
        { label: "Apr", value: 3 },
        { label: "May", value: 4 },
        { label: "Jun", value: 5 },
        { label: "Jul", value: 6 },
        { label: "Aug", value: 7 },
        { label: "Sept", value: 8 },
        { label: "Oct", value: 9 },
        { label: "Nov", value: 10 },
        { label: "Dec", value: 11 }
      ], 
    }
  },
  methods:{
    showPanel(){
      this.panelShow = !this.panelShow;
    },
    setDate(){
      // 获取这个月第一天是星期几  42
      let firstDay = new Date(this.curYear, this.curMonth-1,1).getDay();
      var arr = [];
      var previousMonthDay = new Date(this.curYear, this.curMonth-1,0).getDate();
      var startDay = previousMonthDay - firstDay;
      for(var i=1;i<=firstDay;i++){
        var obj = {
          day: ++startDay,
          month: this.curMonth-1
        }
        arr.push(obj);
      }
      var curMonthDay = new Date(this.curYear,this.curMonth,0).getDate();
      for(var i=1;i<=curMonthDay;i++){
        var obj = {
          day: i,
          month: this.curMonth
        }
        arr.push(obj);
      }
      for(var i=1;i<=(42-(curMonthDay+firstDay));i++){
        var obj = {
          day: i,
          month: this.curMonth+1
        }
        arr.push(obj);
      }
      this.list = arr;
    },
    prevent(e){
      
    },
    selectDate(day,month){
      // this.dateValue = Date.parse(new Date(this.curYear,this.curMonth-1,item))
      this.dateValue =  `${this.curYear}-${month}-${day}`;
      this.$emit('input',this.dateValue)
      // this.dateValue = new Date(this.curYear,month,day).toDateString();
      this.panelShow = false;
    },
    nextYear(){
     
      this.curYear++;
      this.setDate();
    },
    previousYear(){
      this.curYear--;
      this.setDate();
    },
    nextMonth(){
      if(this.curMonth >= 12) return
      this.curMonth++;
      this.setDate();
    },
    previousMonth(){
      if(this.curMonth <= 0) return
      this.curMonth--;
      this.setDate();
    }
  },
  mounted(){
    var today = new Date();
    this.curDay = today.getDay();
    this.curMonth = today.getMonth() + 1;
    this.curYear = today.getFullYear();
    this.setDate();
  },
  computed:{

  }
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
.panel{
  border: 1px solid #ccc;
  padding: 10px;
  width: 282px;
  z-index: 999;
  position: relative;
}
.panel-content{
  display: flex;
  flex-wrap: wrap;
}
.mask{
  position: fixed;
  height: 100%;
  width: 100%;
  left: 0;
  top:0;
  z-index: 2;
}
.panel-item{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.panel-tr{
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}
.panel-item:hover{
  background: #409eff;
  color: #fff;
}
.panel-header{
  display: flex;
  justify-content: center;
}
.gray{
  color: #C0C4CC;
}
.panel-arrow{
  cursor: pointer;
  margin: 0 10px;
}
.date-input{
  height: 32px;
  border-radius: 4px;
  padding: 0 8px;
  /* border: none; */
  outline: none;
  border: 1px solid #ccc;
}
</style>
