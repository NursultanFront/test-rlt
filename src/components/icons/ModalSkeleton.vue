<template>
  <svg
    width="211"
    height="114"
    viewBox="0 0 211 114"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="211" height="10" rx="4" fill="url(#paint0_linear_0_134)" class="rect-to-shine" />
    <rect
      y="26"
      width="211"
      height="10"
      rx="4"
      fill="url(#paint1_linear_0_134)"
      class="rect-to-shine"
    />
    <rect
      y="52"
      width="211"
      height="10"
      rx="4"
      fill="url(#paint2_linear_0_134)"
      class="rect-to-shine"
    />
    <rect
      x="16"
      y="78"
      width="180"
      height="10"
      rx="4"
      fill="url(#paint3_linear_0_134)"
      class="rect-to-shine"
    />
    <rect
      x="66"
      y="104"
      width="80"
      height="10"
      rx="4"
      fill="url(#paint4_linear_0_134)"
      class="rect-to-shine"
    />
    <defs>
      <linearGradient
        id="paint0_linear_0_134"
        x1="0"
        y1="4.99999"
        x2="211"
        y2="4.99996"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3C3C3C" />
        <stop offset="0.510417" stop-color="#444444" />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_0_134"
        x1="0"
        y1="31"
        x2="211"
        y2="31"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3C3C3C" />
        <stop offset="0.510417" stop-color="#444444" />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_0_134"
        x1="0"
        y1="57"
        x2="211"
        y2="57"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3C3C3C" />
        <stop offset="0.510417" stop-color="#444444" />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_0_134"
        x1="16"
        y1="83"
        x2="196"
        y2="83"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3C3C3C" />
        <stop offset="0.510417" stop-color="#444444" />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_0_134"
        x1="66"
        y1="109"
        x2="146"
        y2="109"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3C3C3C" />
        <stop offset="0.510417" stop-color="#444444" />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script setup lang="ts"></script>

<style scoped>
@keyframes shine {
  0% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
  100% {
    opacity: 0.5;
  }
}

.rect-to-shine {
  animation: shine 1s infinite;
}
</style>
