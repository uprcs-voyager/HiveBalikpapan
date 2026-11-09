<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Chart from 'chart.js/auto'

// STATIC DATA
const labelAgama = ['Islam', 'Kristen', 'Katolik', 'Buddha', 'Hindu', 'Khonghucu']
const dataAgama = [84.5, 10.2, 3.4, 1.1, 0.6, 0.2]
const warnaAgama = ['#10b981', '#0ea5e9', '#f59e0b', '#8b5cf6', '#f43f5e', '#64748b']

// COMPUTED DATA
const kelompokTerbesar = computed(() => {
  const maxVal = Math.max(...dataAgama)
  const maxIndex = dataAgama.indexOf(maxVal)
  return labelAgama[maxIndex] || '-'
})

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
      labels: labelAgama,
      datasets: [
        {
          data: dataAgama,
          backgroundColor: warnaAgama,
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
  <div
    id="main_container"
    class="flex flex-col p-4 b border-blue-400 rounded-lg border-2 gap-4 w-full bg-white"
  >
    <!-- HEADER -->
    <div id="header" class="text-start">
      <h1 class="md:pb-2 text-black pb-4">
        Agama Penduduk Balikpapan (Kecamatan Balikpapan Timur)
      </h1>
      <p class="text-gray-600">Persentase Agama Penduduk Balikpapan</p>
    </div>
    <!-- HEADER -->

    <div id="agama_statistics" class="flex md:flex-row justify-center items-center">
      <!-- PIE CHART -->
      <div id="pie_chart" class="flex lg:w-full lg:h-44 w-full h-30">
        <canvas ref="chartCanvas"></canvas>
      </div>

      <!-- COLORED LEGENDS -->
      <div id="legends_wrapper" class="flex lg:gap-y-2 flex-col w-full justify-center text-sm">
        <div
          v-for="(label, index) in labelAgama"
          :key="index"
          id="legends"
          lass="flex items-center justify-between w-full"
        >
          <div id="colored" class="flex gap-3 items-center">
            <span
              class="w-3.5 h-3.5 rounded shrink-0"
              :style="{ backgroundColor: warnaAgama[index] }"
            ></span>
            <span class="text-black">{{ label }}</span>

            <div>
              <span class="text-black">{{ dataAgama[index] }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="text-md text-black">
      <span class="">Kelompok Agama Terbesar = {{ kelompokTerbesar }}</span>
    </div>
    <!-- FOOTER -->
  </div>
</template>
