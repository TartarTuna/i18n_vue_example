import Vue from 'vue'
import VueI18n from 'vue-i18n'

import ch from '@/lang/ch.json'
import en from '@/lang/en.json'

Vue.use(VueI18n)

const messages = {
  ch, en
}

const lang = localStorage.getItem('language') || 'ch'

const i18n = new VueI18n({
  locale: lang,
  messages
})

export default i18n
