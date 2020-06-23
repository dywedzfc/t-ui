<template>
  <div class="t-header" :class="{ 'is-border': border }" :style="{ height }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'THeader',
  props: {
    height: { type: String, default: '60px' },
    border: { type: Boolean, default: false }
  }
}
</script>
