<template>
  <el-table-column v-bind="useProp" align="center" class-name="t-table-operate">
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
    /* 列是否固定在左侧或者右侧，true 表示固定在左侧 */
    fixed: { type: [String, Boolean], default: 'right' },
    /* 列标题 Label 区域渲染使用的 Function */
    renderHeader: { type: Function, default: undefined },
    resizable: { type: Boolean, default: false }
  },
  computed: {
    useProp() {
      const props = {}
      if (this.label) props.label = this.label
      if (this.width) props.width = this.width
      if (this.fixed) props.fixed = this.fixed
      if (this.renderHeader) props.renderHeader = this.propRenderHeader
      if (this.resizable) props.resizable = this.resizable
      return props
    }
  },
  methods: {
    propRenderHeader(h, item) {
      return this.renderHeader ? this.renderHeader(h, item) : undefined
    }
  }
}
</script>
