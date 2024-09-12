<script setup lang="ts">
import { ref } from 'vue'
import { sendEmail } from '../emailService'

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
  <form action="post" @submit.prevent="handleSubmit">
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
    <div>
      <h2>{{ $t('formTitle') }}</h2>
      <p>{{ $t('formInfo') }}</p>
      <button>{{ $t('formButton') }}</button>
    </div>
  </form>

  <div v-if="status.message">{{ status.message }}</div>
</template>

<style scoped></style>
