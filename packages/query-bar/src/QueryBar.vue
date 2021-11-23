<!-- 查询框 -->
<template>
  <el-form
    :class="[
      't-query-bar',
      { 't-border': border, 't-radius': radius },
      typeClassName,
      levelClassName
    ]"
    :model="model"
    :size="$size"
    :label-width="$labelWidth"
    :inline="hasInline"
  >
    <slot></slot>
  </el-form>
</template>

<script>
export default {
  name: 'TQueryBar',
  props: {
    type: { type: String, default: 'search' },
    model: Object,
    level: [Number, String],
    border: { type: Boolean, default: false },
    radius: { type: Boolean, default: false },
    size: { type: String },
    labelWidth: { type: String }
  },
  data() {
    return { $size: '', $labelWidth: '' }
  },
  computed: {
    levelClassName() {
      if (this.level == 1) return 't-level-1'
      if (this.level == 2) return 't-level-2'
      if (this.level == 3) return 't-level-3'
      return ''
    },
    typeClassName() {
      if (this.type == 'login') return 't-login'
      if (this.type == 'form') return 't-form'
      return ''
    },
    hasInline() {
      return !['login', 'form'].includes(this.type)
    }
  },
  watch: {
    size(value) {
      this.$size = value
    },
    $size(value) {
      if (this.$listeners['update:type']) this.$emit('update:type', value)
    },
    labelWidth(value) {
      this.$labelWidth = value
    }
  },
  created() {
    const type = this.type == 'login' || this.type == 'form'
    this.$size = this.size == null ? (type ? 'medium' : 'small') : this.size
    this.$labelWidth = this.labelWidth == null && this.type == 'form' ? '80px' : this.labelWidth
  },
  methods: {}
}
</script>
