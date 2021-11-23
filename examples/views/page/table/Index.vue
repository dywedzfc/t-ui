<template>
  <t-container class="index-wrapper" border>
    <t-header>
      <el-button @click="handleUpdateClick">切换</el-button>
      <el-button @click="handleUpdateClick2">切换2</el-button>
      <el-button @click="handleUpdateClick3">后端分页</el-button>
    </t-header>
    <t-body class="index-body">
      <div class="flex-wrapper" v-if="type == 1">
        <t-table-page
          :loading="table.loading"
          :data="table.data"
          :page-size="table.pageSize"
          :first-page="table.firstPage"
          height="500px"
        >
          <t-table-checkbox fixed />
          <t-table-index />
          <t-table-column
            prop="name"
            width="160"
            :filters="[
              { text: '张三0', value: '张三0' },
              { text: '张三1', value: '张三1' },
              { text: '张三2', value: '张三2' }
            ]"
            :filter-method="filterHandler"
            fixed
          >
            <template #header>
              <el-input value="姓名"></el-input>
            </template>
          </t-table-column>
          <t-table-column prop="username" label="账号" min-width="180" />
          <t-table-column prop="gender" label="性别" min-width="80" />
          <t-table-column prop="duties" label="职务" min-width="140" :formatter="formatterDuties" />
          <t-table-column prop="birthday" label="出生日期" min-width="140" />
          <t-table-column prop="politic" label="政治面貌" min-width="140" />
          <t-table-column prop="education" label="学历" min-width="160" />
          <t-table-column prop="company" label="所属单位" min-width="280" />
          <t-table-operate>
            <template #default="{ row }">
              <t-table-button color="#67C23A" hover-color="#85ce61" @click="handleDetailsClick(row)"
                >详情</t-table-button
              >
              <t-table-button icon="el-icon-edit" />
              <t-table-button icon="el-icon-delete" color="#f56c6c" />
            </template>
          </t-table-operate>
        </t-table-page>
      </div>
      <div class="flex-wrapper" v-else>
        <t-table-page
          :loading.sync="table.loading"
          :data="table.data"
          :real-time-page.sync="table.page"
          :page-size="table.pageSize"
          :page-total="table.total"
          height="500px"
          @current-change="handleTableCurrentChange"
        >
          <t-table-index />
          <t-table-column prop="username" label="用户名" min-width="140px" />
          <t-table-column prop="ip" label="ip地址" min-width="300px" />
          <t-table-column prop="uri" label="请求路径" min-width="300px" />
          <t-table-column
            prop="description"
            label="操作描述"
            min-width="180px"
            :resizable="false"
          />
        </t-table-page>
      </div>
    </t-body>
  </t-container>
</template>

<script>
// import THeader from '../components/Header'
import axios from 'axios'

export default {
  name: 'Table',
  // components: { THeader },
  data() {
    return {
      type: 1,
      table: {
        loading: false,
        data: [],
        page: 1,
        pageSize: 10,
        total: 0,
        firstPage: false
      }
    }
  },
  computed: {},
  mounted() {
    this.handleUpdateClick()
  },
  methods: {
    getSystemLog() {
      const { page, pageSize } = this.table
      axios
        .get('http://192.168.11.238:8095/ibike/user/getUserOperationLog', {
          params: { username: '', stime: '', etime: '', page, pageSize }
        })
        .then(res => {
          this.table.total = res.data.obj.count
          this.table.data = res.data.obj.result
        })
    },

    handleDetailsClick() {
      // console.info(item.name)
    },
    handleUpdateClick() {
      this.type = 1
      const data = []
      this.table.loading = true
      this.table.firstPage = true
      for (let i = 0; i < 100; i++) {
        data.push({
          id: i + 1,
          name: '张三' + i,
          username: '15555555555',
          gender: '男',
          birthday: 1589731200000,
          company: '交通局',
          duties: '6',
          education: '研究生',
          politic: '党员',
          power: '1',
          password: '123456'
        })
      }
      this.table.data = data
      this.table.loading = false
      setTimeout(() => (this.table.firstPage = false))
    },
    handleUpdateClick2() {
      this.type = 1
      const data = []
      this.table.loading = true
      for (let i = 0; i < 80; i++) {
        data.push({
          id: i + 1,
          name: '张三' + i,
          username: '15555555555',
          gender: '男',
          birthday: 1589731200000,
          company: '交通局',
          duties: '6',
          education: '研究生',
          politic: '党员',
          power: '1',
          password: '123456'
        })
      }
      this.table.data = data
      this.table.loading = false
    },
    handleUpdateClick3() {
      this.type = 2
      this.getSystemLog()
    },
    handleTableCurrentChange({ currentPage }) {
      this.table.page = currentPage
      this.getSystemLog()
    },

    formatterDuties(__, ___, value) {
      if (value == 6) return '六号测试'
      return '测试'
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>

<style lang="scss" scoped>
.index-wrapper {
  overflow: auto;
  max-width: 100%;
}
.flex-wrapper {
  font-size: 14px;
}
</style>
