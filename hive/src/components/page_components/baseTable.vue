<script setup lang="ts">
import {ref} from 'vue'

export interface TableColumn {
    key : string, 
    label : string, 
    align ? : 'left' | 'right' | 'center'
}

withDefaults(defineProps<{
column : TableColumn[]
rows : Record<string, any>
dividerColor? : 'black' | 'blue'
}>(),
{
    dividerColor : 'black'
}
)

const alignClass = (align?: 'left' | 'center' | 'right') => {
  if (align === 'center') return 'text-center'
  if (align === 'right') return 'text-right'
  return 'text-left'
}

</script>


<template>
    <div class="w-full overflow-x-auto">
    <table class="w-full border-collapse text-sm md:text-md">
      <thead>
        <tr
          class="border-b font-semibold text-black"
          :class="dividerColor === 'blue' ? 'border-sky-400' : 'border-gray-300'"
        >
          <th
            v-for="col in column"
            :key="col.key"
            class="py-3 px-4 whitespace-nowrap"
            :class="alignClass(col.align)"
          >
            <div
              class="items-center gap-1.5"
              :class="{
                'justify-center w-full': col.align === 'center',
                'justify-end w-full': col.align === 'right',
              }"
            >
              <span>{{ col.label }}</span>
              <!-- Ikon sort opsional khusus tabel dataset -->
              <!-- <span v-if="col.sortable" class="text-xs text-gray-400">▲▼</span> -->
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <tr
          v-for="(row, rowIndex) in rows"
          :key="rowIndex"
          class="border-b transition-colors hover:bg-sky-50/50"
          :class="dividerColor === 'blue' ? 'border-sky-400' : 'border-gray-300'"
        >
          <td
            v-for="col in column"
            :key="col.key"
            class="py-3.5 px-4 text-black whitespace-nowrap"
            :class="alignClass(col.align)"
          >
            <!-- Scoped Slot: Jika halaman induk mengirim template khusus untuk kolom ini, render itu.
                 Jika tidak, tampilkan teks data biasa (row[col.key]) -->
            <slot :name="col.key" :row="row" :value="row[col.key]">
              {{ row[col.key] }}
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>