<script setup lang="ts">
defineProps<{
    title : string, 
    subtitle : string, 
    footer : string
}>()
</script>



<template>
   <div
    id="container"
    class="flex flex-col p-4  border-blue-400 rounded-lg border-2 gap-4 w-full bg-white h-full"
  >
    <!-- HEADER -->
    <div id="header" class="text-start">
      <h1 class="md:pb-2 text-black pb-4">{{ title }}</h1>
      <p class="text-gray-600">{{ subtitle }}</p>
    </div>
    <!-- HEADER -->

    <!-- CHART -->
    <slot/>
    <!-- CHART -->

    <!-- FOOTER -->
    <div class="text-md text-black">
      <span class="">{{ footer }}</span>
    </div>
    <!-- FOOTER -->
  </div>
</template>
