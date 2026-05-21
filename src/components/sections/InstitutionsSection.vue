<template>
  <section class="institutions">
    <div class="institutions__inner" v-reveal>
      <EyebrowLabel label="COLLABORATIONS" />
      <h2 class="institutions__heading">Institutions I've contributed to</h2>
    </div>

    <!-- aria-hidden: meaningful content is the heading; these are decorative -->
    <div class="institutions__marquee-wrap" aria-hidden="true">
      <div class="institutions__marquee-track">
        <!-- Two identical sets for a seamless infinite loop -->
        <div class="institutions__set" v-for="n in 2" :key="n">
          <div
            v-for="org in orgs"
            :key="`s${n}-${org.name}`"
            class="institutions__logo-card"
          >
            <img
              :src="org.src"
              :alt="org.name"
              class="institutions__logo-img"
              loading="lazy"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import { vReveal } from '@/composables/useScrollReveal.js'

const orgs = [
  { name: 'Universitas Indonesia',                 src: '/organization/Universitas Indonesia Logo.png' },
  { name: 'Faculty of Computer Science, UI',       src: '/organization/Logo Fasilkom UI.webp' },
  { name: 'Pramuka Universitas Indonesia',         src: '/organization/Pramuka UI.png' },
  { name: 'Innovation and Comparative Governance', src: '/organization/Innovation and Comparative Governance.png' },
  { name: 'Ministry of Transmigration',            src: '/organization/logo kementrans.webp' },
  { name: 'Rentee',                                src: '/organization/Rentee logo.jpg' },
  { name: 'BRWA',                                  src: '/organization/logo BRWA.webp' },
  { name: 'CanPlus',                               src: '/organization/logo canplus.png' },
  { name: 'BEST',                                  src: '/organization/Logo BEST.png' },
  { name: 'Koetchenj',                             src: '/organization/Koetchenj.png' },
  { name: 'Business Development',                  src: '/organization/BUSINESS DEVELOPMENT logo.jpg' },
]
</script>

<style scoped>
.institutions {
  background-color: var(--color-canvas-lifted);
  padding: var(--space-12) 0;
  overflow: hidden;
}

.institutions__inner {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  margin-bottom: var(--space-6);
}

.institutions__heading {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.72px;
  line-height: 44px;
  color: var(--color-ink);
  margin-top: var(--space-2);
}

/* Clip overflow + fade edges with a CSS mask */
.institutions__marquee-wrap {
  overflow: hidden;
  padding: var(--space-3) 0;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 8%,
    #000 92%,
    transparent 100%
  );
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    #000 8%,
    #000 92%,
    transparent 100%
  );
}

/* Scroll track — two sets side by side, sliding left */
.institutions__marquee-track {
  display: flex;
  width: max-content;
  animation: institutions-marquee 42s linear infinite;
}

.institutions__marquee-track:hover {
  animation-play-state: paused;
}

/* One full set — padding-right fills the gap at the seam */
.institutions__set {
  display: flex;
  gap: var(--space-3);
  flex-shrink: 0;
  padding-right: var(--space-3);
}

@keyframes institutions-marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Logo pill card — always white so logos render on their native background */
.institutions__logo-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 168px;
  height: 84px;
  background-color: #FFFFFF;
  border-radius: var(--radius-btn);
  border: 1px solid var(--color-border);
  padding: 14px 22px;
  cursor: default;
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 250ms ease;
}

.institutions__logo-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-card);
  border-color: transparent;
}

/* Slightly muted at rest, full colour on hover */
.institutions__logo-img {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
  filter: grayscale(25%) opacity(0.82);
  transition: filter 0.35s ease;
  user-select: none;
  pointer-events: none;
}

.institutions__logo-card:hover .institutions__logo-img {
  filter: grayscale(0%) opacity(1);
}

@media (max-width: 767px) {
  .institutions {
    padding: var(--space-8) 0;
  }

  .institutions__inner {
    padding: 0 var(--space-3);
    margin-bottom: var(--space-4);
  }

  .institutions__heading {
    font-size: 28px;
    letter-spacing: -0.56px;
    line-height: 34px;
  }

  .institutions__logo-card {
    width: 120px;
    height: 64px;
    padding: 10px 14px;
  }

  .institutions__set {
    gap: var(--space-2);
    padding-right: var(--space-2);
  }

  .institutions__marquee-track {
    animation-duration: 28s;
  }
}
</style>
