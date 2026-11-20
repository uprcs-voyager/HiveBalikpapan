<script setup lang="ts">
import {ref, computed} from 'vue'
import box_whiteBackground from '../page_components/box_whiteBackground.vue';
import barChart_horizontal from '../page_components/charts/barChart_horizontal.vue';

type horizontalBarItem = {
  label: string
  value: number
  displayText ? : string
  unit ? : string
}

// STATICS DATA
const pendudukKecamatan : horizontalBarItem[] = [
  { label: 'Balikpapan Timur ', value: 29313},
  { label: 'Balikpapan Utara', value: 35345 },
  { label: 'Balikpapan Barat', value: 12321 },
  { label: 'Balikpapan Selatan', value: 23732 },
  { label: 'Balikpapan Tengah', value: 32435 },
]

const kelompokTerbesar = computed(() => {
  const terbanyak = [...pendudukKecamatan].sort((a, b) => b.value - a.value)[0]
  return terbanyak ? terbanyak.label : '-'
})


</script>


<template>
    <box_whiteBackground 
    title="Jumlah Penduduk Balikpapan di Tiap Kecamatan"
    subtitle="Jumlah Penduduk Balikpapan di Tiap Kecamatan"
    :footer="`Kecamatan Dengan Penduduk Terbanyak: ${kelompokTerbesar}`">

    <barChart_horizontal
    :items="pendudukKecamatan"
    unit="Jiwa"
    >

    </barChart_horizontal>

    </box_whiteBackground>
</template>