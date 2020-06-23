<template>
  <table class="table-props">
    <thead>
      <tr>
        <th>name</th>
        <th>说明</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in data" :key="index">
        <td>{{ item.name }}</td>
        <td>{{ item.directions }}</td>
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
