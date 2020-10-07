<template>
  <el-table-column
    :label="label"
    :width="width"
    :fixed="fixed"
    :resizable="resizable"
    align="center"
    class-name="t-table-operate"
  >
    <template #default="{row}">
      <slot name="default" :row="row"></slot>
    </template>
    <template v-if="$slots.header" #header>
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
  },
  methods: {
    tableColumnData(item) {
      console.info('item:', item, this.$refs['slot-body'])
    }
  }
}
</script>
