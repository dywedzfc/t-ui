<!-- 菜单项:submenu to menu-itme -->
<template>
  <t-submenu v-if="children && children.length" v-bind="menuItemProps">
    <slot></slot>
  </t-submenu>
  <el-tooltip v-else-if="hasCollapseClick" content="首页" placement="right">
    <t-menu-item v-bind="menuItemProps" @select="handleMenuItem"></t-menu-item>
  </el-tooltip>
  <t-menu-item v-else v-bind="menuItemProps" @select="handleMenuItem"></t-menu-item>
</template>

<script>
import { mapGetters } from 'vuex'
import store from '../../../src/store'

export default {
  name: 'TMenuItemAuto',
  props: {
    id: String,
    title: String,
    icon: String,
    pid: String,
    type: String,
    path: String,
    auth: [String, Array],
    disabled: Boolean,
    children: Array
  },
  data() {
    return { $name: 'TMenuItemAuto' }
  },
  computed: {
    ...mapGetters(['menu']),
    menuItemProps() {
      const { id, title, icon, pid, type, path, auth, disabled } = this
      return { id, title, icon, pid, type, path, auth, disabled }
    },
    hasCollapseClick() {
      const { collapse } = this.menu
      if (!this.$parent.$el || !this.$parent.$el.className) return false
      const { className } = this.$parent.$el
      return collapse && className && className.includes('t-menu--collapse')
    }
  },
  methods: {
    handleMenuItem(props) {
      if (this.$listeners['select']) this.$emit('select', props)
    }
  },
  store
}
</script>

<style lang="scss" scoped></style>
