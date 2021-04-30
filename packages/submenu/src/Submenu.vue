<!-- 菜单-子菜单容器 -->
<template>
  <div
    class="t-submenu"
    :class="{ 'is-opened': menu.opened.includes(id) }"
    @mouseenter="handleSubmenuMouseenter"
    @mouseleave="handleSubmenuMouseleave"
    ref="submenu"
  >
    <el-tooltip :content="title" placement="right" v-if="hasCollapseClick">
      <div class="t-submenu__title" @click="handleSubmenuTitleClick">
        <i class="icon" :class="iconClassName"></i>
        <span class="title">{{ title }}</span>
        <i class="t-submenu__icon-arrow el-icon-arrow-down"></i>
      </div>
    </el-tooltip>
    <div v-else class="t-submenu__title" @click="handleSubmenuTitleClick">
      <i class="icon" :class="iconClassName"></i>
      <span class="title">{{ title }}</span>
      <i class="t-submenu__icon-arrow el-icon-arrow-down"></i>
    </div>
    <transition name="t-submenu-wrapper">
      <div
        class="t-submenu__wrapper t-menu t-menu--inline"
        v-if="menu.opened.includes(id)"
        ref="submenuWrapper"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
// import _ from 'underscore'
import { mapGetters } from 'vuex'
import store from '../../../src/store'
import { iconClassName } from '../../../src/utils'

export default {
  name: 'TSubmenu',
  data() {
    return {
      height: 0
    }
  },
  props: {
    id: String,
    title: String,
    icon: String,
    pid: String,
    type: String,
    auth: String,
    disabled: Boolean
  },
  computed: {
    ...mapGetters(['menu']),
    iconClassName() {
      return iconClassName(this.icon)
    },
    hasCollapseClick() {
      const { collapse, menuTrigger } = this.menu

      // if (!this.$parent.$el || !this.$parent.$el.className) return false
      let className = this.parentTag
      const notOpened = !this.menu.opened.includes(this.id)
      const clickType = className && className.includes('t-menu--click')

      return collapse && menuTrigger == 'click' && clickType && notOpened
    },
    parentTag() {
      let className = ''

      // 父级标签的类名
      const getParentTag = parent =>
        parent.$el ? parent.$el.className : parent.className ? parent.className : ''

      // 判断父级标签的类名
      //   ==> 如果父级标签是"TMenuItemAuto",再向上查找一级。
      if (this.$parent && this.$parent.$data && this.$parent.$data.$name === 'TMenuItemAuto')
        className = getParentTag(this.$parent.$parent)
      else className = getParentTag(this.$parent)

      return className
    }
  },
  watch: {},
  methods: {
    handleSubmenuMouseenter() {
      const { collapse, menuTrigger } = this.menu
      const { className } = this.$parent.$el
      if (collapse && menuTrigger == 'hover' && className.includes('t-menu--hover')) {
        this.$store.commit('SET_MENU_OPENED', this.id)
        this.showSubmenuWrapper()
      }
    },
    handleSubmenuMouseleave() {
      const { collapse, menuTrigger } = this.menu
      const { className } = this.$parent.$el
      if (collapse && menuTrigger == 'hover' && className.includes('t-menu--hover')) {
        this.$store.commit('SET_MENU_OPENED', this.menu.opened)
      }
    },
    handleSubmenuTitleClick() {
      const { collapse, menuTrigger } = this.menu
      const { className } = this.$parent.$el
      if (collapse && menuTrigger == 'hover' && className.includes('t-menu--hover')) return
      this.$store.commit('SET_MENU_OPENED', this.id)
      // if (this.menu.menuTrigger == 'click') this.showSubmenuWrapper()
    },

    showSubmenuWrapper() {
      this.$nextTick(() => {
        const { collapse, mode } = this.menu
        const el_s = this.$refs['submenu']
        const el = this.$refs['submenuWrapper']
        if (el && collapse && mode == 'vertical')
          this.$refs['submenuWrapper'].style.top = el_s.offsetTop + 'px'
      })
    }
  },
  store
}
</script>

<style lang="scss" scoped></style>
