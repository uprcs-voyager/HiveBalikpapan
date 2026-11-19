<script setup lang="ts">
import {ref} from 'vue'

const props = withDefaults (defineProps<{
    title : string, 
    value : number,
    unit : string,
    bgColor ? : string, 
    titleColor ? : string
}>(), {
    titleColor : '#60a5fa', 
    bgColor : '#3B82F6'
})
</script>

<template>
  <div id="container" class="">
    <div id="content" class="flex flex-col items-center justify-center w-full">
      <h1 class="text-blue-400 text-lg">{{ title }}</h1>
      
      <div id="the_numbers" class="px-8 py-3 bg-blue-500 w-full rounded-lg">
        <p class="text-white text-2xl text-center">{{ value }} {{ unit }}</p>
      </div>
    </div>
  </div>
</template>