<template>
  <div class="table">
    <draggable
      v-model="inventory"
      group="people-md"
      selected-class="selected"
      item-key="name"
      filter=".not-draggable"
      class="table-container"
      :swap="true"
    >
      <template #item="{ element, index }">
        <div class="table-cell" :class="element.class">
          <component :is="element.icon" @click="openDeleteModal(index)" />
          <div
            :class="{
              [`table-number`]: element.icon
            }"
          >
            {{ element.count }}
          </div>
        </div>
      </template>
    </draggable>
  </div>
  <DeleteModal v-model="isOpenDeleteModal" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import draggable from 'vuedraggable'
import { inventory } from './data'

import DeleteModal from './modals/DeleteModal.vue'

const isOpenDeleteModal = ref<boolean>(false)

const indexInventory = ref<number>(0)

const openDeleteModal = (index: number) => {
  isOpenDeleteModal.value = true
  indexInventory.value = index
}
</script>

<style scoped lang="scss">
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 105px;
  height: 100px;
  border-collapse: collapse;
  border-right: 1px solid #4d4d4d;
  border-bottom: 1px solid #4d4d4d;

  /* &:nth-child(5n) {
    border-right: none;
  } */

  /* border-left: 1px solid var(--Primary-Border, #4D4D4D); */
}

.table-number {
  position: absolute;
  right: 0;
  bottom: 0;

  color: var(--Primary-White, #fff);
  text-align: center;
  font-family: Inter;
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  border-radius: 6px 0px 0px 0px;
  border-left: 1px solid #4d4d4d;
  border-top: 1px solid #4d4d4d;
  padding: 4px 4px 4px 2px;

  opacity: 0.4;
  cursor: pointer;
}

.sortable-chosen {
  border-radius: 24px;
  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: var(--Seondary-BG, #262626);

  .table-number {
    opacity: 0;
  }
}

.ghost {
  opacity: 0;
}

.d-none {
  opacity: 0;
}
</style>
