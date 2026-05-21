<template>
  <Teleport to="body">
    <div class="cursor-ring" :style="ringStyle" aria-hidden="true"></div>
    <div class="cursor-dot" :style="dotStyle" aria-hidden="true"></div>
  </Teleport>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const mouse = ref({ x: -100, y: -100 })
const ring = ref({ x: -100, y: -100 })
const dotVisible = ref(false)
let rafId = null

const dotStyle = computed(() => ({
  transform: `translate(${mouse.value.x - 6}px, ${mouse.value.y - 6}px)`,
  opacity: dotVisible.value ? 1 : 0
}))

const ringStyle = computed(() => ({
  transform: `translate(${ring.value.x - 20}px, ${ring.value.y - 20}px)`,
  opacity: dotVisible.value ? 1 : 0
}))

function onMouseMove(e) {
  mouse.value = { x: e.clientX, y: e.clientY }
  dotVisible.value = true
}

function onMouseLeave() {
  dotVisible.value = false
}

function lerp(a, b, t) {
  return a + (b - a) * t
}

function animate() {
  ring.value = {
    x: lerp(ring.value.x, mouse.value.x, 0.1),
    y: lerp(ring.value.y, mouse.value.y, 0.1)
  }
  rafId = requestAnimationFrame(animate)
}

onMounted(() => {
  // hide on touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return

  document.addEventListener('mousemove', onMouseMove, { passive: true })
  document.addEventListener('mouseleave', onMouseLeave)
  animate()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseleave', onMouseLeave)
  cancelAnimationFrame(rafId)
})
</script>

<style scoped>
.cursor-dot,
.cursor-ring {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  will-change: transform;
  transition: opacity 0.2s ease;
}

.cursor-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #ffb38a, #F37338 55%, #CF4500 100%);
  box-shadow:
    0 2px 6px rgba(243, 115, 56, 0.5),
    inset 0 -2px 4px rgba(0, 0, 0, 0.25),
    inset 0 1px 2px rgba(255, 255, 255, 0.35);
}

.cursor-ring {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1.5px solid var(--color-ink);
  opacity: 0.35;
}

@media (pointer: coarse) {
  .cursor-dot,
  .cursor-ring {
    display: none;
  }
}
</style>
