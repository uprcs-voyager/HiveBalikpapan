<script setup lang="ts">
import TahunWilayahSelector from '@/components/statistics_components/TahunWilayahSelector.vue';
import StatisticsOverview from '@/components/statistics_components/StatisticsOverview.vue';


</script>

<template>

<div class="flex justify-center items-start w-full bg-sky-100 min-h-screen py-6">
<main id="container" class="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 lg:px-8 md:px-1   grid-cols-1  px-5 py-3 justify-center items-center gap-8 ">
    <!-- STATISTICS HEADER -->
    <section id="statistics_header" class="col-span-full">
         <h1 class="hidden md:block md:text-start  text-2xl text-blue-600 text-center font-bold">
        Statistik Demografi Penduduk Balikpapan
     </h1>
      <h1 class="md:hidden  text-2xl text-blue-600 text-center font-bold">
        Statistik
    </h1>
    <p class="md:hidden  text-md text-black text-center">Statistik demografi penduduk Balikpapan</p>
    </section>

    
   <!-- STATISTICS HEADER -->


   <!-- TAHUN WILAYAH SELECTOR -->
   <section id="TahunWilayahSelector" class="col-span-full bg-white">
        <TahunWilayahSelector>
        </TahunWilayahSelector>
   </section>
   <!-- TAHUN WILAYAH SELECTOR -->


  <!-- STATISTICS OVERVIEW -->
   <section id="StatisticsOverview" class="">
        <StatisticsOverview>
        </StatisticsOverview>
   </section>

      <section id="StatisticsOverview" class="">
        <StatisticsOverview>
        </StatisticsOverview>
   </section>


      <section id="StatisticsOverview" class="">
        <StatisticsOverview>
        </StatisticsOverview>
   </section>
    <!-- STATISTICS OVERVIEW -->

</main>
</div>




</template>