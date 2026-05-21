<template>
  <footer class="footer">
    <div class="footer__container">
      <!-- Tagline -->
      <h2 class="footer__tagline">Imam Fajri</h2>

      <!-- Link grid -->
      <div class="footer__grid">
        <!-- Navigate -->
        <div class="footer__col">
          <span class="footer__col-header">Navigate</span>
          <ul class="footer__col-links" role="list">
            <li v-for="link in navLinks" :key="link.id">
              <a :href="`#${link.id}`" class="footer__link" @click.prevent="scrollTo(link.id)">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div class="footer__col">
          <span class="footer__col-header">Connect</span>
          <ul class="footer__col-links" role="list">
            <li>
              <a href="https://github.com/imamfajri1" target="_blank" rel="noopener noreferrer" class="footer__link footer__link--external">
                GitHub ↗
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/imamfajri" target="_blank" rel="noopener noreferrer" class="footer__link footer__link--external">
                LinkedIn ↗
              </a>
            </li>
            <li>
              <a href="mailto:imamfajri.ze@gmail.com" class="footer__link">Email</a>
            </li>
          </ul>
        </div>
        
      </div>

      <!-- Divider -->
      <hr class="footer__divider" />

      <!-- Bottom row -->
      <div class="footer__bottom">
        <span class="footer__legal">© 2026 Imam Fajri. All rights reserved.</span>
        <span class="footer__location">South Jakarta, Indonesia</span>
      </div>
    </div>
  </footer>
</template>

<script setup>
const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
]

const stack = ['Vue 3', 'Vite', 'Tailwind CSS', 'Vercel']

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer {
  background-color: var(--color-footer-bg);
  color: #FFFFFF;
  padding: var(--space-12) 0 var(--space-8);
}

.footer__container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

.footer__tagline {
  font-family: var(--font-primary);
  font-size: 36px;
  font-weight: 500;
  letter-spacing: -0.02em;
  color: #FFFFFF;
  margin-bottom: var(--space-8);
  line-height: 1.2;
}

.footer__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--space-8);
  margin-bottom: var(--space-8);
}

.footer__col-header {
  display: block;
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: var(--space-3);
}

.footer__col-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--space-2);
}

.footer__link {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
  text-decoration: none;
  transition: color 0.2s ease;
}

.footer__link:hover {
  color: #FFFFFF;
}

.footer__stack-item {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.85);
}

.footer__divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-bottom: var(--space-4);
}

.footer__bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--space-2);
}

.footer__legal,
.footer__location {
  font-family: var(--font-primary);
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
}

@media (max-width: 767px) {
  .footer {
    padding: var(--space-8) 0 var(--space-6);
  }

  .footer__container {
    padding: 0 var(--space-3);
  }

  .footer__tagline {
    font-size: 24px;
    margin-bottom: var(--space-6);
  }

  .footer__grid {
    grid-template-columns: 1fr;
    gap: var(--space-6);
    margin-bottom: var(--space-6);
  }

  .footer__bottom {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
