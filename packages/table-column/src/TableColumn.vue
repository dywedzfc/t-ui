<template>
  <el-table-column
    type="index"
    :label="label"
    :width="width"
    :fixed="fixed"
    :resizable="resizable"
    align="center"
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
  name: 'TTableColumn',
  props: {
    type: String,
    index: [Number, Function],
    columnKey: String,
    label: String,
    prop: String,
    width: String,
    minWidth: String,
    fixed: [String, Boolean],
    renderHeader: Function,
    sortable: [Boolean, String],
    sortMethod: Function,
    sortBy: [String, Array, Function],
    sortOrders: Array,
    resizable: { type: Boolean },
    formatter: Function,
    showOverflowTooltip: Boolean,
    align: { type: String, default: 'center' },
    headerAlign: String,
    className: String,
    labelClassName: String,
    selectable: Function,
    reserveSelection: Boolean,
    filters: Array,
    filterPlacement: String,
    filterMultiple: Boolean,
    filterMethod: Function,
    filteredValue: Array
  }
}
</script>
