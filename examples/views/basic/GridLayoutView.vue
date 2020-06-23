<template>
  <div class="page-container">
    <h2>GridLayout 网格布局</h2>
    <p>用于整体布局，方便快速搭建页面的网格结构。</p>
    <h3>GridLayout Attributes</h3>
    <table-props :data="tableAttributes" />
  </div>
</template>

<script>
import TableProps from '../../components/TableProps'
import { attributes } from '../../assets/config/grid-layout.config'

export default {
  name: 'GridLayoutView',
  components: { TableProps },
  computed: {
    tableAttributes() {
      return attributes
    }
  }
}
</script>
