<script setup lang="ts">
import bee_icon from '@/components/icons/logos/bee_icon.svg'
import Button from '@/components/buttons/navbarButton.vue'
import { ref } from 'vue'

const links = [
  { name: 'Home', link: '#' },
  { name: 'Statistics', link: '/statistics' },
  { name: 'Comparison', link: '#' },
  { name: 'Dataset', link: '#' },
  { name: 'About', link: '#' },
]

const isOpen = ref(false)
const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div
    class="relative bg-blue-500 text-white py-4 px-6 flex flex-col md:flex-row lg:flex-row justify-between z-50"
  >
    <div class="flex justify-between">
      <div class="flex">
        <span class="flex items-center pr-3 pb-1 cursor-pointer"
          ><img :src="bee_icon" class="h-8 w-8" alt="bee icon"
        /></span>
        <h1 class="text-white text-xl mr-1 cursor-pointer">HiveBalikpapan</h1>
      </div>

      <div class="md:hidden cursor-pointer" @click="toggleMenu">
        <Button> Burger </Button>
      </div>
    </div>

    <nav class="">
      <ul
        class="flex flex-col items-start md:flex-row md:items-center gap-8 mr-12 pt-8 md:pt-0 md:px-0 px-3 md:pb-0 pb-10 md:static absolute bg-blue-950 md:w-auto md:bg-transparent w-full left-0 transition-all duration-300 ease-in md:z-auto z-[-1]"
        :class="[
          isOpen
            ? 'top-full opacity-100'
            : '-top-96 opacity-0 md:opacity-100 md:pointer-events-auto',
        ]"
      >
        <li class="" v-for="link in links" :key="link.name">
          <a :href="link.link" class="text-xl text-white hover:text-blue-900">{{ link.name }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<!-- <script>



</script> -->
