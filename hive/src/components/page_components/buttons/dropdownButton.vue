<script setup lang="ts">
import  {ref, computed} from 'vue'


// export interface dropDownItem {
//     current : string
// }

const props = withDefaults (defineProps<{
    title ? : string, 
    items : string[]
    modelValue?: string // Menerima nilai terpilih dari luar (v-model)
    dropdownColor ? : string
    itemColor ? : string
}>(), {
    dropdownColor  : '#0c387d',
    itemColor : '#ffffff'
}
)
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// state lokal buat fallbck kalo misalkan komponen tidak diberi v-model
const localSelectedItem = ref<string>('Silahkan Pilih Disini')
const IsOpen = ref<boolean>(false)

const currentLabel = computed(() => props.modelValue ?? localSelectedItem.value)

// dropdown

const toggleDropdownButton = () => {
    IsOpen.value = !IsOpen.value
}
const selectItem = (item : string) => {
    localSelectedItem.value = item
    emit('update:modelValue', item) // Kirim nilai terpilih ke komponen induk
    IsOpen.value = false
}
// dropdown


</script>

<template>
<div id="ItemSelector" class="relative w-full items-center justify-center">
      <h1 class="lg:pb-2  text-black text-md font-medium text-center">{{ title }}</h1>
      <button
        type="button"
        @click="toggleDropdownButton"
        class="md:p-2 w-full items-center justify-center bg-blue-400 rounded-md p-1 text-white"
      >
        <span>{{ currentLabel }}</span>
      </button>

      <!-- Dropdown Data -->
      <div
        v-if="IsOpen"
        class="absolute top-full w-full mt-1 z-20 max-h-48 overflow-y-auto bg-white border border-gray-400 rouded-md"
      >
        <ul class="py-1">
          <li
            v-for="item in items"
            :key="item"
            @click="selectItem(item)"
            class="flex  justify-between items-center px-2 py-2 text-md cursor-pointer transition-colors"
            :class="[
              item === currentLabel
                ? 'bg-blue-100 text-blue-600 font-semibold'
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600',
            ]"
          >
            <span>{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
</template>