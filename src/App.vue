<template>
  <CursorGlow />
  <NavBar />
  <RouterView />
  <FooterSection />
</template>

<script setup>
import { useTheme } from '@/composables/useTheme.js'
import NavBar from '@/components/layout/NavBar.vue'
import FooterSection from '@/components/layout/FooterSection.vue'
import CursorGlow from '@/components/ui/CursorGlow.vue'

const { initTheme } = useTheme()
initTheme()
</script>
