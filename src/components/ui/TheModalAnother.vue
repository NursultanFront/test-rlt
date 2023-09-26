<template>
  <div v-if="isVisible" class="delete-modal">
    <div class="delete-modal__wrapper">
      <div class="delete-modal__img">
        <component :is="inventory[indexNumber].icon" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inventory } from '../inventory/data'

const isVisible = defineModel({
  default: false,
  required: true
})

const indexNumber = defineModel('index', {
  default: 0,
  required: true
})
</script>

<style scoped lang="scss">
@import '../../assets/scss/colors';
@import '../../assets/scss/mixins';
@import '../../assets/scss/functions';
.delete-modal {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;

  border-left: 1px solid var(--Primary-Border, #4d4d4d);
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);

  &__wrapper {
    @include padding(55px, 20px);
    display: flex;
    justify-content: center;
  }

  &__img {
    width: 130px;
    height: 130px;

    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
