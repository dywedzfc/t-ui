<template>
  <el-button
    class="tw-table__button"
    v-bind="useProp"
    type="text"
    @mouseenter.native="handleMouseenter"
    @mouseleave.native="handleMouseleave"
    @click="handleTableButtonClick"
    ref="button"
  >
    <slot></slot>
  </el-button>
</template>

<script>
import { iconClassName } from 'util'

export default {
  name: 'TTableButton',
  props: {
    loading: { type: Boolean, default: undefined },
    disabled: { type: Boolean, default: undefined },
    icon: { type: String, default: undefined },
    autofocus: { type: Boolean, default: undefined },
    color: { type: String, default: undefined },
    hoverColor: { type: String, default: undefined }
  },
  computed: {
    useProp() {
      const props = {}
      if (this.loading) props.loading = this.loading
      if (this.disabled) props.disabled = this.disabled
      if (this.icon) props.icon = iconClassName(this.icon)
      if (this.autofocus) props.autofocus = this.autofocus
      return props
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs['button'].$el.style.color = this.color
    })
  },
  methods: {
    handleMouseenter() {
      if (this.hoverColor) this.$refs['button'].$el.style.color = this.hoverColor
      else this.$refs['button'].$el.style.color = null
    },
    handleMouseleave() {
      if (this.color) this.$refs['button'].$el.style.color = this.color
      else this.$refs['button'].$el.style.color = null
    },
    handleTableButtonClick() {
      if (this.$listeners['click']) this.$emit('click')
    }
  }
}
</script>
