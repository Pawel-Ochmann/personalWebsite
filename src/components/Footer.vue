<script setup lang="ts"></script>

<template>
  <div class="footer">
    <div class="upperContainer">
      <h3>Paweł Ochmann</h3>
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
    <div class="lowerContainer">
      <p>© 2024 Paweł Ochmann. {{ $t('footerRights') }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.footer {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0 1rem 0;
}

.upperContainer {
  display: flex;
  gap: 0.5rem;
  &,
  a {
    @include fontLabelMedium;
  }
}

.lowerContainer {
  @include fontLabelSmall;
}
</style>
