<template>
  <t-container class="index-wrapper" border>
    <t-header height="80px">header</t-header>
    <t-container>
      <t-aside width="140px">aside</t-aside>
      <t-body>
        <t-table-page :loading="table.loading" :data="table.data" :page-size="table.pageSize">
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
            <!-- <template v-slot="scope">
              <div>123{{ scope.row }}</div>
            </template> -->
            <template #default="{ row }">
              <t-table-button color="#67C23A" @click="handleDetailsClick(row)">详情</t-table-button>
              <t-table-button icon="el-icon-edit" />
              <t-table-button icon="el-icon-delete" color="#f56c6c" />
            </template>
          </t-table-operate>
        </t-table-page>
      </t-body>
      <t-aside width="100px">aside</t-aside>
    </t-container>
    <t-footer min-height="40px">footer</t-footer>
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
        data: [
          {
            id: 1,
            name: '张三',
            username: '15555555555',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '1',
            password: '123456'
          },
          {
            id: 2,
            name: '张三1',
            username: '16666666666',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '0',
            password: '123456'
          },
          {
            id: 3,
            name: '张三2',
            username: '17777777777',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '0',
            password: '123456'
          },
          {
            id: 4,
            name: '张三3',
            username: '18888888888',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '0',
            password: '123456'
          },
          {
            id: 5,
            name: '张三4',
            username: '19999999999',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '0',
            password: '123456'
          },
          {
            id: 6,
            name: '李四',
            username: '11111111111',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '1',
            password: '123456'
          },
          {
            id: 7,
            name: '李四1',
            username: '12222222222',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '1',
            password: '123456'
          },
          {
            id: 8,
            name: '李四2',
            username: '13333333333',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '1',
            password: '123456'
          },
          {
            id: 9,
            name: '李四3',
            username: '14444444444',
            gender: '男',
            birthday: 1589731200000,
            company: '交通局',
            duties: '6',
            education: '研究生',
            politic: '党员',
            power: '1',
            password: '123456'
          },
          {
            id: 10,
            name: '卓风尘',
            username: '12121212121',
            gender: '女',
            birthday: 1591286400000,
            company: '运管局',
            duties: '6',
            education: '本科',
            politic: '党员',
            power: '1',
            password: '123456'
          },
          {
            id: 13,
            name: '李四',
            username: '15888885555',
            gender: '男',
            birthday: 397411200000,
            company: '运管局',
            duties: '6',
            education: '本科',
            politic: '党员',
            power: '1',
            password: '123456'
          }
        ],
        pageSize: 10
      }
    }
  },
  mounted() {
    this.menu = getMenuList()
  },
  methods: {
    handleDetailsClick(item) {
      console.info(item.name)
    },
    capitalize(value) {
      return value.substring(0, 1).toUpperCase() + value.substring(1)
    }
  }
}
</script>

<style lang="scss" scoped></style>
