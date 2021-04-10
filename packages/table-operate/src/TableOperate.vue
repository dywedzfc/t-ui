<template>
  <el-table-column
    :label="label"
    :width="width"
    :fixed="fixed"
    :resizable="resizable"
    align="center"
    class-name="t-table-operate"
  >
    <template #default="{$index,row,column,store,_self}">
      <slot
        name="default"
        :$index="$index"
        :column="column"
        :_self="_self"
        :store="store"
        :row="row"
      ></slot>
    </template>
    <template #header="{$index,column,store,_self}">
      <slot name="header" :$index="$index" :column="column" :_self="_self" :store="store">
        {{ column.label }}
      </slot>
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
    tableColumnData() {
      // console.info('item:', item, this.$refs['slot-body'])
    }
  }
}
</script>
