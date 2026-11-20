<script setup lang="ts">
import { computed } from 'vue';

// import {ref, onMounted, onUnmounted, watch} from 'vue'
// import Chart from 'chart.js/auto'


// horizontal bar yang akan di export ke tempat-tempat lain
export interface horizontalBarItem {
    label : string 
    value : number // nilai buat ngitung panjang batang
    displayText ? : string // data opsional : misal 67 jiwa

}

//Menerima Data dinamis
const props = withDefaults(
    defineProps<{
        items : horizontalBarItem[]
        maxValue? : number
        barColor ? : string
        unit ? : string
    }>(),
    {
        // maxValue : 100, // maks value default 100
        barColor : '#0c387d', // warna biru navy
        unit: '%'
    }
)

const calculatedMaxValue = computed(()=> {
    if(props.maxValue !== undefined && props.maxValue > 0) {
        return props.maxValue
    }
    const values = props.items.map(item => item.value)
    return Math.max(...values, 1) // kasih satu supaya nggak error pembagian nol
})
// ngitung persentase lebar batang (0-100)
const widthPercentage = (value : number): number => {
    if(calculatedMaxValue.value <= 0) return 0
    const percentage = (value / calculatedMaxValue.value) * 100 
    return Math.min(100, Math.max(0, percentage))
}


// 2. Fungsi pembantu untuk memformat angka + satuan secara otomatis
const formatDisplay = (item: horizontalBarItem): string => {
  if (item.displayText) return item.displayText

  const formattedNumber = item.value.toLocaleString('id-ID') // Contoh: 29313 -> "29.313"
  return props.unit === '%' ? `${formattedNumber}%` : `${formattedNumber} ${props.unit}`
}
</script>

<template>
    <div class="flex gap-2 lg:gap-4 flex-col width-full  py-3">
        <div
        v-for="(item, index) in items"
        :key = "index"
        class="flex text-sm md:text-md flex-row justify-between items-center gap-3"
        >

        <!-- Label kategori sebelah kiri -->
        <span class=" md:w-32 lg:text-md  text-xs w-18  font-medium text-black ">
            {{ item.label }}
        </span>

        <!-- Horizontal bar chart -->
        <div class="flex flex-1 w-full md:h-3 h-3 rounded-full bg-gray-200 overflow-hidden">
            <div class="flex h-full rounded-full transition-all duration-500 ease-out"
            :style="{
                width : `${widthPercentage(item.value)}%`, 
                backgroundColor : barColor,
            }"
            ></div>
            </div>

            <!-- nilai numerik yang disebelah kanan -->
            <span class="text-sm md:text-md md:w-10 font-medium text-black text-right">
            {{ formatDisplay(item)}}
            </span>
        </div>
    </div>
</template>