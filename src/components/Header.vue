<script setup lang="ts">
const { onLanguageChange } = defineProps<{
  onLanguageChange: (lang: string) => void
}>()
</script>

<template>
  <header>
    <div class="logo">
      <a href="#top" class="logo">
        <img src="../assets/logo.png" alt="logo" />
      </a>
    </div>
    <nav class="nav">
      <ul>
        <li>
          <a href="#projects-section">{{ $t('myWork') }}</a>
        </li>
        <li>
          <a href="#technologies-section">{{ $t('myTechStack') }}</a>
        </li>
        <li>
          <a href="#contact-section">{{ $t('contact') }}</a>
        </li>
      </ul>
    </nav>
    <div class="socials">
      <a href="https://www.linkedin.com/in/pawe%C5%82-ochmann-86418a2b5/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
      <a href="https://github.com/Pawel-Ochmann" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
    </div>
    <div class="langSwitcher">
      <button @click="onLanguageChange('en')">EN</button>
      |
      <button @click="onLanguageChange('pl')">PL</button>
    </div>
  </header>
</template>

<style scoped>
a {
  font-family: 'Raleway', sans-serif;
  font-weight: 300;
  text-decoration: none;
  color: white;
  font-size: 2rem;
}
img {
  max-height: 100%;
}
header {
  display: flex;
  height: 100px;
  width: 100%;
}
nav > ul {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}
</style>
