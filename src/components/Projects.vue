<script setup lang="ts">
import { ref, computed } from 'vue'

const currentSlide = ref(0)

// Method to switch to the previous slide
const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

// Method to switch to the next slide
const nextSlide = () => {
  currentSlide.value = currentSlide.value === 2 ? 0 : currentSlide.value + 1
}

const imageSrc = computed(() => {
  const imageName = `${currentSlide.value}.png`
  return new URL(`../assets/${imageName}`, import.meta.url).href
})

</script>

<template>
  <div>
    <h2>{{ $t('sliderTitle') }}</h2>
  </div>
  <div class="slider">
    <div class="photo">
    <img :src="imageSrc" alt="picture">
    </div>
    
    <div class="info">
      <h3>{{ $t(`slider.${currentSlide}.title`) }}</h3>
      <p>{{ $t(`slider.${currentSlide}.description`) }}</p>
      <div class="links">
        <a :href="$t(`slider.${currentSlide}.liveLink`)" target="_blank">Live</a>
        <a :href="$t(`slider.${currentSlide}.githubLink`)" target="_blank">Github</a>
      </div>
    </div>
  </div>
  <div class="controller">
    <button @click="previousSlide">previous</button>
    <button @click="nextSlide">next</button>
  </div>
</template>

<style scoped></style>
