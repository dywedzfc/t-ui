<template>
  <aside
    class="t-aside"
    :class="{ 'is-border': border, 'is-move': controlType == 'move' }"
    :style="{ width }"
    ref="aside"
  >
    <div class="t-aside-wrapper" v-if="display" ref="wrapper">
      <slot></slot>
    </div>
    <div
      class="t-aside-control-strip"
      :class="{
        'is-click': controlType === 'click',
        'is-move': controlType === 'move',
        'is-show': !display
      }"
      v-if="controlStrip"
      @mousedown="handleControlStripMousedown"
      ref="controlStrip"
    ></div>
  </aside>
</template>

<script>
import _ from 'underscore'

export default {
  name: 'TAside',
  props: {
    width: { type: String, default: '300px' },
    border: { type: Boolean, default: false },
    controlStrip: { type: Boolean, default: false },
    controlType: { type: String, default: 'click' }
  },
  data() {
    return {
      display: true,
      mouse: { down: false, point: null, width: null }
    }
  },
  computed: {
    frontAndBack() {
      const tags = _.map(this.$parent.$children, item => item.$options._componentTag)
      const uids = _.map(this.$parent.$children, item => item._uid)
      const currentIndex = _.indexOf(uids, this._uid)
      const bodyIndex = _.indexOf(tags, 't-body')
      return bodyIndex >= 0 && bodyIndex < currentIndex ? 'right' : 'left'
    }
  },
  mounted() {},
  methods: {
    handleDocumentMousemove() {
      const { down, width, point } = this.mouse
      if (!down) return
      const aside = this.$refs.aside
      // const wrapper = this.$refs.wrapper
      const controlStrip = this.$refs.controlStrip
      const csWidth = controlStrip.offsetWidth
      let newWidth = 0
      if (this.frontAndBack === 'right') {
        newWidth = width + (point - event.x)
        aside.style.width = newWidth < csWidth ? `${csWidth}px` : `${newWidth}px`
      } else {
        newWidth = width - (point - event.x)
        aside.style.width = newWidth < csWidth ? `${csWidth}px` : `${newWidth}px`
      }
      // console.info('move:', newWidth, wrapper.offsetWidth, wrapper.clientWidth)
      // if (newWidth < wrapper.offsetWidth) wrapper.style.overflo = 'hidden'
      // else wrapper.style.overflo = 'visible'
    },
    handleDocumentMouseup() {
      if (!this.mouse.down) return
      this.mouse.down = false
      const aside = this.$refs.aside
      aside.style['-webkit-user-select'] = null
      aside.style['-moz-user-select'] = null
      aside.style['-ms-user-select'] = null
      aside.style.userSelect = null
      let width = this.$refs.aside.offsetWidth + 'px'
      this.$refs.controlStrip.style.minWidth = null

      if (this.$listeners['update:width']) this.$emit('update:width', width)
      document.removeEventListener('mousemove', this.handleDocumentMousemove)
      document.removeEventListener('mousemove', this.handleDocumentMouseup)
    },
    handleControlStripMousedown() {
      this.mouse.down = true
      this.mouse.point = event.x
      this.mouse.width = this.$refs.aside.offsetWidth
      const controlStrip = this.$refs.controlStrip

      if (this.controlType === 'move') {
        const aside = this.$refs.aside
        aside.style['-webkit-user-select'] = 'none'
        aside.style['-moz-user-select'] = 'none'
        aside.style['-ms-user-select'] = 'none'
        aside.style.userSelect = null
        controlStrip.style.minWidth = controlStrip.offsetWidth - 2 + 'px'

        document.addEventListener('mousemove', this.handleDocumentMousemove)
        document.addEventListener('mouseup', this.handleDocumentMouseup)
      } else if (this.controlType === 'click') {
        controlStrip.addEventListener('mouseup', this.handleControlStripMouseup)
      }
    },
    handleControlStripMouseup() {
      let width = this.$refs.aside.offsetWidth + 'px'
      const csWidth = this.$refs.controlStrip.offsetWidth + 'px'
      this.display = !this.display
      if (this.display) width = this.width
      else width = csWidth
      this.$refs.aside.style.width = width
      const controlStrip = this.$refs.controlStrip
      controlStrip.removeEventListener('mouseup', this.handleControlStripMouseup)
    }

    // frontAndBack(aside) {
    //   const parentNode = aside.parentNode
    //   let hasBody = false
    //   let hasAside = false
    //   _.each(parentNode.children, item => {
    //     if (!hasBody && hasAside) return
    //     else if (item === aside) hasAside = true
    //     else if (item.className === 't-body') hasBody = true
    //   })
    //   return hasBody && hasAside ? 'last' : 'first'
    // }
  }
}
</script>
