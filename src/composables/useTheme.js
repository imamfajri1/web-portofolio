import { ref, watchEffect } from 'vue'

const isDark = ref(false)

function initTheme() {
  isDark.value = document.documentElement.classList.contains('dark')
}

function toggleTheme() {
  isDark.value = !isDark.value
}

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
})

export function useTheme() {
  return { isDark, toggleTheme, initTheme }
}
