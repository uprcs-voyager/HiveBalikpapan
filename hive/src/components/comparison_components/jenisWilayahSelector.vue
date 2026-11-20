<script setup lang="ts">
import {ref, watch} from 'vue'
import dropdownButton from '../page_components/buttons/dropdownButton.vue';

export type JenisDemografiKey = 'jumlah' | 'usia' | 'pendidikan' | 'kelamin' | 'agama'

const jenisMap: Record<string, JenisDemografiKey> = {
  'Jumlah Penduduk': 'jumlah',
  'Usia Penduduk': 'usia',
  'Pendidikan Penduduk': 'pendidikan',
  'Gender Penduduk': 'kelamin',
  'Agama Penduduk': 'agama',
}

// Jenis dropdown 
const Jenis = Object.keys(jenisMap)

// wilayah dropdown
const Wilayah = ['Balikpapan Utara', 'Balikpapan Timur', 'Mars']

// yang sedang dipilih 
const selectedJenisLabel = ref('Usia Penduduk')
const selectedWilayah = ref('Balikpapan Timur')

const emit = defineEmits<{
  (e: 'update:jenis', value: JenisDemografiKey): void
  (e: 'update:wilayah', value: string): void
}>()

watch(selectedJenisLabel, (labelBaru) => {
  const key = jenisMap[labelBaru]
  if (key) emit('update:jenis', key)
})

watch(selectedWilayah, (wilayahBaru) => {
  emit('update:wilayah', wilayahBaru)
})
</script>

<template>
    <div id="container" 
    class="flex md:flex-row md:gap-40 flex-col p-4 rounded-md border-2 border-blue-600 justify-center items-center gap-6"
    >
    <dropdownButton
    title="Jenis Data Demografi"
    :items="Jenis"
    v-model="selectedJenisLabel"
    >
    </dropdownButton>


    <dropdownButton
    title="Wilayah Data Demografi"
    :items="Wilayah"
    v-model="selectedWilayah"
    >

    </dropdownButton>
    </div>
</template>