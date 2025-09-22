<script lang="ts" setup>
import VuiAlert from '../vui-alert/VuiAlert.vue'
import VuiAlertTitle from './VuiAlertTitle.vue'
</script>
<template>
  <VuiAlert severity="success">
    <VuiAlertTitle>A message title</VuiAlertTitle>
    A success message
  </VuiAlert>

  <VuiAlert severity="success" closeable>
    <VuiAlertTitle>A message title on a closeable alert</VuiAlertTitle>
    A success message
  </VuiAlert>
</template>
