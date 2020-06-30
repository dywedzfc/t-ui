<template>
  <el-button
    class="tw-table__button"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :autofocus="autofocus"
    type="text"
    :style="{ color }"
    @click="handleTableButtonClick"
  >
    <slot></slot>
  </el-button>
</template>

<script>
export default {
  name: 'TTableButton',
  props: {
    loading: Boolean,
    disabled: Boolean,
    icon: String,
    autofocus: Boolean,
    color: String
  },
  methods: {
    handleTableButtonClick() {
      if (this.$listeners['click']) this.$emit('click')
    }
  }
}
</script>
