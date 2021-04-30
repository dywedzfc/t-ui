<!-- 查询面板 -->
<template>
  <div class="t-query-panel">
    <t-query-bar
      class="t-query-box"
      v-if="$slots.querybar"
      :model="model"
      :type="type"
      :size="size"
      :label-width="labelWidth"
      ref="querybar"
    >
      <slot name="querybar"></slot>
    </t-query-bar>
    <div class="t-query-wrapper" v-if="$slots.default" ref="wrapper">
      <slot></slot>
    </div>
    <div class="t-query-footer" v-if="$slots.footer" ref="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TQueryPanel',
  props: {
    type: String,
    model: Object,
    size: { type: String },
    labelWidth: { type: String },
    footer: {
      type: [String, Number]
    },
    minHeight: {
      type: [String, Number]
    }
  },
  data() {
    return {}
  },
  computed: {
    hasMinHeight() {
      return !!this.regStyleValue(this.minHeight)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setQueryFooterHeight()
      this.setQueryWapperMinHeight()
      this.setQueryWapperHeight()
      window.addEventListener('resize', () => this.setQueryWapperHeight())
    })
  },
  activated() {
    this.setQueryWapperHeight()
  },
  methods: {
    setQueryWapperHeight() {
      const queryWrapper = this.$refs.wrapper
      if (this.$refs.querybar) {
        const queryBarHeight = this.$refs.querybar.$el.offsetHeight
        if (this.$slots.footer) {
          const queryFooterHeight = this.$refs.footer.offsetHeight
          const height = queryBarHeight + queryFooterHeight
          queryWrapper.style.height = `calc(100% - ${height}px)`
        } else queryWrapper.style.height = `calc(100% - ${queryBarHeight}px)`
      } else {
        queryWrapper.style.height = `100%`
      }
    },
    setQueryWapperMinHeight() {
      const queryWrapper = this.$refs.wrapper
      const minHeight = this.regStyleValue(this.minHeight)
      if (minHeight) queryWrapper.style.minHeight = minHeight
    },
    setQueryFooterHeight() {
      if (!this.$slots.footer) return false
      const queryFooter = this.$refs.footer
      const height = this.regStyleValue(this.footer)
      if (height) queryFooter.style.height = height
    },
    regStyleValue(value) {
      const regString = /^[0-9]+px|em|rem|%$/
      const regNumber = /^[0-9]+$/
      if (regNumber.test(value)) return `${value}px`
      if (regString.test(value)) return value
      return ''
    }
  }
}
</script>
