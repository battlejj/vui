<template>
  <div
    :class="{
      'VuiPaper-root': true,
      'VuiAlert-root': true,
      'VuiAlert-root--no-icon': isIconEmpty,
      [severity]: true,
    }"
    role="alert"
  >
    <div
      v-if="!isIconEmpty"
      :class="{
        'VuiAlert-icon': true,
        [`VuiAlert-icon--${severity}`]: true,
      }"
    >
      <slot name="icon"
        ><vui-icon fontSize="inherit" :name="iconInfo.icon" :key="iconInfo.icon"
      /></slot>
    </div>

    <div class="VuiAlert-message">
      <slot />
    </div>
    <div v-if="slots.action || closeable" class="VuiAlert-action">
      <vui-icon-button v-if="closeable" size="small">
        <vui-icon name="close" @click="emit('close')" />
      </vui-icon-button>
      <slot v-else name="action"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed, useSlots } from 'vue'
import VuiIcon from '../vui-icon/VuiIcon.vue'
import VuiIconButton from '../vui-icon-button/VuiIconButton.vue'
export type AlertSeverity = 'success' | 'info' | 'warning' | 'error'
export interface AlertProps {
  closeable?: boolean
  disableIcon?: boolean
  severity: AlertSeverity
}
const props = defineProps<AlertProps>()
const emit = defineEmits(['close'])
const iconInfo = computed(() => {
  switch (props.severity) {
    case 'error': {
      return { icon: 'alert-circle-outline', color: 'red' }
    }
    case 'info': {
      return { icon: 'information-outline', color: 'blue' }
    }
    case 'warning': {
      return { icon: 'alert-outline', color: 'orange' }
    }
    default: {
      return { icon: 'check-circle-outline', color: 'green' }
    }
  }
})

console.log(props)

const slots = useSlots()
const isIconEmpty = computed(() => {
  const iconSlotContent = slots.icon?.()
  if (!iconSlotContent) {
    return false
  }

  return iconSlotContent.every(
    (vnode) =>
      vnode.type === Comment ||
      (typeof vnode.children === 'string' && vnode.children.trim() === ''),
  )
})
</script>
<style>
.VuiAlert-root {
  border-radius: 4px;
  padding: 6px 16px;
  display: grid;
  grid-template-columns: 36px 1fr auto;
  line-height: 24px;
}
.VuiAlert-root--no-icon {
  border-radius: 4px;
  padding: 6px 16px;
  display: grid;
  grid-template-columns: 1fr auto;
}

.VuiAlert-root.success {
  color: rgb(204, 232, 205);
  background-color: rgb(12, 19, 13);
}
.VuiAlert-root.error {
  color: rgb(244, 199, 199);
  background-color: rgb(22, 11, 11);
}
.VuiAlert-root.info {
  color: rgb(184, 231, 251);
  background-color: rgb(7, 19, 24);
}
.VuiAlert-root.warning {
  color: rgb(255, 226, 183);
  background-color: rgb(25, 18, 7);
}
.VuiAlert-icon {
  padding: 7px 0;
  padding-right: 12px;
  font-size: 22px;

  &.VuiAlert-icon--info {
    color: #29b6f6;
  }
  &.VuiAlert-icon--error {
    color: #f44336;
  }
  &.VuiAlert-icon--success {
    color: #66bb6a;
  }
  &.VuiAlert-icon--warning {
    color: #ffa726;
  }
}

.VuiAlert-message {
  padding: 7px 0;
  font-size: 0.875rem;
}

.VuiAlert-action {
  padding: 7px 0px 7px 12px;
}
</style>
