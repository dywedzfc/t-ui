<template>
  <el-table-column type="selection" v-bind="useProp" align="center" />
</template>

<script>
export default {
  name: 'TTableCheckbox',
  props: {
    width: { type: String, default: '60' },
    fixed: { type: [String, Boolean], default: undefined },
    resizable: { type: Boolean, default: false }
  },
  computed: {
    useProp() {
      const props = {}
      if (this.width) props.width = this.width
      if (this.fixed) props.fixed = this.fixed
      if (this.resizable) props.resizable = this.resizable
      return props
    }
  }
}
</script>
