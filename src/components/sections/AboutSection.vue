<template>
  <section id="about" class="about">
    <div class="about__container">
      <EyebrowLabel label="ABOUT" />
      <h2 class="about__heading">Education &amp; Background</h2>

      <div class="about__edu-column">
        <!-- Universitas Indonesia card -->
        <div class="about__edu-card" v-reveal>
          <p class="about__school">{{ education[0].school }}</p>
          <p class="about__location">{{ education[0].location }}</p>
          <p class="about__degree">{{ education[0].degree }}</p>
          <div class="about__meta-row">
            <span class="about__gpa-badge">GPA {{ education[0].gpa }}</span>
            <span class="about__period">{{ education[0].period }}</span>
          </div>
          <ul class="about__highlights">
            <li v-for="h in education[0].highlights" :key="h" class="about__highlight-item">
              <span class="about__dot" aria-hidden="true">·</span>
              {{ h }}
            </li>
          </ul>
        </div>

        <!-- Stats row — sits between the two education cards -->
        <div class="about__stats">
          <div class="about__stat-tile" v-reveal>
            <span class="about__stat-number">3.29</span>
            <span class="about__stat-label">GPA</span>
          </div>
          <div class="about__stat-tile" v-reveal="{ delay: 100 }">
            <span class="about__stat-number">2×</span>
            <span class="about__stat-label">P2MW Funded</span>
          </div>
          <div class="about__stat-tile" v-reveal="{ delay: 200 }">
            <span class="about__stat-number">4+</span>
            <span class="about__stat-label">Finalist National Competitions</span>
          </div>
        </div>

        <!-- SMAN 1 Kampar Timur card -->
        <div class="about__edu-card" v-reveal="{ delay: 120 }">
          <p class="about__school">{{ education[1].school }}</p>
          <p class="about__location">{{ education[1].location }}</p>
          <p class="about__degree">{{ education[1].degree }}</p>
          <div class="about__meta-row">
            <span class="about__period">{{ education[1].period }}</span>
          </div>
          <ul class="about__highlights">
            <li v-for="h in education[1].highlights" :key="h" class="about__highlight-item">
              <span class="about__dot" aria-hidden="true">·</span>
              {{ h }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { education } from '@/data/resume.js'
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import { vReveal } from '@/composables/useScrollReveal.js'
</script>

<style scoped>
.about {
  background-color: var(--color-canvas-lifted);
  padding: var(--space-12) 0;
}

.about__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.about__heading {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.72px;
  color: var(--color-ink);
}

/* Single-column flow: UI card → stats row → SMAN card */
.about__edu-column {
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

/* Education card */
.about__edu-card {
  position: relative;
  overflow: hidden;
  background-color: var(--color-canvas);
  border-radius: var(--radius-hero);
  padding: 40px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

/* UI logo silhouette — only on the first (Universitas Indonesia) card */
.about__edu-card:first-child::before {
  content: '';
  position: absolute;
  right: -24px;
  bottom: -24px;
  width: 220px;
  height: 220px;
  background-image: url('/organization/Universitas Indonesia Logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.3;
  filter: grayscale(100%);
  pointer-events: none;
}

html.dark .about__edu-card:first-child::before {
  filter: grayscale(100%) invert(1);
  opacity: 0.07;
}

.about__school {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 500;
  color: var(--color-ink);
}

.about__location {
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-slate);
  margin-top: -4px;
}

.about__degree {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  color: var(--color-slate);
  line-height: 1.5;
}

.about__meta-row {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.about__gpa-badge {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-ink);
  border-radius: var(--radius-pill);
  padding: 4px 16px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
}

.about__period {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-slate);
}

.about__highlights {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
}

.about__highlight-item {
  display: flex;
  gap: var(--space-1);
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-ink);
  line-height: 1.6;
}

.about__dot {
  color: var(--color-ink);
  font-weight: 700;
  flex-shrink: 0;
}

/* Stats row — always horizontal, three equal tiles */
.about__stats {
  display: flex;
  flex-direction: row;
  gap: var(--space-2);
}

.about__stat-tile {
  flex: 1;
  background-color: var(--color-white);
  border-radius: var(--radius-btn);
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.about__stat-number {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  color: var(--color-ink);
  letter-spacing: -0.02em;
}

.about__stat-label {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-slate);
}

@media (max-width: 767px) {
  .about {
    padding: var(--space-6) 0;
  }

  .about__container {
    padding: 0 var(--space-3);
    gap: var(--space-3);
  }

  .about__edu-column {
    gap: var(--space-2);
  }

  .about__edu-card {
    padding: 24px;
  }

  .about__stat-tile {
    padding: 16px 12px;
    align-items: center;
  }

  .about__stat-number {
    font-size: 28px;
  }

  .about__stat-label {
    font-size: 11px;
    text-align: center;
  }
}
</style>
