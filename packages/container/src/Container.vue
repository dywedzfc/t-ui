<template>
  <div
    class="t-container"
    :class="{ 'is-vertical': isVertical, 'is-border': border }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'TContainer',
  props: {
    border: { type: Boolean, default: false },
    direction: { type: String }
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') return true
      else if (this.direction === 'horizontal') return false
      return this.$slots && this.$slots.default
        ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag
            return tag === 't-header' || tag === 't-footer'
          })
        : false
    }
  },
  mounted() {}
}
</script>
