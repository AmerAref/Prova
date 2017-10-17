<template>
  <div id="hello">
    <chart-card :chart-data="chartData" :chart-options="chartOptions">
  <span slot="title">Users behavior</span>
  <span slot="subTitle"> 24 Hours performance</span>
  <span slot="footer">
    <i class="ti-reload"></i> Updated 3 minutes ago</span>
  <div slot="legend">
    <i class="fa fa-circle text-info"></i> Open
    <i class="fa fa-circle text-danger"></i> Click
    <i class="fa fa-circle text-warning"></i> Click Second Time
  </div>
</chart-card>
  </div>
</template>

<script>
import ChartCard from 'components/UIComponents/Cards/ChartCard.vue'
export default{
    components:{
      ChartCard  
    },
    data(){
         return {
           chartData: {
             labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
             series: [
               [287, 385, 490, 562, 594, 626, 698, 895, 952],
               [67, 152, 193, 240, 387, 435, 535, 642, 744],
               [23, 113, 67, 108, 190, 239, 307, 410, 410]
             ]
           },
           chartOptions: {
             // lineSmooth: false,
             low: 0,
             high: 1000,
             showArea: true,
             height: '245px',
             axisX: {
               showGrid: false
             },
             lineSmooth: this.$Chartist.Interpolation.simple({
               divisor: 3
             }),
             showLine: true,
             showPoint: false
           }
        }
    }
}
  