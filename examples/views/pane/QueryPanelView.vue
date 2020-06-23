<template>
  <div class="page-container">
    <h2>QueryPanel 查询面板</h2>
    <p>将查询与展示信息聚合在容器中展示。</p>
    <h3>QueryPanel Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3>QueryPanel Slot</h3>
    <table-slot :data="tableSlots" />
  </div>
</template>

<script>
import TableProps from '../../components/TableProps'
import TableSlot from '../../components/TableSlot'
import { attributes, slots } from '../../assets/config/query-panel.config'

export default {
  name: 'QueryPanelView',
  components: { TableProps, TableSlot },
  computed: {
    tableAttributes() {
      return attributes
    },
    tableSlots() {
      return slots
    }
  }
}
</script>
