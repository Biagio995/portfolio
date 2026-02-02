import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

// Elegant Minimalism palette
const customTheme = {
  dark: false,
  colors: {
    primary: '#333333',
    secondary: '#333333',
    accent: '#707070',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#F0F0F0',
    surface: '#FFFFFF',
    'on-background': '#333333',
    'on-surface': '#333333',
    'on-primary': '#FFFFFF',
    'on-secondary': '#FFFFFF',
    whatsapp: '#25D366',
    viber: '#7360F2'
  }
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'customTheme',
    themes: {
      customTheme
    }
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi
    }
  },
  defaults: {
    VBtn: {
      rounded: 'pill',
      elevation: 0
    },
    VCard: {
      rounded: 'lg',
      elevation: 2
    }
  }
})
