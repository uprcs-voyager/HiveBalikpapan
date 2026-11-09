<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'

// Static Data
const Label = ['0-14 Tahun', '15-29 Tahun', '30-44 Tahun', '45-60 Tahun', '60+ Tahun']
const DataUsia = [23, 55, 46, 13, 42]
const KelompokTerbesar = '30-40 tahun'
// Static Data

// Variable penampung elemen canvas dan instance dari chart
const ChartCanvas = ref<HTMLCanvasElement | null>(null)
let ChartInstance: Chart | null = null

// ini kodenya jalan pas chart/komponennya tampil di layar
onMounted(() => {
  if (!ChartCanvas.value) return

  ChartInstance = new Chart(ChartCanvas.value, {
    type: 'bar',
    data: {
      labels: Label,
      datasets: [
        {
          label: 'Persentase Usia',
          data: DataUsia,
          backgroundColor: '#0c387d', // Warna biru navy
          borderRadius: 6,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
      },
    },
  })
})

// Ini kodenya jalan pas usernya pindah ke halaman lain
onUnmounted(() => {
  if (ChartInstance) {
    ChartInstance.destroy()
  }
})
</script>

<template>
  <div
    id="container"
    class="flex flex-col p-4 b border-blue-400 rounded-lg border-2 gap-4 w-full bg-white"
  >
    <!-- HEADER -->
    <div id="header" class="text-start">
      <h1 class="md:pb-2 text-black pb-4">Usia Penduduk Balikpapan (Kecamatan Balikpapan Timur)</h1>
      <p class="text-gray-600">Persentase Usia Penduduk Balikpapan</p>
    </div>
    <!-- HEADER -->

    <!-- CHART -->
    <div class="relative w-full h-64">
      <canvas ref="ChartCanvas"></canvas>
    </div>
    <!-- CHART -->

    <!-- FOOTER -->
    <div class="text-md text-black">
      <span class="">Kelompok Usia Terbesar = {{ KelompokTerbesar }}</span>
    </div>
    <!-- FOOTER -->
  </div>
</template>
