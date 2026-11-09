<script setup lang="ts">
import {ref} from 'vue'

// year dropdown
const Years = [2026, 2025, 2024]
const SelectedYears = ref<number>(2026)
const IsOpen = ref<Boolean>(false)

const ToggleDropdownYear = () => {
    IsOpen.value = !IsOpen.value
}
const SelectYear = (year:number) => {
    SelectedYears.value = year
    IsOpen.value = false
}
// year dropdown



// year dropdown
const Wilayah = ["Balikpapan Utara", "Balikpapan Timur", "Mars"]
const SelectedWilayah = ref<String>("Balikpapan Utara")
const IsOpenWilayah = ref<Boolean>(false)

const ToggleDropdownWilayah = () => {
    IsOpenWilayah.value = !IsOpenWilayah.value
}
const SelectWilayah = (wilayah:string) => {
    SelectedWilayah.value = wilayah
    IsOpenWilayah.value = false
}
// year dropdown


</script>

<template>

    <div id="container" class="flex md:flex-row md:gap-40  flex-col  p-4 rounded-md  border-2 border-blue-600  justify-center items-center gap-6">
        <!-- TAHUN DROPDOWN -->
        <div id="TahunSelector" class="relative w-full items-center justify-center">
            <h1 class="text-black text-md font-medium text-center">Tahun Data Demografi</h1>
            <button type="button" @click="ToggleDropdownYear" class="md:p-2  w-full items-center justify-center  bg-blue-400 rounded-md p-1  text-white">
                <span>{{ SelectedYears }}</span>
               
            </button>
        
        <!-- Dropdown Data -->
        <div v-if="IsOpen" class="absolute top-full w-full mt-1 z-20 max-h-48 overflow-y-auto  bg-white border border-gray-400 rouded-md">
                <ul class="py-1">
                    <li v-for="year in Years"
                    :key="year"
                    @click="SelectYear(year)"
                    class="flex justify-between items-center  px-2 py-2  text-md cursor-pointer  transition-colors"
                    :class="[
                        year === SelectedYears
                        ? 'bg-blue-100 text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    ]"
                    >
                    <span>{{ year }}</span>
                    </li>
                </ul>
        </div>
    </div>


     <!-- WILAYAH DROPDOWN -->
        <div id="TahunSelector" class="relative w-full items-center justify-center">
            <h1 class="text-black text-md font-medium text-center">Wilayah Data Demografi</h1>
            <button type="button" @click="ToggleDropdownWilayah" class="md:p-2  w-full items-center justify-center  bg-blue-400 rounded-md p-1  text-white">
                <span>{{ SelectedWilayah }}</span>
               
            </button>
        
        <!-- Dropdown Data -->
        <div v-if="IsOpenWilayah" class="absolute top-full w-full mt-1 z-20 max-h-48 overflow-y-auto  bg-white border border-gray-400 rouded-md">
                <ul class="py-1">
                    <li v-for="wilayah in Wilayah"
                    :key="wilayah"
                    @click="SelectWilayah(wilayah)"
                    class="flex justify-between items-center  px-2 py-2  text-md cursor-pointer  transition-colors"
                    :class="[
                        wilayah === SelectedWilayah
                        ? 'bg-blue-100 text-blue-600 font-semibold' 
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    ]"
                    >
                    <span>{{ wilayah }}</span>
                    </li>
                </ul>
        </div>
    </div>











    </div>

</template>