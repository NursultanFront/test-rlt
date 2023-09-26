<template>
  <TheModal id="delete-modal" v-model="isVisible"> </TheModal>
</template>

<script setup lang="ts">
import TheModal from '@/components/ui/TheModal.vue'

import { inventory } from '../data'

const isVisible = defineModel({
  default: false,
  required: true
})

const deleteItem = (index: number) => {
  inventory.value[index].class = 'not-draggable'
  inventory.value[index].icon = null
  inventory.value[index].count = null
}
</script>

<style scoped></style>
