<template>
  <div class="eyebrow-label">
    <span class="eyebrow-dot" aria-hidden="true"></span>
    <span class="eyebrow-text">{{ label }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: { type: String, required: true }
})
</script>

<style scoped>
.eyebrow-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.eyebrow-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--color-orange-arc);
  flex-shrink: 0;
}

.eyebrow-text {
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--color-slate);
}
</style>
