<template>
  <v-app-bar
    :elevation="2"
    color="secondary"
    prominent
  >
    <v-container class="d-flex align-center">
      <v-app-bar-title>
        <router-link to="/" class="text-decoration-none text-white font-weight-bold">
          {{ t('nav.brand') }}
        </router-link>
      </v-app-bar-title>

      <v-spacer></v-spacer>

      <!-- Desktop Navigation -->
      <v-btn
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        variant="text"
        class="d-none d-md-inline-flex mx-1"
      >
        {{ item.title }}
      </v-btn>

      <!-- Language Selector Desktop -->
      <v-menu offset-y class="d-none d-md-inline-flex">
        <template v-slot:activator="{ props }">
          <v-btn
            v-bind="props"
            variant="text"
            class="ml-2"
          >
            {{ currentLocale.toUpperCase() }}
            <v-icon right>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="lang in availableLocales"
            :key="lang"
            @click="changeLocale(lang)"
          >
            <v-list-item-title>{{ lang.toUpperCase() }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

      <!-- Mobile Menu -->
      <v-app-bar-nav-icon
        class="d-md-none"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </v-container>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer
    v-model="drawer"
    temporary
    location="right"
  >
    <v-list>
      <v-list-item
        v-for="item in navItems"
        :key="item.to"
        :to="item.to"
        @click="drawer = false"
      >
        <v-list-item-title>{{ item.title }}</v-list-item-title>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <v-list-subheader>{{ t('nav.language') || 'Language' }}</v-list-subheader>
      <v-list-item
        v-for="lang in availableLocales"
        :key="lang"
        @click="changeLocale(lang); drawer = false"
      >
        <v-list-item-title>{{ lang.toUpperCase() }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useLocale } from '@/composables/useLocale'
import type { NavItem } from '@/types'

const { t, currentLocale, availableLocales, changeLocale } = useLocale()
const drawer = ref(false)

const navItems = computed<NavItem[]>(() => [
  { title: t('nav.home'), to: '/' },
  { title: t('nav.contacts'), to: '/contatti' }
])
</script>

<style scoped>
.v-app-bar-title a {
  color: white;
  transition: opacity 0.3s ease;
}

.v-app-bar-title a:hover {
  opacity: 0.8;
}
</style>
