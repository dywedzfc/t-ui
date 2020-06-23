<template>
  <div class="page-container">
    <h2>Layout 边界布局</h2>
    <p>用于整体布局，方便快速搭建页面的基础结构。</p>
    <!-- <pre>
      <code class="code-bar">npm i element-ui -S</code>
    </pre> -->
    <h3>Layout Attributes</h3>
    <table-props :data="tableAttributes" />
  </div>
</template>

<script>
import TableProps from '../../components/TableProps'
import { attributes } from '../../assets/config/layout.config'

export default {
  name: 'LayoutView',
  components: { TableProps },
  computed: {
    tableAttributes() {
      return attributes
    }
  }
}
</script>
