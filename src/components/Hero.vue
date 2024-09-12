<script setup lang="ts"></script>

<template>
  <div>
    <h1>{{ $t('heroHeader') }}</h1>
    <p>{{ $t('heroDescription') }}</p>
    <a href="#contact-section">{{ $t('heroButton') }}</a>
  </div>
  <div>
    <img src="../assets/file.png" alt="personal photo" />
    <div class="gradient"></div>
  </div>
</template>

<style scoped>
img {
  max-height: 500px;
}
.gradient {
  width: 500px;
  height: 500px;
  background: radial-gradient(#b23dd927 20%, rgba(178, 61, 217, 0) 80%);
  border-radius: 1000px;
  position: absolute;
  top: 0;
  z-index: -10;
}
</style>
