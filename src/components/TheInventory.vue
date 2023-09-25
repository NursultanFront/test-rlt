<template>
  <div class="table">
    <draggable
      v-for="item in elements"
      :key="item.index"
      :list="item.items"
      :itemKey="item.index"
      :swap="{
        animation: 150, // Длительность анимации при замене
        horizontal: true, // Разрешить горизонтальную замену
        vertical: true // Разрешить вертикальную замену
      }"
      tag="div"
      group="inventory"
      class="table-container"
    >
      <template #item="{ element: item }">
        <div class="table-cell">{{ item.id }}</div>
      </template>
    </draggable>
  </div>

  <h1>Favorite Foods</h1>
  <draggable v-model="meals" tag="ul" group="meals">
    <template #item="{ element: meal }">
      <li>{{ meal }}</li>
    </template>
  </draggable>

  <h1>Terrible Foods</h1>
  <draggable v-model="yuckyMeals" tag="ul" group="meals">
    <template #item="{ element: meal }">
      <li>{{ meal }}</li>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

import GreenSquare from './icons/GreenSquare.vue'
import OrangeSquare from './icons/OrangeSquare.vue'
import PurpleSquare from './icons/PurpleSquare.vue'

const elements = ref([
  {
    index: '1',
    items: [
      { id: '1', icon: PurpleSquare },
      { id: '2', icon: OrangeSquare },
      { id: '3', icon: GreenSquare },
      { id: '4', class: 'not-draggable' },
      { id: '5', class: 'not-draggable' }
    ]
  },
  {
    index: '2',
    items: [
      { id: '6', class: 'not-draggable' },
      { id: '7', class: 'not-draggable' },
      { id: '8', class: 'not-draggable' },
      { id: '9', class: 'not-draggable' },
      { id: '10', class: 'not-draggable' }
    ]
  },
  {
    index: '3',
    items: [
      { id: '11', class: 'not-draggable' },
      { id: '12', class: 'not-draggable' },
      { id: '13', class: 'not-draggable' },
      { id: '14', class: 'not-draggable' },
      { id: '15', class: 'not-draggable' }
    ]
  },
  {
    index: '4',
    items: [
      { id: '16', class: 'not-draggable' },
      { id: '17', class: 'not-draggable' },
      { id: '18', class: 'not-draggable' },
      { id: '19', class: 'not-draggable' },
      { id: '20', class: 'not-draggable' }
    ]
  },
  {
    index: '5',
    items: [
      { id: '21', class: 'not-draggable' },
      { id: '22', class: 'not-draggable' },
      { id: '23', class: 'not-draggable' },
      { id: '24', class: 'not-draggable' },
      { id: '25', class: 'not-draggable' }
    ]
  }
])

const meals = ref(['Hamburger', 'Pizza', 'Spaghetti', 'Tacos', 'Teriyaki Chicken'])

const yuckyMeals = ref(['Bat wing soup', 'Spicy Octopus', 'Anything from Taco Bell'])
</script>

<style scoped>
.table {
  border-radius: 12px;
  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: var(--Seondary-BG, #262626);
  width: fit-content;
}

.table-container {
  display: grid;
  grid-template-columns: repeat(5, 105px);
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
