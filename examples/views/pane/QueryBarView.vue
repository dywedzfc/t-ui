<template>
  <div class="page-container">
    <h2>QueryBar 查询框</h2>
    <p>可用于表单查询。</p>
    <h3>QueryBar Attributes</h3>
    <table-props :data="tableAttributes" />
    <h3>Form-Item Attributes</h3>
    <table-props :data="tableFormItemAttributes" />
    <h3>Form-Item Slot</h3>
    <table-slot :data="tableFormItemSlots" />
    <h3>Form-Item Scoped Slot</h3>
    <table-slot :data="tableFormItemScopedSlots" />
    <h3>Form-Item Methods</h3>
    <table-slot :data="tableFormItemMethods" />
  </div>
</template>

<script>
import TableProps from '../../components/TableProps'
import TableSlot from '../../components/TableSlot'
import {
  attributes,
  formItemAttributes,
  formItemSlots,
  formItemScopedSlots,
  formItemMethods
} from '../../assets/config/query-bar.config'

export default {
  name: 'QueryBarView',
  components: { TableProps, TableSlot },
  computed: {
    tableAttributes() {
      return attributes
    },
    tableFormItemAttributes() {
      return formItemAttributes
    },
    tableFormItemSlots() {
      return formItemSlots
    },
    tableFormItemScopedSlots() {
      return formItemScopedSlots
    },
    tableFormItemMethods() {
      return formItemMethods
    }
  }
}
</script>
