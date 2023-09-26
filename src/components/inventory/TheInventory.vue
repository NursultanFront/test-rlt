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
      <template #item="{ element }">
        <div
          class="table-cell"
          :class="[element.class, element.id === indexInventory ? 'selected' : '']"
          @click="openDeleteModal(element.id)"
        >
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
import { onMounted, ref } from 'vue'
// @ts-ignore
import draggable from 'vuedraggable'
import { useInventoryStore } from '@/stores/inventory'

const store = useInventoryStore()

import DeleteModal from './modals/DeleteModal.vue'

const isOpenDeleteModal = ref<boolean>(false)

const indexInventory = ref<number>(0)

const openDeleteModal = (id: number) => {
  const isHaveCount = store.list.find((item) => item.id === id)?.count !== undefined
  const isNotZero = store.list.find((item) => item.id === id)?.count !== 0

  if (isHaveCount && isNotZero) {
    isOpenDeleteModal.value = true
    indexInventory.value = id
  }
}

onMounted(() => {
  localStorage.setItem('original-list', JSON.stringify(store.list))

  store.updateInventoryList('inventory-list')
})

window.addEventListener('beforeunload', () => {
  localStorage.setItem('inventory-list', JSON.stringify(store.list))
})
</script>

<style scoped lang="scss">
@import '../../assets/scss/colors';
@import '../../assets/scss/mixins';
@import '../../assets/scss/functions';

.table {
  position: relative;
  overflow: hidden;
  height: fit-content;
}

.table-container {
  display: grid;
  grid-template-columns: repeat(5, 105px);

  @include rounded-border(12px);
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

  font-family: 'Inter', sans-serif;
  @include text-style(10px, 500, $white-main);

  border-radius: 6px 0px 0px 0px;
  border-left: 1px solid #4d4d4d;
  border-top: 1px solid #4d4d4d;
  @include padding(2px, 4px);

  opacity: 0.4;
  cursor: pointer;
}

.sortable-chosen {
  @include rounded-border(24px);
  @include border(1px, $primary-main);
  background: $secondary-main;

  .table-number {
    opacity: 0;
  }
}

.sortable-ghost {
  opacity: 0;
}

.selected {
  background-color: $hover-main;
}
</style>
