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
  border: 1px solid var(--color-ink);
  border-radius: var(--radius-pill);
  padding: 4px 16px;
  font-family: var(--font-primary);
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}
</style>
