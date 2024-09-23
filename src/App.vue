<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Projects from './components/Projects.vue'
import Technologies from './components/Technologies.vue'
import ContactForm from './components/ContactForm.vue'
import Footer from './components/Footer.vue'

const { locale } = useI18n()
const changeLanguage = (lang: string) => {
  locale.value = lang
  localStorage.setItem('language', lang)
}
</script>

<template>
  <div class="container">
    <span id="top" />
    <Header :onLanguageChange="changeLanguage" />

    <div id="hero-section">
      <Hero />
    </div>

    <div id="projects-section">
      <Projects />
    </div>

    <div id="technologies-section">
      <Technologies />
    </div>

    <div id="contact-section">
      <ContactForm />
    </div>

    <Footer />
  </div>
</template>

<style scoped>
</style>
