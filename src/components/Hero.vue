<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="infoSection">
      <h1 class="displayText">{{ $t('heroHeaderPart1') }} <span class="highlight">{{ $t('heroHeaderSpan') }}</span>{{ $t('heroHeaderPart2') }}</h1>
      <h5 class="infoText">{{ $t('heroDescription') }}</h5>
      <a class="callToAction" href="#contact-section">{{ $t('heroButton') }}</a>
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
  padding: 2rem;
  gap: 2rem
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
    animation: turningHighlightEffect 1.5s ease-out forwards;
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
  padding:1rem 2rem;
  border-radius: 10rem;
}

.photoSection {
  position: relative;
  img {
    transform: scaleX(-1);
  }
}
.gradient {
  width: 500px;
  height: 500px;
  background: radial-gradient($color-theme-container 20%, $color-background-primary 80%);
  border-radius: 1000px;
  position: absolute;
  top: 0;
  z-index: -10;
}

@keyframes turningHighlightEffect {
    0% {
      text-shadow: none;
      opacity: 0.3;
      color: rgba($color-text-primary, 0.2);
    }
    20% {
      text-shadow: 0 0 5px $color-text-primary, 0 0 10px $color-text-primary, 0 0 15px $color-theme-primary;
      opacity: 7;
    }
    40% {
      text-shadow: none;
      opacity: 0.5;
    }
    60% {
      text-shadow: 0 0 10px $color-text-primary, 0 0 20px $color-text-primary, 0 0 30px $color-text-primary;
      opacity: 8;
    }
    80% {
      text-shadow: 0 0 5px $color-text-primary, 0 0 10px $color-text-primary;
      opacity: 0.8;
    }
    100% {
      text-shadow: 0 0 20px $color-text-primary, 0 0 40px $color-text-primary, 0 0 60px $color-text-primary;
      opacity: 1;
      color: $color-text-primary;
    }
  }

</style>
