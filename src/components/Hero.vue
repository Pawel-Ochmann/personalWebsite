<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'

// Ref to anchor element
const elementRef = ref<HTMLAnchorElement | null>(null)

// Function to create spans and add event listeners
const setupSpans = () => {
  if (elementRef.value) {
    let text = elementRef.value.textContent || ''
    elementRef.value.innerHTML = '' // Clear the content before adding spans

    // Create span for each character
    for (let char of text) {
      let span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.classList.add('span')
      elementRef.value.appendChild(span)
    }

    // Get all spans
    const spans = elementRef.value.querySelectorAll('.span')

    // Add hover animation on mouseenter
    elementRef.value.addEventListener('mouseenter', () => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add('hover')
        }, index * 20)
      })
    })

    // Remove hover animation on mouseleave
    elementRef.value.addEventListener('mouseleave', () => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.remove('hover')
        }, index * 20)
      })
    })
  }
}

onMounted(() => {
  setupSpans()
})

onUpdated(()=>{
  setupSpans()
})
</script>

<template>
  <div class="container">
    <div class="infoSection">
      <h1 class="displayText">
        {{ $t('heroHeaderPart1') }}
        <span class="highlight">{{ $t('heroHeaderSpan') }}</span
        >{{ $t('heroHeaderPart2') }}
      </h1>
      <h5 class="infoText">{{ $t('heroDescription') }}</h5>
      <a ref="elementRef" class="callToAction" href="https://www.upwork.com/freelancers/~01f5c98dd0f52276ac?viewMode=1" target="_blank">{{
        $t('heroButton')
      }}</a>
    </div>
    <div class="photoSection">
      <img src="../assets/file.png" alt="personal photo" />
      <div class="gradient"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 5dvh 5dvw;
  gap: 2rem;
  border-left: 4px solid $color-theme-primary;
  border-bottom: 4px solid $color-theme-primary;
  border-radius: 3rem 0 0 3rem;
}

.infoSection {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.displayText {
  @include fontDisplayMedium;
  & .highlight {
    font-weight: 500;
    position: relative;
    color: white;
    text-shadow: none;
    animation: turningHighlightEffect 2.5s ease-out forwards;
  }
}

.infoText {
  @include fontTitleSmall;
}

.callToAction {
  @include fontHeadlineSmall;
  text-decoration: none;
  background-color: $color-theme-primary;
  box-shadow: $glow-theme-primary;
  width: max-content;
  padding: 1rem 2rem;
  border-radius: 10rem;
}

.photoSection {
  position: relative;
  img {
    width: 80%;
    transform: scaleX(-1);
  }
}
.gradient {
  width: 500px;
  height: 500px;
  background: radial-gradient(
    $color-theme-container 20%,
    $color-background-primary 80%
  );
  border-radius: 1000px;
  position: absolute;
  top: 0;
  left: 10dvw;
  z-index: -10;
}

@keyframes turningHighlightEffect {
  0% {
    text-shadow: none;
    opacity: 0.3;
    color: rgba($color-text-primary, 0.2);
  }
  30% {
    text-shadow:
      0 0 5px $color-text-primary,
      0 0 10px $color-text-primary,
      0 0 15px $color-theme-primary;
    opacity: 7;
  }
  50% {
    text-shadow: none;
    opacity: 0.5;
  }
  70% {
    text-shadow:
      0 0 10px $color-text-primary,
      0 0 20px $color-text-primary,
      0 0 30px $color-text-primary;
    opacity: 8;
  }
  90% {
    text-shadow:
      0 0 5px $color-text-primary,
      0 0 10px $color-text-primary;
    opacity: 0.8;
  }
  100% {
    text-shadow:
      0 0 20px $color-text-primary,
      0 0 40px $color-text-primary,
      0 0 60px $color-text-primary;
    opacity: 1;
    color: $color-text-primary;
  }
}

@media only screen and (min-width: 1024px) {
  .container {
    flex-direction: row;
    align-items: center;
    .infoSection {
      gap: 3rem;
    }
  }

  .callToAction {
    background-color: transparent;
    border: 2px solid $color-theme-primary;
    box-shadow: none;
    display: inline-block;
  }
}
</style>

<style lang="scss">
@media only screen and (min-width: 1024px) {
  .callToAction {
    overflow: hidden;
    transition: .5s ease;
  }

  .callToAction:hover {
    background-color: $color-theme-primary;
    box-shadow: $glow-theme-primary;
   }

  .callToAction .span {
    font-weight: 700;
    position:relative;
    color: $color-theme-primary;
    display: inline-block;
    text-shadow: 0 50px $color-text-primary;
    transition: all .3s ease;
    transform: translateY(0);
  }

  .callToAction:hover .span.hover {
    transform: translateY(-50px);
  }

    .callToAction .span.hover {
    transform: translateY(-50px);
  }
}
</style>
