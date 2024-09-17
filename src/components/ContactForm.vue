<script setup lang="ts">
import { ref } from 'vue'
import { sendEmail } from '../emailService'
import '@material-design-icons/font'

const name = ref('')
const email = ref('')
const message = ref('')
const status = ref({ message: '' })

const handleSubmit = async () => {
  const result = await sendEmail(name.value, email.value, message.value)
  status.value = result
}
</script>

<template>
  <h2 class="title">{{ $t('formTitle') }}</h2>
  <form class="form" action="post" @submit.prevent="handleSubmit">
    <p class="info">{{ $t('formInfo') }}</p>
    <input v-model="name" type="text" :placeholder="$t('formName')" required />
    <input
      v-model="email"
      type="text"
      :placeholder="$t('formEmail')"
      required
    />
    <textarea
      v-model="message"
      name="message"
      :placeholder="$t('formMessage')"
      id=""
      required
    ></textarea>

    <button class="callToAction">{{ $t('formButton') }} <span class="material-icons">email</span></button>
  </form>

  <div v-if="status.message">{{ status.message }}</div>
</template>

<style scoped lang="scss">
.title {
  @include fontHeadlineMedium;
  text-shadow: $glow-text-primary;
  text-align: center;
  margin-top: 8rem;
  margin-bottom: 2rem;
}

.form {
  position: relative;
  display: grid;
  gap: 1rem;
  border-right: 4px solid $color-theme-primary;
  border-bottom: 4px solid $color-theme-primary;
  border-radius: 0 3rem 3rem 0;
  padding: 3dvh 5dvw;
  margin: 1rem;
}

.info {
  @include fontTitleSmall;
  text-align: center;
}

textarea {
  resize: vertical;
}

textarea,
input {
  @include fontBodySmall;
  background-color: $color-theme-container;
  border: none;
  border-bottom: 2px solid $color-theme-primary;
  color: $color-text-primary;
  padding: 1rem 1rem 0.25rem 0.5rem;
  border-radius: 0.5rem;
  &::placeholder {
    @include fontBodyMedium;
  }
}

.callToAction {
  @include fontHeadlineSmall;
  display: flex;
  gap: .5rem;
  align-items: center;
  border: none;
  justify-self: center;
  text-decoration: none;
  margin-top: 2rem;
  background-color: $color-theme-primary;
  box-shadow: $glow-theme-primary;
  width: max-content;
  padding: 1rem 2rem;
  border-radius: 10rem;
  span {
    font-size: 1.1em;
  }
}
</style>
