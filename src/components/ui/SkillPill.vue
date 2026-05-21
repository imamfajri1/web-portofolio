<template>
  <span class="skill-pill">{{ label }}</span>
</template>

<script setup>
defineProps({
  label: { type: String, required: true }
})
</script>

<style scoped>
.skill-pill {
  display: inline-flex;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-ink);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-pill);
  padding: 6px 18px;
  font-family: var(--font-primary);
  font-size: 13px;
  font-weight: 500;
  white-space: nowrap;
  cursor: default;
}

.skill-pill:hover {
  background-color: rgba(243, 115, 56, 0.08);
  border-color: var(--color-orange-arc);
  color: var(--color-orange-arc);
}
</style>
