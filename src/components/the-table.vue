<script setup lang="ts">
import Sortable from './the-sortable.vue'
import { computed, onMounted, onUnmounted, reactive, ref } from 'vue'
import type { SortableEvent, SortableOptions } from 'sortablejs'
import type { AutoScrollOptions } from 'sortablejs/plugins'

import GreenSquare from './icons/GreenSquare.vue'
import OrangeSquare from './icons/OrangeSquare.vue'
import PurpleSquare from './icons/PurpleSquare.vue'

const elements = ref([
  {
    id: '1',
    icon: PurpleSquare
  },
  {
    id: '2',
    icon: OrangeSquare
  },
  {
    id: '3',
    icon: GreenSquare
  },
  {
    id: '4',
    class: 'not-draggable'
  },
  {
    id: '5',
    class: 'not-draggable'
  },
  {
    id: '6',
    class: 'not-draggable'
  },
  {
    id: '7',
    class: 'not-draggable'
  },
  {
    id: '8',
    class: 'not-draggable'
  },
  {
    id: '9',
    class: 'not-draggable'
  },
  {
    id: '10',
    class: 'not-draggable'
  },
  {
    id: '11',
    class: 'not-draggable'
  },
  {
    id: '12',
    class: 'not-draggable'
  },
  {
    id: '13',
    class: 'not-draggable'
  },
  {
    id: '14',
    class: 'not-draggable'
  },
  {
    id: '15',
    class: 'not-draggable'
  },
  {
    id: '16',
    class: 'not-draggable'
  },
  {
    id: '17',
    class: 'not-draggable'
  },
  {
    id: '18',
    class: 'not-draggable'
  },
  {
    id: '19',
    class: 'not-draggable'
  },
  {
    id: '20',
    class: 'not-draggable'
  },
  {
    id: '21',
    class: 'not-draggable'
  },
  {
    id: '22',
    class: 'not-draggable'
  },
  {
    id: '23',
    class: 'not-draggable'
  },
  {
    id: '24',
    class: 'not-draggable'
  },
  {
    id: '25',
    class: 'not-draggable'
  }
])

const list = computed({
  get: () => elements,
  set: (newValue) => {}
})

const sortable = ref<InstanceType<typeof Sortable> | null>(null)

const animating = ref(true)
const scrollSensitivity = ref(50)
const scrollSpeed = ref(10)

const options = computed<SortableOptions | AutoScrollOptions>(() => {
  return {
    draggable: '.draggable',
    filter: '.not-draggable',
    animation: animating.value ? 150 : 0,
    ghostClass: 'ghost',
    dragClass: 'drag',
    scroll: true,
    forceFallback: true,
    scrollSensitivity: scrollSensitivity.value,
    scrollSpeed: scrollSpeed.value,
    bubbleScroll: true,
    swapThreshold: 1, // Порог обмена
    invertSwap: true, // Всегда использовать инвертированную зону обмена
    group: 'my-list' // Группа элементов
  }
})

// const onEnd = (evt: SortableEvent) => {
//   const { oldIndex, newIndex } = evt
//   const movedElement = elements.splice(oldIndex as number, 1)[0]
//   elements.splice(newIndex as number, 0, movedElement)
//   list.value = elements
// }

onMounted(() => {
  const savedList = localStorage.getItem('list')
  if (savedList) {
    list.value = JSON.parse(savedList)
  }
})

onUnmounted(() => {
  localStorage.setItem('list', JSON.stringify(list.value))
})
</script>

<template>
  <div>
    <Sortable
      :list="elements"
      item-key="id"
      :options="options"
      ref="sortable"
      class="table-container"
    >
      <template #item="{ element }">
        <div class="draggable table-cell" :class="element.class" :key="element.id">
          <!-- <component :is="elements[index].icon" /> -->
          {{ element.id }}
        </div>
      </template>
    </Sortable>
  </div>
</template>

<style scoped>
.table-container {
  display: grid;
  grid-template-columns: repeat(5, 105px);

  border-radius: 12px;
  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: var(--Seondary-BG, #262626);
  width: fit-content;
}

.table-row {
  display: flex;
}

.table-cell {
  display: flex;
  justify-content: center;
  align-items: center;

  width: 105px;
  height: 100px;
}

.sortable-chosen {
  border-radius: 24px;
  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: var(--Seondary-BG, #262626);
}

.ghost {
  opacity: 0;
}
</style>
