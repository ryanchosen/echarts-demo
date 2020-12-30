<template>
  <div ref="container" id="main"></div>
</template>
<script>
var echarts = require('echarts');
export default {
  props:['option','loading'],
  mounted() {
    let dom=this.$refs.container
    let width=document.documentElement.clientWidth;
    if(width<500){
      dom.style.width=`${width}px`;
      dom.style.height=`${width*1.2}px`;
    }else{
      dom.style.width=`500px`;
      dom.style.height=`400px`;
    }
    this.chart = echarts.init(this.$refs.container);
    this.chart.setOption(this.option)
  },
  watch:{
    option(){
      this.chart.setOption(this.option)
    },
    loading(){
      console.log(this.loading);
      if(this.loading){
        this.chart.showLoading();
      }else{
        this.chart.hideLoading();
      }

    }
  }
}
</script>