export interface Project {
  id: number
  name: string
  url: string
  description?: string
}

export interface ContactForm {
  name: string
  message: string
}

export interface NavItem {
  title: string
  to: string
  icon?: string
}

export type Language = 'en' | 'it' | 'el'

export interface TranslationSchema {
  nav: {
    brand: string
    home: string
    contacts: string
    language?: string
  }
  home: {
    title: string
    typewriter: string
    whoAmI: {
      title: string
      text: string
    }
    recentProjects: {
      title: string
    }
    contactButton: string
  }
  contacts: {
    title: string
    form: {
      name: string
      message: string
      nameRequired: string
      messageRequired: string
      email: string
      whatsapp: string
      viber: string
    }
  }
  footer: {
    copyright: string
  }
}
