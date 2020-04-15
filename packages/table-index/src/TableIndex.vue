<template>
  <el-table-column
    type="index"
    :label="label"
    :width="width"
    :fixed="fixed"
    :resizable="resizable"
    align="center"
  />
</template>

<script>
export default {
  name: 'TableIndex',
  props: {
    label: { type: String, default: '编号' },
    width: { type: String, default: '60' },
    fixed: [String, Boolean],
    resizable: { type: Boolean, default: false }
  }
}
</script>