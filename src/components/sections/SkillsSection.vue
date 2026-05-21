<template>
  <section id="skills" class="skills">
    <div class="skills__container">
      <EyebrowLabel label="SKILLS" />
      <h2 class="skills__heading">Technical Skills</h2>

      <div class="skills__grid">
        <div class="skills__tile" v-reveal>
          <span class="skills__category">Languages</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.languages" :key="s" :label="s" />
          </div>
        </div>

        <div class="skills__tile" v-reveal="{ delay: 100 }">
          <span class="skills__category">Frameworks &amp; Libraries</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.frameworks" :key="s" :label="s" />
          </div>
        </div>

        <div class="skills__tile" v-reveal="{ delay: 200 }">
          <span class="skills__category">Databases</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.databases" :key="s" :label="s" />
          </div>
        </div>

        <div class="skills__tile" v-reveal="{ delay: 300 }">
          <span class="skills__category">DevOps &amp; Tools</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.devops" :key="s" :label="s" />
          </div>
        </div>

        <div class="skills__tile" v-reveal="{ delay: 400 }">
          <span class="skills__category">Other</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.other" :key="s" :label="s" />
          </div>
        </div>

        <div class="skills__tile" v-reveal="{ delay: 500 }">
          <span class="skills__category">Soft Skills</span>
          <ul class="skills__soft-list">
            <li v-for="s in skills.soft" :key="s" class="skills__soft-item">{{ s }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { skills } from '@/data/resume.js'
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import SkillPill from '@/components/ui/SkillPill.vue'
import { vReveal } from '@/composables/useScrollReveal.js'
</script>

<style scoped>
.skills {
  background-color: var(--color-canvas);
  padding: var(--space-12) 0;
}

.skills__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  gap: var(--space-4);
}

.skills__heading {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.72px;
  color: var(--color-ink);
}

.skills__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-3);
}

.skills__tile {
  background-color: var(--color-canvas-lifted);
  border-radius: var(--radius-hero);
  padding: 32px;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
}

.skills__category {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-slate);
}

.skills__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

.skills__soft-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skills__soft-item {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: var(--color-slate);
  line-height: 1.6;
}

@media (max-width: 767px) {
  .skills {
    padding: var(--space-6) 0;
  }

  .skills__container {
    padding: 0 var(--space-3);
    gap: var(--space-3);
  }

  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--space-2);
  }

  .skills__tile {
    padding: 20px;
    gap: var(--space-2);
    border-radius: var(--radius-btn);
  }

  .skills__heading {
    font-size: 28px;
  }
}
</style>
