<script lang="ts" setup>
import VuiIconButton from './VuiIconButton.vue'
import VuiIcon from '../vui-icon/VuiIcon.vue'
</script>
<template>
  <div>
    <h3>Sizes</h3>
    <p>For larger or smaller icon buttons, use the `size` prop.</p>
    <vui-icon-button color="primary" size="small">
      <vui-icon name="close" font-size="inherit" />
    </vui-icon-button>

    <vui-icon-button color="secondary" size="small">
      <vui-icon name="close" font-size="small" />
    </vui-icon-button>

    <vui-icon-button color="error" size="large">
      <vui-icon name="close" />
    </vui-icon-button>

    <vui-icon-button color="error" size="large">
      <vui-icon name="close" font-size="inherit" />
    </vui-icon-button>
  </div>
</template>
