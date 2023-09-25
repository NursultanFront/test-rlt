<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { useInventoryStore } from './stores/inventory'

const store = useInventoryStore()
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
