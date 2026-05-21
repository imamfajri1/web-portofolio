<template>
  <section id="projects" class="projects">
    <!-- Decorative arc connecting card 1 and 2 -->
    <svg
      class="projects__arc"
      width="100%"
      height="60"
      viewBox="0 0 800 60"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
    >
      <path d="M 0 56 Q 400 4 800 56" stroke="#F37338" stroke-width="1" fill="none" />
    </svg>

    <div class="projects__container">
      <EyebrowLabel label="PROJECTS" />
      <h2 class="projects__heading">Selected Projects</h2>

      <div class="projects__grid">
        <div
          v-for="(project, index) in projects"
          :key="project.name"
          class="projects__card"
          v-reveal="{ delay: index * 100 }"
        >
          <!-- Header -->
          <div class="projects__card-header">
            <span class="projects__name">{{ project.name }}</span>
            <span class="projects__role-pill">{{ project.role }}</span>
          </div>

          <!-- Stack badges -->
          <div class="projects__stack">
            <span
              v-for="tech in project.stack"
              :key="tech"
              class="projects__stack-pill"
            >{{ tech }}</span>
          </div>

          <!-- Divider -->
          <hr class="projects__divider" />

          <!-- Description -->
          <p class="projects__description">{{ project.description }}</p>

          <!-- Points -->
          <ul class="projects__points">
            <li
              v-for="point in project.points"
              :key="point"
              class="projects__point"
            >
              <span class="projects__bullet" aria-hidden="true">·</span>
              {{ point }}
            </li>
          </ul>

          <!-- CTA -->
          <div class="projects__card-footer">
            <a href="#" class="projects__cta">View Details</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { projects } from '@/data/resume.js'
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import { vReveal } from '@/composables/useScrollReveal.js'
</script>

<style scoped>
.projects {
  position: relative;
  background-color: var(--color-canvas-lifted);
  padding: var(--space-12) 0;
  overflow: hidden;
}

.projects__arc {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  pointer-events: none;
  opacity: 0.6;
}

.projects__container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.projects__heading {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.72px;
  color: var(--color-ink);
}

.projects__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-3);
  align-items: start;
}

.projects__card {
  background-color: var(--color-canvas);
  border-radius: var(--radius-hero);
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.projects__card-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--space-2);
  flex-wrap: wrap;
}

.projects__name {
  font-family: var(--font-primary);
  font-size: 24px;
  font-weight: 500;
  color: var(--color-ink);
}

.projects__role-pill {
  display: inline-flex;
  align-items: center;
  border: 1.5px solid var(--color-ink);
  border-radius: var(--radius-pill);
  padding: 4px 16px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 500;
  color: var(--color-ink);
  white-space: nowrap;
}

.projects__stack {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.projects__stack-pill {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-white);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  padding: 2px 12px;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 400;
  color: var(--color-ink);
}

.projects__divider {
  border: none;
  border-top: 1px solid var(--color-border);
}

.projects__description {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  color: var(--color-ink);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.projects__points {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.projects__point {
  display: flex;
  gap: var(--space-1);
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-slate);
  line-height: 1.6;
}

.projects__bullet {
  color: var(--color-slate);
  font-weight: 700;
  flex-shrink: 0;
}

.projects__card-footer {
  margin-top: auto;
  padding-top: var(--space-2);
}

.projects__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-ink);
  color: var(--color-canvas);
  border-radius: var(--radius-btn);
  padding: 6px 24px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  min-height: 44px;
  transition: opacity 0.2s ease;
}

.projects__cta:hover {
  opacity: 0.85;
}

@media (max-width: 767px) {
  .projects {
    padding: var(--space-6) 0;
  }

  .projects__container {
    padding: 0 var(--space-3);
    gap: var(--space-3);
  }

  .projects__heading {
    font-size: 28px;
  }

  .projects__grid {
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .projects__card {
    padding: 24px;
    border-radius: var(--radius-btn);
  }
}
</style>
