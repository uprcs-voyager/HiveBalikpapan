<script setup lang="ts">
import {ref} from 'vue'
import dropdownButton from '@/components/page_components/buttons/dropdownButton.vue';
import UsiaPenduduk from '@/components/statistics_components/UsiaPenduduk.vue'
import KelaminPenduduk from '@/components/statistics_components/KelaminPenduduk.vue'
import PendidikanPenduduk from '@/components/statistics_components/PendidikanPenduduk.vue'
import AgamaPenduduk from '@/components/statistics_components/AgamaPenduduk.vue'
import JenisWilayahSelector from '@/components/comparison_components/jenisWilayahSelector.vue';
import BaseTable, { type TableColumn } from '@/components/page_components/baseTable.vue'
import Box_whiteBackground from '@/components/page_components/box_whiteBackground.vue';

const Tahun = ['2026', '2025', '2024',]
const selectedJenis = ref< 'jumlah ' | 'usia' | 'kelamin' | 'pendidikan' | 'agama'>('usia')
const selectedWilayah = ref('Balikpapan Timur')
const tahunDataA = ref('2024')
const tahunDataB = ref('2026')

const column: TableColumn[] = [
  { key: 'kategori', label: 'Kelompok Usia', align: 'left' },
  { key: 'dataA', label: 'Kelompok Data A (2024)', align: 'center' },
  { key: 'dataB', label: 'Kelompok Data B (2026)', align: 'center' },
  { key: 'selisih', label: 'Selisih', align: 'center' },
]

const rows = [
  { kategori: '0-14 Tahun', dataA: '65%', dataB: '67%', selisih: '+2%' },
  { kategori: '15-24 Tahun', dataA: '55%', dataB: '58%', selisih: '+3%' },
  { kategori: '25-34 Tahun', dataA: '70%', dataB: '72%', selisih: '+2%' },
]
</script>

<template>
  <div class="flex justify-center items-start w-full bg-sky-100 min-h-screen py-6">
    <main 
    id="container"
    class="container mx-auto grid md:grid-cols-2  lg:px-8 md:px-1 grid-cols-1 px-5 py-3 justify-center items-center gap-4"
    >

       <!-- comparison HEADER -->
      <section id="comparison_header" class="col-span-full">
        <h1 class="hidden md:block md:text-start text-2xl text-blue-600 text-center font-bold">
          Perbandingan Data Statistik Demografi Penduduk Kota Balikpapan
        </h1>
        <h1 class="md:hidden text-2xl text-blue-600 text-center font-bold">Comparison</h1>
        <p class="md:hidden text-md text-black text-center">
                    Perbandingan Data Statistik Demografi Penduduk Kota Balikpapan
        </p>
      </section>
      <!-- comparison HEADER -->

       <!-- JENIS & WILAYAH SELECTOR -->
      <section id="JenisWilayahSelector" class="col-span-full bg-white">
        <JenisWilayahSelector v-model:jenis="selectedJenis" v-model:wilayah="selectedWilayah"></JenisWilayahSelector>
      </section>
      <!-- JENIS & WILAYAH SELECTOR -->


   <!-- KELOMPOK DATA A & B  -->
      <section
        id="comparison_cards"
        class="flex md:flex md:col-span-full md:flex-row flex-col gap-4 w-full h-full"
      >
        <!-- KELOMPOK DATA A  -->
        <!-- tambahin flex-1 buat nambah Jenis kelamin -->
        <div id="usiaPenduduk" class="flex flex-col justify-center md:items-center w-full flex-1 gap-2 pt-9 md:pt-2 h-full">
            <h1 class="md:hidden text-start text-black font-bold">Kelompok Data A</h1>
            <p class="text-sm text-start text-black">Tahun Data Demografi</p>
            <div class="md:hidden">
                <dropdownButton :items="Tahun" v-model="tahunDataA"></dropdownButton>
            </div>
           
            <div class="hidden md:block flex flex-col md:w-80 justify-center items-center">
                 <h1 class="md:hidden  text-black font-bold">Tahun Data Demografi</h1>
                <dropdownButton :items="Tahun" v-model="tahunDataB"></dropdownButton>
            </div>
          
          <p class="hidden md:block text-black text-md font-bold text-center pt-4">Kelompok Data A</p>
          <div class="mt-2 flex-1 w-full">
            <UsiaPenduduk v-if="selectedJenis === 'usia'" />
            <KelaminPenduduk v-else-if="selectedJenis === 'kelamin'" />
            <PendidikanPenduduk v-else-if="selectedJenis === 'pendidikan'" />
            <AgamaPenduduk v-else-if="selectedJenis === 'agama'" />
          </div>
        </div>
        <!-- KELOMPOK DATA A -->

<!-- Garis Pemisah Tengah (Desktop Only) -->
        <div class="hidden md:block w-px bg-blue-300 self-stretch"></div>

        <!-- KELOMPOK DATA B -->
        <div id="usiaPenduduk" class="flex flex-col  justify-center md:items-center w-full flex-1 gap-2 pt-9 md:pt-2 h-full">
            <h1 class="md:hidden text-start text-black font-bold">Kelompok Data B</h1>
            <p class="text-sm text-start text-black">Tahun Data Demografi</p>
            <div class="md:hidden">
                <dropdownButton :items="Tahun"></dropdownButton>
            </div>
           
            <div class="hidden md:block flex flex-col md:w-80 justify-center items-center">
                 <h1 class="md:hidden  text-black font-bold">Tahun Data Demografi</h1>
                <dropdownButton :items="Tahun"></dropdownButton>
            </div>
          
          <p class="hidden md:block text-black text-md font-bold text-center pt-4">Kelompok Data B</p>
       <div class="mt-2 flex-1 w-full">
            <UsiaPenduduk v-if="selectedJenis === 'usia'" />
            <KelaminPenduduk v-else-if="selectedJenis === 'kelamin'" />
            <PendidikanPenduduk v-else-if="selectedJenis === 'pendidikan'" />
            <AgamaPenduduk v-else-if="selectedJenis === 'agama'" />
          </div>
        </div>
        <!-- KELOMPOK DATA B -->
      </section>
      <!-- KELOMPOK DATA A & B   -->

       <section id="penduduk_balikpapan_tiap_kecamatan"
      class="flex md:flex-row flex-col col-span-full w-full"
      >
      <Box_whiteBackground
      title="Rincian Selisih Usia Penduduk Balikpapan (Kecamatan Balikpapan Timur)"
      subtitle="Selisih Antara Data Kelompok A Terhadap Data Kelompok B"
      >

      <BaseTable
      :column="column"
      :rows="rows"
      divider-color="black"
      >

      </BaseTable>

      </Box_whiteBackground>
      </section>

    </main>


</div>
    
</template>