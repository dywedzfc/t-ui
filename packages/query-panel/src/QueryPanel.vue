<!-- 查询面板 -->
<template>
  <div class="t-query-panel" :style="queryPanelStyle">
    <t-query-bar
      class="t-query-box"
      v-if="$slots.querybar"
      :model="model"
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
    // type: String,
    model: Object,
    size: { type: String, default: 'small' },
    labelWidth: { type: String },
    height: { type: [String, Number] },
    bodyHeight: { type: [String, Number] },
    footerHeight: { type: [String, Number] }
  },
  data() {
    return {}
  },
  computed: {
    queryPanelStyle() {
      const value = this.regStyleValue(this.height)
      if (value || value === 0) return { height: value }
      return ''
    }
  },
  watch: {
    height() {
      this.setQueryFooterHeight()
      this.setQueryWapperHeight()
    },
    bodyHeight() {
      this.setQueryWapperHeight()
    },
    footerHeight() {
      this.setQueryFooterHeight()
      this.setQueryWapperHeight()
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.setQueryFooterHeight()
      this.setQueryWapperHeight()
      window.addEventListener('resize', () => this.setQueryWapperHeight())
    })
  },
  activated() {
    this.setQueryWapperHeight()
  },
  methods: {
    // 设置body面板的高度
    setQueryWapperHeight() {
      const queryWrapper = this.$refs.wrapper
      const setBodyStyle = () => {
        const queryBarHeight = this.$refs.querybar.$el.offsetHeight
        let height = queryBarHeight || 0
        // 如果存在底部面板
        if (this.$slots.footer) {
          const queryFooterHeight = this.$refs.footer.offsetHeight
          if (queryFooterHeight) height += queryFooterHeight
          queryWrapper.style.height = `calc(100% - ${height}px)`
        } else queryWrapper.style.height = `calc(100% - ${height}px)`
      }
      if (this.$refs.querybar) {
        const height = this.regStyleValue(this.bodyHeight)
        // 设置了模块高度，不允许固定body面板的高度
        if (this.height) setBodyStyle()
        else if (height) queryWrapper.style.height = height
        else setBodyStyle()
      } else {
        queryWrapper.style.height = `100%`
      }
    },
    // 设置footer面板的高度
    setQueryFooterHeight() {
      if (!this.$slots.footer) return false
      const queryFooter = this.$refs.footer
      const height = this.regStyleValue(this.footerHeight)
      if (height) queryFooter.style.height = height
    },

    // 格式化CSS Number类型的值
    regStyleValue(value) {
      const regString = /^[0-9]+px|em|rem|%|vw|vh|vmin|vmax$/
      const regNumber = /^[0-9]+$/
      if (regNumber.test(value)) return `${value}px`
      if (regString.test(value)) return value
      return ''
    }
  }
}
</script>
