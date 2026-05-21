<template>
  <section id="leadership" class="leadership">
    <div class="leadership__container">
      <EyebrowLabel label="LEADERSHIP" />
      <h2 class="leadership__heading">Leadership &amp; Activities</h2>

      <div class="leadership__grid">
        <div
          v-for="(item, index) in leadership"
          :key="index"
          class="leadership__card"
          v-reveal="{ delay: index * 100 }"
        >
          <div class="leadership__card-header">
            <h3 class="leadership__role">{{ item.role }}</h3>
            <span class="leadership__period-pill">{{ item.period }}</span>
          </div>
          <p class="leadership__org">{{ item.org }}</p>
          <ul class="leadership__points">
            <li v-for="point in item.points" :key="point" class="leadership__point">
              <span class="leadership__bullet" aria-hidden="true">·</span>
              {{ point }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { leadership } from '@/data/resume.js'
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import { vReveal } from '@/composables/useScrollReveal.js'
</script>

<style scoped>
.leadership {
  background-color: var(--color-canvas-lifted);
  padding: var(--space-12) 0;
}

.leadership__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.leadership__heading {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.72px;
  color: var(--color-ink);
}

.leadership__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.leadership__card {
  background-color: var(--color-canvas);
  border-radius: var(--radius-hero);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.leadership__card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.leadership__role {
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 500;
  color: var(--color-ink);
}

.leadership__period-pill {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  padding: 4px 16px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 400;
  color: var(--color-slate);
  white-space: nowrap;
}

.leadership__org {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-slate);
}

.leadership__points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.leadership__point {
  display: flex;
  gap: var(--space-1);
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-ink);
  line-height: 1.6;
}

.leadership__bullet {
  color: var(--color-ink);
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .leadership {
    padding: var(--space-6) 0;
  }

  .leadership__container {
    padding: 0 var(--space-3);
    gap: var(--space-3);
  }

  .leadership__heading {
    font-size: 28px;
  }

  .leadership__grid {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .leadership__card {
    padding: 24px;
    border-radius: var(--radius-btn);
  }
}
</style>
