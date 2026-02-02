<template>
  <v-container class="contacts-view py-12">
    <v-row justify="center">
      <v-col cols="12" md="8" lg="6">
        <h1 class="text-h3 text-center mb-8 contacts-title">{{ t('contacts.title') }}</h1>

        <v-card class="pa-6" elevation="4">
          <v-form ref="formRef" v-model="valid" @submit.prevent="handleSubmit">
            <v-text-field
              v-model="form.name"
              :label="t('contacts.form.name')"
              :rules="nameRules"
              variant="outlined"
              color="primary"
              class="mb-4"
              required
            ></v-text-field>

            <v-textarea
              v-model="form.message"
              :label="t('contacts.form.message')"
              :rules="messageRules"
              variant="outlined"
              color="primary"
              rows="4"
              class="mb-6"
              required
            ></v-textarea>

            <v-row class="justify-center">
              <v-col cols="12" sm="6" md="4" class="text-center">
                <v-btn
                  color="primary"
                  size="large"
                  block
                  @click="sendEmail"
                  :disabled="!valid"
                  class="mb-4 mb-sm-0"
                >
                  <v-icon left>mdi-email</v-icon>
                  {{ t('contacts.form.email') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="text-center">
                <v-btn
                  color="whatsapp"
                  size="large"
                  block
                  @click="sendWhatsApp"
                  :disabled="!valid"
                  class="mb-4 mb-sm-0"
                >
                  <v-icon left>mdi-whatsapp</v-icon>
                  {{ t('contacts.form.whatsapp') }}
                </v-btn>
              </v-col>
              <v-col cols="12" sm="6" md="4" class="text-center">
                <v-btn
                  color="viber"
                  size="large"
                  block
                  @click="sendViber"
                  :disabled="!valid"
                >
                  <v-icon left>mdi-phone</v-icon>
                  {{ t('contacts.form.viber') }}
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { VForm } from 'vuetify/components'

const { t } = useI18n()

interface ContactForm {
  name: string
  message: string
}

const formRef = ref<VForm | null>(null)
const valid = ref(false)
const form = ref<ContactForm>({
  name: '',
  message: ''
})

const nameRules = computed(() => [
  (v: string) => !!v || t('contacts.form.nameRequired')
])

const messageRules = computed(() => [
  (v: string) => !!v || t('contacts.form.messageRequired')
])

const getFormText = (): string | null => {
  if (!form.value.name.trim() || !form.value.message.trim()) {
    return null
  }
  return `Ciao, sono ${form.value.name}. Messaggio: ${form.value.message}`
}

const clearForm = () => {
  form.value = {
    name: '',
    message: ''
  }
  formRef.value?.reset()
}

const sendEmail = () => {
  if (!form.value.name.trim() || !form.value.message.trim()) return

  const email = import.meta.env.VITE_EMAIL_ADDRESS || 'csarannabiagio@gmail.com'
  const subject = encodeURIComponent(`Messaggio da ${form.value.name}`)
  const body = encodeURIComponent(
    `Nome: ${form.value.name}\n\nMessaggio:\n${form.value.message}`
  )
  
  const link = `mailto:${email}?subject=${subject}&body=${body}`
  window.location.href = link
  clearForm()
}

const sendWhatsApp = () => {
  const text = getFormText()
  if (!text) return

  const phoneNumber = '393688046394'
  const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`
  window.open(link, '_blank')
  clearForm()
}

const sendViber = () => {
  const text = getFormText()
  if (!text) return

  const phoneNumber = '306943464283'
  const link = `viber://chat?number=%2B${phoneNumber}&text=${encodeURIComponent(text)}`
  window.open(link, '_blank')
  clearForm()
}

const handleSubmit = () => {
  // Form submission is handled by buttons
}
</script>

<style scoped lang="scss">
.contacts-view {
  min-height: calc(100vh - 64px);
}

.contacts-title {
  color: #333333;
}
</style>
