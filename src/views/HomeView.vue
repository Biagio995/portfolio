<template>
  <div class="home-view">
    <!-- Hero Section -->
    <v-container fluid class="hero-section pa-0">
      <v-container class="py-16">
        <v-row justify="center" align="center" class="text-center hero-content">
          <v-col cols="12">
            <!-- Profile Image -->
            <v-avatar
              size="180"
              class="profile-avatar mb-6 elevation-8"
            >
              <v-img
                src="/images/profile.png"
                alt="Biagio Carannante"
                cover
              ></v-img>
            </v-avatar>
            
            <h1 class="text-h2 text-md-h1 font-weight-bold mb-4 hero-title">
              {{ t('home.title') }}
            </h1>
            <p class="text-h5 text-md-h4 typewriter-text hero-subtitle">
              {{ displayedText }}
              <span class="cursor">|</span>
            </p>
          </v-col>
        </v-row>
      </v-container>
    </v-container>

    <!-- Main Content -->
    <v-container class="my-12">
      <!-- About Section -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10" lg="8">
          <v-card class="pa-8" elevation="4">
            <h2 class="text-h4 mb-4">{{ t('home.whoAmI.title') }}</h2>
            <p class="text-body-1">
              {{ t('home.whoAmI.text') }}
            </p>
          </v-card>
        </v-col>
      </v-row>

      <!-- Recent Projects Section -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10" lg="8">
          <h2 class="text-h4 mb-6 section-title">{{ t('home.recentProjects.title') }}</h2>
          <v-list bg-color="transparent">
            <v-list-item
              v-for="project in projects"
              :key="project.id"
              :href="project.url"
              target="_blank"
              class="project-item mb-2 rounded-lg"
            >
              <template v-slot:prepend>
                <v-icon color="primary">mdi-github</v-icon>
              </template>
              <v-list-item-title class="text-h6">
                {{ project.name }}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <!-- Call to Action -->
      <v-row justify="center">
        <v-col cols="12" class="text-center">
          <v-btn
            to="/contatti"
            color="primary"
            size="x-large"
            class="text-h6 px-12"
          >
            {{ t('home.contactButton') }}
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTypewriter } from '@/composables/useTypewriter'
import type { Project } from '@/types'

const { t, locale } = useI18n()
const { displayedText, type } = useTypewriter(60)

const projects: Project[] = [
  {
    id: 1,
    name: 'Armony Market',
    url: 'https://github.com/Biagio995/ArmonyMarket'
  }
]

const startTypewriter = () => {
  type(t('home.typewriter'))
}

onMounted(() => {
  startTypewriter()
  console.log('%c👋 Benvenuto sviluppatore curioso! Hai trovato l\'easter egg. ✨', 'color: #333333; font-size: 16px; font-weight: bold;')
})

watch(locale, () => {
  startTypewriter()
})
</script>

<style scoped lang="scss">
.home-view {
  min-height: calc(100vh - 64px);
}

.hero-section {
  background: rgba(240, 240, 240, 0.95);
  backdrop-filter: blur(10px);
}

.hero-content,
.hero-title,
.hero-subtitle,
.section-title {
  color: #333333 !important;
}

.home-view :deep(.v-list-item-title),
.home-view :deep(.v-card .v-card-text),
.home-view :deep(.v-card p) {
  color: #333333;
}

.typewriter-text {
  font-family: 'Courier New', monospace;
  min-height: 2em;
}

.cursor {
  animation: blink 1s infinite;
}

@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}

.profile-avatar {
  border: 4px solid #B0B0B0;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    border-color: #333333;
    box-shadow: 0 8px 24px rgba(51, 51, 51, 0.2);
  }
}

.project-item {
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.8);

  &:hover {
    transform: scale(1.03);
    background: #FFFFFF;
    box-shadow: 0 2px 12px rgba(51, 51, 51, 0.08);
  }
}
</style>
