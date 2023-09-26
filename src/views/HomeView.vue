<template>
  <div class="home">
    <div class="home__wrapper">
      <TheAside />
      <TheInventory />
    </div>
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
import TheInventory from '@/components/inventory/TheInventory.vue'
import TheAside from '@/components/aside/TheAside.vue'
import TheFooter from '@/components/footer/TheFooter.vue'
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__wrapper {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
}
</style>
