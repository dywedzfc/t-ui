<!-- 表格+分页插件 -->
<template>
  <div class="t-table-panel" :style="tablePanelStyle">
    <el-table
      class="t-table"
      :class="{ 't-scrollbar': scrollbar }"
      :height="tableHeight"
      v-bind="useProp"
      @select="handleSelect"
      @select-all="handleSelectAll"
      @selection-change="handleSelectionChange"
      @row-click="handleRowClick"
      @row-contextmenu="handleRowContextmenu"
      @row-dblclick="handleRowDblclick"
      @header-click="handleHeaderClick"
      @header-contextmenu="handleHeaderContextmenu"
      @header-dragend="handleHeaderDragend"
      v-loading="loading"
      ref="table"
    >
      <!-- :style="{ height: tableHeight }" -->
      <!-- :row-key="rowKey" :lazy="lazy" :load="propLoad" :tree-props="treeProps" -->
      <!-- v-scrollbar:table="scrollbar" -->
      <slot></slot>
    </el-table>
    <el-pagination
      background
      layout="prev, pager, next, jumper, ->, total"
      :total="getPageTotal"
      :page-size="getPageSize"
      :current-page="currentPage"
      :prev-text="prevText"
      :next-text="nextText"
      :disabled="pageDisabled"
      hide-on-single-page
      @current-change="handlePaginationCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'TTablePage',
  props: {
    loading: { type: Boolean, default: false },
    /**判断是否使用 perfect-scrollbar */
    scrollbar: { type: Boolean, default: true },
    /**显示的数据 */
    data: { type: Array, default: undefined },
    height: { type: [String, Number], default: undefined },
    /**Table 的最大高度 */
    maxHeight: { type: [String, Number], default: undefined },
    /**是否为斑马纹 table */
    stripe: { ype: Boolean, default: true },
    /**是否带有纵向边框 */
    border: { type: Boolean, default: true },
    /**Table 的尺寸 */
    size: { type: String, default: 'small' },
    /**列的宽度是否自撑开 */
    fit: { type: Boolean, default: true },
    /**是否显示表头 */
    showHeader: { type: Boolean, default: true },
    /**是否要高亮当前行 */
    highlightCurrentRow: { type: Boolean, default: false },
    /**
     * 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。
     * @param {row, rowIndex}
     */
    rowClassName: { type: [Function, String], default: undefined },
    /**
     * 单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。
     * @param {row, column, rowIndex, columnIndex}
     */
    cellClassName: { type: [Function, String], default: undefined },
    /**
     * 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。
     * @param {row, rowIndex}
     */
    headerRowClassName: { type: [Function, String], default: undefined },
    /**
     * 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。
     * @param {row, column, rowIndex, columnIndex}
     */
    headerCellClassName: { type: [Function, String], default: undefined },
    /**空数据时显示的文本内容，也可以通过 slot="empty" 设置 */
    emptyText: { type: String, default: undefined },
    /**是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 */
    defaultExpandAll: { type: Boolean, default: false },
    /**默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 */
    defaultSort: { type: Object, default: undefined },
    /**tooltip effect 属性, value: dark/light */
    tooltipEffect: { type: String, default: undefined },
    /**是否在表尾显示合计行 */
    showSummary: { type: Boolean, default: false },
    /**合计行第一列的文本 */
    sumText: { type: String, default: '合计' },
    /**
     * 自定义的合计计算方法
     * @param { columns, data }
     */
    summaryMethod: { type: Function, default: undefined },
    /**
     * 合并行或列的计算方法
     * @param { row, column, rowIndex, columnIndex }
     */
    spanMethod: { type: Function, default: undefined },
    /**是否懒加载子节点数据 */
    // lazy: Boolean,
    /**
     * 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息
     * @param row
     * @param treeNode
     * @param resolve
     */
    // load: Function,
    /**
     * 渲染嵌套数据的配置选项
     * 默认值：{ hasChildren: 'hasChildren', children: 'children' }
     */
    // treeProps: Object,
    /**是否冻结数据 */
    hasFreeze: { type: Boolean, default: true },
    /**每页数量 */
    pageSize: { type: Number, default: undefined },
    /**禁用 */
    pageDisabled: { type: Boolean, default: false },
    /**当前页 */
    realTimePage: { type: Number, default: 1 },
    /**
     * 总页数
     * 如果是前端分页无需传入，插件会自动生成
     * 后端分页必填
     */
    pageTotal: { type: Number, default: undefined },
    /**上一页文字 */
    prevText: { type: String, default: undefined },
    /**下一页文字 */
    nextText: { type: String, default: undefined },
    /**刷新后是否回到第一页，前端分页时生效 */
    firstPage: { type: Boolean, default: undefined }
  },
  data() {
    return { currentPage: 1, pageStandard: 500 }
  },
  computed: {
    useProp() {
      const prop = {}
      if (this.data) prop.data = this.filterTableList
      if (this.maxHeight) prop.maxHeight = this.maxHeight
      if (this.stripe) prop.stripe = this.stripe
      if (this.border) prop.border = this.border
      if (this.size) prop.size = this.size
      if (this.fit) prop.fit = this.fit
      if (this.showHeader) prop.showHeader = this.showHeader
      if (this.highlightCurrentRow) prop.highlightCurrentRow = this.highlightCurrentRow
      if (this.rowClassName) prop.rowClassName = this.rowClassName
      if (this.cellClassName) prop.cellClassName = this.cellClassName
      if (this.headerRowClassName) prop.headerRowClassName = this.headerRowClassName
      if (this.headerCellClassName) prop.headerCellClassName = this.headerCellClassName
      if (this.emptyText) prop.emptyText = this.emptyText
      if (this.defaultExpandAll) prop.defaultExpandAll = this.defaultExpandAll
      if (this.defaultSort) prop.defaultSort = this.defaultSort
      if (this.tooltipEffect) prop.tooltipEffect = this.tooltipEffect
      if (this.showSummary) prop.showSummary = this.showSummary
      if (this.sumText) prop.sumText = this.sumText
      if (this.summaryMethod) prop.summaryMethod = this.propSummaryMethod
      if (this.spanMethod) prop.spanMethod = this.propSpanMethod
      return prop
    },
    tablePanelStyle() {
      const style = {}
      const height = this.regStyleValue(this.height)
      if (height) style.height = height
      return style
    },
    /**计算表格高度 */
    tableHeight() {
      if (this.getPageTotal / this.getPageSize > 1) return 'calc(100% - 42px)'
      else return '100%'
    },
    /**表格数据展示 */
    filterTableList() {
      const { pageTotal, pageStandard } = this
      const data = this.data || []
      const pageSize = this.getPageSize
      const flag = !pageSize && data.length >= pageStandard
      if (flag || (pageSize && !pageTotal)) {
        const currentPage = this.currentPage
        const pageIndex = currentPage - 1
        return _.filter(data, (item, index) => {
          return index >= pageIndex * pageSize && index < currentPage * pageSize
        })
      } else if (this.hasFreeze && data.length > 100) return Object.freeze(data)
      else return data
    },
    /**总页数 */
    getPageTotal() {
      const data = this.data || []
      return this.pageTotal || data.length
    },
    getPageSize() {
      const { pageTotal, pageSize, pageStandard } = this
      if (pageTotal && !pageSize) return pageStandard
      return pageSize || 10
    },
    // 远程页数或数据页数
    remotelyPageSizeTPS() {
      if (this.pageTotal === undefined) return this.data.length / this.pageSize
      return this.pageTotal / this.pageSize
    }
  },
  watch: {
    data() {
      const currentPage = Math.ceil(this.remotelyPageSizeTPS)
      if (this.currentPage > currentPage) this.currentPage = currentPage
      if (this.firstPage && this.pageTotal === undefined) this.currentPage = 1
      const tableWrapper = this.$refs.table.$el.querySelector('.el-table__body-wrapper')
      tableWrapper.scrollTop = 0
      tableWrapper.scrollLeft = 0
    },
    currentPage(value) {
      if (this.$listeners['update:real-time-page']) this.$emit('update:real-time-page', value)
    },
    realTimePage(value) {
      this.currentPage = value
    }
  },
  methods: {
    /**
     * 当用户手动勾选数据行的 Checkbox 时触发的事件
     * @param selection 选中的数据
     * @param row
     */
    handleSelect(selection, row) {
      if (this.$listeners['select']) this.$emit('select', selection, row)
    },
    /**
     * 当用户手动勾选全选 Checkbox 时触发的事件
     * @param selection 选中的数据
     */
    handleSelectAll(selection) {
      if (this.$listeners['select-all']) this.$emit('select-all', selection)
    },
    /**
     * 当选择项发生变化时会触发该事件
     * @param selection 选中的数据
     */
    handleSelectionChange(selection) {
      if (this.$listeners['selection-change']) this.$emit('selection-change', selection)
    },
    /**
     * 当某一行被点击时会触发该事件
     * @param row
     * @param column
     * @param event
     */
    handleRowClick(row, column, event) {
      if (this.$listeners['row-click']) this.$emit('row-click', row, column, event)
    },
    /**
     * 当某一行被鼠标右键点击时会触发该事件
     * @param row
     * @param column
     * @param event
     */
    handleRowContextmenu(row, column, event) {
      if (this.$listeners['row-contextmenu']) this.$emit('row-contextmenu', row, column, event)
    },
    /**
     * 当某一行被双击时会触发该事件
     * @param row
     * @param column
     * @param event
     */
    handleRowDblclick(row, column, event) {
      if (this.$listeners['row-dblclick']) this.$emit('row-dblclick', row, column, event)
    },
    /**
     * 当某一列的表头被点击时会触发该事件
     * @param column
     * @param event
     */
    handleHeaderClick(column, event) {
      if (this.$listeners['header-click']) this.$emit('header-click', column, event)
    },
    /**
     * 当某一列的表头被鼠标右键点击时触发该事件
     * @param column
     * @param event
     */
    handleHeaderContextmenu(column, event) {
      if (this.$listeners['header-contextmenu']) this.$emit('header-contextmenu', column, event)
    },
    /**
     * 当拖动表头改变了列的宽度的时候会触发该事件
     * @param newWidth
     * @param oldWidth
     * @param column
     * @param event
     */
    handleHeaderDragend(newWidth, oldWidth, column, event) {
      if (this.$listeners['header-dragend'])
        this.$emit('header-dragend', newWidth, oldWidth, column, event)
    },
    /**
     * currentPage 改变时会触发
     * @param index 当前页
     */
    handlePaginationCurrentChange(index) {
      this.currentPage = index
      const tableWrapper = this.$refs.table.$el.querySelector('.el-table__body-wrapper')
      tableWrapper.scrollTop = 0
      tableWrapper.scrollLeft = 0
      if (this.pageTotal && this.$listeners['current-change'])
        this.$emit('current-change', {
          currentPage: index,
          pageSize: this.getPageSize
        })
    },

    propSummaryMethod(item) {
      return this.summaryMethod ? this.summaryMethod(item) : undefined
    },
    propSpanMethod(item) {
      return this.spanMethod ? this.spanMethod(item) : undefined
    },
    // propLoad(row, treeNode, resolve) {
    //   return this.load ? this.load(row, treeNode, resolve) : undefined
    // }

    // 格式化CSS Number类型的值
    regStyleValue(value) {
      const regString = /^[0-9]+px|em|rem|%|vw|vh|vmin|vmax$/
      const regNumber = /^[0-9]+$/
      if (regNumber.test(value)) return `${value}px`
      if (regString.test(value)) return value
      return ''
    }
  }
}
</script>
