<script setup lang="ts">
import { ref, computed } from 'vue'
import '@material-design-icons/font'
import { useI18n } from 'vue-i18n'
import { useFetch } from '@vueuse/core'
import { watch } from 'vue'

interface Project {
  id: number
  documentId: string
  title: string
  description: string
  liveLink: string
  githubLink: string
  createdAt: string // or Date, depending on how you handle dates
  updatedAt: string // or Date
  publishedAt: string // or Date
  locale: string
  image: {
    formats: Formats
  }
}

interface ProjectsResponse {
  data: Project[]
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}

const currentSlide = ref(0)
// Method to switch to the previous slide
const previousSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

// Method to switch to the next slide
const nextSlide = () => {
  currentSlide.value = currentSlide.value === 2 ? 0 : currentSlide.value + 1
}

const { locale } = useI18n()

const url = computed(
  () =>
    `https://backendpersonalwebsite.fly.dev/api/projects?locale=${locale.value}&populate=*`
)

const { data, error, isFetching, execute } = useFetch<ProjectsResponse>(url)
  .get()
  .json()

watch(
  () => locale.value,
  () => {
    execute()
  }
)

const getImageUrl = (project: Project) => {
  return `https://backendpersonalwebsite.fly.dev/${project.image.formats.medium.url}`
}

interface ImageFormat {
  url: string
  width: number
  height: number
}
interface Formats {
  thumbnail?: ImageFormat
  small?: ImageFormat
  medium: ImageFormat
  large?: ImageFormat
}
const generateSrcSet = (formats: Formats): string => {
  const sizes: string[] = []

  if (formats.small)
    sizes.push(
      `https://backendpersonalwebsite.fly.dev${formats.small.url} 400w`
    )
  if (formats.medium)
    sizes.push(
      `https://backendpersonalwebsite.fly.dev${formats.medium.url} 750w`
    )
  if (formats.large)
    sizes.push(
      `https://backendpersonalwebsite.fly.dev${formats.large.url} 1000w`
    )

  return sizes.join(', ')
}
</script>

<template>
  <div>
    <div v-if="isFetching" class="loaderContainer">
      <div class="title">
        <h2>{{ $t('sliderTitle') }}</h2>
      </div>
      <div class="loader"></div>
    </div>
    <div v-else-if="error"></div>
    <div v-else-if="data">
      <div class="title">
        <h2>{{ $t('sliderTitle') }}</h2>
      </div>
      <div class="container">
        <div class="slider">
          <div class="gradient"></div>
          <transition name="fade" mode="out-in">
            <div class="photo" :key="currentSlide">
              <img
                :src="getImageUrl(data.data[currentSlide])"
                :srcset="generateSrcSet(data.data[currentSlide].image.formats)"
                alt="picture"
              />
            </div>
          </transition>
          <div class="wrapper">
            <transition name="slide" mode="out-in">
              <div class="info" :key="currentSlide">
                <h3 class="infoTitle">{{ data.data[currentSlide].title }}</h3>
                <p class="infoDescription">
                  {{ data.data[currentSlide].description }}
                </p>
                <div class="links">
                  <a
                    class="live"
                    :href="data.data[currentSlide].liveLink"
                    target="_blank"
                    >{{ $t('sliderLive') }}</a
                  >
                  <a
                    class="github"
                    :href="data.data[currentSlide].githubLink"
                    target="_blank"
                    ><font-awesome-icon :icon="['fab', 'github']"
                  /></a>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <div class="controller">
          <button class="controllerButton" @click="previousSlide">
            <span class="material-icons">arrow_back_ios</span>
          </button>

          <div class="dots">
            <span
              v-for="(slide, index) in data.data"
              :key="slide.title"
              class="dot"
              :class="{ active: currentSlide === index }"
            ></span>
          </div>

          <button class="controllerButton" @click="nextSlide">
            <span class="material-icons">arrow_forward_ios</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.loaderContainer {
  margin: 5rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.loader {
  width: 50px;
  padding: 8px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: $color-theme-primary;
  --_m: conic-gradient(#0000 10%, #000), linear-gradient(#000 0 0) content-box;
  -webkit-mask: var(--_m);
  mask: var(--_m);
  -webkit-mask-composite: source-out;
  mask-composite: subtract;
  animation: l3 1s infinite linear;
}
@keyframes l3 {
  to {
    transform: rotate(1turn);
  }
}

.container {
  position: relative;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 3dvh 5dvw;
  border-right: 4px solid $color-theme-primary;
  border-bottom: 4px solid $color-theme-primary;
  border-radius: 0 3rem 3rem 0;
  min-height: calc(500px + 46dvw);
  justify-content: space-between;
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

.photo {
  position: relative;
  height: 65dvw;
  img {
    width: 100%;
    height: 65dvw;
    border-radius: 1rem;
  }
  &::after {
    content: '';
    position: absolute;
    border-radius: 1rem;
    top: 0;
    left: 0;
    width: 100%;
    height: 65dvw;
    background: linear-gradient(
      320deg,
      rgba(0, 0, 0, 0) 0%,
      rgba($color-theme-primary, 0.2) 100%
    );
  }
}

.gradient {
  width: 700px;
  height: 700px;
  background: radial-gradient(
    $color-theme-container 20%,
    $color-background-primary 80%
  );
  border-radius: 1000px;
  top: -200px;
  left: -300px;
  position: absolute;
  z-index: -10;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0;
}

.infoTitle {
  @include fontHeadlineLarge;
}
.infoDescription {
  @include fontBodySmall;
}

.links {
  display: flex;
  gap: 1rem;
}

.live {
  @include fontTitleSmall;
  text-decoration: none;
  color: $color-theme-primary;
  border: 2px solid $color-theme-primary;
  padding: 0.5rem 1rem;
  border-radius: 10rem;
}
.github {
  font-size: 3rem;
  color: $color-theme-primary;
  display: flex;
  align-items: end;
}

.slider,
.info {
  transition:
    opacity 0.5s ease,
    transform 0.5s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Slide transition for the info */
.slide-enter-active,
.slide-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}
.slide-enter-from {
  transform: translateX(10%);
  opacity: 0;
}
.slide-leave-to {
  transform: translateX(-10%);
  opacity: 0;
}

.controller {
  display: flex;
  justify-content: center;
  margin-top: auto;
}

.controllerButton {
  background-color: transparent;
  border: none;
  color: $color-text-primary;
  span {
    font-size: 2.5rem;
    text-shadow: $glow-text-primary;
  }
}

.dots {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: $color-text-primary;
  &.active {
    box-shadow: $glow-theme-primary;
    background-color: $color-theme-primary;
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    min-height: auto;
    border: none;
    gap: 2rem;
  }

  .slider {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .photo {
    height: min-content;
    img {
      height: 33dvw;
      min-height: 100%;
      border-radius: 1rem 0 0 1rem;
    }
    &::after {
      height: 100%;
    }
  }

  .wrapper {
    border-right: 4px solid $color-theme-primary;
    border-bottom: 4px solid $color-theme-primary;
    border-radius: 0 3rem 3rem 0;
    height: calc(100% - 3px);
  }

  .info {
    padding: 1rem 2rem;
    justify-content: center;
    gap: 2rem;
    height: 100%;
  }

  .infoTitle {
    font-size: 1.777rem;
  }
  .live {
    font-size: 1rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    transition: 0.3s ease;
    &:hover {
      box-shadow: $glow-theme-primary;
    }
  }

  .github {
    transition: 0.3s ease;
    border-radius: 10rem;
    &:hover {
      box-shadow: $glow-theme-primary;
    }
  }
  .controllerButton {
    cursor: pointer;
  }
}
</style>
