<template>
  <footer
    class="t-footer"
    :class="{ 'is-border': border }"
    :style="{ height, minHeight }"
    ref="footer"
  >
    <div
      class="t-footer-control-strip"
      v-if="controlStrip"
      @mousedown="handleControlStripMousedown"
      ref="controlStrip"
    ></div>
    <div class="t-footer-wrapper">
      <slot></slot>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TFooter',
  props: {
    height: { type: String, default: '60px' },
    border: { type: Boolean, default: false },
    minHeight: { type: String, default: '50px' },
    controlStrip: { type: Boolean, default: false }
  },
  data() {
    return {
      mouse: { down: false, point: null, height: null }
    }
  },
  methods: {
    handleDocumentMousemove() {
      const { down, height, point } = this.mouse
      if (!down) return
      const footer = this.$refs.footer
      footer.style.height = `${height + (point - event.y)}px`
    },
    handleDocumentMouseup() {
      if (!this.mouse.down) return
      this.mouse.down = false
      let height = this.$refs.footer.offsetHeight + 'px'
      if (this.$listeners['update:height']) this.$emit('update:height', height)
      document.removeEventListener('mousemove', this.handleDocumentMousemove)
      document.removeEventListener('mousemove', this.handleDocumentMouseup)
    },
    handleControlStripMousedown() {
      this.mouse.down = true
      this.mouse.point = event.y
      this.mouse.height = this.$refs.footer.offsetHeight

      document.addEventListener('mousemove', this.handleDocumentMousemove)
      document.addEventListener('mouseup', this.handleDocumentMouseup)
    }
  }
}
</script>
