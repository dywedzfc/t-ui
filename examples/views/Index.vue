<template>
  <t-container class="index-wrapper" border>
    <t-header height="80px"
      >header
      <el-button @click="handleUpdateClick">切换</el-button>
      <el-button @click="handleUpdateClick2">切换2</el-button>
    </t-header>
    <t-body class="index-body">
      <div class="flex-wrapper">
        <t-table-page
          :loading="table.loading"
          :data="table.data"
          :page-size="table.pageSize"
          :first-page="table.firstPage"
        >
          <t-table-checkbox fixed />
          <t-table-index />
          <t-table-column prop="name" width="160" fixed>
            <template #header>
              <el-input value="姓名"></el-input>
            </template>
          </t-table-column>
          <t-table-column prop="username" label="账号" min-width="180" />
          <t-table-column prop="gender" label="性别" min-width="80" />
          <t-table-column prop="duties" label="职务" min-width="140" />
          <t-table-column prop="birthday" label="出生日期" min-width="140" />
          <t-table-column prop="politic" label="政治面貌" min-width="140" />
          <t-table-column prop="education" label="学历" min-width="160" />
          <t-table-column prop="company" label="所属单位" min-width="280" />
          <t-table-operate>
            <template #default="{ row }">
              <t-table-button color="#67C23A" @click="handleDetailsClick(row)">详情</t-table-button>
              <t-table-button icon="el-icon-edit" />
              <t-table-button icon="el-icon-delete" color="#f56c6c" />
            </template>
          </t-table-operate>
        </t-table-page>
      </div>
    </t-body>
  </t-container>
</template>

<script>
// import THeader from '../components/Header'
import { getMenuList } from '../assets/js/menu'

export default {
  name: 'Index',
  // components: { THeader },
  data() {
    return {
      menu: [],
      table: {
        loading: false,
        data: [],
        pageSize: 10,
        firstPage: false
      }
    }
  },
  mounted() {
    this.menu = getMenuList()
    this.table.data = [
      //   {
      //     id: 1,
      //     name: '张三',
      //     username: '15555555555',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 2,
      //     name: '张三1',
      //     username: '16666666666',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 3,
      //     name: '张三2',
      //     username: '17777777777',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 4,
      //     name: '张三3',
      //     username: '18888888888',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 5,
      //     name: '张三4',
      //     username: '19999999999',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '0',
      //     password: '123456'
      //   },
      //   {
      //     id: 6,
      //     name: '李四',
      //     username: '11111111111',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 7,
      //     name: '李四1',
      //     username: '12222222222',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 8,
      //     name: '李四2',
      //     username: '13333333333',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 9,
      //     name: '李四3',
      //     username: '14444444444',
      //     gender: '男',
      //     birthday: 1589731200000,
      //     company: '交通局',
      //     duties: '6',
      //     education: '研究生',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 10,
      //     name: '卓风尘',
      //     username: '12121212121',
      //     gender: '女',
      //     birthday: 1591286400000,
      //     company: '运管局',
      //     duties: '6',
      //     education: '本科',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   },
      //   {
      //     id: 13,
      //     name: '李四',
      //     username: '15888885555',
      //     gender: '男',
      //     birthday: 397411200000,
      //     company: '运管局',
      //     duties: '6',
      //     education: '本科',
      //     politic: '党员',
      //     power: '1',
      //     password: '123456'
      //   }
    ]
    const data = []
    for (let i = 0; i < 150; i++) {
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
  },
  methods: {
    handleDetailsClick(item) {
      console.info(item.name)
    },
    capitalize(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    },
    handleUpdateClick() {
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
      console.info('data:', data)
      this.table.data = data
      this.table.loading = false
      setTimeout(() => (this.table.firstPage = false))
    },
    handleUpdateClick2() {
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
      console.info('data:', data)
      this.table.data = data
      this.table.loading = false
    },
    formatterDuties(__, ___, value) {
      console.info('data:', __, ___, value)
      if (value == 6) return '六号测试'
      return '测试'
    }
  }
}
</script>

<style lang="scss" scoped></style>
