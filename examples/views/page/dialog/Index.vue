<template>
  <t-container class="index-wrapper" border>
    <t-body>
      <el-button type="primary" @click="handleShowDialogClick">按钮</el-button>
    </t-body>
    <t-dialog :visible.sync="dialog.display" :title="dialog.title" :minscreen.sync="dialog.min">
      <template #title>{{ dialog.title }}</template>
      <div class="body">我是对话框</div>
    </t-dialog>
  </t-container>
</template>

<script>
export default {
  name: 'Dialog',
  data() {
    return {
      dialog: { display: false, title: '蓝水晶对话框', min: false }
    }
  },
  computed: {},
  mounted() {},
  methods: {
    handleShowDialogClick() {
      if (this.dialog.display && this.dialog.min) this.dialog.min = false
      this.dialog.display = true
    }
  }
}
</script>

<style lang="scss" scoped>
.index {
  &-wrapper {
    width: 100%;
    height: 100%;
  }
  &-left {
    height: 100%;
    // background-color: #eeeeee;
  }
  &-body {
    ::v-deep > div {
      display: flex;
      justify-content: center;
      align-items: center;

      height: 100%;
      font-size: 240px;
    }
  }
}

.body {
  height: 300px;
}
</style>
