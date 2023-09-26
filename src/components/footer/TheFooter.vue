<template>
  <footer v-if="isShowFooter" class="footer">
    <div class="footer__wrapper" @click="closeFooter">
      <CloseIcon class="footer__close" />
      <FooterSkeletonIcon />
    </div>
  </footer>
</template>

<script setup lang="ts">
import FooterSkeletonIcon from '@/components/icons/FooterSkeleton.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'
import { ref } from 'vue'

const isShowFooter = ref(true)

const closeFooter = () => {
  isShowFooter.value = false
}
</script>

<style scoped lang="scss">
.footer {
  &__wrapper {
    position: relative;
    padding: 18px;
    border-radius: 12px;
    border: 1px solid var(--Primary-Border, #4d4d4d);
    background: var(--Seondary-BG, #262626);
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
  }
}
</style>
