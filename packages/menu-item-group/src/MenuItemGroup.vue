<!-- 菜单项 -->
<template>
  <div class="t-menu-item-group" :class="{ 'type-title': type == 'title' }">
    <div class="t-menu-item-group__title">
      <i class="icon" :class="iconClassName"></i>
      <span class="title">{{ title }}</span>
    </div>
    <div class="t-menu-item-group__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { iconClassName } from '../../../src/utils'

export default {
  name: 'TMenuItemGroup',
  props: {
    title: String,
    icon: String,
    type: String
  },
  computed: {
    iconClassName() {
      return iconClassName(this.icon)
    }
  }
}
</script>

<style lang="scss" scoped></style>
