<template>
  <button
    :disabled="disabled"
    :class="{
      'VuiIconButton--root': true,
      'VuiIconButton-colorPrimary': color === 'primary',
      'VuiIconButton-colorSecondary': color === 'secondary',
      'VuiIconButton-colorError': color === 'error',
      'VuiIconButton-sizeSmall': size === 'small',
      'VuiIconButton-sizeMedium': !size || size === 'medium',
      'VuiIconButton-sizeLarge': size === 'large',
      'VuiButton-ripple': true,
      'Vui-disabled': disabled,
    }"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
defineProps<{
  color?: 'primary' | 'secondary' | 'error'
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
}>()
</script>
<style>
.VuiIconButton--root {
  font-size: 1.5rem;
  padding: 8px;
  border-radius: 50%;
  &:hover {
    background-color: var(--IconButton-hoverBg, rgba(255 255 255 / calc(0.08)));
  }
}

.VuiIconButton-sizeSmall {
  padding: 5px;
  font-size: 1.125rem;
}

.VuiIconButton-sizeMedium {
  padding: 8px;
}

.VuiIconButton-sizeLarge {
  padding: 12px;
  font-size: 1.75rem;
}

.VuiIconButton-colorPrimary {
  color: var(--vui-palette-primary--main, #1976d2);

  &:hover {
    background-color: rgb(from var(--vui-palette-primary--main, #1976d2) r g b / 10%);
  }
}

.VuiIconButton-colorSecondary {
  color: var(--vui-palette-secondary--main, #1976d2);

  &:hover {
    background-color: rgb(from var(--vui-palette-secondary--main, #1976d2) r g b / 10%);
  }
}

.VuiIconButton-colorError {
  color: var(--vui-palette-error--main, #d21919);

  &:hover {
    background-color: rgb(from var(--vui-palette-secondary--main, #d21919) r g b / 10%);
  }
}

.Vui-disabled {
  background-color: transparent;
  color: #ffffff4d;
  cursor: default;
  pointer-events: none;
}
</style>
