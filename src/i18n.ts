import { createI18n } from 'vue-i18n'
import { enSlides, plSlides } from './projects'

const messages = {
  en: {
    myWork: 'My Work',
    myTechStack: 'My Tech Stack',
    contact: 'Contact',
    heroHeader: 'Let me make you visible in the web',
    heroDescription:
      'Hi, im Paul, the web developer and web designer, i will create a site, e-commerce shop, or custom application for You.',
    heroButton: `Let's work together!`,
    sliderTitle: 'Check my previous projects',
    slider: enSlides,
    technologiesTitle: 'Technologies i use',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formTitle: 'Get in touch',
    formInfo:'Have any questions? Can i help You somehow? Feel free to ask!',
    formButton: 'Send'
  },
  pl: {
    myWork: 'Moje Projekty',
    myTechStack: 'Mój Stos Technologiczny',
    contact: 'Kontakt',
    heroHeader: 'Zacznij być widoczny w sieci',
    heroDescription:
      'Cześć, jestem Paweł, programista i projektant stron internetowych, mogę stworzyć dla Ciebie stronę, sklep internetowy, albo aplikację internetową.',
    heroButton: 'Zapraszam!',
    sliderTitle: 'Zobacz moje wcześniejsze projekty',
    slider: plSlides,
    technologiesTitle: 'Technologie, których używam',
    formName: 'Imię',
    formEmail: 'Email',
    formMessage: 'Wiadomość',
    formTitle: 'Skontaktuj się',
    formInfo:'Masz jakieś pytania? Mogę Ci jakoś pomóc? Pytaj śmiało!',  
    formButton: 'Wyslij'
  },
}

const getDefaultLanguage = () => {
  const savedLanguage = localStorage.getItem('language')

  if (savedLanguage) {
    return savedLanguage
  }

  const userLanguage = navigator.language || navigator.languages[0]

  if (userLanguage.startsWith('pl')) {
    return 'pl'
  } else {
    return 'en'
  }
}

const i18n = createI18n({
  locale: getDefaultLanguage(),
  messages,
})

export default i18n
