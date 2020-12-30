<template>
  <div>hi
    <VueEcharts :option="option" :loading="loading"></VueEcharts>
    <button @click="loadMore" >加载更多</button>
  </div>
</template>
<script>
import VueEcharts from './vue-echarts'
export default {
  data(){
    return{
      option:{
        title: {
          text: '堆叠区域图'
        },
        legend: {
          data: ['销售额']
        },
        xAxis: {
          type: 'category',
          data: ['1-1','1-2']
        },
        yAxis: {
          type: 'value'
        },
        series: [{
          name: '销售额',
          data: [300,400],
          type: 'line',
        }]
      },
      loading:false
    }
  },
  components: {VueEcharts},
  methods:{
    loadMore(){
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.option={
          xAxis: {
            data: ['1-1','1-2','1-3']
          },
          series: [{
            data: [300,400,500],
            type: 'line'
          }]
        }
      }, 3000);
    }
  }
}
</script>
