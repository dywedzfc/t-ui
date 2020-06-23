<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.parameter }}</td>
        <td>{{ item.directions }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.optional }}</td>
        <td>{{ item.default }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'TableProps',
  props: { data: Array }
}
</script>
