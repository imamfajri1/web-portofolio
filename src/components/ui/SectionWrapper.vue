<template>
  <section
    :id="id"
    class="section-wrapper"
    :class="background === 'lifted' ? 'bg-lifted' : 'bg-canvas'"
  >
    <div class="section-container">
      <slot />
    </div>
  </section>
</template>

<script setup>
defineProps({
  id: { type: String, default: null },
  background: { type: String, default: 'canvas' }
})
</script>

<style scoped>
.section-wrapper {
  width: 100%;
  padding: var(--space-12) 0;
}

.bg-canvas {
  background-color: var(--color-canvas);
}

.bg-lifted {
  background-color: var(--color-canvas-lifted);
}

.section-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 var(--space-8);
}

@media (max-width: 767px) {
  .section-wrapper {
    padding: var(--space-6) 0;
  }

  .section-container {
    padding: 0 var(--space-3);
  }
}
</style>
