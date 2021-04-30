<!-- 菜单 -->
<template>
  <div class="t-menu" :class="menuClassName">
    <slot></slot>
  </div>
</template>

<script>
import store from '../../../src/store'

export default {
  name: 'TMenu',
  props: {
    theme: { type: String }, // 主题
    data: { type: Array, required: true }, // 所有菜单 [ ** 不需要树结构 ]
    mode: { type: String, default: 'vertical' }, // 模式	horizontal / vertical
    collapse: { type: Boolean, default: false }, // 是否水平折叠收起菜单（仅在 mode 为 vertical 时可用）
    active: String, // 当前激活菜单的
    openeds: Array, // 当前打开的 sub-menu 的 index 的数组
    uniqueOpened: { type: Boolean, default: false }, // 是否只保持一个子菜单的展开
    menuTrigger: { type: String, default: 'hover' }, // 子菜单打开的触发方式(只在 mode 为 horizontal 时有效)	hover / click	hover
    router: { type: Boolean, default: false }, // 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转
    collapseTransition: { type: Boolean, default: true } // 是否开启折叠动画
  },
  computed: {
    menuClassName() {
      const className = []
      const { theme, mode, collapse, menuTrigger } = this
      if (theme) className.push(theme)
      if (collapse) className.push('t-menu--collapse')
      if (mode == 'vertical') className.push('t-menu--vertical')
      // if (mode == 'vertical-panel') className.push('t-menu--vertical-panel')
      if (menuTrigger == 'hover' && collapse) className.push('t-menu--hover')
      if (menuTrigger == 'click') className.push('t-menu--click')
      return className
    },
    hasInline() {
      return this.type === 'search' ? false : true
    }
  },
  mounted() {
    console.info('mounted:', this.uniqueOpened)
    this.$store.dispatch('INIT_MENU', {
      data: this.data,
      mode: this.mode,
      collapse: this.collapse,
      active: this.active,
      opened: this.opened,
      uniqueOpened: this.uniqueOpened,
      menuTrigger: this.menuTrigger,
      router: this.router,
      collapseTransition: this.collapseTransition
    })
  },
  store
}
</script>

<style lang="scss" scoped></style>
