<!-- 对话框 -->
<template>
  <el-dialog
    :class="['t-dialog t-move', { minimize, maximize }]"
    :visible.sync="display"
    :title="title"
    :width="width"
    :fullscreen="maximize"
    top="0"
    :modal="modal"
    :append-to-body="appendToBody"
    :modal-append-to-body="modalAppendToBody"
    :lock-scroll="lockScroll"
    :custom-class="customClass"
    :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape"
    :show-close="showClose"
    :before-close="beforeClose"
    :center="center"
    :destroy-on-close="destroyOnClose"
    @open="handleDialogOpen"
    @opened="handleDialogOpened"
    @close="handleDialogClose"
    @closed="handleDialogClosed"
    ref="dialog"
  >
    <template v-slot:title :is="$slots.title">
      <div class="el-dialog__title" v-if="$slots.title">
        <slot name="title"></slot>
      </div>
      <div class="t-dialog__tool">
        <div
          class="t-dialog__minimize el-icon el-icon-bottom-left"
          @click="handleMinimizeClick"
        ></div>
        <div
          class="t-dialog__maximize el-icon el-icon-full-screen"
          @click="handleMaximizeClick"
          @mousedown.stop
        ></div>
      </div>
    </template>
    <slot></slot>
    <template v-slot:footer :is="$slots.footer">
      <slot name="footer"></slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'TDialog',
  props: {
    visible: Boolean,
    title: String,
    width: String,
    fullscreen: Boolean,
    minscreen: Boolean,
    top: String,
    modal: { type: Boolean, default: true },
    modalAppendToBody: { type: Boolean, default: true },
    lockScroll: { type: Boolean, default: true },
    customClass: String,
    closeOnClickModal: { type: Boolean, default: false },
    closeOnPressEscape: { type: Boolean, default: true },
    showClose: { type: Boolean, default: true },
    beforeClose: Function,
    center: Boolean,
    destroyOnClose: Boolean
  },
  data() {
    return {
      display: false,
      className: {
        dialog: '.el-dialog',
        header: '.el-dialog__header'
      },
      position: {
        flag: false,
        x: '',
        y: '',
        top: '',
        left: ''
      },
      appendToBody: true,
      maximize: false,
      minimize: false
    }
  },
  computed: {
    topNumber() {
      return this.toNumber(this.position.top)
    },
    leftNumber() {
      return this.toNumber(this.position.left)
    }
  },
  watch: {
    display(value) {
      if (this.$listeners['update:visible']) this.$emit('update:visible', value)
    },
    visible: {
      handler(value) {
        this.display = value
      },
      immediate: true
    },
    fullscreen: {
      handler(value) {
        this.maximize = value
      },
      immediate: true
    },
    maximize(value) {
      if (this.$listeners['update:fullscreen']) this.$emit('update:fullscreen', value)
    },
    minscreen: {
      handler(value) {
        // if (tag) {
        if (this.minimize && value != this.minimize) {
          document.querySelector('.t-dialog-button__minimize').remove()
          document.querySelector('.v-modal').style.display = null
          this.minimize = false
          // }
        } else this.minimize = value
      },
      immediate: true
    },
    minimize(value) {
      if (this.$listeners['update:minscreen']) this.$emit('update:minscreen', value)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initPosition()
      const dialog = this.$refs['dialog'].$el
      dialog.addEventListener('DOMNodeRemoved', () => {
        if (this.minimize) document.querySelector('.t-dialog-button__minimize').remove()
      })
      window.addEventListener('resize', () => {
        const dialogTag = dialog.querySelector(this.className.dialog)
        const { offsetWidth: bodyWidth, offsetHeight: bodyHeight } = document.body
        const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = dialogTag
        if (offsetTop + offsetHeight > bodyHeight) this.position.top = bodyHeight - offsetHeight
        if (offsetLeft + offsetWidth > bodyWidth) this.position.left = bodyWidth - offsetWidth
        dialogTag.style.top = this.position.top + 'px'
        dialogTag.style.left = this.position.left + 'px'
      })
    })
  },
  methods: {
    handleDialogOpen() {
      if (this.$listeners['open']) this.$emit('open')
    },
    handleDialogOpened() {
      if (this.$listeners['opened']) this.$emit('opened')
      this.$nextTick(() => {
        this.dialogHeaderEvent()
      })
    },
    handleMinimizeClick() {
      if (this.$listeners['before-minimize']) this.$emit('before-minimize')
      this.minimize = true
      document.querySelector('.v-modal').style.display = 'none'
      this.initMinimizeButton()
      if (this.$listeners['minimized']) this.$emit('minimized')
    },
    handleMaximizeClick() {
      this.maximize = !this.maximize
      const dialogTag = this.$refs['dialog'].$el.querySelector(this.className.dialog)
      const position = dialogTag.attributes['data-position']
      if (this.maximize) {
        const { top, left } = dialogTag.style
        dialogTag.attributes['data-position'] = `${top},${left}`
        dialogTag.style.top = null
        dialogTag.style.left = null
      } else if (position) {
        const [top, left] = position.split(',')
        if (top) dialogTag.style.top = top
        if (left) dialogTag.style.left = left
        dialogTag.attributes['data-position'] = undefined
      }
    },
    handleDialogClose() {
      console.info('close:')
      if (this.$listeners['close']) this.$emit('close')
    },
    handleDialogClosed() {
      console.info('closed:')
      if (this.$listeners['closed']) this.$emit('closed')
      this.dialogHeaderEvent('remove')
      this.dragMoveRemoveStyle('clear')
    },
    handleShowDialog() {
      this.minimize = false
      document.querySelector('.v-modal').style.display = null
      const tag = document.querySelector('.t-dialog-button__minimize')
      if (tag) tag.remove()
    },
    handleHeaderMousedown(e) {
      const { pageX, pageY } = e
      const { dialog } = this.className
      const dialogTag = this.$refs['dialog'].$el.querySelector(dialog)
      if (!dialogTag.style.position) dialogTag.style.position = 'relative'
      this.position.x = pageX
      this.position.y = pageY
      this.position.flag = true
      if (!this.maximize) this.dragMoveAddStyle()
    },
    handleHeaderMouseup() {
      if (!this.position.flag) return
      const { dialog } = this.className
      this.position.flag = false
      this.position.x = ''
      this.position.y = ''
      const dialogTag = this.$refs['dialog'].$el.querySelector(dialog)

      const { top, left } = dialogTag.style
      this.position.top = parseInt(top)
      this.position.left = parseInt(left)
      this.dragMoveRemoveStyle()
    },
    handleHeaderMousemove(e) {
      const { flag, x, y } = this.position
      if (this.maximize || !flag) return
      const { pageX, pageY } = e
      const { dialog } = this.className
      const { topNumber, leftNumber } = this

      const dialogTag = this.$refs['dialog'].$el.querySelector(dialog)
      const { offsetWidth: bodyWidth, offsetHeight: bodyHeight } = document.body
      const { offsetTop, offsetLeft, offsetWidth, offsetHeight } = dialogTag
      const position_b = pageY - (pageY - offsetTop) + offsetHeight
      const position_r = pageX - (pageX - offsetLeft) + offsetWidth

      if (offsetTop == 1 || bodyHeight == position_b) {
        this.position.y = pageY
        this.position.top = parseInt(dialogTag.style.top)
      }
      if (offsetLeft == 1 || bodyWidth - 1 == position_r) {
        this.position.x = pageX
        this.position.left = parseInt(dialogTag.style.left)
      }

      if (offsetTop < 1) dialogTag.style.top = 1 + 'px'
      else if (bodyHeight - position_b <= 0 && this.position.y - pageY < 0)
        dialogTag.style.top = bodyHeight - offsetHeight + 'px'
      else dialogTag.style.top = topNumber + pageY - y + 'px'

      if (offsetLeft < 1) dialogTag.style.left = 1 + 'px'
      else if (bodyWidth - position_r <= 0 && this.position.x - pageX < 0)
        dialogTag.style.left = bodyWidth - offsetWidth - 1 + 'px'
      else dialogTag.style.left = leftNumber + pageX - x + 'px'
    },
    dialogHeaderEvent(type = 'add') {
      const { header } = this.className
      const { handleHeaderMousedown, handleHeaderMouseup, handleHeaderMousemove } = this
      const bodyTag = document.body
      const headerTag = this.$refs['dialog'].$el.querySelector(header)
      if (type === 'add') {
        headerTag.addEventListener('mousedown', handleHeaderMousedown, false)
        bodyTag.addEventListener('mousemove', handleHeaderMousemove, false)
        bodyTag.addEventListener('mouseup', handleHeaderMouseup, false)
      } else if (type === 'remove') {
        headerTag.removeEventListener('mousedown', handleHeaderMousedown, false)
        bodyTag.removeEventListener('mousemove', handleHeaderMousemove, false)
        bodyTag.removeEventListener('mouseup', handleHeaderMouseup, false)
      }
    },
    dragMoveAddStyle() {
      const { header } = this.className
      const headerTag = this.$refs['dialog'].$el.querySelector(header)
      headerTag.style.cursor = 'move'
      headerTag.style.userSelect = 'none'
    },
    dragMoveRemoveStyle(type) {
      const { header } = this.className
      const headerTag = this.$refs['dialog'].$el.querySelector(header)
      headerTag.style.cursor = ''
      headerTag.style.userSelect = ''
      if (type === 'clear') {
        this.position.flag = false
        this.position.x = ''
        this.position.y = ''
        // this.position.top = ''
        // this.position.left = ''
      }
    },
    toNumber(value) {
      return value ? parseInt(value) : 0
    },
    initPosition() {
      const { offsetWidth, offsetHeight } = document.body
      const dialogTag = this.$refs['dialog'].$el.querySelector(this.className.dialog)

      if (!this.top || this.top.indexOf('%') > 0 || this.top.indexOf('vh') > 0) {
        if (this.top) this.position.top = offsetHeight / (100 / parseInt(this.top))
        else this.position.top = offsetHeight / (100 / 15)
      } else if (this.top.indexOf('px') > 0) this.position.top = parseInt(this.top)
      dialogTag.style.top = this.position.top + 'px'

      if (this.width) {
        if (this.width.indexOf('%') > 0 && this.width.indexOf('vw') > 0)
          this.position.left = (offsetWidth - offsetWidth * (parseInt(this.width) / 100)) / 2
        else if (this.width.indexOf('px') > 0)
          this.position.left = (offsetWidth - parseInt(this.width)) / 2
      } else this.position.left = (offsetWidth - dialogTag.offsetWidth) / 4
      dialogTag.style.left = this.position.left + 'px'
    },
    initMinimizeButton() {
      let tag = document.querySelector('.t-dialog-button__minimize')
      if (tag) tag.remove()
      const span = document.createElement('span')
      span.classList.add('text')
      span.innerText = this.title
      tag = document.createElement('div')
      tag.classList.add('t-dialog-button__minimize')
      tag.append(span)
      tag.addEventListener('click', () => {
        this.minimize = false
        document.querySelector('.v-modal').style.display = null
        tag.remove()
      })
      document.body.append(tag)
    }
  }
}
</script>
