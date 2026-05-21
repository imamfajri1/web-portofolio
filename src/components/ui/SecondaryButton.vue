<template>
  <a
    v-if="href"
    :href="href"
    class="secondary-btn"
    v-bind="$attrs"
  >{{ label }}</a>
  <button
    v-else
    class="secondary-btn"
    @click="handleClick"
    v-bind="$attrs"
  >{{ label }}</button>
</template>

<script setup>
const props = defineProps({
  label: { type: String, required: true },
  href: { type: String, default: null },
  scroll: { type: String, default: null }
})

function handleClick() {
  if (props.scroll) {
    const el = document.getElementById(props.scroll)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.secondary-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-white);
  color: var(--color-ink);
  border: 1.5px solid var(--color-ink);
  border-radius: var(--radius-btn);
  padding: 6px 24px;
  font-family: var(--font-primary);
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease;
  min-height: 44px;
  white-space: nowrap;
}

.secondary-btn:hover {
  background-color: var(--color-ink);
  color: var(--color-canvas);
}
</style>
