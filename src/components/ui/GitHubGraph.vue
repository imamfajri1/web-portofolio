<template>
  <div class="gh-graph">
    <!-- Eyebrow title -->
    <EyebrowLabel label="Github Contribution" />

    <!-- Count header -->
    <div class="gh-graph__header">
      <span class="gh-graph__count">{{ isLoading ? '—' : totalCount }}</span>
      <span class="gh-graph__label"> contributions in the last year</span>
    </div>

    <!-- Loading skeleton -->
    <div v-if="isLoading" class="gh-graph__skeleton">
      <div v-for="r in 7" :key="r" class="gh-graph__skeleton-row">
        <div v-for="c in 52" :key="c" class="gh-graph__skeleton-cell" />
      </div>
    </div>

    <!-- Error -->
    <p v-else-if="isError" class="gh-graph__error">
      Could not load GitHub activity
    </p>

    <!-- Calendar -->
    <div v-else class="gh-graph__body">
      <!-- Day labels column -->
      <div class="gh-graph__day-col">
        <div class="gh-graph__month-spacer" />
        <div class="gh-graph__day-labels">
          <span v-for="(lbl, i) in dayLabels" :key="i">{{ lbl }}</span>
        </div>
      </div>

      <!-- Scrollable week area -->
      <div class="gh-graph__scroll-wrap">
        <!-- Month labels -->
        <div class="gh-graph__month-row">
          <span
            v-for="m in monthLabels"
            :key="m.weekIndex"
            class="gh-graph__month"
            :style="{ left: `${m.weekIndex * stride}px` }"
          >{{ m.label }}</span>
        </div>

        <!-- Week columns -->
        <div class="gh-graph__weeks">
          <div
            v-for="(week, wi) in displayWeeks"
            :key="wi"
            class="gh-graph__week"
          >
            <div
              v-for="(day, di) in week"
              :key="di"
              class="gh-graph__cell"
              :class="cellClass(day)"
              @mouseenter="day !== null && showTooltip($event, day)"
              @mouseleave="tooltip = null"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Footer: username link + legend — centered -->
    <div v-if="!isLoading && !isError" class="gh-graph__footer">
      <a
        href="https://github.com/imamfajri1"
        target="_blank"
        rel="noopener noreferrer"
        class="gh-graph__username"
      >@imamfajri1</a>

      <div class="gh-graph__legend">
        <span class="gh-graph__legend-label">Less</span>
        <div class="gh-graph__cell gh-graph__cell--l0 gh-graph__legend-cell" />
        <div class="gh-graph__cell gh-graph__cell--l1 gh-graph__legend-cell" />
        <div class="gh-graph__cell gh-graph__cell--l2 gh-graph__legend-cell" />
        <div class="gh-graph__cell gh-graph__cell--l3 gh-graph__legend-cell" />
        <div class="gh-graph__cell gh-graph__cell--l4 gh-graph__legend-cell" />
        <span class="gh-graph__legend-label">More</span>
      </div>
    </div>

    <!-- Tooltip -->
    <div v-if="tooltip" class="gh-graph__tooltip" :style="tooltipStyle">
      {{ tooltip.count }} contribution{{ tooltip.count !== 1 ? 's' : '' }}
      &nbsp;·&nbsp;
      {{ tooltip.dateStr }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'

const USERNAME = 'imamfajri1'
const API = `https://github-contributions-api.jogruber.de/v4/${USERNAME}?y=last`
const MONTH_NAMES = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']

// ── State ──────────────────────────────────────────────────────
const contributions = ref([])
const totalCount    = ref(0)
const isLoading     = ref(true)
const isError       = ref(false)
const tooltip       = ref(null)
const mouseX        = ref(0)
const mouseY        = ref(0)
const isMobile      = ref(typeof window !== 'undefined' && window.innerWidth <= 767)

// ── Sizing ─────────────────────────────────────────────────────
const cellPx = computed(() => isMobile.value ? 10 : 12)
const gapPx  = computed(() => isMobile.value ?  2 :  3)
const stride = computed(() => cellPx.value + gapPx.value)

// ── Data transform: flat → week columns ────────────────────────
const weeks = computed(() => {
  if (!contributions.value.length) return []
  const flat = contributions.value.slice(-371)
  const dow  = new Date(flat[0].date).getDay()
  const padded = [...Array(dow).fill(null), ...flat]
  const result = []
  for (let i = 0; i < padded.length; i += 7) {
    result.push(padded.slice(i, Math.min(i + 7, padded.length)))
  }
  return result
})

const displayWeeks = computed(() =>
  isMobile.value ? weeks.value.slice(-26) : weeks.value
)

const monthLabels = computed(() => {
  const labels = []
  let lastMonth = -1
  displayWeeks.value.forEach((week, wi) => {
    const day = week.find(d => d !== null)
    if (!day) return
    const m = new Date(day.date).getMonth()
    if (m !== lastMonth) {
      labels.push({ weekIndex: wi, label: MONTH_NAMES[m] })
      lastMonth = m
    }
  })
  return labels
})

const dayLabels = ['', 'Mon', '', 'Wed', '', 'Fri', '']

// ── Cell class ─────────────────────────────────────────────────
function cellClass(day) {
  if (day === null) return 'gh-graph__cell--empty'
  return `gh-graph__cell--l${day.level}`
}

// ── Tooltip ────────────────────────────────────────────────────
function showTooltip(event, day) {
  mouseX.value = event.clientX
  mouseY.value = event.clientY
  const d = new Date(day.date)
  tooltip.value = {
    count: day.count,
    dateStr: `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`
  }
}

function trackMouse(e) {
  if (tooltip.value) {
    mouseX.value = e.clientX
    mouseY.value = e.clientY
  }
}

const tooltipStyle = computed(() => ({
  left:      `${mouseX.value}px`,
  top:       `${mouseY.value - 46}px`,
  transform: 'translateX(-50%)'
}))

// ── Fetch ──────────────────────────────────────────────────────
onMounted(async () => {
  window.addEventListener('mousemove', trackMouse, { passive: true })
  window.addEventListener('resize', onResize, { passive: true })

  try {
    const res  = await fetch(API)
    const data = await res.json()
    contributions.value = data.contributions
    totalCount.value = Object.values(data.total).reduce((a, b) => a + b, 0)
  } catch {
    isError.value = true
  } finally {
    isLoading.value = false
  }
})

onUnmounted(() => {
  window.removeEventListener('mousemove', trackMouse)
  window.removeEventListener('resize', onResize)
})

function onResize() {
  isMobile.value = window.innerWidth <= 767
}
</script>

<style scoped>
/* Card container */
.gh-graph {
  position: relative;
  background-color: var(--color-canvas);
  border-radius: var(--radius-hero);
  box-shadow: var(--shadow-card);
  padding: 32px 40px;
}

/* Count header */
.gh-graph__header {
  margin-top: var(--space-2);
  margin-bottom: var(--space-3);
}

.gh-graph__count {
  font-family: var(--font-primary);
  font-size: 28px;
  font-weight: 500;
  letter-spacing: -0.56px;
  color: var(--color-ink);
}

.gh-graph__label {
  font-family: var(--font-primary);
  font-size: 15px;
  font-weight: 400;
  color: var(--color-slate);
}

/* Loading skeleton */
.gh-graph__skeleton {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.gh-graph__skeleton-row {
  display: flex;
  gap: 3px;
}

.gh-graph__skeleton-cell {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  background-color: var(--color-watermark);
  animation: gh-pulse 1.8s ease-in-out infinite;
}

.gh-graph__skeleton-cell:nth-child(3n+1) { animation-delay: 0s; }
.gh-graph__skeleton-cell:nth-child(3n+2) { animation-delay: 0.3s; }
.gh-graph__skeleton-cell:nth-child(3n)   { animation-delay: 0.6s; }

@keyframes gh-pulse {
  0%, 100% { opacity: 0.4; }
  50%       { opacity: 0.9; }
}

/* Error */
.gh-graph__error {
  font-family: var(--font-primary);
  font-size: 14px;
  color: var(--color-slate);
}

/* Calendar body */
.gh-graph__body {
  display: flex;
  align-items: flex-start;
  gap: 4px;
}

/* Day labels column */
.gh-graph__day-col {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.gh-graph__month-spacer {
  height: 20px;
}

.gh-graph__day-labels {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.gh-graph__day-labels span {
  display: block;
  height: 12px;
  line-height: 12px;
  width: 26px;
  text-align: right;
  font-family: var(--font-primary);
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: var(--color-slate);
}

/* Scroll area */
.gh-graph__scroll-wrap {
  overflow-x: auto;
  flex: 1;
  scrollbar-width: none;
}

.gh-graph__scroll-wrap::-webkit-scrollbar {
  display: none;
}

/* Month row */
.gh-graph__month-row {
  position: relative;
  height: 20px;
}

.gh-graph__month {
  position: absolute;
  top: 0;
  font-family: var(--font-primary);
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: var(--color-slate);
  white-space: nowrap;
}

/* Weeks */
.gh-graph__weeks {
  display: flex;
  gap: 3px;
}

.gh-graph__week {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

/* Cells */
.gh-graph__cell {
  width: 12px;
  height: 12px;
  border-radius: 3px;
  cursor: default;
  transition: transform 0.12s ease, background-color 250ms ease;
}

.gh-graph__cell:hover {
  transform: scale(1.35);
}

.gh-graph__cell--empty {
  background-color: transparent;
  pointer-events: none;
}

/* Contribution level colours — warm orange palette */
.gh-graph__cell--l0 { background-color: var(--color-watermark); }
.gh-graph__cell--l1 { background-color: rgba(243, 115, 56, 0.22); }
.gh-graph__cell--l2 { background-color: rgba(243, 115, 56, 0.48); }
.gh-graph__cell--l3 { background-color: #F37338; }
.gh-graph__cell--l4 { background-color: #CF4500; }

html.dark .gh-graph__cell--l1 { background-color: rgba(243, 115, 56, 0.30); }
html.dark .gh-graph__cell--l2 { background-color: rgba(243, 115, 56, 0.58); }

/* Footer: username + legend — centred */
.gh-graph__footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-1);
  margin-top: var(--space-3);
}

.gh-graph__username {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 600;
  color: var(--color-slate);
  text-decoration: none;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.gh-graph__username:hover {
  color: var(--color-orange-arc);
}

/* Legend */
.gh-graph__legend {
  display: flex;
  align-items: center;
  gap: 4px;
}

.gh-graph__legend-label {
  font-family: var(--font-primary);
  font-size: 11px;
  font-weight: 500;
  color: var(--color-slate);
}

/* Legend cells — no hover scale, no pointer events */
.gh-graph__legend-cell {
  pointer-events: none;
}

.gh-graph__legend-cell:hover {
  transform: none;
}

/* Tooltip */
.gh-graph__tooltip {
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  background-color: var(--color-ink);
  color: var(--color-canvas);
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 500;
  padding: 5px 14px;
  border-radius: var(--radius-btn);
  white-space: nowrap;
  box-shadow: var(--shadow-nav);
}

/* Mobile */
@media (max-width: 767px) {
  .gh-graph {
    padding: 24px;
  }

  .gh-graph__count {
    font-size: 22px;
  }

  .gh-graph__label {
    font-size: 13px;
  }

  .gh-graph__skeleton-cell,
  .gh-graph__cell {
    width: 10px;
    height: 10px;
  }

  .gh-graph__skeleton-row,
  .gh-graph__weeks {
    gap: 2px;
  }

  .gh-graph__week,
  .gh-graph__day-labels {
    gap: 2px;
  }

  .gh-graph__day-labels span {
    height: 10px;
    line-height: 10px;
  }
}
</style>
