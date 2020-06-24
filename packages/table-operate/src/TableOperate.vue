<template>
  <el-table-column
    :label="label"
    :width="width"
    :fixed="fixed"
    :resizable="resizable"
    align="center"
    class-name="t-table-operate"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-if="$slots.header" v-slot:header>
      <slot name="header"></slot>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TTableOperate',
  props: {
    label: { type: String, default: '操作' },
    width: { type: String, default: '120' },
    fixed: { type: [String, Boolean], default: 'right' },
    resizable: { type: Boolean, default: false }
  }
}
</script>
