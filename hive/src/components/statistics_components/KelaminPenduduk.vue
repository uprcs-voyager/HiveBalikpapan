<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import Chart from 'chart.js/auto'
import { useChart } from '@/composable/use_chart'

// STATICS DATA
const label = ['Laki-Laki', 'Perempuan']
const dataKelamin: [number, number] = [18120, 19280]
// const rasioKelamin = "12:22"

// COMPUUTED PROPERTY
const totalPenduduk = computed(() => dataKelamin[0] + dataKelamin[1])
const persentasePria = computed(() => Math.round((dataKelamin[0] / totalPenduduk.value) * 100))
const persentaseWanita = computed(() => Math.round((dataKelamin[1] / totalPenduduk.value) * 100))
const rasioKelamin = computed(() => `${persentasePria.value}:${persentaseWanita.value}`)

// CANVAS DAN INSTANCE
const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: Chart | null = null
onMounted(() => {
  if (!chartCanvas.value) return

  chartInstance = new Chart(chartCanvas.value, {
    type: 'doughnut',
    data: {
      labels: label,
      datasets: [
        {
          data: dataKelamin,
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

// ================== BAR CHART
const barCanvas = ref<HTMLCanvasElement | null>(null)
const chartKelamin = {
  type: 'bar',
  data: {
    labels: label,
    datasets: [
      {
        label: 'Jenis Kelamin',
        data: dataKelamin,
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
}
useChart(barCanvas, chartKelamin)
</script>

<template>
  <div
    id="container"
    class="flex lg:gap-4 flex-col p-4 border-blue-400 rounded-lg border-2 gap-4 w-full h-full bg-white"
  >
    <!-- HEADER -->
    <div id="header" class="text-start">
      <h1 class="md:pb-2 text-black pb-4">
        Jenis Kelamin Penduduk Balikpapan (Kecamatan Balikpapan Timur)
      </h1>
      <p class="text-gray-600">Persentase dan Jumlah Penduduk pria dan perempuan di Balikpapan</p>
    </div>
    <!-- HEADER -->

    <!-- STATISTIK KELAMIN -->
    <div
      id="statistik_kelamin"
      class="flex md:gap-8 lg:pr-8 lg:gap-8 flex-row items-center gap-4 py-4 h-full"
    >
      <!-- DONUT CHART -->
      <div
        id="donut_chart"
        class="relative md:w-36 md:h-36 lg:pl-6 lg:w-40 lg:h-40 w-24 h-24 shrink-0"
      >
        <canvas ref="chartCanvas"></canvas>
      </div>
      <!-- DONUT CHART -->

      <!-- DATA STATISTIK JENIS KELAMIN PRIA DAN WANITA -->
      <div id="inner_container" class="flex lg:gap-6 flex-row w-full gap-2">
        <!-- PERSENTASE LAKI LAKI DAN PEREMPUAN  -->
        <div id="persentase" class="flex flex-1 w-full">
          <div id="persentase_laki_perempuan" class="flex lg:gap-10 flex-col w-full gap-3">
            <!-- PERSENTASE LAKI-LAKI -->
            <div id="laki_laki" class="flex gap-2 items-center">
              <span class="lg:w-4 lg:h-4 w-3 h-3 rounded bg-[#4f46e5] shrink-0"></span>
              <span class="text-slate-800 text-sm">Pria : {{ persentasePria }} %</span>
            </div>
            <!-- PERSENTASE LAKI-LAKI -->

            <!-- PERSENTASE PEREMPUAN -->
            <div id="perempuan" class="flex gap-1 items-center">
              <span class="lg:w-4 lg:h-4 w-3 h-3 rounded bg-[#ff29df] shrink-0"></span>
              <span class="text-slate-800 text-sm">Wanita : {{ persentaseWanita }} %</span>
            </div>
            <!-- PERSENTASE PEREMPUAN -->
          </div>
        </div>

        <!--  JUMLAH LAKI LAKI DAN PEREMPUAN  -->
        <div id="jumlah" class="flex flex-1 w-full">
          <div id="jumlah_laki_perempuan" class="flex lg:gap-10 flex-col w-full gap-3">
            <!-- JUMLAH LAKI-LAKI -->
            <div id="laki_laki" class="flex gap-2">
              <span class="text-slate-800 text-sm"
                >{{ dataKelamin[0].toLocaleString('id-ID') }} jiwa</span
              >
            </div>
            <!-- JUMLAH LAKI-LAKI -->

            <!-- JUMLAH PEREMPUAN -->
            <div id="perempuan" class="flex gap-2">
              <span class="text-slate-800 text-sm"
                >{{ dataKelamin[1].toLocaleString('id-ID') }} jiwa</span
              >
            </div>
            <!-- JUMLAH PEREMPUAN -->
          </div>
        </div>
        <!--  JUMLAH LAKI LAKI DAN PEREMPUAN  -->

        <!-- BAR CHART LAKI-LAKI DAN PEREMPUAN -->
      </div>
      <!-- DATA STATISTIK JENIS KELAMIN PRIA DAN WANITA -->

      <div id="barchart" class="hidden md:block relative w-50 h-50 mt-4">
        <canvas ref="barCanvas"></canvas>
      </div>
    </div>

    <!-- FOOTER -->
    <div id="footer" class="flex w-full">
      <h1 id="rasio" class="text-black">Rasio Penduduk Pria dan Perempuan : {{ rasioKelamin }}</h1>
    </div>
  </div>
</template>
