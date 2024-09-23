<script setup lang="ts">
import '@material-design-icons/font'

import { ref } from 'vue'

const activeCategory = ref('development')

const switchCategory = (category: 'design' | 'development') => {
  activeCategory.value = category
}
</script>

<template>
  <h2 class="title">{{ $t('technologiesTitle') }}</h2>
  <div class="container">
    <div>
      <div class="techSwitcherContainer">
        <div
          class="techSwitcher"
          :class="{ active: activeCategory === 'design' }"
          @click="switchCategory('design')"
        >
          <p>{{ $t('design') }}</p>
          <span class="material-icons">palette</span>
        </div>
        <div class="separator"></div>
        <div
          class="techSwitcher"
          :class="{ active: activeCategory === 'development' }"
          @click="switchCategory('development')"
        >
          <p>{{ $t('development') }}</p>
          <span class="material-icons">terminal</span>
        </div>
      </div>
    </div>
    <div class="techContainer">
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Typescript
      </div>
      <div class="tech design" :class="{ active: activeCategory === 'design' }">
        Figma
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        React
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Vue
      </div>
      <div class="tech design" :class="{ active: activeCategory === 'design' }">
        Material Design
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Github
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        NodeJS
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        ExpressJS
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        MongoDB
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Postgress
      </div>
      <div class="tech design" :class="{ active: activeCategory === 'design' }">
        Canva
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Wordpress
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Vite
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        Jest
      </div>
      <div class="tech" :class="{ active: activeCategory !== 'design' }">
        VS Code
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: 1rem;
  padding: 3dvh 5dvw;
  border-left: 4px solid $color-theme-primary;
  border-bottom: 4px solid $color-theme-primary;
  border-radius: 3rem 0 0 3rem;
}

.title {
  margin: 8rem 2rem 2rem 2rem;
  text-align: center;
  line-height: 1.2;
  display: flex;
  justify-content: center;
  @include fontHeadlineMedium;
  text-shadow: $glow-text-primary;
}

.techSwitcherContainer {
  display: grid;
  gap: 1rem;
  width: max-content;
  margin: 0 auto;
}

.separator {
  height: 1px;
  width: 100%;
  background-color: $color-theme-primary;
}

.techSwitcher {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  text-transform: uppercase;

  @include fontTitleSmall;

  &.active {
    text-shadow: $glow-text-primary;
  }
}

.techContainer {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.tech {
  background-color: $color-background-secondary;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 10rem;
  opacity: 0.5;
}

.tech {
  &.active {
    text-shadow: $glow-text-primary;
    font-weight: 700;
    opacity: 1;
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    align-items: center;
    min-height: calc(150px + 8dvw);
  }

  .techSwitcher {
    font-size: calc(1.333rem + 0.5dvw);
    cursor: pointer;
  }

  .tech {
    font-size: calc(1rem + 0.5dvw);
  }
}
</style>
