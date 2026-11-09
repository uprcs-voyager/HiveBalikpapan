<script setup lang="ts">
import { computed } from 'vue'

// STATICS DATA
const pendidikanData = [
  { label: 'Tidak/Belum Sekolah', persentase: 12 },
  { label: 'TK/PAUD', persentase: 15 },
  { label: 'Sekolah Dasar', persentase: 10 },
  { label: 'SMP', persentase: 21 },
  { label: 'SMA/SMK', persentase: 30 },
  { label: 'Pendidikan Tinggi', persentase: 51 },
]

const kelompokTerbesar = computed(() => {
  const terbanyak = [...pendidikanData].sort((a, b) => b.persentase - a.persentase)[0]
  return terbanyak ? terbanyak.label : '-'
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
        Pendidikan Penduduk Balikpapan (Kecamatan Balikpapan Timur)
      </h1>
      <p class="text-gray-600">Persentase Jenjang Pendidikan Penduduk Balikpapan</p>
    </div>
    <!-- HEADER -->

    <!-- PROGRESS BAR PENDIDIKAN  -->
    <div class="flex flex-col gap-3">
      <div
        v-for="(item, index) in pendidikanData"
        :key="index"
        class="flex lg:gap-8 items-center justify-between gap-2 text-sm font-medium"
      >
        <!-- JENJANG PENDIDIKAN-->
        <span class="w-30 sm:w-44 text-slate-800 text-xs sm:text-sm shrink-0">
          {{ item.label }}
        </span>

        <!-- PROGRESS BAR-->
        <div class="flex-1 lg:h-3 bg-slate-200 h-2 rounded-full overflow-hidden relative">
          <div
            class="bg-[#0c387d] h-full rounded-full transition-all duration-500 ease-out"
            :style="{ width: `${item.persentase}%` }"
          ></div>
        </div>

        <!-- PERSENTASE -->
        <span class="w-15 text-right font-bold text-slate-900 text-xs sm:text-sm shrink-0">
          {{ item.persentase }}%
        </span>
      </div>
    </div>

    <!-- FOOTER -->
    <div class="text-md text-black">
      <span class="">Kelompok Jenjang Pendidikan Terbesar = {{ kelompokTerbesar }}</span>
    </div>
    <!-- FOOTER -->
  </div>
</template>
