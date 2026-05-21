<template>
  <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }">
    <div class="navbar__inner">
      <!-- Logo -->
      <span class="navbar__logo" aria-label="Home">
        <svg class="navbar__logo-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="47" fill="#CC0000" stroke="#0D0D0D" stroke-width="6"/>
          <path
            d="M50,50 C52,44 58,42 62,46 C67,51 65,59 59,63 C52,68 42,66 38,59 C33,51 36,40 44,35 C53,29 65,33 70,43 C76,55 72,70 61,76 C48,83 31,79 24,66 C16,51 21,32 36,24 C52,15 72,22 79,40"
            fill="none" stroke="#0D0D0D" stroke-width="7" stroke-linecap="round"
          />
        </svg>
      </span>

      <!-- Desktop links -->
      <ul class="navbar__links" role="list">
        <li v-for="link in navLinks" :key="link.id">
          <a :href="`#${link.id}`" class="navbar__link" @click.prevent="scrollTo(link.id)">
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Scroll CTA (desktop) -->
      <button class="navbar__scroll-cta" aria-label="Scroll down" @click="scrollTo('about')">
        ↓
      </button>

      <!-- Dark mode toggle -->
      <button
        class="navbar__theme-toggle"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="toggleTheme"
      >
        <!-- Moon (shown in light mode) -->
        <svg v-if="!isDark" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
        </svg>
        <!-- Sun (shown in dark mode) -->
        <svg v-else width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="12" r="5"/>
          <line x1="12" y1="1" x2="12" y2="3"/>
          <line x1="12" y1="21" x2="12" y2="23"/>
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
          <line x1="1" y1="12" x2="3" y2="12"/>
          <line x1="21" y1="12" x2="23" y2="12"/>
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
        </svg>
      </button>

      <!-- Hamburger (mobile) -->
      <button
        class="navbar__hamburger"
        :class="{ 'is-open': menuOpen }"
        aria-label="Toggle menu"
        @click="menuOpen = !menuOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile overlay -->
    <Transition name="menu-fade">
      <div v-if="menuOpen" class="navbar__overlay" @click.self="menuOpen = false">
        <ul class="navbar__overlay-links" role="list">
          <li v-for="link in navLinks" :key="link.id">
            <a
              :href="`#${link.id}`"
              class="navbar__overlay-link"
              @click.prevent="mobileScrollTo(link.id)"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '@/composables/useTheme.js'

const isScrolled = ref(false)
const menuOpen = ref(false)
const { isDark, toggleTheme } = useTheme()

const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}

function mobileScrollTo(id) {
  menuOpen.value = false
  setTimeout(() => scrollTo(id), 300)
}

function handleScroll() {
  isScrolled.value = window.scrollY > 80
}

onMounted(() => window.addEventListener('scroll', handleScroll, { passive: true }))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  background-color: var(--color-white);
  border-radius: var(--radius-pill);
  box-shadow: var(--shadow-nav);
  transition: backdrop-filter 0.3s ease, background-color 0.3s ease;
  width: fit-content;
  max-width: 860px;
}

.navbar--scrolled {
  backdrop-filter: blur(8px);
  background-color: var(--color-nav-scrolled-bg);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  padding: 16px 40px;
}

.navbar__logo {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}

.navbar__logo-svg {
  width: 36px;
  height: 36px;
  display: block;
}

.navbar__links {
  display: flex;
  list-style: none;
  gap: var(--space-6);
}

.navbar__link {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -0.48px;
  color: var(--color-ink);
  text-decoration: none;
  transition: opacity 0.2s ease;
}

.navbar__link:hover {
  opacity: 0.6;
}

.navbar__scroll-cta {
  width: 40px;
  height: 40px;
  border-radius: var(--radius-circle);
  border: 1.5px solid var(--color-ink);
  background: transparent;
  color: var(--color-ink);
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  flex-shrink: 0;
}

.navbar__scroll-cta:hover {
  background-color: var(--color-ink);
  color: var(--color-white);
}

/* Dark mode toggle */
.navbar__theme-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-height: 44px;
  min-width: 44px;
  border-radius: var(--radius-pill);
  border: none;
  background: transparent;
  color: var(--color-ink);
  cursor: pointer;
  flex-shrink: 0;
}

.navbar__theme-toggle:hover {
  background-color: var(--color-bone);
}

/* Hamburger */
.navbar__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  min-height: 44px;
  min-width: 44px;
  align-items: center;
  justify-content: center;
}

.navbar__hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background-color: var(--color-ink);
  border-radius: 2px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.navbar__hamburger.is-open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.navbar__hamburger.is-open span:nth-child(2) {
  opacity: 0;
}
.navbar__hamburger.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile overlay */
.navbar__overlay {
  position: fixed;
  inset: 0;
  background-color: var(--color-white);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}

.navbar__overlay-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.navbar__overlay-link {
  font-family: var(--font-primary);
  font-size: 32px;
  font-weight: 500;
  color: var(--color-ink);
  text-decoration: none;
  letter-spacing: -0.02em;
}

/* Transition */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.25s ease;
}
.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

@media (max-width: 767px) {
  .navbar {
    width: calc(100% - 32px);
  }

  .navbar__links,
  .navbar__scroll-cta {
    display: none;
  }

  .navbar__hamburger {
    display: flex;
  }

  .navbar__inner {
    padding: 10px 20px;
    gap: var(--space-1);
  }

  .navbar__theme-toggle {
    margin-left: auto;
  }

  .navbar__logo-svg {
    width: 32px;
    height: 32px;
  }
}
</style>
