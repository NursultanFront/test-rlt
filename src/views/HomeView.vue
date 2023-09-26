<template>
  <div class="home">
    <TheAside />
    <TheInventory />
  </div>

  <TheTable />
</template>

<script setup lang="ts">
import TheInventory from '@/components/inventory/TheInventory.vue'
import TheTable from '@/components/inventory/TheTable.vue'
import TheAside from '@/components/aside/TheAside.vue'
</script>

<style scoped lang="scss">
.home {
  display: flex;
  justify-content: center;
  gap: 24px;
}
</style>
