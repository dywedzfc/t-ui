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
  name: 'TTableIndex',
  props: {
    label: { type: String, default: '序号' },
    width: { type: String, default: '80' },
    fixed: { type: [String, Boolean], default: true },
    resizable: { type: Boolean, default: false }
  }
}
</script>
