<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()

const { onLanguageChange } = defineProps<{
  onLanguageChange: (lang: string) => void
}>()

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const navStyles = computed(() => ({
  '--myWork-content': `'${t('myWork')}'`,
  '--myTechStack-content': `'${t('myTechStack')}'`,
  '--contact-content': `'${t('contact')}'`,
}))
</script>

<template>
  <header class="header">
    <div class="logo">
      <a href="#top" class="logo">
        <img src="../assets/logo.png" alt="logo" />
      </a>
    </div>
    <button
      @click="toggleMenu"
      class="menu-toggle"
      :class="{ open: isMenuOpen }"
    >
      <span class="material-icons">{{ isMenuOpen ? 'close' : 'menu' }}</span>
    </button>
    <div class="dynamicHeaderContainer" :class="{ open: isMenuOpen }">
      <nav class="nav" :style="navStyles">
        <a class="navLink myWork" href="#projects-section">{{
          $t('myWork')
        }}</a>

        <a class="navLink technologies" href="#technologies-section">{{
          $t('myTechStack')
        }}</a>

        <a class="navLink contact" href="#contact-section">{{
          $t('contact')
        }}</a>
      </nav>
      <div class="socials">
        <a
          href="https://www.linkedin.com/in/pawe%C5%82-ochmann-86418a2b5/"
          target="_blank"
        >
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://github.com/Pawel-Ochmann" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
      </div>
      <div class="langSwitcher">
        <button
          @click="onLanguageChange('en')"
          :class="{ active: locale === 'en' }"
        >
          EN
        </button>
        <div class="separator"></div>
        <button
          @click="onLanguageChange('pl')"
          :class="{ active: locale === 'pl' }"
        >
          PL
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  padding: 0 1rem 0 1rem;
  background-color: $color-background-primary;
  z-index: 1;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
}

.logo {
  width: 100px;
  height: 100px;
  img {
    width: 100%;
  }
}

.menu-toggle {
  color: white;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  width: 100px;
  z-index: 1000;
  span {
    font-size: 3rem;
  }
}

.dynamicHeaderContainer {
  transition: transform 0.5s ease-in-out;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 60dvw;
  height: 100dvh;
  background-color: $color-theme-container;
  transform: translateX(100vw);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10dvh;
  &.open {
    transform: translateX(0);
  }

  .socials {
    display: flex;
    gap: 2rem;
    svg {
      font-size: 3rem;
      color: $color-text-primary;
    }
  }

  .langSwitcher {
    display: flex;
    gap: 1rem;
    button {
      @include fontTitleMedium;
      background: none;
      border: none;
      &.active {
        text-shadow: $glow-text-primary;
      }
    }
    .separator {
      width: 2px;
      height: 100%;
      background-color: $color-text-primary;
    }
  }
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  a {
    @include fontTitleMedium;
  }
}

@media only screen and (min-width: 1024px) {
  .menu-toggle {
    display: none;
  }

  .logo {
    display: flex;
  }

  .dynamicHeaderContainer {
    position: static;
    transform: none;
    width: 100%;
    height: auto;
    flex-direction: row;
    padding: 0;
    gap: 1rem;
    background-color: $color-background-primary;
    &.open {
      transform: none;
    }
  }

  .nav {
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .navLink {
    position: relative;
    text-decoration: none;
    border-bottom: 1px solid $color-text-primary;
    display: flex;
    align-items: end;
  }

  .navLink,
  .navLink::before {
    font-weight: 300;
  }

  .navLink::before {
    position: absolute;
    top: 0;
    left: 0;
    height: 0%;
    width: 100%;
    color: $color-text-primary;
    transition: all 0.3s ease-in-out;
    transform-origin: bottom;
    border-bottom: 1px solid $color-text-primary;
    z-index: 100;
    line-height: 1;
    min-width: max-content;
  }
  .navLink:hover::before {
    height: 100%;
    text-shadow: $glow-text-secondary;
    font-weight: 700;
  }

  .myWork::before {
    content: var(--myWork-content);
  }

  .technologies::before {
    content: var(--myTechStack-content);
  }

  .contact::before {
    content: var(--contact-content);
  }
}
</style>
