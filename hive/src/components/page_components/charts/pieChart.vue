<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import Chart from 'chart.js/auto'

// mengambil data dinamis 
const props = defineProps<{
    agama : string[]
    value : number[]
    warna : string[]
}>()

// CANVAS AND INSTANCES
// Variable penampung elemen canvas dan instance dari chart
const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null

// ini kodenya jalan pas chart/komponennya tampil di layar
onMounted(() => {
  if (!chartCanvas.value) return

  chartInstance = new Chart(chartCanvas.value, {
    type: 'pie',
    data: {
      labels: props.agama,
      datasets: [
        {
          data: props.value,
          backgroundColor: props.warna,
          borderWidth: 2,
          borderColor: '#ffffff',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => `${context.label}: ${context.parsed}%`,
          },
        },
      },
    },
  })
})
// Ini kodenya jalan pas usernya pindah ke halaman lain
onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<template>
        <div id="pie_chart" class="flex lg:w-full lg:h-44 w-full h-30">
        <canvas ref="chartCanvas"></canvas>
      </div>
</template>