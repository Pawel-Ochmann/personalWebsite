import { createI18n } from 'vue-i18n'
import { enSlides, plSlides } from './projects'

const messages = {
  en: {
    myWork: 'My Work',
    myTechStack: 'My Tech Stack',
    contact: 'Contact',
    heroHeaderPart1: 'Let me make you',
    heroHeaderPart2: ' in the web',
    heroHeaderSpan: ' visible',
    heroDescription:
      'Hi, im Paul, the web developer and web designer, i will create a site, e-commerce shop, or custom application for You.',
    heroButton: `Let's work together!`,
    sliderTitle: 'Check my previous projects',
    slider: enSlides,
    sliderLive: 'See live',
    technologiesTitle: 'Technologies i use',
    design:'Design',
    development:'Development',
    formName: 'Name',
    formEmail: 'Email',
    formMessage: 'Message',
    formTitle: 'Get in touch',
    formInfo: 'Have any questions? Can i help You somehow? Feel free to ask!',
    formButton: 'Send',
    footerRights: 'All rights reserved',
  },
  pl: {
    myWork: 'Moje Projekty',
    myTechStack: 'Technologie',
    contact: 'Kontakt',
    heroHeaderPart1: 'Zacznij być',
    heroHeaderPart2: ' w sieci',
    heroHeaderSpan: ' widoczny',
    heroDescription:
      'Cześć, jestem Paweł, programista i projektant stron internetowych, mogę stworzyć dla Ciebie stronę, sklep internetowy, albo aplikację internetową.',
    heroButton: 'Zapraszam!',
    sliderTitle: 'Zobacz moje wcześniejsze projekty',
    slider: plSlides,
    sliderLive: 'Zobacz na żywo',
    technologiesTitle: 'Technologie, których używam',
    design:'Projektowanie',
    development:'Programowanie',
    formName: 'Imię',
    formEmail: 'Email',
    formMessage: 'Wiadomość',
    formTitle: 'Skontaktuj się',
    formInfo: 'Masz jakieś pytania? Mogę Ci jakoś pomóc? Pytaj śmiało!',
    formButton: 'Wyslij',
    footerRights: 'Wszelkie prawa zastrzeżone',
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
