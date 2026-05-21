<template>
  <section
    class="hero"
    ref="sectionRef"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
  >
    <!-- Particle canvas background -->
    <canvas ref="canvasRef" class="hero__canvas" aria-hidden="true"></canvas>

    <!-- Decorative Uzumaki silhouette — ghost watermark behind content -->
    <svg
      class="hero__silhouette"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" stroke-width="5.5"/>
      <path
        d="M50,50 C52,44 58,42 62,46 C67,51 65,59 59,63 C52,68 42,66 38,59 C33,51 36,40 44,35 C53,29 65,33 70,43 C76,55 72,70 61,76 C48,83 31,79 24,66 C16,51 21,32 36,24 C52,15 72,22 79,40"
        fill="none" stroke="currentColor" stroke-width="6.5" stroke-linecap="round"
      />
    </svg>

    <div class="hero__container" :style="tiltStyle">
      <!-- Left column -->
      <div class="hero__left">
        <h1 class="hero__name">{{ profile.name }}</h1>

        <p class="hero__summary">{{ profile.summary }}</p>

        <div class="hero__cta-row">
          <PrimaryButton label="View My Work" scroll="projects" />
          <SecondaryButton label="Contact Me" scroll="contact" />
        </div>
      </div>

      <!-- Right column -->
      <div class="hero__right">
        <div class="hero__portrait-wrap">
          <div class="hero__portrait">
            <img
              :src="isDark ? '/photos/profile-dark.png' : '/photos/profile-dark.png'"
              alt="Imam Fajri"
              class="hero__portrait-img"
              loading="eager"
              draggable="false"
            />
          </div>
          <button class="hero__satellite" aria-label="Scroll to projects" @click="scrollToProjects">
            →
          </button>
        </div>

        <!-- Decorative arc -->
        <svg
          class="hero__arc"
          width="200"
          height="48"
          viewBox="0 0 200 48"
          fill="none"
          aria-hidden="true"
        >
          <path d="M 4 44 Q 100 4 196 44" stroke="#F37338" stroke-width="1" fill="none" />
        </svg>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { profile } from '@/data/resume.js'
import { useTheme } from '@/composables/useTheme.js'
import PrimaryButton from '@/components/ui/PrimaryButton.vue'
import SecondaryButton from '@/components/ui/SecondaryButton.vue'

const { isDark } = useTheme()

// ── 3-D tilt ─────────────────────────────────────────────
const sectionRef = ref(null)
const tiltTarget = { x: 0, y: 0 }
const tiltCurrent = ref({ x: 0, y: 0 })
let tiltRaf = null

function lerp(a, b, t) { return a + (b - a) * t }

function tickTilt() {
  tiltCurrent.value = {
    x: lerp(tiltCurrent.value.x, tiltTarget.x, 0.06),
    y: lerp(tiltCurrent.value.y, tiltTarget.y, 0.06)
  }
  tiltRaf = requestAnimationFrame(tickTilt)
}

function onMouseMove(e) {
  const rect = sectionRef.value.getBoundingClientRect()
  const nx = (e.clientX - rect.left) / rect.width - 0.5   // -0.5 → 0.5
  const ny = (e.clientY - rect.top) / rect.height - 0.5
  tiltTarget.x = -ny * 7
  tiltTarget.y = nx * 7
}

function onMouseLeave() {
  tiltTarget.x = 0
  tiltTarget.y = 0
}

const tiltStyle = computed(() => ({
  transform: `perspective(1200px) rotateX(${tiltCurrent.value.x}deg) rotateY(${tiltCurrent.value.y}deg)`,
  transformStyle: 'preserve-3d'
}))

// ── Particle canvas ───────────────────────────────────────
const canvasRef = ref(null)
let ctx = null
let particles = []
let canvasRaf = null
let mouseX = 0
let mouseY = 0

function buildParticles(w, h) {
  particles = Array.from({ length: 22 }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    r: Math.random() * 70 + 20,
    vx: (Math.random() - 0.5) * 0.25,
    vy: -(Math.random() * 0.18 + 0.06),
    depth: Math.random(),              // 0 = far, 1 = close
    accent: i < 3                      // first 3 are orange-arc tinted
  }))
}

function drawParticles() {
  if (!ctx || !canvasRef.value) return
  const w = canvasRef.value.width
  const h = canvasRef.value.height
  const dark = isDark.value

  ctx.clearRect(0, 0, w, h)

  const cx = mouseX / w - 0.5   // -0.5 → 0.5
  const cy = mouseY / h - 0.5

  particles.forEach(p => {
    // parallax shift based on mouse & depth
    const px = p.x + cx * p.depth * 40
    const py = p.y + cy * p.depth * 40

    let alpha, color
    if (p.accent) {
      alpha = dark ? 0.12 : 0.10
      color = `rgba(243, 115, 56, ${alpha})`
    } else {
      alpha = dark ? p.depth * 0.25 + 0.06 : p.depth * 0.18 + 0.04
      color = dark
        ? `rgba(58, 56, 53, ${alpha})`
        : `rgba(209, 205, 199, ${alpha})`
    }

    ctx.beginPath()
    ctx.arc(px, py, p.r, 0, Math.PI * 2)
    ctx.fillStyle = color
    ctx.fill()

    // drift
    p.x += p.vx
    p.y += p.vy
    if (p.y + p.r < 0) { p.y = h + p.r; p.x = Math.random() * w }
    if (p.x - p.r > w) { p.x = -p.r }
    if (p.x + p.r < 0) { p.x = w + p.r }
  })

  canvasRaf = requestAnimationFrame(drawParticles)
}

function resizeCanvas() {
  if (!canvasRef.value || !sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  canvasRef.value.width = rect.width
  canvasRef.value.height = rect.height
  buildParticles(canvasRef.value.width, canvasRef.value.height)
}

function trackMouse(e) {
  if (!sectionRef.value) return
  const rect = sectionRef.value.getBoundingClientRect()
  mouseX = e.clientX - rect.left
  mouseY = e.clientY - rect.top
}

// ── Lifecycle ─────────────────────────────────────────────
onMounted(() => {
  ctx = canvasRef.value.getContext('2d')
  resizeCanvas()
  tickTilt()
  drawParticles()
  window.addEventListener('resize', resizeCanvas, { passive: true })
  window.addEventListener('mousemove', trackMouse, { passive: true })
})

onUnmounted(() => {
  cancelAnimationFrame(tiltRaf)
  cancelAnimationFrame(canvasRaf)
  window.removeEventListener('resize', resizeCanvas)
  window.removeEventListener('mousemove', trackMouse)
})

// ── Helpers ───────────────────────────────────────────────
function scrollToProjects() {
  const el = document.getElementById('projects')
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero {
  position: relative;
  background-color: var(--color-canvas);
  padding: var(--space-16) 0 var(--space-12);
  overflow: hidden;
  cursor: none;
}

.hero__canvas {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}

.hero__silhouette {
  position: absolute;
  right: 6%;
  top: 50%;
  transform: translateY(-50%);
  width: 560px;
  height: 560px;
  z-index: 1;
  pointer-events: none;
  color: var(--color-ink);
  opacity: 0.055;
}

.hero__container {
  position: relative;
  z-index: 2;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  align-items: center;
  gap: var(--space-8);
  transform-origin: center center;
  will-change: transform;
}

/* Left column */
.hero__left {
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.hero__name {
  font-family: var(--font-primary);
  font-size: 64px;
  font-weight: 500;
  letter-spacing: -1.28px;
  line-height: 64px;
  color: var(--color-ink);
}

.hero__summary {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: var(--color-ink);
  max-width: 480px;
}

.hero__cta-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
  margin-top: var(--space-1);
}

/* Right column */
.hero__right {
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-3);
}

.hero__portrait-wrap {
  position: relative;
  width: 300px;
  height: 300px;
}

.hero__portrait {
  width: 300px;
  height: 300px;
  border-radius: var(--radius-circle);
  overflow: hidden;
  background-color: var(--color-watermark);
}

.hero__portrait-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center top;
  display: block;
  user-select: none;
  pointer-events: none;
}

.hero__satellite {
  position: absolute;
  bottom: 12px;
  right: -8px;
  width: 56px;
  height: 56px;
  border-radius: var(--radius-circle);
  background-color: var(--color-white);
  border: none;
  box-shadow: var(--shadow-card);
  font-size: 20px;
  color: var(--color-ink);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: none;
  transition: transform 0.2s ease;
  min-height: 44px;
}

.hero__satellite:hover {
  transform: scale(1.08);
}

.hero__arc {
  display: block;
}

@media (max-width: 767px) {
  .hero__silhouette {
    width: 280px;
    height: 280px;
    right: 50%;
    top: 120px;
    transform: translateX(50%);
    opacity: 0.045;
  }

  .hero {
    padding: 100px 0 var(--space-6);
    cursor: auto;
  }

  .hero__container {
    flex-direction: column;
    padding: 0 var(--space-3);
    gap: var(--space-4);
    transform: none !important;
    align-items: center;
  }

  .hero__left {
    flex: unset;
    width: 100%;
    order: 2;
  }

  .hero__right {
    flex: unset;
    order: 1;
    width: 100%;
    align-items: center;
  }

  .hero__portrait-wrap {
    width: 180px;
    height: 180px;
  }

  .hero__portrait {
    width: 180px;
    height: 180px;
  }

  .hero__satellite {
    display: none;
  }

  .hero__arc {
    display: none;
  }

  .hero__name {
    font-size: 40px;
    letter-spacing: -0.8px;
    line-height: 44px;
  }
}

@media (pointer: coarse) {
  .hero {
    cursor: auto;
  }
  .hero__satellite {
    cursor: pointer;
  }
}
</style>
