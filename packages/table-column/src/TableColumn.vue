<template>
  <el-table-column v-bind="useProp">
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
    type: { type: String, default: undefined },
    index: { type: [Number, Function], default: undefined },
    /* column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件 */
    columnKey: { type: String, default: undefined },
    /* 显示的标题 */
    label: { type: String, default: undefined },
    /* 对应列内容的字段名，也可以使用 property 属性 */
    prop: { type: String, default: undefined },
    width: { type: String, default: undefined },
    minWidth: { type: String, default: undefined },
    fixed: { type: [String, Boolean], default: undefined },
    renderHeader: { type: Function, default: undefined },
    sortable: { type: [Boolean, String], default: false },
    sortMethod: { type: Function },
    sortBy: { type: [String, Array, Function] },
    sortOrders: { type: Array },
    resizable: { type: Boolean, default: true },
    formatter: { type: Function, default: undefined },
    vFormatter: { type: Function, default: undefined },
    showOverflowTooltip: { type: Boolean, default: undefined },
    align: { type: String, default: 'center' },
    headerAlign: { type: String, default: undefined },
    className: { type: String, default: undefined },
    labelClassName: { type: String, default: undefined },
    selectable: { type: Function, default: undefined },
    reserveSelection: { type: Boolean, default: undefined },
    filters: { type: Array },
    filterPlacement: { type: String },
    filterMultiple: { type: Boolean },
    filterMethod: { type: Function },
    filteredValue: { type: Array }
  },
  computed: {
    useProp() {
      const props = {}
      if (this.type) props.type = this.type
      if (this.index) props.index = this.index
      if (this.columnKey) props.columnKey = this.columnKey
      if (this.label) props.label = this.label
      if (this.prop) props.prop = this.prop
      if (this.width) props.width = this.width
      if (this.minWidth) props.minWidth = this.minWidth
      if (this.fixed) props.fixed = this.fixed
      if (this.renderHeader) props.renderHeader = this.propRenderHeader
      if (this.sortable) props.sortable = this.sortable
      if (this.sortMethod) props.sortMethod = this.propSortMethod
      if (this.sortBy) props.sortBy = this.propSortBy
      if (this.sortOrders) props.sortOrders = this.sortOrders
      if (this.resizable) props.resizable = this.resizable
      if (this.formatter) props.formatter = this.propFormatter
      if (this.showOverflowTooltip) props.showOverflowTooltip = this.showOverflowTooltip
      if (this.align) props.align = this.align
      if (this.headerAlign) props.headerAlign = this.headerAlign
      if (this.className) props.className = this.className
      if (this.labelClassName) props.labelClassName = this.labelClassName
      if (this.selectable) props.selectable = this.propSelectable
      if (this.reserveSelection) props.reserveSelection = this.reserveSelection
      if (this.filters) props.filters = this.filters
      if (this.filterPlacement) props.filterPlacement = this.filterPlacement
      if (this.filterMultiple) props.filterMultiple = this.filterMultiple
      if (this.filterMethod) props.filterMethod = this.propFilterMethod
      if (this.filteredValue) props.filteredValue = this.filteredValue
      return props
    }
  },
  mounted() {},
  methods: {
    propRenderHeader(h, item) {
      return this.renderHeader ? this.renderHeader(h, item) : undefined
    },
    propSortMethod(a, b) {
      return this.sortMethod ? this.sortMethod(a, b) : undefined
    },
    propSortBy(row, index) {
      if (typeof this.sortBy === 'function') return this.sortBy(row, index)
      else this.sortBy
    },
    propFormatter(row, column, cellValue, index) {
      if (this.vFormatter) return this.vFormatter(cellValue, index)
      else if (this.formatter) return this.formatter(row, column, cellValue, index)
      return undefined
    },
    propSelectable(row, index) {
      return this.selectable ? this.selectable(row, index) : undefined
    },
    propFilterMethod(value, row, column) {
      return this.filterMethod ? this.filterMethod(value, row, column) : undefined
    }
  }
}
</script>
