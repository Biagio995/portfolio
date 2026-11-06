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
      <v-row id="about" justify="center" class="mb-12 about-section">
        <v-col cols="12" md="10" lg="8">
          <v-card class="pa-8" elevation="4">
            <h2 class="text-h4 mb-2">{{ t('home.whoAmI.title') }}</h2>
            <p class="text-subtitle-1 about-role mb-4">{{ t('home.whoAmI.role') }}</p>
            <p class="text-body-1 mb-6">
              {{ t('home.whoAmI.text') }}
            </p>
            <ul class="about-highlights mb-6">
              <li
                v-for="(highlight, index) in aboutHighlights"
                :key="index"
                class="d-flex align-start mb-2"
              >
                <v-icon color="primary" size="small" class="mr-2 mt-1">mdi-check-circle</v-icon>
                <span class="text-body-2">{{ highlight }}</span>
              </li>
            </ul>
            <v-btn
              :href="linkedInUrl"
              target="_blank"
              rel="noopener noreferrer"
              color="primary"
              variant="outlined"
              size="large"
            >
              <v-icon start>mdi-linkedin</v-icon>
              {{ t('home.whoAmI.linkedIn') }}
            </v-btn>
          </v-card>
        </v-col>
      </v-row>

      <!-- Services Section -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10" lg="8">
          <h2 class="text-h4 mb-6 section-title">{{ t('home.services.title') }}</h2>
          <v-card
            v-for="(service, index) in services"
            :key="index"
            class="service-item mb-4 pa-5"
            elevation="2"
          >
            <div class="d-flex align-center mb-2">
              <v-icon color="primary" size="large" class="mr-4">
                {{ serviceIcons[index] }}
              </v-icon>
              <div>
                <h3 class="text-h6 font-weight-bold">{{ service.title }}</h3>
                <p class="text-body-2 service-description mb-0">{{ service.description }}</p>
              </div>
            </div>

            <template v-if="service.package">
              <p class="text-body-1 mt-4 mb-4">{{ service.package.intro }}</p>
              <ul class="service-features mb-4">
                <li
                  v-for="(feature, featureIndex) in service.package.features"
                  :key="featureIndex"
                  class="d-flex align-start mb-2"
                >
                  <v-icon color="primary" size="small" class="mr-2 mt-1">mdi-check-circle</v-icon>
                  <span class="text-body-2">{{ feature }}</span>
                </li>
              </ul>
              <p class="text-body-1 mb-4">{{ service.package.outro }}</p>
              <p class="text-body-2 service-note mb-0">
                <strong>{{ t('home.services.noteLabel') }}:</strong> {{ service.package.note }}
              </p>
            </template>
          </v-card>
        </v-col>
      </v-row>

      <!-- Recent Projects Section -->
      <v-row justify="center" class="mb-12">
        <v-col cols="12" md="10" lg="8">
          <h2 class="text-h4 mb-6 section-title">{{ t('home.recentProjects.title') }}</h2>
          <v-row>
            <v-col
              v-for="project in projects"
              :key="project.id"
              cols="12"
              sm="6"
            >
              <div class="project-item">
                <div class="project-flip">
                  <div class="project-flip__inner">
                    <div
                      class="project-flip__face project-flip__front"
                      :class="{ 'project-flip__front--no-image': !project.image }"
                    >
                      <v-img
                        v-if="project.image"
                        :src="project.image"
                        :alt="project.name"
                        height="200"
                        cover
                      />
                      <div class="project-flip__title text-h6">
                        {{ project.name }}
                      </div>
                    </div>

                    <div class="project-flip__face project-flip__back">
                      <h3 class="text-h6 font-weight-bold mb-3">{{ project.name }}</h3>
                      <p class="text-body-2 project-flip__description mb-4">
                        {{ project.description }}
                      </p>
                      <a
                        :href="project.url"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="project-flip__link text-decoration-none"
                      >
                        {{ t('home.recentProjects.visitProject') }}
                        <v-icon size="small" class="ml-1">mdi-open-in-new</v-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
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
import { computed, onMounted, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useTypewriter } from '@/composables/useTypewriter'
import type { Project, Service } from '@/types'

const { t, tm, locale } = useI18n()
const { displayedText, type } = useTypewriter(60)

const linkedInUrl = 'https://www.linkedin.com/in/biagio-carannante-fullstackdeveloper/'
const serviceIcons = ['mdi-wordpress', 'mdi-database-cog', 'mdi-facebook']

const aboutHighlights = computed(() => tm('home.whoAmI.highlights') as string[])
const services = computed(() => tm('home.services.items') as Service[])

const projectMeta = [
  { id: 1, url: 'https://github.com/Biagio995/ArmonyMarket', image: '/images/projects/armony-market.png' },
  { id: 2, url: 'https://wedding-biagio-eva.vercel.app/', image: '/images/projects/wedding-monogram.png' },
  { id: 3, url: 'https://fabrizi.software/voicenet' },
  { id: 4, url: 'https://www.africanexplorer.com/', image: '/images/projects/african-explorer.png' },
  { id: 5, url: 'https://www.worldexplorer.it/', image: '/images/projects/world-explorer.png' },
  { id: 6, url: 'https://gestionalecrm.netlify.app/' },
  { id: 7, url: 'https://seatqui.com/?lang=it', image: '/images/projects/seatqui.svg' }
]

const projects = computed(() => {
  const items = tm('home.recentProjects.items') as Pick<Project, 'name' | 'description'>[]
  return projectMeta.map((meta, index) => ({
    ...meta,
    ...items[index]
  }))
})

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

.about-section {
  scroll-margin-top: 96px;
}

.about-role {
  color: #707070;
  font-weight: 600;
}

.about-highlights {
  list-style: none;
  padding: 0;
  margin: 0;
}

.project-item {
  height: 100%;
}

.project-flip {
  perspective: 1000px;
  height: 280px;
  cursor: pointer;
}

@media (min-width: 600px) {
  .project-flip:hover .project-flip__inner {
    transform: rotateY(180deg);
  }
}

.project-flip__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease;
  transform-style: preserve-3d;
}

.project-flip__face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
  border-radius: 8px;
  overflow: hidden;
  background: #ffffff;
  box-shadow: 0 2px 12px rgba(51, 51, 51, 0.08);
}

.project-flip__front {
  display: flex;
  flex-direction: column;
}

.project-flip__front--no-image {
  justify-content: center;
  align-items: center;
}

.project-flip__title {
  color: #333333;
  padding: 16px;
  text-align: center;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-flip__front--no-image .project-flip__title {
  flex: unset;
}

.project-flip__back {
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  text-align: center;
  background: #333333;

  h3 {
    color: #ffffff;
  }
}

.project-flip__description {
  color: rgba(255, 255, 255, 0.9);
  flex: 1;
  display: flex;
  align-items: center;
}

.project-flip__link {
  color: #ffffff;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.8;
  }
}

@media (max-width: 599px) {
  .project-flip {
    height: auto;
    cursor: default;
    perspective: none;
  }

  .project-item {
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 12px rgba(51, 51, 51, 0.08);
  }

  .project-flip__inner {
    transform: none !important;
    transform-style: flat;
    display: flex;
    flex-direction: column;
    height: auto;
  }

  .project-flip__face {
    position: relative;
    inset: auto;
    backface-visibility: visible;
    box-shadow: none;
    border-radius: 0;
  }

  .project-flip__front {
    border-radius: 8px 8px 0 0;
  }

  .project-flip__back {
    transform: none;
    border-radius: 0 0 8px 8px;

    h3 {
      display: none;
    }
  }

  .project-flip__description {
    flex: unset;
  }
}

.service-item {
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);

  &:hover {
    box-shadow: 0 4px 16px rgba(51, 51, 51, 0.1);
  }
}

.service-description,
.service-note {
  color: #666666;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
}

.home-view :deep(.service-item h3),
.home-view :deep(.service-item p),
.home-view :deep(.service-item span) {
  color: #333333;
}
</style>
