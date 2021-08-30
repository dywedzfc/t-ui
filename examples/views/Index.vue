<template>
  <t-layout class="index-wrapper" header="80" left="240" border>
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
import _ from 'underscore'
import axios from 'axios'
import THeader from '../components/Header'
import { getMenuList } from '../assets/js/menu'

export default {
  name: 'Index',
  components: { THeader },
  data() {
    return {
      type: 1,
      menu: [],
      table: {
        loading: false,
        data: [],
        page: 1,
        pageSize: 10,
        total: 0,
        firstPage: false
      }
    }
  },
  computed: {},
  watch: {
    $route: {
      handler(route) {
        const pathList = _.filter(route.path.split('/'))
        this.menu = getMenuList((pathList.length ? pathList[0] : '') || route.name)
      },
      immediate: true
    }
  },
  mounted() {},
  methods: {
    getSystemLog() {
      const { page, pageSize } = this.table
      axios
        .get('http://192.168.11.238:8095/ibike/user/getUserOperationLog', {
          params: { username: '', stime: '', etime: '', page, pageSize }
        })
        .then(res => {
          this.table.total = res.data.obj.count
          this.table.data = res.data.obj.result
        })
    },

    capitalize(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    },
    handleUpdateClick() {
      this.type = 1
      const data = []
      this.table.loading = true
      this.table.firstPage = true
      for (let i = 0; i < 100; i++) {
        data.push({
          id: i + 1,
          name: '张三' + i,
          username: '15555555555',
          gender: '男',
          birthday: 1589731200000,
          company: '交通局',
          duties: '6',
          education: '研究生',
          politic: '党员',
          power: '1',
          password: '123456'
        })
      }
      this.table.data = data
      this.table.loading = false
      setTimeout(() => (this.table.firstPage = false))
    },
    handleUpdateClick2() {
      this.type = 1
      const data = []
      this.table.loading = true
      for (let i = 0; i < 80; i++) {
        data.push({
          id: i + 1,
          name: '张三' + i,
          username: '15555555555',
          gender: '男',
          birthday: 1589731200000,
          company: '交通局',
          duties: '6',
          education: '研究生',
          politic: '党员',
          power: '1',
          password: '123456'
        })
      }
      this.table.data = data
      this.table.loading = false
    },
    handleUpdateClick3() {
      this.type = 2
      this.getSystemLog()
    },
    handleTableCurrentChange({ currentPage }) {
      this.table.page = currentPage
      this.getSystemLog()
    },

    formatterDuties(__, ___, value) {
      console.info('formatter:', __, ___)
      if (value == 6) return '六号测试'
      return '测试'
    }
  }
}
</script>

<style lang="scss" scoped>
.index-body {
  position: relative;
  height: 100%;
}
.flex-wrapper {
  font-size: 14px;
}
</style>
