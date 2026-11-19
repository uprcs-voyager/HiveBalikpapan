<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Chart from 'chart.js/auto'
import pieChart from '../page_components/charts/pieChart.vue'
import box_whiteBackground from '../page_components/box_whiteBackground.vue'

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
  <box_whiteBackground
  title="Agama Penduduk Balikpapan (Kecamatan Balikpapan Timur)"
  subtitle="Persentase Agama Penduduk Balikpapan"
  :footer="`Kelompok Agama dengan jumlah pengikut paling besar adalah: ${kelompokTerbesar}`"
  >


    <div id="agama_statistics" class="flex md:flex-row justify-center items-center">
      <!-- PIE CHART -->
      <pieChart
      :agama="labelAgama"
      :value="dataAgama"
      :warna="warnaAgama"
      >

      </pieChart>

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


  </box_whiteBackground>
</template>
