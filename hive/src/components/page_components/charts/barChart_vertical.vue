<script setup lang="ts">
import {ref, onMounted, onUnmounted, watch} from 'vue'
import Chart from 'chart.js/auto'


// menerima data dinamis
const props = defineProps<{
    labels : string[]
    values : number[]
    datasetLabel? : string
    barColor? : string
}>() 
const chartCanvas = ref <HTMLCanvasElement | null>(null)
let chartInstance : Chart | null = null


//merender chart 
onMounted(()=> {
    if(!chartCanvas.value) return

    chartInstance = new Chart(chartCanvas.value, {
        type : 'bar', 
        data : {
            labels : props.labels, 
            datasets : [ 
                {
                    label : props.datasetLabel ?? 'Persentase',
                    data : props.values,
                    backgroundColor : props.barColor ?? '#0c387d', // defauly navy blue
                    borderRadius : 4,
                },
            ],
        },
        options : {
            responsive : true, 
            maintainAspectRatio : false, 
            plugins : {
                legend : {display: false}
            },
        },
    })
})

// memantau perubahan props, kalo ada data baru, update
watch(
    () => [props.labels, props.values],
    () => {
        if(!chartInstance) return

        chartInstance.data.labels = props.labels
        const dataset = chartInstance.data.datasets[0]
        if(dataset) {
            dataset.data = props.values
        }
        chartInstance.update()
    }
)

// hancurin saat pindah halaman supaya nggak boros memori
onUnmounted (()=> {
    if(chartInstance) {
        chartInstance.destroy()
    }
})
</script>

<template>
    <div class="relative flex w-full h-full">
        <canvas ref="chartCanvas"></canvas>
    </div>
</template>