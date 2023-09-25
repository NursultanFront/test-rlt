<script setup lang="ts">
import Sortable from './the-sortable.vue'
import { computed, onUnmounted, reactive, ref, watchEffect } from 'vue'
import type { SortableOptions } from 'sortablejs'
import type { AutoScrollOptions } from 'sortablejs/plugins'

import { useInventoryStore } from '@/stores/inventory'

const store = useInventoryStore()

const sortable = ref<InstanceType<typeof Sortable> | null>(null)

const logEvent = (evt: Event, evt2?: Event) => {
  if (evt2) {
    console.log(evt, evt2)
  } else {
    console.log(evt)
  }
}

const logClick = (evt: Event) => {
  if (sortable.value?.isDragging) return
  logEvent(evt)
}

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
    invertSwap: false,
    forceFallback: true,
    scrollSensitivity: scrollSensitivity.value,
    scrollSpeed: scrollSpeed.value,
    bubbleScroll: true
  }
})

const onPress = (evt: Event) => {
  animating.value = !animating.value
}

onUnmounted(() => {
  localStorage.setItem('inventory', JSON.stringify(store.list))
})
</script>

<template>
  <div>
    <Sortable
      :list="store.list"
      item-key="id"
      :options="options"
      @change="logEvent"
      @choose="logEvent"
      @unchoose="logEvent"
      @start="logEvent"
      @end="logEvent"
      @add="logEvent"
      @update="logEvent"
      @sort="logEvent"
      @remove="logEvent"
      @filter="logEvent"
      @move="logEvent"
      @clone="logEvent"
      ref="sortable"
      class="table-container"
    >
      <template #item="{ element, index }">
        <div
          class="draggable table-cell"
          :class="element.class"
          :key="element.id"
          @click="logClick"
        >
          <component :is="store.list[index].icon" />
        </div>
      </template>
    </Sortable>
  </div>
</template>

<style>
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
