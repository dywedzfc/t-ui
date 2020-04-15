<template>
  <el-table-column
    :label="label"
    :width="width"
    :fixed="fixed && 'right'"
    :resizable="resizable"
    align="center"
    class-name="t-table-operate"
  >
    <template v-if="$slots.default">
      <slot></slot>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TableOperate',
  props: {
    label: { type: String, default: '操作' },
    width: { type: String, default: '120' },
    fixed: { type: Boolean, default: false },
    resizable: { type: Boolean, default: false }
  }
}
</script>