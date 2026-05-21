<template>
  <section id="contact" class="contact">
    <div class="contact__container">
      <EyebrowLabel label="CONTACT" />
      <h2 class="contact__heading">Let's Work Together</h2>
      <p class="contact__subtitle">Open to internships, freelance projects, and collaborations.</p>

      <div class="contact__cards">
        <!-- Email card -->
        <div class="contact__card" v-reveal>
          <div class="contact__icon-wrap" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path
                d="M4 8C4 6.9 4.9 6 6 6H26C27.1 6 28 6.9 28 8V24C28 25.1 27.1 26 26 26H6C4.9 26 4 25.1 4 24V8Z"
                stroke="#141413"
                stroke-width="1.5"
                fill="none"
              />
              <path d="M4 8L16 17L28 8" stroke="#141413" stroke-width="1.5" fill="none" />
            </svg>
          </div>
          <span class="contact__label">Email</span>
          <span class="contact__value">imamfajri.ze@gmail.com</span>
          <a href="mailto:imamfajri.ze@gmail.com" class="contact__cta">Send Email</a>
        </div>

        <!-- LinkedIn card -->
        <div class="contact__card" v-reveal="{ delay: 100 }">
          <div class="contact__icon-wrap" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect x="3" y="3" width="26" height="26" rx="4" stroke="#141413" stroke-width="1.5" fill="none" />
              <path d="M10 13V22" stroke="#141413" stroke-width="1.5" stroke-linecap="round" />
              <circle cx="10" cy="10" r="1.5" fill="#141413" />
              <path
                d="M15 22V17C15 15.3 16.3 14 18 14C19.7 14 21 15.3 21 17V22"
                stroke="#141413"
                stroke-width="1.5"
                stroke-linecap="round"
                fill="none"
              />
              <path d="M15 13V22" stroke="#141413" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>
          <span class="contact__label">LinkedIn</span>
          <span class="contact__value">linkedin.com/in/imamfajri</span>
          <a
            href="https://linkedin.com/in/imamfajri"
            target="_blank"
            rel="noopener noreferrer"
            class="contact__cta"
          >View Profile</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import EyebrowLabel from '@/components/ui/EyebrowLabel.vue'
import { vReveal } from '@/composables/useScrollReveal.js'
</script>

<style scoped>
.contact {
  background-color: var(--color-canvas);
  padding: var(--space-16) 0;
}

.contact__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-4);
}

.contact__heading {
  font-family: var(--font-primary);
  font-size: 48px;
  font-weight: 500;
  letter-spacing: -0.96px;
  color: var(--color-ink);
  text-align: center;
}

.contact__subtitle {
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 400;
  color: var(--color-slate);
  text-align: center;
}

.contact__cards {
  display: flex;
  flex-direction: row;
  gap: var(--space-3);
  justify-content: center;
  flex-wrap: wrap;
  margin-top: var(--space-2);
}

.contact__card {
  background-color: var(--color-white);
  border-radius: var(--radius-hero);
  padding: 32px 40px;
  box-shadow: var(--shadow-card);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--space-2);
  min-width: 300px;
}

.contact__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
}

.contact__label {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: var(--color-slate);
}

.contact__value {
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 500;
  color: var(--color-ink);
}

.contact__cta {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-ink);
  color: var(--color-canvas);
  border-radius: var(--radius-pill);
  padding: 8px 24px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  min-height: 44px;
  margin-top: var(--space-1);
  transition: opacity 0.2s ease;
}

.contact__cta:hover {
  opacity: 0.85;
}

@media (max-width: 767px) {
  .contact {
    padding: var(--space-8) 0;
  }

  .contact__container {
    padding: 0 var(--space-3);
  }

  .contact__heading {
    font-size: 32px;
  }

  .contact__cards {
    flex-direction: column;
    align-items: stretch;
  }

  .contact__card {
    min-width: unset;
    padding: 24px;
  }
}
</style>
