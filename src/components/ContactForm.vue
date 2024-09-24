<script setup lang="ts">
import { ref, onMounted, onUpdated } from 'vue'
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

const elementRef = ref<HTMLAnchorElement | null>(null)
const setupSpans = () => {
  if (elementRef.value) {
    let text = elementRef.value.textContent || ''
    console.log(text)
    elementRef.value.innerHTML = '' 

    for (let char of text) {
      let span = document.createElement('span')
      span.textContent = char === ' ' ? '\u00A0' : char
      span.classList.add('span')
      elementRef.value.appendChild(span)
    }

    const spans = elementRef.value.querySelectorAll('.span')

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

onUpdated(() => {
  setupSpans()
})
</script>

<template>
  <h2 class="title">{{ $t('formTitle') }}</h2>
  <form class="form" action="post" @submit.prevent="handleSubmit">
    <p class="info">{{ $t('formInfo') }}</p>
    <input
      class="name"
      v-model="name"
      type="text"
      :placeholder="$t('formName')"
      required
    />
    <input
      class="email"
      v-model="email"
      type="text"
      :placeholder="$t('formEmail')"
      required
    />
    <textarea
      class="message"
      v-model="message"
      name="message"
      :placeholder="$t('formMessage')"
      id=""
      required
    ></textarea>

    <button ref="elementRef" class="callToAction">
      {{ $t('formButton') }} 
    </button>
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
  gap: 0.5rem;
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

@media only screen and (min-width: 1024px) {
  .form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    align-content: end;
    gap: 1rem calc(1rem + 6dvw);
    padding: 3rem calc(2rem + 5dvw);
    margin-bottom: 6rem;
  }

  .info {
    grid-column: 2/2;
    grid-row: 1/3;
    text-align: left;
  }

  .name,
  .email,
  .message {
    grid-column: 1/1;
  }
  .name {
    grid-row: 1/1;
  }
  .callToAction {
    justify-self: start;
    margin: 0;
    background-color: transparent;
    border: 2px solid $color-theme-primary;
    box-shadow: none;
    display: flex;
    color: $color-theme-primary;
    gap: 0;
    transition: .3s ease;
  }
  .callToAction:hover {
    cursor: pointer;
    background-color: $color-theme-primary;
    box-shadow: $glow-theme-primary;
    span {
      color: $color-theme-container;
    }
  }
}
</style>
