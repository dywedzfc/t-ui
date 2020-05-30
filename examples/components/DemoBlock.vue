<template>
  <div
    class="demo-block"
    :class="[blockClass, { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded"
      ref="control"
    >
      <transition name="arrow-slide">
        <i :class="[iconClass, { hovering: hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      codepen: {
        script: '',
        html: '',
        style: ''
      },
      hovering: false,
      isExpanded: false,
      fixedControl: false
    }
  },
  computed: {
    blockClass() {
      // return `demo-${this.lang}`
      return ``
    },
    iconClass() {
      return this.isExpanded ? 'el-icon-caret-top' : 'el-icon-caret-bottom'
    },
    controlText() {
      return this.isExpanded ? '显示代码' : '隐藏代码'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.demo-block {
  margin-bottom: 20px;
  border: 1px solid #ededed;
  border-radius: 10px;
  transform: 0.2s;

  &:hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 255, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  &-control {
    position: relative;
    height: 44px;
    margin-top: -1px;
    box-sizing: border-box;
    border-top: 1px solid #eaeefb;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    text-align: center;
    color: #d3dce6;
    background-color: #fff;
    cursor: pointer;

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;

      &.hovering {
        transform: translateX(-25px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-15px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }
  }
}
</style>
