import { createApp } from 'vue'
import App from './App.vue'
import './style.scss'
import './reset.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import i18n from './i18n'

library.add(faLinkedin, faGithub)
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.mount('#app')
