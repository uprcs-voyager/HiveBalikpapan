<script setup lang="ts">
import TahunWilayahSelector from '@/components/statistics_components/header/TahunWilayahSelector.vue'
// import StatisticsOverview from '@/components/statistics_components/header/StatisticsOverview.vue'
import statisticOverviewBox from '@/components/page_components/statisticOverviewBox.vue'
import UsiaPenduduk from '@/components/statistics_components/UsiaPenduduk.vue'
import KelaminPenduduk from '@/components/statistics_components/KelaminPenduduk.vue'
import PendidikanPenduduk from '@/components/statistics_components/PendidikanPenduduk.vue'
import AgamaPenduduk from '@/components/statistics_components/AgamaPenduduk.vue'
import pendudukKecamatan from '@/components/statistics_components/pendudukKecamatan.vue'
</script>

<template>
  <div class="flex justify-center items-start w-full bg-sky-100 min-h-screen py-6">
    <main
      id="container"
      class="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 lg:px-8 md:px-1 grid-cols-1 px-5 py-3 justify-center items-center gap-6"
    >
      <!-- STATISTICS HEADER -->
      <section id="statistics_header" class="col-span-full">
        <h1 class="hidden md:block md:text-start text-2xl text-blue-600 text-center font-bold">
          Statistik Demografi Penduduk Balikpapan
        </h1>
        <h1 class="md:hidden text-2xl text-blue-600 text-center font-bold">Statistik</h1>
        <p class="md:hidden text-md text-black text-center">
          Statistik demografi penduduk Balikpapan
        </p>
      </section>

      <!-- STATISTICS HEADER -->

      <!-- TAHUN WILAYAH SELECTOR -->
      <section id="TahunWilayahSelector" class="col-span-full bg-white">
        <TahunWilayahSelector> </TahunWilayahSelector>
      </section>
      <!-- TAHUN WILAYAH SELECTOR -->

      <!-- STATISTICS OVERVIEW -->
      <section id="StatisticsOverview1" class="">
        <statisticOverviewBox
        title="Jumlah total Penduduk",
        :value= 13821 
        unit="Jiwa"
        >
        </statisticOverviewBox>
      </section>

      <section id="StatisticsOverview2" class="">
       <statisticOverviewBox
        title="Kepadatan Penduduk/KM2",
        :value= 13821 
        unit="Jiwa"
        >
        </statisticOverviewBox>
      </section>

      <section id="StatisticsOverview3" class="">
        <statisticOverviewBox
        title="Luas Area (KM2)",
        :value= 138212 
        unit="KM"
        >
        </statisticOverviewBox>
      </section>
      <!-- STATISTICS OVERVIEW -->

      <!-- STATISTICS DETAIL -->
      <h1 class="md:text-start md:text-xl text-center text-blue-600">
        Menampilkan data: semua jenis demografi
      </h1>

      <!-- DATA USIA DAN DATA JENIS KELAMIN  -->
      <section
        id="usia_jenis_kelamin"
        class="flex md:flex md:col-span-full md:flex-row flex-col gap-4 w-full"
      >
        <!-- DATA USIA PENDUDUK  -->
        <!-- tambahin flex-1 buat nambah Jenis kelamin -->
        <div id="usiaPenduduk" class="w-full flex-1">
          <UsiaPenduduk> </UsiaPenduduk>
        </div>
        <!-- DATA USIA PENDUDUK -->

        <!-- DATA JENIS KELAMIN -->
        <div id="jenisKelamin" class="flex w-full flex-1">
          <KelaminPenduduk></KelaminPenduduk>
        </div>
        <!-- DATA JENIS KELAMIN -->
      </section>
      <!-- DATA USIA DAN DATA JENIS KELAMIN  -->

      <!-- PENDIDIKAN DAN AGAMA SECTION -->

      <section
        id="pendidikan_dan_agama"
        class="flex md:flex-row flex-col col-span-full gap-4 w-full"
      >
        <div id="pendidikan" class="w-full flex flex-1">
          <PendidikanPenduduk></PendidikanPenduduk>
        </div>

        <div id="agama" class="w-full flex flex-1">
          <AgamaPenduduk></AgamaPenduduk>
        </div>
      </section>

      <section id="penduduk_balikpapan_tiap_kecamatan"
      class="flex md:flex-row flex-col col-span-full w-full"
      >
      <pendudukKecamatan>
        
      </pendudukKecamatan>
      </section>


    </main>
  </div>
</template>
