<template>
  <t-layout class="index-wrapper" header="80" left="240">
    <template v-slot:header>
      <t-header></t-header>
    </template>
    <template v-slot:left>
      <div class="index-menu">
        <template v-for="item in menu">
          <router-link
            class="index-menu-item"
            v-if="item.type !== 'title' && item.type !== 'group'"
            tag="div"
            :to="item.path"
            :key="item.id"
          >
            {{ capitalize(item.id) }} {{ item.title }}
          </router-link>
          <div class="index-menu-item nav__title" v-else-if="item.type === 'title'" :key="item.id">
            {{ capitalize(item.title) }}
          </div>
          <div class="index-menu-item nav__group" v-else :key="item.id">
            {{ capitalize(item.title) }}
          </div>
        </template>
      </div>
    </template>
    <div class="index-body">
      <router-view />
    </div>
  </t-layout>
</template>

<script>
import THeader from '../components/Header'
import { getMenuList } from '../assets/js/menu'

export default {
  name: 'Index',
  components: { THeader },
  data() {
    return {
      menu: []
    }
  },
  mounted() {
    this.menu = getMenuList()
  },
  methods: {
    capitalize(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
