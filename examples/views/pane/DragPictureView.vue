<template>
  <div class="page-container">
    <h2>DragPicture 查询面板</h2>
    <p>展示图片的容器，可以进行放大和拖拽操作。</p>
    <h3>DragPicture Attributes</h3>
    <table-props :data="tableAttributes" />
  </div>
</template>

<script>
import TableProps from '../../components/TableProps'
import { attributes } from '../../assets/config/drag-picture.config'

export default {
  name: 'DragPictureView',
  components: { TableProps },
  computed: {
    tableAttributes() {
      return attributes
    }
  }
}
</script>
