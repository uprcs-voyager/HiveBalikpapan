<script setup lang="ts">
import { computed } from 'vue'
import box_whiteBackground from '../page_components/box_whiteBackground.vue'
import barChart_horizontal from '../page_components/charts/barChart_horizontal.vue'

type horizontalBarItem = {
  label: string
  value: number
}

// STATICS DATA
const pendidikanData : horizontalBarItem[] = [
  { label: 'Tidak/Belum Sekolah', value: 12 },
  { label: 'TK/PAUD', value: 15 },
  { label: 'Sekolah Dasar', value: 10 },
  { label: 'SMP', value: 21 },
  { label: 'SMA/SMK', value: 30 },
  { label: 'Pendidikan Tinggi', value: 51 },
]

const kelompokTerbesar = computed(() => {
  const terbanyak = [...pendidikanData].sort((a, b) => b.value - a.value)[0]
  return terbanyak ? terbanyak.label : '-'
})
</script>

<template>
  <box_whiteBackground
  title="Pendidikan Penduduk Balikpapan (Kecamatan Balikpapan Timur)"
  subtitle="Persentase jenjang pendidikan penduduk Balikpapan"
  :footer="`Kelompok Jenjang Pendidikan terbesar: ${kelompokTerbesar}`"
  >

<barChart_horizontal
:items="pendidikanData"
>

</barChart_horizontal>



  </box_whiteBackground>











  <!-- <div
    id="main_container"
    class="flex flex-col p-4 b border-blue-400 rounded-lg border-2 gap-4 w-full bg-white"
  > -->
    <!-- HEADER -->
    <!-- <div id="header" class="text-start">
      <h1 class="md:pb-2 text-black pb-4">
        Pendidikan Penduduk Balikpapan (Kecamatan Balikpapan Timur)
      </h1>
      <p class="text-gray-600">Persentase Jenjang Pendidikan Penduduk Balikpapan</p>
    </div> -->
    <!-- HEADER -->

    <!-- PROGRESS BAR PENDIDIKAN  -->
    <!-- <div class="flex flex-col gap-3">
      <div
        v-for="(item, index) in pendidikanData"
        :key="index"
        class="flex lg:gap-8 items-center justify-between gap-2 text-sm font-medium"
      > -->
        <!-- JENJANG PENDIDIKAN-->
        <!-- <span class="w-30 sm:w-44 text-slate-800 text-xs sm:text-sm shrink-0">
          {{ item.label }}
        </span> -->

        <!-- PROGRESS BAR-->
        <!-- <div class="flex-1 lg:h-3 bg-slate-200 h-2 rounded-full overflow-hidden relative">
          <div
            class="bg-[#0c387d] h-full rounded-full transition-all duration-500 ease-out"
            :style="{ width: `${item.persentase}%` }"
          ></div>
        </div> -->

        <!-- PERSENTASE -->
        <!-- <span class="w-15 text-right font-bold text-slate-900 text-xs sm:text-sm shrink-0">
          {{ item.persentase }}%
        </span>
      </div>
    </div> -->

    <!-- FOOTER -->
    <!-- <div class="text-md text-black">
      <span class="">Kelompok Jenjang Pendidikan Terbesar = {{ kelompokTerbesar }}</span>
    </div> -->
    <!-- FOOTER -->
  <!-- </div> -->
</template>