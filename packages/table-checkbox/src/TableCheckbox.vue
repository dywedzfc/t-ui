<template>
  <el-table-column
    type="selection"
    :width="width"
    :fixed="fixed"
    :resizable="resizable"
    align="center"
  />
</template>

<script>
export default {
  name: 'TTableCheckbox',
  props: {
    width: { type: String, default: '60' },
    fixed: { type: [String, Boolean] },
    resizable: { type: Boolean, default: false }
  }
}
</script>
