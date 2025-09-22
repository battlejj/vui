<script setup>
import Demo from './demo.vue'
import VuiIconButton from './VuiIconButton.vue'
import VuiIcon from '../vui-icon/VuiIcon.vue'
</script>

## category: Components

# VuiIconButton

Icon Button component

## Usage

```vue
<template>
  <VuiIconButton>
    <vui-icon name="close" />
  </VuiIconButton>
</template>
```

## Demo

<div class="example">
  <div class="example--demo">
    <vui-icon-button aria-label="delete">
      <vui-icon name="delete" />
    </vui-icon-button>
    <vui-icon-button aria-label="delete" color="primary" disabled>
      <vui-icon name="delete" />
    </vui-icon-button>
    <vui-icon-button color="secondary" aria-label="add an alarm">
      <vui-icon name="alarm" />
    </vui-icon-button>
    <vui-icon-button color="primary" aria-label="add to shopping cart">
        <vui-icon name="cart-plus" />
    </vui-icon-button>
  </div>

```vue
<template>
  <vui-icon-button aria-label="delete">
    <vui-icon name="delete" />
  </vui-icon-button>
  <vui-icon-button aria-label="delete" color="primary" disabled>
    <vui-icon name="delete" />
  </vui-icon-button>
  <vui-icon-button color="secondary" aria-label="add an alarm">
    <vui-icon name="alarm" />
  </vui-icon-button>
  <vui-icon-button color="primary" aria-label="add to shopping cart">
    <vui-icon name="cart-plus" />
  </vui-icon-button>
</template>
```

</div>

## Sizes

For larger or smaller icon buttons, use the `size` prop.

<div class="example">
  <div class="example--demo">
  <vui-icon-button aria-label="delete" size="small">
    <vui-icon name="delete" font-size="inherit" />
  </vui-icon-button>

  <vui-icon-button aria-label="delete" size="small">
    <vui-icon name="delete" font-size="small" />
  </vui-icon-button>

  <vui-icon-button aria-label="delete" size="large">
    <vui-icon name="delete" />
  </vui-icon-button>

  <vui-icon-button aria-label="delete" size="large">
    <vui-icon name="delete" font-size="inherit" />
  </vui-icon-button>

  </div>

```vue
<template>
  <vui-icon-button aria-label="delete" size="small">
    <vui-icon name="delete" font-size="inherit" />
  </vui-icon-button>

  <vui-icon-button aria-label="delete" size="small">
    <vui-icon name="delete" font-size="small" />
  </vui-icon-button>

  <vui-icon-button aria-label="delete" size="large">
    <vui-icon name="delete" />
  </vui-icon-button>

  <vui-icon-button aria-label="delete" size="large">
    <vui-icon name="delete" font-size="inherit" />
  </vui-icon-button>
</template>
```

</div>
