<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Chart from 'chart.js/auto'
import box_whiteBackground from '../page_components/box_whiteBackground.vue'
import barChart_vertical from '../page_components/chart/barChart_vertical.vue'

// Static Data
const Label = ['0-14 Tahun', '15-29 Tahun', '30-44 Tahun', '45-60 Tahun', '60+ Tahun']
const DataUsia = [23, 55, 46, 13, 42]
const KelompokTerbesar = '30-40 tahun'
// Static Data

</script>

<template>
  <box_whiteBackground
  title="Usia Penduduk Balikpapan (Kecamatan Balikpapan Timur)"
  subtitle="Persentase Usia Penduduk Balikpapan"
  :footer="`kelompok usia terbesar: ${KelompokTerbesar}`">
  
  
 <barChart_vertical
  :labels="Label"
  :values="DataUsia"
  dataset-label="Persentase ugyo mugyo"
 >

 </barChart_vertical>

  </box_whiteBackground>
</template>
