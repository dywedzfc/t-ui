<template>
  <el-table-column type="index" v-bind="useProp" align="center" />
</template>

<script>
export default {
  name: 'TTableIndex',
  props: {
    label: { type: String, default: '序号' },
    width: { type: String, default: '80' },
    type: { type: String, default: undefined },
    fixed: { type: [String, Boolean], default: true },
    resizable: { type: Boolean, default: false }
  },
  data() {
    return { baseNumber: null }
  },
  computed: {
    useProp() {
      const props = {}
      props.index = this.resetIndex
      if (this.label) props.label = this.label
      if (this.width) props.width = this.width
      if (this.fixed) props.fixed = this.fixed
      if (this.resizable) props.resizable = this.resizable
      return props
    }
  },
  mounted() {
    this.resetBaseNumber()
  },
  watch: {
    '$parent.$parent.$data.currentPage'() {
      this.resetBaseNumber()
    }
  },
  methods: {
    resetIndex(index) {
      const flag = this.type == 'count' && this.baseNumber >= 0
      return (flag ? this.baseNumber : 0) + index + 1
    },
    resetBaseNumber() {
      if (this.$parent && this.$parent.$parent) {
        const tablePage = this.$parent.$parent
        if (tablePage.$props) {
          const pageSize = tablePage.$props.pageSize
          const page = tablePage.$data.currentPage
          if (pageSize && page) return (this.baseNumber = (page - 1) * pageSize), undefined
        }
      }
      this.baseNumber = null
    }
  }
}
</script>
