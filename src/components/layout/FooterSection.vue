<template>
  <footer class="footer">
    <!-- Uzumaki silhouette watermark -->
    <svg
      class="footer__silhouette"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="50" cy="50" r="47" fill="none" stroke="currentColor" stroke-width="5.5"/>
      <path
        d="M50,50 C52,44 58,42 62,46 C67,51 65,59 59,63 C52,68 42,66 38,59 C33,51 36,40 44,35 C53,29 65,33 70,43 C76,55 72,70 61,76 C48,83 31,79 24,66 C16,51 21,32 36,24 C52,15 72,22 79,40"
        fill="none" stroke="currentColor" stroke-width="6.5" stroke-linecap="round"
      />
    </svg>

    <div class="footer__container">
      <!-- Main row -->
      <div class="footer__main">
        <!-- Brand -->
        <div class="footer__brand">
          <span class="footer__name">Imam Fajri</span>
          <span class="footer__sub">Full Stack &amp; Backend Engineer</span>
        </div>

        <!-- Nav links -->
        <nav class="footer__nav" aria-label="Footer navigation">
          <a
            v-for="link in navLinks"
            :key="link.id"
            :href="`#${link.id}`"
            class="footer__navlink"
            @click.prevent="scrollTo(link.id)"
          >{{ link.label }}</a>
        </nav>

        <!-- Socials -->
        <div class="footer__socials">
          <a href="https://github.com/imamfajri1" target="_blank" rel="noopener noreferrer" class="footer__social">GitHub ↗</a>
          <a href="https://linkedin.com/in/imamfajri" target="_blank" rel="noopener noreferrer" class="footer__social">LinkedIn ↗</a>
          <a href="mailto:imamfajri.ze@gmail.com" class="footer__social">Email</a>
        </div>
      </div>

      <hr class="footer__divider" />

      <!-- Bottom bar -->
      <div class="footer__bottom">
        <span class="footer__legal">© 2026 Imam Fajri. All rights reserved.</span>
        <span class="footer__location">South Jakarta, Indonesia</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { id: 'about',      label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects',   label: 'Projects' },
  { id: 'skills',     label: 'Skills' },
  { id: 'contact',    label: 'Contact' }
]

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  position: relative;
  background-color: var(--color-footer-bg);
  overflow: hidden;
  padding: var(--space-6) 0 var(--space-4);
}

/* Uzumaki silhouette */
.footer__silhouette {
  position: absolute;
  right: -3%;
  top: 50%;
  transform: translateY(-50%);
  width: 340px;
  height: 340px;
  color: #ffffff;
  opacity: 0.045;
  pointer-events: none;
}

.footer__container {
  position: relative;
  z-index: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

/* Main row */
.footer__main {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--space-4);
  padding-bottom: var(--space-4);
}

/* Brand */
.footer__brand {
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex-shrink: 0;
}

.footer__name {
  font-family: var(--font-primary);
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  letter-spacing: -0.02em;
}

.footer__sub {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.45);
}

/* Nav */
.footer__nav {
  display: flex;
  align-items: center;
  gap: var(--space-3);
  flex-wrap: wrap;
  justify-content: center;
}

.footer__navlink {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer__navlink:hover {
  color: #ffffff;
}

/* Socials */
.footer__socials {
  display: flex;
  align-items: center;
  gap: var(--space-2);
  flex-shrink: 0;
}

.footer__social {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.65);
  text-decoration: none;
  transition: color 0.2s ease;
  white-space: nowrap;
}

.footer__social:hover {
  color: #F37338;
}

/* Divider */
.footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

/* Bottom bar */
.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--space-2);
  gap: var(--space-2);
  flex-wrap: wrap;
}

.footer__legal,
.footer__location {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.35);
}

/* Mobile */
@media (max-width: 767px) {
  .footer {
    padding: var(--space-4) 0 var(--space-3);
  }

  .footer__container {
    padding: 0 var(--space-3);
  }

  .footer__silhouette {
    width: 220px;
    height: 220px;
    right: -8%;
    opacity: 0.04;
  }

  .footer__main {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--space-3);
    padding-bottom: var(--space-3);
  }

  .footer__nav {
    justify-content: flex-start;
    gap: var(--space-2);
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }
}
</style>
