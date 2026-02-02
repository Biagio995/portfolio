import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css'

const customTheme = {
  dark: true,
  colors: {
    primary: '#41BBA6',
    secondary: '#191654',
    accent: '#35a396',
    error: '#FF5252',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FFC107',
    background: '#191654',
    surface: '#1E1E1E',
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
