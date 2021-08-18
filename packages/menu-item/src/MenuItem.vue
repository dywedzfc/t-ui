<!-- 菜单项 -->

<script>
import { mapGetters } from 'vuex'
import store from '../../../src/store'
import { iconClassName } from '../../../src/utils'

export default {
  name: 'TMenuItem',
  props: {
    id: String,
    title: String,
    icon: String,
    path: String,
    pid: String,
    type: String,
    auth: [String, Array],
    disabled: Boolean
  },
  computed: {
    ...mapGetters(['menu']),
    hasActiveMenuItem() {
      return this.path == this.$route.path
    },
    hasCollapse() {
      const { collapse } = this.menu
      if (!this.$parent.$el || !this.$parent.$el.className) return false
      const { className } = this.$parent.$el
      return collapse && className.includes('t-menu--collapse')
    },
    iconClassName() {
      return iconClassName(this.icon)
    }
  },
  methods: {
    handleMenuItem() {
      const { router, collapse, menuTrigger, openeds } = this.menu
      const { id, title, icon, path, pid } = this
      this.$store.commit('SET_MENU_ACTIVE', { id, pid })
      if (path && router && path != this.$route.path) this.$router.push(path)
      if (this.$listeners['select']) this.$emit('select', { id, title, icon, path, pid })
      if (collapse && menuTrigger == 'click') this.$store.commit('SET_MENU_OPENED', openeds)
    }
  },
  render(h) {
    const menuItemContent = [
      h('i', { class: ['icon', this.iconClassName] }),
      h('span', { class: 'title' }, this.title)
    ]
    const menuItem = h(
      'div',
      {
        class: ['t-menu-item', { 'is-active': this.hasActiveMenuItem }],
        on: { click: this.handleMenuItem }
      },
      menuItemContent
    )
    // return menuItem
    if (this.hasCollapse)
      return h(
        'el-tooltip',
        {
          class: ['t-menu-item', { 'is-active': this.hasActiveMenuItem }],
          props: { content: this.title },
          on: { click: this.handleMenuItem }
        },
        menuItemContent
      )
    return menuItem
  },
  store
}
</script>

<style lang="scss" scoped></style>
