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
    :formatter="formatterData"
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
    <template #default="{$index,row,column,store,_self}">
      <slot :$index="$index" :column="column" :_self="_self" :store="store" :row="row">
        {{ row[column.property] }}
      </slot>
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
    resizable: { type: Boolean, default: true },
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
  },
  mounted() {
    this.$emit('formatter')
    // this.formatterData()
    // console.info('init:',, this.width, this.prop)
  },
  methods: {
    formatterData() {
      // console.info('info:', this.formatter)
      this.$emit('formatter')
    }
  }
}
</script>
