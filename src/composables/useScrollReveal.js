import { ref, onMounted, onUnmounted } from 'vue'

export function useScrollReveal() {
  const observer = ref(null)

  onMounted(() => {
    observer.value = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.value.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
  })

  onUnmounted(() => {
    if (observer.value) observer.value.disconnect()
  })

  function observe(el) {
    if (observer.value && el) observer.value.observe(el)
  }

  return { observe }
}

// Vue directive for template usage: v-reveal
export const vReveal = {
  mounted(el, binding) {
    el.classList.add('reveal')
    if (binding.value?.delay) {
      el.style.transitionDelay = `${binding.value.delay}ms`
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            obs.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    obs.observe(el)
    el._revealObserver = obs
  },
  unmounted(el) {
    if (el._revealObserver) el._revealObserver.disconnect()
  }
}
