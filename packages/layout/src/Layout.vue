<!-- 边界布局 -->
<template>
  <div
    class="t-layout"
    :class="{
      't-drag': footerOption.mousedown,
      't-border': border,
      't-overflow': lockSize
    }"
    @mouseup="handleLayoutMouseup"
    @mousemove="handleLayoutMousemove"
  >
    <div
      :class="['t-layout-header', headerClass, { 't-border': innterBorder }]"
      v-if="headerCenter"
      ref="header"
      :style="layoutHeaderHeigth"
    >
      <slot name="header"></slot>
    </div>
    <div
      :class="['t-layout-left', { 't-border': innterBorder, hidden: hidden.left }]"
      v-if="$slots.left"
      :style="layoutLeftWidth"
    >
      <div class="t-layout-wrapper">
        <slot name="left"></slot>
      </div>
      <div class="t-control-strip" v-if="leftStrip" @click="handleControlLeftClick"></div>
    </div>
    <div class="t-layout-body" v-if="$slots.default" :style="layoutBodyStyle">
      <slot></slot>
    </div>
    <div
      :class="['t-layout-right', { 't-border': innterBorder, hidden: hidden.right }]"
      v-if="$slots.right"
      :style="layoutRightWidth"
    >
      <div class="t-layout-wrapper">
        <slot name="right"></slot>
      </div>
      <div class="t-control-strip" v-if="rightStrip" @click="handleControlRightClick"></div>
    </div>
    <div
      :class="[
        't-layout-footer',
        {
          't-border': innterBorder,
          't-control': footerStrip,
          't-selected': footerOption.mousedown
        }
      ]"
      v-if="$slots.footer"
      :style="layoutFooterHeigth"
    >
      <slot name="footer"></slot>
      <div class="t-control-strip" v-if="footerStrip" @mousedown="handleFooterStripMousedown"></div>
    </div>
  </div>
</template>

<script>
import { hasNumber, styleValueToInt } from 'util'
export default {
  name: 'TLayout',
  props: {
    /** 是否显示边框线 */
    border: {
      type: Boolean,
      default: false
    },
    /** 是否显示内部边框线 */
    innterBorder: {
      type: Boolean,
      default: false
    },
    /** 是否锁定内部面板大小 */
    lockSize: {
      type: Boolean,
      default: false
    },
    /** 头部高度 */
    header: {
      type: [String, Number],
      default: 50
    },
    /** 头部class name */
    headerClass: {
      type: String,
      default: ''
    },
    headerAuto: {
      type: Boolean,
      default: false
    },
    /** 左侧面板宽度 */
    left: {
      type: [String, Number],
      default: 300
    },
    leftStrip: {
      type: Boolean,
      default: false
    },
    /** 右侧面板宽度 */
    right: {
      type: [String, Number],
      default: 300
    },
    rightStrip: {
      type: Boolean,
      default: false
    },
    /** 底部面板高度 */
    footer: {
      type: [String, Number],
      default: 40
    },
    /** 是否开启底部面板拖拽条 */
    footerStrip: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasLockSize: false,
      headerHeight: 0,
      layoutSize: {
        left: JSON.parse(this.left),
        right: JSON.parse(this.right),
        header: JSON.parse(this.header),
        footer: JSON.parse(this.footer)
      },
      hidden: { left: false, right: false },
      footerOption: {
        mousedown: false,
        mousePoint: null,
        offset: 0
      }
    }
  },
  computed: {
    headerCenter() {
      this.$nextTick(() => {
        /* eslint-disable */
        if (this.headerAuto) this.headerHeight = this.$refs.header.offsetHeight || 0
      })
      return this.$slots.header
    },
    /** 左侧面板宽度 */
    layoutLeftWidth() {
      const style = this.layoutLeftOfRightPanelHeight()
      const width = this.layoutPanelSize('left')
      if (this.$slots.left) style.width = this.hidden.left ? 0 : width

      return style
    },
    /** 右侧面板宽度 */
    layoutRightWidth() {
      const style = this.layoutLeftOfRightPanelHeight()
      const width = this.layoutPanelSize('right')
      if (this.$slots.right) style.width = this.hidden.right ? 0 : width
      return style
    },
    /** 头部面板高度 */
    layoutHeaderHeigth() {
      const style = {}
      if (this.headerAuto) return style
      const height = this.layoutPanelSize('header')
      if (this.$slots.header) style.height = height
      return style
    },
    /** 底部面板高度 */
    layoutFooterHeigth() {
      const style = {}
      const height = this.layoutPanelSize('footer')
      const intFooter = styleValueToInt(height)
      const offset = this.footerOption.offset
      if (this.$slots.footer) style.height = offset !== 0 ? intFooter + offset + 'px' : height
      return style
    },
    /** 主体面板样式 */
    layoutBodyStyle() {
      const style = this.layoutBodyWidth()
      return this.layoutBodyHeight(style)
    }
  },
  watch: {
    /** 锁定内部面板-传出数据 */
    hasLockSize(value) {
      if (value === true) {
        setTimeout(() => {
          if (this.$listeners['update:lock-size']) this.$emit('update:lock-size', false)
        }, 1000)
      }
    },
    /** 锁定内部面板-传入数据 */
    lockSize: {
      handler(value) {
        this.hasLockSize = value
      },
      immediate: true
    },
    left(value) {
      this.layoutSize.left = JSON.parse(value)
    },
    right(value) {
      this.layoutSize.right = JSON.parse(value)
    },
    header(value) {
      this.layoutSize.header = JSON.parse(value)
    },
    footer(value) {
      this.layoutSize.footer = JSON.parse(value)
    },
    'layoutSize.left'(value) {
      if (this.$listeners['update:left-widht']) this.$emit('update:left-width', value)
    },
    'layoutSize.right'(value) {
      if (this.$listeners['update:right-widht']) this.$emit('update:right-width', value)
    },
    'layoutSize.header'(value) {
      if (this.$listeners['update:header-widht']) this.$emit('update:header-width', value)
    },
    'layoutSize.footer'(value) {
      if (this.$listeners['update:footer-widht']) this.$emit('update:footer-width', value)
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.headerAuto) {
        this.headerHeight = this.$refs.header.offsetHeight || 0
        window.onresize = () => {
          this.headerHeight = this.$refs.header.offsetHeight || 0
        }
      }
    })
  },
  methods: {
    /** 鼠标移动事件-鼠标移动的位置 */
    handleLayoutMousemove() {
      const { y } = event
      if (this.$slots.footer) {
        const { mousedown, mousePoint } = this.footerOption
        if (mousedown) {
          this.footerOption.offset = mousePoint - y
        }
      }
    },
    /** 鼠标抬起事件-鼠标最后的位置 */
    handleLayoutMouseup() {
      if (this.$slots.footer) {
        if (this.footerOption.mousedown) {
          if (this.footerOption.offset !== 0) {
            const footer = this.layoutPanelSize('footer')
            const intFooter = styleValueToInt(footer)
            this.layoutSize.footer = intFooter + this.footerOption.offset + 'px'
          }
          this.footerOption.offset = 0
          this.footerOption.mousedown = false
          this.footerOption.mousePoint = null
        }
      }
    },
    handleControlLeftClick() {
      if (this.hasLockSize) return
      this.hidden.left = !this.hidden.left
      if (this.$listeners['control-left-click']) this.$emit('control-left-click')
    },
    handleControlRightClick() {
      if (this.hasLockSize) return
      this.hidden.right = !this.hidden.right
      if (this.$listeners['control-right-click']) this.$emit('control-right-click')
    },
    /** 鼠标按下事件-记录鼠标位置 */
    handleFooterStripMousedown() {
      if (this.hasLockSize) return
      this.footerOption.mousedown = true
      this.footerOption.mousePoint = event.y
    },
    /** 判断是否带单位 */
    layoutPanelSize(type) {
      if (hasNumber(this.layoutSize[type])) return this.layoutSize[type] + 'px'
      return this.layoutSize[type]
    },
    /** 左侧或者右侧面板高度 */
    layoutLeftOfRightPanelHeight(style = {}) {
      let header = this.layoutPanelSize('header')
      if (this.headerAuto) header = `${this.headerHeight}px`
      const footer = this.layoutPanelSize('footer')
      const intFooter = styleValueToInt(footer)
      const offset = this.footerOption.offset
      const footerStrip = offset !== 0 ? intFooter + offset + 'px' : footer
      if (this.$slots.header && this.$slots.footer)
        style.height = `calc(100% - (${(style.top = header)} + ${footerStrip}))`
      else if (this.$slots.header) style.height = `calc(100% - ${(style.top = header)})`
      else if (this.$slots.footer) style.height = `calc(100% - ${footerStrip})`
      return style
    },
    /** 底部面板宽度 */
    layoutBodyWidth(style = {}) {
      const left = this.hidden.left ? 0 : this.layoutPanelSize('left')
      const right = this.hidden.right ? 0 : this.layoutPanelSize('right')
      // const intLeft = this.hidden.left ? 0 : styleValueToInt(left)
      // const intRight = this.hidden.right ? 0 : styleValueToInt(right)
      const leftType = left != 0
      const rightType = right != 0
      if (this.$slots.left && this.$slots.right) {
        style.marginLeft = left
        style.marginRight = right
        if (leftType && rightType) style.width = `calc(100% - (${left} + ${right}))`
        else if (leftType) style.width = `calc(100% - ${left})`
        else if (rightType) style.width = `calc(100% - ${right})`
      } else if (this.$slots.left) {
        style.marginLeft = left
        style.width = leftType ? `calc(100% - ${left})` : '100%'
      } else if (this.$slots.right) {
        style.marginRight = right
        style.width = rightType ? `calc(100% - ${right})` : '100%'
      }
      return style
    },
    /** 主体面板高度 */
    layoutBodyHeight(style = {}) {
      let header = this.layoutPanelSize('header')
      if (this.headerAuto) header = `${this.headerHeight}px`
      const footer = this.layoutPanelSize('footer')
      const intHeader = styleValueToInt(header)
      const intFooter = styleValueToInt(footer)
      const offset = this.footerOption.offset
      const footerStrip = offset !== 0 ? intFooter + offset + 'px' : footer
      const flag = intHeader > 0 || intFooter > 0
      if (this.$slots.header && this.$slots.footer && flag) {
        style.height = `calc(100% - (${header} + ${footerStrip}))`
      } else if (this.$slots.header && intHeader > 0) style.height = `calc(100% - ${header})`
      else if (this.$slots.footer && intFooter > 0) style.height = `calc(100% - ${footerStrip})`
      return style
    },
    layoutSlotBody() {
      const bodyer = this.$slots.default
      const bodyType = ['t-layout', 't-tabs-panel']
      if (bodyer.length === 1 && bodyType.indexOf(bodyer[0].elm.className) === 0) {
      }
    },
    /** 验证样式的值 */
    regStyleValue(value) {
      const regString = /^[0-9]+px$/
      const regNumber = /^[0-9]+$/
      if (regNumber.test(value)) return `${value}px`
      if (regString.test(value)) return value
      return ''
    }
  },
  render(h) {
    const header = (
      <div
        class={['t-layout-header', this.headerClass]}
        style={this.layoutHeaderHeigth}
        ref="header"
      >
        {this.$slots.header}
      </div>
    )
    const left = (
      <div class={['t-layout-left']} style={this.layoutLeftWidth}>
        {this.$slots.left}
        {this.leftStrip && <div class="t-control-strip"></div>}
      </div>
    )
    const right = (
      <div class={['t-layout-right']} style={this.layoutLeftWidth}>
        {this.$slots.right}
        {this.rightStrip && <div class="t-control-strip"></div>}
      </div>
    )
    const footer = (
      <div
        class={{
          't-layout-footer': true,
          't-control': this.footerStrip,
          't-selected': this.footerOption.mousedown
        }}
        style={this.layoutFooterHeigth}
      >
        {this.$slots.footer}
        {this.footerStrip && (
          <div class="t-control-strip" on-mousedown={this.handleFooterStripMousedown}></div>
        )}
      </div>
    )
    const bodyer = (
      <div class={['t-layout-body']} style={layoutBodyStyle}>
        {this.$slots.default}
      </div>
    )

    reutrn(
      <div
        class={{
          't-layout': true,
          't-border': this.border,
          't-drag': this.footerOption.mousedown
        }}
        on-mouseup={this.handleLayoutMouseup}
        on-mousemove={this.handleLayoutMousemove}
      >
        {this.headerCenter && header}
        {this.$slots.left && left}
        {this.$slots.default && bodyer}
        {this.$slots.right && right}
        {this.$slots.footer && footer}
      </div>
    )
  }
}
</script>
