<template>
  <div class="table">
    <!-- Создаем 5 строк -->
    <div v-for="row in 5" :key="row">
      <!-- Создаем 5 ячеек в каждой строке -->
      <div class="cell" v-for="cell in 5" :key="cell">{{ (row - 1) * 5 + cell }}</div>
    </div>
  </div>

  <draggable v-model="inventoryList" item-key="name" class="table">
    <template #item="{ element, index }">
      <draggable
        :list="element.items"
        group="people-md"
        selected-class="selected"
        item-key="id"
        filter=".not-draggable"
        class="row"
        :swap="true"
      >
        <template #item="{ item, idx }">
          <div class="cell">{{ index }}</div>
        </template>
      </draggable>
    </template>
  </draggable>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import draggable from 'vuedraggable'
const inventoryList = ref([
  {
    index: 1,
    items: [
      {
        id: '1',
        count: 0,
        class: ''
      },
      {
        id: '2',
        count: 0,
        class: ''
      },
      {
        id: '3',
        count: 0,
        class: ''
      },
      {
        id: '4',
        class: 'not-draggable'
      },
      {
        id: '5',
        class: 'not-draggable'
      }
    ]
  },
  {
    index: 2,
    items: [
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
      }
    ]
  },
  {
    index: 3,
    items: [
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
      }
    ]
  },
  {
    index: 4,
    items: [
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
      }
    ]
  },
  {
    index: 5,
    items: [
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
    ]
  }
])
</script>

<style>
/* Стили для таблицы и ячеек */
.table {
  display: table;
  width: 100%; /* Ширина таблицы 100% */
  border-collapse: collapse; /* Схлопывание границ */
}

.row {
  display: table-row;
}

.cell {
  display: table-cell;
  width: 20%; /* Равномерное распределение по ширине */
  height: 40px; /* Высота ячейки */
  text-align: center; /* Выравнивание текста по центру */
  vertical-align: middle; /* Вертикальное центрирование текста */
  border: 1px solid #000; /* Границы для каждой ячейки */
}
</style>
<!-- <div class="table-cell" :class="element.class">
        <div
          :class="{
            [`table-number`]: element.icon
          }"
        >
          {{ element.id }}
        </div>
      </div> -->
