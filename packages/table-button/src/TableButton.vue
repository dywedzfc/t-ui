<template>
  <el-button
    class="tw-table__button"
    :loading="loading"
    :disabled="disabled"
    :icon="icon"
    :autofocus="autofocus"
    type="text"
    :style="{ color }"
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
  }
}
</script>
