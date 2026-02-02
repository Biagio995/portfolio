<template>
  <v-footer
    class="text-center py-6"
    color="secondary"
  >
    <v-container>
      <p class="text-white mb-0">
        {{ t('footer.copyright') }}
      </p>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
