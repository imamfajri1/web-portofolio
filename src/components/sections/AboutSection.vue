<template>
  <section id="about" class="about">
    <div class="about__container">
      <EyebrowLabel label="ABOUT" />
      <h2 class="about__heading">Education &amp; Background</h2>

      <div class="about__grid">
        <!-- Education card -->
        <div class="about__edu-card" v-reveal>
          <div v-for="edu in education" :key="edu.school">
            <p class="about__school">{{ edu.school }}</p>
            <p class="about__degree">{{ edu.degree }}</p>
            <div class="about__meta-row">
              <span class="about__gpa-badge">GPA {{ edu.gpa }}</span>
              <span class="about__period">{{ edu.period }}</span>
            </div>
            <ul class="about__highlights">
              <li v-for="h in edu.highlights" :key="h" class="about__highlight-item">
                <span class="about__dot" aria-hidden="true">·</span>
                {{ h }}
              </li>
            </ul>
          </div>
        </div>

        <!-- Stats column -->
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
            <span class="about__stat-label">Hackathon Finalist</span>
          </div>
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

.about__grid {
  display: grid;
  grid-template-columns: 55% 45%;
  gap: var(--space-6);
  align-items: start;
}

/* Education card */
.about__edu-card {
  background-color: var(--color-canvas);
  border-radius: var(--radius-hero);
  padding: 40px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.about__school {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 500;
  color: var(--color-ink);
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

/* Stats */
.about__stats {
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.about__stat-tile {
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

  .about__grid {
    grid-template-columns: 1fr;
    gap: var(--space-3);
  }

  .about__edu-card {
    padding: 24px;
  }

  .about__stats {
    flex-direction: row;
    gap: var(--space-2);
  }

  .about__stat-tile {
    flex: 1;
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
