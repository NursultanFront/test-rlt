<template>
  <aside class="aside">
    <div class="aside__wrapper">
      <img :src="MainImg" alt="Картинка с людьми" class="aside__img" />
      <AsideSkeletonIcon />
      <button class="aside__btn" @click="store.updateInventoryList('original-list')">
        Вернуть старое значение
      </button>
    </div>
  </aside>
</template>

<script setup lang="ts">
import MainImg from '@/assets/img/nicebg.png'
import AsideSkeletonIcon from '../icons/AsideSkeleton.vue'

import { useInventoryStore } from '@/stores/inventory'

const store = useInventoryStore()
</script>

<style scoped lang="scss">
@import '../../assets/scss/colors';
@import '../../assets/scss/mixins';
@import '../../assets/scss/functions';
.aside {
  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    @include padding(18px);
    @include rounded-border(12px);
    border: 1px solid #4d4d4d;
    background-color: $secondary-main;
  }

  &__img {
    filter: blur(5px);
  }

  &__btn {
    @include padding(8px, 20px);
    @include rounded-border(12px);
    @include border(1px, $primary-main);
    @include text-style(16px, 400, $white-main);
    background: transparent;
    cursor: pointer;
  }
}
</style>
