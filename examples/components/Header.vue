<template>
  <div class="index-header">
    <div class="title">T-UI</div>
    <ul class="nav">
      <router-link
        class="nav-item"
        tag="li"
        :to="item.path"
        v-for="item in getSystemList"
        :key="item.id"
      >
        {{ item.title }}
      </router-link>
    </ul>
  </div>
</template>

<script>
import { getSystemList } from '../assets/js/menu'

export default {
  name: 'THeader',
  computed: {
    getSystemList
  }
}
</script>
