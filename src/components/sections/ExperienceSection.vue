<template>
  <section id="experience" class="experience">
    <div class="experience__container">
      <EyebrowLabel label="EXPERIENCE" />

      <!-- Heading + tabs in one row -->
      <div class="experience__top">
        <h2 class="experience__heading">Experience</h2>
        <div class="experience__tabs" role="tablist">
          <button
            role="tab"
            :aria-selected="activeTab === 'work'"
            :class="['experience__tab', { 'experience__tab--active': activeTab === 'work' }]"
            @click="activeTab = 'work'"
          >Work</button>
          <button
            role="tab"
            :aria-selected="activeTab === 'org'"
            :class="['experience__tab', { 'experience__tab--active': activeTab === 'org' }]"
            @click="activeTab = 'org'"
          >Organizations</button>
        </div>
      </div>

      <!-- Work timeline -->
      <div v-if="activeTab === 'work'" class="experience__timeline">
        <div class="experience__line" aria-hidden="true"></div>
        <div
          v-for="(job, index) in experience"
          :key="index"
          class="experience__entry"
          v-reveal="{ delay: index * 80 }"
        >
          <div class="experience__dot" aria-hidden="true"></div>
          <div class="experience__card">
            <div class="experience__card-header">
              <span class="experience__period-pill">{{ job.period }}</span>
            </div>
            <h3 class="experience__title">{{ job.title }}</h3>
            <p class="experience__meta">{{ job.company }} · {{ job.location }}</p>
            <ul class="experience__points">
              <li v-for="point in job.points" :key="point" class="experience__point">
                <span class="experience__bullet" aria-hidden="true">·</span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Organizations timeline -->
      <div v-else class="experience__timeline">
        <div class="experience__line" aria-hidden="true"></div>
        <div
          v-for="(org, index) in organizations"
          :key="index"
          class="experience__entry"
          v-reveal="{ delay: index * 80 }"
        >
          <div class="experience__dot experience__dot--org" aria-hidden="true"></div>
          <div class="experience__card">
            <div class="experience__card-header">
              <span class="experience__period-pill">{{ org.period }}</span>
            </div>
            <h3 class="experience__title">{{ org.title }}</h3>
            <p class="experience__meta">{{ org.company }} · {{ org.location }}</p>
            <ul class="experience__points">
              <li v-for="point in org.points" :key="point" class="experience__point">
                <span class="experience__bullet" aria-hidden="true">·</span>
                {{ point }}
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { experience, organizations } from '@/data/resume.js'
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import { vReveal } from '@/composables/useScrollReveal.js'

const activeTab = ref('work')
</script>

<style scoped>
.experience {
  background-color: var(--color-canvas);
  padding: var(--space-12) 0;
}

.experience__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

/* Heading + tabs row */
.experience__top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-3);
  flex-wrap: wrap;
}

.experience__heading {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.72px;
  color: var(--color-ink);
}

/* Tabs */
.experience__tabs {
  display: flex;
  gap: 8px;
}

.experience__tab {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  padding: 7px 20px;
  border-radius: var(--radius-pill);
  border: 1.5px solid var(--color-border);
  background: transparent;
  color: var(--color-slate);
  cursor: pointer;
  min-height: 36px;
  white-space: nowrap;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}

.experience__tab--active {
  background-color: var(--color-ink);
  border-color: var(--color-ink);
  color: var(--color-canvas);
}

.experience__tab:not(.experience__tab--active):hover {
  border-color: var(--color-ink);
  color: var(--color-ink);
}

/* Timeline */
.experience__timeline {
  position: relative;
  padding-left: 56px;
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.experience__line {
  position: absolute;
  left: 16px;
  top: 16px;
  bottom: 16px;
  width: 1px;
  background-color: var(--color-border);
}

.experience__entry {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: var(--space-3);
}

.experience__dot {
  position: absolute;
  left: -48px;
  top: 24px;
  width: 32px;
  height: 32px;
  border-radius: var(--radius-circle);
  background-color: var(--color-ink);
  flex-shrink: 0;
}

/* Orange dot for organizations */
.experience__dot--org {
  background-color: var(--color-orange-arc);
}

.experience__card {
  flex: 1;
  background-color: var(--color-white);
  border-radius: var(--radius-hero);
  padding: 32px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.experience__card-header {
  display: flex;
  align-items: center;
  gap: var(--space-2);
}

.experience__period-pill {
  display: inline-flex;
  align-items: center;
  border: 1px solid var(--color-ink);
  border-radius: var(--radius-pill);
  padding: 4px 16px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink);
}

.experience__title {
  font-family: var(--font-primary);
  font-size: 20px;
  font-weight: 500;
  color: var(--color-ink);
}

.experience__meta {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-slate);
}

.experience__points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-top: var(--space-1);
}

.experience__point {
  display: flex;
  gap: var(--space-1);
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-ink);
  line-height: 1.6;
}

.experience__bullet {
  color: var(--color-ink);
  font-weight: 700;
  flex-shrink: 0;
}

@media (max-width: 767px) {
  .experience {
    padding: var(--space-6) 0;
  }

  .experience__container {
    padding: 0 var(--space-3);
    gap: var(--space-3);
  }

  .experience__top {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-2);
  }

  .experience__heading {
    font-size: 28px;
  }

  .experience__timeline {
    padding-left: 0;
    gap: var(--space-2);
  }

  .experience__line,
  .experience__dot {
    display: none;
  }

  .experience__card {
    padding: 24px;
    border-radius: var(--radius-btn);
  }
}
</style>
