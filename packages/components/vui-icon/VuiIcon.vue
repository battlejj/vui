<template>
  <Suspense>
    <component :is="iconComponent" />
  </Suspense>
</template>

<script setup lang="ts">
import type { SizeProp } from '@/types'
import { computed, defineAsyncComponent, h, type ComponentOptions } from 'vue'

const props = defineProps<{ name: string; color?: string; fontSize?: SizeProp }>()
const className = computed(() => {
  switch (props.fontSize) {
    case 'large': {
      return 'VuiIcon-root VuiIcon-root--large'
    }
    case 'small': {
      return 'VuiIcon-root VuiIcon-root--small'
    }
    case 'inherit': {
      return 'VuiIcon-root VuiIcon-root--inherit'
    }
    case 'medium':
    default: {
      return 'VuiIcon-root VuiIcon-root--medium'
    }
  }
})

function kebabToCamelCase(kebabString: string) {
  return kebabString.replace(/-([a-z])/g, (_match, letter) => letter.toUpperCase())
}
const iconName = kebabToCamelCase(`mdi-${props.name}`) as keyof typeof import('@mdi/js')
const iconComponent = defineAsyncComponent(async () => {
  const { [iconName]: icon } = await import('@mdi/js')
  // Assuming you have a way to render the icon, e.g., a custom component or a direct SVG
  // For example, if you're using @mdi/react, you might import Icon from '@mdi/react' and use it here.
  // For simplicity, let's assume you're directly using the SVG path.

  const component: ComponentOptions = {
    render() {
      // You might need to wrap this in an actual icon component
      // depending on your UI library (e.g., <v-icon> for Vuetify)
      return h('span', {
        innerHTML: icon
          ? `<svg height="1em" width="1em" class="${className.value}" viewBox="0 0 24 24" fill="${props.color || 'currentColor'}"><path d="${icon}" /></svg>`
          : '',
      }) // Using h for Vue's render function
    },
  }
  return component
})
</script>
<style>
.VuiIcon-root {
  font-size: 1.25rem;
}

.VuiIcon-root--small {
  font-size: 1.25rem;
}

.VuiIcon-root--medium {
  font-size: 1.5rem;
}
.VuiIcon-root--large {
  font-size: 2.125rem;
}

.VuiIcon-root--inherit {
  font-size: inherit;
}
</style>
