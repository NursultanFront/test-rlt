<template>
  <div
    class="delete-modal"
    :class="{
      ['delete-modal--active']: isVisible
    }"
  >
    <component :is="CloseIcon" class="delete-modal__close" @click="closeModal" />
    <div class="delete-modal__wrapper">
      <div class="delete-modal__img">
        <component :is="inventory[indexNumber].icon" />
      </div>

      <div class="delete-modal__border"></div>

      <div class="delete-modal__skeleton">
        <component :is="StubSkeleton" />
        <component :is="ModalSkeleton" />
      </div>
      <div class="delete-modal__border"></div>
      <div class="delete-modal__footer">
        <button class="delete-modal__button delete-modal__button--red" @click="showAdditional">
          Удалить предмет
        </button>
      </div>
      <div
        class="delete-modal__box additional-box"
        :class="{
          ['additional-box--active']: additionalBox
        }"
      >
        <input
          v-model="count"
          type="text"
          placeholder="Введите количество"
          class="additional-box__input"
          :max="maxNumber"
        />
        <div class="additional-box__inner">
          <button class="delete-modal__button delete-modal__button--white" @click="closeAdditional">
            Отмена
          </button>
          <button
            class="delete-modal__button delete-modal__button--red"
            @click="deleteItem"
            :disabled="maxNumber < count"
          >
            Подтвердить
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { inventory } from '../data'
import ModalSkeleton from '@/components/icons/ModalSkeleton.vue'
import StubSkeleton from '@/components/icons/StubSkeleton.vue'
import CloseIcon from '@/components/icons/CloseIcon.vue'

const isVisible = defineModel({
  default: false,
  required: true
})

const indexNumber = defineModel('index', {
  default: 0,
  required: true
})

const additionalBox = ref<boolean>(false)

const count = ref<number>(0)

const maxNumber = computed(() => inventory.value[indexNumber.value].count as number)

const closeModal = () => {
  isVisible.value = false
  additionalBox.value = false
}

const showAdditional = () => {
  additionalBox.value = true
}

const closeAdditional = () => {
  additionalBox.value = false
}

const deleteItem = () => {
  ;(inventory.value[indexNumber.value].count as number) -= count.value

  if (inventory.value[indexNumber.value].count === 0) {
    inventory.value[indexNumber.value].class = 'not-draggable'
    inventory.value[indexNumber.value].icon = null
  }
  closeAdditional()
}
</script>

<style scoped lang="scss">
@import '../../../assets/scss/colors';
@import '../../../assets/scss/mixins';
@import '../../../assets/scss/functions';
.delete-modal {
  position: absolute;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  width: 50%;

  border: 1px solid var(--Primary-Border, #4d4d4d);
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  background: rgba(38, 38, 38, 0.5);
  backdrop-filter: blur(8px);

  transform: translateX(100%);
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &--active {
    transform: translateX(0);
    opacity: 1;
  }

  &__close {
    position: absolute;
    top: 8px;
    right: 8px;
  }

  &__wrapper {
    @include padding(55px, 20px, 18px, 20px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    height: 100%;
  }

  &__img {
    width: 130px;
    height: 130px;

    svg {
      width: 100%;
      height: 100%;
    }
  }

  &__border {
    width: 100%;
    height: 1px;
    background-color: $primary-main;
  }

  &__skeleton {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  &__footer {
    align-self: stretch;
  }
  &__button {
    padding: 11px;
    width: 100%;
    @include rounded-border(8px);

    &--red {
      background-color: $red;

      @include text-style(14px, 400, $white-main);
      transition: background-color 0.3s ease;

      &:hover {
        background-color: $red-hover;
      }
    }

    &:disabled {
      opacity: 0.3;
    }
  }
}

.additional-box {
  @include padding(20px);

  display: flex;
  flex-direction: column;
  gap: 20px;

  position: absolute;
  z-index: 2;
  left: -1px;
  right: -1px;
  bottom: -1px;

  border: 1px solid var(--Primary-Border, #4d4d4d);
  background: rgba(38, 38, 38, 0.6);
  backdrop-filter: blur(8px);

  border-bottom-right-radius: 12px;

  transform: translateY(100%);
  opacity: 0;
  transition:
    transform 0.3s ease,
    opacity 0.3s ease;

  &--active {
    transform: translateY(0);
    opacity: 1;
  }

  &__input {
    @include padding(11px);
    border-radius: 4px;

    @include border(1px, $primary-main);
    @include rounded-border(4px);

    background: transparent;

    @include text-style(14px, 500, $white-main);
  }
  &__inner {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    .delete-modal__button {
      @include padding(8px, 20px);
      width: auto;
    }
  }
}
</style>
