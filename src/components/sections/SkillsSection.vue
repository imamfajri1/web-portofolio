<template>
  <section id="skills" class="skills">
    <div class="skills__container">
      <EyebrowLabel label="SKILLS" />
      <h2 class="skills__heading">Technical Skills</h2>

      <div class="skills__bento">
        <!-- Languages — featured 2-row card -->
        <div class="skills__card skills__card--lang" v-reveal>
          <span class="skills__label">Languages</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.languages" :key="s" :label="s" />
          </div>
          <!-- Silhouette: code brackets </> -->
          <svg class="skills__ghost" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M34 16 L6 50 L34 84" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M66 16 L94 50 L66 84" stroke="currentColor" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="43" y1="77" x2="57" y2="23" stroke="currentColor" stroke-width="6" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- Frameworks -->
        <div class="skills__card skills__card--fw" v-reveal="{ delay: 80 }">
          <span class="skills__label">Frameworks &amp; Libraries</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.frameworks" :key="s" :label="s" />
          </div>
          <!-- Silhouette: stacked layers -->
          <svg class="skills__ghost" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <path d="M50 10 L90 32 L50 54 L10 32 Z" stroke="currentColor" stroke-width="6" stroke-linejoin="round"/>
            <path d="M10 50 L50 72 L90 50" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M10 66 L50 88 L90 66" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </div>

        <!-- Databases -->
        <div class="skills__card skills__card--db" v-reveal="{ delay: 160 }">
          <span class="skills__label">Databases</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.databases" :key="s" :label="s" />
          </div>
          <!-- Silhouette: cylinder -->
          <svg class="skills__ghost" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <ellipse cx="50" cy="22" rx="32" ry="10" stroke="currentColor" stroke-width="6"/>
            <line x1="18" y1="22" x2="18" y2="78" stroke="currentColor" stroke-width="6"/>
            <line x1="82" y1="22" x2="82" y2="78" stroke="currentColor" stroke-width="6"/>
            <ellipse cx="50" cy="50" rx="32" ry="10" stroke="currentColor" stroke-width="5"/>
            <ellipse cx="50" cy="78" rx="32" ry="10" stroke="currentColor" stroke-width="6"/>
          </svg>
        </div>

        <!-- DevOps — full width -->
        <div class="skills__card skills__card--devops" v-reveal="{ delay: 240 }">
          <span class="skills__label">DevOps &amp; Tools</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.devops" :key="s" :label="s" />
          </div>
          <!-- Silhouette: terminal window -->
          <svg class="skills__ghost" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <rect x="6" y="14" width="88" height="70" rx="9" stroke="currentColor" stroke-width="6"/>
            <line x1="6" y1="30" x2="94" y2="30" stroke="currentColor" stroke-width="4"/>
            <circle cx="19" cy="22" r="3.5" fill="currentColor"/>
            <circle cx="30" cy="22" r="3.5" fill="currentColor"/>
            <circle cx="41" cy="22" r="3.5" fill="currentColor"/>
            <path d="M18 47 L30 55 L18 63" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
            <line x1="35" y1="63" x2="56" y2="63" stroke="currentColor" stroke-width="5" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- Other -->
        <div class="skills__card skills__card--other" v-reveal="{ delay: 320 }">
          <span class="skills__label">Other</span>
          <div class="skills__pills">
            <SkillPill v-for="s in skills.other" :key="s" :label="s" />
          </div>
          <!-- Silhouette: network graph (nodes + edges) -->
          <svg class="skills__ghost" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="18" r="9" stroke="currentColor" stroke-width="5.5"/>
            <circle cx="18" cy="72" r="9" stroke="currentColor" stroke-width="5.5"/>
            <circle cx="82" cy="72" r="9" stroke="currentColor" stroke-width="5.5"/>
            <line x1="50" y1="27" x2="22" y2="64" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
            <line x1="50" y1="27" x2="78" y2="64" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
            <line x1="27" y1="72" x2="73" y2="72" stroke="currentColor" stroke-width="4.5" stroke-linecap="round"/>
          </svg>
        </div>

        <!-- Soft Skills -->
        <div class="skills__card skills__card--soft" v-reveal="{ delay: 400 }">
          <span class="skills__label">Soft Skills</span>
          <ul class="skills__soft-list">
            <li v-for="s in skills.soft" :key="s">{{ s }}</li>
          </ul>
          <!-- Silhouette: two person figures -->
          <svg class="skills__ghost" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="32" cy="26" r="13" stroke="currentColor" stroke-width="6"/>
            <path d="M6 90 C6 67 16 56 32 56 C48 56 58 67 58 90" stroke="currentColor" stroke-width="6" stroke-linecap="round" fill="none"/>
            <circle cx="68" cy="26" r="13" stroke="currentColor" stroke-width="6"/>
            <path d="M42 90 C42 67 52 56 68 56 C84 56 94 67 94 90" stroke="currentColor" stroke-width="6" stroke-linecap="round" fill="none"/>
          </svg>
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
  background-color: var(--color-canvas-lifted);
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

/* Bento grid */
.skills__bento {
  display: grid;
  grid-template-areas:
    "lang  fw"
    "lang  db"
    "devops devops"
    "other soft";
  grid-template-columns: 2fr 1fr;
  gap: var(--space-3);
}

.skills__card--lang   { grid-area: lang; }
.skills__card--fw     { grid-area: fw; }
.skills__card--db     { grid-area: db; }
.skills__card--devops { grid-area: devops; }
.skills__card--other  { grid-area: other; }
.skills__card--soft   { grid-area: soft; }

/* Base card */
.skills__card {
  position: relative;
  overflow: hidden;
  background-color: var(--color-canvas);
  border-radius: var(--radius-hero);
  padding: 36px 40px;
  display: flex;
  flex-direction: column;
  gap: var(--space-3);
  box-shadow: var(--shadow-card);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.skills__card:hover {
  transform: translateY(-3px);
  box-shadow: 0 36px 72px rgba(0, 0, 0, 0.11);
}

html.dark .skills__card:hover {
  box-shadow: 0 36px 72px rgba(0, 0, 0, 0.58);
}

/* Ghost silhouette */
.skills__ghost {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 130px;
  height: 130px;
  color: var(--color-ink);
  opacity: 0.06;
  pointer-events: none;
  user-select: none;
}

/* Languages ghost is slightly larger given the bigger card */
.skills__card--lang .skills__ghost {
  width: 160px;
  height: 160px;
}

/* Orange top accent on featured languages card */
.skills__card--lang::before {
  content: '';
  position: absolute;
  top: 0;
  left: 40px;
  right: 40px;
  height: 2px;
  background: var(--color-orange-arc);
  border-radius: 0 0 2px 2px;
}

/* Category label */
.skills__label {
  font-family: var(--font-primary);
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--color-orange-arc);
}

/* Pills */
.skills__pills {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-1);
}

/* Soft skills */
.skills__soft-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 14px;
  flex: 1;
}

.skills__soft-list li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  color: var(--color-ink);
  line-height: 1.4;
}

.skills__soft-list li::before {
  content: '';
  width: 6px;
  height: 6px;
  border-radius: var(--radius-circle);
  background-color: var(--color-orange-arc);
  flex-shrink: 0;
}

/* Mobile */
@media (max-width: 767px) {
  .skills {
    padding: var(--space-6) 0;
  }

  .skills__container {
    padding: 0 var(--space-3);
    gap: var(--space-3);
  }

  .skills__heading {
    font-size: 28px;
  }

  .skills__bento {
    grid-template-areas:
      "lang"
      "fw"
      "db"
      "devops"
      "other"
      "soft";
    grid-template-columns: 1fr;
    gap: var(--space-2);
  }

  .skills__card {
    padding: 24px;
    border-radius: var(--radius-btn);
  }

  .skills__ghost {
    width: 90px;
    height: 90px;
  }

  .skills__card--lang .skills__ghost {
    width: 90px;
    height: 90px;
  }
}
</style>
