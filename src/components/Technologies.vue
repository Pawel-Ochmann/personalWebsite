<script setup lang="ts">
import '@material-design-icons/font'
</script>

<template>
  <div class="container">
    <div class="tech">Typescript</div>
    <div class="tech">Figma</div>
    <div class="tech">React</div>
    <div class="tech">Vue</div>
    <div class="tech">Material Design</div>
    <div class="tech">Github</div>
    <div class="tech">NodeJS</div>
    <div class="tech">ExpressJS</div>
    <div class="tech">MongoDB</div>
    <div class="tech">Postgress</div>
    <div class="tech">Canva</div>
    <div class="tech">Wordpress</div>
    <div class="tech">Vite</div>
    <div class="tech">Jest</div>
    <div class="tech">VS Code</div>
  </div>
  <div>
    <h2>{{ $t('technologiesTitle') }}</h2>
    <div class="technologiesSwitcherContainer">
      <div>
        <p>web design</p>
        <span class="material-icons">palette</span>
      </div>
      <div class="separator"></div>
      <p>web development</p>
      <span class="material-icons">terminal</span>
    </div>
  </div>
</template>

<style scoped>
span {
  color: pink;
}
.separator {
  background: red;
  height: 200px;
  width: 5px;
}
.technologiesSwitcherContainer {
  display: flex;
}
.tech {
  background-color: grey;
  border-radius: 1rem;
  width: max-content;
  padding: .5rem 1rem;
}
.container {
  display: flex;
  border-left: 3px solid red;
  border-bottom: 3px solid red;
  border-radius: 1rem 0 0 1rem;
}
</style>
