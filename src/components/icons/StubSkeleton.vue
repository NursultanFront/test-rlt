<template>
  <svg width="211" height="30" viewBox="0 0 211 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="211" height="30" rx="8" fill="url(#paint0_linear_0_328)" class="rect-to-shine" />
    <defs>
      <linearGradient
        id="paint0_linear_0_328"
        x1="0"
        y1="15"
        x2="211"
        y2="15"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#3C3C3C" />
        <stop offset="0.510417" stop-color="#444444" />
        <stop offset="1" stop-color="#333333" />
      </linearGradient>
    </defs>
  </svg>
</template>

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
