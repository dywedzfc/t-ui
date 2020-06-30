<template>
  <el-table-column
    :type="type"
    :index="index"
    :columnKey="columnKey"
    :label="label"
    :prop="prop"
    :width="width"
    :minWidth="minWidth"
    :fixed="fixed"
    :renderHeader="renderHeader"
    :sortable="sortable"
    :sortMethod="sortMethod"
    :sortBy="sortBy"
    :sortOrders="sortOrders"
    :resizable="resizable"
    :formatter="formatter"
    :showOverflowTooltip="showOverflowTooltip"
    :align="align"
    :headerAlign="headerAlign"
    :className="className"
    :labelClassName="labelClassName"
    :selectable="selectable"
    :reserveSelection="reserveSelection"
    :filters="filters"
    :filterPlacement="filterPlacement"
    :filterMultiple="filterMultiple"
    :filterMethod="filterMethod"
    :filteredValue="filteredValue"
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
