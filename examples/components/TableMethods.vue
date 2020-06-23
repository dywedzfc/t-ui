<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>方法名</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.directions }}</td>
        <td>{{ item.parameter }}</td>
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
