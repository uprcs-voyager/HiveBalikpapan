<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue'
import Chart from 'chart.js/auto'

// menerima data dinamis
const props = defineProps<{
    kelamin : string[]
    values : number[]
}>()


const chartCanvas = ref <HTMLCanvasElement | null>(null)
let chartInstance : Chart | null = null
onMounted(() => {
  if (!chartCanvas.value) return

  chartInstance = new Chart(chartCanvas.value, {
    type: 'doughnut',
    data: {
      labels: props.kelamin,
      datasets: [
        {
          data: props.values,
          backgroundColor: ['#4f46e5', '#d946ef'], // Warna Nila (Pria) & Magenta (Perempuan)
          borderWidth: 2,
          borderColor: '#ffffff',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '65%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context) => ` ${context.label}: ${context.parsed.toLocaleString('id-ID')} jiwa`,
          },
        },
      },
    },
  })
})

onUnmounted(() => {
  if (chartInstance) {
    chartInstance.destroy()
  }
})
</script>

<template>
      <div
        id="donut_chart"
        class="relative md:w-36 md:h-36 lg:pl-6 lg:w-40 lg:h-40 w-24 h-24 shrink-0"
      >
        <canvas ref="chartCanvas"></canvas>
      </div>
</template>