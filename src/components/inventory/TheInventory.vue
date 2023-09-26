<template>
  <div class="table">
    <draggable
      v-model="store.list"
      group="people-md"
      selected-class="selected"
      item-key="name"
      filter=".not-draggable"
      class="table-container"
      :swap="true"
    >
      <template #item="{ element, index }">
        <div class="table-cell" :class="element.class" @click="openDeleteModal(index)">
          <component :is="element.icon" />
          <div
            v-if="element.icon"
            :class="{
              [`table-number`]: element.icon
            }"
          >
            {{ element.count }}
          </div>
        </div>
      </template>
    </draggable>
    <DeleteModal v-model="isOpenDeleteModal" v-model:index="indexInventory" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
// @ts-ignore
import draggable from 'vuedraggable'
import { useInventoryStore } from '@/stores/inventory'

const store = useInventoryStore()

import DeleteModal from './modals/DeleteModal.vue'

const isOpenDeleteModal = ref<boolean>(false)

const indexInventory = ref<number>(0)

const openDeleteModal = (index: number) => {
  if (store.list[index]?.count !== undefined && store.list[index].count !== 0) {
    isOpenDeleteModal.value = true
    indexInventory.value = index
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/scss/colors';
@import '../../assets/scss/mixins';
@import '../../assets/scss/functions';

.table {
  position: relative;
  overflow: hidden;
}

.table-container {
  display: grid;
  grid-template-columns: repeat(5, 105px);

  @include rounded-border(12px);
  border: 1px solid var(--Primary-Border, #4d4d4d);
  @include border(1px, $primary-main);
  width: fit-content;
}

.table-cell {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 105px;
  height: 100px;

  border-right: 1px solid $primary-main;
  border-bottom: 1px solid $primary-main;

  &:nth-child(5n) {
    border-right: none;
  }

  &:nth-child(n + 21) {
    border-bottom: none;
  }
}

.table-number {
  position: absolute;
  right: 0;
  bottom: 0;

  color: $white-main;
  text-align: center;
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

.sortable-ghost {
  opacity: 0;
}
</style>
