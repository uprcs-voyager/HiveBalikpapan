<script setup lang="ts">
import leaflet_logo from '@/components/icons/logos/leaflet_logo.svg'
import tailwind_logo from '@/components/icons/logos/tailwind_logo.svg'
import vue_logo from '@/components/icons/logos/vue_logo.svg'
</script>

<template>
  <!-- the flex col is being managed by the child div, not the main div -->
  <footer>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-4 px-8 pt-4 pb-8 bg-blue-500 gap-10"
    >
      <!-- Hive balikpapan quick overview -->
      <div id="hivebalikpapan" class="flex flex-col min-w-0 gap-2 pr-5">
        <div id="desc">
          <h1 class="md:pb-2 text-xl text-white pb-3">HiveBalikpapan</h1>
          <p class="text-sm text-white md:text-md text-justify">
            HiveBalikpapan merupakan sebuah website yang memberikan informasi terkait data demografi
            penduduk kota Balikpapan untuk membantu masyarakat lebih memahami kondisi kota
            Balikpapan.
          </p>
        </div>

        <div id="dev_contact">
          <h2 class="text-sm text-white md:text-md cursor-pointer">Contact the developer at:</h2>
          <p class="text-sm text-white md:text-md cursor-pointer">greenglass0k@gmail.com</p>
          <p class="text-sm text-white md:text-md cursor-pointer">github.com/uprcs-voyager</p>
        </div>
      </div>
      <!-- Hive balikpapan quick overview -->

      <!-- Techstack -->
      <div id="tech_stack" class="flex flex-col">
        <h1 class="md:pb-2 text-xl text-white pb-3">Tech Stack</h1>

        <div id="outer_wrapper" class="flex flex-col gap-4">
          <div id="vue" class="flex items-center gap-4">
            <img :src="vue_logo" class="h-8 w-8 object-contain" alt="Vue 3 logo" />
            <p class="text-white text-md">Vue 3</p>
          </div>

          <div id="tailwind" class="flex items-center gap-4">
            <img :src="tailwind_logo" class="h-8 w-8 object-contain" alt="Tailwind logo" />
            <p class="text-white text-md">Tailwind CSS</p>
          </div>

          <div id="leaflet" class="flex items-center gap-4">
            <img :src="leaflet_logo" class="h-8 w-18 object-contain" alt="Leaflet logo" />
            <p class="text-white text-md">Leaflet</p>
          </div>
        </div>
      </div>
      <!-- Techstack -->

      <!-- Data & Attribution -->
      <div class="flex flex-col gap-2">
        <h1 class="text-lg text-white">Data & Attribution</h1>
        <p class="text-md text-white cursor-pointer">Badan Pusat Statistik Kota Balikpapan</p>
        <p class="text-md text-white cursor-pointer">GDAM maps and data</p>
        <p class="text-md text-white cursor-pointer">Open Street Map</p>
      </div>
      <!-- Data & Attribution -->

      <!-- Navigation -->
      <div class="flex flex-col gap-2">
        <h1 class="text-lg text-white">Navigate</h1>
        <a href="" class="text-md text-white cursor-pointer">Home</a>
        <a href="" class="text-md text-white cursor-pointer">Statistics</a>
        <a href="" class="text-md text-white cursor-pointer">Compare Statistics</a>
        <a href="" class="text-md text-white cursor-pointer">Dataset</a>
        <a href="" class="text-md text-white cursor-pointer">About</a>
      </div>
    </div>
  </footer>
</template>
