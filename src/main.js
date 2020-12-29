var echarts = require('echarts');
import './theme/customed.js';
import './theme/purple-passion.js';
// 基于准备好的dom，初始化echarts实例
const dom = document.getElementById('main');
const btn = document.getElementById('btn');
const width = document.documentElement.clientWidth;
if (width < 500) {
  dom.style.width = `${width}px`;
  dom.style.height = `${width * 1.2}px`;
}


let n = 0;

function createKey() {
  n += 1;
  return `2020-1-${n}`;
}

function createValue() {
  n += 1;
  return n;
}

let xData = [createKey(), createKey(), createKey(), createKey()];
let seriesData = [createValue(), createValue(), createValue(), createValue()];


var myChart = echarts.init(dom, 'purple-passion');
// 指定图表的配置项和数据
// 使用刚指定的配置项和数据显示图表。
myChart.setOption({
  baseOption: {
    title: {
      text: '堆叠区域图'
    },
    legend: {
      data: ['销售额']
    },
    xAxis: {
      type: 'category',
      data: xData
    },
    yAxis: {
      type: 'value'
    },
    series: [{
      name: '销售额',
      data: seriesData,
      type: 'line',
    }]
  },
  media: [{
    query: {maxWidth: 500},
    option: {
      series: [{
        itemStyle: {
          shadowColor: 'rgba(0, 0, 0, 0.5)',
          shadowBlur: 10
        }
      }]
    }
  }]
});

let isLoading = false;
btn.addEventListener('click', () => {
  if (isLoading) {
    return;
  }
  isLoading = true;
  myChart.showLoading();
  setTimeout(() => {
    xData = [...xData, createKey()];
    seriesData = [...seriesData, createValue()];
    myChart.setOption({
      xAxis: {
        data: xData
      },
      series: [{data: seriesData}]
    });
    myChart.hideLoading();
    isLoading = false;
  }, 3000);
});
myChart.on('click', (e) => {
  console.log(e);
  console.log(e.dataIndex);
  console.log(e.data);
  window.open(`https://www.baidu.com/?time=${e.dataIndex}`);

});



